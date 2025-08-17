import React from "react";
import "../styles/Work.css";

export default function WorkPage() {
  return (
    <main className="work-wrap">
      <article className="letter">
        <p className="letter-kicker">Notes on Work</p>

        <h1 className="letter-title">
          How I Build and Ship
        </h1>

        <p>
          My best work happens where clarity meets speed. I like small, well-named
          components, short feedback loops, and decisions that age well. Ship the slice,
          learn from users, iterate without drama.
        </p>

        <p>
          Day-to-day I move between product thinking and implementation: shaping the
          problem, sketching flows, then getting it done in code. I default to boring
          technology, strong conventions, and neat abstractions only when they earn their
          keep.
        </p>

        <p>
          Collaboration matters. I write design docs before complex work, keep PRs tight,
          and prefer async-first habits that respect focus time. Fewer meetings, better
          artifacts.
        </p>

        <p>
          I enjoy the craft: pixels aligned, tests that tell the truth, and systems that
          remain legible months later. The goal is simple—ship value reliably.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
          <p className="sign-meta">Software Engineer</p>
        </footer>
      </article>
    </main>
  );
}
