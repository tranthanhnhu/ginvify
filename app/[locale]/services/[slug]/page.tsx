import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/pages/ServiceDetail";
import {
  isLocale,
  isServiceSlug,
  serviceSlugs,
  siteUrl,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export function generateStaticParams() {
  return serviceSlugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "jp", slug },
  ]);
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw) || !isServiceSlug(slug)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const content = dict.servicePages[slug];
  const path = `/${locale}/services/${slug}`;
  return {
    title: `${content.title} | GINVIFY`,
    description: content.tagline,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en/services/${slug}`,
        ja: `${siteUrl}/jp/services/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.tagline,
      url: `${siteUrl}${path}`,
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw) || !isServiceSlug(slug)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const content = dict.servicePages[slug];

  return <ServiceDetail locale={locale} slug={slug} content={content} />;
}
