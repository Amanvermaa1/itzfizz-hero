import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/itzfizz-hero' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/itzfizz-hero/' : '',
};

export default nextConfig;
