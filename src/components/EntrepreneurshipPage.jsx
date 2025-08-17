import React from "react";
import "../styles/EntrepreneurshipPage.css";

export default function EntrepreneurshipPage() {
  return (
    <main className="entre-wrap">
      <article className="letter">
        <p className="letter-kicker">Notes on Building</p>

        <h1 className="letter-title">Entrepreneurship, Practically</h1>

        <p>
          I like small bets that compound. Ship something real, talk to users,
          learn the uncomfortable truth, and iterate until the value is obvious.
          Entrepreneurship isn’t a personality trait—it’s a loop of testing
          assumptions with as little ceremony as possible.
        </p>

        <p>
          I’m drawn to problems where the pain is clear and the solution can be
          experienced within minutes. Great businesses often begin as delightful
          utilities that earn trust, then grow into platforms.
        </p>

        <h2 className="letter-sub">Operating Principles</h2>
        <ul className="letter-list">
          <li><strong>Start with distribution.</strong> Know how people will find and adopt it.</li>
          <li><strong>Price early.</strong> Charging clarifies the value and the audience.</li>
          <li><strong>Automate last.</strong> Do it manually until the path is obvious.</li>
          <li><strong>Default to clarity.</strong> Simple copy, simple flows, simple pricing.</li>
          <li><strong>Track the right thing.</strong> Activation, retention, and genuine outcomes.</li>
          <li><strong>Protect focus.</strong> Say “no” to features that don’t change the curve.</li>
        </ul>

        <p>
          Teams that move with restraint and purpose tend to win. The craft is
          picking the next smallest step that proves the most.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
          <p className="sign-meta">Software Engineer</p>
        </footer>
      </article>
    </main>
  );
}
