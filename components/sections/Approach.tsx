"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

export function Approach() {
  const { approachHome } = useDictionary();

  return (
    <section
      id="approach"
      data-section="approach"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-3xl">
          <p className="type-label text-lime">{approachHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {approachHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            {approachHome.body}
          </Reveal>
        </SectionPanel>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {approachHome.items.map((item, i) => (
            <li key={item.title}>
              <SectionPanel as="article" className="h-full">
                <span className="type-label text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-fg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {item.body}
                </p>
              </SectionPanel>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
