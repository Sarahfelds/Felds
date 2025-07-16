import React from 'react';
import './Balm.css'; // Import the CSS file for styling
import BalmImage from '../Components/Assets/Balm.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const Balm = ({ onNavigate, onAddToCart, onCartClick, onSearchClick, cartItemCount }) => {
  const productToAdd = {
    id: 'lip-balm-restore', // Unique ID for the product
    name: "BALM",
    variant: "Restore - Unscented", // Example variant for balm
    price: 11.00, // Example price for the balm
    image: BalmImage, // Pass the imported image
  };

  return (
    <div className="balm-page-container">
      {/* Top Banner - Reusing consistent styling */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">⏸️</button>
      </div>

      {/* Navigation - Reusing consistent styling */}
      <nav className="futures-nav">
        <div className="nav-left">
          <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item">
            SHOP
          </button>
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
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">
            ACCOUNT
          </button>
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>
            CART({cartItemCount})
          </button>
        </div>
      </nav>

      {/* Main Balm Section */}
      <div className="balm-page">
        <div className="balm-image-section">
          <img src={BalmImage} alt="Lip Balm" className="balm-image" />
        </div>
        <div className="balm-details-section">
          <h1 className="balm-title">BALM</h1>
          <h2 className="balm-subtitle">THE BALANCING LIP BALM</h2>
          <p className="balm-description">
            A deeply nourishing and restorative lip balm designed to soothe dry, chapped lips. This rich, emollient
            formula provides long-lasting hydration, creating a protective barrier against environmental stressors.
            It leaves lips feeling soft, smooth, and perfectly balanced, ready for any adventure.
            Size: 10ml / 0.3 fl oz.
          </p>

          <div className="balm-color">
            <span>Type:</span>
            <div className="color-swatch balm-swatch"></div> {/* Custom swatch for balm */}
            <span>Restore - Unscented</span>
          </div>

          <button
            className="balm-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            BUY BALM - ${productToAdd.price.toFixed(2)}
          </button>

          <div className="balm-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Deeply hydrates and restores dry lips</li>
              <li>Creates a protective barrier</li>
              <li>Leaves lips soft, smooth, and comfortable</li>
              <li>Unscented formula for sensitive lips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balm;
