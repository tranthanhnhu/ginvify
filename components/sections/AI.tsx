"use client";

import { Container } from "@/components/ui/Container";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";

const FLOW = ["OBSERVE", "REASON", "DECIDE", "ACT", "LEARN"] as const;

export function AI() {
  const { sectionProgress, activeSection } = useScrollProgress();
  const activeIndex =
    activeSection === "ai"
      ? Math.min(FLOW.length - 1, Math.floor(sectionProgress * FLOW.length))
      : -1;

  return (
    <section id="ai" data-section="ai" className="relative z-10 py-28 sm:py-36">
      <Container>
        <p className="type-label text-cyan">03 — AI</p>
        <BlurToSharp as="h2" className="type-h1 mt-5 max-w-4xl text-fg">
          AI that doesn&apos;t just answer. It acts.
        </BlurToSharp>
        <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
          Nodes, signals and graphs — the same Intelligence Core, reshaped into
          an acting loop.
        </Reveal>

        <ol className="mt-16 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-4">
          {FLOW.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span
                className={[
                  "type-label border px-4 py-3 transition-colors duration-500",
                  activeIndex === i
                    ? "border-cyan text-cyan"
                    : "border-white/15 text-fg-muted",
                ].join(" ")}
              >
                {step}
              </span>
              {i < FLOW.length - 1 && (
                <span
                  className="hidden text-fg/30 sm:inline"
                  aria-hidden
                >
                  →
                </span>
              )}
              {i < FLOW.length - 1 && (
                <span className="type-label text-fg/25 sm:hidden" aria-hidden>
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
