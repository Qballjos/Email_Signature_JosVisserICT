# 🆘 Troubleshooting

Common issues and solutions for the Jos Visser ICT Brand Kit system.

## ✅ System Status

**Your system is fully operational:**
- 🎨 Brand Kit: https://static.josvisserict.nl ✅
- 🖼️ All 6 logo variants: Deployed ✅
- 📧 Email signature: Ready ✅
- 🔒 Legal pages (NL + EN): Live ✅
- 🎯 404 page: Active ✅

**Quick test:** Visit https://static.josvisserict.nl - should load instantly

---

## Email Signature Issues

### Logo Not Showing in Sent Email

**Problem:** Logo doesn't appear when email is sent

**Quick Verification:**
```
✅ Test URL: https://static.josvisserict.nl/assets/josvisser-logo.png
   Should display logo immediately in browser
```

**Most Common Cause:**
Recipients have "Block external images" enabled in their email client.

**Solutions:**

✅ **Your side (already done):**
- Logo deployed ✅
- HTTPS enabled ✅
- CORS configured ✅
- Valid PNG file ✅

✅ **Recipient needs to:**
- Click "Load external images" button in their email
- Update security settings to allow images
- Whitelist `static.josvisserict.nl` domain

**Note:** This is normal behavior - most email clients block external images by default for security.

---

### Logo Alignment Issues

**Problem:** Logo or text not aligned properly

**Solution:**

✅ **Current signature (already fixed):**
- Unicode icons removed ✅
- Table-based layout ✅
- 90×90px logo (mobile-optimized) ✅
- Inline styles ✅

**If still having issues:**
1. Re-copy signature from https://static.josvisserict.nl
2. Delete old signature in email client
3. Paste new version
4. Don't manually edit in email client

---

### Signature Looks Different When Sent

**Problem:** Layout/colors change in sent emails

**Common Causes:**
- Email client modifies HTML
- Recipient's email client renders differently
- Dark mode auto-adjusts colors

**Solutions:**

1. **Use provided signature:**
   - `signature-final.html` is email-optimized ✅
   - All styles are inline ✅
   - Table-based layout for compatibility ✅

2. **Test in multiple clients:**
   - Send to yourself in Gmail
   - Send to yourself in Outlook
   - Check on mobile device

3. **Accept minor differences:**
   - Each email client renders slightly differently
   - This is normal and expected
   - Core information should always be visible

---

## Brand Kit Issues

### Favicon Not Loading

**Problem:** Browser tab doesn't show favicon

**Solutions:**

1. **Hard refresh:**
   - Mac: Cmd+Shift+R
   - Windows: Ctrl+Shift+R

2. **Clear browser cache:**
   - Chrome: Settings → Privacy → Clear browsing data
   - Safari: Safari → Clear History
   - Firefox: Options → Privacy → Clear Data

3. **Wait for CDN:**
   - Favicon may take 5-10 minutes to propagate
   - Global CDN needs time to update

4. **Verify file exists:**
   - Test: https://static.josvisserict.nl/assets/josvisser-logo-favicon.png
   - Should load immediately

---

### Copy Button Not Working

**Problem:** Copy button doesn't copy URL to clipboard

**Solutions:**

1. **Browser permissions:**
   - Browser may block clipboard access
   - Allow when prompted

2. **Try again:**
   - Click button again
   - Should show "✅ Gekopieerd!" feedback

3. **Manual copy:**
   - Click on the URL text itself
   - Right-click → Copy
   - Or triple-click to select, then Cmd/Ctrl+C

4. **Browser compatibility:**
   - Works best in Chrome, Safari, Firefox, Edge
   - May not work in very old browsers

---

### Theme Toggle Not Working

**Problem:** Theme toggle doesn't switch or shows wrong icon

**Current System:** 3-state toggle (Auto → Light → Dark → Auto)

**Icon Meanings:**
- ⚙️ = Auto mode (follows system)
- ☀️ = Light mode (forced)
- 🌙 = Dark mode (forced)

