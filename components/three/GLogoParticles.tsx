"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  buildMorphTargets,
  type MorphTargetName,
} from "@/lib/three/morphTargets";
import { colors } from "@/lib/tokens";

export type GLogoParticlesProps = {
  count: number;
  morphState: MorphTargetName;
  morphBlend?: number;
  reducedMotion?: boolean;
  scrollProgress?: number;
  intensity?: number;
  accent?: string;
  onPositions?: (positions: Float32Array) => void;
};

export function GLogoParticles({
  count,
  morphState,
  morphBlend = 1,
  reducedMotion = false,
  scrollProgress = 0,
  intensity = 1,
  accent = colors.lime,
  onPositions,
}: GLogoParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const targets = useMemo(() => buildMorphTargets(count), [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(targets.g);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [targets]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame((_, delta) => {
    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const target = targets[morphState];
    // Scroll is the source of truth — no autoplay intro dissolve
    const speed = reducedMotion ? 6 : 1.8 + morphBlend * 0.5;
    lerpToward(arr, target, delta * speed);

    const time = performance.now() * 0.001;
    const drift = reducedMotion ? 0 : morphState === "g" ? 0.35 : 1;
    const scrollLift = scrollProgress * 0.2;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      arr[ix + 1]! += Math.sin(time + i * 0.05) * 0.00025 * drift;
      arr[ix]! += Math.cos(time * 0.7 + i * 0.03) * 0.00015 * drift;
      arr[ix + 1]! += scrollLift * 0.00035;
    }

    attr.needsUpdate = true;
    onPositions?.(arr);

    if (materialRef.current) {
      materialRef.current.opacity = 0.4 + intensity * 0.55;
      materialRef.current.color.set(accent);
      materialRef.current.size =
        morphState === "g"
          ? reducedMotion
            ? 0.055
            : 0.048
          : reducedMotion
            ? 0.05
            : 0.038 + intensity * 0.01;
    }

    if (pointsRef.current) {
      const rotSpeed =
        morphState === "g"
          ? 0.015
          : morphState === "architecture" || morphState === "workflow"
            ? 0.02
            : morphState === "constellation"
              ? 0.035
              : 0.045;
      pointsRef.current.rotation.y = reducedMotion
        ? 0
        : time * rotSpeed + scrollProgress * 0.12;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        ref={materialRef}
        color={accent}
        size={0.048}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function lerpToward(out: Float32Array, to: Float32Array, speed: number) {
  const s = Math.min(1, Math.max(0.02, speed * 0.055));
  for (let i = 0; i < out.length; i++) {
    out[i] = out[i]! + (to[i]! - out[i]!) * s;
  }
}
