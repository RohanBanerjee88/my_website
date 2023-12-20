// HeroSection.js

import React from 'react';
import './heroSection.css'; // Import your CSS file
import heroImage from './Images/main.png'; // Import your image file

function HeroSection() {
  return (
    <section className="section-container">
      {/* Big text centered */}
      <h1 className="big-text">Hi there! I'm Rohan</h1>
      {/* Image centered */}
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
}

export default HeroSection;
