import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/OccBean',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },
};

export default nextConfig;