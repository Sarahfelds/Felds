"use client"
import "./Navbar.css"

const Navbar = ({
  navItems = [],
  heroTitle = "Meet RED.",
  heroSubtitle = "Arriving February 15th at 9am GST",
  philosophyTitle = "A new PHILOSOPHY on LIPCARE.",
  onNavigate,
  onCartClick,
  onSearchClick,
  cartItemCount = 0,
}) => {
  const defaultNavItems = [
    { text: "SHOP" },
    { text: "ABOUT" },
    { text: "FUTURES" },
    { text: "SEARCH" },
    { text: "ACCOUNT" },
    { text: `CART(${cartItemCount})` },
  ]

  const items = navItems.length ? navItems : defaultNavItems

  const handleNavClick = (itemText) => {
    const lower = itemText.toLowerCase()
    if (lower.includes("account") && onNavigate) {
      onNavigate("login")
    } else if (lower.includes("futures") && onNavigate) {
      onNavigate("futures")
    } else if (lower.includes("search")) {
      onSearchClick?.()
    } else if (lower.includes("shop") && onNavigate) {
      onNavigate("shop")
    } else if (lower.includes("about") && onNavigate) {
      onNavigate("about") // <-- CHANGED THIS LINE from "home" to "about"
    } else if (lower.includes("cart")) {
      onCartClick?.()
    }
  }

  const handleLogoClick = () => {
    onNavigate?.("home")
  }

  return (
    <div className="navbar">
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7bt6KWN819FoZw1/pause.png"
            alt="pause"
            width="24"
            height="24"
          />
        </button>
      </div>
      <div className="hero-section">
        <nav className="main-nav">
          <div className="nav-left">
            {items.slice(0, 3).map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.text)}
                className="nav-item"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {item.text}
              </button>
            ))}
          </div>
          <div className="logo-container">
            <button
              onClick={handleLogoClick}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              className="logo-button"
            >
              <h1 className="logo">RED.</h1>
              <span className="subtitle">By Sarah</span>
            </button>
          </div>
          <div className="nav-right">
            {items.slice(3).map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.text)}
                className="nav-item"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {item.text}
              </button>
            ))}
          </div>
        </nav>
        <div className="hero-content">
          <h2 className="hero-title">{heroTitle}</h2>
          <p className="hero-subtitle">{heroSubtitle}</p>
          <button className="waitlist-button">JOIN THE WAITLIST</button>
        </div>
        <button className="pause-circle">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7bt6KWN819FoZw1/pause-ci.png"
            alt="pause circle"
            width="48"
            height="48"
          />
        </button>
      </div>
      <div className="philosophy-section">
        <h2 className="philosophy-title">{philosophyTitle}</h2>
        <button className="shop-now-button" onClick={() => onNavigate?.("shop")}>
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default Navbar
