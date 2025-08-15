import React from "react";
import "../styles/Folders.css";
import Folder from "../Folder/Folder";
import manifesto from "../Images/manifesto.png";
import engineer from "../Images/engineer.png";
import suit from "../Images/suit.png";
import journey from "../Images/journey.png";
import upArrow from "../Images/upArrow.png"; 

export default function Folders() {
  return (
    <section className="folders">
      <div className="folder-grid">

        <div className="folder-wrapper folder-one">
          <Folder size={3} color="#00a2ff" className="custom-folder-one" />
          <img src={journey} alt="Sticker 1" className="folder-sticker-one" />
          <img src={upArrow} alt="Arrow 1" className="folder-arrow" />
          <p className="folder-label">Journey</p>
        </div>

        <div className="folder-wrapper folder-two">
          <Folder size={3} color="#00a2ff" className="custom-folder-two" />
          <img src={suit} alt="Sticker 2" className="folder-sticker-two" />
          <img src={upArrow} alt="Arrow 2" className="folder-arrow" />
          <p className="folder-label">Work</p>
        </div>

        <div className="folder-wrapper folder-three">
          <Folder size={3} color="#00a2ff" className="custom-folder-three" />
          <img src={manifesto} alt="Sticker 3" className="folder-sticker-three" />
          <img src={upArrow} alt="Arrow 3" className="folder-arrow" />
          <p className="folder-label">Manifesto</p>
        </div>

        <div className="folder-wrapper folder-four">
          <Folder size={3} color="#00a2ff" className="custom-folder-four" />
          <img src={engineer} alt="Sticker 4" className="folder-sticker-four" />
          <img src={upArrow} alt="Arrow 4" className="folder-arrow" />
          <p className="folder-label">Entrepreneurship</p>
        </div>

      </div>
    </section>
  );
}
