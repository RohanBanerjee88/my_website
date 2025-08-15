import React from "react";
import "../styles/ContactCard.css";
import Cubes from "../Cubes/Cubes";
import contactImage from "../Images/contactImage.png";

export default function ContactCard() {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        {/* Left: Cubes */}
        <div className="cubes-col">
          <div className="cubes-wrap">
            <Cubes
              gridSize={8}
              maxAngle={60}
              radius={3}
              borderStyle="2px dashed #5227FF"
              faceColor="#000"
              rippleColor="#fff"
              rippleSpeed={1.5}
              autoAnimate={true}
              rippleOnClick={true}
              cubeSize={50}
            />
          </div>
        </div>

        {/* Right: Contact card */}
        <div className="card-col">
          <div className="contact-card">
            <img src={contactImage} alt="Rohan avatar" className="contact-avatar" />

            <h2 className="contact-name">Rohan Banerjee</h2>
            <div className="contact-list">
              <a href="mailto:rohan@example.com" className="contact-item">
                {/* mail icon */}
                <svg className="contact-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>banerj37@msu.edu</span>
              </a>

              <a href="https://instagram.com/rohan" target="_blank" rel="noreferrer" className="contact-item">
                {/* ig icon */}
                <svg className="contact-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1.2" />
                </svg>
                <span>@rohan</span>
              </a>

              <a href="https://behance.net/rohan" target="_blank" rel="noreferrer" className="contact-item">
                {/* behance-ish icon */}
                <svg className="contact-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7h5a3 3 0 010 6H4V7zm0 6h5a3 3 0 110 6H4v-6z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M14 10.5h6M14 16.5h6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>linkedin.com/rohanbanerjee</span>
              </a>
            </div>

            <button className="contact-btn" onClick={() => window.location.href = "mailto:banerjeerohan090@gmail.com"}>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
