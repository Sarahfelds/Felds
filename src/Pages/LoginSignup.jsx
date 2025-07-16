import React, { useState } from "react"
import './LoginSignup.css'

const LoginSignup = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      console.log("Login attempt:", { email: formData.email, password: formData.password })
    } else {
      console.log("Signup attempt:", formData)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ email: "", password: "", confirmPassword: "" })
  }

  const handleForgotPassword = () => {
    console.log("Forgot password clicked")
    alert("Forgot password functionality would go here!")
  }

  return (
    <div className="login-signup-container">
      {/* Top Banner */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">
          ⏸️
        </button>
      </div>

      {/* Navigation */}
      <nav className="login-nav">
        <div className="nav-left">
        <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item">
          SHOP
        </button>
          <button
            onClick={() => onNavigate && onNavigate("about")}
            className="nav-item"
          >
            ABOUT
          </button>
          <button
            onClick={() => onNavigate && onNavigate("futures")}
            className="nav-item"
          >
            FUTURES
          </button>
        </div>

        <button 
          onClick={() => onNavigate && onNavigate("home")} 
          className="logo-container"
        >
          <h1 className="logo">RED.</h1>
          <span className="subtitle">By Sarah</span>
        </button>

        <div className="nav-right">
          <button className="nav-item">SEARCH</button>
          <button className="nav-item">ACCOUNT</button>
          <button className="nav-item">CART(0)</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Product Image */}
        <div className="product-image-section">
          <div className="blur-effect-1"></div>
          <div className="blur-effect-2"></div>
        </div>

        {/* Right Side - Login Form */}
        <div className="form-section">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">
                {isLogin ? "Login" : "Sign Up"}
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              )}

              <button type="submit" className="submit-button">
                {isLogin ? "SIGN IN" : "SIGN UP"}
              </button>
            </form>

            <div className="form-links">
              {isLogin && (
                <button 
                  onClick={handleForgotPassword}
                  className="forgot-password-btn"
                >
                  Forgot your password?
                </button>
              )}

              <p className="toggle-text">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={toggleMode}
                  className="toggle-button"
                >
                  {isLogin ? "Sign up!" : "Sign in!"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup