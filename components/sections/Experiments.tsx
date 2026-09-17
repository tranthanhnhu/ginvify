"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { GinvifyCat } from "@/components/mascot/GinvifyCat";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

type Label = "CONCEPT" | "EXPERIMENT" | "PROTOTYPE";

type ExperimentsProps = {
  hideIntro?: boolean;
};

export function Experiments({ hideIntro = false }: ExperimentsProps) {
  const { experimentsHome } = useDictionary();
  const [filter, setFilter] = useState<string>("ALL");

  const visible = useMemo(() => {
    if (filter === "ALL") return experimentsHome.items;
    if (filter === "ARCHIVE") return [];
    return experimentsHome.items.filter((item) => item.label === filter);
  }, [filter, experimentsHome.items]);

  return (
    <section
      id="experiments"
      data-section="experiments"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/55"
    >
      <Container className="relative">
        {!hideIntro && (
          <SectionPanel className="max-w-3xl">
            <p className="type-label text-fg-muted">{experimentsHome.label}</p>
            <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
              {experimentsHome.title}
            </BlurToSharp>
            <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
              {experimentsHome.body}
            </Reveal>
          </SectionPanel>
        )}

        <div
          className={["flex flex-wrap gap-2", hideIntro ? "mt-0" : "mt-10"].join(
            " ",
          )}
          role="group"
          aria-label="Filter experiments"
        >
          {experimentsHome.filters.map((f) => (
            <button
              key={f}
              type="button"
              className={[
                "type-label min-h-11 border px-3 py-2 transition-colors",
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
            <p className="max-w-sm text-fg-muted">{experimentsHome.empty}</p>
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
