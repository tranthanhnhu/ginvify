import type { MetadataRoute } from "next";
import { locales, serviceSlugs, siteUrl } from "@/lib/i18n/config";

const staticPaths = [
  "",
  "/services",
  "/technology",
  "/experiments",
  "/about",
  "/contact",
  ...serviceSlugs.map((s) => `/services/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const url = `${siteUrl}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${siteUrl}/en${path}`,
            ja: `${siteUrl}/jp${path}`,
          },
        },
      });
    }
  }

  return entries;
}
