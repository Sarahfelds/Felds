import React from 'react';
import './RedLip.css'; // Import the CSS file for styling
import RedLipImage from '../Components/Assets/RedLip.jpg'; // Import the specific image
import '../Components/Navbar/Navbar.css'; // Import Navbar CSS for consistent navigation styling

const RedLip = ({ onNavigate, onAddToCart, onSearchClick, onCartClick, cartItemCount }) => { // Added onSearchClick, onCartClick, cartItemCount to props
  const productToAdd = {
    id: 'red-lip-collection', // Unique ID for the product
    name: "THEE SHADES OF RED",
    variant: "Lady in Red Collection", // A variant for the collection
    price: 55.00, // Example price for the collection
    image: RedLipImage, // Pass the imported image
  };

  return (
    <div className="red-lip-page-wrapper">
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
      <div className="red-lip-page">
        <div className="red-lip-image-section">
          <img src={RedLipImage} alt="Three Shades of Red Lipsticks" className="red-lip-image" />
        </div>
        <div className="red-lip-details-section">
          <h1 className="red-lip-title">THEE SHADES OF RED</h1>
          <h2 className="red-lip-subtitle">LADY IN RED.</h2>
          <p className="red-lip-description">
            Our red collection, inspired by the beauty icon Marilyn Monroe, brings together three exquisite shades
            of red lipstick designed to empower and captivate. Each lipstick offers a creamy, long-lasting formula
            that glides on effortlessly, providing rich color payoff and comfortable wear. Perfect for every occasion,
            from a subtle pop to a bold statement.
          </p>
          <div className="red-lip-select">
            <span className="label">Collection:</span>
            <div className="swatch red-collection"></div>
            <span className="variant">Classic Red, Deep Berry, Fiery Crimson</span>
          </div>

          <button
            className="red-lip-buy-button"
            onClick={() => onAddToCart(productToAdd)}
          >
            ${productToAdd.price.toFixed(2)} - ADD TO CART
          </button>

          <div className="red-lip-benefits">
            <h3>BENEFITS</h3>
            <ul>
              <li>Intensely pigmented for vibrant color</li>
              <li>Creamy, comfortable wear that lasts for hours</li>
              <li>Enriched with moisturizing ingredients to prevent drying</li>
              <li>Versatile shades suitable for various skin tones and occasions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedLip;
