  import path from 'path';
  import type { NextConfig } from 'next';

  const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/OccBean',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    webpack(config) {
      config.resolve.alias['@'] = path.join(__dirname);
      return config;
    },
  };

  export default nextConfig;