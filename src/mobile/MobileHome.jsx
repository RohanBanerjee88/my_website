import React from "react";
import "./MobileHome.css";

/**
 * Props
 * - data: {
 *     name, title, avatar, about,
 *     links: { linkedin, x, github, email, calendly }
 *   }
 */
export default function MobileHome({ data }) {
  const {
    name,
    title,
    avatar,
    about,
    links: { linkedin, x, github, email, calendly },
  } = data;

  return (
    <main className="m-wrap">
      {/* Top name bar */}
      <header className="m-top">
        <h1 className="m-name">{name}</h1>
      </header>

      {/* Photo card with dark inner box */}
      <section className="m-photo">
        <div className="m-photo-box">
          <img src={avatar} alt={name} />
        </div>
      </section>

      {/* About row (label left, copy right) */}
      <section className="m-about">
        <h2 className="m-about-label">About</h2>
        <p className="m-about-text">
          {title ? <strong className="m-inline-title">{title}</strong> : null}
          {title ? " · " : null}
          {about}
        </p>
      </section>

      {/* Actions grid */}
      <section className="m-actions">
        {/* Meeting Card (Calendly) — tall left tile, no avatar */}
        <a
          className="m-tile m-tile--meeting"
          href={calendly}
          target="_blank"
          rel="noreferrer"
          aria-label="Book a Meeting"
        >
          <div className="m-meeting-label">
            <h4>Book</h4>
            <h4>Meeting</h4>
          </div>
        </a>

        {/* Right 2×2 */}
        <a
          className="m-tile m-area-linkedin"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <IconLinkedIn />
        </a>

        <a
          className="m-tile m-area-x"
          href={x}
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          <IconX />
        </a>

        <a
          className="m-tile m-area-github"
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <IconGitHub />
        </a>

        <a
          className="m-tile m-area-mail"
          href={`mailto:${email}`}
          aria-label="Email"
        >
          <IconMail />
        </a>
      </section>
    </main>
  );
}



/* ---------- inline black/white icons ---------- */
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 448 512" className="m-ico">
      <path
        fill="currentColor"
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 
           108.1 0 83.5 0 53.8a53.8 53.8 0 11107.6 0c0 29.7-24.1 54.3-53.81 54.3zM447.9 
           448h-92.4V304.1c0-34.3-.7-78.4-47.8-78.4-47.8 0-55.1 37.3-55.1 
           75.9V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.5-48.3 
           87.4-48.3 93.5 0 110.7 61.6 110.7 141.7V448z"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 512 512" className="m-ico">
      <path
        fill="currentColor"
        d="M459.4 151.7L312.3 329.1l151 181.2h-110l-99.2-120.6-99.3 
           120.6H45.8l151-181.2L49.6 151.7h111.6l93.6 113.6 93.6-113.6h111z"
      />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 496 512" className="m-ico">
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 
           0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 
           5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.1-6.4c-.7 
           1.6-2.9 2.2-4.8 1.2-1.9-1-2.9-3-2.2-4.6.7-1.6 
           2.9-2.2 4.8-1.2 1.9 1 2.9 3 2.2 4.6zm44.2-1.7c-2.9.6-5.8-1.2-6.5-3.9-.7-2.7 
           1.2-5.5 4.1-6.1 2.9-.6 5.8 1.2 6.5 3.9.7 2.7-1.2 5.5-4.1 6.1zm38.3-5.3c-.7 
           2.6-3.5 4.1-6.4 3.5-2.9-.6-4.8-3.3-4.1-5.9.7-2.6 
           3.5-4.1 6.4-3.5 2.9.6 4.8 3.3 4.1 5.9zM244 8C109.5 8 0 
           117.5 0 252c0 107.1 69.3 198 165.9 
           230.3 12.1 2.2 16.5-5.3 16.5-11.7 0-5.8-.2-24.9-.4-45.1-67.4 
           14.7-81.6-32.5-81.6-32.5-11-27.8-26.9-35.2-26.9-35.2-22-15 
           1.6-14.7 1.6-14.7 24.4 1.7 37.2 25.1 37.2 
           25.1 21.6 37.1 56.6 26.4 70.5 20.2 2.2-15.7 
           8.5-26.4 15.4-32.5-53.8-6.1-110.4-26.9-110.4-119.6 
           0-26.4 9.4-47.9 24.9-64.8-2.5-6.1-10.8-30.8 
           2.3-64.1 0 0 20.2-6.5 66.2 24.7 19.2-5.3 39.9-8 60.5-8 
           20.6 0 41.3 2.7 60.5 8 46-31.2 66.2-24.7 
           66.2-24.7 13.1 33.3 4.8 58 2.3 64.1 15.5 
           16.9 24.9 38.4 24.9 64.8 0 93-56.7 113.5-110.7 
           119.5 8.7 7.5 16.5 22.4 16.5 45.2 0 
           32.5-.3 58.7-.3 66.7 0 6.5 4.4 14.1 16.5 
           11.7C426.7 450 496 359.1 496 252 496 117.5 
           386.5 8 252 8z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="m-ico" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12c0 1.11.89 2 2 2h16a2 2 0 0 0 2-2V6c0-1.11-.89-2-2-2Zm0 2-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z"
      />
    </svg>
  );
}
