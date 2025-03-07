import React from 'react';
import './Navbar.css'
const Navbar = ({ navItems = [], heroTitle = 'Meet RED.', heroSubtitle = 'Arriving February 15th at 9am GST', philosophyTitle = 'A new PHILOSOPHY on LIPCARE.' }) => {
    const defaultNavItems = [
      { text: 'SHOP'},
      { text: 'ABOUT'},
      { text: 'FUTURES'},
      { text: 'SEARCH'},
      { text: 'ACCOUNT'},
      { text: 'CART(0)'}
    ];

  const items = navItems.length ? navItems : defaultNavItems;

    return (
        <navbar className="navbar">
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">
          <img src="https://dashboard.codeparrot.ai/api/image/Z7bt6KWN819FoZw1/pause.png" alt="pause" width="24" height="24" />
        </button>
      </div>
      

      <div className="hero-section">
      <nav className="main-nav">
        <div className="nav-left">
          {items.slice(0, 3).map((item, index) => (
            <a key={index} href={item.link} className="nav-item">{item.text}</a>
          ))}
        </div>

        <div className="logo-container">
          <h1 className="logo">RED.</h1>
          <span className="subtitle">By Sarah</span>
        </div>

        <div className="nav-right">
          {items.slice(3).map((item, index) => (
            <a key={index} href={item.link} className="nav-item">{item.text}</a>
          ))}
        </div>
      </nav>
        <div className="hero-content">
        
          <h2 className="hero-title">{heroTitle}</h2>
          <p className="hero-subtitle">{heroSubtitle}</p>
          <button className="waitlist-button">JOIN THE WAITLIST</button>
        </div>
        <button className="pause-circle">
          <img src="https://dashboard.codeparrot.ai/api/image/Z7bt6KWN819FoZw1/pause-ci.png" alt="pause circle" width="48" height="48" />
        </button>
      </div>

      <div className="philosophy-section">
        <h2 className="philosophy-title">{philosophyTitle}</h2>
        <button className="shop-now-button">SHOP NOW</button>
      </div>
    </navbar>
    );
};

export default Navbar