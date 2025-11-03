# 🆘 Troubleshooting

Common issues and solutions for your email signature.

## Logo Issues

### Logo Not Showing in Email

**Problem:** Logo doesn't appear when email is sent

**Possible Causes:**
1. Cloudflare deployment not complete
2. Wrong URL in signature HTML
3. Files not uploaded
4. Recipient blocks external images

**Solutions:**

✅ **Verify deployment:**
- Visit your Cloudflare URL directly
- Test: `https://your-url.pages.dev/assets/logo-light.png`
- Should display the logo

✅ **Check URL in HTML:**
- Open `signature.html`
- Find `YOUR_HOSTING_URL`
- Replace with actual Cloudflare URL
- Save and reinstall signature

✅ **Verify file upload:**
```bash
ls -la cloudflare-pages/assets/
# Should show logo-light.png and logo-dark.png
```

✅ **Check file names:**
- Must be exactly: `logo-light.png` and `logo-dark.png`
- Case sensitive!
- No spaces or extra characters

✅ **Recipient settings:**
- Ask recipient to "Load external images"
- Common in corporate email clients

---

### Logo Shows Broken Image Icon

**Problem:** ⚠️ icon instead of logo

**Solution:**

1. **Test URL directly:**
   ```
   https://your-url.pages.dev/assets/logo-light.png
   ```
   Should load in browser

2. **Check CORS headers:**
   - Verify `_headers` file in `cloudflare-pages/`
   - Should contain CORS settings

3. **Verify file format:**
   - Must be valid PNG
   - Not corrupted
   - Under 100KB

4. **Re-upload logo:**
   - Delete from `cloudflare-pages/assets/`
   - Re-add valid PNG file
   - Redeploy

---

### Dark Mode Logo Not Switching

**Problem:** Same logo shows in light and dark mode

**Possible Causes:**
1. Email client doesn't support dark mode
2. Missing `logo-dark.png`
3. CSS media query stripped

**Solutions:**

✅ **Check client support:**
- ✅ Apple Mail (macOS/iOS) - Full support
- ✅ Outlook (iOS/Android) - Supported
- ⚠️ Gmail - Limited support
- ❌ Outlook Desktop - Not supported

✅ **Verify both logos exist:**
```bash
ls cloudflare-pages/assets/
# Should show both logo-light.png and logo-dark.png
```

✅ **Test manually:**
- Enable dark mode on your device
- View email in supported client
- Logo should switch

✅ **Use fallback:**
- If client doesn't support, logo-light.png shows
- This is expected behavior

---

## Formatting Issues

### Signature Looks Different When Sent

**Problem:** Layout/colors change in sent emails

**Causes:**
- Email client strips CSS
- Inline styles modified
- Font availability differs

**Solutions:**

✅ **Try simplified version:**
- Use `signature-simple.html` instead
- More compatible with strict clients
- Less styling = less stripping

✅ **Use inline styles only:**
- Already done in provided files
- Avoid external CSS
- Avoid complex selectors

✅ **Test in multiple clients:**
- Gmail (web and mobile)
- Apple Mail
- Outlook (desktop and web)
- Find which works best

✅ **Lock signature (Apple Mail):**
1. Close Mail
2. Go to: `~/Library/Mail/V10/MailData/Signatures/`
3. Find `.mailsignature` file
4. Right-click → Get Info → Lock

---

### Text Alignment Off

**Problem:** Text not aligned properly

**Solutions:**

1. **Check HTML structure:**
   - Verify no extra spaces
   - Check closing tags
   - Validate HTML syntax

2. **Use table layout:**
   - `signature.html` uses tables
   - Better email client support
   - More reliable rendering

3. **Reset and reinstall:**
   - Delete signature from email client
   - Re-paste from browser
   - Don't manually edit in client

---

### Colors Look Wrong

**Problem:** Colors appear different than intended

**Solutions:**

1. **Use hex colors:**
   - Already done: `#2563eb`
   - More reliable than RGB/HSL
   - Consistent across clients

