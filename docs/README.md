git clone https://github.com/Pierretweenio/tweenio-landing.git
   cd tweenio-landing
   ```

2. Copy these project files into the repository:
   - Copy the entire `docs/` directory
   - Copy README.md (this file)

3. Push the files:
   ```bash
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
   - Update your domain's DNS settings with these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153