import React from 'react';
import './FnS.css'; // Import the CSS file for styling
import FnSImage from '../Components/Assets/Skin.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const FnS = ({ onNavigate, onAddToCart, onSearchClick, onCartClick, cartItemCount }) => { // Added onSearchClick, onCartClick, cartItemCount to props
  const productToAdd = {
    id: 'garden-of-eden-f&s', // Unique ID for the product
    name: "SERUM + FOUNDATION",
    variant: "Garden of Eden", // Variant for the collection
    price: 130.00, // Example price for the collection
    image: FnSImage, // Pass the imported image
  };

  return (
    <div className="fns-page-wrapper">
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
          {/* Updated onClick handlers for SEARCH and CART, and cart item count */}
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">
            ACCOUNT
          </button>
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>
            CART({cartItemCount})
          </button>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="fns-page">
        <div className="fns-image-section">
          <img src={FnSImage} alt="Serum + Foundation - Garden of Eden" className="fns-image" />
        </div>
        <div className="fns-details-section">
          <h1 className="fns-title">SERUM + FOUNDATION</h1>
          <h2 className="fns-subtitle">GARDEN OF EDEN</h2>
          <p className="fns-description">
            Our golden serum for a pore-less base & our smooth medium coverage foundation for an angel skin.
            This powerful duo works in harmony to perfect your complexion. The serum preps your skin, minimizing
            pores and creating a smooth canvas, while the foundation provides buildable, natural-looking coverage
            that feels weightless and lasts all day.
          </p>
          <div className="fns-select">
            <span className="label">Shade:</span>
            <div className="swatch fns-shades"></div> {/* A generic swatch for the shades */}
            <span className="variant">Light, Medium, Tan, Deep</span>
          </div>

          <button
            className="fns-buy-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            ${productToAdd.price.toFixed(2)} - ADD TO CART
          </button>

          <div className="fns-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Achieve a flawless, pore-less base</li>
              <li>Medium coverage for a natural, radiant finish</li>
              <li>Lightweight and comfortable for all-day wear</li>
              <li>Nourishes skin while providing coverage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FnS;
