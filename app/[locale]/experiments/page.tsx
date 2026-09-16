import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Experiments } from "@/components/sections/Experiments";
import { Container } from "@/components/ui/Container";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const path = `/${locale}/experiments`;
  return {
    title: `${dict.pages.experiments.title} | GINVIFY`,
    description: dict.pages.experiments.body,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en/experiments`,
        ja: `${siteUrl}/jp/experiments`,
      },
    },
  };
}

export default async function ExperimentsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-16">
      <Container className="pt-16">
        <p className="type-label text-fg-muted">{dict.pages.experiments.label}</p>
        <h1 className="type-h1 mt-4 text-fg">{dict.pages.experiments.title}</h1>
        <p className="mt-4 max-w-xl text-fg-muted">{dict.pages.experiments.body}</p>
      </Container>
      <Experiments />
    </div>
  );
}
