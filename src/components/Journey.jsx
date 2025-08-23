import React from "react";
import "../styles/Journey.css";

export default function JourneyPage() {
  return (
    <main className="journey-wrap">
      <article className="letter">
        <p className="letter-kicker">An Open Letter</p>

        <h1 className="letter-title">
          My Journey So Far
        </h1>

        <p>
          I’ve always believed that stories shape us — both the ones we hear and the ones we live. My journey began in Kolkata, India, where I grew up as the most curious kid in the room, constantly asking “Why?”
          That single word became the compass of my life. I was once told, “If you know the why, the how becomes easy.”
          What no one mentioned is that the why never really ends — it grows with you, becoming part of who you are.
        </p>

        <p>
          My first sparks of curiosity came from machines. I still remember the tiny electric shock I got as a kid, trying to light a bulb directly from the main switch.
          Instead of scaring me off, it pulled me in. I became fascinated not by the looks of cars, but by the engines that powered them. That curiosity soon led me deeper into physics — quantum mechanics, gravitational waves, and the beauty of how the universe worked.
          For a long time, I thought I’d pursue physics as my career.
        </p>

        <p>
          That changed the summer of 9th grade. I stumbled upon programming — more specifically, computer vision through an OpenCV newsletter — and I was hooked.
          Coding gave me a new way to channel my curiosity, and it quickly became the focus of my high school years. So when it was time to choose a major, computer science was the natural path forward.
        </p>

        <p>
          When it came to universities, I made a big decision: instead of heading to the UK, I chose Michigan State University (Go Green!).
          Two things shaped that choice — a close friend who was also joining MSU, and the book Shoe Dog, which convinced me to chase the American Dream and dedicate my life to building something meaningful.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
        </footer>
      </article>
    </main>
  );
}
