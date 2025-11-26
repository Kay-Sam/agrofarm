import React from 'react'
import './Hero.css'
import { hero as heroImage } from '../assets/images'
import { showToast } from '../utils/toast'

export default function Hero(){
  const handleShopNow = () => {
    const el = document.getElementById('products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      showToast('Products section not found — scrolling to top.', 'info')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero section">
      <img src={heroImage} alt="Fresh farm produce" className="hero-bg" />
      <div className="hero-overlay"></div>
      <div className="hero-inner container">
        <h1>Fresh Produce, Directly From the Farm</h1>
        <p>Organic • Sustainable • Healthy</p>
        <button className="btn" onClick={handleShopNow}>Shop Now</button>
      </div>
    </section>
  )
}
