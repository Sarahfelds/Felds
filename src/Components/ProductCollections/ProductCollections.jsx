import React from 'react';
import './ProductCollections.css';
import RedLip from '../Assets/RedLip.jpg'; // Assuming this path is correct
import Glosses from '../Assets/Glosses.jpg';
import Skin from '../Assets/Skin.jpg';

// Accept onNavigate as a prop
const ProductCollections = ({ onNavigate }) => {
    const collections = [
      {
        title: 'THREE SHADES OF RED',
        subtitle: 'LADY IN RED.',
        description: 'Our red collection inspired by the beauty icon Marilyn Monroe',
        image: RedLip,
        page: 'red-lip' // Add a 'page' property to indicate which page to navigate to
      },
      {
        title: 'TWO SHADES OF GLOSS',
        subtitle: 'Forbidden Fruit',
        description: 'Our summer vibes lip plumping gloss for more full natural lips.',
        image: Glosses,
        page: 'forbidden-fruit',
      },
      {
        title: 'SERUM + FOUNDATION',
        subtitle: 'Garden of Eden',
        description: 'Our golden serum for a pore less base & Our smooth medium coverage foundation for an angel skin.',
        image: Skin,
        page: 'f&s' // No specific page for this, or add one if needed
      }
    ];

    const handleCardClick = (pageName) => {
      if (pageName && onNavigate) {
        onNavigate(pageName);
      }
    };
  
    return (
      <div className="product-page">
        <section className="collections-section">
          <div className="section-header">
            <h2>OUR COLLECTIONS</h2>
          </div>
  
          <div className="collections-grid">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="collection-card"
                onClick={() => handleCardClick(collection.page)} // Add onClick handler
                style={{ cursor: collection.page ? 'pointer' : 'default' }} // Change cursor if clickable
              >
                <img src={collection.image} alt={collection.title} />
                <div className="card-content">
                  <h3>{collection.title}</h3>
                  <h4>{collection.subtitle}</h4>
                  <p>{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

export default ProductCollections;
