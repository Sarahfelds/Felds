"use client"
import { useState } from "react"
import "./Shop.css"
import BlushImg from '../Components/Assets/Blush.jpg';
import GlossImg from '../Components/Assets/Gloss.jpg';
import ShapeImg from '../Components/Assets/Shape.jpg';
import RedLipImg from '../Components/Assets/RedLip.jpg';
import SkinImg from '../Components/Assets/Skin.jpg';
import GlossesImg from '../Components/Assets/Glosses.jpg';
import TintImg from '../Components/Assets/Tint-2.jpg';
import PlumperImg from '../Components/Assets/Plumper.jpg';
import BalmImg from '../Components/Assets/Balm.jpg';
import FaImg from '../Components/Assets/Foundation.jpg';

const Shop = ({ onNavigate, onSearchClick, onCartClick, cartItemCount }) => { // Ensure cartItemCount is received as a prop
  const [activeFilter, setActiveFilter] = useState("FEATURED")

  const products = [
    {
      id: 1,
      category: "BLUSH",
      name: "POCKET BLUSH",
      subtitle: "The blush for lips",
      price: 24.0,
      image: BlushImg,
      size: "medium",
      featured: true,
      page: 'blush', // No specific product page for this
    },
    {
      id: 2,
      category: "GLOSS",
      name: "GLOSS",
      subtitle: "The gloss for lips",
      price: 18.0,
      image: GlossImg,
      size: "medium",
      featured: true,
      page: 'gloss', // No specific product page for this
    },
    {
      id: 3,
      category: "SHAPE",
      name: "LIP SHAPE",
      subtitle: "The balancing lip shape",
      price: 10.0,
      image: ShapeImg,
      size: "small",
      featured: true,
      page: 'lip-shape', // Link to LipShape page
    },
    {
      id: 4,
      category: "THREE SHADES OF RED",
      name: "LADY IN RED.",
      subtitle: "Our red collection inspired by the beauty icon Marilyn Monroe",
      price: 55.0,
      image: RedLipImg,
      size: "small",
      featured: true,
      page: 'red-lip', // Link to RedLip page
    },
    {
      id: 5,
      category: "SERUM + FOUNDATION",
      name: "Garden of Eden",
      subtitle: "Our radiant Serum gives flawless skin & our smooth medium coverage foundation gives you that glow",
      price: 130.0,
      image: SkinImg,
      size: "small",
      featured: true,
      page: 'f&s', // Link to FnS page
    },
    {
      id: 6,
      category: "TWO SHADES OF GLOSS",
      name: "Forbidden Fruit",
      subtitle: "Our summer vibes lip plumping gloss for more full natural lips",
      price: 38.0,
      image: GlossesImg,
      size: "small",
      featured: true,
      page: 'forbidden-fruit', // Link to FF page
    },
    {
      id: 7,
      category: "TINT",
      name: "LIP TINT", // Changed name to match LipTint.jsx
      subtitle: "The tinted lip layer", // Changed subtitle to match LipTint.jsx
      price: 11.0,
      image: TintImg,
      size: "small",
      featured: false,
      page: 'lip-tint', // Link to LipTint page
    },
    {
      id: 8,
      category: "PLUMP",
      name: "LIP PLUMPER",
      subtitle: "The lip plumping serum",
      price: 18.0,
      image: PlumperImg,
      size: "medium",
      featured: false,
      page: 'lip-plumper', // Link to LipPlumper page
    },
    {
      id: 9,
      category: "BALM",
      name: "BALM",
      subtitle: "The balancing lip balm",
      price: 11.0,
      image: BalmImg,
      size: "medium",
      featured: false,
      page: 'balm', // No specific product page for this
    },
    {
      id: 10,
      category: "FOUNDATION",
      name: "FOUNDATION",
      subtitle: "The flawless skin foundation",
      price: 45.0,
      image: FaImg,
      size: "small",
      featured: false,
      page: 'foundation', // No specific product page for this
    },
  ]

  const filters = ["FEATURED", "LIP + CHEEK", "SETS", "SHOP ALL"]

  const getFilteredProducts = () => {
    switch (activeFilter) {
      case "FEATURED":
        return products.filter((product) => product.featured)
      case "LIP + CHEEK":
        return products.filter(
          (product) =>
            product.category.includes("LIP") ||
            product.category.includes("GLOSS") ||
            product.category.includes("BLUSH") ||
            product.category.includes("TINT") ||
            product.category.includes("PLUMP") ||
            product.category.includes("BALM") ||
            product.category.includes("SHAPE"),
        )
      case "SETS":
        return products.filter(
          (product) =>
            product.category.includes("THREE SHADES") ||
            product.category.includes("TWO SHADES") ||
            product.category.includes("SERUM + FOUNDATION"),
        )
      case "SHOP ALL":
        return products
      default:
        return products
    }
  }

  const filteredProducts = getFilteredProducts()

  const handleProductClick = (product) => {
    if (product.page && onNavigate) {
      onNavigate(product.page);
    }
  };

  return (
    <div className="shop-container">
      {/* Top Banner */}
      <div className="shipping-banner">
        <p>FREE SHIPPING FOR ORDERS OVER 35$</p>
        <button className="pause-button">⏸️</button>
      </div>

      {/* Navigation */}
      <nav className="shop-nav">
        <div className="nav-left">
          <button onClick={() => onNavigate && onNavigate("shop")} className="nav-item active">
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
          {/* Added onClick handlers for SEARCH and CART */}
          <button className="nav-item" onClick={() => onSearchClick && onSearchClick()}>SEARCH</button>
          <button onClick={() => onNavigate && onNavigate("login")} className="nav-item">
            ACCOUNT
          </button>
          {/* UPDATED: Use cartItemCount prop here */}
          <button className="nav-item" onClick={() => onCartClick && onCartClick()}>CART({cartItemCount})</button>
        </div>
      </nav>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`product-card ${product.size}`}
            onClick={() => handleProductClick(product)}
            style={{ cursor: product.page ? 'pointer' : 'default' }}
          >
            <div className="product-image">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=300&width=240"
                }}
              />
            </div>
            <div className="product-info">
              <div>
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
              </div>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
