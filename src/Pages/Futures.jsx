"use client"
import React from 'react';
import "./Futures.css"

const Futures = ({ onNavigate, onSearchClick, onCartClick, cartItemCount }) => { // Added cartItemCount to props
  console.log("Futures component rendered") // Debug log

  return (
    <div className="futures-container">
      {/* Top Banner */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">⏸️</button>
      </div>

      {/* Navigation */}
      <nav className="futures-nav">
        <div className="nav-left">
        <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item">
          SHOP
        </button>
          <button onClick={() => onNavigate && onNavigate("about")} className="nav-item">
            ABOUT
          </button>
          <button className="nav-item active">FUTURES</button>
        </div>

        <button onClick={() => onNavigate && onNavigate("home")} className="logo-container">
          <h1 className="logo">RED.</h1>
          <span className="subtitle">By Sarah</span>
        </button>

        <div className="nav-right">
          {/* Added onClick handlers for SEARCH and CART */}
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">
            ACCOUNT
          </button>
          {/* UPDATED: Use cartItemCount prop here */}
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>CART({cartItemCount})</button>
        </div>
      </nav>

      {/* Main Product Section */}
      <div className="product-section">
        {/* Left Side - Product Image */}
        <div className="product-image-container">
          <div className="product-image-background"></div>
        </div>

        {/* Right Side - Product Details */}
        <div className="product-details">
          <div className="product-content">
            <h2 className="product-title">RED. FUTURES CREAMY HIGHLIGHT</h2>
            <p className="product-description">
              This creamy highlighter melts seamlessly into your skin, delivering a natural, lit-from-within glow. Its
              blendable formula builds effortlessly from a subtle sheen to a more intense radiance, without ever looking
              cakey or glittery. Perfect for highlighting cheekbones, brow bones, and cupid's bow, it creates a soft,
              dewy finish that complements any makeup look.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Futures