2. **Increase contrast:**
   - Ensure readability
   - Test on light and dark backgrounds
   - Avoid light gray on white

3. **Check dark mode:**
   - Colors may invert automatically
   - Test in dark mode
   - Adjust if needed

---

## Installation Issues

### Can't Copy Signature from Browser

**Problem:** Select all doesn't work

**Solutions:**

1. **Use keyboard shortcuts:**
   - Windows: `Ctrl+A`, then `Ctrl+C`
   - Mac: `Cmd+A`, then `Cmd+C`

2. **Right-click method:**
   - Right-click in browser
   - Select "Select All"
   - Right-click → Copy

3. **Try different browser:**
   - Chrome/Edge - Best compatibility
   - Safari - Works for Apple Mail
   - Firefox - Alternative

---

### Signature Doesn't Paste Correctly

**Problem:** Formatting lost when pasting

**Solutions:**

✅ **Gmail:**
- Must paste in rich text editor
- Don't use "Plain text mode"
- Paste with `Ctrl/Cmd+V`

✅ **Apple Mail:**
- Paste with `Cmd+V` (not Shift+Cmd+V)
- Don't use "Paste and Match Style"
- Lock file after pasting

✅ **Outlook:**
- Paste in HTML editor
- Not in plain text mode
- Use signature editor, not compose

---

### Apple Mail Modifies Signature

**Problem:** Apple Mail changes HTML after saving

**Solution - Lock the File:**

1. **Close Mail completely**

2. **Navigate to:**
   ```bash
   ~/Library/Mail/V10/MailData/Signatures/
   ```
   (V10 may be different version)

3. **Find your signature:**
   - Look for `.mailsignature` file
   - May need to check timestamp

4. **Lock it:**
   - Right-click → Get Info
   - Check "Locked" checkbox
   - Close info window

5. **Reopen Mail**
   - Signature now protected
   - Won't be modified

---

## Deployment Issues

### Cloudflare Deployment Fails

**Problem:** Deployment doesn't complete

**Solutions:**

✅ **Check build settings:**
- Build output: `cloudflare-pages`
- Build command: (empty)
- Root directory: `/`

✅ **Verify file structure:**
```
cloudflare-pages/
├── index.html
├── _headers
├── wrangler.toml
└── assets/
    ├── logo-light.png
    └── logo-dark.png
```

✅ **Check logs:**
- Cloudflare Pages dashboard
- View deployment logs
- Look for error messages

✅ **Try manual deploy:**
- Use Wrangler CLI
- Or direct upload method
- See [Deployment Guide](Deployment-Guide)

---

### GitHub Actions Not Running

**Problem:** Auto-deploy workflow doesn't trigger

**Causes:**
1. Secrets not configured
2. Workflow permissions disabled
3. Invalid workflow file

**Solutions:**

✅ **Check secrets:**
- Settings → Secrets and variables → Actions
- Verify `CLOUDFLARE_API_TOKEN` exists
- Verify `CLOUDFLARE_ACCOUNT_ID` exists

✅ **Enable permissions:**
- Settings → Actions → General
- Workflow permissions: "Read and write"
- Allow Actions to create PRs: ✅

✅ **Check workflow file:**
```bash
cat .github/workflows/deploy.yml
# Should be valid YAML
# Check indentation
```

✅ **Manual trigger:**
- Actions tab → Deploy workflow
- Run workflow manually
- Check logs for errors

---

### Can't Access Cloudflare URL

**Problem:** 404 or connection error

**Solutions:**

1. **Wait for propagation:**
   - Can take 5-10 minutes
   - Check deployment status
   - Refresh browser

2. **Verify URL:**
   - Should be: `https://project-name.pages.dev`
   - Check spelling
   - Use HTTPS, not HTTP

3. **Check deployment status:**
   - Cloudflare dashboard
   - Should show "Active"
   - Not "Building" or "Failed"

---

## Email Client Specific

### Gmail Issues

**Problem:** Signature not showing or formatting lost

