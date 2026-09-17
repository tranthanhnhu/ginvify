"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";

export function AI() {
  const { aiHome } = useDictionary();
  const { sectionProgress, activeSection } = useScrollProgress();
  const activeIndex =
    activeSection === "ai"
      ? Math.min(
          aiHome.steps.length - 1,
          Math.floor(sectionProgress * aiHome.steps.length),
        )
      : -1;

  return (
    <section
      id="ai"
      data-section="ai"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/45"
    >
      <Container className="relative">
        <SectionPanel variant="ghost" padded={false} className="max-w-3xl">
          <p className="type-label text-cyan">{aiHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {aiHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg/75">
            {aiHome.body}
          </Reveal>
          <p className="mt-4 max-w-xl text-sm text-fg-muted">{aiHome.outcome}</p>
        </SectionPanel>

        <ol className="relative mt-12 max-w-4xl space-y-0 md:mt-16">
          <div
            className="pointer-events-none absolute left-[0.55rem] top-3 bottom-3 hidden w-px bg-gradient-to-b from-cyan/50 via-white/15 to-transparent md:block"
            aria-hidden
          />
          {aiHome.steps.map((step, i) => {
            const active = activeIndex === i;
            const passed = activeIndex > i;
            return (
              <li
                key={step.title}
                className={[
                  "relative grid gap-3 border-b border-white/8 py-5 transition-opacity duration-500 md:grid-cols-[3rem_8rem_1fr] md:gap-6 md:py-6",
                  active || passed ? "opacity-100" : "opacity-45",
                ].join(" ")}
              >
                <span
                  className={[
                    "mt-1 hidden h-2.5 w-2.5 rounded-full md:block",
                    active
                      ? "bg-cyan shadow-[0_0_12px_rgba(92,225,230,0.55)]"
                      : passed
                        ? "bg-cyan/50"
                        : "bg-white/20",
                  ].join(" ")}
                  aria-hidden
                />
                <span
                  className={[
                    "type-label",
                    active ? "text-cyan" : "text-fg-muted",
                  ].join(" ")}
                >
                  {step.title}
                </span>
                <p
                  className={[
                    "text-sm leading-relaxed md:text-base",
                    active ? "text-fg" : "text-fg-muted",
                  ].join(" ")}
                >
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
