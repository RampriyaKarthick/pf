import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

function TopContent() {
  return (
    <div className="topContent">
        <div className='topContent__container'>
        <h1>Rampriya Karthick</h1>
 <p> Full Stack Web Developer</p>
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
  )
}

export default TopContent