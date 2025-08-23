import React from "react";
import "../styles/Work.css";

export default function WorkPage() {
  return (
    <main className="work-wrap">
      <article className="letter">
        <p className="letter-kicker">Notes on Work</p>

        <h1 className="letter-title-work">
          Work History
        </h1>

        <p>
          Over the past three years,
          I’ve had the chance to explore research, industry, and systems engineering — each experience shaping how I think about technology and problem-solving.
        </p>

        <p>
          I began freshman year as a Research Assistant in the Computer Vision Lab at Michigan State University.
          With no prior experience, my first task was data annotation — labeling motion across hundreds of video frames.
          It was repetitive, but it gave me an inside look into how machine learning datasets are built.
          Curious to learn more, I started shadowing PhD students who were developing the actual models. Their mentorship sparked my deeper interest in AI.
        </p>

        <p>
          The following summer, I interned at TechSmith Corporation as a Test Engineer, where I learned how agile workflows operate in a real software company.
          I worked on Camtasia, a video editing software, and contributed to the iPv6 compliance project by interviewing real users and analyzing feedback.
          It was a valuable introduction to professional software development, but I wanted to push myself further.
        </p>

        <p>
          So, I also joined ICER (Institute for Cyber-Enabled Research), stepping into a whole new domain: distributed systems and high-performance computing.
          Under Dr. Wang, I learned Linux and Bash scripting in just a week, then began writing automation scripts to test CUDA compatibility across hundreds of outdated modules.
          It was my first real dive into parallel computing and systems work — and I loved it.
        </p>

        <p>
          In the fall, I continued at ICER under Dr. Panchy, focusing on building software tools for OnDemand systems that help researchers across the university. 
          Dr. Panchy encouraged me to pursue independent projects, one of which was designing an agentic system for the RC system. I also presented two research projects: one on data mining with OpenRefine, and another on bi-encoder and cross-encoder embeddings for data analysis.
        </p>

        <p>
          Through these experiences, I’ve gone from annotating data points to developing tools that power research at scale. 
          Each role has deepened my understanding of systems, AI, and the relentless drive it takes to build meaningful technology.
        </p>

        <footer className="letter-signoff">
          <p className="sign-name">— Rohan Banerjee</p>
        </footer>
      </article>
    </main>
  );
}
