import React from "react";
import "../styles/Hero.css";
import StickerPeel from "../StickerPeel/StickerPeel";
import TextType from "../TextType/TextType";
import me from "../Images/stickerMe.png"
import arrow from "../Images/arrow.png";


export default function Hero() {
  return (
    <section className="hero">

        <TextType 
        text={["Howdy!", "Hola!", "Ciao!", "Bonjour!", "Hallo!", "你好", "नमस्ते", "こんにちは", "Olá"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="hero-cursor"
        className="hero-word"
        textColors={["#000"]}
        />
      {/* <h1 className="hero-word">Howdy!</h1> */}
      <div className="iam-label">I’m Rohan</div>
      <img src={arrow} alt="" className="iam-arrow" />


      <StickerPeel
        imageSrc={me}
        width={600}
        rotate={0}
        peelBackHoverPct={20}
        peelBackActivePct={30}
        shadowIntensity={0.6}
        lightingIntensity={0.1}
        initialPosition= 'bottom-right'
        className="hero-image"
        />
      {/* <img
        src="/stickerMe.png"
        alt="Hero Visual"
        className="hero-image"
      /> */}
    </section>
  );
}

  
