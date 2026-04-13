import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <p>I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">Email</a>
            <a href="https://github.com/Dhinesh0411" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;