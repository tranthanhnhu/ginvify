import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Technology } from "@/components/sections/Technology";
import { Container } from "@/components/ui/Container";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const path = `/${locale}/technology`;
  return {
    title: `${dict.pages.technology.title} | GINVIFY`,
    description: dict.pages.technology.body,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en/technology`,
        ja: `${siteUrl}/jp/technology`,
      },
    },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = await getDictionary(raw as Locale);

  return (
    <div className="pb-section pt-[calc(var(--nav-height)+2rem)]">
      <Container>
        <p className="type-label text-cyan">{dict.pages.technology.label}</p>
        <h1 className="type-h1 mt-4 text-fg">{dict.pages.technology.title}</h1>
        <p className="mt-4 max-w-xl text-fg-muted">{dict.pages.technology.body}</p>
      </Container>
      <Technology hideIntro />
    </div>
  );
}
