# 🚀 Deployment Ready!

Your Citibank PWA is ready to deploy to Netlify. Choose your preferred method below.

## ⚡ Quick Deploy (Recommended)

### Windows (PowerShell):
```powershell
.\deploy.ps1
```

### Mac/Linux (Bash):
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Commands:
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

---

## 📋 What's Configured

✅ **netlify.toml** - Build settings, redirects, headers
✅ **.nvmrc** - Node.js version (20)
✅ **Service Worker** - Offline support
✅ **PWA Manifest** - App metadata
✅ **Security Headers** - XSS, CSP, etc.
✅ **Cache Control** - Optimized caching
✅ **SPA Routing** - Client-side routing support

---

## 🎯 Deployment Options

### Option 1: CLI Deploy (Fastest)
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```
**Time**: ~5 minutes
**Best for**: Quick deployment, testing

### Option 2: Git + Netlify (Best for Production)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main
```
Then connect on Netlify dashboard.

**Time**: ~10 minutes
**Best for**: Continuous deployment, team projects

### Option 3: Drag & Drop
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist` folder

**Time**: ~2 minutes
**Best for**: Quick test, no CLI needed

---

## 📱 After Deployment

### 1. Test PWA Features
- Open deployed URL
- Check DevTools → Application → Service Workers
- Test offline mode (Network tab → Offline)
- Look for install prompt

### 2. Mobile Testing
- Open on Android Chrome
- Look for "Add to Home Screen"
- Install and test offline

### 3. Run Lighthouse Audit
- DevTools → Lighthouse
- Select "Progressive Web App"
- Aim for score > 90

### 4. Generate PWA Icons (Optional)
```bash
npm run pwa:icons
```
Follow instructions to generate proper icons, then redeploy.

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `netlify.toml` | Build config, redirects, headers |
| `.nvmrc` | Node.js version |
| `deploy.sh` | Bash deployment script |
| `deploy.ps1` | PowerShell deployment script |

---

## 📚 Documentation

- **Quick Start**: `DEPLOY-NOW.md`
- **Detailed Guide**: `DEPLOYMENT-GUIDE.md`
- **PWA Setup**: `docs/PWA-SETUP.md`
- **Implementation**: `IMPLEMENTATION-SUMMARY.md`

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Test locally first
npm run build

# Check for errors
npm run lint
```

### Service Worker Issues
- Hard refresh: Ctrl+Shift+R
- Clear cache in DevTools
- Verify HTTPS is enabled

### Install Prompt Not Showing
- Ensure HTTPS (automatic on Netlify)
- Check manifest.json is accessible
- May need to wait or refresh

---

## 🎉 You're Ready!

Choose your deployment method and run the commands. Your PWA will be live in minutes!

**Recommended**: Use the deployment scripts for easiest setup:
- Windows: `.\deploy.ps1`
- Mac/Linux: `./deploy.sh`

---

## 📞 Need Help?

- Check `DEPLOYMENT-GUIDE.md` for detailed instructions
- Visit [Netlify Docs](https://docs.netlify.com/)
- Check [Netlify Community](https://answers.netlify.com/)

**Happy Deploying! 🚀**
