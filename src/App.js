import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import LipPlumperSection from './Components/LipPlumperSection/LipPlumperSection';
import LipCareSection from './Components/LipCareSection/LipCareSection';
import ProductCollections from './Components/ProductCollections/ProductCollections';
import Footer from './Components/Footer/Footer';
import Futures from './Pages/Futures';
import LipShape from './Pages/LipShape';
import LipPlumper from './Pages/LipPlumper';
import LipTint from './Pages/LipTint';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import About from './Pages/About';
import RedLip from './Pages/RedLip';
import FF from './Pages/FF';
import FnS from './Pages/FnS';
import Blush from './Pages/Blush';
import Gloss from './Pages/Gloss';
import Balm from './Pages/Balm';
import Foundation from './Pages/Foundation';

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id && item.variant === newItem.variant)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id && item.variant === newItem.variant ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
    setCartOpen(true); // Open the cart sidebar after adding an item
  }

  const handleCloseCart = () => {
    setCartOpen(false)
  }

  const handleCloseSearch = () => {
    setSearchOpen(false)
  }

  // Props to inject in pages with cart + navigation
  const pageProps = {
    onNavigate: handleNavigation,
    onAddToCart: handleAddToCart,
    cartItemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    onCartClick: () => setCartOpen(true),
    onSearchClick: () => setSearchOpen(true),
  }

  // Helper function for common layout, excluding Navbar for specific pages
  // eslint-disable-next-line no-unused-vars
  const commonLayout = (PageComponent, showHero = false, showPhilosophy = false) => (
    <>
      {/* Conditionally render the main Navbar based on the page */}
      {currentPage !== "login" &&
       currentPage !== "futures" &&
       currentPage !== "shop" &&
       currentPage !== "lip-shape" &&
       currentPage !== "lip-plumper" &&
       currentPage !== "lip-tint" &&
       currentPage !== "about" &&
       currentPage !== "red-lip" &&
       currentPage !== "forbidden-fruit" &&
       currentPage !== "f&s" &&
       currentPage !== "blush" &&
       currentPage !== "gloss" &&
       currentPage !== "balm" &&
       currentPage !== "foundation" && 
       (
        <Navbar
          onNavigate={handleNavigation}
          onCartClick={pageProps.onCartClick}
          onSearchClick={pageProps.onSearchClick}
          cartItemCount={pageProps.cartItemCount}
          showHeroSection={showHero}
          showPhilosophySection={showPhilosophy}
        />
      )}
      <PageComponent {...pageProps} />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
      <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
    </>
  )

  // Render different pages based on currentPage state
  if (currentPage === "shop") {
    return (
      <div className="min-h-screen">
        <Shop {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "futures") {
    return (
      <div className="min-h-screen">
        <Futures {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "lip-shape") {
    return (
      <div className="min-h-screen">
        <LipShape {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "lip-plumper") {
    return (
      <div className="min-h-screen">
        <LipPlumper {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "lip-tint") {
    return (
      <div className="min-h-screen">
        <LipTint {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "login") {
    return (
      <div className="min-h-screen">
        <LoginSignup {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "about") {
    return (
      <div className="min-h-screen">
        <About {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "red-lip") {
    return (
      <div className="min-h-screen">
        <RedLip {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "forbidden-fruit") {
    return (
      <div className="min-h-screen">
        <FF {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "f&s") {
    return (
      <div className="min-h-screen">
        <FnS {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "blush") {
    return (
      <div className="min-h-screen">
        <Blush {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "gloss") {
    return (
      <div className="min-h-screen">
        <Gloss {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "balm") {
    return (
      <div className="min-h-screen">
        <Balm {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }
  if (currentPage === "foundation") {
    return (
      <div className="min-h-screen">
        <Foundation {...pageProps} />
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
        <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
      </div>
    )
  }

  // Home Page - shows full navbar with hero and philosophy sections
  return (
    <div className="min-h-screen">
      <Navbar
        onNavigate={handleNavigation}
        onCartClick={pageProps.onCartClick}
        onSearchClick={pageProps.onSearchClick}
        cartItemCount={pageProps.cartItemCount}
        showHeroSection={true}
        showPhilosophySection={true}
      />
      <LipPlumperSection onNavigate={handleNavigation} /> {/* Pass onNavigate here */}
      <LipCareSection onNavigate={handleNavigation} />
      <ProductCollections onNavigate={handleNavigation} />
      <Footer />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
      <Search isOpen={isSearchOpen} onClose={handleCloseSearch} onNavigate={handleNavigation} />
    </div>
  )
}

export default App
