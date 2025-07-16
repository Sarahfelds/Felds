import React from 'react';
import './LipTint.css';
import TintImage from '../Components/Assets/Tint-2.jpg';
import '../Components/Navbar/Navbar.css';

const LipTint = ({ onNavigate, onAddToCart, onCartClick, onSearchClick }) => { // Added onCartClick, onSearchClick to props
  const productToAdd = {
    id: 'lip-tint-cherry-red', // Unique ID for the product
    name: "LIP TINT",
    variant: "CHERRY - Cherry Red", // Include variant for better cart display
    price: 11.0,
    image: TintImage, // Pass the imported image
  };

  return ( 
    <div className="lip-tint-page-wrapper">
      {/* Top Banner */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">⏸️</button>
      </div>

      {/* Navigation */}
      <nav className="futures-nav">
        <div className="nav-left">
          {/* Corrected: "SHOP" navigates to "shop" */}
          <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item">SHOP</button>
          {/* Corrected: "ABOUT" navigates to "about" */}
          <button onClick={() => onNavigate && onNavigate("about")} className="nav-item">ABOUT</button>
          <button onClick={() => onNavigate && onNavigate("futures")} className="nav-item">FUTURES</button>
        </div>
        <button onClick={() => onNavigate && onNavigate("home")} className="logo-container">
          <h1 className="logo">RED.</h1>
          <span className="subtitle">By Sarah</span>
        </button>
        <div className="nav-right">
          {/* Added onClick handlers for SEARCH, ACCOUNT, and CART */}
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">ACCOUNT</button>
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>
            CART
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="lip-tint-page">
        <div className="lip-tint-image-section">
          <img src={TintImage} alt="Lip Tint" className="lip-tint-image" />
        </div>
        <div className="lip-tint-details-section">
          <h1 className="lip-tint-title">LIP TINT</h1>
          <h2 className="lip-tint-subtitle">THE TINTED LIP LAYER</h2>
          <p className="lip-tint-description">
            Meet Lip Tint. Sheer-but-buildable color that melts onto lips for a hint of tint and rich, glossy finish...
          </p>
          <div className="lip-tint-select">
            <span className="label">Color:</span>
            <div className="swatch espresso"></div>
            <span className="variant">CHERRY - Cherry Red</span>
          </div>
          <button
            className="buy-button"
            onClick={() => onAddToCart(productToAdd)} // Pass the complete product object
          >
            $11.00 - BUY LIP TINT
          </button>
          <div className="lip-tint-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>A lip tint that hydrates and nourishes</li>
              <li>Replenishes dry lips</li>
              <li>Helps lock-in moisture for visibly plumper, softer lips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LipTint;
