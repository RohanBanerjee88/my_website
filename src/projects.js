import React from 'react';
import './projects.css'; // Import your CSS file

import stocksImage from './Images/stocks.png';
import crashImage from './Images/crash.png';
import dropImage from './Images/drop.png';
import recapImage from './Images/recap.png';
import outlayImage from './Images/out.png'
import SignLang from './Images/sll.png'
import EazyImg from './Images/cc.png'
import TerImg from './Images/tss.png'

const projects = [
  {
    id: 1,
    title: 'WiseAI',
    image: stocksImage,
    link: 'https://github.com/RohanBanerjee88/WiseAI',
  },
  {
    id: 2,
    title: 'Zenith',
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
  {
    id: 5,
    title: 'Outlay',
    image: outlayImage,
    link: 'https://github.com/RohanBanerjee88/Outlay',
  },
  {
    id: 6,
    title: 'SignLang',
    image: SignLang,
    link: 'https://github.com/RohanBanerjee88/SignLang',
  },
  {
    id: 7,
    title: 'Eazy',
    image: EazyImg,
    link: 'https://github.com/RohanBanerjee88/eazy_app',
  },
  {
    id: 8,
    title: 'Terminal',
    image: TerImg,
    link: 'https://github.com/RohanBanerjee88/Terminal_S',
  },
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
