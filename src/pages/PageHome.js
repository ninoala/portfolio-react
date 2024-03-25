import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';
import Profile from '../assets/profile.jpg';
import Thumbnail from '../assets/thumbnail.webp';
import ScrollDown from '../components/ScrollDown';
import { Link } from 'react-router-dom';
import FeaturedProject from '../components/FeaturedProject';
import Icon1 from "../assets/icon-1.svg"
import Icon2 from "../assets/icon-2.svg"
import Icon3 from "../assets/icon-3.svg"

function PageHome() {
  return (
    <div id="home">
      <section className="landing">
        <div className="landing-content">

          <h1>Front-End <br /> Web Developer</h1>
          <p>Hi, I’m Yegor Nino, your next web dev hero,
            based in Ottawa, ON. 
          </p>

          <figure>
            <img src={Profile} />
          </figure>

          <div className='tech-stack'>
            Tech Stack | <br />
            <div className="tech-stack-icons">
              <FontAwesomeIcon icon={faHtml5} /> 
              <FontAwesomeIcon icon={faCss3Alt} /> 
              <FontAwesomeIcon icon={faJs} /> 
              <FontAwesomeIcon icon={faReact} /> 
              <FontAwesomeIcon icon={faWordpressSimple} /> 
              <FontAwesomeIcon icon={faPhp} />
              <FontAwesomeIcon icon={faShopify} />
            </div>
          </div>

          <ScrollDown />

          <Link to="/works" className="btn">View My Projects</Link>

        </div>
      </section>
      <section className="home-about">

        <h2>One Pixel At A Time</h2>

        <p>I have a strong passion for the ever-evolving landscape of web technology, which drives me to continuously learn and implement the latest trends in front-end development. My expertise lies in creating responsive, accessible, and fast-loading websites, ensuring a seamless experience across all devices and platforms.</p>
        <div className="principles-container">
          <figure>
            <img src={Icon1} />
            <figcaption>User-Centric Design</figcaption>
          </figure>
          <figure>
            <img src={Icon2} /> 
            <figcaption>Security</figcaption>
          </figure>
          <figure>
          <img src={Icon3} /> 
            <figcaption>Perfomance and Optimization</figcaption>
          </figure>
        </div>
      </section>
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="featured-projects-container">
          <FeaturedProject 
            name="Project One"
            image={Thumbnail}
            description="Short description of Project One."
            link="/project-one"
          />
          <FeaturedProject 
            name="Project Two"
            image={Thumbnail}
            description="Short description of Project Two."
            link="/project-two"
          />
          <FeaturedProject 
            name="Project Three"
            image={Thumbnail}
            description="Short description of Project Three."
            link="/project-three"
          />
        </div>
        <Link to="/works" className="btn">View My Projects</Link>
      </section>
    </div>
  )
}

export default PageHome