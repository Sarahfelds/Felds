import React from 'react';
import './LipPlumper.css';
import PlumperImage from '../Components/Assets/Plump-2.jpg';
import '../Components/Navbar/Navbar.css';

const LipPlumper = ({ onNavigate, onAddToCart, onCartClick, onSearchClick }) => { // Added onCartClick, onSearchClick to props
  const productToAdd = {
    id: 'lip-plumper-strawberry-glaze', // Unique ID for the product
    name: "LIP PLUMPER",
    variant: "Strawberry Glaze", // Include variant for better cart display
    price: 18.0,
    image: PlumperImage, // Pass the imported image
  };

  return (
    <div className="lip-plumper-page-wrapper">
      {/* Top Banner */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">⏸️</button>
      </div>

      {/* Navigation */}
      <nav className="futures-nav"> {/* Using 'futures-nav' as it seems to be your common nav class */}
        <div className="nav-left">
          <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item">
            SHOP
          </button>
          {/* Corrected: 'ABOUT' button now navigates to "about" page */}
          <button onClick={() => onNavigate && onNavigate("about")} className="nav-item">
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
          {/* Added onClick handlers for SEARCH, ACCOUNT, and CART */}
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">
            ACCOUNT
          </button>
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>
            CART
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="lip-plumper-page">
        <div className="lip-plumper-image-section">
          <img src={PlumperImage} alt="Lip Plumper" className="lip-plumper-image" />
        </div>
        <div className="lip-plumper-details-section">
          <h1 className="lip-plumper-title">LIP PLUMPER</h1>
          <h2 className="lip-plumper-subtitle">THE LIP PLUMPING LAYER</h2>
          <p className="lip-plumper-description">
            A nourishing treat for visibly plump, pillowy-soft lips — day or night. This dreamy formula leaves lips looking glossy and works hard to nourish and moisturize dry lips.
            Size: 10ml / .3 fl oz.
          </p>
          <div className="lip-plumper-select">
            <span className="label">Scent:</span>
            <div className="swatch vanilla"></div>
            <span className="variant">Strawberry Glaze</span>
          </div>

          <button
            className="plumper-buy-button"
            onClick={() => onAddToCart(productToAdd)} // Pass the complete product object
          >
            $18.00 - BUY LIP PLUMPER
          </button>

          <div className="lip-plumper-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Replenishes dry lips</li>
              <li>Helps lock-in moisture for visibly plumper, softer lips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LipPlumper;
