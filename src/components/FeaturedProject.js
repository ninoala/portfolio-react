import React from 'react';
import { Link } from 'react-router-dom';
import '../FeaturedProject.css';

const FeaturedProject = ({ name, image, description, link }) => {
    return (
        <Link to={link} className="featured-project">
            <div className="project-image">
                <img src={image} alt={name} />
            </div>
            <div className="project-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default FeaturedProject;