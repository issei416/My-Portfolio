// components/Navbar.jsx
import React from "react";
import "../Styles/Navbar.css"; // Optional: Add custom styles if needed
import download from "../assets/download-icon-32.png";
import { useThemeContext } from "../hooks/ThemeContext.jsx";
import resume from "/Mukeshkhanna_Developer.pdf";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const { dark, toggleTheme } = useThemeContext(); // Use the theme context

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; // Points to the correct file
    link.download = "Mukeshkhann_Developer.pdf"; // Set desired file name
    link.click();
  };

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
          <img src={hamburger} alt="" className="custom-toggler-icon" />
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
            <button
              className="btn btn-outline-light d-flex gap-2 align-items-center justify-content-center"
              onClick={handleDownload}
            >
              RESUME
              <span>
                <img src={download} alt="download resume" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
