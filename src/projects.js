import React from 'react';
import './projects.css'; // Import your CSS file

import stocksImage from './Images/stocks.png';
import crashImage from './Images/crash.png';
import dropImage from './Images/drop.png';
import recapImage from './Images/recap.png';

const projects = [
  {
    id: 1,
    title: 'WiseAI',
    image: stocksImage,
    link: 'https://github.com/RohanBanerjee88/WiseAI',
  },
  {
    id: 2,
    title: 'CrashEye',
    image: crashImage,
    link: 'https://github.com/RohanBanerjee88/CrashEye',
  },
  {
    id: 3,
    title: 'Quick Drop',
    image: dropImage,
    link: 'https://github.com/RohanBanerjee88/quick-drop',
  },
  {
    id: 4,
    title: 'Recapify.AI',
    image: recapImage,
    link: 'https://github.com/RohanBanerjee88/Notes.AI-Test-',
  },
  // Add more projects as needed
];

function ProjectSection() {
  const handleClick = (link) => {
    window.open(link, '_blank'); // Open GitHub link in a new tab
  };

  return (
    <section className="projects-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => handleClick(project.link)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h3 className="project-title">{project.title}</h3>
        </div>
      ))}
    </section>
  );
}

export default ProjectSection;
