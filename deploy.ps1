# Citibank PWA - Netlify Deployment Script (PowerShell)

Write-Host "🚀 Deploying Citibank PWA to Netlify..." -ForegroundColor Cyan
Write-Host ""

# Check if netlify-cli is installed
$netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue

if (-not $netlifyInstalled) {
    Write-Host "📦 Netlify CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g netlify-cli
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install Netlify CLI" -ForegroundColor Red
        exit 1
    }
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Deploy to Netlify
Write-Host "🌐 Deploying to Netlify..." -ForegroundColor Cyan
netlify deploy --prod

Write-Host ""
Write-Host "✨ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Test your PWA features"
Write-Host "2. Run Lighthouse audit"
Write-Host "3. Generate PWA icons: npm run pwa:icons"
Write-Host "4. Test on mobile device"
