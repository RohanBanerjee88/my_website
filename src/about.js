// AboutPage.js

import React from 'react';
import './about.css'; // Import your CSS file
import gifImage from './Images/unscreen.gif'; // Import your GIF image

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>About Me</h2>
        <p>Hey there! 👋 I'm Rohan Banerjee, a Computer Science undergrad at Michigan State University passionate about software engineering and innovation. Proficient in Python, C++, React JS, and more, I'm all about turning ideas into functional tech solutions. Beyond tech, I'm the founder of Targetist, crafting AI-driven task automation solutions. 
Excited to connect and explore opportunities in software design, research, and innovative tech projects!</p>
        <div className="social-links">
          <a href="https://github.com/RohanBanerjee88">GitHub</a>
          <a href="https://www.linkedin.com/in/rohan-banerjee-b4651520a/">LinkedIn</a>
          <a href="./res/New_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <div className="gif-image">
        <img src={gifImage} alt="" />
      </div>
    </div>
  );
}

export default AboutPage;
