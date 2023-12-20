// Header.js

import React from 'react';
import './header.css'; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="title">Rohan</h1>
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
