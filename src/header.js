// Header.js

import React from 'react';
import './header.css'; // Import your CSS file
import iconImage from './Images/icon.png'; // Import your icon image

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="title">
          <img src={iconImage} alt="Icon" className="icon" /> Rohan Banerjee
        </h1>
        <ul className="links">
          <li>
            <a href="/about" className="link">About</a>
          </li>
          <li>
            <a href="/projects" className="link">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
