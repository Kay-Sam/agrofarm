import React, { useState, useEffect } from 'react'
import './Toast.css'

export default function Toast() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleToast = (e) => {
      setToasts(prev => [...prev, e.detail])
    }

    const handleRemoveToast = (e) => {
      setToasts(prev => prev.filter(t => t.id !== e.detail))
    }

    window.addEventListener('toast', handleToast)
    window.addEventListener('removeToast', handleRemoveToast)

    return () => {
      window.removeEventListener('toast', handleToast)
      window.removeEventListener('removeToast', handleRemoveToast)
    }
  }, [])

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>
  )
}
