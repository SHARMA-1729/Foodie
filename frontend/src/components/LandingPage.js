import React from 'react';
import './LandingPage.css';
import grillImage from '../assets/peakpx.jpg'; // Import your image here

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Enjoy Our Delicious Meal</h1>
        <p>Where every meal is a celebration of flavor and every guest is treated like family."

This conveys both the quality of the food and the warmth of the service, which are key elements in a great dining experience.







.</p>
        <button className="cta-button">Book A Table</button>
      </div>
      <div className="landing-image">
        <img src={grillImage} alt="Delicious Meal" />
      </div>
    </div>
  );
};

export default LandingPage;
