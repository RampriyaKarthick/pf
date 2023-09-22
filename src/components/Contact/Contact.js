import React from "react";
import { Element } from "react-scroll";
import { GitHub, LinkedIn } from '@mui/icons-material';
import "./Contact.css"; // Adjust the import path for your CSS file

function Contact() {
  return (
    <div>
  <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact__container">
    <p>
    Email: <span>
     rampriya.karthick@gmail.com
    </span>
   
   </p>
   <p>
    or
   </p>
  <p>
  Click to email directly: <span><a href="mailto:rampriya.karthick@gmail.com"><span>rampriya.karthick@gmail.com</span></a></span>
  </p>

      <p>
        GitHub Username: <span>RampriyaKarthick</span>
      </p>
      <div className="contact__icons">
        <a href="https://github.com/RampriyaKarthick">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/rampriya-karthick/">
          <LinkedIn />
        </a>
      </div>
    </div>
  </Element>
</div>

  );
}

export default Contact;