**Solutions:**

1. **Use Chrome browser** for best compatibility
2. **Disable plain text mode** in Gmail settings
3. **Check signature settings:**
   - Settings → See all settings
   - Signature section
   - Verify signature selected for account
4. **Mobile Gmail:**
   - Signature may look different
   - Some styling limitations expected

---

### Outlook Desktop Issues

**Problem:** Signature doesn't look right

**Solutions:**

1. **Outlook uses Word rendering engine:**
   - Limited CSS support
   - Try `signature-simple.html`
   - Some features won't work

2. **Dark mode not supported:**
   - Outlook Desktop doesn't respect media queries
   - Logo-light.png will always show
   - This is normal

3. **File → Options → Mail → Signatures:**
   - Must paste in HTML editor
   - Not rich text editor
   - Clear formatting before pasting

---

### Apple Mail Issues

**Problem:** Signature keeps changing

**Solutions:**

1. **Lock the signature file** (see above)
2. **Don't edit in Mail:**
   - Edit `signature.html` instead
   - Re-install completely
3. **Check macOS version:**
   - Newer versions better support
   - Update if possible

---

## Testing Issues

### Can't Test Dark Mode

**Problem:** Don't see dark mode version

**Solutions:**

1. **Enable dark mode on device:**
   - macOS: System Preferences → General → Appearance
   - iOS: Settings → Display & Brightness → Dark
   - Windows: Settings → Personalization → Colors

2. **Use supported client:**
   - Apple Mail ✅
   - Outlook mobile ✅
   - Gmail ⚠️ (limited)

3. **Send test email:**
   - Send to yourself
   - View on device with dark mode
   - Check both logos

---

## Performance Issues

### Slow Loading

**Problem:** Signature takes time to load

**Solutions:**

1. **Optimize logos:**
   - Compress with [TinyPNG](https://tinypng.com)
   - Target 20-50KB per file
   - Max 100KB

2. **Use CDN:**
   - Cloudflare Pages is a CDN ✅
   - Already optimized
   - Fast worldwide

3. **Check file sizes:**
   ```bash
   ls -lh cloudflare-pages/assets/
   # Should show file sizes
   ```

---

## Privacy & Security

### Apple Mail Security Warning

**Problem:** "This message contains blocked images"

**Explanation:**
- Apple Mail protects privacy
- Blocks some external content
- Normal behavior
- Not an error

**What happens:**
- Recipient sees warning
- Can click to load images
- Signature then displays
- Cloudflare Pages minimizes this

**Solution:**
- Use Cloudflare Pages ✅ (already done)
- Proper CORS headers ✅ (already configured)
- No tracking pixels ✅ (privacy-first design)
- Some clients will always prompt

---

## Still Having Issues?

### Getting Help

1. **Check documentation:**
   - [Installation Guide](Installation-Guide)
   - [Deployment Guide](Deployment-Guide)
   - [Logo Requirements](Logo-Requirements)

2. **Review files:**
   - Double-check all steps
   - Verify file names and locations
   - Test URLs directly

3. **Test systematically:**
   - One email client at a time
   - Eliminate variables
   - Document what works

4. **Common mistakes:**
   - Wrong URL in signature HTML
   - Files in wrong folder
   - Incorrect file names
   - Deployment not complete

---

## Quick Diagnostic

Run through this checklist:

```
☐ Logos exist in cloudflare-pages/assets/
☐ File names exactly: logo-light.png, logo-dark.png
☐ Cloudflare deployment succeeded
☐ Cloudflare URL accessible in browser
☐ URL updated in signature.html (both occurrences)
☐ Signature copied from browser correctly
☐ Pasted in email client's signature editor
☐ Signature selected for email account
☐ Test email sent and received
```

If all checked and still issues, review specific sections above.

---

**Need more help?** Check other wiki pages:
- [Quick Start Guide](Quick-Start-Guide)
- [Installation Guide](Installation-Guide)
- [Deployment Guide](Deployment-Guide)

