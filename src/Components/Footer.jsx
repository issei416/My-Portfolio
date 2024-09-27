import React from "react";
import "../Styles/Footer.css"; // Ensure to create this CSS file
import github from "../assets/github-32.png";
import linkedin from "../assets/linkedin-32.png";
import gmail from "../assets/gmail-32.png";

const Footer = () => {
  return (
    <footer className="footer bg-transparent text-white py-4">
      <div className="container text-center">
        <h5 className="mb-3">Connect with Me</h5>
        <div className="social-icons mb-3">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com/in/mukeshkhannaj"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:mukeshkj2912@gmail.com" className="social-icon">
            <img src={gmail} alt="Email" />
          </a>
        </div>
        <p className="mb-0">
          © {new Date().getFullYear()} Mukesh Khanna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
