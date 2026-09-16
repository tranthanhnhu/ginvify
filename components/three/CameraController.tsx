"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CameraControllerProps = {
  scrollProgress?: number;
  reducedMotion?: boolean;
};

export function CameraController({
  scrollProgress = 0,
  reducedMotion = false,
}: CameraControllerProps) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const spherical = useRef({ theta: 0.35, phi: 1.25, radius: 4.2 });

  useFrame((_, delta) => {
    const s = spherical.current;

    if (!reducedMotion) {
      s.theta += delta * 0.08;
      s.theta += pointer.x * delta * 0.15;
      s.phi = THREE.MathUtils.lerp(s.phi, 1.25 - pointer.y * 0.12, 0.05);
    }

    const radius = THREE.MathUtils.lerp(4.2, 3.1, scrollProgress);
    const lookY = THREE.MathUtils.lerp(0, 0.35, scrollProgress);

    const x = radius * Math.sin(s.phi) * Math.cos(s.theta);
    const y = radius * Math.cos(s.phi) + lookY * 0.2;
    const z = radius * Math.sin(s.phi) * Math.sin(s.theta);

    camera.position.lerp(new THREE.Vector3(x, y, z), reducedMotion ? 1 : 0.06);
    target.current.set(0, lookY, 0);
    camera.lookAt(target.current);
  });

  return null;
}
