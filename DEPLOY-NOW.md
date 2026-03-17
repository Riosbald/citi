# Deploy to Netlify - Quick Start

## Fastest Method: Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This opens your browser to authenticate. If you don't have a Netlify account, create one (it's free).

### Step 3: Build Your App
```bash
npm run build
```

### Step 4: Deploy
```bash
netlify deploy --prod
```

When prompted:
- **Create & configure a new site?** → Yes
- **Team:** → Select your team
- **Site name:** → Enter a name (e.g., `citibank-pwa-demo`)
- **Publish directory:** → Type `dist` and press Enter

### Step 5: Done! 🎉
Your app is now live at: `https://[your-site-name].netlify.app`

---

## Alternative: Drag & Drop (No CLI Required)

### Step 1: Build Your App
```bash
npm run build
```

### Step 2: Go to Netlify
Open https://app.netlify.com/drop

### Step 3: Drag & Drop
Drag the `dist` folder onto the page.

### Step 4: Done! 🎉
Your site is live instantly!

---

## After Deployment

### Test PWA Features:
1. Open your deployed site
2. Press F12 → Application → Service Workers
3. Verify service worker is registered
4. Test offline mode
5. Look for install prompt

### On Mobile:
1. Open site in Chrome/Safari
2. Look for "Add to Home Screen" prompt
3. Install and test

---

## Troubleshooting

**Build fails?**
```bash
# Test build locally first
npm run build
```

**Service worker not working?**
- Hard refresh: Ctrl+Shift+R
- Check browser console for errors
- Verify HTTPS is enabled (automatic on Netlify)

**Need help?**
See `DEPLOYMENT-GUIDE.md` for detailed instructions.

---

## Quick Commands

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod

# Open deployed site
netlify open:site
```

---

**Ready to deploy? Run these commands:**

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

That's it! Your PWA will be live in minutes. 🚀
