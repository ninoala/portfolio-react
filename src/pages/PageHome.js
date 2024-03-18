import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';
import Profile from '../assets/profile.jpg';
import Thumbnail from '../assets/thumbnail.webp';
import ScrollDown from '../components/ScrollDown';
import { Link } from 'react-router-dom';
import FeaturedProject from '../components/FeaturedProject';

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
            <Link to="/works" className="btn">View My Projects</Link>
          </div>
          <figure>
            <img src={Profile} />
          </figure>
        </div>
        <ScrollDown />
      </section>
      <section className="home-about">
        <h2>One Pixel At A Time</h2>
        <p>A self-motivated front-end developer with hands-on project experiences designing and building websites from scratch. My goal is to build websites with both visually appealing and user experience-oriented functionality. More about me here.</p>

        <p>I have a strong passion for the ever-evolving landscape of web technology, which drives me to continuously learn and implement the latest trends in front-end development. My expertise lies in creating responsive, accessible, and fast-loading websites, ensuring a seamless experience across all devices and platforms. With a keen eye for design and detail, I strive to deliver projects that exceed client expectations while meeting deadlines and budget requirements. Collaboration and communication are key to my workflow, as I believe that the best results are achieved when ideas are shared and refined together.</p>
        <div className="principles-container">
          <figure>
            <img src={Thumbnail} />
            <figcaption>User-Centric Design</figcaption>
          </figure>
          <figure>
            <img src={Thumbnail} />
            <figcaption>Security</figcaption>
          </figure>
          <figure>
            <img src={Thumbnail} />
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
          <Link to="/works" className="projects-btn">View My Projects</Link>
      </section>
    </div>
  )
}

export default PageHome