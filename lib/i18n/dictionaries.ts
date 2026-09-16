import type { ContactCopy } from "@/components/sections/Contact";
import type { ServiceSlug } from "@/lib/i18n/config";
import type { ServicePageContent } from "@/lib/content/services";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    services: string;
    ai: string;
    technology: string;
    experiments: string;
    about: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  idea: {
    label: string;
    headline: string;
    word: string;
    body: string;
  };
  aboutHome: {
    label: string;
    headline: string;
    secondary: string;
    location: string;
  };
  contact: ContactCopy;
  servicesIndex: {
    label: string;
    title: string;
    body: string;
  };
  servicePages: Record<ServiceSlug, ServicePageContent>;
  pages: {
    technology: { label: string; title: string; body: string };
    experiments: { label: string; title: string; body: string };
    about: {
      label: string;
      title: string;
      body: string;
      secondary: string;
      location: string;
    };
    contact: { label: string; title: string };
  };
  footer: {
    copyright: string;
    location: string;
  };
  notFound: {
    code: string;
    title: string;
    body: string;
    cta: string;
  };
};
