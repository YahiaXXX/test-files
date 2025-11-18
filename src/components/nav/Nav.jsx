import React,{useState,useContext} from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {Link} from "react-scroll"
import { NavContext } from '../../context/NavContext'





function Nav() {
  const {nav,setNav} = useContext(NavContext);
  
  return (
    <nav>
      <a className={nav==="#" ? "active"  : "" } onClick={()=>{setNav("#"); document.getElementById("#").scrollIntoView({ behavior: "smooth" })}}>
        <AiOutlineHome/>
      </a>
      <a className={nav==="#about" ? "active"  : "" } onClick={()=>{setNav("#about"); document.getElementById("about").scrollIntoView({ behavior: "smooth" })}}>
        <AiOutlineUser/>
      </a>
      <a className={nav==="#experience" ? "active"  : "" } onClick={()=>{setNav("#experience"); document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}}>
        <BiBook/>
      </a>
      <a className={nav==="#services" ? "active"  : "" } onClick={()=>{setNav("#services"); document.getElementById("services").scrollIntoView({ behavior: "smooth" })}}>
        <RiServiceLine/>
      </a>
      <a className={nav==="#contact" ? "active"  : "" } onClick={()=>{setNav("#contact"); document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}} >
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}

export default Nav