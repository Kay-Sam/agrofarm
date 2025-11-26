import React, { useState } from 'react'
import './Nav.css'
import CartDropdown from './CartDropdown'

export default function Nav({ onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo - Left */}
          <div className="nav-brand">
            <i className="fa fa-leaf brand-icon"></i>
            <span className="brand-text">AgroFarm</span>
          </div>

          {/* Desktop Navigation - Center */}
          <ul className="nav-links desktop">
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('products')}>Products</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Reviews</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          {/* Right - Cart Icon (Desktop) */}
          <div className="desktop-cart">
            <CartDropdown onCartClick={onCartClick} />
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Navigation Links + Cart */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="nav-links mobile">
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('products')}>Products</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Reviews</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          
          <div className="mobile-cart-section">
            {/* Show cart icon with badge (re-uses CartDropdown button) and close the menu when opening cart */}
            <CartDropdown onCartClick={() => { onCartClick(); setMobileMenuOpen(false); }} />
            <button className="mobile-checkout-btn" onClick={() => { onCartClick(); setMobileMenuOpen(false); }}>
              <i className="fa fa-shopping-cart"></i>
              View Shopping Cart
            </button>
          </div>
        </div>
      )}
    </>
  )
}
