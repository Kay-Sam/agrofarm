// Simple toast notification system
let toastId = 0;

export const showToast = (message, type = 'success', duration = 3000) => {
  const id = toastId++;
  const toast = {
    id,
    message,
    type // 'success', 'error', 'info'
  };
  
  // Dispatch custom event so App can listen
  window.dispatchEvent(new CustomEvent('toast', { detail: toast }));
  
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('removeToast', { detail: id }));
  }, duration);
};
