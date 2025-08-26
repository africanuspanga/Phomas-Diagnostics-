# Static Site Deployment Guide

Your Phomas Diagnostics website is now configured for static export and can be deployed to any static hosting service.

## For Render.com Static Site:

1. **Create a Static Site** (not Web Service)
2. **Connect your GitHub repository**
3. **Build Settings:**
   - **Build Command**: `npm run build:static`
   - **Publish Directory**: `out`
   - **Node Version**: 18 or higher

## Build Process:

The static export will generate all pages as HTML files in the `out` directory, making your site compatible with static hosting services like:
- Render.com Static Sites
- Netlify
- Vercel Static
- GitHub Pages
- Any CDN or static file server

## What Changed:

- Added `output: 'export'` to Next.js config
- Added `trailingSlash: true` for better static hosting compatibility
- Removed API routes (not supported in static export)
- Added static build scripts to package.json

Your website will now build as pure HTML/CSS/JS files that can be hosted anywhere!
