import React, { useState } from 'react'
import './Products.css'
import ProductDetail from './ProductDetail'
import { products as productImages } from '../assets/images'
import { addToCart } from '../utils/cart'
import { showToast } from '../utils/toast'

const items = [
  { id: 1, name: 'Tomatoes', img: productImages[0], desc: 'Fresh organic tomatoes', price: '₦2,500', inStock: true, availableDate: null },
  { id: 2, name: 'Lettuce', img: productImages[1], desc: 'Crisp leafy greens', price: '₦1,500', inStock: false, availableDate: '2025-11-28' },
  { id: 3, name: 'Carrots', img: productImages[2], desc: 'Sweet root vegetables', price: '₦1,800', inStock: true, availableDate: null }
]

export default function Products(){
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleOrder = (product) => {
    try {
      // Add to local cart only — checkout should happen from Cart
      addToCart(product)
      showToast(`${product.name} added to cart! Check the cart icon in navbar.`, 'success')
    } catch (error) {
      console.error('Add to cart error:', error)
      showToast('Error adding product to cart', 'error')
    }
  }

  const handleNotifyMe = (product) => {
    const availableDate = product.availableDate ? new Date(product.availableDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'soon'
    const message = `Hi! Please notify me when ${product.name} is back in stock (expected ${availableDate})`
    const whatsappUrl = `https://wa.me/2347053088651?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    showToast('Opening WhatsApp to notify you about this product!', 'info')
  }

  return (
    <section className="products section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="grid">
          {items.map((p)=> (
            <div className="card" key={p.id}>
              <div style={{ position: 'relative' }}>
                <img className="thumb" src={p.img} alt={p.name} onClick={() => setSelectedProduct(p)} style={{ cursor: 'pointer' }} />
                <span className={`stock-badge ${p.inStock ? 'in-stock' : ''}`}>
                  {p.inStock ? 'In Stock' : 'Coming Soon'}
                </span>
              </div>
              <h3 onClick={() => setSelectedProduct(p)} style={{ cursor: 'pointer' }}>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="card-footer">
                <span className="price">{p.price}</span>
                {p.inStock ? (
                  <button className="btn" onClick={() => handleOrder(p)}>Add to Cart</button>
                ) : (
                  <button className="btn btn-notify" onClick={() => handleNotifyMe(p)}>
                    <i className="fa fa-bell"></i>
                    Notify Me
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}
