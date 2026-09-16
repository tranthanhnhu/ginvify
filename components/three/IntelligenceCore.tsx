"use client";

import { useMemo, useRef } from "react";
import { GLogoParticles } from "@/components/three/GLogoParticles";
import { NodeNetwork } from "@/components/three/NodeNetwork";
import { DataStream } from "@/components/three/DataStream";
import { CameraController } from "@/components/three/CameraController";
import {
  morphForSection,
  type StorySection,
  type TechGroup,
} from "@/lib/three/morphTargets";
import { colors, particleCounts } from "@/lib/tokens";

export type IntelligenceCoreProps = {
  scrollProgress?: number;
  ideaProgress?: number;
  sectionProgress?: number;
  activeSection?: StorySection;
  servicesHover?: number | null;
  techGroup?: TechGroup | null;
  isMobile?: boolean;
  reducedMotion?: boolean;
  paused?: boolean;
};

export function IntelligenceCore({
  scrollProgress = 0,
  ideaProgress = 0,
  sectionProgress = 0,
  activeSection = "hero",
  servicesHover = null,
  techGroup = null,
  isMobile = false,
  reducedMotion = false,
  paused = false,
}: IntelligenceCoreProps) {
  const positionsRef = useRef<Float32Array | null>(null);
  const count = isMobile ? particleCounts.mobile : particleCounts.desktop;

  const morphState = useMemo(() => {
    if (reducedMotion) {
      return morphForSection(activeSection === "hero" ? "idea" : activeSection);
    }
    if (activeSection === "hero") {
      if (ideaProgress > 0.2) return "network" as const;
      if (scrollProgress > 0.45) return "cluster" as const;
      return "network" as const;
    }
    return morphForSection(activeSection);
  }, [activeSection, ideaProgress, reducedMotion, scrollProgress]);

  const connectionDensity = useMemo(() => {
    if (isMobile) return 0.32;
    switch (activeSection) {
      case "idea":
        return 0.55 + ideaProgress * 0.2;
      case "services":
        return servicesHover !== null ? 0.62 : 0.48;
      case "ai":
        return 0.5 + sectionProgress * 0.2;
      case "automation":
        return 0.4 + sectionProgress * 0.25;
      case "engineering":
        return 0.7;
      case "technology":
        return techGroup ? 0.55 : 0.38;
      case "experiments":
        return 0.28;
      case "about":
        return 0.35;
      default:
        return 0.45 + ideaProgress * 0.2;
    }
  }, [
    activeSection,
    ideaProgress,
    isMobile,
    sectionProgress,
    servicesHover,
    techGroup,
  ]);

  const accent = useMemo(() => {
    if (activeSection === "ai") return colors.cyan;
    if (activeSection === "automation") return colors.cyan;
    if (activeSection === "engineering") return colors.lime;
    if (activeSection === "services" && servicesHover !== null) {
      return servicesHover % 2 === 0 ? colors.lime : colors.cyan;
    }
    if (activeSection === "technology" && techGroup) {
      return techGroup === "ai" || techGroup === "data"
        ? colors.cyan
        : colors.lime;
    }
    if (activeSection === "idea" || ideaProgress > 0.5) return colors.lime;
    return colors.cyan;
  }, [activeSection, ideaProgress, servicesHover, techGroup]);

  const intensity = useMemo(() => {
    if (activeSection === "experiments") return 0.35;
    if (activeSection === "about") return 0.45;
    if (activeSection === "services" && servicesHover !== null) return 1;
    return 0.75 + sectionProgress * 0.2;
  }, [activeSection, sectionProgress, servicesHover]);

  if (paused) return null;

  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} intensity={0.8} color={colors.cyan} />
      <pointLight position={[-3, -1, -2]} intensity={0.45} color={colors.lime} />

      <GLogoParticles
        count={count}
        morphState={morphState}
        morphBlend={0.85 + sectionProgress * 0.15}
        reducedMotion={reducedMotion}
        scrollProgress={Math.max(scrollProgress, sectionProgress)}
        intensity={intensity}
        accent={accent}
        onPositions={(pos) => {
          positionsRef.current = pos;
        }}
      />

      <NodeNetwork
        positionsRef={positionsRef}
        count={count}
        density={connectionDensity}
        visible={!reducedMotion || activeSection !== "hero"}
        accent={accent}
      />

      {!isMobile && !reducedMotion && activeSection !== "experiments" && (
        <DataStream
          count={activeSection === "automation" ? 4 : 3}
          reducedMotion={reducedMotion}
        />
      )}

      <CameraController
        scrollProgress={Math.max(
          scrollProgress,
          ideaProgress * 0.5,
          sectionProgress * 0.7,
        )}
        reducedMotion={reducedMotion}
      />
    </group>
  );
}
