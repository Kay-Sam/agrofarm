// Email and messaging service integration
// This uses Formspree (free tier) for form submission
export const sendContactForm = async (name, email, message) => {
  try {
    // Using Formspree endpoint (no backend needed)
    const response = await fetch('https://formspree.io/f/xnqwrvwd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New message from ${name}`,
        _reply_to: email
      })
    });

    // Try to parse response body for helpful error details
    const text = await response.text().catch(() => null)
    let data = null
    try {
      data = text ? JSON.parse(text) : null
    } catch (err) {
      // ignore parse errors
    }

    if (response.ok) {
      return { success: true, message: data && data.message ? data.message : 'Message sent successfully!' };
    } else {
      // If Formspree returns validation errors provide them
      const errorMessage = (data && (data.error || data.message)) || `Failed to send message (status ${response.status})`;
      console.warn('Formspree response:', response.status, text)
      return { success: false, message: errorMessage };
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
};

// WhatsApp integration for orders
export const sendWhatsAppOrder = (productName, quantity = 1) => {
  // Replace with your WhatsApp number (format: country code + number, no +)
  const phoneNumber = '2347053088651'; // Example: 234 is Nigeria code
  const message = `Hi, I'd like to order ${quantity}x ${productName}. Please let me know the price and delivery options.`;
  const encodedMessage = encodeURIComponent(message);
  
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    '_blank'
  );
};

// Alternative: Send order notification email
export const sendOrderConfirmation = async (email, product, quantity) => {
  try {
    const response = await fetch('https://formspree.io/f/xnqwrvwd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        product,
        quantity,
        _subject: `Order Confirmation: ${product}`,
        _reply_to: email
      })
    });

    return { success: response.ok };
  } catch (error) {
    console.error('Order confirmation error:', error);
    return { success: false };
  }
};
