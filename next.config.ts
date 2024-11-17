import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/your-repo-name', // Replace with your GitHub repository name
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};

export default nextConfig;
