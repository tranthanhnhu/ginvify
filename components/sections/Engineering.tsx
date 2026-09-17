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
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/45"
    >
      <Container className="relative">
        <SectionPanel variant="ghost" padded={false} className="max-w-3xl">
          <p className="type-label text-lime">{engineeringHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {engineeringHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg/75">
            {engineeringHome.body}
          </Reveal>
        </SectionPanel>

        <ol className="relative mt-12 max-w-3xl space-y-0">
          <div
            className="pointer-events-none absolute bottom-2 left-[0.55rem] top-2 w-px bg-gradient-to-b from-lime/45 via-white/12 to-transparent"
            aria-hidden
          />
          {engineeringHome.steps.map((step, i) => {
            const on = activeIndex >= i;
            const current = activeIndex === i;
            return (
              <li
                key={step.title}
                className={[
                  "relative grid grid-cols-[1.5rem_1fr] gap-4 py-5 transition-opacity duration-500 sm:gap-6",
                  on ? "opacity-100" : "opacity-40",
                ].join(" ")}
              >
                <span
                  className={[
                    "mt-1.5 h-2.5 w-2.5 rounded-full",
                    current
                      ? "bg-lime shadow-[0_0_12px_rgba(183,255,60,0.45)]"
                      : on
                        ? "bg-lime/55"
                        : "bg-white/25",
                  ].join(" ")}
                  aria-hidden
                />
                <div>
                  <p className="type-label text-lime/80">
                    {String(i + 1).padStart(2, "0")}
                    <span className="mx-2 text-fg/20">—</span>
                    <span className={current ? "text-fg" : "text-fg-muted"}>
                      {step.title}
                    </span>
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
