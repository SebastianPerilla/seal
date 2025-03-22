/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  output: 'standalone', // Changed from 'export' to 'standalone'
  // Remove distDir as it's not needed with standalone output
}

module.exports = nextConfig 