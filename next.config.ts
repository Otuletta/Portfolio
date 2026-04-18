import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    esmExternals: true
  },
  transpilePackages: ['@null/engine-core'],
  turbopack: {},
  images: {
    qualities: [75, 100],
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
    };
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@null/engine-core/NullGame': path.resolve(__dirname, 'node_modules/@null/engine-core/NullGame/index.tsx'),
    };
    return config;
  }
};

export default nextConfig;
