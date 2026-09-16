"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { GinvifyCat } from "@/components/mascot/GinvifyCat";

type Label = "CONCEPT" | "EXPERIMENT" | "PROTOTYPE";

const ITEMS: {
  title: string;
  label: Label;
  blurb: string;
}[] = [
  {
    title: "AI AGENT SYSTEM",
    label: "EXPERIMENT",
    blurb: "Multi-step agents that observe, decide and act across tools.",
  },
  {
    title: "SAAS PLATFORM CONCEPT",
    label: "CONCEPT",
    blurb: "Multi-tenant product architecture for recurring value.",
  },
  {
    title: "AUTOMATION ENGINE",
    label: "PROTOTYPE",
    blurb: "Workflow graph that turns APIs and agents into actions.",
  },
  {
    title: "AI DOCUMENT SYSTEM",
    label: "EXPERIMENT",
    blurb: "RAG pipelines for structured retrieval and generation.",
  },
  {
    title: "COMPUTER VISION LAB",
    label: "EXPERIMENT",
    blurb: "Perception experiments for product and operations use cases.",
  },
  {
    title: "DIGITAL PRODUCT CONCEPT",
    label: "CONCEPT",
    blurb: "End-to-end product framing from idea to production path.",
  },
];

const FILTERS: Array<"ALL" | Label | "ARCHIVE"> = [
  "ALL",
  "CONCEPT",
  "EXPERIMENT",
  "PROTOTYPE",
  "ARCHIVE",
];

export function Experiments() {
  const [filter, setFilter] = useState<"ALL" | Label | "ARCHIVE">("ALL");

  const visible = useMemo(() => {
    if (filter === "ALL") return ITEMS;
    if (filter === "ARCHIVE") return [];
    return ITEMS.filter((item) => item.label === filter);
  }, [filter]);

  return (
    <section
      id="experiments"
      data-section="experiments"
      className="relative z-10 py-28 sm:py-36 before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/55"
    >
      <Container className="relative">
        <SectionPanel className="max-w-3xl">
          <p className="type-label text-fg-muted">07 — EXPERIMENTS</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            Things We&apos;re Building.
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            Conceptual and experimental work — clearly labeled. Nothing fabricated
            as a client case study.
          </Reveal>
        </SectionPanel>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter experiments"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={[
                "type-label border px-3 py-2 transition-colors",
                filter === f
                  ? "border-lime text-lime"
                  : "border-white/15 text-fg-muted hover:text-fg",
              ].join(" ")}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <SectionPanel className="mt-16 flex flex-col items-center gap-6 py-16 text-center">
            <GinvifyCat variant="wave" />
            <p className="max-w-sm text-fg-muted">
              Nothing in this filter right now. Try another label — or check back
              as experiments land.
            </p>
          </SectionPanel>
        ) : (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <li key={item.title}>
                <SectionPanel as="article" className="h-full">
                  <span className="type-label text-cyan">{item.label}</span>
                  <h3 className="mt-4 text-base font-medium tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-fg-muted">{item.blurb}</p>
                </SectionPanel>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
