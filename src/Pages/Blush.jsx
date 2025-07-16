import React from 'react';
import './Blush.css'; // Import the CSS file for styling
import BlushImage from '../Components/Assets/Blush.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const Blush = ({ onNavigate, onAddToCart, onCartClick, onSearchClick, cartItemCount }) => {
  const productToAdd = {
    id: 'pocket-blush-rose', // Unique ID for the product
    name: "POCKET BLUSH",
    variant: "Rose - Soft Pink", // Example variant for blush
    price: 24.00, // Example price for the blush
    image: BlushImage, // Pass the imported image
  };

  return (
    <div className="blush-page-container">
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

      {/* Main Blush Section */}
      <div className="blush-page">
        <div className="blush-image-section">
          <img src={BlushImage} alt="Pocket Blush" className="blush-image" />
        </div>
        <div className="blush-details-section">
          <h1 className="blush-title">POCKET BLUSH</h1>
          <h2 className="blush-subtitle">THE BLUSH FOR LIPS & CHEEKS</h2>
          <p className="blush-description">
            A versatile cream blush stick that delivers a natural flush of color to both lips and cheeks. Its creamy,
            blendable formula glides on smoothly, providing a sheer-to-buildable tint that lasts all day. Infused with
            skin-loving ingredients, it leaves a soft, dewy finish, enhancing your natural radiance. Perfect for on-the-go touch-ups.
            Size: 5g / 0.17 oz.
          </p>

          <div className="blush-color">
            <span>Color:</span>
            <div className="color-swatch blush-swatch"></div> {/* Custom swatch for blush */}
            <span>Rose - Soft Pink</span>
          </div>

          <button
            className="blush-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            BUY POCKET BLUSH - ${productToAdd.price.toFixed(2)}
          </button>

          <div className="blush-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Multi-use for lips and cheeks</li>
              <li>Creamy, blendable, and long-lasting formula</li>
              <li>Natural, radiant finish</li>
              <li>Hydrating and comfortable wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blush;
