import React, { useRef,useEffect,useState } from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine,RiWhatsappLine} from "react-icons/ri"
import emailjs from '@emailjs/browser';
import Loader from './Loader';

function Contact() {
  const tmp = process.env.REACT_APP_EMAIL_JS_TEMPLATE
  const serv = process.env.REACT_APP_EMAIL_JS_SERVICE
  const key = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
  const form = useRef()
  const [loading,setLoading]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
       serv,
        tmp ,
         form.current ,
         key)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setLoading(false)
      }, (error) => {
          console.log(error.text);
          e.target.reset()
          setLoading(false)
      });
  };
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container' >
        <div className='contact__options' >
          <article className='contact__option' >
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>y.boukharouba@esi-sba.dz</h5>
            <a href="mailto:y.boukharouba@esi-sba.dz" target="_blank">Send a message</a>

          </article>
          <article className='contact__option' >
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Ya Hia</h5>
            <a href="https://m.me/boukhyahia"  target="_blank" >Send a message</a>

          </article>
          <article className='contact__option' >
            <RiWhatsappLine className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+213 795777482</h5>
            <a href="https://api.whatsapp.com/send?phone=+213795777482" target="_blank"  >Send a message</a>

          </article>

        </div>
        <form ref={form} onSubmit={sendEmail} data-testid="contact-form"  >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
          <div className='btn-loader' >
          <button type='submit' className='btn btn-primary' >Send Message</button>
            {loading && <Loader/> }  

          </div>
          

        </form>

      </div>
    </section>
  )
}

export default Contact