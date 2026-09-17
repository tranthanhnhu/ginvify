"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { scrollTo } from "@/lib/scroll/lenis";
import type { Locale } from "@/lib/i18n/config";

export function About() {
  const { aboutHome, nav } = useDictionary();
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] === "jp" ? "jp" : "en") as Locale;
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <section
      id="about"
      data-section="about"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container narrow className="relative">
        <SectionPanel variant="ghost" padded={false}>
          <p className="type-label text-fg-muted">{aboutHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-6 text-fg">
            {aboutHome.headline}
          </BlurToSharp>
          <Reveal as="p" className="mt-8 text-lg text-fg/80">
            {aboutHome.secondary}
          </Reveal>
          <p className="mt-6 text-fg-muted">{aboutHome.body}</p>
          <p className="type-label mt-12 text-cyan">{aboutHome.location}</p>
          <div className="mt-10">
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
        </SectionPanel>
      </Container>
    </section>
  );
}
