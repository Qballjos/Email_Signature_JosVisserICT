# 🎨 Logo Setup Guide

## Current Configuration

Your email signature uses **ONE logo** that works for both light and dark themes.

## Required File

Place your logo file here:

```
cloudflare-pages/assets/logo.png
```

**URL when deployed:**
```
https://static.josvisserict.nl/assets/logo.png
```

---

## Logo Specifications

### Dimensions
- **Size:** 120×120 pixels (square)
- **Can be adjusted** in signature files if needed

### File Format
- **Format:** PNG with transparent background
- **Why PNG:** Maximum email client compatibility
- **Why not SVG:** Not supported by Gmail, Outlook, and others

### File Size
- **Target:** Under 50KB
- **Maximum:** 100KB
- **Current:** ~5KB ✅ (excellent!)

### Design Requirements
- **Must work on light backgrounds** (white, light gray)
- **Must work on dark backgrounds** (black, dark gray)
- **High contrast** for visibility
- **Professional appearance**

---

## Design Tips for Multi-Theme Logo

Since your logo needs to work on both light and dark backgrounds:

### ✅ Good Approaches:

1. **Use Medium Colors**
   - Not too dark (invisible on dark backgrounds)
   - Not too light (invisible on light backgrounds)
   - Example: Orange (#f6a000) ✅

2. **Add Outline/Border**
   - Thin border helps visibility
   - Works on any background

3. **Use Brand Colors**
   - Your orange (#f6a000) is perfect! ✅
   - Stands out on both themes

4. **Transparent Background**
   - Let email background show through
   - Adapts to any theme

### ❌ Avoid:

- Pure black (invisible in dark mode)
- Pure white (invisible in light mode)
- Very light grays
- Very dark grays

---

## Current Files

You currently have:
- `logo-light.png` (dark colored for light backgrounds)
- `logo-dark.png` (light colored for dark backgrounds)

**New approach:** Since your logo works for both, you only need `logo.png`

---

## Migration Steps

### Option 1: Rename Your Best Logo

If one of your current logos works for both:

```bash
cd /Users/qballjos/Documents/GitHub/Email_Signature_JosVisserICT/cloudflare-pages/assets
cp logo-light.png logo.png
# Or
cp logo-dark.png logo.png
```

### Option 2: Create New Universal Logo

Design a new logo that works for both themes:
- Use your orange color (#f6a000)
- Add contrast/outline if needed
- Export as 120×120 PNG
- Save as `logo.png`

---

## Changing Logo Size

Current size is **120×120px**. To change:

### In signature files, find:
```html
width: 120px; height: 120px;
```

### Change to your preferred size:

**Larger (150×150):**
```html
width: 150px; height: 150px;
```

**Smaller (100×100):**
```html
width: 100px; height: 100px;
```

**Rectangular (200×80):**
```html
width: 200px; height: 80px;
```

**Also adjust separator line height to match.**

---

## Deployment

After adding/updating `logo.png`:

### 1. Place file:
```
cloudflare-pages/assets/logo.png
```

### 2. Deploy to Cloudflare:
- Push to GitHub (auto-deploys if connected)
- Or use Wrangler CLI
- Or upload via Cloudflare dashboard

### 3. Verify:
Visit: `https://static.josvisserict.nl/assets/logo.png`

Should display your logo ✅

---

## Testing

### Test on Light Background
- View on white background
- Should be clearly visible

### Test on Dark Background  
- View on black/dark gray background
- Should be clearly visible

### Test at Small Size
- View at 60×60px
- Should still be recognizable

---

## File Optimization

Your current files are already excellent (~5KB), but if needed:

### Compress PNG:
- Use [TinyPNG](https://tinypng.com)
- Or [ImageOptim](https://imageoptim.com) (Mac)
- Target: Under 50KB

### Export Settings:
- PNG-8 if possible (smaller)
- Remove metadata
- Optimize for web

---

## Summary

**New Setup:**
- ✅ Single logo file: `logo.png`
- ✅ Works for light and dark themes
- ✅ Simpler to maintain
- ✅ Smaller deployment size
- ✅ Same great compatibility

**Old Setup (no longer needed):**
- ❌ logo-light.png
- ❌ logo-dark.png
- ❌ Complex switching logic

---

## Next Steps

1. Choose which logo to use (or create new one)
2. Rename/save as `logo.png`
3. Place in `cloudflare-pages/assets/`
4. Deploy to Cloudflare
5. Signature will automatically use the new logo!

---

**Questions?** See the [Wiki](https://github.com/Qballjos/Email_Signature_JosVisserICT/wiki) for more info.

