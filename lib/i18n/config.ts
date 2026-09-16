export const locales = ["en", "jp"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** URL locale → JSON filename */
export function dictionaryFile(locale: Locale): "en" | "ja" {
  return locale === "jp" ? "ja" : "en";
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const serviceSlugs = [
  "web-applications",
  "ai-engineering",
  "automation",
  "saas",
  "landing-pages",
  "digital-products",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ginvify.com";
