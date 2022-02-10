import React from 'react';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si';
import '../../styles/Contact.css';
import Input from '../Input/Input';

function Contact() {
  return (
    <section
      id="contact"
      className="contact-compo"
      style={{ backgroundImage: `url('/img/contact-bg.png')` }}
    >
      <div className="container">
        <h2>Contact</h2>
        <p className="mb-5">
          If you have any questions or want to work together, please feel free
          to contact .
        </p>

        <div className="form">
          <div className="row">
            <div className="col-md-6 mb-3">
              <Input type="text" placeholder="Name" />
            </div>
            <div className="col-md-6 mb-3">
              <Input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input type="textarea" placeholder="Message" />
            </div>
          </div>
          <div>
            <button className="btn mt-3">Send message</button>
          </div>
        </div>

        <div className="links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/moniruzzamansaikat/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/moniruzzamansaikat"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/moniruzzaman.saikat/"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/m__saikat"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/saikat.saikim"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
