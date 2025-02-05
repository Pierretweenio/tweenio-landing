# Tweenio Website

A minimalist black-themed landing page for Tweenio, focusing on simplified web deployment and domain configuration for digital startups.

## Deployment Instructions

1. Create a new GitHub repository:
   - Go to github.com and click the "+" icon
   - Choose "New repository"
   - Name it following the format: `yourusername.github.io`
   - Make it public
   - Don't initialize with README (we'll push our own)

2. Push the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click Save

4. Custom Domain Setup:
   - In repository settings, under "GitHub Pages"
   - Enter your domain in "Custom domain"
   - Update your domain's DNS settings:
     * Add these A records pointing to GitHub's IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     * Or add a CNAME record pointing to yourusername.github.io

Your site will be live at `https://yourusername.github.io` or your custom domain once DNS propagates (usually 24-48 hours).
