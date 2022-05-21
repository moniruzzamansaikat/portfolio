import React from 'react'
import { FaBook } from 'react-icons/fa'
import AboutCard from './AboutCard'
import '../../styles/About.css'

function About() {
  return (
    <section className="about-compo" id="about">
      <header>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div
              className="col-md-7 content"
              data-aos="fade-right"
            >
              <h1>
                Hey I'm a <span>fullstack</span> web
                developer.
              </h1>
              <p>
                I am a fullstack web developer with a
                passion for building beautiful and
                functional web applications.
              </p>
              <a
                href="https://drive.google.com/file/d/1MTAa8gF9swAYq8cXtxewZUG8GykngyOW/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>Resume</span>
                <FaBook className="ms-2 me-0" />
              </a>
            </div>
            <div className="col-md-5" data-aos="fade-left">
              <AboutCard />
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default About
