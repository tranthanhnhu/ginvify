"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

export function Process() {
  const { processHome } = useDictionary();

  return (
    <section
      id="process"
      data-section="process"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/45"
    >
      <Container className="relative">
        <SectionPanel variant="ghost" padded={false} className="max-w-3xl">
          <p className="type-label text-cyan">{processHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {processHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg/75">
            {processHome.body}
          </Reveal>
        </SectionPanel>

        <ol className="relative mt-12 max-w-3xl space-y-0 md:border-l md:border-white/12 md:pl-10">
          {processHome.steps.map((step, i) => (
            <li key={step.title} className="relative py-5 md:py-6">
              <div
                className="absolute -left-[2.85rem] top-7 hidden h-2.5 w-2.5 rounded-full bg-lime md:block"
                aria-hidden
              />
              <p className="type-label text-lime">
                {String(i + 1).padStart(2, "0")}
                <span className="mx-2 text-fg/25">—</span>
                {step.title}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-muted md:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
