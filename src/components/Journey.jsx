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
          When I wrote my first “hello world,” I didn’t know it would turn into a habit of
          building little tools that made life a bit easier—and sometimes a lot more fun.
          Since then I’ve chased the same feeling: learn fast, ship faster, and leave things
          cleaner than I found them.
        </p>

        <p>
          I’ve worked across stacks—front-end craft, back-end plumbing, and the connective
          tissue where product decisions become code. What stays constant is a love for
          clarity: small APIs, strong defaults, and honest interfaces that get out of your way.
        </p>

        <p>
          Today I’m focused on thoughtful, minimal products. I believe design and engineering
          are the same sport—just different positions. If the work helps people move quicker,
          think clearer, or smile once, it’s worth doing.
        </p>

        <p>
          If any of this resonates, I’d love to swap notes. The best work usually starts with
          a short conversation and a shared curiosity.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
          <p className="sign-meta">Software Engineer</p>
        </footer>
      </article>
    </main>
  );
}
