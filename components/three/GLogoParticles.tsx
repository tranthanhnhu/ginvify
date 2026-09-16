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
  const phase = useRef(0);
  const introDone = useRef(reducedMotion);
  const lastMorph = useRef<MorphTargetName>("g");

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

    if (!introDone.current) {
      phase.current = Math.min(1, phase.current + delta * 0.22);
      let from = targets.g;
      let to = targets.g;
      let t = 0;
      if (phase.current < 0.35) {
        from = targets.g;
        to = targets.g;
        t = 0;
      } else if (phase.current < 0.7) {
        from = targets.g;
        to = targets.cluster;
        t = (phase.current - 0.35) / 0.35;
      } else {
        from = targets.cluster;
        to = targets.network;
        t = (phase.current - 0.7) / 0.3;
        if (phase.current >= 0.99) {
          introDone.current = true;
          lastMorph.current = "network";
        }
      }
      lerpToward(arr, from, to, easeInOut(t), delta * 2.2);
    } else {
      if (lastMorph.current !== morphState) {
        lastMorph.current = morphState;
      }
      const target = targets[morphState];
      const speed = reducedMotion ? 5 : 1.4 + morphBlend;
      lerpToward(arr, arr, target, 1, delta * speed);
    }

    const time = performance.now() * 0.001;
    const drift = reducedMotion ? 0 : 1;
    const scrollLift = scrollProgress * 0.25;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      arr[ix + 1]! += Math.sin(time + i * 0.05) * 0.0003 * drift;
      arr[ix]! += Math.cos(time * 0.7 + i * 0.03) * 0.00018 * drift;
      arr[ix + 1]! += scrollLift * 0.0004;
    }

    attr.needsUpdate = true;
    onPositions?.(arr);

    if (materialRef.current) {
      materialRef.current.opacity = 0.35 + intensity * 0.6;
      materialRef.current.color.set(accent);
      materialRef.current.size = reducedMotion ? 0.05 : 0.038 + intensity * 0.01;
    }

    if (pointsRef.current) {
      const rotSpeed =
        morphState === "architecture" || morphState === "workflow"
          ? 0.02
          : morphState === "constellation"
            ? 0.035
            : 0.05;
      pointsRef.current.rotation.y = reducedMotion
        ? 0
        : time * rotSpeed + scrollProgress * 0.15;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        ref={materialRef}
        color={accent}
        size={0.042}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function lerpToward(
  out: Float32Array,
  from: Float32Array,
  to: Float32Array,
  t: number,
  speed: number,
) {
  const k = Math.min(1, Math.max(0, t));
  const s = Math.min(1, speed * 0.06);
  for (let i = 0; i < out.length; i++) {
    const desired = from[i]! * (1 - k) + to[i]! * k;
    out[i] = out[i]! + (desired - out[i]!) * s;
  }
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
