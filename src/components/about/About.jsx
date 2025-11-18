import React from "react";
import "./about.css";
import port from "../../assets/yahia.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={port} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>Computer Science Engineer</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+2 Years</small>
            </article>

            
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+30 Project</small>
            </article>
          </div>
          <p>
          Ambitious and self-motivied person, Web developer with a good level of experience due to working on many projects.
          HELLO
          </p>

          <a className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
