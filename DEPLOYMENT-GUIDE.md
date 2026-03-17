# Netlify Deployment Guide

## Prerequisites
- GitHub/GitLab/Bitbucket account
- Netlify account (free tier works)
- Git installed locally

## Deployment Options

### Option 1: Deploy via Netlify CLI (Fastest)

#### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. Login to Netlify
```bash
netlify login
```
This will open a browser window to authenticate.

#### 3. Initialize and Deploy
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

Follow the prompts:
- **Create & configure a new site**: Yes
- **Team**: Select your team
- **Site name**: Choose a unique name (e.g., citibank-pwa-demo)
- **Publish directory**: `dist`

Your site will be live at: `https://[your-site-name].netlify.app`

---

### Option 2: Deploy via Git (Recommended for Continuous Deployment)

#### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit with PWA implementation"
```

#### 2. Push to GitHub/GitLab/Bitbucket
```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/[username]/[repo-name].git
git branch -M main
git push -u origin main
```

#### 3. Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your repository

#### 4. Configure Build Settings

Netlify should auto-detect these settings (from `netlify.toml`):
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20 (from `.nvmrc`)

Click "Deploy site"

#### 5. Wait for Deployment
- Initial deployment takes 2-5 minutes
- You'll get a URL like: `https://random-name-123456.netlify.app`

#### 6. (Optional) Custom Domain
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

### Option 3: Drag & Drop (Quick Test)

#### 1. Build the Project
```bash
npm run build
```

#### 2. Deploy via Netlify UI
1. Go to [Netlify](https://app.netlify.com/)
2. Drag the `dist` folder to the deploy zone
3. Your site will be live instantly

**Note**: This method doesn't support continuous deployment.

---

## Post-Deployment Checklist

### 1. Verify PWA Features
- [ ] Open site in Chrome/Edge
- [ ] Check DevTools → Application → Service Workers
- [ ] Verify service worker is registered
- [ ] Test offline mode (DevTools → Network → Offline)
- [ ] Check for install prompt (may need to wait or refresh)

### 2. Test Install Prompt
- [ ] On mobile: Look for "Add to Home Screen" prompt
- [ ] On desktop: Look for install icon in address bar
- [ ] Verify app installs correctly

### 3. Run Lighthouse Audit
1. Open DevTools → Lighthouse
2. Select "Progressive Web App" category
3. Run audit
4. Aim for score > 90

### 4. Test on Multiple Devices
- [ ] Android Chrome
- [ ] iOS Safari
- [ ] Desktop Chrome/Edge
- [ ] Desktop Firefox

### 5. Verify HTTPS
- [ ] Site loads with HTTPS (required for PWA)
- [ ] No mixed content warnings
- [ ] Service worker registers successfully

---

## Configuration Files Created

### `netlify.toml`
- Build configuration
- Redirect rules for SPA routing
- Security headers
- Cache control for PWA assets
- Service worker configuration

### `.nvmrc`
- Specifies Node.js version (20)
- Ensures consistent builds

---

## Continuous Deployment

Once connected via Git (Option 2):
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Instant rollback capability

### Enable Deploy Previews
1. Go to Site settings → Build & deploy → Deploy contexts
2. Enable "Deploy previews" for pull requests
3. Each PR gets a unique preview URL

---

## Environment Variables (If Needed)

If you add API keys or secrets later:

1. Go to Site settings → Environment variables
2. Add variables:
   - `VITE_API_URL`
   - `VITE_API_KEY`
   - etc.

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Custom Domain Setup

### 1. Add Domain in Netlify
1. Site settings → Domain management
2. Add custom domain
3. Note the DNS records provided

### 2. Configure DNS
Add these records at your domain registrar:

**Option A: Netlify DNS (Recommended)**
- Change nameservers to Netlify's

**Option B: External DNS**
- Add A record: `104.198.14.52`
- Add CNAME record: `www` → `[your-site].netlify.app`

### 3. Enable HTTPS
- Netlify automatically provisions SSL certificate
- Takes 1-24 hours
- Free via Let's Encrypt

---

## Troubleshooting

### Build Fails
```bash
# Check build locally first
npm run build

# If successful locally, check Netlify build logs
# Common issues:
# - Missing dependencies
# - Node version mismatch
# - Environment variables
```

### Service Worker Not Working
- Verify `sw.js` is in `dist` folder after build
- Check browser console for errors
- Hard refresh: Ctrl+Shift+R
- Clear site data in DevTools

### Install Prompt Not Showing
- Ensure HTTPS is enabled (automatic on Netlify)
- Check manifest.json is accessible
- Verify all required icons exist
- May need to wait or refresh page

### 404 on Page Refresh
- Verify `netlify.toml` has redirect rule
- Check "Publish directory" is set to `dist`

### Slow Build Times
- Enable build cache in Netlify settings
- Consider using build plugins
- Optimize dependencies

---

## Monitoring & Analytics

### Netlify Analytics (Optional, Paid)
- Server-side analytics
- No impact on performance
- Privacy-friendly

### Add Google Analytics (Free)
1. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Performance Monitoring
- Use Lighthouse CI for automated audits
- Monitor Core Web Vitals
- Set up Netlify notifications for failed builds

---

## Netlify Features to Explore

### Forms
- Add `netlify` attribute to forms
- Automatic spam filtering
- Email notifications

### Functions
- Serverless functions for API endpoints
- Located in `netlify/functions/`

### Split Testing
- A/B test different versions
- Traffic splitting

### Build Hooks
- Trigger builds via webhook
- Integrate with external services

---

## Cost Estimate

### Free Tier Includes:
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ HTTPS
- ✅ Continuous deployment
- ✅ Deploy previews

### Paid Plans (if needed):
- Pro: $19/month (1 TB bandwidth, 25 team members)
- Business: $99/month (custom features)

For this banking demo app, free tier is sufficient.

---

## Security Best Practices

### Already Configured:
- ✅ HTTPS enforced
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Service worker scope limited

### Additional Recommendations:
1. Enable branch protection on GitHub
2. Review deploy logs regularly
3. Set up Netlify notifications
4. Use environment variables for secrets
5. Enable 2FA on Netlify account

---

## Next Steps After Deployment

1. **Share the URL**: Your app is live!
2. **Test PWA features**: Install on mobile device
3. **Monitor performance**: Run Lighthouse audits
4. **Generate PWA icons**: Run `npm run pwa:icons` and redeploy
5. **Custom domain**: Add your own domain (optional)
6. **Analytics**: Set up tracking (optional)

---

## Quick Commands Reference

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build locally
npm run build

# Deploy to production
netlify deploy --prod

# Open site in browser
netlify open:site

# View deploy logs
netlify logs

# Link existing site
netlify link
```

---

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)
- [PWA on Netlify Guide](https://docs.netlify.com/frameworks/progressive-web-apps/)

---

**Your app is ready to deploy! Choose your preferred method above and follow the steps.**

🚀 **Recommended**: Use Option 2 (Git deployment) for automatic updates on every commit.
