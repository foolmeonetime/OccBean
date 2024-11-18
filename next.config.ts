import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/OccBean', // Ensure this matches your GitHub repository name exactly (case-sensitive)
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  trailingSlash: true, // Optional, but useful for GitHub Pages routing
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname); // Map @ to project root (if you're using aliases)
    return config;
  },
};

export default nextConfig;
