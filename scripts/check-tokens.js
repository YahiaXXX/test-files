const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Configuration
const WARNING_DAYS = 7; // number of days before expiration to trigger alert
const filesToCheck = ['.env', 'config.js']; // add any files where tokens might exist
const tokenPattern = /([A-Za-z0-9_\-]{20,})/g; // crude token regex
const commentPattern = /#\s*expires:\s*(\d{4}-\d{2}-\d{2})/; // for inline expiration comments

// Environment variable names to check
const envTokens = ['API_KEY', 'SECRET_TOKEN', 'JWT_TOKEN']; 

function checkFile(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const alerts = [];

    lines.forEach(line => {
        const tokenMatch = line.match(tokenPattern);
        if (tokenMatch) {
            const dateMatch = line.match(commentPattern);
            if (dateMatch) {
                const expDate = new Date(dateMatch[1]);
                const diffDays = (expDate - new Date()) / (1000*60*60*24);
                if (diffDays <= WARNING_DAYS) {
                    alerts.push({ token: tokenMatch[0], source: filePath, expires: dateMatch[1] });
                }
            } else {
                // try decode as JWT
                tokenMatch.forEach(t => {
                    if (t.split('.').length === 3) {
                        try {
                            const payload = JSON.parse(Buffer.from(t.split('.')[1], 'base64').toString());
                            if (payload.exp) {
                                const expDate = new Date(payload.exp * 1000);
                                const diffDays = (expDate - new Date()) / (1000*60*60*24);
                                if (diffDays <= WARNING_DAYS) {
                                    alerts.push({ token: t, source: filePath, expires: expDate.toISOString() });
                                }
                            }
                        } catch {}
                    } else {
                        alerts.push({ token: t, source: filePath, expires: "unknown" });
                    }
                });
            }
        }
    });

    return alerts;
}

function checkEnvTokens() {
    const alerts = [];
    envTokens.forEach(name => {
        const value = process.env[name];
        if (value) {
            if (value.split('.').length === 3) { // JWT
                try {
                    const payload = JSON.parse(Buffer.from(value.split('.')[1], 'base64').toString());
                    if (payload.exp) {
                        const expDate = new Date(payload.exp * 1000);
                        const diffDays = (expDate - new Date()) / (1000*60*60*24);
                        if (diffDays <= WARNING_DAYS) {
                            alerts.push({ tokenName: name, source: 'env', expires: expDate.toISOString() });
                        }
                    }
                } catch {}
            } else {
                alerts.push({ tokenName: name, source: 'env', expires: "unknown" });
            }
        }
    });
    return alerts;
}

// Main
let allAlerts = [];
filesToCheck.forEach(f => { allAlerts = allAlerts.concat(checkFile(f)); });
allAlerts = allAlerts.concat(checkEnvTokens());

if (allAlerts.length > 0) {
    console.log("Tokens near expiration:", allAlerts);

    // Send email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: '⚠️ Token Expiration Alert',
        text: JSON.stringify(allAlerts, null, 2)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
        else console.log('Email sent: ' + info.response);
    });

} else {
    console.log("No tokens near expiration.");
}
