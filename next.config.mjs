// Import the next-video integration (for handling <Video /> components)
import { withNextVideo } from 'next-video/process';

// Node.js built-ins for file + path resolution
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * @fileoverview Next.js configuration
 * - Integrates next-video (in local/dev only, not in Vercel CI)
 * - Loads Vagaro widget JS script into process.env for injection
 * - Custom image loader setup
 */

/**
 * Resolve __dirname in an ES module context (since __dirname isn't
 * available directly in ESM like in CommonJS).
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load Vagaro widget script as a raw string from src/vagaro.js.
 * This is injected into Next.js' process.env so you can inline it
 * in <Script dangerouslySetInnerHTML>.
 */
const widgetJS = fs.readFileSync(
    path.join(__dirname, 'src', 'vagaro.js'),
    'utf8'
);

/**
 * Base Next.js configuration
 */
const nextConfig = {
  images: {
    // Use a custom loader (instead of Next's default image optimizer)
    loader: 'custom',
    loaderFile: path.join('src', 'image_loader.ts'),
  },
  env: {
    // Makes the Vagaro script string available in process.env.widgetJS
    widgetJS,
  },
};

/**
 * Detect build environment:
 * - Vercel sets process.env.VERCEL = '1'
 * - Many CI systems set process.env.CI = 'true'
 */
const isCI = !!process.env.CI || !!process.env.VERCEL;

/**
 * Allow manual override via environment variables:
 * - DISABLE_NEXT_VIDEO=1 → always disable plugin
 * - ENABLE_NEXT_VIDEO=1  → always enable plugin, even on Vercel
 */
const forceDisable = process.env.DISABLE_NEXT_VIDEO === '1';
const forceEnable = process.env.ENABLE_NEXT_VIDEO === '1';

/**
 * Decide whether to enable next-video:
 * - Enabled in local/dev by default
 * - Disabled in CI/Vercel unless explicitly overridden
 */
const enableNextVideo = (forceEnable || !isCI) && !forceDisable;

/**
 * Export the config:
 * - If next-video is enabled, wrap withNextVideo()
 * - Otherwise, just return plain Next.js config
 */
export default enableNextVideo
    ? withNextVideo(nextConfig)
    : nextConfig;
