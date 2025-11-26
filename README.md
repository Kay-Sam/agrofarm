# AgroLanding - Modern Agricultural Landing Page

A sleek, production-ready React + Vite landing page for an agricultural e-commerce business with real-world functionality: order management, contact forms, and WhatsApp integration.

## Features

✨ **Modern Design**
- Dark mode with glassmorphism effects
- Responsive grid layout
- Smooth animations and transitions
- Unsplash image integration

🛒 **E-Commerce Functionality**
- Add to cart system (localStorage)
- WhatsApp order integration
- Cart badge with item count
- Product pricing display

📬 **Contact & Communication**
- Form validation (name, email, message)
- Email integration via Formspree
- Error feedback and success notifications
- Toast notifications

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd agro-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Configuration

### WhatsApp Integration

To enable WhatsApp ordering, update your phone number in `src/utils/api.js`:

```javascript
export const sendWhatsAppOrder = (productName, quantity = 1) => {
  // Replace with your WhatsApp number (format: country code + number, no +)
  const phoneNumber = '2341234567890'; // Example: 234 is Nigeria code
  // ... rest of function
};
```

Format: `{countryCode}{phoneNumber}` (e.g., `2341234567890` for Nigeria +234-123-456-7890)

### Email Integration (Formspree)

1. Visit [formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form and get your form ID
4. Replace `YOUR_FORM_ID` in `src/utils/api.js`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of config
});
```

Formspree will send form submissions to your email automatically.

## Project Structure

```
agro-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           // Hero section with CTA
│   │   ├── About.jsx          // About section
│   │   ├── Products.jsx       // Product grid with order button
│   │   ├── Testimonials.jsx   // Customer reviews
│   │   ├── Contact.jsx        // Contact form
│   │   ├── Footer.jsx         // Footer
│   │   ├── Toast.jsx          // Notification system
│   │   └── *.css              // Component styles
│   ├── utils/
│   │   ├── api.js             // API calls (WhatsApp, email)
│   │   ├── cart.js            // Cart management
│   │   ├── validation.js      // Form validation
│   │   └── toast.js           // Toast notifications
│   ├── assets/
│   │   └── images.js          // Unsplash image URLs
│   ├── App.jsx                // Main app component
│   ├── main.jsx               // Entry point
│   ├── App.css                // Global styles
│   └── index.css              // Base styles
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

### Order Flow
1. User clicks "Order Now" on a product
2. Product is added to localStorage cart
3. WhatsApp opens with pre-filled message
4. Toast notification confirms action

### Contact Flow
1. User fills contact form
2. Form is validated (client-side)
3. Message sent via Formspree to your email
4. Success/error toast appears
5. Form clears on success

### Cart Management
- Products stored in `localStorage` under key `agro-cart`
- Cart persists across browser sessions
- Cart count badge updates in real-time

## Customization

### Change Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --bg: #0f172a;              /* Background color */
  --accent: #10b981;          /* Primary accent */
  --accent-light: #a7f3d0;   /* Light accent */
  --muted: #94a3b8;          /* Text secondary color */
}
```

### Update Products
Edit product data in `src/components/Products.jsx`:

```javascript
const items = [
  { id: 1, name: 'Product Name', img: imageUrl, desc: 'Description', price: '$X.XX' },
  // ... more products
];
```

### Add Navigation
Create `src/components/Nav.jsx` and import in `App.jsx`

## Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

Output goes to `dist/` folder. Deploy to any static host (Vercel, Netlify, GitHub Pages, etc.)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Future Enhancements

- [ ] Stripe/PayPal payment integration
- [ ] Admin dashboard
- [ ] Product catalog API
- [ ] User authentication
- [ ] Order tracking
- [ ] Inventory management

## Troubleshooting

**WhatsApp not opening?**
- Check phone number format (no `+` or spaces)
- Ensure WhatsApp Web is enabled for your account

**Form submissions not sending?**
- Verify Formspree form ID is correct
- Check spam folder for form submissions
- Test with sample data at formspree.io

**Images not loading?**
- Unsplash URLs require internet connection
- Download images locally and update `src/assets/images.js` if offline needed

## License

Open source - feel free to use and modify!

## Support

For issues or questions, check the source code or consider using these services:
- WhatsApp Business API for larger volume
- Sendinblue/Brevo for advanced email
- Stripe for payments
