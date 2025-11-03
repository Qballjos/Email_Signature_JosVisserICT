# Email Signature - Jos Visser ICT

A professional, responsive email signature with dark/light mode support for Jos Visser ICT.

## 📋 Features

- ✨ Clean, modern design
- 🌓 Automatic dark/light mode switching
- 📱 Mobile-responsive
- 🔒 Privacy-focused (works with Apple Mail security restrictions)
- 🌐 Hosted assets via Cloudflare Pages
- 📧 Compatible with major email clients (Gmail, Outlook, Apple Mail, etc.)

## 📁 Project Structure

```
Email_Signature_JosVisserICT/
├── signature.html              # Full-featured signature with tables
├── signature-simple.html       # Simplified version (better compatibility)
├── assets/                     # Your original logo files (for safekeeping)
├── cloudflare-pages/          # Files to deploy to Cloudflare Pages
│   ├── index.html             # Landing page for asset hosting
│   ├── _headers               # CORS and caching headers
│   └── assets/                # Logo files for email signature
│       ├── logo-light.png     # Logo for light mode (ADD THIS)
│       └── logo-dark.png      # Logo for dark mode (ADD THIS)
└── README.md                  # This file
```

## 🚀 Quick Start

### Step 1: Prepare Your Logo

1. Create two versions of your logo:
   - **logo-light.png** - For light backgrounds (use dark text/elements)
   - **logo-dark.png** - For dark backgrounds (use light text/elements)

2. Recommended specifications:
   - Dimensions: ~300x100px (or similar 3:1 ratio)
   - Format: PNG with transparent background
   - File size: Keep under 100KB for fast loading

3. Place your logos in:
   - `assets/` folder (for backup/safekeeping)
   - `cloudflare-pages/assets/` folder (for deployment)

### Step 2: Deploy to Cloudflare Pages

#### Option A: Using Git (Recommended)

