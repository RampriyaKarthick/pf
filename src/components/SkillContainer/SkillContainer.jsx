import React from 'react'
import { Element } from 'react-scroll'
import sill1 from "../../assets/sill1.webp"
import { LinearProgress } from '@mui/material'
import "./SkillContainer.css"

function SkillContainer() {
  return (
   <Element className="skillContainer" id="skills">
   <div className="skillContainer__image">
   <img src={sill1} alt=""/>
   </div>
   <div className='skillContainer__text'>
    <h2>SKILLSET</h2>
    <div className="skillContainer__skillSet">
        <h5>HTML 5</h5>
        <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={85}  />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>CSS 3</h5>
        <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={80} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>JavaScript ES6</h5>
        <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={90} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>React</h5>
        <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={90} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>Nodejs</h5>
        <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={75} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>MongoDB</h5>
        <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={75} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>Express</h5>
        <div className="skillContainer__slider skillContainer__slider7">
            <LinearProgress variant="determinate" value={75} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>SEO</h5>
        <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={70} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>Agile</h5>
        <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={80} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>SASS</h5>
        <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={80} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>Bootstrap</h5>
        <div className="skillContainer__slider skillContainer__slider8">
            <LinearProgress variant="determinate" value={60} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>Tailwind CSS</h5>
        <div className="skillContainer__slider skillContainer__slider9">
            <LinearProgress variant="determinate" value={65} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>Canva</h5>
        <div className="skillContainer__slider skillContainer__slider10">
            <LinearProgress variant="determinate" value={70} />
        </div>
       </div>
       <div className="skillContainer__skillSet">
        <h5>GitHub</h5>
        <div className="skillContainer__slider skillContainer__slider11">
            <LinearProgress variant="determinate" value={80} />
        </div>
       </div>
   </div>
   </Element>
  )
}

export default SkillContainer