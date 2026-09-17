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
      idleId = window.requestIdleCallback(start, { timeout: 1800 });
    } else {
      timeoutId = globalThis.setTimeout(start, 900);
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

  const suspended = !pageVisible || !mainVisible;
  const frameloop = suspended
    ? "never"
    : reducedMotion
      ? "demand"
      : "always";

  return (
    <div
      id="webgl-root"
      className={["absolute inset-0", className].join(" ")}
      aria-hidden
    >
      {/* First-paint brand mark until WebGL is ready */}
      <div
        className={[
          "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-700",
          mounted && ready ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-g.svg"
          alt=""
          width={160}
          height={160}
          className="h-[min(36vw,9rem)] w-[min(36vw,9rem)] opacity-40"
        />
      </div>

      {mounted && ready ? (
        <Canvas
          dpr={isMobile ? [1, 1.15] : isTablet ? [1, 1.35] : [1, 1.5]}
          frameloop={frameloop}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: isMobile ? "low-power" : "high-performance",
            stencil: false,
            depth: true,
          }}
          camera={{
            position: [0, 0.3, isMobile ? 5.9 : 6.8],
            fov: isMobile ? 44 : 36,
            near: 0.1,
            far: 80,
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
              suspend={suspended}
            />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
