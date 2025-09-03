// next.config.mjs

// Node built-ins
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * @fileoverview Next.js configuration
 * - Removed next-video integration entirely
 * - Keeps custom image loader + Vagaro widget injection
 */

// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Vagaro widget script as a string to inline via <Script>
const widgetJS = fs.readFileSync(
    path.join(__dirname, 'src', 'vagaro.js'),
    'utf8'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Your custom image loader
    loader: 'custom',
    loaderFile: path.join('src', 'image_loader.ts'),
  },
  env: {
    // Available as process.env.widgetJS on server render
    widgetJS,
  },

  // (Optional) Add this if you want stable OG/Twitter URLs in metadata:
  // experimental: {},
  // async headers() { return []; },
};

export default nextConfig;
