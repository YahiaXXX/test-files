import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/bloog.png"
import IMG2 from "../../assets/bank.png"
import IMG3 from "../../assets/delivery.png"
import IMG4 from "../../assets/wab3.png"
import IMG5 from "../../assets/realestate.png"
import IMG6 from "../../assets/youtube.png"
import IMG7 from "../../assets/musicPlayer.png"
import IMG8 from "../../assets/talnet.png"
import IMG9 from "../../assets/tourism.png"
import IMG10 from "../../assets/ecommerce2.png"
import IMG11 from "../../assets/dashboard.png"
import IMG12 from "../../assets/photography-min.png"
import IMG13 from "../../assets/wetransfer-min.png"
import PortfolioCard from "./PortfolioCard"
import {BsGithub} from "react-icons/bs"

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
      <PortfolioCard 
        url={IMG12} 
        github="https://github.com/YahiaXXX/Dashboard"
        demo="https://www.vsnapu.com/"
        title="VsnapU"
        />
       <PortfolioCard 
        url={IMG13} 
        github="https://github.com/YahiaXXX/Dashboard"
        demo="https://wetransfer.com/"
        title="wetransfer : website for sharing data"
        />
        <PortfolioCard 
        url={IMG2} 
        github="https://github.com/YahiaXXX/bank-website"
        demo="https://endearing-madeleine-8c4d92.netlify.app"
        title="HooBank : Bank website interface"
        />
         <PortfolioCard 
        url={IMG3} 
        github="https://github.com/YahiaXXX/delivery_react_app"
        demo="https://moonlit-travesseiro-dbeafe.netlify.app"
        title="Delivery web application interface"
        />
        <PortfolioCard 
        url={IMG4} 
        github="https://github.com/YahiaXXX/Web3-Blockchain-application"
        demo="https://astounding-meerkat-46f880.netlify.app/"
        title="A Web3.0 Ethereum Blockchain app"
        />
        <PortfolioCard 
        url={IMG5} 
        github="https://github.com/YahiaXXX/Realestate-web"
        demo="https://realestate-self.vercel.app/"
        title="Realestate Platform"
        />
        <PortfolioCard 
        url={IMG6} 
        github="https://github.com/YahiaXXX/youtube-clone"
        demo="https://storied-sprinkles-bf3eee.netlify.app"
        title="Video Player application"
        />
         <PortfolioCard 
        url={IMG7} 
        github="https://github.com/YahiaXXX/Music-Player"
        demo="https://dainty-scone-5cde7f.netlify.app"
        title="Music Player application"
        />
         <PortfolioCard 
        url={IMG8} 
        github="https://github.com/YahiaXXX/Talnet"
        demo="https://resonant-meerkat-c85c02.netlify.app"
        title="Talnet: Hiring Talents website "
        />
        <PortfolioCard 
        url={IMG1} 
        github="https://github.com/YahiaXXX/Articles-blog"
        demo="https://blog-y8xg.vercel.app/"
        title="Blog Application"
        />
         <PortfolioCard 
        url={IMG9} 
        github="https://github.com/YahiaXXX/"
        demo="https://amirtour.netlify.app/"
        title="AmirTour : Tourism agency website"
        />
         <PortfolioCard 
        url={IMG10} 
        github="https://github.com/YahiaXXX/"
        demo="https://bgh-ecommerce.netlify.app/"
        title="Buy-it : Ecommerce website"
        />
        <PortfolioCard 
        url={IMG11} 
        github="https://github.com/YahiaXXX/Dashboard"
        demo="https://ornate-bubblegum-278e79.netlify.app"
        title="Modern Dashboard"
        />

       
        
      </div>
      <div className="gitlien" >
        <a href="https://github.com/YahiaXXX?tab=repositories" rel="noreferrer" target="_blank" >Check the Github to see other projects <BsGithub/> </a>
      </div>
    </section>
  );
}

export default Portfolio;
