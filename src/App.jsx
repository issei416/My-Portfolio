// App.jsx or Main Component
import React from "react";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact.jsx";
import Projects from "./Components/Projects.jsx";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example"
          data-bs-offset="70" // Adjust based on your navbar height
          tabIndex="0"
          className="scrollspy-example overflow-visible"
          style={{
            position: "relative",
            top: "56px",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
