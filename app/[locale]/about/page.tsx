import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Button } from "@/components/ui/Button";
import { Approach } from "@/components/sections/Approach";
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
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const about = dict.pages.about;

  return (
    <div className="pb-section pt-[calc(var(--nav-height)+2rem)]">
      <Container className="relative">
        <SectionPanel className="max-w-3xl">
          <p className="type-label text-fg-muted">{about.label}</p>
          <h1 className="type-h1 mt-5 text-fg">{about.title}</h1>
          <p className="mt-6 text-lg text-fg-muted">{about.body}</p>
          <p className="mt-4 text-fg-muted">{about.secondary}</p>
          <p className="type-label mt-10 text-cyan">{about.location}</p>
        </SectionPanel>

        <h2 className="type-h2 mt-16 text-fg">{about.principlesTitle}</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {about.principles.map((item) => (
            <li key={item.title}>
              <SectionPanel as="article" className="h-full">
                <h3 className="text-base font-medium text-fg">{item.title}</h3>
                <p className="mt-3 text-sm text-fg-muted">{item.body}</p>
              </SectionPanel>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Button href={`/${locale}/contact`} variant="primary">
            {about.cta}
          </Button>
        </div>
      </Container>

      <Approach />
    </div>
  );
}
