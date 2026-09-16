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
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = document.getElementById("webgl-root");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry?.isIntersecting ?? true),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div
        id="webgl-root"
        className={["absolute inset-0 bg-bg-0", className].join(" ")}
        aria-hidden
      />
    );
  }

  return (
    <div
      id="webgl-root"
      className={["absolute inset-0", className].join(" ")}
      aria-hidden
    >
      <Canvas
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0.6, 4.2], fov: 42, near: 0.1, far: 50 }}
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
            reducedMotion={reducedMotion}
            paused={!visible}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
