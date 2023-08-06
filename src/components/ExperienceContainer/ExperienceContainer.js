import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css"

function ExperienceContainer() {
  return (
    <Element className="experienceContainer" id="exp">
      <h1 className="expe">Experience</h1>
      <div className="experienceContainer__info">
      <Experience number="3" title="Hands-on Learning projects" style={{ backgroundColor: "#6b874c", color:"#bae1aa" }} />
      <Experience number="+1" title="year as Creative Designer, Creative Tool Canva(Self-Employed)" />
      <Experience number="1" title="year as Apprentice trainee teacher." />
        <Experience number="1.5" title="years as Business Assistant(Self-Employed)." />
    </div>
    </Element>
  );
}

export default ExperienceContainer;
