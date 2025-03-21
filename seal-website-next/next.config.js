/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',  // This will generate static files
  distDir: 'dist',   // This will output to the dist directory
  // Add any other configuration options here
}

module.exports = nextConfig 