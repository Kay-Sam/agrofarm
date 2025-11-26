import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="app-root">
      <Toast />
      <Nav onCartClick={() => setShowCart(true)} />
      
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}
