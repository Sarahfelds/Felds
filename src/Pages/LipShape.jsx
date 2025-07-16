import React from 'react';
import './LipShape.css';
import ShapeImage from '../Components/Assets/Shapes.jpg';

const LipShape = ({ onNavigate, onAddToCart, onCartClick, onSearchClick }) => { // Added onCartClick, onSearchClick to props
  const productToAdd = {
    id: 'lip-shape-balance', // Unique ID for the product
    name: "LIP SHAPE",
    variant: "Balance - Caramel Brown", // Include variant for better cart display
    price: 10.0,
    image: ShapeImage, // Pass the imported image
  };

  return (
    <div className="lip-shape-page-container">
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

      {/* Main Lip Shape Section */}
      <div className="lip-shape-page">
        <div className="lip-shape-image-section">
          <img src={ShapeImage} alt="Lip Shape" className="lip-shape-image" />
        </div>
        <div className="lip-shape-details-section">
          <h1 className="lip-shape-title">LIP SHAPE</h1>
          <h2 className="lip-shape-subtitle">THE CONTOURING LIP SHAPER</h2>
          <p className="lip-shape-description">
            Enhance your lips effortlessly. Peptide Lip Shape combines soft-focus color and high-performance skincare
            to give your lips dimension. Creamier and more seamless than a lip liner, it glides on to create a
            contoured effect and delivers efficacious ingredients that visibly enhance lip volume.
            Size: 0.75 g / 0.026 oz.
          </p>

          <div className="lip-shape-color">
            <span>Color:</span>
            <div className="color-swatch"></div>
            <span>Balance - Caramel Brown</span>
          </div>

          <button
            className="lip-shape-button"
            onClick={() => onAddToCart(productToAdd)} // Pass the complete product object
          >
            BUY LIP SHAPE - $10.00
          </button>

          <div className="lip-shape-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Creamy color glides on for a contoured effect</li>
              <li>Clinically proven to enhance the appearance of lip fullness</li>
              <li>Helps lips feel smoother and more hydrated over time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LipShape;
