// Form validation utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10;
};

export const validateForm = (name, email, message) => {
  const errors = {};
  
  if (!validateName(name)) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email';
  }
  
  if (!validateMessage(message)) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return { isValid: Object.keys(errors).length === 0, errors };
};
