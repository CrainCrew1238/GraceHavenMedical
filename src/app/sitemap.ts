import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.gracehavenmedical.com';

// Public routes served from src/app/(routes). Keep in sync when pages are added or removed.
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/about-us', priority: 0.8 },
  { path: '/contact-us', priority: 0.9 },
  { path: '/memberships', priority: 0.8 },
  { path: '/weight-loss', priority: 0.9 },
  { path: '/weight-loss-and-anti-aging-injections', priority: 0.8 },
  { path: '/mens-health', priority: 0.8 },
  { path: '/lab-testing', priority: 0.7 },
  { path: '/iv-therapy', priority: 0.7 },
  { path: '/3d-body-composition', priority: 0.6 },
  { path: '/infrared-therapy', priority: 0.6 },
  { path: '/ionized-foot-detox', priority: 0.6 },
  { path: '/magnet-therapy', priority: 0.6 },
  { path: '/crunchi-skincare', priority: 0.5 },
  { path: '/patchaid-vitamins', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority,
  }));
}
