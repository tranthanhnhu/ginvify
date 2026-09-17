"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
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
  const { invalidate } = useThree();

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

  useEffect(() => {
    if (!reducedMotion) return;
    let n = 0;
    let id = 0;
    const tick = () => {
      invalidate();
      n += 1;
      if (n < 8) id = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(id);
  }, [reducedMotion, morphState, invalidate]);

  useFrame((_, delta) => {
    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const target = targets[morphState];
    const isG = morphState === "g";
    const speed = reducedMotion ? 8 : isG ? 2.4 : 1.8 + morphBlend * 0.5;
    lerpToward(arr, target, delta * speed);

    const time = performance.now() * 0.001;
    const drift = reducedMotion || isG ? 0.08 : 1;
    const scrollLift = isG ? 0 : scrollProgress * 0.2;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      arr[ix + 1]! += Math.sin(time + i * 0.05) * 0.00025 * drift;
      arr[ix]! += Math.cos(time * 0.7 + i * 0.03) * 0.00015 * drift;
      arr[ix + 1]! += scrollLift * 0.00035;
    }

    attr.needsUpdate = true;
    onPositions?.(arr);

    if (materialRef.current) {
      materialRef.current.opacity = isG
        ? 0.78 + intensity * 0.18
        : 0.4 + intensity * 0.55;
      materialRef.current.color.set(accent);
      // Smaller dots so the G reads as a letter, not a zoomed texture
      materialRef.current.size = isG
        ? reducedMotion
          ? 0.036
          : 0.03
        : reducedMotion
          ? 0.045
          : 0.036 + intensity * 0.01;
    }

    if (pointsRef.current) {
      if (reducedMotion || isG) {
        pointsRef.current.rotation.y = THREE.MathUtils.lerp(
          pointsRef.current.rotation.y,
          0,
          0.08,
        );
      } else {
        const rotSpeed =
          morphState === "architecture" || morphState === "workflow"
            ? 0.02
            : morphState === "constellation"
              ? 0.035
              : 0.045;
        pointsRef.current.rotation.y =
          time * rotSpeed + scrollProgress * 0.12;
      }
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        ref={materialRef}
        color={accent}
        size={0.032}
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
