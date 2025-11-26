// Cart management using localStorage
export const getCart = () => {
  const cart = localStorage.getItem('agro-cart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (items) => {
  localStorage.setItem('agro-cart', JSON.stringify(items));
  // Dispatch a custom event to notify all listeners of cart changes
  window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: items } }));
};

export const addToCart = (product) => {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const filtered = cart.filter(item => item.id !== productId);
  saveCart(filtered);
  return filtered;
};

export const updateQuantity = (productId, quantity) => {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    saveCart(cart);
  }
  
  return cart;
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.length;
};

export const getCartPrice = () => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    // Handle both $ and ₦ currency symbols and remove commas
    const price = parseFloat(item.price.replace(/[$₦,]/g, ''));
    return total + (price * item.quantity);
  }, 0);
};

export const clearCart = () => {
  localStorage.removeItem('agro-cart');
  return [];
};
