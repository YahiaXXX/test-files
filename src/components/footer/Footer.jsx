import React,{useContext} from 'react'
import "./footer.css"
import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa"
import {NavContext} from "../../context/NavContext"

function Footer() {
  const {nav,setNav} = useContext(NavContext);
  return (
    <footer>
      <a href="#" className='footer__logo' >YAHIA BOUKHAROUBA</a>
      <ul className='permalinks' >
        <li> <a onClick={()=> {document.getElementById("#").scrollIntoView({ behavior: "smooth" });setNav("#")}} >Home</a> </li>
        <li> <a onClick={()=> {document.getElementById("about").scrollIntoView({ behavior: "smooth" });;setNav("#about")}}>About</a> </li>
        <li> <a onClick={()=> {document.getElementById("experience").scrollIntoView({ behavior: "smooth" });;setNav("#experience")}}>Experience</a> </li>
        <li> <a onClick={()=> {document.getElementById("services").scrollIntoView({ behavior: "smooth" });;setNav("#services")}}>Services</a> </li>
        <li> <a onClick={()=> document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>Portfolio</a> </li>
        <li> <a onClick={()=> {document.getElementById("contact").scrollIntoView({ behavior: "smooth" });setNav("#contact")}}>Contact</a> </li>
      </ul>
      <div className='footer__socials' >
        <a href="https://facebook.com" target="_blank" > <FaFacebookF/> </a>
        <a href="https://instagram.com" target="_blank"> <FaInstagram/> </a>
        <a href="https://twitter.com" target="_blank"> <FaTwitter/> </a>
      </div>
      <div className='footer__copyright' >
        <small>&copy; YAHIA BOUKHAROUBA. all rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer