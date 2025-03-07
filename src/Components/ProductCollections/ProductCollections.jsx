import React from 'react';
import './ProductCollections.css';
import RedLip from '../Assets/RedLip.jpg';
import Glosses from '../Assets/Glosses.jpg';
import Skin from '../Assets/Skin.jpg';
const ProductCollections = () => {
    const collections = [
      {
        title: 'THEE SHADES OF RED',
        subtitle: 'LADY IN RED.',
        description: 'Our red collection inspired by the beauty icon Marilyn Monroe',
        image: RedLip
      },
      {
        title: 'TWO SHADES OF GLOSS',
        subtitle: 'Forbidden Fruit',
        description: 'Our summer vibes lip plumping gloss for more full natural lips.',
        image: Glosses
      },
      {
        title: 'SERUM + FOUNDATION',
        subtitle: 'Garden of Eden',
        description: 'Our golden serum for a pore less base & Our smooth medium coverage foundation for an angel skin.',
        image: Skin
      }
    ];
  
    return (
      <div className="product-page">
        

        <section className="collections-section">
          <div className="section-header">
            <h2>OUR COLLECTIONS</h2>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8Hl7237P2WCQpJW/arrow-ri.png" alt="arrow right" className="arrow-icon" />
          </div>
  
          <div className="collections-grid">
            {collections.map((collection, index) => (
              <div key={index} className="collection-card">
                <img src={collection.image} alt={collection.title} />
                <div className="card-content">
                  <h3>{collection.title}</h3>
                  <h4>{collection.subtitle}</h4>
                  <p>{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          <button className="navigate-next">
            <img src="https://dashboard.codeparrot.ai/api/image/Z8Hl7237P2WCQpJW/navigate.png" alt="navigate next" />
          </button>
        </section>
      </div>
    );
  };

export default ProductCollections
