import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ defaultEmail = '' }) => {
    const [email, setEmail] = useState(defaultEmail);
  
    const handleSubscribe = () => {
      if (email) {
        console.log('Subscribed with email:', email);
        setEmail('');
      }
    };
  
    return (
      <div className="footer">
        <div className="footer-logo">RED.</div>
        
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-text">Join us & Experience the red journey to a dewy natural look.</p>
            
            <div className="subscribe-container">
              <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
              />
              <div className="divider"></div>
              <button onClick={handleSubscribe} className="subscribe-btn">
                SUBSCRIBE
              </button>
            </div>
            
            <p className="privacy-text">
              By signing up, you agree to our <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
  
          <div className="footer-divider"></div>
  
          <div className="footer-links">
            <div className="nav-section">
              <h3>NAVIGATE</h3>
              <a href="/shop">SHOP</a>
              <a href="/story">OUR STORY</a>
              <a href="/upcoming">UPCOMING</a>
            </div>
  
            <div className="socials-section">
              <h3>SOCIALS</h3>
              <a href="/instagram" className="social-link">
                <img src="https://dashboard.codeparrot.ai/api/image/Z8Ho5m37P2WCQpJX/instagra.png" alt="Instagram" />
                Instagram
              </a>
              <a href="/youtube" className="social-link">
                <img src="https://dashboard.codeparrot.ai/api/image/Z8Ho5m37P2WCQpJX/youtube.png" alt="YouTube" />
                YouTube
              </a>
              <a href="/tiktok" className="social-link">TikTok</a>
            </div>
  
            <div className="official-section">
              <h3>OFFICIAL</h3>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/accessibility">Accessibility</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
  
        <div className="support-section">
          <h3>SUPPORT</h3>
          <p>We are here S-F 9am - 5pm GST</p>
          <p>Drop us a note anytime:</p>
          <a href="mailto:hello@red.com">hello@red.com</a>
        </div>
  
        <div className="region-selector">
          <span>County/Region: United States (USD$)</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8Ho5m37P2WCQpJX/arrow-dr.png" alt="dropdown" className="dropdown-icon" />
        </div>
      </div>
    );
  };

export default Footer
