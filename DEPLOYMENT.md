# Deployment Guide for Vercel

This project is configured to deploy as a standard Next.js application on Vercel. It no longer uses static export or an `out` directory.

## Prerequisites

- A GitHub repository with this code
- A Vercel account

## Deployment Steps

### 1. Import the Repository

1. Go to [Vercel](https://vercel.com/) and sign in.
2. Click **Add New...** then **Project**.
3. Import this GitHub repository.

### 2. Project Settings

Vercel should detect this project as Next.js automatically.

- **Framework Preset**: `Next.js`
- **Build Command**: `next build` (or leave blank to use the default)
- **Install Command**: `npm install` (or leave blank to use the default)
- **Output Directory**: leave blank

### 3. Environment Variables

No environment variables are currently required for deployment.

### 4. Deploy

1. Click **Deploy**.
2. Vercel will install dependencies, run `next build`, and host the app.
3. Every push to the connected branch will trigger a new deployment automatically.

### 5. Custom Domain

If you want to use your own domain:

1. Open the project in Vercel.
2. Go to **Settings** -> **Domains**.
3. Add your domain and follow the DNS instructions Vercel provides.

## Notes

- The app uses the Next.js App Router and is intended to run as a normal Vercel-hosted application.
- Remote product images from Vercel Blob are allowed in the Next.js image configuration.
- There is no static export step and no `out` directory to publish.

## Troubleshooting

- Check the deployment logs in Vercel if a build fails.
- Make sure dependencies install correctly with `npm install`.
- If you add new remote image hosts later, include them in `next.config.mjs`.
