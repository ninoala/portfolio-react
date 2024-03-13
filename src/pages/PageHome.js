import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';
import Profile from '../assets/profile.jpg';
import ScrollDown from '../components/ScrollDown';

function PageHome() {
  return (
    <div id="home">
      <section className="landing">
        <div className="landing-wrapper">
          <div className="landing-text">
            <h1>Front-End Web <br /> Developer</h1>
            <p>Hi, I’m Yegor Nino, your next web dev hero, <br /> 
    based in Ottawa, ON. </p>
            <span className='tech-stack'>
              Tech Stack | 
              <span className="tech-stack-icons">
                <FontAwesomeIcon icon={faHtml5} /> 
                <FontAwesomeIcon icon={faCss3Alt} /> 
                <FontAwesomeIcon icon={faJs} /> 
                <FontAwesomeIcon icon={faReact} /> 
                <FontAwesomeIcon icon={faWordpressSimple} /> 
                <FontAwesomeIcon icon={faPhp} />
                <FontAwesomeIcon icon={faShopify} />
              </span>
            </span>
          </div>
          <figure>
            <img src={Profile} />
          </figure>
        </div>
        <ScrollDown />
      </section>
    </div>
  )
}

export default PageHome