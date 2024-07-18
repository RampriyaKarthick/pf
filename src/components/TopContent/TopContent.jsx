import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';

import "./TopContent.css";

const roles = [
  "Full Stack Web Developer",
  "FrontEnd Developer",
  "Dynamic Developer",
  "Back-End Engineer",
  "MERN Stack Developer",
  "Problem Solver",
  "JavaScript Enthusiast",
];

function TopContent() {

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="topContent">
      <div className='topContent__container'>
        
        <h1>Rampriya Karthick</h1>
        <p>{roles[currentRoleIndex]}</p>
        <div className="xxx">
        <a href="https://drive.google.com/file/d/1ey6mdVLwL1bnirTuJHM-C-rmNFlxP8rA/view?usp=sharing">
          <button className="topContent__downloadButton">
            Download CV
          </button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="topContent__workButton">My work</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
