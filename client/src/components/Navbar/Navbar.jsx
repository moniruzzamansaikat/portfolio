import React, { useEffect } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/Navbar.css'

function Navbar() {
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    })
  }, [location.pathname])

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    let current = null

    window.onscroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const navLinks =
          document.querySelectorAll('.nav-link')

        if (window.pageYOffset >= sectionTop - 120) {
          current = section.getAttribute('id')
        }

        navLinks.forEach((link) => {
          link.classList.remove('active')
          const path = link.getAttribute('href').slice(1)

          if (path === current) {
            link.classList.add('active')
          }
        })
      })
    }
  }, [location])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Sai<span>kim</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiOutlineMenuAlt3 />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn px-4 ms-2"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
