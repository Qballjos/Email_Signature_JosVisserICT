# 🚀 Deployment Guide - Cloudflare Pages

This guide will walk you through deploying your email signature assets to Cloudflare Pages.

## Why Cloudflare Pages?

- ✅ **Free hosting** for static assets
- ✅ **Global CDN** - fast loading worldwide
- ✅ **HTTPS by default** - secure
- ✅ **Works with Apple Mail** - no tracking/cookie issues
- ✅ **Automatic deployments** - push to Git and deploy
- ✅ **Custom domains** - use your own domain

## Prerequisites

Before you start:
- [x] Logo files created and placed in `cloudflare-pages/assets/`
- [ ] Cloudflare account (free) - [Sign up here](https://dash.cloudflare.com/sign-up)
- [ ] This repository pushed to GitHub

## Method 1: Deploy via Git (Recommended)

### Step 1: Push to GitHub

If you haven't already:

```bash
git add .
git commit -m "Initial email signature setup"
git push origin main
```

### Step 2: Connect Cloudflare to GitHub

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create application**
4. Select **Pages** tab
5. Click **Connect to Git**

### Step 3: Authorize GitHub

1. Click **Connect GitHub**
2. Authorize Cloudflare Pages
3. Select **Email_Signature_JosVisserICT** repository

### Step 4: Configure Build Settings

```yaml
Project name: email-signature-jos (or your preferred name)
Production branch: main
Build command: (leave empty)
Build output directory: cloudflare-pages
Root directory (advanced): /
```

**Important:** The build output directory should be `cloudflare-pages`

### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for deployment (usually 30-60 seconds)
3. You'll get a URL like: `https://email-signature-jos.pages.dev`

### Step 6: Verify Deployment

1. Visit your deployment URL
2. You should see the asset hosting page
3. Test your logo URLs:
   - `https://your-url.pages.dev/assets/logo-light.png`
   - `https://your-url.pages.dev/assets/logo-dark.png`

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

Or using pnpm:
```bash
pnpm add -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open a browser window for authentication.

### Step 3: Deploy

```bash
cd /Users/qballjos/Documents/GitHub/Email_Signature_JosVisserICT/cloudflare-pages
wrangler pages deploy . --project-name=email-signature-jos
```

### Step 4: Get Your URL

After deployment, Wrangler will output your URL:
```
✨ Deployment complete! Take a peek over at https://email-signature-jos.pages.dev
```

## Method 3: Direct Upload (No Git)

### Step 1: Navigate to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create application**
3. Select **Pages** → **Upload assets**

### Step 2: Upload Files

1. Name your project: `email-signature-jos`
2. Drag and drop the `cloudflare-pages` folder
3. Click **Deploy site**

### Step 3: Get Your URL

Your site will be live at: `https://email-signature-jos.pages.dev`

## Post-Deployment: Update Signature

After deployment, update your signature HTML files:

### Edit signature.html

Replace `YOUR_HOSTING_URL` with your actual URL:

**Find:**
```html
<img src="YOUR_HOSTING_URL/logo-light.png" ...>
```

**Replace with:**
```html
<img src="https://email-signature-jos.pages.dev/assets/logo-light.png" ...>
```

Do this for BOTH logo references (light and dark).

### Test Your Signature

1. Open `signature.html` in a browser
2. Verify logos appear correctly
3. Test dark/light mode (if your browser supports it)
4. Install signature in your email client

## Custom Domain (Optional)

Want to use your own domain? (e.g., `assets.josvisserict.nl`)

### Step 1: Add Custom Domain

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter: `assets.josvisserict.nl`

### Step 2: Configure DNS

If your domain is already on Cloudflare:
- DNS records are added automatically ✅

If your domain is elsewhere:
- Add a CNAME record:
  ```
  assets.josvisserict.nl → email-signature-jos.pages.dev
  ```

### Step 3: Wait for SSL

- SSL certificate is automatically provisioned
- Usually takes 5-30 minutes
- You'll receive an email when ready

### Step 4: Update Signature

Update your signature HTML to use custom domain:

```html
<img src="https://assets.josvisserict.nl/assets/logo-light.png" ...>
```

## Automatic Updates

### Via Git (Method 1)

Every time you push to GitHub:
1. Make changes to files
2. Commit: `git commit -m "Updated logo"`
3. Push: `git push origin main`
4. Cloudflare automatically deploys ✅

### Via Wrangler (Method 2)

To update:
```bash
cd cloudflare-pages
wrangler pages deploy . --project-name=email-signature-jos
```

### Via Direct Upload (Method 3)

1. Go to Cloudflare Pages
2. Select your project
3. Click **Create deployment**
4. Upload new files

## Troubleshooting

### Issue: 404 Error on Logo URLs

**Solution:**
- Verify files are in `cloudflare-pages/assets/` folder
- Check file names are exactly: `logo-light.png` and `logo-dark.png`
- Redeploy

### Issue: Deployment Failed

**Solution:**
- Check build output directory is set to `cloudflare-pages`
- Ensure `_headers` file is in `cloudflare-pages/` directory
- Try deploying via Wrangler CLI instead

### Issue: Images Not Loading in Email

**Solution:**
- Verify HTTPS URL is used (not HTTP)
- Check CORS headers are configured (`_headers` file)
- Test URL directly in browser
- Recipient may need to "allow external images"

### Issue: Custom Domain Not Working

**Solution:**
- Wait 30 minutes for DNS propagation
- Check DNS records are correct
- Verify SSL certificate is active
- Clear browser cache

## Monitoring & Analytics

### View Deployments

1. Cloudflare Dashboard → Your Project
2. See deployment history
3. View build logs
4. Rollback if needed

### Analytics (Optional)

Cloudflare Pages includes basic analytics:
- Requests per day
- Bandwidth usage
- Geographic distribution

**Note:** No tracking pixels or cookies - privacy-friendly! ✅

## Best Practices

### 1. Use Git Deployment
- Automatic deployments
- Version control
- Easy rollbacks
- Collaboration friendly

### 2. Optimize Images
- Keep logos under 100KB
- Use PNG for transparency
- Compress before uploading

### 3. Test Before Sharing
- Send test emails to yourself
- Check on multiple email clients
- Verify dark/light mode switching

### 4. Keep Backups
- Original high-res logos in `assets/` folder
- Git history for all changes
- Export from Cloudflare if needed

## Costs

### Free Tier Includes:
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ Unlimited bandwidth*
- ✅ Custom domains
- ✅ SSL certificates

*Subject to fair use policy

### Need More?
- **Pages Pro:** $20/month
  - Advanced build features
  - Priority support
  - Higher limits

## Security

### CORS Headers
The `_headers` file configures:
```
Access-Control-Allow-Origin: *
```

This allows email clients to load your images.

### No Tracking
- No JavaScript
- No cookies
- No analytics pixels
- Privacy-first ✅

### HTTPS Only
- All traffic encrypted
- Automatic SSL/TLS
- Modern security standards

## Next Steps

After successful deployment:

1. ✅ Verify logos are accessible
2. ✅ Update signature HTML with actual URLs
3. ✅ Install signature in email client
4. ✅ Send test emails
5. ✅ Share your new signature!

---

**Need Help?**

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Repository](https://github.com/qballjos/Email_Signature_JosVisserICT)

**Questions?** Check the main [README.md](README.md) or [INSTALLATION.md](INSTALLATION.md)

