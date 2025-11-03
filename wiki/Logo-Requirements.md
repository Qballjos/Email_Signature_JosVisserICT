# 🎨 Logo Requirements

Complete guide to creating logos for your email signature.

## ✅ Current Setup

Your logo is already configured!

### josvisser-logo.png
- **Resolution:** 1360×1360px (high-resolution)
- **Displayed at:** 240×240px in email
- **Works for:** Both light AND dark mode
- **Design:** Orange branding (#f6a000)
- **File size:** 56KB

---

## Specifications

### Dimensions
- **Recommended:** 300px × 100px (3:1 ratio)
- **Minimum:** 200px × 67px
- **Maximum:** 600px × 200px
- Maintain aspect ratio

### File Format
- **Format:** PNG (recommended)
- **Background:** Transparent
- **Color Space:** sRGB

### File Size
- **Target:** 20-50 KB per file
- **Maximum:** 100 KB per file
- Smaller = faster loading

### Quality
- **Resolution:** 72-150 DPI
- **Color depth:** 24-bit (PNG) or 32-bit with alpha
- Sharp, professional appearance

---

## Design Guidelines

### For universal logos (like yours):
```
✅ Use medium/bright colors (orange #f6a000 works!)
✅ High contrast on both light and dark
✅ Readable at small sizes
✅ Transparent background
❌ Avoid pure black or pure white
❌ Avoid very light or very dark grays
```

---

## Example Color Schemes

### Professional
- **Light:** `#1a1a1a` (dark gray)
- **Dark:** `#ffffff` (white)

### Brand Colors
- **Light:** `#2563eb` (blue)
- **Dark:** `#60a5fa` (light blue)

---

## Tools for Creating Logos

### Free Online
1. **[Canva](https://canva.com)**
   - Easy templates
   - Export PNG with transparency

2. **[Photopea](https://photopea.com)**
   - Free Photoshop alternative
   - Advanced editing

3. **[GIMP](https://gimp.org)**
   - Free desktop software
   - Professional features

### Professional
1. **Adobe Illustrator** - Vector graphics
2. **Adobe Photoshop** - Raster graphics
3. **Figma** - Web-based design

---

## Quick Creation Guide

### Option 1: Simple Inversion

If you have one logo:

1. Open in image editor
2. **For light version:** Use original
3. **For dark version:** Invert colors (Ctrl/Cmd+I)
4. Export both as PNG

### Option 2: Color Replacement

1. Open logo in editor
2. **Light version:**
   - Change to dark color `#333333`
   - Save transparent PNG
3. **Dark version:**
   - Change to light color `#ffffff`
   - Save transparent PNG

### Option 3: Text-Based Logo

Simple text as logo:

1. Create 300x100px canvas
2. Add text: "Jos Visser ICT"
3. **Light:** Black text `#000000`
4. **Dark:** White text `#ffffff`
5. Use professional font (Helvetica, Arial)
6. Export both as PNG with transparency

---

## Testing Your Logos

### Test on White Background
1. Open `logo-light.png`
2. Place on white canvas
3. Ensure clearly visible

### Test on Dark Background
1. Open `logo-dark.png`
2. Place on black canvas
3. Ensure clearly visible

### Test Small Size
1. Resize to 150x50px
2. Verify text readable
3. Check clarity

---

## Where to Place Files

After creating:

**1. Backup originals:**
```
assets/
├── logo-light.png
└── logo-dark.png
```

**2. Deploy versions:**
```
cloudflare-pages/assets/
├── logo-light.png
└── logo-dark.png
```

---

## File Naming

**IMPORTANT:** Use exact names:

✅ Correct:
- `logo-light.png` (lowercase, hyphen)
- `logo-dark.png` (lowercase, hyphen)

❌ Wrong:
- `Logo-Light.PNG`
- `logo_light.png`
- `logolight.png`

---

## Professional Help

### Can't Create Yourself?

**Quick Options:**
1. **Fiverr** - $5-$25
2. **99designs** - Contests
3. **Upwork** - Hire designer

### Free Placeholder

Use text temporarily:
- Your name in nice font
- Simple and professional
- Replace later

---

## Example Workflow

### Using Canva (Free)

1. **Sign up:** [canva.com](https://canva.com)
2. **Create:** 300x100px design
3. **Add text:** "Jos Visser ICT"
4. **Style:** Professional font, your colors
5. **Create two versions:**
   - Dark text on transparent (light version)
   - White text on transparent (dark version)
6. **Export:** PNG with transparency
7. **Name:** `logo-light.png` and `logo-dark.png`

---

## Optimization Tips

### Reduce File Size

1. **Use PNG-8** instead of PNG-24 if possible
2. **Compress** with [TinyPNG](https://tinypng.com)
3. **Remove metadata**
4. **Minimize colors** while maintaining quality

### Ensure Quality

1. **Use vector source** if possible
2. **Export at 2x size** then scale down
3. **Check sharpness** at actual size
4. **Test in email** before finalizing

---

## Checklist

Before using your logos:

- [ ] Created both `logo-light.png` and `logo-dark.png`
- [ ] Correct dimensions (~300x100px)
- [ ] PNG format with transparency
- [ ] Under 100KB each
- [ ] Tested on white background (light version)
- [ ] Tested on dark background (dark version)
- [ ] Readable at small size
- [ ] Correct file names (lowercase, hyphen)
- [ ] Placed in `cloudflare-pages/assets/`
- [ ] Backups in `assets/` folder

---

## Next Steps

Once logos are ready:

1. Place in `cloudflare-pages/assets/`
2. Follow [Deployment Guide](Deployment-Guide)
3. Update signature HTML
4. Install in email client

**Continue:** [Quick Start Guide](Quick-Start-Guide)

