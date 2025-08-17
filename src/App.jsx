import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Folders from "./components/Folders";
import ContactCard from "./components/ContactCard";
import JourneyPage from "./components/Journey";
import WorkPage from "./components/Work";
import ManifestoPage from "./components/ManifestoPage";
import EntrepreneurshipPage from "./components/EntrepreneurshipPage";
import "./App.css";



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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Folder destinations */}
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
      </Routes>
    </BrowserRouter>
  );
}
