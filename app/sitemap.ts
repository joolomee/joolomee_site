import type { MetadataRoute } from 'next';
import { WORK } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://joolomee.com';
  const now = new Date();
  const staticRoutes = ['', '/work', '/services', '/about', '/contact'].map((p) => ({
    url: `${base}${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8,
  }));
  const projects = WORK.map((w) => ({
    url: `${base}/work/${w.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
  }));
  return [...staticRoutes, ...projects];
}
