// Projects.js
import React, { useState } from 'react';
import './Projects.css';

function Projects({ img, title, desc, link }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href={link} className="project-link">
      <div
        className={`project-card ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={img} alt="" className="project-image" />
        <div className="project-details">
          <h4>{title}</h4>
          {hovered && <p>{desc}</p>}
        </div>
      </div>
    </a>
  );
}

export default Projects;
