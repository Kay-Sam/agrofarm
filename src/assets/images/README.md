# Image Assets Guide

This folder contains all images used in the AgroLanding website.

## Required Images

### 1. Hero Section
- **File**: `hero.jpg`
- **Size**: 1600x900px (or larger)
- **Purpose**: Full-width hero background image
- **Recommended**: Farm landscape, fresh produce field, or agricultural setting

### 2. Product Images
- **File**: `product-1.jpg` (Tomatoes)
- **File**: `product-2.jpg` (Lettuce)
- **File**: `product-3.jpg` (Carrots)
- **Size**: 600x400px each
- **Purpose**: Product showcase cards
- **Recommended**: Close-up shots of fresh vegetables/produce

### 3. Testimonial Images
- **File**: `person-1.jpg`
- **File**: `person-2.jpg`
- **Size**: 400x300px each
- **Purpose**: Customer profile pictures
- **Recommended**: Portrait photos of people

## How to Add Your Images

1. **Delete placeholder files** if they exist
2. **Add your image files** to this folder:
   ```
   src/assets/images/
   ├── hero.jpg
   ├── product-1.jpg
   ├── product-2.jpg
   ├── product-3.jpg
   ├── person-1.jpg
   └── person-2.jpg
   ```

3. **Save and refresh** your browser - images will automatically load

## Image Format Recommendations

- **Format**: JPG (for photos) or PNG (for graphics)
- **Compression**: Optimize for web (use tools like TinyPNG)
- **Quality**: High quality but keep file size under 200KB per image
- **Aspect Ratio**:
  - Hero: 16:9 (1600x900)
  - Products: 3:2 (600x400)
  - Testimonials: 4:3 (400x300)

## Tools to Find/Create Images

- **Free Images**: Unsplash, Pexels, Pixabay
- **Resize/Compress**: TinyPNG, ImageOptim, Squoosh
- **Edit**: Canva, Photoshop, GIMP

## Example File Structure

```
agro-landing/
└── src/
    └── assets/
        └── images/
            ├── hero.jpg              (farm landscape)
            ├── product-1.jpg         (tomatoes)
            ├── product-2.jpg         (lettuce)
            ├── product-3.jpg         (carrots)
            ├── person-1.jpg          (customer 1)
            └── person-2.jpg          (customer 2)
```

## Troubleshooting

**Images not showing after adding files?**
- Ensure filenames match exactly (including extension)
- Restart the dev server: `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)

**Image file too large?**
- Use image compression tools
- Recommended max 150KB per image

**Wrong aspect ratio?**
- Use online image cropper tools
- Follow the size recommendations above
