git add .
   git commit -m "Initial landing page setup"
   git push origin main
   ```

4. Enable GitHub Pages:
   - Go to https://github.com/Pierretweenio/tweenio-landing/settings/pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/docs" folder
   - Click Save

5. Custom Domain Setup:
   - In repository settings, under "Pages"
   - Enter "tweenio.com" in "Custom domain"
   - Update your domain's DNS settings:
     1. Add these A records:
        - Host: "@" (apex domain)
        ```
        185.199.108.153
        185.199.109.153
        185.199.110.153
        185.199.111.153