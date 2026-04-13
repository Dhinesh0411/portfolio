import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h2>Hello, I'm [Your Name]</h2>
        <p>I'm a passionate developer specializing in React and modern web technologies. Welcome to my portfolio showcasing my GitHub projects.</p>
        <a href="#projects" className="cta-button">View My Projects</a>
      </div>
    </section>
  );
};

export default Hero;