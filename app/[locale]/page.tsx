import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Idea } from "@/components/sections/Idea";
import { Services } from "@/components/sections/Services";
import { AI } from "@/components/sections/AI";
import { Automation } from "@/components/sections/Automation";
import { Engineering } from "@/components/sections/Engineering";
import { Technology } from "@/components/sections/Technology";
import { Experiments } from "@/components/sections/Experiments";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const path = `/${locale}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en`,
        ja: `${siteUrl}/jp`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `${siteUrl}${path}`,
      siteName: "GINVIFY",
      locale: locale === "jp" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <ScrollStory>
      <Hero />
      <Idea />
      <Services />
      <AI />
      <Automation />
      <Engineering />
      <Technology />
      <Experiments />
      <About />
      <Contact copy={dict.contact} />
    </ScrollStory>
  );
}
