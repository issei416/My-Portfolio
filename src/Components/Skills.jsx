import React, { useEffect, useState } from "react";
import "../Styles/Skills.css"; // Add custom styles here if needed

// Import icons using react-icons
import html from "../assets/html5-96.png";
import css from "../assets/css3-96.png";
import bootstrap from "../assets/bootstrap-96.png";
import javascript from "../assets/javascript-96.png";
import react from "../assets/react-96.png";
import redux from "../assets/redux-96.png";
import nodejs from "../assets/nodejs-96.png";
import expressjs from "../assets/expressjs-96.png";
import mongodb from "../assets/mongodb-96.png";
import mysql from "../assets/mysql-96.png";

const Skills = ({ skills }) => {
  skills = [
    { name: "HTML5", icon: html, id: 1 },
    { name: "CSS3", icon: css, id: 2 },
    { name: "Javascript", icon: javascript, id: 4 },
    { name: "Bootstrap", icon: bootstrap, id: 3 },
    { name: "React", icon: react, id: 5 },
    { name: "Redux", icon: redux, id: 6 },
    { name: "node.js", icon: nodejs, id: 7 },
    { name: "express.js", icon: expressjs, id: 8 },
    { name: "MongoDB", icon: mongodb, id: 9 },
    { name: "MySQL", icon: mysql, id: 10 },
  ];
  const [skillsPerSlide, setSkillsPerSlide] = useState(3);

  // Update skillsPerSlide based on window size
  useEffect(() => {
    const updateSkillsPerSlide = () => {
      if (window.innerWidth < 576) {
        setSkillsPerSlide(2); // Mobile view
      } else if (window.innerWidth < 768) {
        setSkillsPerSlide(2); // Small view
      } else {
        setSkillsPerSlide(3); // Medium and larger views
      }
    };

    // Set initial value
    updateSkillsPerSlide();

    // Update on resize
    window.addEventListener("resize", updateSkillsPerSlide);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateSkillsPerSlide);
    };
  }, []);

  return (
    <section id="skills" className="skills-section container my-3">
      <h1 className="text-center mb-5 text-white">SKILLS</h1>

      <div
        id="skillsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={2000}
      >
        <div className="carousel-inner">
          {Array.from({
            length: Math.ceil(skills.length / skillsPerSlide),
          }).map((_, index) => {
            const startIndex = (index * skillsPerSlide) % skills.length; // Modulus operation
            const endIndex =
              startIndex + skillsPerSlide > skills.length
                ? skills.length
                : startIndex + skillsPerSlide;

            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {skills.slice(startIndex, endIndex).map((skill) => (
                    <div
                      key={skill.id}
                      className="col-6 col-md-4 text-center"
                    >
                      <div className="skill-card skill">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="img-fluid"
                        />
                        <p className="skill-name text-white fs-3">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#skillsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#skillsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Skills;
