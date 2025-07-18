import React from 'react';
import './Gloss.css'; // Import the CSS file for styling
import GlossImage from '../Components/Assets/Gloss-2.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const Gloss = ({ onNavigate, onAddToCart, onCartClick, onSearchClick, cartItemCount }) => {
  const productToAdd = {
    id: 'gloss-universal', // Unique ID for the product
    name: "GLOSS",
    variant: "Universal Clear", // Example variant for gloss
    price: 18.00, // Example price for the gloss
    image: GlossImage, // Pass the imported image
  };

  return (
    <div className="gloss-page-container">
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

      {/* Main Gloss Section */}
      <div className="gloss-page">
        <div className="gloss-image-section">
          <img src={GlossImage} alt="Gloss" className="gloss-image" />
        </div>
        <div className="gloss-details-section">
          <h1 className="gloss-title">GLOSS</h1>
          <h2 className="gloss-subtitle">THE GLOSS FOR LIPS</h2>
          <p className="gloss-description">
            A high-shine, non-sticky lip gloss that delivers a comfortable wear and a dazzling finish. Infused with
            nourishing ingredients, it keeps your lips hydrated and soft, while providing a beautiful, reflective sheen.
            Perfect for adding a touch of glamour to any look, or for layering over your favorite lipstick.
            Size: 4.5ml / 0.15 fl oz.
          </p>

          <div className="gloss-color">
            <span>Shade:</span>
            <div className="color-swatch gloss-swatch"></div> {/* Custom swatch for gloss */}
            <span>Universal Clear</span>
          </div>

          <button
            className="gloss-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            BUY GLOSS - ${productToAdd.price.toFixed(2)}
          </button>

          <div className="gloss-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>High-shine, non-sticky formula</li>
              <li>Hydrates and softens lips</li>
              <li>Comfortable and lightweight wear</li>
              <li>Enhances natural lip color or layers beautifully</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gloss;