1. **Push this repository to GitHub** (you've already done this!)

2. **Go to Cloudflare Pages:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Go to "Workers & Pages" → "Pages"
   - Click "Create a project" → "Connect to Git"

3. **Connect your repository:**
   - Select your GitHub repository: `Email_Signature_JosVisserICT`
   - Configure build settings:
     - **Build command:** (leave empty)
     - **Build output directory:** `cloudflare-pages`
     - **Root directory:** `/`
   - Click "Save and Deploy"

4. **Get your hosting URL:**
   - After deployment, you'll get a URL like: `https://email-signature-jos.pages.dev`
   - Or set up a custom domain like: `https://assets.josvisserict.nl`

#### Option B: Direct Upload

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Deploy:**
   ```bash
   cd cloudflare-pages
   wrangler pages deploy . --project-name=email-signature-jos
   ```

### Step 3: Update Signature HTML

1. Open `signature.html` (or `signature-simple.html`)

2. Replace `YOUR_HOSTING_URL` with your Cloudflare Pages URL:
   ```html
   <!-- Before -->
   <img src="YOUR_HOSTING_URL/logo-light.png" ...>
   
   <!-- After -->
   <img src="https://email-signature-jos.pages.dev/assets/logo-light.png" ...>
   ```

3. Save the file

### Step 4: Install in Your Email Client

#### Apple Mail (macOS)

1. Open `signature.html` in a web browser
2. Select all content (Cmd+A)
3. Copy (Cmd+C)
4. Open Apple Mail → Preferences → Signatures
5. Create a new signature
6. Paste (Cmd+V) into the signature editor
7. Close preferences (it saves automatically)

**Important for Apple Mail:** 
- Apple Mail may try to "fix" your HTML. To prevent this:
  - After pasting, close Mail preferences
  - Navigate to: `~/Library/Mail/V10/MailData/Signatures/`
  - Find your signature file (it will have a `.mailsignature` extension)
  - Open it in a text editor
  - Find the line `<body>` and change it to `<body style="margin: 0;">`
  - Save and close
  - Lock the file (Right-click → Get Info → Check "Locked")

#### Gmail

1. Open `signature.html` in a web browser
2. Select all content (Ctrl+A / Cmd+A)
3. Copy (Ctrl+C / Cmd+C)
4. Go to Gmail Settings (gear icon) → "See all settings"
5. Scroll to "Signature" section
6. Click "Create new" signature
7. Paste your signature
8. Scroll down and click "Save Changes"

#### Outlook (Desktop)

1. Open `signature.html` in a web browser
2. Select all content
3. Copy
4. Open Outlook → File → Options → Mail → Signatures
5. Click "New" to create a new signature
6. Paste into the editor
7. Click "OK"

#### Outlook (Web)

1. Open `signature.html` in a web browser
2. Select all content and copy
3. Go to Outlook.com → Settings (gear icon) → View all Outlook settings
4. Go to "Compose and reply"
5. Paste in the signature box
6. Click "Save"

## 🎨 Customization

### Colors

The signature uses these default colors:

- **Primary Blue:** `#2563eb` (links, name, icons)
- **Purple Accent:** `#7c3aed` (gradient divider)
- **Text Dark:** `#333333` / `#4b5563`
- **Text Light:** `#6b7280` (subtitle, address)

To change colors, search and replace hex values in the HTML files.

### Layout

Two versions are provided:

1. **signature.html** - Full-featured with tables (best rendering)
2. **signature-simple.html** - Simplified divs (better compatibility)

Try `signature.html` first. If you experience issues with certain email clients, use `signature-simple.html`.

### Dark Mode

Dark mode automatically activates based on the recipient's system preferences using:

```css
@media (prefers-color-scheme: dark) {
    /* Dark mode styles */
}
```

**Note:** Dark mode support varies by email client:
- ✅ Apple Mail (macOS/iOS)
- ✅ Outlook (iOS/Android)
- ⚠️ Gmail (limited support)
- ❌ Outlook Desktop (Windows)

## 🔧 Troubleshooting

### Images Not Loading

**Problem:** Logo doesn't appear in emails

**Solutions:**
1. Verify your Cloudflare Pages deployment is live
2. Check that logo files are in `cloudflare-pages/assets/`
3. Ensure URLs in signature.html match your hosting URL
4. Try accessing the image URL directly in a browser
5. Check recipient's email client allows external images

### Dark Mode Not Working

**Problem:** Dark mode doesn't switch automatically

**Solutions:**
1. Verify recipient's email client supports `prefers-color-scheme`
2. Ensure both logo versions exist (logo-light.png and logo-dark.png)
3. Try the simplified version: `signature-simple.html`

### Formatting Broken in Email Client

**Problem:** Signature looks different when pasted

**Solutions:**
1. Try using `signature-simple.html` instead
2. In Apple Mail, lock the signature file (see Step 4 above)
3. Some email clients strip certain CSS - inline styles work best
4. Test with a plain text/HTML toggle in your email client

### Apple Mail Security Warnings

**Problem:** "This message contains blocked images"

**Explanation:**
- Modern Apple Mail blocks tracking pixels and some external content
- This is normal and protects privacy
- Your signature will still work once the recipient allows images
- Using Cloudflare Pages with proper headers helps minimize this

## 📱 Testing Your Signature

Send test emails to:
- Gmail (desktop & mobile)
- Outlook (desktop & web)
- Apple Mail (macOS & iOS)
- Your own email addresses

Check that:
- ✅ Logo appears correctly
- ✅ Links are clickable
- ✅ Layout is preserved
- ✅ Colors look good
- ✅ Mobile responsive
- ✅ Dark mode switches (where supported)

## 🔐 Privacy & Security

### Why Cloudflare Pages?

Modern email clients (especially Apple Mail) block:
- Tracking pixels
- Analytics cookies
- Some external images
- JavaScript

**Solution:** Host images on Cloudflare Pages because:
- ✅ Fast global CDN
- ✅ Proper CORS headers
- ✅ No tracking or cookies
- ✅ HTTPS by default
- ✅ Free tier available
- ✅ Works with Apple Mail security

### Alternative Hosting Options

If you prefer not to use Cloudflare Pages:

1. **Your own website:** Host at `https://josvisserict.nl/signature/assets/`
2. **GitHub Pages:** Similar to Cloudflare Pages
3. **Imgur/Image hosting:** Upload logos to Imgur (less professional)
4. **Email client hosting:** Some services offer signature hosting

**Important:** Whatever hosting you choose, ensure:
- HTTPS is enabled
- CORS headers allow `Access-Control-Allow-Origin: *`
- Images are optimized and small in file size

## 📞 Contact Information

This signature is configured for:

**Jos Visser**  
ICT Specialist

📧 info@josvisserict.nl  
📱 +31 (0)6 124 159 90  
🌐 josvisserict.nl  
📍 Spijkmanstraat 86, 7009 HS Doetinchem, Nederland

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🆘 Need Help?

If you encounter any issues:

1. Check the Troubleshooting section above
2. Verify all files are in the correct locations
3. Test your Cloudflare Pages deployment
4. Try the simplified signature version
5. Consult your email client's signature documentation

---

**Last Updated:** November 3, 2025  
**Version:** 1.0.0

