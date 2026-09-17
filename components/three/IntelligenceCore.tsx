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
  isTablet?: boolean;
  reducedMotion?: boolean;
  /** True when tab/main hidden — hide GPU work entirely */
  suspend?: boolean;
};

export function IntelligenceCore({
  scrollProgress = 0,
  ideaProgress = 0,
  sectionProgress = 0,
  activeSection = "hero",
  servicesHover = null,
  techGroup = null,
  isMobile = false,
  isTablet = false,
  reducedMotion = false,
  suspend = false,
}: IntelligenceCoreProps) {
  const positionsRef = useRef<Float32Array | null>(null);
  const count = isMobile
    ? particleCounts.mobile
    : isTablet
      ? particleCounts.tablet
      : particleCounts.desktop;

  const morphState = useMemo(() => {
    if (activeSection === "hero") {
      if (reducedMotion) return "g" as const;
      if (scrollProgress < 0.4) return "g" as const;
      if (scrollProgress < 0.65) return "cluster" as const;
      return "network" as const;
    }
    return morphForSection(activeSection);
  }, [activeSection, reducedMotion, scrollProgress]);

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
      case "contact":
        return 0.25 + sectionProgress * 0.2;
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
    if (activeSection === "hero" && scrollProgress < 0.4) return colors.lime;
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
    if (activeSection === "contact") return colors.lime;
    if (activeSection === "idea" || ideaProgress > 0.5) return colors.lime;
    return colors.cyan;
  }, [activeSection, ideaProgress, scrollProgress, servicesHover, techGroup]);

  const intensity = useMemo(() => {
    if (activeSection === "hero" && scrollProgress < 0.4) return 1;
    if (activeSection === "experiments") return 0.35;
    if (activeSection === "about") return 0.45;
    if (activeSection === "contact") return 1;
    if (activeSection === "services" && servicesHover !== null) return 1;
    return 0.75 + sectionProgress * 0.2;
  }, [activeSection, scrollProgress, sectionProgress, servicesHover]);

  if (suspend) return null;

  // Mobile: centered medium G above copy. Desktop: larger mark on the right.
  const showG = morphState === "g";
  const gOffsetX = showG ? (isMobile ? 0 : 1.05) : 0;
  const gOffsetY = showG ? (isMobile ? 0.65 : 0.08) : 0;
  const gScale = showG ? (isMobile ? 1.15 : 0.78) : 1;

  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} intensity={0.8} color={colors.cyan} />
      <pointLight position={[-3, -1, -2]} intensity={0.45} color={colors.lime} />

      <group position={[gOffsetX, gOffsetY, 0]} scale={gScale}>
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
          visible={morphState !== "g"}
          accent={accent}
        />

        {!isMobile &&
          !reducedMotion &&
          activeSection !== "experiments" &&
          morphState !== "g" && (
            <DataStream
              count={activeSection === "automation" ? 4 : 3}
              reducedMotion={reducedMotion}
            />
          )}
      </group>

      <CameraController
        scrollProgress={Math.max(
          scrollProgress,
          ideaProgress * 0.5,
          sectionProgress * 0.7,
        )}
        reducedMotion={reducedMotion}
        isMobile={isMobile}
        lockOrbit={morphState === "g"}
      />
    </group>
  );
}
