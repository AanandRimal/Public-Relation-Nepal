import type { MetadataRoute } from "next";
import {
  getServices,
  getPortfolio,
  getIndustries,
  getBlogs,
  getResources,
} from "@/lib/cms/queries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://publicrelationnepal.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, portfolio, industries, blogs, resources] = await Promise.all([
    getServices(),
    getPortfolio(),
    getIndustries(),
    getBlogs(),
    getResources(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const portfolioPages = portfolio.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified: p.completedAt ? new Date(p.completedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogs.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const resourcePages = resources.map((r) => ({
    url: `${SITE_URL}/resources/${r.slug}`,
    lastModified: new Date(r.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages, ...industryPages, ...blogPages, ...resourcePages];
}
