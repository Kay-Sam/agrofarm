import React, { useState, useEffect } from 'react'
import './CartDropdown.css'
import { getCart, getCartTotal } from '../utils/cart'

export default function CartDropdown({ onCartClick }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    updateCart()
    // Listen for cart updates from other tabs/windows
    window.addEventListener('storage', updateCart)
    // Listen for cartUpdated custom event
    window.addEventListener('cartUpdated', updateCart)
    return () => {
      window.removeEventListener('storage', updateCart)
      window.removeEventListener('cartUpdated', updateCart)
    }
  }, [])

  const updateCart = () => {
    const cartItems = getCart()
    setTotal(getCartTotal())
  }

  return (
    <div className="cart-dropdown-wrapper">
      <button 
        className="cart-icon-btn"
        onClick={onCartClick}
        title="View shopping cart"
      >
  <i className={"fa fa-shopping-cart" + (total === 2 ? " cart-icon-blink" : "")}></i>
        {total > 0 && (
          <span className={"cart-badge" + (total === 2 ? " blink" : "")}>{total}</span>
        )}
      </button>
    </div>
  )
}
