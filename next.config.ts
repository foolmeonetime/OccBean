import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
<<<<<<< HEAD
  output: 'export', // Enables static export
  basePath: '/OccBean', // Ensure this matches your GitHub repository name exactly (case-sensitive)
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  trailingSlash: true, // Optional, but useful for GitHub Pages routing
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname); // Map @ to project root (if you're using aliases)
=======
  output: 'export',
  basePath: '/OccBean', 
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname);
>>>>>>> e85d0a7 (Updated project configuration and fixed issues)
    return config;
  },
};

<<<<<<< HEAD
export default nextConfig;
=======
export default nextConfig;
>>>>>>> e85d0a7 (Updated project configuration and fixed issues)
