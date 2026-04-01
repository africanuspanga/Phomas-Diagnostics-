/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  experimental: {
    // Disable LightningCSS optimization to avoid WASM fetch issues in the browser runtime
    optimizeCss: false,
  },
}

export default nextConfig
