import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import {
  isLocale,
  serviceSlugs,
  siteUrl,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const path = `/${locale}/services`;
  return {
    title: `${dict.servicesIndex.title} | GINVIFY`,
    description: dict.servicesIndex.body,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en/services`,
        ja: `${siteUrl}/jp/services`,
      },
    },
  };
}

export default async function ServicesIndexPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="pb-28 pt-32">
      <Container>
        <p className="type-label text-cyan">{dict.servicesIndex.label}</p>
        <BlurToSharp as="h1" className="type-h1 mt-5 text-fg">
          {dict.servicesIndex.title}
        </BlurToSharp>
        <p className="mt-6 max-w-2xl text-fg-muted">{dict.servicesIndex.body}</p>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug) => {
            const page = dict.servicePages[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/${locale}/services/${slug}`}
                  className="block h-full border border-white/10 bg-bg-1/40 p-6 transition-colors hover:border-lime/40"
                >
                  <h2 className="text-lg font-medium text-fg">{page.title}</h2>
                  <p className="mt-3 text-sm text-fg-muted">{page.tagline}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
