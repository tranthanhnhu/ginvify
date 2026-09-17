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
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        <SectionPanel className="max-w-4xl">
          <p className="type-label text-cyan">{automationHome.label}</p>
          <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
            {automationHome.title}
          </BlurToSharp>
          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted">
            {automationHome.body}
          </Reveal>
          <p className="mt-3 text-sm text-fg-muted">{automationHome.caption}</p>
        </SectionPanel>

        <p className="type-label mt-8 text-fg-muted sm:hidden">
          {automationHome.scrollHint}
        </p>

        <div className="relative mt-4 sm:mt-10">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg-0 to-transparent sm:hidden"
            aria-hidden
          />
          <ol className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 xl:grid-cols-7">
            {automationHome.nodes.map((node, i) => (
              <li
                key={node}
                className="w-[42%] shrink-0 snap-start sm:w-auto sm:shrink"
              >
                <div
                  className={[
                    "border bg-bg-1/80 px-3 py-5 text-center backdrop-blur-sm transition-all duration-500",
                    activeIndex >= i
                      ? "border-cyan/60 text-fg"
                      : "border-white/12 text-fg-muted",
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
        </div>
      </Container>
    </section>
  );
}
