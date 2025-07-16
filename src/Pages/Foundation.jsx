import React from 'react';
import './Foundation.css'; // Import the CSS file for styling
import FoundationImage from '../Components/Assets/Foundation.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const Foundation = ({ onNavigate, onAddToCart, onCartClick, onSearchClick, cartItemCount }) => {
  const productToAdd = {
    id: 'foundation-flawless', // Unique ID for the product
    name: "FOUNDATION",
    variant: "Flawless Skin - Light Beige", // Example variant for foundation
    price: 45.00, // Example price for the foundation
    image: FoundationImage, // Pass the imported image
  };

  return (
    <div className="foundation-page-container">
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

      {/* Main Foundation Section */}
      <div className="foundation-page">
        <div className="foundation-image-section">
          <img src={FoundationImage} alt="Foundation" className="foundation-image" />
        </div>
        <div className="foundation-details-section">
          <h1 className="foundation-title">FOUNDATION</h1>
          <h2 className="foundation-subtitle">THE FLAWLESS SKIN FOUNDATION</h2>
          <p className="foundation-description">
            Achieve a flawless, natural-looking complexion with our lightweight, buildable foundation. This formula
            blends seamlessly into the skin, providing medium coverage that blurs imperfections and evens out skin tone,
            without feeling heavy or cakey. Infused with hydrating ingredients, it leaves your skin looking radiant and
            feeling comfortable all day long.
            Size: 30ml / 1 fl oz.
          </p>

          <div className="foundation-color">
            <span>Shade:</span>
            <div className="color-swatch foundation-swatch"></div> {/* Custom swatch for foundation */}
            <span>Light Beige</span>
          </div>

          <button
            className="foundation-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            BUY FOUNDATION - ${productToAdd.price.toFixed(2)}
          </button>

          <div className="foundation-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Lightweight and breathable formula</li>
              <li>Medium, buildable coverage for a natural finish</li>
              <li>Hydrates and nourishes the skin</li>
              <li>Long-lasting wear without caking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
