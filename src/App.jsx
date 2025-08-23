import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMedia from "./hooks/useMedia";

import Hero from "./components/Hero";
import Folders from "./components/Folders";
import ContactCard from "./components/ContactCard";
import JourneyPage from "./components/Journey";
import WorkPage from "./components/Work";
import ManifestoPage from "./components/ManifestoPage";
import EntrepreneurshipPage from "./components/EntrepreneurshipPage";

import MobileHome from "./mobile/MobileHome";
import contactImage from "./Images/contactImage.png";
import "./App.css";


/* Shared profile data so mobile & desktop stay in sync */
const profileData = {
  name: "Rohan Banerjee",
  avatar: contactImage,
  about:
    "Co-Founder of Targetist. I love creating systems at the intersection of AI, distributed computing, and productivity.",
  links: {
    linkedin: "https://www.linkedin.com/in/rohan-banerjee-b4651520a/",
    x: "https://x.com/RohanBanerjee88",
    github: "https://github.com/RohanBanerjee88",
    email: "banerj37@msu.edu",
    calendly: "https://calendly.com/rohanbanerjee88/30min?month=2025-08"
  },
};


/* Home comp so root route renders your current sections */
function Home() {
  return (
    <>
      <Hero />
      <Folders />
      <ContactCard />
    </>
  );
}

export default function App() {
  const isMobileOrTablet = useMedia("(max-width: 1024px)");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isMobileOrTablet ? <MobileHome data={profileData} /> : <Home/>}
        />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
      </Routes>
    </BrowserRouter>
  );
}