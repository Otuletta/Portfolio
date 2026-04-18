import type { NextConfig } from "next";
import path from "path";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const webpack = require("webpack");

const engineRoot = path.resolve(__dirname, 'node_modules/@null/engine-core');

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
    // Allow .js imports to resolve to .ts/.tsx source files
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
    };
    config.resolve.extensions.push('.ts', '.tsx');

    // Allow non-fully-specified ESM modules
    config.module.rules.push({
      test: /\.m?js/,
      resolve: { fullySpecified: false },
    });

    // Explicit entry point alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@null/engine-core/NullGame': path.join(engineRoot, 'NullGame/index.tsx'),
      // Internal cross-directory imports from NullGame → src
      // These are the exact paths that fail on Vercel (relative from gameWorker.ts / InputHandler.ts)
      [path.join(engineRoot, 'src/index')]:          path.join(engineRoot, 'src/index.ts'),
      [path.join(engineRoot, 'src/index.js')]:       path.join(engineRoot, 'src/index.ts'),
      [path.join(engineRoot, 'src/types')]:          path.join(engineRoot, 'src/types.ts'),
      [path.join(engineRoot, 'src/types.js')]:       path.join(engineRoot, 'src/types.ts'),
      [path.join(engineRoot, 'src/ai/Bot')]:         path.join(engineRoot, 'src/ai/Bot.ts'),
      [path.join(engineRoot, 'src/ai/Bot.js')]:      path.join(engineRoot, 'src/ai/Bot.ts'),
      [path.join(engineRoot, 'src/ai/Evaluator')]:   path.join(engineRoot, 'src/ai/Evaluator.ts'),
      [path.join(engineRoot, 'src/ai/Evaluator.js')]:path.join(engineRoot, 'src/ai/Evaluator.ts'),
      [path.join(engineRoot, 'src/pieces/Pieces')]:  path.join(engineRoot, 'src/pieces/Pieces.ts'),
      [path.join(engineRoot, 'src/pieces/Pieces.js')]:path.join(engineRoot, 'src/pieces/Pieces.ts'),
    };

    // Strip .js extension from internal engine-core imports so extensionAlias can resolve them
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
