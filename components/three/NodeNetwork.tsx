"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { colors } from "@/lib/tokens";

type NodeNetworkProps = {
  positionsRef: React.MutableRefObject<Float32Array | null>;
  count: number;
  density?: number;
  visible?: boolean;
  accent?: string;
};

export function NodeNetwork({
  positionsRef,
  count,
  density = 0.55,
  visible = true,
  accent = colors.cyan,
}: NodeNetworkProps) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const maxPairs = Math.min(Math.floor(count * density * 2), 1200);

  const { geometry, pairBuffer } = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pairBuffer = new Float32Array(maxPairs * 2 * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(pairBuffer, 3));
    geo.setDrawRange(0, 0);
    return { geometry: geo, pairBuffer };
  }, [maxPairs]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame(() => {
    if (!visible || !positionsRef.current || !lineRef.current) {
      geometry.setDrawRange(0, 0);
      return;
    }

    const pos = positionsRef.current;
    const threshold = 0.55 + (1 - density) * 0.35;
    const thresholdSq = threshold * threshold;
    let pairCount = 0;

    // Sparse neighbor check: stride sampling for performance
    const stride = Math.max(1, Math.floor(count / 180));
    for (let i = 0; i < count && pairCount < maxPairs; i += stride) {
      const ix = i * 3;
      const ax = pos[ix]!;
      const ay = pos[ix + 1]!;
      const az = pos[ix + 2]!;
      for (let j = i + stride; j < count && pairCount < maxPairs; j += stride) {
        const jx = j * 3;
        const dx = ax - pos[jx]!;
        const dy = ay - pos[jx + 1]!;
        const dz = az - pos[jx + 2]!;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < thresholdSq && d2 > 0.01) {
          const o = pairCount * 6;
          pairBuffer[o] = ax;
          pairBuffer[o + 1] = ay;
          pairBuffer[o + 2] = az;
          pairBuffer[o + 3] = pos[jx]!;
          pairBuffer[o + 4] = pos[jx + 1]!;
          pairBuffer[o + 5] = pos[jx + 2]!;
          pairCount++;
        }
      }
    }

    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.needsUpdate = true;
    geometry.setDrawRange(0, pairCount * 2);
  });

  if (!visible) return null;

  return (
    <lineSegments ref={lineRef} geometry={geometry} frustumCulled={false}>
      <lineBasicMaterial
        color={accent}
        transparent
        opacity={0.28}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}
