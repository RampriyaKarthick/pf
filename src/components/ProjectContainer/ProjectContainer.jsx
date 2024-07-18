import React from "react";
import HeroSnail from "../../assets/Snail Life.png";
import Habitsu from "../../assets/Habitsu (4).png";
import DealZone from "../../assets/Deal (2).png";
import rug from "../../assets/rug.png";
import logo from "../../assets/logo.png";
import snake from "../../assets/snake.jpeg";
import booki from "../../assets/booki.png";
import kasa from "../../assets/kasa.png"
import menucard from "../../assets/menucard.jpeg"
import Sophie from "../../assets/Sophie-bluel.png"
import nina from "../../assets/nina.png"
import grimoire from "../../assets/grimoire.jpeg"
import qwenta from "../../assets/qwenta.jpeg"
import maisonjungle from "../../assets/maisonjungle.png"
import { Element } from "react-scroll";
import Projects from "../Projects/Projects";
import "./ProjectsContainer.css"

function ProjectContainer() {
  const projects = [
    {
      img:qwenta,
      title: "Qwenta",
      desc: "A project that facilitates in planning a website development for client - OpenclassRoom",
      link: "https://gold-milkshake-ab5.notion.site/Qwenta-Menu-maker-1b38f975662b4f258e21a24ce5f2c44f",
    },
    {
      img:grimoire,
      title: "Mon Vieux Grimoire",
      desc: "An app to share reviews, create ,update, read and update books -OpenclassRoom",
      link: "https://github.com/RampriyaKarthick/P7-backend",
    },
    {
      img:kasa,
      title: "Kasa",
      desc: "A react design app for immobiliere to find the logements-OpenclassRoom",
      link: "https://github.com/RampriyaKarthick/Kasa",
    },
    {
      img:nina,
      title: "NinaCarducci",
      desc: "A practice app for SEO tools- OpenclassRoom",
      link: "https://github.com/RampriyaKarthick/Ninacarducci",
    },
    {
      img:Sophie,
      title: "Portfolio Architecte Sophie-bluel",
      desc: "A project to practice javascript skills during my training in openclassrooms",
      link: "https://github.com/RampriyaKarthick/Portfolio-architecte-sophie-bluel",
    },

    {
      img: booki,
      title: "Booki",
      desc: "A simple practice booking app design using html and css which is fully responsive designed as part of the project during my training in openclassrooms",
      link: "https://bookinnn.netlify.app/",
    },
    {
      img:maisonjungle,
      title: "La_Maison_Jungle",
      desc: "A practice react ecommerce app for buying plants",
      link: "https://github.com/RampriyaKarthick/La-Maison-Jungle",
    },
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
    {
      img: rug,
      title: "RandomUserGenerator",
      desc: "A simple frontend react website that generates random user ",
      link: "https://fantastic-sprite-f6dde3.netlify.app/",
    },
    {
      img:menucard,
      title: "Menu Card",
      desc: "A simple practice menucard design using html and css which is fully responsive",
      link: "https://gorgeous-kulfi-2b5e1c.netlify.app/",
    },
    {
      img: logo,
      title: "Bob_Photograpgy",
      desc: "A simple practice portfolio design using html and css which is fully responsive",
      link: "https://darling-starlight-fa682d.netlify.app/",
    },
   
    {
      img: snake,
      title: "SnakeGame",
      desc: "Game that always makes us feel Nostalgic",
      link: "https://rampriyakarthick.github.io/snakegame/",
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
