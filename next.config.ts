import type { NextConfig } from "next";
import path from "path";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const webpack = require("webpack");

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    esmExternals: true
  },
  transpilePackages: ['@null/engine-core'],
  images: {
    qualities: [75, 100],
  },
  webpack: (config) => {
    // Allow ESM packages that use .js imports in TypeScript source
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
    };

    // Allow non-fully-specified ESM modules (some packages omit extensions)
    config.module.rules.push({
      test: /\.m?js/,
      resolve: { fullySpecified: false },
    });

    // Resolve @null/engine-core/NullGame to the correct entry point
    config.resolve.alias = {
      ...config.resolve.alias,
      '@null/engine-core/NullGame': path.resolve(__dirname, 'node_modules/@null/engine-core/NullGame/index.tsx'),
    };

    // Strip .js extension from remaining engine-core imports (postinstall rewrites ../src/ ones,
    // but any remaining ./X.js intra-NullGame imports also need this treatment)
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/\.js$/, (resource: { context: string; request: string }) => {
        if (resource.context.includes('@null/engine-core')) {
          resource.request = resource.request.replace(/\.js$/, '');
        }
      })
    );

    return config;
  }
};

export default nextConfig;
