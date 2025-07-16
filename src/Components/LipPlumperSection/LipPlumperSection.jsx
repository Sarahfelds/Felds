import React from 'react';
import './LipPlumperSection.css';
import PlumperImage from '../Assets/Plumper.jpg'; // Corrected import path for Plumper image

const LipPlumperSection = ({ onNavigate, title = "PLUMP YOUR LIPS", description = "Build your plumping pout with our Hydrating Lip Plumper in a spectrum of shades. Choose a sheer tint that enhances your natural lip color for a subtle glow, or opt for a bolder hue for a more dramatic effect.", buttonText = "MEET HYDRATING LIP PLUMPER" }) => {
    return (
      <div className="lip-plumper-section">
        <div className="content-container">
          <div className="text-content">
            <h1 className="title">{title}</h1>
            <p className="description">
              {description}
            </p>
            <button className="cta-button" onClick={() => onNavigate && onNavigate("lip-plumper")}> {/* Added onClick handler */}
              {buttonText}
            </button>
          </div>
  
          <div className="plump-sidebar">
            <div className="plump-text">PLUMP</div>
            <div className="star-container">
              <img src="https://dashboard.codeparrot.ai/api/image/Z8Hdf237P2WCQpJS/star-fil-3.png" alt="Star" width="30" height="30" />
            </div>
            <div className="plump-text">PLUMP</div>
            <div className="star-container">
              <img src="https://dashboard.codeparrot.ai/api/image/Z8Hdf237P2WCQpJS/star-fil-2.png" alt="Star" width="30" height="30" />
            </div>
            <div className="plump-text">PLUMP</div>
            <div className="star-container">
              <img src="https://dashboard.codeparrot.ai/api/image/Z8Hdf237P2WCQpJS/star-fil.png" alt="Star" width="30" height="30" />
            </div>
            <div className="plump-text">PLUMP</div>
          </div>
  
          <div className="image-container">
          <img src={PlumperImage} alt="Plumper" className="product-image" /> {/* Used imported image */}
          </div>
        </div>
      </div>
    );
  };

export default LipPlumperSection
