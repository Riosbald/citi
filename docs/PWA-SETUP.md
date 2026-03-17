# PWA Implementation Guide

## Overview
This application is now configured as a Progressive Web App (PWA) with offline support, installability, and native-like features.

## Features Implemented

### 1. Service Worker (`public/sw.js`)
- **Caching Strategy**: Network-first for HTML, cache-first for static assets
- **Offline Support**: Fallback to offline page when network is unavailable
- **Cache Management**: Automatic cleanup of old caches on activation
- **Version Control**: Cache versioning for easy updates

### 2. Web App Manifest (`public/manifest.json`)
- App name, description, and branding
- Icon configurations (192x192, 512x512, maskable variants)
- Display mode: standalone (full-screen app experience)
- Theme colors matching Citibank branding (#003B6F)
- App shortcuts for quick access to Accounts and Payments
- Screenshot support for app stores

### 3. PWA Utilities (`src/utils/pwa.ts`)
- Service worker registration with update detection
- Install prompt capture and display
- Notification permission handling
- Online/offline status monitoring
- Cache management utilities

### 4. Install Prompt Component (`src/components/InstallPrompt.tsx`)
- User-friendly install prompt UI
- Dismissible with localStorage persistence
- Loading states during installation
- Accessible with ARIA labels

### 5. Offline Page (`public/offline.html`)
- Standalone HTML page for offline fallback
- Matches app branding
- Retry functionality

## Setup Instructions

### 1. Generate PWA Icons
Run the icon generation guide:
```bash
npm run pwa:icons
```

Then use one of these methods to generate icons:

**Option A: Using @vite-pwa/assets-generator (Recommended)**
```bash
npm install -D @vite-pwa/assets-generator
npx pwa-assets-generator --preset minimal public/logo.svg
```

**Option B: Using pwa-asset-generator**
```bash
npm install -g pwa-asset-generator
pwa-asset-generator public/logo.svg public --icon-only
```

**Option C: Online Tools**
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

Required icons:
- `pwa-192x192.png`
- `pwa-512x512.png`
- `pwa-maskable-192x192.png`
- `pwa-maskable-512x512.png`

### 2. Test PWA Features

**Development Testing:**
```bash
npm run build
npm run preview
```

**Production Testing:**
1. Deploy to HTTPS server (PWA requires HTTPS)
2. Open in Chrome/Edge DevTools
3. Go to Application > Service Workers
4. Check "Offline" to test offline functionality
5. Look for install prompt in address bar

### 3. Lighthouse Audit
Run Lighthouse audit to verify PWA compliance:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Progressive Web App" category
4. Run audit

## Browser Support

### Full PWA Support:
- Chrome/Edge (Desktop & Mobile)
- Samsung Internet
- Opera

### Partial Support:
- Safari (iOS 16.4+): Limited install prompt, no background sync
- Firefox: Service workers work, no install prompt

## Features by Platform

### Android (Chrome/Edge/Samsung Internet)
✅ Install prompt
✅ Add to home screen
✅ Splash screen
✅ Full-screen mode
✅ Background sync
✅ Push notifications

### iOS (Safari 16.4+)
✅ Add to home screen (manual)
✅ Splash screen
✅ Full-screen mode
⚠️ Limited install prompt
❌ Background sync
❌ Push notifications

### Desktop (Chrome/Edge)
✅ Install prompt
✅ Window mode
✅ App shortcuts
✅ Background sync
✅ Push notifications

## Customization

### Update Cache Version
Edit `public/sw.js`:
```javascript
const CACHE_VERSION = 'v1.0.1'; // Increment version
```

### Modify Caching Strategy
Edit fetch event handler in `public/sw.js` to change caching behavior.

### Customize Install Prompt
Edit `src/components/InstallPrompt.tsx` to change UI/UX.

### Add More Shortcuts
Edit `public/manifest.json` shortcuts array.

## Troubleshooting

### Install Prompt Not Showing
- Ensure HTTPS is enabled
- Check if app is already installed
- Verify manifest.json is valid
- Clear browser cache and service workers

### Service Worker Not Updating
- Increment CACHE_VERSION in sw.js
- Hard refresh (Ctrl+Shift+R)
- Unregister old service worker in DevTools

### Offline Mode Not Working
- Check service worker is active in DevTools
- Verify offline.html is cached
- Check network tab for failed requests

## Security Considerations

1. **HTTPS Required**: PWAs only work on HTTPS (except localhost)
2. **Content Security Policy**: Consider adding CSP headers
3. **Sensitive Data**: Never cache sensitive user data
4. **API Calls**: Use network-only strategy for authentication endpoints

## Performance Tips

1. **Precache Critical Assets**: Add essential files to PRECACHE_ASSETS
2. **Lazy Load Routes**: Already implemented with React.lazy()
3. **Cache Expiration**: Implement cache expiration for dynamic content
4. **Background Sync**: Queue failed requests for retry when online

## Future Enhancements

- [ ] Background sync for offline transactions
- [ ] Push notifications for account alerts
- [ ] Biometric authentication
- [ ] Share target API for receiving payments
- [ ] Periodic background sync for balance updates
- [ ] Web Share API integration

## Resources

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [web.dev PWA](https://web.dev/progressive-web-apps/)
- [PWA Builder](https://www.pwabuilder.com/)
- [Workbox (Advanced SW)](https://developers.google.com/web/tools/workbox)
