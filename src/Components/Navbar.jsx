// components/Navbar.jsx
import React from "react";
import "../Styles/Navbar.css"; // Optional: Add custom styles if needed
import download from "../assets/download-icon-32.png";
import { useThemeContext } from "../hooks/ThemeContext.jsx";

const Navbar = () => {
  const { dark, toggleTheme } = useThemeContext(); // Use the theme context

  return (
    <nav
      id="navbar-example"
      className="navbar navbar-expand-md text-black fixed-top"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-pills col-md-11 d-md-flex flex-md-row flex-column justify-content-center gap-5">
            <li className="nav-item col-12 col-md-1 text-center">
              <a
                className="nav-link text-decoration-none text-white fs-5"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item col-12 col-md-1 text-center">
              <a
                className="nav-link text-decoration-none text-white fs-5"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item col-12 col-md-1 text-center">
              <a
                className="nav-link text-decoration-none text-white fs-5"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item col-12 col-md-1 text-center">
              <a
                className="nav-link text-decoration-none text-white fs-5"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="col col-md-1 d-flex justify-content-end">
            <a
              className="btn btn-outline-light d-flex gap-2 align-items-center justify-content-center"
              href="/path/to/resume.pdf"
              download
            >
              RESUME{" "}
              <span>
                <img src={download} alt="download resume" />
              </span>
            </a>
            {/* <button onClick={toggleTheme} className="btn btn-toggle">
              {dark ? "Light Mode" : "Dark Mode"}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
