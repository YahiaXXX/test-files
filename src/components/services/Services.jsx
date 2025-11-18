import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

function Services() {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='serv_con services__container' >
       
        <article className="service">
          <div className='service__head' >
            <h1>Web Development</h1>
          </div>
          <ul className='service__list' >
                    <li>
              <BiCheck className='service__list-icon' />
              <p>ReactJS , NextJS Developement from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>App Migration to ReactJS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML5 Developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS3 Developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross Browser Developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Management System Developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimisation Services</p>
            </li>

          </ul>

        </article>
        
      </div>
    </section>
  )
}

export default Services