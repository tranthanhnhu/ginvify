"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

export function Idea() {
  const { idea } = useDictionary();

  return (
    <section
      id="idea"
      data-section="idea"
      className="relative z-10 flex min-h-[100svh] items-center py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-bg-0/45" />

      <Container className="relative">
        <SectionPanel className="max-w-3xl">
          <p className="type-label text-cyan">{idea.label}</p>

          <BlurToSharp as="h2" className="type-h1 mt-6 text-fg">
            {idea.headline}
          </BlurToSharp>

          <Reveal
            as="p"
            mode="words"
            className="mt-10 type-display text-lime md:mt-12"
          >
            {idea.word}
          </Reveal>

          <p className="mt-8 max-w-md text-fg-muted">{idea.body}</p>

          <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
            {idea.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm text-fg-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-lime before:content-['']"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </SectionPanel>
      </Container>
    </section>
  );
}
