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
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-4xl">
          <p className="type-label text-cyan">{aiHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {aiHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            {aiHome.body}
          </Reveal>
          <p className="mt-4 max-w-xl text-sm text-fg-muted">{aiHome.outcome}</p>
        </SectionPanel>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {aiHome.steps.map((step, i) => (
            <li key={step.title}>
              <div
                className={[
                  "h-full border bg-bg-1/80 px-4 py-5 backdrop-blur-sm transition-colors duration-500",
                  activeIndex === i
                    ? "border-cyan text-fg"
                    : "border-white/15 text-fg-muted",
                ].join(" ")}
              >
                <span className="type-label text-cyan">{step.title}</span>
                <p className="mt-3 text-sm leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
