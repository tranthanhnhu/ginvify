"use client";

import { Container } from "@/components/ui/Container";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";

const PIPELINE = [
  "CUSTOMER",
  "WEB APP",
  "API",
  "AI AGENT",
  "DATABASE",
  "CRM",
  "ACTION",
] as const;

export function Automation() {
  const { sectionProgress, activeSection } = useScrollProgress();
  const activeIndex =
    activeSection === "automation"
      ? Math.min(
          PIPELINE.length - 1,
          Math.floor(sectionProgress * PIPELINE.length),
        )
      : -1;

  return (
    <section
      id="automation"
      data-section="automation"
      className="relative z-10 py-28 sm:py-36"
    >
      <Container>
        <p className="type-label text-cyan">04 — AUTOMATION</p>
        <BlurToSharp as="h2" className="type-h1 mt-5 max-w-4xl text-fg">
          Turn repetitive work into intelligent systems.
        </BlurToSharp>
        <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
          A living workflow — nodes activate as you scroll; packets travel the
          same Core.
        </Reveal>

        <ol className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {PIPELINE.map((node, i) => (
            <li key={node}>
              <div
                className={[
                  "border px-3 py-5 text-center transition-all duration-500",
                  activeIndex >= i
                    ? "border-cyan/60 bg-cyan/5 text-fg"
                    : "border-white/10 text-fg-muted",
                ].join(" ")}
              >
                <span className="type-label block text-[0.65rem] opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block text-xs font-medium tracking-[0.08em]">
                  {node}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
