import '../stuff/sidebar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
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
  )
}

export default Sidebar