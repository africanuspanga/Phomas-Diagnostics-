# Deployment Guide for Render.com (Static Site)

## Prerequisites
- GitHub repository with your code
- Render.com account

## Deployment Steps

### 1. Connect GitHub Repository
1. Go to [Render.com](https://render.com) and sign in
2. Click "New +" and select "Static Site"
3. Connect your GitHub account and select this repository

### 2. Configure Service
- **Name**: phomas-diagnostics (or your preferred name)
- **Build Command**: `npm ci && npm run build:static`
- **Publish Directory**: `./out`
- **Plan**: Free (or upgrade as needed)

### 3. Environment Variables
No environment variables are required for static deployment.

### 4. Custom Domain (Optional)
- Add your custom domain in Render's dashboard
- Update DNS records as instructed by Render

## Static Export
This Next.js app is configured for static export, generating pure HTML/CSS/JS files.

## Automatic Deployments
Render will automatically deploy when you push to your main branch.

## Troubleshooting
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify the `out` directory is generated after build
