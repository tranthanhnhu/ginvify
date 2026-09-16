"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";

const PROCESS = [
  "DISCOVER",
  "DESIGN",
  "ENGINEER",
  "INTEGRATE",
  "DEPLOY",
  "SCALE",
] as const;

export function Engineering() {
  const { sectionProgress, activeSection } = useScrollProgress();
  const activeIndex =
    activeSection === "engineering"
      ? Math.min(
          PROCESS.length - 1,
          Math.floor(sectionProgress * PROCESS.length),
        )
      : -1;

  return (
    <section
      id="engineering"
      data-section="engineering"
      className="relative z-10 py-28 sm:py-36 before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-4xl">
          <p className="type-label text-lime">05 — ENGINEERING</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            From idea to production.
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            An engineering partner — architecture, integration and scale. Not a
            fake dashboard.
          </Reveal>
        </SectionPanel>

        <ol className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
          {PROCESS.map((step, i) => (
            <li key={step} className="flex flex-1 items-center gap-2">
              <div
                className={[
                  "w-full border bg-bg-1/80 px-4 py-6 backdrop-blur-sm transition-colors duration-500",
                  activeIndex >= i
                    ? "border-lime/50 text-fg"
                    : "border-white/12 text-fg-muted",
                ].join(" ")}
              >
                <span className="type-label text-[0.65rem] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium tracking-[0.1em]">
                  {step}
                </p>
              </div>
              {i < PROCESS.length - 1 && (
                <span className="hidden text-fg/25 lg:inline" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <pre
          className="mt-12 overflow-x-auto border border-white/12 bg-bg-1/80 p-5 font-mono text-[0.7rem] leading-relaxed text-fg-muted backdrop-blur-sm"
          aria-hidden
        >
{`// system.architecture
layers: [ edge, api, intelligence, data, ops ]
connect(discover → design → engineer → integrate → deploy → scale)`}
        </pre>
      </Container>
    </section>
  );
}
