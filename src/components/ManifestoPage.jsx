import React from "react";
import "../styles/ManifestoPage.css";

export default function ManifestoPage() {
  return (
    <main className="manifesto-wrap">
      <article className="letter">
        <p className="letter-kicker">A Working Manifesto</p>

        <h1 className="letter-title">Build Less. Ship Better.</h1>

        <p>
          Software should make people faster, calmer, and more capable. Everything else
          is decoration. This is the lens I bring to every project—clarity over noise,
          momentum over ceremony.
        </p>

        <h2 className="letter-sub">Principles</h2>
        <ul className="letter-list">
          <li><strong>Start with the user.</strong> Real problems first, features later.</li>
          <li><strong>Prefer boring tech.</strong> Reliability beats novelty in production.</li>
          <li><strong>Write it down.</strong> Short docs long meetings. Decisions are artifacts.</li>
          <li><strong>Ship the slice.</strong> Deliver narrow value end-to-end, then iterate.</li>
          <li><strong>Own the edges.</strong> Empty states, errors, loading—polish the seams.</li>
          <li><strong>Delete bravely.</strong> Simplicity is a feature. Remove what no longer serves.</li>
          <li><strong>Measure honestly.</strong> Let data inform, not dictate. Trust good taste.</li>
          <li><strong>Respect attention.</strong> Fewer notifications. Clear controls. No surprises.</li>
        </ul>

        <p>
          These aren’t slogans—they’re constraints I use to keep work humane and outcomes
          strong. When we follow them, teams move quickly and users feel it.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
          <p className="sign-meta">Software Engineer</p>
        </footer>
      </article>
    </main>
  );
}
