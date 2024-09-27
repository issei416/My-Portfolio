// components/About.jsx
import React from "react";
import "../Styles/About.css"; // Optional: Add custom styles for the About section
import linkedin from "../assets/linkedin-icon-48.png";
import github from "../assets/github-icon-48.png";
import gmail from "../assets/gmail-icon-48.png";
import instagram from "../assets/instagram-icon-48.png";
import ParticlesComponent from "./ParticlesComponent.jsx";

const About = () => {
  return (
    <section
      id="about"
      className="about-section container d-flex align-items-center"
    >
      <ParticlesComponent id="particles" />
      <div className="col-12 text-white d-flex flex-column align-items-center justify-content-center text-center">
        <p className="about-name">
          <h1 className="about-greet text-md-start">HI I'M</h1>Mukeshkhanna
          Jayavel
        </p>
        <p className="about-desg">Full Stack Developer</p>
        <div className="d-flex flex-row gap-5">
          <a
            href="https://www.linkedin.com/in/mukeshkhannaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://github.com/issei416"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
          <a
            href="mailto:mukeshkj2912@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} alt="" />
          </a>
          <a
            href="https://www.instagram.com/mukeshkhanna416?igsh=Mm41eWxxZGp4bXQ4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
