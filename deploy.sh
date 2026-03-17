#!/bin/bash

# Citibank PWA - Netlify Deployment Script

echo "🚀 Deploying Citibank PWA to Netlify..."
echo ""

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null
then
    echo "📦 Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
netlify deploy --prod

echo ""
echo "✨ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Test your PWA features"
echo "2. Run Lighthouse audit"
echo "3. Generate PWA icons: npm run pwa:icons"
echo "4. Test on mobile device"
