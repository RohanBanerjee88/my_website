import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './heroSection.css'; // Import your CSS file
import heroImage from './Images/main.png'; // Import your image file

function HeroSection() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Hide confetti after 3 seconds
  };

  const handleScroll = () => {
    const text = document.querySelector('.big-text');
    const image = document.querySelector('.hero-image');
    const scrollPosition = window.scrollY;

    text.style.opacity = 1 - scrollPosition / window.innerHeight;
    image.style.transform = `scale(${1 + scrollPosition / 1000})`;
  };

  // Attach scroll event listener when component mounts
  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="section-container">
      {/* Big text centered */}
      <h1 className="big-text">Hi there! I'm Rohan</h1>
      {/* Image centered */}
      <img src={heroImage} alt="Hero" className="hero-image" />

      {/* Button with confetti effect */}
      <button className="cta-button" onClick={handleClick}>
        <h2>Say Hello! 😊</h2>
      </button>

      {/* Confetti effect */}
      {showConfetti && <Confetti />}
    </section>
  );
}

export default HeroSection;