**Solutions:**

1. **Check current state:**
   - Open browser console (F12)
   - Brand Kit: `localStorage.getItem('brandkit-theme')`
   - Legal pages: `localStorage.getItem('theme')`
   - Should return: 'auto', 'light', or 'dark'

2. **Reset to auto:**
   ```javascript
   // For Brand Kit & 404
   localStorage.setItem('brandkit-theme', 'auto')
   
   // For legal pages
   localStorage.setItem('theme', 'auto')
   
   // Then refresh page
   location.reload()
   ```

3. **Test system detection:**
   - Change your OS dark/light mode
   - In auto mode (🔄), page should update automatically
   - In manual mode (🌙/☀️), page stays same

4. **Browser compatibility:**
   - Works in all modern browsers ✅
   - Requires JavaScript enabled
   - Check if JavaScript is blocked

5. **Clear and reset:**
   ```javascript
   localStorage.clear()
   location.reload()
   // Starts fresh in auto mode
   ```

---

### Language Switcher Not Working

**Problem:** Clicking NL/EN doesn't switch language

**Solutions:**

1. **Check you're on correct page:**
   - privacy.html → switches to → privacy-en.html
   - terms.html → switches to → terms-en.html

2. **Clear cache:**
   - Hard refresh browser
   - Try incognito mode

3. **Test URLs directly:**
   - https://static.josvisserict.nl/privacy.html (NL)
   - https://static.josvisserict.nl/privacy-en.html (EN)
   - Both should load

---

## Deployment Issues

### Changes Not Visible After Push

**Problem:** Pushed to GitHub but changes not live

**Solutions:**

1. **Wait for deployment:**
   - Cloudflare takes 1-2 minutes
   - Check deployment status in Cloudflare dashboard

2. **Clear browser cache:**
   - Hard refresh: Cmd+Shift+R
   - Try incognito/private browsing
   - Clear all site data

3. **CDN cache:**
   - Global CDN may cache for up to 5 minutes
   - Wait and try again
   - Use incognito to bypass local cache

4. **Verify deployment succeeded:**
   - Check Cloudflare Dashboard → Workers & Pages
   - View deployment logs
   - Look for errors

---

### Deployment Failed

**Problem:** Cloudflare deployment shows error

**Common Causes:**
- Bestandsnamen met spaties
- Internal Cloudflare timeout
- Invalid file formats

**Solutions:**

1. **Trigger redeploy:**
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push
   ```

2. **Check filenames:**
   - ✅ Good: `josvisser-logo-full-colour.png`
   - ❌ Bad: `Jos Visser ICT Full Colour.png`
   - Use URL-friendly names (no spaces)

3. **Check file sizes:**
   - Keep images under 100KB
   - Compress if needed

4. **Contact Cloudflare:**
   - If persistent errors
   - Check status: https://www.cloudflarestatus.com

---

## Apple Mail Specific

### Signature Gets Modified After Pasting

**Problem:** Apple Mail changes signature HTML

**Solutions:**

1. **Lock signature file:**
   - Close Mail completely
   - Navigate to: `~/Library/Mail/V10/MailData/Signatures/`
   - Find your `.mailsignature` file
   - Right-click → Get Info → Check "Locked"

2. **Use Safari for copying:**
   - Open signature in Safari (not Chrome)
   - Copy from Safari
   - Paste in Mail

3. **Don't edit in Mail:**
   - Make changes in HTML file
   - Re-copy and re-paste
   - Never edit directly in Mail preferences

**Detailed guide:** [iOS Compatibility](iOS-Compatibility)

---

## Gmail Specific

### Signature Formatting Lost

**Problem:** Gmail removes styling

**Solutions:**

1. **Use rich text mode:**
   - Ensure not in "Plain text mode"
   - Switch to formatted text

2. **Copy from Chrome:**
   - Works best with Chrome browser
   - Use Cmd/Ctrl+V (not Paste and Match Style)

3. **Simplify if needed:**
   - Current signature is already Gmail-optimized ✅
   - Table-based layout works well ✅

---

## Mobile Issues

### Signature Too Large on Mobile

**Problem:** Signature takes too much space on phone

**Current Status:** ✅ Already mobile-optimized!
- Logo: 90×90px (small and compact)
- Responsive layout
- No unnecessary whitespace

**If still an issue:**
- This is how the signature is designed
- Email clients may add padding
- Consider if signature is needed on mobile replies

---

## Brand Kit Page Issues

### Page Won't Load

**Problem:** https://static.josvisserict.nl doesn't load

**Solutions:**

1. **Check internet connection:**
   - Try other websites
   - Test direct: https://static.josvisserict.nl

2. **DNS propagation:**
   - If recently deployed: wait 10-30 minutes
   - Try different network (mobile data vs wifi)

3. **Clear DNS cache:**
   ```bash
   # Mac
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

