// App.js

import React from 'react';
import Header from './header';
import HeroSection from './heroSection'; // Import your HeroSection component

function App() {
  return (
    <div>
      <Header />
      <HeroSection /> {/* Include the HeroSection component */}
      {/* Other content of your main page */}
    </div>
  );
}

export default App;
