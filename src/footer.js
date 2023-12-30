import React from 'react';
import './footer.css'; // Import your CSS file
import coffeeImage from './Images/icon.png'; // Verify the path to your image

function FooterTextPage() {
  return (
    <div className="footer-text-page">
      <img src={coffeeImage} alt="Coffee" className="coffee-image" />
      <h1 className="footer_">@Lets Grab a Coffee!</h1>
    </div>
  );
}

export default FooterTextPage;
