# 🚀 Deployment Guide

Complete guide to deploying your email signature assets to Cloudflare Pages.

## Why Cloudflare Pages?

- ✅ **Free hosting** for static assets
- ✅ **Global CDN** - fast loading worldwide
- ✅ **HTTPS by default** - secure
- ✅ **Works with Apple Mail** - no tracking/cookie issues
- ✅ **Automatic deployments** - push to Git and deploy
- ✅ **Custom domains** - use your own domain

---

## Prerequisites

Before you start:
- [x] Logo files in `cloudflare-pages/assets/`
- [ ] Cloudflare account (free) - [Sign up](https://dash.cloudflare.com/sign-up)
- [ ] Repository on GitHub

---

## Method 1: Deploy via Git (Recommended)

### Step 1: Push to GitHub

If not already done:

```bash
git add .
git commit -m "Add email signature"
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
Project name: email-signature-jos
Production branch: main
Build command: (leave empty)
Build output directory: cloudflare-pages
Root directory: /
```

**Important:** Build output must be `cloudflare-pages`

### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for deployment (30-60 seconds)
3. Get your URL: `https://email-signature-jos.pages.dev`

### Step 6: Verify

1. Visit your deployment URL
2. Test logo URLs:
   - `https://your-url.pages.dev/assets/logo-light.png`
   - `https://your-url.pages.dev/assets/logo-dark.png`

---

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

Or with pnpm:
```bash
pnpm add -g wrangler
```

### Step 2: Login

```bash
wrangler login
```

Opens browser for authentication.

### Step 3: Deploy

```bash
cd cloudflare-pages
wrangler pages deploy . --project-name=email-signature-jos
```

### Step 4: Get URL

Wrangler outputs:
```
✨ Deployment complete!
https://email-signature-jos.pages.dev
```

---

## Method 3: Direct Upload

### Step 1: Navigate to Cloudflare

1. [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create application**
3. **Pages** → **Upload assets**

### Step 2: Upload

1. Project name: `email-signature-jos`
2. Drag `cloudflare-pages` folder
3. Click **Deploy site**

### Step 3: Get URL

Live at: `https://email-signature-jos.pages.dev`

---

## Post-Deployment: Update Signature

After deployment, update `signature.html`:

**Find:**
```html
<img src="YOUR_HOSTING_URL/logo-light.png" ...>
```

**Replace with:**
```html
<img src="https://email-signature-jos.pages.dev/assets/logo-light.png" ...>
```

Update both logo references (light and dark).

---

## Custom Domain (Optional)

Use your own domain: `assets.josvisserict.nl`

### Step 1: Add Domain

1. Cloudflare Pages → Your project
2. **Custom domains**
3. **Set up a custom domain**
4. Enter: `assets.josvisserict.nl`

### Step 2: Configure DNS

**If domain on Cloudflare:**
- DNS records added automatically ✅

**If domain elsewhere:**
- Add CNAME:
  ```
  assets.josvisserict.nl → email-signature-jos.pages.dev
  ```

### Step 3: Wait for SSL

- SSL certificate auto-provisioned
- Takes 5-30 minutes
- Email notification when ready

### Step 4: Update Signature

```html
<img src="https://assets.josvisserict.nl/assets/logo-light.png" ...>
```

---

## Automatic Updates

### Via Git (Method 1)

Every push to GitHub:
```bash
# Make changes
git add cloudflare-pages/assets/
git commit -m "Update logo"
git push
# Cloudflare auto-deploys ✅
```

### Via Wrangler (Method 2)

```bash
cd cloudflare-pages
wrangler pages deploy . --project-name=email-signature-jos
```

### Via Upload (Method 3)

1. Cloudflare Pages → Your project
2. **Create deployment**
3. Upload new files

---

## GitHub Actions Auto-Deploy

Enable automatic deployment on every push.

### Setup

1. Get Cloudflare credentials:
   - [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Profile → **API Tokens**
   - Create token: "Cloudflare Pages" template
   - Note your **Account ID**

2. Add to GitHub:
   - Repository → **Settings** → **Secrets and variables** → **Actions**
   - Add secrets:
     - `CLOUDFLARE_API_TOKEN`
     - `CLOUDFLARE_ACCOUNT_ID`

3. Workflow already configured in `.github/workflows/deploy.yml`

### Usage

Every push to `main` auto-deploys:
```bash
git push origin main
# GitHub Actions → Cloudflare Pages ✅
```

Watch progress: **Actions** tab on GitHub

---

## Troubleshooting

### Issue: 404 on Logo URLs

**Solution:**
- Verify files in `cloudflare-pages/assets/`
- Check filenames: `logo-light.png`, `logo-dark.png`
- Redeploy

### Issue: Deployment Failed

**Solution:**
- Check build output: `cloudflare-pages`
- Ensure `_headers` file exists
- Try Wrangler CLI

### Issue: Images Not in Email

**Solution:**
- Use HTTPS (not HTTP)
- Check CORS headers (`_headers` file)
- Test URL in browser
- Recipient may need to allow external images

### Issue: Custom Domain Not Working

**Solution:**
- Wait 30 minutes for DNS
- Verify DNS records
- Check SSL certificate active
- Clear browser cache

---

## Monitoring

### View Deployments

1. Cloudflare Dashboard → Your project
2. Deployment history
3. Build logs
4. Rollback if needed

### Analytics

Cloudflare Pages includes:
- Requests per day
- Bandwidth usage
- Geographic distribution

**No tracking pixels or cookies** - privacy-friendly! ✅

---

## Best Practices

### 1. Use Git Deployment
- Automatic deployments
- Version control
- Easy rollbacks

### 2. Optimize Images
- Keep under 100KB
- Use PNG transparency
- Compress before upload

### 3. Test Before Sharing
- Test emails to yourself
- Multiple email clients
- Dark/light mode

### 4. Keep Backups
- Original logos in `assets/`
- Git history
- Export from Cloudflare

---

## Costs

### Free Tier:
- ✅ Unlimited requests
- ✅ 500 builds/month
- ✅ Unlimited bandwidth*
- ✅ Custom domains
- ✅ SSL certificates

*Fair use policy applies

---

## Security

### CORS Headers

`_headers` file configures:
```
Access-Control-Allow-Origin: *
```

Allows email clients to load images.

### Privacy First

- No JavaScript
- No cookies
- No analytics
- HTTPS only

---

## Next Steps

1. ✅ Deploy to Cloudflare
2. ✅ Verify logos accessible
3. ✅ Update signature HTML
4. ✅ Install in email client
5. ✅ Send test emails

**Continue:** [Installation Guide](Installation-Guide)

---

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions](https://docs.github.com/en/actions)

