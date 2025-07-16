"use client"
import "./Cart.css"

const Cart = ({ isOpen, onClose, cartItems = [] }) => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const freeShippingThreshold = 35
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const progressPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  

  

  const handleCheckout = () => {
    console.log("Proceed to checkout")
    // Add checkout logic here
  }

  if (!isOpen) return null

  return (
    <div className="cart-overlay">
      {/* Background overlay */}
      <div className="cart-backdrop" onClick={onClose}></div>

      {/* Cart sidebar */}
      <div className="cart-sidebar">
        {/* Header */}
        <div className="cart-header">
          <h2 className="cart-title">
            {cartItems.length === 0 ? "Your cart is currently empty" : `Your cart (${cartItems.length})`}
          </h2>
          <button className="cart-close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="shipping-progress-section">
          <div className="shipping-progress-bar">
            <div className="shipping-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          {remainingForFreeShipping > 0 ? (
            <p className="shipping-text">
              Add <span className="shipping-amount">${remainingForFreeShipping.toFixed(2)}</span> more for{" "}
              <strong>FREE</strong> shipping
            </p>
          ) : (
            <p className="shipping-text shipping-achieved">
              🎉 You've qualified for <strong>FREE</strong> shipping!
            </p>
          )}
        </div>

        {/* Cart items */}
        <div className="cart-items-section">
          {cartItems.length > 0 ? (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.target.style.display = "none"
                        e.target.parentElement.style.backgroundColor = "#f3f4f6"
                      }}
                    />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-variant">{item.variant}</p>
                    <div className="cart-item-quantity">
                      <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

    

        {/* Cart footer */}
        <div className="cart-footer">
          <div className="cart-subtotal">
            <div className="subtotal-row">
              <span className="subtotal-label">Subtotal</span>
              <span className="subtotal-amount">${subtotal.toFixed(2)}</span>
            </div>
            <p className="cart-disclaimer">*shipping, taxes, and discounts calculated at checkout.</p>
          </div>

          <button className="checkout-button" onClick={handleCheckout} disabled={cartItems.length === 0}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
