import type { MetadataRoute } from 'next';

const lastModified = new Date('2026-10-02T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ['', 'weekly', 1],
    ['/products', 'monthly', 0.95],
    ['/products/g-hims', 'monthly', 0.95],
    ['/products/gc-erp', 'monthly', 0.95],
    ['/systems', 'monthly', 0.9],
    ['/industries', 'monthly', 0.9],
    ['/approach', 'monthly', 0.9],
    ['/case-studies', 'monthly', 0.8],
    ['/ai-lab', 'monthly', 0.8],
    ['/about', 'monthly', 0.7],
    ['/blog', 'monthly', 0.7],
    ['/blog/event-driven-architecture-guide', 'yearly', 0.6],
    ['/blog/hipaa-compliant-systems', 'yearly', 0.6],
    ['/blog/erp-system-design-lessons', 'yearly', 0.6],
    ['/demo/gc-erp', 'monthly', 0.8],
    ['/demo/g-hims', 'monthly', 0.8],
    ['/contact', 'monthly', 0.8],
  ] as const;

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `https://gothamcoders.com${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
