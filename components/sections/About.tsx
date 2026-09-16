"use client";

import { Container } from "@/components/ui/Container";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

export function About() {
  const { aboutHome } = useDictionary();

  return (
    <section
      id="about"
      data-section="about"
      className="relative z-10 py-28 sm:py-40"
    >
      <Container narrow>
        <p className="type-label text-fg-muted">{aboutHome.label}</p>
        <BlurToSharp as="h2" className="type-h1 mt-6 text-fg">
          {aboutHome.headline}
        </BlurToSharp>
        <Reveal as="p" className="mt-8 text-lg text-fg-muted">
          {aboutHome.secondary}
        </Reveal>
        <p className="type-label mt-12 text-cyan">{aboutHome.location}</p>
      </Container>
    </section>
  );
}
