"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

export function About() {
  const { aboutHome } = useDictionary();

  return (
    <section
      id="about"
      data-section="about"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container narrow className="relative">
        <SectionPanel>
          <p className="type-label text-fg-muted">{aboutHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-6 text-fg">
            {aboutHome.headline}
          </BlurToSharp>
          <Reveal as="p" className="mt-8 text-lg text-fg-muted">
            {aboutHome.secondary}
          </Reveal>
          <p className="mt-6 text-fg-muted">{aboutHome.body}</p>
          <p className="type-label mt-12 text-cyan">{aboutHome.location}</p>
        </SectionPanel>
      </Container>
    </section>
  );
}
