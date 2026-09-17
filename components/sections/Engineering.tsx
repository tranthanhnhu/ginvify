"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";

export function Engineering() {
  const { engineeringHome } = useDictionary();
  const { sectionProgress, activeSection } = useScrollProgress();
  const activeIndex =
    activeSection === "engineering"
      ? Math.min(
          engineeringHome.steps.length - 1,
          Math.floor(sectionProgress * engineeringHome.steps.length),
        )
      : -1;

  return (
    <section
      id="engineering"
      data-section="engineering"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-4xl">
          <p className="type-label text-lime">{engineeringHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {engineeringHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            {engineeringHome.body}
          </Reveal>
        </SectionPanel>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {engineeringHome.steps.map((step, i) => (
            <li key={step.title}>
              <div
                className={[
                  "h-full border bg-bg-1/80 px-4 py-6 backdrop-blur-sm transition-colors duration-500",
                  activeIndex >= i
                    ? "border-lime/50 text-fg"
                    : "border-white/12 text-fg-muted",
                ].join(" ")}
              >
                <span className="type-label text-[0.65rem] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium tracking-[0.1em]">
                  {step.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <pre
          className="mt-12 overflow-x-auto border border-white/12 bg-bg-1/80 p-5 font-mono text-[0.7rem] leading-relaxed text-fg-muted backdrop-blur-sm"
          aria-hidden
        >
          {engineeringHome.codeSnippet}
        </pre>
      </Container>
    </section>
  );
}