4. **Try different browser:**
   - Chrome, Safari, Firefox, Edge
   - Incognito/private mode

---

### Copy Signature Button Not Working

**Problem:** "📋 Kopieer Handtekening" doesn't work

**Solutions:**

1. **Use manual method:**
   - Click in signature preview box
   - Cmd+A (select all)
   - Cmd+C (copy)
   - Works the same way

2. **Check JavaScript:**
   - Browser must have JavaScript enabled
   - Check browser settings
   - Try different browser

3. **Browser compatibility:**
   - Works in Chrome, Safari, Firefox, Edge ✅
   - May not work in very old browsers

---

## 404 Errors

### Getting 404 on Asset URLs

**Problem:** Asset URL returns "404 Not Found"

**Verify URL format:**
```
✅ Correct: https://static.josvisserict.nl/assets/josvisser-logo.png
❌ Wrong: https://static.josvisserict.nl/josvisser-logo.png (missing /assets/)
❌ Wrong: https://static.josvisserict.nl/assets/Logo.png (wrong filename)
```

**Solutions:**

1. **Check exact filename:**
   - Case sensitive!
   - Use exact names from Brand Kit
   - Copy URL from Brand Kit page

2. **Test in browser:**
   - Paste URL directly in browser
   - Should load immediately
   - If not, filename is wrong

3. **View all assets:**
   - Go to https://static.josvisserict.nl
   - All available assets are listed
   - Use copy buttons for correct URLs

---

## Performance Issues

### Brand Kit Page Loads Slowly

**Problem:** Page takes long to load

**Expected behavior:**
- Should load in under 2 seconds globally
- Cloudflare CDN optimized for speed

**Solutions:**

1. **Check your internet:**
   - Test speed: https://fast.com
   - Slow connection affects loading

2. **Clear browser cache:**
   - Old cached version may be corrupted
   - Hard refresh: Cmd+Shift+R

3. **Check Cloudflare status:**
   - Visit: https://www.cloudflarestatus.com
   - Verify no outages

---

## Need More Help?

### Quick Resources

- 🎨 [Brand Kit](https://static.josvisserict.nl) - View all assets
- 📚 [Installation Guide](Installation-Guide) - Step-by-step setup
- 🚀 [Quick Start](Quick-Start-Guide) - Fast setup
- 📱 [iOS Compatibility](iOS-Compatibility) - Apple device help

### Contact

If you can't resolve the issue:

**Jos Visser ICT**  
📧 info@josvisserict.nl  
📱 +31 (0)6 124 159 90

---

## Common Misconceptions

### "Logo must be on my server"
❌ **False** - Logos are on Cloudflare CDN (faster, more reliable)

### "I need analytics/tracking"
❌ **Not needed** - System is privacy-focused, no tracking required

### "External images are unsafe"
✅ **Safe** - HTTPS + Cloudflare security + CORS configured properly

### "Email signature needs JavaScript"
✅ **Correct for Brand Kit** - But email signature itself is pure HTML (no JS)

---

**Still having issues?** Check [GitHub Issues](https://github.com/Qballjos/Email_Signature_JosVisserICT/issues) or create a new one.
