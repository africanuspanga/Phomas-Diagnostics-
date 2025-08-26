# Deployment Guide for Render.com

## Prerequisites
- GitHub repository with your code
- Render.com account

## Deployment Steps

### 1. Connect GitHub Repository
1. Go to [Render.com](https://render.com) and sign in
2. Click "New +" and select "Web Service"
3. Connect your GitHub account and select this repository

### 2. Configure Service
- **Name**: phomas-diagnostics (or your preferred name)
- **Environment**: Node
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Plan**: Free (or upgrade as needed)

### 3. Environment Variables
Set these in Render's dashboard:
- `NODE_ENV`: production
- `NEXT_TELEMETRY_DISABLED`: 1

### 4. Custom Domain (Optional)
- Add your custom domain in Render's dashboard
- Update DNS records as instructed by Render

## Health Check
The app includes a health check endpoint at `/api/health` for monitoring.

## Automatic Deployments
Render will automatically deploy when you push to your main branch.

## Troubleshooting
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify environment variables are set correctly
