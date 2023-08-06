import React, { useState } from 'react';
import "./Projects.css"

function Projects({img, title, desc, link}) {
    const [show, setShow] = useState(false);

    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    return (
        <a href={link}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {
                show? (
                    <div>
                        <h4>
                           {title}
                        </h4>
                        <p>{desc}</p>
                    </div>
                ):(
                    <img src={img} alt="" />
                )
              } 
            </div>
        </a>
    );
}

export default Projects;
