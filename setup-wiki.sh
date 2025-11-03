#!/bin/bash
# Script to set up GitHub Wiki with all content

echo "📚 Setting up GitHub Wiki..."

# Navigate to temp directory
cd /tmp || exit

# Clone the wiki repository (after you create the first page)
echo "Cloning wiki repository..."
git clone https://github.com/Qballjos/Email_Signature_JosVisserICT.wiki.git

# Check if clone was successful
if [ ! -d "Email_Signature_JosVisserICT.wiki" ]; then
    echo "❌ Error: Could not clone wiki repository."
    echo "Make sure you've created the first page on GitHub first!"
    exit 1
fi

# Navigate to wiki repo
cd Email_Signature_JosVisserICT.wiki || exit

# Copy all wiki files from your main repository
echo "Copying wiki files..."
cp /Users/qballjos/Documents/GitHub/Email_Signature_JosVisserICT/wiki/*.md .

# Add all files
echo "Adding files to git..."
git add .

# Commit
echo "Committing changes..."
git commit -m "Add complete wiki documentation"

# Push to wiki
echo "Pushing to GitHub..."
git push origin master

echo "✅ Wiki setup complete!"
echo "Visit: https://github.com/Qballjos/Email_Signature_JosVisserICT/wiki"

# Clean up
cd ..
rm -rf Email_Signature_JosVisserICT.wiki

echo "🎉 Done! Your wiki is now live with all content."

