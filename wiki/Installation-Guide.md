# 📖 Installation Guide

Complete step-by-step guide to installing your email signature.

## Overview

**Your system is already fully deployed!** This guide covers how to install the signature in your email client.

**What's Ready:**
- ✅ Brand Kit live at https://static.josvisserict.nl
- ✅ 6 logo variants deployed
- ✅ Email signature copy-ready
- ✅ Privacy & Terms pages (NL + EN)

**Estimated time:** 5-10 minutes

---

## Step 1: Access Your Signature

### Method A: Via Brand Kit (Easiest) ⭐

1. Visit: https://static.josvisserict.nl
2. Scroll to **"Email Signature"** section
3. Click **"📋 Kopieer Handtekening"** button
4. Signature is now copied to clipboard!

### Method B: Via Local File

1. Open `signature-final-preview.html` in browser
2. Click in gray signature box
3. Press **Cmd+A** (select all)
4. Press **Cmd+C** (copy)

---

## Step 2: Install in Email Client

### Apple Mail (macOS)

1. Open `signature.html` in **Safari**
2. Press **Cmd+A** to select all
3. Press **Cmd+C** to copy
4. Open **Mail** → **Settings** (Cmd+,)
5. Go to **Signatures** tab
6. Select your email account
7. Click **+** to create new signature
8. Name it (e.g., "Jos Visser ICT")
9. Press **Cmd+V** to paste
10. Close settings (saves automatically)

**Important:** To prevent Apple Mail from modifying your signature:
1. Close Mail completely
2. Navigate to: `~/Library/Mail/V10/MailData/Signatures/`
3. Find your signature file (`.mailsignature`)
4. Right-click → Get Info
5. Check "Locked"

### Gmail (Web)

1. Open `signature.html` in **Chrome** or **Firefox**
2. Press **Ctrl+A** (Cmd+A on Mac) to select all
3. Press **Ctrl+C** (Cmd+C on Mac) to copy
4. Go to Gmail → Click ⚙️ **Settings**
5. Click **"See all settings"**
6. Scroll to **"Signature"** section
7. Click **"Create new"**
8. Name it (e.g., "Jos Visser ICT")
9. Press **Ctrl+V** (Cmd+V) to paste in the editor
10. Scroll down and click **"Save Changes"**

### Outlook Desktop (Windows)

1. Open `signature.html` in any browser
2. Select all content (Ctrl+A)
3. Copy (Ctrl+C)
4. Open Outlook
5. Go to **File** → **Options** → **Mail**
6. Click **"Signatures..."**
7. Click **"New"**
8. Name your signature
9. Paste in the editor (Ctrl+V)
10. Click **"OK"**

### Outlook Web

1. Open `signature.html` in browser
2. Select all and copy
3. Go to Outlook.com
4. Click ⚙️ **Settings** → **View all Outlook settings**
5. Go to **Compose and reply**
6. In the **Email signature** box, paste
7. Click **"Save"**

### Outlook Mobile (iOS/Android)

1. Open Outlook app
2. Go to **Settings** (gear icon)
3. Select your account
4. Tap **Signature**
5. **Note:** Mobile Outlook has limited HTML support
6. Consider using plain text version for mobile

---

## Step 3: Test Your Signature

### Send Test Emails

1. **Send to yourself** - Check how it looks
2. **Test on mobile** - Check phone/tablet display
3. **Test different clients** - Gmail, Outlook, Apple Mail

### What to Check

- ✅ Logo appears correctly (90×90px, rounded corners)
- ✅ All links are clickable (phone, email, website)
- ✅ Colors look good (orange branding #ea8b39)
- ✅ Layout is preserved (logo, separator, contact info)
- ✅ Disclaimer is visible and readable
- ✅ Mobile responsive
- ✅ No Unicode icons (removed for better alignment)

---

## Brand Kit Features

Now that your signature is installed, explore the Brand Kit:

### Available at https://static.josvisserict.nl

**Logo Variants:**
- Full Colour Logo - Primary use
- Black Logo - For light backgrounds
- App Icon - Application icons
- Favicon - Website favicon
- Artboard - Design work
- Email Logo - Current signature logo (1360×1360px)

**Legal Pages:**
- Privacy Policy (NL + EN) with language switcher
- Terms and Conditions (NL + EN) with language switcher
- Dark mode toggle on all pages
- Custom 404 error page

**Features:**
- 📋 One-click copy for all URLs
- 🔗 Direct preview links
- 🌙 Dark mode with localStorage
- 🔄 Language switcher (NL ↔ EN)
- 🎯 Custom 404 page

---

## Troubleshooting

### Logo Not Showing

**Problem:** Logo doesn't appear in sent emails

**Solutions:**
1. Logo is already deployed at https://static.josvisserict.nl ✅
2. Test URL directly: https://static.josvisserict.nl/assets/josvisser-logo.png
3. Recipient may need to allow external images in their email client
4. Some corporate email filters block external images

### Formatting Issues

**Problem:** Signature looks different when sent

**Solutions:**
1. Signature uses email-safe table layout ✅
2. All styles are inline (no external CSS) ✅
3. Unicode icons removed for better compatibility ✅
4. Test in recipient's email client

### Logo Alignment Issues

**Problem:** Logo or text not aligned properly

**Solutions:**
1. Unicode icons already removed ✅
2. Table-based layout ensures consistent alignment ✅
3. Logo is 90×90px for mobile optimization ✅
4. Different email clients may render slightly differently

### Apple Mail Signature Lock

**How to prevent Apple Mail from modifying:**

1. Close Mail completely
2. Navigate to: `~/Library/Mail/V10/MailData/Signatures/`
3. Find your `.mailsignature` file
4. Right-click → Get Info → Check "Locked"

**More help:** [Troubleshooting](Troubleshooting) | [iOS Compatibility](iOS-Compatibility)

---

## Additional Features

### Update Contact Information

To change your contact details in the signature:

1. Edit `signature-final.html`
2. Find the contact information section
3. Update phone, email, website, address as needed
4. Test locally with `signature-final-preview.html`
5. Commit and use updated version

### Use Different Logo

To use a different logo variant:

1. Visit Brand Kit: https://static.josvisserict.nl
2. Choose your preferred logo variant
3. Click **📋 Copy** next to the URL
4. Edit `signature-final.html`
5. Replace logo URL with your chosen variant
6. Save and reinstall signature

**Available variants:**
- Full Colour (primary)
- Black (light backgrounds)
- App Icon
- Current email logo (1360×1360px)

---

## Additional Resources

- **[Quick Start Guide](Quick-Start-Guide)** - Fast 5-minute setup
- **[Deployment Guide](Deployment-Guide)** - Cloudflare details
- **[Logo Requirements](Logo-Requirements)** - Logo specifications
- **[Troubleshooting](Troubleshooting)** - Fix common issues
- **[iOS Compatibility](iOS-Compatibility)** - iPhone/iPad specific guide

---

## Live Resources

- 🎨 [Brand Kit](https://static.josvisserict.nl) - All assets
- 🔒 [Privacy Policy](https://static.josvisserict.nl/privacy.html) - GDPR info
- 📜 [Terms](https://static.josvisserict.nl/terms.html) - Legal terms

---

**Installation Complete!** Send test emails and enjoy your professional signature! ✅

