import React, { useState, useEffect } from 'react'
import './Cart.css'
import { getCart, removeFromCart, updateQuantity, clearCart, getCartPrice } from '../utils/cart'
import { showToast } from '../utils/toast'

export default function Cart({ onClose }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [price, setPrice] = useState('₦0.00')

  useEffect(() => {
    updateCart()
  }, [])

  const updateCart = () => {
    const cartItems = getCart()
    setCart(cartItems)
    setTotal(cartItems.length)
    const totalPrice = getCartPrice().toFixed(2)
    setPrice(`₦${parseFloat(totalPrice).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
  }

  const handleRemove = (productId, productName) => {
    removeFromCart(productId)
    updateCart()
    showToast(`${productName} removed from cart`, 'info')
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) return
    updateQuantity(productId, newQuantity)
    updateCart()
  }

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your entire cart?')) {
      clearCart()
      updateCart()
      showToast('Cart cleared', 'info')
    }
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty', 'error')
      return
    }
    
    // Create WhatsApp message with all items
    const items = cart.map(item => `${item.quantity}x ${item.name} (${item.price})`).join(', ')
    const message = `Hi! I want to order: ${items}. Total: ${price}`
    
    window.open(
      `https://wa.me/2341234567890?text=${encodeURIComponent(message)}`,
      '_blank'
    )
    showToast('Opening WhatsApp with your order...', 'success')
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Header */}
        <div className="cart-page-header">
          <h1>Your Shopping Cart</h1>
          <button className="close-btn" onClick={onClose} title="Close">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty-state">
            <div className="empty-icon"><i className="fa fa-shopping-cart"></i></div>
            <h2>Your Cart is Empty</h2>
            <p>Add some delicious organic products to get started!</p>
            <button className="btn-primary" onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <div className="cart-content">
            {/* Items List */}
            <div className="cart-items-section">
              <div className="section-header">
                <h2>Items ({total})</h2>
                <button className="clear-btn" onClick={handleClearCart}>Clear Cart</button>
              </div>

              <div className="cart-items-list">
                {cart.map(item => {
                  const itemPrice = parseFloat(item.price.replace(/[₦,]/g, ''))
                  const subtotal = itemPrice * item.quantity
                  
                  return (
                    <div className="cart-item-card" key={item.id}>
                      <div className="item-image">
                        <img src={item.img} alt={item.name} />
                      </div>

                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <p className="item-desc">{item.desc}</p>
                        <p className="item-price">{item.price} each</p>
                      </div>

                      <div className="item-quantity">
                        <label>Qty</label>
                        <div className="qty-controls">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >−</button>
                          <input 
                            type="number" 
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                            min="1"
                          />
                          <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>

                      <div className="item-subtotal">
                        <p className="subtotal-value">₦{subtotal.toFixed(2)}</p>
                      </div>

                      <button 
                        className="delete-btn"
                        onClick={() => handleRemove(item.id, item.name)}
                        title="Delete item"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="cart-summary">
              <div className="summary-box">
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Items</span>
                  <span>{total}</span>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{price}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="delivery-info">Contact us</span>
                </div>

                <div className="divider"></div>

                <div className="summary-total">
                  <span>Total</span>
                  <span className="total-price">{price}</span>
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                  <i className="fa fa-rocket"></i> Checkout via WhatsApp
                </button>

                <button className="continue-btn" onClick={onClose}>
                  Continue Shopping
                </button>
              </div>

              <div className="info-box">
                <h3><i className="fa fa-box"></i> About Your Order</h3>
                <ul>
                  <li>100% Fresh & Organic</li>
                  <li>Fast Delivery Available</li>
                  <li>Quality Guaranteed</li>
                  <li>WhatsApp Support 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
