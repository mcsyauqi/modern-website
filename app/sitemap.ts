import { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES, PORTFOLIO_ITEMS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/tentang",
    "/layanan",
    "/portofolio",
    "/harga",
    "/kontak",
    "/blog",
    "/faq",
    "/karir",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioPages = PORTFOLIO_ITEMS.map((item) => ({
    url: `${baseUrl}/portofolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages];
}
