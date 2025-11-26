import React, { useState } from 'react'
import './Contact.css'
import { validateForm } from '../utils/validation'
import { sendContactForm } from '../utils/api'
import { showToast } from '../utils/toast'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const { isValid, errors: validationErrors } = validateForm(name, email, msg)
    
    if (!isValid) {
      setErrors(validationErrors)
      showToast('Please fix the errors in the form', 'error')
      return
    }
    
    setErrors({})
    setLoading(true)
    
    try {
      // Send via email service
      const result = await sendContactForm(name, email, msg)
      
      if (result.success) {
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success')
        setName('')
        setEmail('')
        setMsg('')
      } else {
        showToast(result.message, 'error')
      }
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <section className="contact section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-wrapper">
          
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><i className="fa fa-map-marker"></i></div>
              <h3>Address</h3>
              <p>123 Green Valley Road<br />Lagos, Nigeria 100001</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa fa-phone"></i></div>
              <h3>Phone</h3>
              <p>+234 705 308 8651<br /><a href="tel:+2347053088651">Call us</a></p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa fa-envelope"></i></div>
              <h3>Email</h3>
              <p>info@AgroFarm.com<br /><a href="mailto:info@agroconnect.com">Send email</a></p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa fa-clock-o"></i></div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
            </div>

            <div className="info-card social">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="https://wa.me/2347053088651" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fa fa-whatsapp"></i></a>
                <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
                <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>We'd love to hear from you. Send us your questions or feedback.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  id="name"
                  type="text"
                  placeholder="John Doe" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  className={errors.name ? 'error' : ''}
                  disabled={loading}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  id="email"
                  type="email"
                  placeholder="john@example.com" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  className={errors.email ? 'error' : ''}
                  disabled={loading}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message"
                  placeholder="Tell us more about your inquiry..." 
                  value={msg} 
                  onChange={e => setMsg(e.target.value)}
                  className={errors.message ? 'error' : ''}
                  disabled={loading}
                  rows="5"
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
