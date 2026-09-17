"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { scrollTo } from "@/lib/scroll/lenis";
import type { Locale } from "@/lib/i18n/config";

export function FAQ() {
  const { faqHome, nav } = useDictionary();
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] === "jp" ? "jp" : "en") as Locale;
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <section
      id="faq"
      data-section="faq"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/55"
    >
      <Container className="relative">
        <SectionPanel variant="ghost" padded={false} className="max-w-3xl">
          <p className="type-label text-fg-muted">{faqHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {faqHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg/75">
            {faqHome.body}
          </Reveal>
        </SectionPanel>

        <ul className="mt-10 max-w-3xl space-y-2">
          {faqHome.items.map((item, i) => {
            const panelId = `${baseId}-panel-${i}`;
            const btnId = `${baseId}-btn-${i}`;
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <div className="border border-white/12 bg-bg-1/80 backdrop-blur-sm">
                  <button
                    id={btnId}
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-sm font-medium text-fg md:text-base">
                      {item.q}
                    </span>
                    <span className="type-label text-lime" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-fg-muted"
                  >
                    {item.a}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <Button
            href={isHome ? "#contact" : `/${locale}/contact`}
            variant="primary"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollTo("#contact");
              }
            }}
          >
            {nav.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
