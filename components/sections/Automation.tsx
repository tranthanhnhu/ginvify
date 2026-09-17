"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";

export function Automation() {
  const { automationHome } = useDictionary();
  const { sectionProgress, activeSection } = useScrollProgress();
  const activeIndex =
    activeSection === "automation"
      ? Math.min(
          automationHome.nodes.length - 1,
          Math.floor(sectionProgress * automationHome.nodes.length),
        )
      : -1;

  return (
    <section
      id="automation"
      data-section="automation"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/45"
    >
      <Container className="relative">
        <SectionPanel variant="ghost" padded={false} className="max-w-3xl">
          <p className="type-label text-cyan">{automationHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {automationHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg/75">
            {automationHome.body}
          </Reveal>
          <p className="mt-3 text-sm text-fg-muted">{automationHome.caption}</p>
        </SectionPanel>

        <p className="type-label mt-8 text-fg-muted sm:hidden">
          {automationHome.scrollHint}
        </p>

        <div className="relative mt-4 sm:mt-12">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg-0 to-transparent sm:hidden"
            aria-hidden
          />
          {/* Desktop connector */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent lg:block"
            aria-hidden
          />
          <ol className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:flex lg:gap-0">
            {automationHome.nodes.map((node, i) => {
              const on = activeIndex >= i;
              return (
                <li
                  key={node}
                  className="relative w-[42%] shrink-0 snap-start px-1 sm:w-auto sm:shrink lg:flex-1 lg:px-0"
                >
                  <div className="flex flex-col items-start lg:items-center lg:text-center">
                    <span
                      className={[
                        "relative z-[1] flex h-9 w-9 items-center justify-center border text-[0.65rem] transition-colors duration-500",
                        on
                          ? "border-cyan bg-cyan/15 text-cyan"
                          : "border-white/20 bg-bg-0/60 text-fg-muted",
                      ].join(" ")}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={[
                        "mt-3 text-xs font-medium tracking-[0.1em]",
                        on ? "text-fg" : "text-fg-muted",
                      ].join(" ")}
                    >
                      {node}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
