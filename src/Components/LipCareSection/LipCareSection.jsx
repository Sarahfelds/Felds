import React from 'react';
import './LipCareSection.css'
import TintImage from '../Assets/Tint-2.jpg';
import PlumpImage from '../Assets/Plump-2.jpg';
import ShapeImage from '../Assets/Shape.jpg';

const LipCareSection = ({ onNavigate }) => {
  const products = [
    {
      id: 1,
      title: 'SHAPE',
      subtitle: 'LIP SHAPE',
      description: 'The contouring lip shape',
      image: ShapeImage
    },
    {
      id: 2,
      title: 'PLUMP',
      subtitle: 'LIP PLUMPER',
      description: 'The lip plumping layer',
      image: PlumpImage
    },
    {
      id: 3,
      title: 'TINT',
      subtitle: 'TINT',
      description: 'The tinted lip layer',
      image: TintImage
    }
  ];

  const handleProductClick = (id) => {
    if (id === 1) {
      onNavigate("lip-shape");
    } else if (id === 2) {
      onNavigate("lip-plumper");
    } else if (id === 3) {
      onNavigate("lip-tint");
    }
  };

  return (
    <div className="lip-care-container">
      <div className="products-section">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
              <h2 className="product-title">{product.title}</h2>
              <div className="product-info">
                <h3>{product.subtitle}</h3>
                <p>{product.description}</p>
              </div>
            </div>

            {product.id === 3 && (
              <button className="navigate-btn">
                <img src="https://dashboard.codeparrot.ai/api/image/Z8HiMVj1kitRpYNt/navigate.png" alt="navigate" />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="banner-section">
        <h2>Lip Care Redefined</h2>
        <p>Meet Volumizing Lip Gloss, our new essential for plumped-up pouts. It blends brilliant shine with a cocktail of nourishing ingredients to give your lips a luscious look.</p>
      </div>
    </div>
  );
};

export default LipCareSection;
