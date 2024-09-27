import React from "react";
import WorldAnimation from "./world.jsx";
import ContactForm from "./ContactForm.jsx";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section container my-5">

      <div className="row">
        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <h2 className="mb-4 text-white">Contact Me</h2>
          <ContactForm />
        </div>
        {/* Left Side: 3D World */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <WorldAnimation />
        </div>
      </div>
    </section>
  );
};

export default Contact;
