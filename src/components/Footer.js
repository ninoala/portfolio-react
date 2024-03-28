import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
        <svg viewBox="0 0 17280 160" preserveAspectRatio="none" style={{ width: '100%', height: '50px',  }}>
            <g transform="rotate(180 8640 80)">
                <path fill="currentColor" d="M0,0 L0,160 L17280,160 L17280,0 C14460 80, 11520 160, 8640 160 C5760 160, 2880 80, 0 0 Z" ></path>
            </g>
        </svg>

        <h2>Get In Touch</h2>
        <p>
            I'm ready for challenges and opportunities. 
            Please send me an email if you want to chat with me.
        </p>

        <div class="footer-buttons">
        <Link to="/works" className="btn btn-warning">Email Me</Link>
        <Link to="/works" className="btn btn-warning">Contact Form</Link>
        </div>

        <div class="social-media">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />   
            </a>
            <a href="mailto:yegor.nino@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>

        <p className='trademark'>&copy;2024 Yegor Nino</p>
    </footer>
  )
}

export default Footer