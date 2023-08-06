import React from 'react'
import HeroSnail from "../../assets/HeroSnail.png"
import Habitsu from "../../assets/Habitsu (4).png"
import DealZone from "../../assets/Deal (2).png"
import { Element } from 'react-scroll'


function ProjectContainer() {
    const client_projects = [
        {
            img: HeroSnail,
            title:"Snail_Life",
            desc:"I've built my very own game called Snail_Life!.",
            link:"https://rampriyakarthick.github.io/SNAIL_LIFE/"


        },
        {
            img: Habitsu,
            title:"Habitsu",
            desc:"This is a Habit tracking app, worked in a team of three to build this lifestyle app.This app uses MEN technology",
            link:"https://habitsu.adaptable.app/"


        },
        {
            img: DealZone,
            title:"Deal Zone",
            desc:"Full-stack react ecommerce website with a game-changing twist: a price negotiation feature! ",
            link:"https://dealzon.netlify.app/"

        }
    ]
  return (
    <Element className="projectContainer" id="project">
<h1> Projects </h1>
<p> "Every great oak was once a little nut that stood its ground".Here are some projects I have worked on. More projects are on the way!</p>
    <div className="projectContainer__projects">

    </div>
    </Element>
  )
}

export default ProjectContainer