# 📖 Installation Guide

Complete step-by-step guide to installing your email signature.

## Overview

This guide covers:
- Creating and preparing logos
- Deploying to Cloudflare Pages
- Updating signature files
- Installing in email clients
- Testing and verification

**Estimated time:** 20-30 minutes

---

## Step 1: Prepare Your Logos

### What You Need

Two versions of your logo:

| File | Purpose | Design |
|------|---------|--------|
| `logo-light.png` | Light mode | Dark colored logo |
| `logo-dark.png` | Dark mode | Light colored logo |

### Specifications

- **Size:** 300x100px (recommended)
- **Format:** PNG with transparent background
- **File size:** Under 100KB
- **Resolution:** 72-150 DPI

**Detailed guide:** [Logo Requirements](Logo-Requirements)

### Where to Place Them

```
cloudflare-pages/assets/
├── logo-light.png
└── logo-dark.png
```

Also keep backups in `assets/` folder.

---

## Step 2: Deploy to Cloudflare Pages

See the complete [Deployment Guide](Deployment-Guide) for all methods.

### Quick Deploy via GitHub

1. **Login to Cloudflare:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign up (free) if needed

2. **Connect Repository:**
   - Workers & Pages → Create application
   - Pages → Connect to Git
   - Select: `Email_Signature_JosVisserICT`

3. **Configure:**
   - Project name: `email-signature-jos`
   - Build output: `cloudflare-pages`
   - Build command: (empty)

4. **Deploy:**
   - Click "Save and Deploy"
   - Wait 30-60 seconds
   - Get your URL: `https://email-signature-jos.pages.dev`

---

## Step 3: Update Signature HTML

### Edit signature.html

1. Open `signature.html` in your text editor

2. Find this line (appears twice):
   ```html
   <img src="YOUR_HOSTING_URL/logo-light.png" ...>
   ```

3. Replace `YOUR_HOSTING_URL` with your actual Cloudflare URL:
   ```html
   <img src="https://email-signature-jos.pages.dev/assets/logo-light.png" ...>
   ```

4. Find the second occurrence (for `logo-dark.png`) and update it too

5. Save the file

---

## Step 4: Install in Email Client

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

## Step 5: Test Your Signature

### Send Test Emails

1. **Send to yourself:** Check how it looks
2. **Test on multiple clients:**
   - Gmail
   - Apple Mail
   - Outlook
3. **Test on mobile:** Check phone/tablet display
4. **Test dark mode:** Enable dark mode on devices that support it

### What to Check

- ✅ Logo appears correctly
- ✅ All links are clickable
- ✅ Colors look good
- ✅ Layout is preserved
- ✅ Text is readable
- ✅ Mobile responsive
- ✅ Dark mode switches (if supported)

---

## Step 6: Troubleshooting

### Logo Not Showing

**Problem:** Logo doesn't appear in sent emails

**Solutions:**
1. Verify Cloudflare deployment succeeded
2. Check URL in `signature.html` is correct
3. Test URL directly in browser
4. Ensure recipient allows external images
5. Check CORS headers are configured

### Formatting Looks Different

**Problem:** Signature looks different when sent

**Solutions:**
1. Try `signature-simple.html` instead
2. Some email clients strip CSS
3. Use inline styles (already done)
4. Test in different email clients

### Dark Mode Not Working

**Problem:** Dark mode doesn't switch automatically

**Solutions:**
1. Not all email clients support `prefers-color-scheme`
2. Ensure both logo versions exist
3. Apple Mail and Outlook mobile support it best
4. Gmail has limited support

### Apple Mail Modifies HTML

**Problem:** Apple Mail changes signature after pasting

**Solutions:**
1. Lock the signature file (see Step 4 above)
2. Use "Paste and Match Style" (Cmd+Shift+V)
3. Manually edit the `.mailsignature` file

**More help:** [Troubleshooting](Troubleshooting)

---

## Additional Resources

- **[Deployment Guide](Deployment-Guide)** - Detailed Cloudflare setup
- **[Logo Requirements](Logo-Requirements)** - Create proper logos
- **[Troubleshooting](Troubleshooting)** - Fix common issues
- **[Quick Start](Quick-Start-Guide)** - Fast 10-minute setup

---

## Need Help?

Check the [Troubleshooting](Troubleshooting) page or review the documentation files in the repository.

