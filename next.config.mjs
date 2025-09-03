import { withNextVideo } from 'next-video/process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * @fileoverview Next.js configuration with next-video integration
 * and custom Vagaro widget script injection.
 */

/** Resolve __dirname in ESM context */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Load Vagaro widget script as a string (injected into env) */
const widgetJS = fs.readFileSync(
    path.join(__dirname, 'src', 'vagaro.js'),
    'utf8'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: path.join('src', 'image_loader.ts'),
  },
  env: {
    widgetJS,
  },
};

export default withNextVideo(nextConfig);
