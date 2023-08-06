import React from "react";
import HeroSnail from "../../assets/Snail Life.png";
import Habitsu from "../../assets/Habitsu (4).png";
import DealZone from "../../assets/Deal (2).png";
import { Element } from "react-scroll";
import Projects from "../Projects/Projects";
import "./ProjectsContainer.css"

function ProjectContainer() {
  const projects = [
    {
      img: HeroSnail,
      title: "Snail_Life",
      desc: "I've built my very own game called Snail_Life!.",
      link: "https://rampriyakarthick.github.io/SNAIL_LIFE/",
    },
    {
      img: Habitsu,
      title: "Habitsu",
      desc: "This is a Habit tracking app, worked in a team of three to build this lifestyle app.This app uses MEN technology",
      link: "https://habitsu.adaptable.app/",
    },
    {
      img: DealZone,
      title: "Deal Zone",
      desc: "Full-stack react ecommerce website with a game-changing twist: a price negotiation feature! ",
      link: "https://dealzon.netlify.app/",
    },
  ];
  return (
    <Element className="projectContainer" id="project">
      <h1> Projects </h1>
      <p>
        {" "}
        Here are some projects I have worked on.
        
        "Every great oak was once a little nut that stood its ground".
         More projects are on the way!
      </p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Projects
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
}

export default ProjectContainer;
