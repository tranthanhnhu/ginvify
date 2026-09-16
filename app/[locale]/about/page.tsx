import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const path = `/${locale}/about`;
  return {
    title: `About | GINVIFY`,
    description: dict.pages.about.body,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en/about`,
        ja: `${siteUrl}/jp/about`,
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return (
    <div className="pt-16">
      <About />
    </div>
  );
}
