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
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-3xl">
          <p className="type-label text-cyan">{processHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {processHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            {processHome.body}
          </Reveal>
        </SectionPanel>

        <ol className="mt-10 space-y-3 md:space-y-0 md:border-l md:border-white/15 md:pl-0">
          {processHome.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative md:grid md:grid-cols-[7rem_1fr] md:gap-8 md:border-l-0 md:py-5"
            >
              <div className="hidden md:absolute md:-left-[5px] md:top-7 md:block md:h-2.5 md:w-2.5 md:rounded-full md:bg-lime" />
              <p className="type-label text-lime md:pt-1">
                {String(i + 1).padStart(2, "0")} — {step.title}
              </p>
              <SectionPanel padded className="mt-2 md:mt-0">
                <h3 className="text-base font-medium text-fg md:hidden">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted md:text-base">
                  {step.body}
                </p>
              </SectionPanel>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
