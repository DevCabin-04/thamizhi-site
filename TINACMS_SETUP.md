# TinaCMS + Astro + GitHub Pages Setup Guide

## Prerequisites
- **Bun** runtime installed (https://bun.sh)
- GitHub repository: `lagithan/thamizhi-site`
- TinaCMS account with Client ID: `87932b95-cd47-4185-918e-568e132681aa`
- TinaCMS Token (already in .env file)

## Step-by-Step Setup

### 1. Repository Settings
1. Go to your GitHub repository: `https://github.com/lagithan/thamizhi-site`
2. Go to **Settings > Secrets and variables > Actions**
3. Add these repository secrets:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`: `87932b95-cd47-4185-918e-568e132681aa`
   - `TINA_TOKEN`: `21e25873934e8741e0ca8a009bd0c4709f87c98a`

### 2. Enable GitHub Pages
1. Go to **Settings > Pages**
2. Under "Source", select **GitHub Actions** (NOT "Deploy from branch")
3. Save the settings

**⚠️ Important**: Make sure you select "GitHub Actions" as the source, not "Deploy from a branch". This ensures your custom workflow runs instead of Jekyll.

### 3. Local Development
```bash
# Install dependencies with Bun
bun install

# Start development server with TinaCMS
bun run dev
```

### 4. Deploy to GitHub Pages
```bash
# Push your changes
```

## Bun Commands

### Development
```bash
bun install              # Install dependencies
bun run dev             # Start dev server with TinaCMS
bun run build           # Build for production
bun run preview         # Preview production build
```

### TinaCMS Specific
```bash
bun run tina:build      # Build TinaCMS only
bun run tina:dev        # Start TinaCMS dev mode
```

### Deployment
```bash
bun run predeploy       # Build for deployment
bun run deploy          # Deploy to GitHub Pages
```

### 5. Access TinaCMS Admin
- **Local**: `http://localhost:4321/admin`
- **Production**: `https://lagithan.github.io/thamizhi-site/admin`

## Directory Structure
```
thamizhi-site/
├── .github/workflows/deploy.yml    # GitHub Actions deployment
├── src/pages/admin.astro          # TinaCMS admin page
├── tina/
│   ├── config.ts                  # TinaCMS configuration
│   └── collections/               # Content collections
├── public/admin/                  # Generated TinaCMS assets
└── .env                          # Environment variables (local only)
```

## Content Management

### Editing Content
1. Navigate to `/admin` on your site
2. Login with your TinaCMS credentials  
3. Edit content using the visual editor
4. Changes are saved directly to your GitHub repository

### Available Collections
- Homepage content
- About page
- Departments
- Membership
- Publications 
- Events
- Gallery

## Troubleshooting

### Build Issues
- Ensure all environment variables are set in GitHub Secrets
- Check that TinaCMS build completes before Astro build
- Verify the base path is set correctly for GitHub Pages

### Admin Access Issues
- Verify TinaCMS Client ID and Token are correct
- Check that the admin page is accessible at `/admin`
- Ensure GitHub repository permissions are set correctly

### Deployment Issues
- Check GitHub Actions logs for detailed error messages
- Verify GitHub Pages is enabled and set to GitHub Actions source
- Ensure the workflow has proper permissions

## URLs
- **Site**: https://lagithan.github.io/thamizhi-site
- **Admin**: https://lagithan.github.io/thamizhi-site/admin
- **Repository**: https://github.com/lagithan/thamizhi-site