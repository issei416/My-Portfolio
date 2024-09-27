import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailResponse = await emailjs.sendForm(
      "service_fnklign", // Replace with your service ID
      "template_9r33qee", // Replace with your template ID
      form.current,
      "1ZjOHl-wdhh7rULN_" // Replace with your EmailJS user ID
    );

    console.log(emailResponse);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form text-white">
      <div className="form-group">
        <input
          type="text"
          name="user_name"
          className="form-control text-white"
          required
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="user_email"
          className="form-control text-white"
          required
          placeholder="email"
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          className="form-control text-white"
          rows="4"
          required
          placeholder="Message"
        />
      </div>
      <button type="submit" className="btn send-btn btn-light mt-3">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
