// App.js

// import React from 'react';
// import Header from './header';
// import HeroSection from './heroSection';
// import ProjectSection from './projects';
// import AboutPage from './about';
// import TitleTextPage from './text';
// import FooterTextPage from './footer';


// function App() {
  
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <TitleTextPage/>
//       <ProjectSection />
//       <AboutPage/>
//       <FooterTextPage/>
//       {/* Other content of your main page */}
//     </div>
//   );
// }

// export default App;


import React from "react";
import Hero from "./components/Hero";
import Folder from "./components/Folders";
import ContactCard from "./components/ContactCard";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Folder />
      <ContactCard/>
    </div>
  );
}
