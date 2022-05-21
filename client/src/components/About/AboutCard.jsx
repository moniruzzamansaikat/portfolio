import React from 'react'
import FreelanceCard from './FreelanceCard'
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'
import '../../styles/AboutCard.css'

function AboutCard() {
  return (
    <div className="about_card mt-3">
      <h2>Hire Me</h2>
      <p>
        Currently I am taking a lot of freelance projects
        and I am looking only for remote works not in the
        office. Please contact me if you are interested in
        my work.
      </p>
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
      <FreelanceCard
        icon={
          <AiOutlineMail
            style={{
              fill: '#000',
              fontSize: '1.4rem',
            }}
          />
        }
        color="limegreen"
        site="Mail Me"
        url="mailto:freelancer.saikim@gmail.com"
      />
    </div>
  )
}

export default AboutCard
