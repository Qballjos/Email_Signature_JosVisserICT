# 🚀 Quick Installation Guide

This is a simplified guide to get your email signature up and running quickly.

## ⚡ 5-Minute Setup

### 1. Add Your Logo Files

Place your logo files in **both** locations:

```
assets/
  ├── logo-light.png (for light backgrounds)
  └── logo-dark.png (for dark backgrounds)

cloudflare-pages/assets/
  ├── logo-light.png (same files)
  └── logo-dark.png (same files)
```

**Logo Specs:**
- Size: ~300x100px
- Format: PNG with transparent background
- File size: Under 100KB

### 2. Deploy to Cloudflare Pages

**Easiest Method - Using Git:**

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub repository: `Email_Signature_JosVisserICT`
4. Settings:
   - Build output directory: `cloudflare-pages`
   - Leave build command empty
5. Deploy!

You'll get a URL like: `https://email-signature-jos.pages.dev`

### 3. Update Your Signature File

Open `signature.html` and replace:

```html
YOUR_HOSTING_URL
```

With your Cloudflare Pages URL:

```html
https://email-signature-jos.pages.dev/assets
```

### 4. Install in Email Client

#### 🍎 Apple Mail

1. Open `signature.html` in Safari
2. Press Cmd+A (select all)
3. Press Cmd+C (copy)
4. Open Mail → Settings → Signatures
5. Click + to create new signature
6. Paste with Cmd+V
7. Done!

#### 📧 Gmail

1. Open `signature.html` in Chrome
2. Press Ctrl+A (select all)
3. Press Ctrl+C (copy)
4. Gmail Settings → "See all settings"
5. Scroll to "Signature"
6. Paste your signature
7. Save!

#### 📬 Outlook

1. Open `signature.html` in browser
2. Select all and copy
3. Outlook → Settings → Signatures
4. Create new and paste
5. Save!

## ✅ Done!

Send yourself a test email to verify everything looks good.

## 🆘 Quick Troubleshooting

**Logo not showing?**
- Check that files are in `cloudflare-pages/assets/`
- Verify your Cloudflare Pages URL is correct
- Make sure deployment succeeded

**Formatting looks weird?**
- Try `signature-simple.html` instead
- Some email clients strip CSS styling

**Dark mode not working?**
- Not all email clients support it
- Works best in Apple Mail
- Make sure you have both logo versions

---

Need more details? See the full [README.md](README.md)

