import type { ContactCopy } from "@/components/sections/Contact";
import type { ServiceSlug } from "@/lib/i18n/config";
import type { ServicePageContent } from "@/lib/content/services";
import type { TechGroup } from "@/lib/three/morphTargets";

type LabeledBody = { title: string; body: string };
type QandA = { q: string; a: string };

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
    supporting: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  idea: {
    label: string;
    headline: string;
    word: string;
    body: string;
    bullets: string[];
  };
  servicesHome: {
    label: string;
    title: string;
    body: string;
    viewService: string;
    items: Array<{
      id: string;
      slug: ServiceSlug;
      title: string;
      body: string;
      tags: string[];
    }>;
  };
  aiHome: {
    label: string;
    title: string;
    body: string;
    outcome: string;
    steps: LabeledBody[];
  };
  automationHome: {
    label: string;
    title: string;
    body: string;
    caption: string;
    scrollHint: string;
    nodes: string[];
  };
  engineeringHome: {
    label: string;
    title: string;
    body: string;
    codeSnippet: string;
    steps: LabeledBody[];
  };
  approachHome: {
    label: string;
    title: string;
    body: string;
    items: LabeledBody[];
  };
  processHome: {
    label: string;
    title: string;
    body: string;
    steps: LabeledBody[];
  };
  technologyHome: {
    label: string;
    title: string;
    body: string;
    groups: Array<{
      id: TechGroup;
      label: string;
      why: string;
      items: string[];
    }>;
  };
  experimentsHome: {
    label: string;
    title: string;
    body: string;
    empty: string;
    filters: string[];
    items: Array<{
      title: string;
      label: "CONCEPT" | "EXPERIMENT" | "PROTOTYPE";
      blurb: string;
    }>;
  };
  faqHome: {
    label: string;
    title: string;
    body: string;
    items: QandA[];
  };
  aboutHome: {
    label: string;
    headline: string;
    secondary: string;
    body: string;
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
      principlesTitle: string;
      principles: LabeledBody[];
      cta: string;
    };
    contact: { label: string; title: string };
  };
  footer: {
    copyright: string;
    location: string;
    address: string;
    phone: string;
  };
  notFound: {
    code: string;
    title: string;
    body: string;
    cta: string;
  };
};
