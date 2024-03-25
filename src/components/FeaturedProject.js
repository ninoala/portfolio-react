import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProject = ({ name, image, description, link }) => {
    return (
        <div className="featured-project">
            <Link to={link}>
                <img src={image} alt={name} />
                <div className='featured-project-text'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default FeaturedProject;