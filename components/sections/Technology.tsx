"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { setScrollStore } from "@/lib/scroll/useScrollProgress";
import type { TechGroup } from "@/lib/three/morphTargets";

const GROUPS: {
  id: TechGroup;
  label: string;
  items: string[];
}[] = [
  {
    id: "ai",
    label: "AI",
    items: ["LLMs", "RAG", "Agents", "Computer Vision", "Machine Learning"],
  },
  {
    id: "web",
    label: "WEB",
    items: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    id: "cloud",
    label: "CLOUD",
    items: ["AWS", "Cloud infrastructure", "Docker", "CI/CD"],
  },
  {
    id: "data",
    label: "DATA",
    items: ["PostgreSQL", "Vector databases", "Data pipelines"],
  },
  {
    id: "automation",
    label: "AUTOMATION",
    items: ["APIs", "Workflows", "AI Agents", "Integrations"],
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      data-section="technology"
      className="relative z-10 py-28 sm:py-36 before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-3xl">
          <p className="type-label text-cyan">06 — TECHNOLOGY</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            Technology constellation.
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            Not a logo wall — five clusters inside the same Core. Hover a group
            to focus it.
          </Reveal>
        </SectionPanel>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {GROUPS.map((group) => (
            <li key={group.id}>
              <button
                type="button"
                className="h-full w-full border border-white/12 bg-bg-1/80 p-5 text-left backdrop-blur-sm transition-colors duration-300 hover:border-lime/40 focus-visible:border-cyan focus-visible:outline-none"
                onMouseEnter={() => setScrollStore({ techGroup: group.id })}
                onMouseLeave={() => setScrollStore({ techGroup: null })}
                onFocus={() => setScrollStore({ techGroup: group.id })}
                onBlur={() => setScrollStore({ techGroup: null })}
              >
                <span className="type-label text-lime">{group.label}</span>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-fg-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
