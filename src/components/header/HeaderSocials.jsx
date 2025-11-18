import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from "react-icons/bs"
import {SiFiverr} from "react-icons/si"
import "./header.css"

function HeaderSocials() {
  return (
    <div className='header__socials' >
     <a href="https://www.linkedin.com/in/boukharouba-yahia-68bb52222" target="_blank" > <BsLinkedin/> </a>
     <a href="https://github.com/YahiaXXX" target="_blank" > <BsGithub/> </a>
     {/* <a href="https://dribbble.com" target="_blank" > <BsDribbble/> </a> */}
     {/* <a href="https://www.fiverr.com/yahia1412" target="_blank" className='fiverr' > <SiFiverr/> </a> */}

 

    </div>
  )
}

export default HeaderSocials