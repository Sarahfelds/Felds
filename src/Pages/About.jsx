import React from 'react';
import './About.css'; // Import the CSS file for styling
import SignatureImage from '../Components/Assets/Signature.png'; // Assuming you have an image for the signature

const About = ({ onNavigate, onSearchClick, onCartClick }) => { // Added onSearchClick, onCartClick to props
  return (
    <div className="about-page-container">
      {/* Top Banner - Reusing the consistent shipping banner structure */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">⏸️</button>
      </div>

      {/* Navigation - Reusing the consistent navigation structure */}
      <nav className="futures-nav"> {/* Using 'futures-nav' as it seems to be your common nav class */}
        <div className="nav-left">
        <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item">
          SHOP
        </button>
          {/* Corrected: 'ABOUT' button is active and doesn't navigate away */}
          <button className="nav-item active">
            ABOUT
          </button>
          <button onClick={() => onNavigate && onNavigate("futures")} className="nav-item">
            FUTURES
          </button>
        </div>

        <button onClick={() => onNavigate && onNavigate("home")} className="logo-container">
          <h1 className="logo">RED.</h1>
          <span className="subtitle">By Sarah</span>
        </button>

        <div className="nav-right">
          {/* Added onClick handlers for SEARCH and CART */}
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">
            ACCOUNT
          </button>
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>
            CART
          </button>
        </div>
      </nav>

      {/* Main About Content Section */}
      <div className="about-content-section">
        <h2 className="about-title">A NOTE FROM OUR FOUNDER</h2>
        <p className="about-text">
          My journey towards healthier skin inspired me to develop products that really work, in a way that's
          accessible to everyone. Red is dedicated to making products based in science and great formulation,
          simplifying many of the mysteries and complex narratives behind efficacious skincare. I hope these
          will become your go-to essentials that can live in your bathroom, be your favorite travel companion,
          improve your skin over time, and keep your skin happy and hydrated.
        </p>
        {/* Signature image */}
        {SignatureImage && (
          <div className="signature-container">
            <img src={SignatureImage} alt="Founder's Signature" className="founder-signature" />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
