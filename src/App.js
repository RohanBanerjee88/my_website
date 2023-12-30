// App.js

import React from 'react';
import Header from './header';
import HeroSection from './heroSection';
import ProjectSection from './projects';
import AboutPage from './about';
import TitleTextPage from './text';
import FooterTextPage from './footer';


function App() {
  
  return (
    <div>
      <Header />
      <HeroSection />
      <TitleTextPage/>
      <ProjectSection />
      <AboutPage/>
      <FooterTextPage/>
      {/* Other content of your main page */}
    </div>
  );
}

export default App;
