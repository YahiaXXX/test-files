import React from 'react'
import CV from "../../assets/CV2.pdf"

function CTA() {
  return (
    <div className='cta' >
        <a href={CV} download className='btn' >Download CV</a>
        <a href="#contact" className='btn btn-primary' >Message me</a>
    </div>
  )
}

export default CTA