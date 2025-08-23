import React from "react";
import "../styles/EntrepreneurshipPage.css";

export default function EntrepreneurshipPage() {
  return (
    <main className="entre-wrap">
      <article className="letter">
        <p className="letter-kicker">Notes on Building</p>

        <h1 className="letter-title">Entrepreneurship</h1>

        <p>
          I’ve always had the builder’s instinct — the drive to pick up new projects and pour myself fully into them.
          A turning point for me came when I read Shoe Dog by Phil Knight. 
          His story wasn’t just about Nike; it was about grit, perseverance, and chasing the American Dream. That book planted a seed in me — the conviction that I wanted to create something of my own.
        </p>

        <p>
          When I came to the U.S. for my bachelor’s, hackathons became my playground. 
          I loved the rush of building under pressure, learning fast, and turning ideas into reality. It was at one of those hackathons, at UC Berkeley, that the idea for Targetist was born.
        </p>

        <p>
          We started small. My co-founder and I were frustrated by the chaos of planning, so we began by studying how people think about their time. 
          That research led us to design an efficient scoring algorithm to prioritize tasks and events, eventually automating entire calendars. But as we dug deeper, we realized the problem wasn’t just productivity — it was coordination.
        </p>

        <p>
          That realization changed everything. We shifted from building just a productivity tool to creating an agentic layer — a system that functions like an operating system for work, eliminating tool-switching by unifying everything behind a natural language interface.
        </p>

        <p>
          The entrepreneurial journey so far has been a rollercoaster — full of uncertainty, breakthroughs, setbacks, and wins. But through it all, one thing has stayed constant: my passion for building. For the next several years, I want to continue diving headfirst into entrepreneurship, creating technology
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
        </footer>
      </article>
    </main>
  );
}
