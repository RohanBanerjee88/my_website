import React from "react";
import "../styles/ManifestoPage.css";

export default function ManifestoPage() {
  return (
    <main className="manifesto-wrap">
      <article className="letter">
        <p className="letter-kicker">A Working Manifesto</p>

        <h1 className="letter-title-mani">The World I Want to Build</h1>

        <p>
          At the core of my life and work is one belief: curiosity is the engine of progress. 
          From physics to computer vision to distributed systems, every step of my journey has been driven by asking “why?” and refusing to stop until I find a meaningful answer. 
          I don’t see technology as just code or machines — I see it as a way to expand human potential, to solve problems that feel impossible, and to create systems that make life more seamless for everyone.
        </p>

        <p>
          Over the next five years, I want to dedicate myself to building at the intersection of AI, systems, and human productivity. 
          The world doesn’t need more tools that add friction — it needs technology that feels invisible, that adapts to us rather than the other way around. 
          I believe the future belongs to systems that think with us, work with us, and grow with us.
        </p>

        <p>
          Looking ahead, I see a world where AI superintelligence becomes not just powerful, but accessible. 
          Intelligence will no longer live behind keyboards and screens — it will move closer to us, embedded into our daily lives in smarter, more personal ways. 
          I believe the most natural interface for this will be through vision and natural language: glasses or similar interfaces that allow us to see, speak, and collaborate with AI as seamlessly as we interact with each other. 
          This age of hyper vision and conversational intelligence is where I see the next frontier of human progress.
        </p>

        <p>
          My vision is to create technology that bridges human intent and machine execution — where an idea in someone’s mind can flow seamlessly into reality with the help of intelligent systems. 
          That’s the mission I want to chase, the problem I want to dedicate myself to, and the story I want to tell with my work.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
        </footer>
      </article>
    </main>
  );
}
