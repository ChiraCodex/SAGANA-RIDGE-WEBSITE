/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Enable static exports
  output: 'export',
  
  // Optional: Change the output directory to match Netlify's expectations
  distDir: 'out',
  
  // Optional: Add trailing slashes for better Netlify compatibility
  trailingSlash: true,
  
  // Disable server-side image optimization if using next/image
  images: {
    unoptimized: true
  },
  
  // Enable React strict mode
  reactStrictMode: true,
}

module.exports = nextConfig