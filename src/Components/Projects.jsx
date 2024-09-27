import React, { useEffect, useRef, useState } from "react";
import "../Styles/Project.css";
import githubIcon from "../assets/github-32.png";
import site from "../assets/external-link-32.png";
import dashboard from "../assets/emp-preview.png";
import todo from "../assets/todo-preview.png";
import shoe from "../assets/shoe-preview.png";

const projects = [
  {
    id: 1,
    title: "Employee Management Dashboard",
    description:
      "Employee Management System, built to manage employee profiles, attendance, leaves, and projects. The employee will be able to mark attendance, apply leave and track projects",
    technologies: ["React", "Node.js", "JWT", "MongoDB", "Bootstrap"],
    imageSrc: dashboard,
    githubLink: "https://github.com/issei416/Employee-Management-Client.git",
    deployedLink: "https://employee-management-dashboard-dev-it.netlify.app",
  },
  {
    id: 2,
    title: "My TODO",
    description:
      "A Todo application where a user can create, edit & update and delete tasks. The app has filter options to aggregate finished and unfinished tasks enhancing user's track on tasks",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    imageSrc: todo,
    githubLink: "https://github.com/issei416/React-todo.git",
    deployedLink: "https://react-todo-dev-it.netlify.app",
  },
  {
    id: 3,
    title: "Shoekart",
    description:
      "It is a shopping cart website which displays a set of available products and offers Add to cart and Remove from cart functionalities, It updates the cart count upon every addition and removal of products by the user.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageSrc: shoe,
    githubLink: "https://github.com/issei416/React-Shopping-Cart.git",
    deployedLink: "https://shopping-cart-dev-it.netlify.app",
  },
];

const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(
    Array(projects.length).fill(false)
  );

  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the container
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the project is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setVisibleProjects((prev) => {
            const newVisibleProjects = [...prev];
            newVisibleProjects[index] = true;
            return newVisibleProjects;
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    projectRefs.current.forEach((project) => {
      observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach((project) => {
        observer.unobserve(project);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="projects-section container my-5 text-white"
    >
      <h1 className="text-center mb-5">Projects</h1>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`row mb-5 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
          ref={(el) => (projectRefs.current[index] = el)} // set ref for each project
          data-index={index} // store the index
        >
          {/* Description Side */}
          <div
            className={`col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0 ${
              visibleProjects[index] ? "slide-in" : "hidden"
            }`}
          >
            <h3 className="fs-1">{project.title}</h3>
            <p className="fs-5">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="badge bg-white text-black me-3"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Preview Side */}
          <div
            className={`col-md-6 ${visibleProjects[index] ? "slide-in" : "hidden"}`}
          >
            <div className="project-preview card py-3">
              <img
                src={project.imageSrc}
                className="card-img-top"
                alt={`${project.title} preview`}
              />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <div className="btn-container col-12 d-flex justify-content-between">
                  <a
                    href={project.githubLink}
                    className="btn btn-dark btn-sm mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubIcon} alt="" />
                  </a>
                  <a
                    href={project.deployedLink}
                    className="btn btn-dark btn-sm mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={site} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
