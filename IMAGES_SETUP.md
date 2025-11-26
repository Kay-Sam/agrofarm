# 🖼️ How to Add Your Own Images

Your project is now set up to use **local images from the assets folder**. Colorful SVG placeholders are currently showing so you can see the layout.

## Quick Setup Steps

### 1. **Prepare Your Images**
- Get your image files ready (JPG or PNG format)
- Recommended sizes:
  - `hero.jpg`: 1600x900px
  - `product-1.jpg`, `product-2.jpg`, `product-3.jpg`: 600x400px each
  - `person-1.jpg`, `person-2.jpg`: 400x300px each

### 2. **Copy Images to Folder**
Place your image files here:
```
agro-landing/
└── src/
    └── assets/
        └── images/
            ├── hero.jpg           ← Add your hero image
            ├── product-1.jpg      ← Add tomato image
            ├── product-2.jpg      ← Add lettuce image
            ├── product-3.jpg      ← Add carrot image
            ├── person-1.jpg       ← Add person photo
            └── person-2.jpg       ← Add another person
```

### 3. **Update the Code**
Edit `src/assets/images.js` to import your JPG files instead of SVGs:

**Change this:**
```javascript
import heroImg from './images/hero.svg'
```

**To this:**
```javascript
import heroImg from './images/hero.jpg'
```

Do the same for all other images (products, testimonials).

### 4. **Save and Refresh**
```bash
# If dev server is running, just save the file
# Browser will auto-refresh and show your images
```

## Example: Updating images.js

**Before (with SVG placeholders):**
```javascript
import heroImg from './images/hero.svg'
import product1 from './images/product-1.svg'
import product2 from './images/product-2.svg'
import product3 from './images/product-3.svg'
import person1 from './images/person-1.svg'
import person2 from './images/person-2.svg'
```

**After (with your JPG images):**
```javascript
import heroImg from './images/hero.jpg'
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'
import product3 from './images/product-3.jpg'
import person1 from './images/person-1.jpg'
import person2 from './images/person-2.jpg'
```

## Full images.js Template

```javascript
// Local image imports from assets/images folder
import heroImg from './images/hero.jpg'
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'
import product3 from './images/product-3.jpg'
import person1 from './images/person-1.jpg'
import person2 from './images/person-2.jpg'

export const hero = heroImg
export const products = [product1, product2, product3]
export const testimonials = [person1, person2]
```

## Where to Get Images

**Free Stock Photos:**
- [Unsplash](https://unsplash.com) - High quality, free
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Royalty-free

**Search for:**
- Hero: "farm landscape", "vegetables field", "fresh produce"
- Products: "tomato", "lettuce", "carrot" (close-up shots)
- Testimonials: "portrait", "person", "farmer"

## Optimize Your Images

Before adding images, optimize them:
1. **Resize** to recommended dimensions
2. **Compress** using:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
   - [ImageOptim](https://imageoptim.com)
3. Keep file size under 200KB per image

## Troubleshooting

**Images not showing?**
- ✅ Check filenames match exactly (case-sensitive on Linux)
- ✅ Ensure images are in `src/assets/images/` folder
- ✅ Verify imports in `src/assets/images.js` point to correct files
- ✅ Restart dev server: `npm run dev`

**Images look blurry?**
- Use high-resolution originals (2x the target size)
- Ensure aspect ratios match recommendations

**File too large?**
- Compress using the tools mentioned above
- Target: 50-150KB per image

---

**Questions?** Check the README.md in the images folder for more details! 📖
