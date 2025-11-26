import React from 'react'
import './Testimonials.css'
import { testimonials as testimonialImages } from '../assets/images'

const reviews = [
  {id:1, name:'Jane', text:"Best produce I've bought!", img: testimonialImages[0]},
  {id:2, name:'John', text:'Fresh and fast delivery.', img: testimonialImages[1]}
]

export default function Testimonials(){
  return (
    <section className="testimonials section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="test-grid">
          {reviews.map(r => (
            <figure className="test-card" key={r.id}>
              <img src={r.img} alt={r.name} />
              <blockquote>“{r.text}”</blockquote>
              <figcaption>- {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
