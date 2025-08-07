# Data Engineer & Data Scientist Portfolio

## Setup Instructions

1. **Create React App:**
   ```bash
   npx create-react-app data-portfolio
   cd data-portfolio
   ```

2. **Install Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   - Configure `tailwind.config.js` as shown above.
   - Replace `src/index.css` with the Tailwind directives.

3. **Add Code:**
   - Replace the generated files with the code in this repo.

4. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/SilverKai13/data-portfolio.git
   git push -u origin main
   ```

5. **Deploy on Netlify:**
   - Connect your GitHub repo on Netlify dashboard.
   - Set the build command to `npm run build` and publish directory to `build/`.

6. **Or Deploy on GitHub Pages:**
   - Install:
     ```bash
     npm install gh-pages --save-dev
     ```
   - Add to `package.json`:
     ```json
     "homepage": "https://USERNAME.github.io/data-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```
   - Deploy:
     ```bash
     npm run deploy
     ```
