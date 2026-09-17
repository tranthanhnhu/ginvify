"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { IntelligenceCore } from "@/components/three/IntelligenceCore";
import {
  useIsMobile,
  usePrefersReducedMotion,
  useScrollProgress,
} from "@/lib/scroll/useScrollProgress";

type SceneCanvasProps = {
  className?: string;
};

export function SceneCanvas({ className = "" }: SceneCanvasProps) {
  const {
    progress,
    ideaProgress,
    activeSection,
    sectionProgress,
    servicesHover,
    techGroup,
  } = useScrollProgress();
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1024) && !isMobile;
  const reducedMotion = usePrefersReducedMotion();
  const [pageVisible, setPageVisible] = useState(true);
  const [mainVisible, setMainVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    let cancelled = false;
    const start = () => {
      if (!cancelled) setReady(true);
    };

    const onInteract = () => start();
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    window.addEventListener("pointerdown", onInteract, { once: true });

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start, { timeout: 2500 });
    } else {
      timeoutId = globalThis.setTimeout(start, 1800);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("pointerdown", onInteract);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const onVis = () => setPageVisible(!document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);

    const main = document.querySelector("main");
    let io: IntersectionObserver | undefined;
    if (main) {
      io = new IntersectionObserver(
        ([entry]) => setMainVisible(entry?.isIntersecting ?? true),
        { threshold: 0.02 },
      );
      io.observe(main);
    }

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
    };
  }, [ready]);

  if (!mounted || !ready) {
    return (
      <div
        id="webgl-root"
        className={["absolute inset-0 bg-bg-0", className].join(" ")}
        aria-hidden
      />
    );
  }

  const paused = !pageVisible || !mainVisible || reducedMotion;

  return (
    <div
      id="webgl-root"
      className={["absolute inset-0", className].join(" ")}
      aria-hidden
    >
      <Canvas
        dpr={isMobile ? [1, 1.15] : isTablet ? [1, 1.35] : [1, 1.5]}
        frameloop={paused ? "never" : "always"}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance",
          stencil: false,
          depth: true,
        }}
        camera={{
          position: [0, 0.6, 4.2],
          fov: isMobile ? 48 : 42,
          near: 0.1,
          far: 50,
        }}
        style={{ width: "100%", height: "100%", background: "#050607" }}
      >
        <Suspense fallback={null}>
          <IntelligenceCore
            scrollProgress={progress}
            ideaProgress={ideaProgress}
            sectionProgress={sectionProgress}
            activeSection={activeSection}
            servicesHover={servicesHover}
            techGroup={techGroup}
            isMobile={isMobile}
            isTablet={isTablet}
            reducedMotion={reducedMotion}
            paused={paused}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
