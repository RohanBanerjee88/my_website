// text.js

import React, { useEffect } from 'react';
import './text.css'; // Import your CSS file

function TitleTextPage() {
  useEffect(() => {
    const handleScroll = () => {
      const titleText = document.querySelector('.title-text-page');
      const scrollPosition = window.scrollY;

      // Move the text up and fade it
      titleText.style.transform = `translateY(-${scrollPosition / 3}px)`;
      titleText.style.opacity = 1 - scrollPosition / window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="title-text-page">
      <h1 className="title_">--Projects--</h1>
    </div>
  );
}

export default TitleTextPage;
