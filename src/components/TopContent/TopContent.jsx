import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import ProfilePhoto from "../../assets/profile.jpg";
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
        <div className="topContent__profilePhotoContainer">
          <img src={ProfilePhoto} alt="Profile" className="topContent__profilePhoto" />
        </div>
        <h1>Rampriya Karthick</h1>
        <p>{roles[currentRoleIndex]}</p>
        <a href="https://drive.google.com/file/d/1kYILm_hExRR_ScbluNWEk_hp-Lt5gBhh/view?usp=sharing">
          <button className="topContent__downloadButton">
            Download CV
          </button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="topContent__workButton">My work</button>
        </Link>
      </div>
    </div>
  );
}

export default TopContent;
