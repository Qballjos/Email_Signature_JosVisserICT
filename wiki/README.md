# Wiki Setup Instructions

This folder contains the content for the GitHub Wiki.

## How to Set Up the Wiki

### Step 1: Enable Wiki on GitHub

1. Go to: https://github.com/Qballjos/Email_Signature_JosVisserICT/settings
2. Scroll to **Features**
3. Check ✅ **Wikis**
4. Save

### Step 2: Clone the Wiki Repository

```bash
git clone https://github.com/Qballjos/Email_Signature_JosVisserICT.wiki.git
cd Email_Signature_JosVisserICT.wiki
```

### Step 3: Copy Wiki Files

```bash
# From your main repository folder
cp wiki/*.md ../Email_Signature_JosVisserICT.wiki/
```

### Step 4: Push to Wiki

```bash
cd ../Email_Signature_JosVisserICT.wiki
git add .
git commit -m "Initial wiki setup"
git push origin master
```

### Step 5: View Your Wiki

Visit: https://github.com/Qballjos/Email_Signature_JosVisserICT/wiki

## Wiki Pages

The following pages will be created:

1. **Home.md** - Main wiki homepage
2. **Quick-Start-Guide.md** - 10-minute setup
3. **Installation-Guide.md** - Detailed installation
4. **Deployment-Guide.md** - Cloudflare deployment
5. **Logo-Requirements.md** - Logo creation guide
6. **GitHub-Setup.md** - GitHub configuration
7. **Troubleshooting.md** - Common issues
8. **_Sidebar.md** - Navigation sidebar
9. **_Footer.md** - Footer for all pages

## Maintaining the Wiki

### Update Wiki Content

1. Edit files in `wiki/` folder
2. Copy to wiki repository
3. Commit and push

### Or Edit Directly on GitHub

1. Visit wiki page
2. Click "Edit" button
3. Make changes
4. Save

## Benefits of Using Wiki

- ✅ Cleaner repository (less documentation files)
- ✅ Better navigation with sidebar
- ✅ Easy to edit on GitHub
- ✅ Searchable
- ✅ Version controlled
- ✅ Collaborative editing

## After Wiki Setup

You can optionally remove/simplify documentation files from main repository:

Keep in main repo:
- README.md (short overview with link to wiki)
- LICENSE

Move to wiki (already done):
- All detailed guides
- Troubleshooting
- Installation instructions

