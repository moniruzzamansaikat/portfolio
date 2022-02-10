import React, { useRef, useEffect } from 'react';
import { FaBook } from 'react-icons/fa';
import '../../styles/About.css';

function About() {
  return (
    <section
      className="about-compo"
      id="about"
      style={{ backgroundImage: `url('/img/hero-bg.png')` }}
    >
      <header>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-5 content" data-aos="fade-right">
              <h1>
                Saikat is a <span>fullstack</span> web developer.
              </h1>
              <p>
                I am a fullstack web developer with a passion for building
                beautiful and functional web applications.
              </p>
              <a
                href="https://drive.google.com/file/d/1OcnTIKDamV--LJKrK_eDZS8WoPYxMDN2/view"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>Resume</span>
                <FaBook className="ms-2 me-0" />
              </a>
            </div>
            <div
              className="col-md-7 text-center order-first order-md-last about"
              data-aos="fade-left"
              style={{ backgroundImage: `url('/img/programmer.svg')` }}
            ></div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default About;
