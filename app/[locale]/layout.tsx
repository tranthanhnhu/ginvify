import { notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { SetHtmlLang } from "@/components/i18n/SetHtmlLang";
import { DictionaryProvider } from "@/components/i18n/DictionaryProvider";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dict}>
      <SmoothScroll>
        <SetHtmlLang locale={locale} />
        <Navbar locale={locale} labels={dict.nav} />
        <main>{children}</main>
      </SmoothScroll>
    </DictionaryProvider>
  );
}
