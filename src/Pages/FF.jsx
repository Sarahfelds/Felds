import React from 'react';
import './FF.css'; // Import the CSS file for styling
import FFImage from '../Components/Assets/Glosses.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const FF = ({ onNavigate, onAddToCart, onSearchClick, onCartClick, cartItemCount }) => { // Added onSearchClick, onCartClick, cartItemCount to props
  const productToAdd = {
    id: 'forbidden-fruit-gloss', // Unique ID for the product
    name: "TWO SHADES OF GLOSS",
    variant: "Forbidden Fruit", // Variant for the gloss
    price: 38.00, // Example price for the gloss
    image: FFImage, // Pass the imported image
  };

  return (
    <div className="ff-page-wrapper">
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
      <div className="ff-page">
        <div className="ff-image-section">
          <img src={FFImage} alt="Two Shades of Gloss - Forbidden Fruit" className="ff-image" />
        </div>
        <div className="ff-details-section">
          <h1 className="ff-title">TWO SHADES OF GLOSS</h1>
          <h2 className="ff-subtitle">FORBIDDEN FRUIT</h2>
          <p className="ff-description">
            Our summer vibes lip plumping gloss for more full natural lips. This luscious gloss delivers a high-shine,
            non-sticky finish with a subtle plumping effect. Infused with hydrating ingredients, it keeps your lips
            feeling soft, smooth, and looking irresistibly juicy. Available in two complementary shades.
          </p>
          <div className="ff-select">
            <span className="label">Shade:</span>
            <div className="swatch gloss-shades"></div> {/* A generic swatch for the gloss shades */}
            <span className="variant">Coffee Brown, Red Brown</span>
          </div>

          <button
            className="ff-buy-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            ${productToAdd.price.toFixed(2)} - ADD TO CART
          </button>

          <div className="ff-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Visibly plumps lips for a fuller look</li>
              <li>High-shine, non-sticky formula</li>
              <li>Hydrates and nourishes for soft, smooth lips</li>
              <li>Two complementary shades for versatile wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FF;
