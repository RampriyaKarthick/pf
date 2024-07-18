import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css"

function ExperienceContainer() {
  return (
    <Element className="experienceContainer" id="exp">
      <h1 className="expe">Experience</h1>
      <div className="experienceContainer__info">
      <Experience number="12+" title="Hands-on Learning projects monitored and validated by mentors and evaluators " style={{ backgroundColor: "#6b874c", color:"#bae1aa" }} />
      <Experience number="+1" title=" year learning experience in web development technologies" />
      <Experience number="1" title="year Apprentice trainee teacher" />
      <Experience number="1.5" title="years Business Assistant(Self-Employed)" />
    </div>
    </Element>
  );
}

export default ExperienceContainer;
