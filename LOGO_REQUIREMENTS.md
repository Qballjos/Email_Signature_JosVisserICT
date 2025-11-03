# 🎨 Logo Requirements & Guidelines

## Required Files

You need to create **TWO versions** of your logo:

### 1. logo-light.png
- **Use case:** Displayed when recipient uses light mode
- **Design:** Dark colored logo (will show on white/light backgrounds)
- **Example:** Black or dark blue text/graphics

### 2. logo-dark.png
- **Use case:** Displayed when recipient uses dark mode
- **Design:** Light colored logo (will show on dark/black backgrounds)
- **Example:** White or light gray text/graphics

## Specifications

### Dimensions
- **Recommended:** 300px × 100px (3:1 aspect ratio)
- **Minimum:** 200px × 67px
- **Maximum:** 600px × 200px
- Maintain aspect ratio for consistency

### File Format
- **Format:** PNG (recommended) or JPG
- **Background:** Transparent (PNG) for best results
- **Color Space:** sRGB

### File Size
- **Target:** 20-50 KB per file
- **Maximum:** 100 KB per file
- Smaller files = faster loading in emails

### Quality
- **Resolution:** 72-150 DPI (email optimized)
- **Color depth:** 24-bit (PNG) or 32-bit with alpha (PNG)
- Sharp, professional appearance

## Design Tips

### For logo-light.png:
```
✅ Use dark colors (black, navy, dark blue)
✅ High contrast against white background
✅ Readable at small sizes
❌ Avoid light colors (will be invisible on light backgrounds)
```

### For logo-dark.png:
```
✅ Use light colors (white, light gray, light blue)
✅ High contrast against dark background
✅ Same layout as light version
❌ Avoid dark colors (will be invisible on dark backgrounds)
```

## Example Color Schemes

### Conservative Professional
- **Light version:** #1a1a1a (dark gray) or #2563eb (blue)
- **Dark version:** #ffffff (white) or #e5e7eb (light gray)

### Brand Colors
- **Light version:** Your brand's primary dark color
- **Dark version:** Your brand's light/inverted color

## Tools for Creating Logos

### Free Online Tools
1. **Canva** - https://canva.com
   - Easy to use, templates available
   - Export as PNG with transparency

2. **Photopea** - https://photopea.com
   - Free Photoshop alternative
   - Advanced editing capabilities

3. **GIMP** - https://gimp.org
   - Free desktop software
   - Professional features

### Professional Tools
1. **Adobe Illustrator** - Vector graphics (scalable)
2. **Adobe Photoshop** - Raster graphics
3. **Figma** - Web-based design tool

## Quick Creation Guide

If you already have a logo:

### Option 1: Simple Inversion (for simple logos)
1. Open your logo in an image editor
2. **For logo-light.png:** Use original colors
3. **For logo-dark.png:** 
   - Invert colors (Ctrl/Cmd + I in most editors)
   - Or manually change dark elements to light

### Option 2: Color Replacement
1. Open logo in editor
2. **For logo-light.png:** 
   - Change text/elements to dark color (#333333)
   - Save with transparent background
3. **For logo-dark.png:**
   - Change text/elements to light color (#ffffff)
   - Save with transparent background

### Option 3: Text-Based Logo
If you just want text as your logo:

1. Create a 300x100px canvas
2. Add text: "Jos Visser ICT"
3. **Light version:** Black text (#000000)
4. **Dark version:** White text (#ffffff)
5. Use a professional font (e.g., Helvetica, Arial, Open Sans)
6. Export both as PNG with transparent background

## Testing Your Logos

Before using in your signature:

1. **Test on white background:**
   - Open logo-light.png
   - Place it on a white canvas
   - Ensure it's clearly visible

2. **Test on dark background:**
   - Open logo-dark.png
   - Place it on a black canvas
   - Ensure it's clearly visible

3. **Test at small size:**
   - Resize to 150x50px
   - Verify text is still readable

## Where to Place Files

After creating your logos:

1. **Save originals in:** `assets/`
   - Keep high-resolution originals here
   - For backup and future editing

2. **Save optimized versions in:** `cloudflare-pages/assets/`
   - Optimized for email (smaller file size)
   - These will be deployed

## File Naming

**IMPORTANT:** Use exact file names:
- `logo-light.png` (lowercase, hyphenated)
- `logo-dark.png` (lowercase, hyphenated)

❌ Wrong: `Logo-Light.PNG`, `logo_light.png`, `logolight.png`  
✅ Correct: `logo-light.png`, `logo-dark.png`

## Need Help?

Can't create a logo yourself?

### Quick Options:
1. **Fiverr** - $5-$25 for simple logos
2. **99designs** - Professional contests
3. **Hire a designer** - For custom work

### Free Placeholder:
Use a text-based logo temporarily:
- Just your name in a nice font
- Keep it simple and professional

---

Once you have your logos ready, place them in:
- `assets/logo-light.png`
- `assets/logo-dark.png`
- `cloudflare-pages/assets/logo-light.png`
- `cloudflare-pages/assets/logo-dark.png`

Then proceed with the deployment steps in [INSTALLATION.md](INSTALLATION.md)!

