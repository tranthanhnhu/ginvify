"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { colors } from "@/lib/tokens";

type DataStreamProps = {
  count?: number;
  reducedMotion?: boolean;
};

export function DataStream({ count = 3, reducedMotion = false }: DataStreamProps) {
  const group = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.8, (i - 1) * 0.4, -0.6),
        new THREE.Vector3(-0.4, 0.3 + i * 0.1, 0.4),
        new THREE.Vector3(0.6, -0.2 + i * 0.15, -0.2),
        new THREE.Vector3(1.9, (i - 1) * 0.25, 0.5),
      ]);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      const material = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? colors.cyan : colors.lime,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Line(geometry, material);
    });
  }, [count]);

  useEffect(() => {
    return () => {
      lines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
    };
  }, [lines]);

  useFrame(({ clock }) => {
    if (reducedMotion || !group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * 0.6 + i) * 0.05;
      const mat = (child as THREE.Line).material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + Math.sin(t * 1.2 + i) * 0.08;
    });
  });

  return (
    <group ref={group}>
      {lines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
}
