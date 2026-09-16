"use client";

import { type ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setScrollStore } from "@/lib/scroll/useScrollProgress";
import type { StorySection } from "@/lib/three/morphTargets";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () =>
    import("@/components/three/SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false },
);

const SECTIONS: StorySection[] = [
  "hero",
  "idea",
  "services",
  "ai",
  "automation",
  "engineering",
  "technology",
  "experiments",
  "about",
  "contact",
];

export function ScrollStory({ children }: { children: ReactNode }) {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-section='hero']");
    const idea = document.querySelector<HTMLElement>("[data-section='idea']");
    if (!hero || !idea) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          setScrollStore({ scrolled: self.scroll() > 40 });
        },
      });

      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        endTrigger: idea,
        end: "center center",
        scrub: reduced ? false : 0.6,
        onUpdate: (self) => {
          setScrollStore({
            progress: self.progress,
            // Keep hero as active while this scrub range owns the morph
            ...(self.progress < 0.98
              ? { activeSection: "hero" as const, sectionProgress: self.progress }
              : {}),
          });
        },
        onEnter: () => setScrollStore({ activeSection: "hero" }),
        onEnterBack: () =>
          setScrollStore({ activeSection: "hero", progress: 0 }),
        onLeaveBack: () =>
          setScrollStore({ activeSection: "hero", progress: 0 }),
      });

      ScrollTrigger.create({
        trigger: idea,
        start: "top 80%",
        end: "bottom bottom",
        scrub: reduced ? false : 0.5,
        onUpdate: (self) => {
          setScrollStore({ ideaProgress: self.progress });
        },
      });

      if (!reduced) {
        ScrollTrigger.create({
          trigger: idea,
          start: "top top",
          end: "+=40%",
          pin: true,
          pinSpacing: true,
        });
      }

      SECTIONS.forEach((id) => {
        const el = document.querySelector<HTMLElement>(`[data-section='${id}']`);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 70%",
          end: "bottom 30%",
          scrub: reduced ? false : true,
          onEnter: () => setScrollStore({ activeSection: id }),
          onEnterBack: () => setScrollStore({ activeSection: id }),
          onUpdate: (self) => {
            if (self.isActive) {
              setScrollStore({
                activeSection: id,
                sectionProgress: self.progress,
              });
            }
          },
        });
      });
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    // Refresh after layout settles (dynamic sections)
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative isolate">
      <div className="pointer-events-none fixed inset-0 z-0 h-[100svh] w-full">
        <SceneCanvas />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-0/20 via-transparent to-bg-0/55" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
