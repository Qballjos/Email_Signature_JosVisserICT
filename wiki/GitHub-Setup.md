# 🔧 GitHub Setup

GitHub repository configuration for the Jos Visser ICT Brand Kit system.

## ✅ Current Setup

**Repository:** https://github.com/Qballjos/Email_Signature_JosVisserICT  
**Status:** ✅ Configured and working  
**Deployment:** Connected to Cloudflare Pages  
**Branch:** `main` (auto-deploys on push)

---

## Repository Settings

### General Settings

Visit: `https://github.com/Qballjos/Email_Signature_JosVisserICT/settings`

#### Basic Info
```
Name: Email_Signature_JosVisserICT
Description: Professional email signature & Brand Kit with multi-language legal pages
Website: https://static.josvisserict.nl
Topics: email-signature, brand-kit, cloudflare-pages, gdpr, multi-language
```

#### Features
- ✅ **Wiki** - Complete documentation
- ✅ **Issues** - Bug tracking and feature requests
- ❌ **Projects** - Not needed
- ❌ **Discussions** - Optional

---

## Deployment Setup

### Cloudflare Pages Connection

**Current Status:** ✅ Connected and auto-deploying

**How it works:**
1. You push to `main` branch
2. Cloudflare detects the push automatically
3. Deploys `cloudflare-pages/` folder
4. Live in 1-2 minutes at https://static.josvisserict.nl

**Configuration:**
- **Project:** Connected via GitHub integration
- **Branch:** `main` (production)
- **Build output:** `cloudflare-pages/`
- **Build command:** None (static files)
- **Custom domain:** `static.josvisserict.nl` ✅

No GitHub Actions or workflows needed - Cloudflare handles deployment automatically via their GitHub integration!

---

## Branch Protection (Optional)

Protect your main branch from accidental changes.

### Setup

**Settings → Branches → Add rule**

```yaml
Branch name pattern: main

Rules:
☑ Require a pull request before merging
☑ Require status checks to pass before merging
  - Cloudflare Pages deployment
☐ Require conversation resolution before merging
☐ Require linear history
```

**Recommended for:**
- Team collaboration
- Production protection

**Skip if:**
- Solo project
- Quick updates needed

---

## GitHub Pages (Optional)

Host preview page at: `https://qballjos.github.io/Email_Signature_JosVisserICT/`

### Enable

**Settings → Pages**

```
Source: Deploy from a branch
Branch: main / (root)
```

Click **Save**

### Result

- `preview.html` accessible online
- Test signature before deployment
- Share with others

---

## Repository Topics

Add relevant topics for discoverability:

**Suggested topics:**
- `email-signature`
- `html-email`
- `cloudflare-pages`
- `dark-mode`
- `responsive-design`
- `gmail`
- `outlook`
- `apple-mail`

---

## Useful Commands

### Check Repository

```bash
# View remote
git remote -v

# Check status
git status

# View branches
git branch -a

# View commit history
git log --oneline
```

### Update Repository

```bash
# Pull latest
git pull origin main

# Add files
git add .

# Commit
git commit -m "Update signature"

# Push
git push origin main
```

---

## GitHub Actions Usage

### View Workflow Runs

1. Go to **Actions** tab
2. See deployment history
3. View logs
4. Debug failures

### Manual Trigger

1. **Actions** tab
2. Select "Deploy to Cloudflare Pages"
3. Click **Run workflow**
4. Select branch
5. Run

### Check Deployment

After push:
```
GitHub Actions → Cloudflare Pages → Live! ✅
```

Usually takes 1-2 minutes.

---

## Issue Templates (Optional)

Create templates for common issues.

### Bug Report Template

Create: `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Bug Report
about: Report a problem with the email signature
---

## Problem
[Describe the issue]

## Email Client
- [ ] Gmail
- [ ] Apple Mail
- [ ] Outlook
- [ ] Other: 

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Screenshots
[If applicable]
```

### Feature Request

Create: `.github/ISSUE_TEMPLATE/feature_request.md`

```markdown
---
name: Feature Request
about: Suggest an enhancement
---

## Feature Description
[Describe the feature]

## Use Case
[Why is this needed]

## Alternatives
[Other approaches considered]
```

---

## Access Management

### Collaborators

**Settings → Collaborators**

Add team members:
- **Admin** - Full access
- **Write** - Push/PR
- **Read** - View only

### Teams

For organizations:
**Settings → Manage access → Add teams**

---

## Repository Insights

### View Analytics

**Insights tab shows:**
- Commit activity
- Code frequency
- Contributors
- Traffic (if public)
- Popular content

### Useful Metrics

Monitor:
- Stars/watchers
- Forks
- Issues/PRs
- Clone/visitor counts

---

## Integrations

### Recommended Apps

1. **Dependabot** - Security updates
2. **CodeQL** - Code scanning
3. **Lighthouse CI** - Performance

**Settings → Integrations & services**

---

## Troubleshooting

### Actions Not Running

**Check:**
1. Workflow permissions enabled
2. Secrets added correctly
3. Workflow file valid YAML
4. Branch name matches trigger

### Deploy Failing

**Common issues:**
1. Missing Cloudflare secrets
2. Invalid API token
3. Wrong project name
4. Network/permissions error

**Fix:**
- Check Actions logs
- Verify secrets
- Re-create API token if needed

### Can't Push

**Solutions:**
```bash
# Check remote
git remote -v

# Update remote URL
git remote set-url origin https://github.com/Qballjos/Email_Signature_JosVisserICT.git

# Authenticate
gh auth login
```

---

## Security

### Best Practices

- ✅ Enable 2FA on GitHub
- ✅ Use API tokens, not passwords
- ✅ Rotate tokens periodically
- ✅ Limit token permissions
- ✅ Don't commit secrets

### Secret Scanning

Enable:
**Settings → Security → Code security and analysis**

- ✅ Secret scanning
- ✅ Dependency graph
- ✅ Dependabot alerts

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check for issues
- Review PRs
- Update dependencies

**Monthly:**
- Review analytics
- Update documentation
- Check workflows

**As Needed:**
- Rotate API tokens
- Update Cloudflare config
- Improve signature design

---

## Next Steps

1. ✅ Configure repository settings
2. ✅ Enable GitHub Actions
3. ✅ Add Cloudflare secrets
4. ✅ Test workflow
5. ✅ Deploy signature

**Continue:** [Deployment Guide](Deployment-Guide)

