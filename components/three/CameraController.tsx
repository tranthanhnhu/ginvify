"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CameraControllerProps = {
  scrollProgress?: number;
  reducedMotion?: boolean;
  isMobile?: boolean;
  lockOrbit?: boolean;
};

export function CameraController({
  scrollProgress = 0,
  reducedMotion = false,
  isMobile = false,
  lockOrbit = false,
}: CameraControllerProps) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const spherical = useRef({
    theta: Math.PI / 2,
    phi: 1.35,
    radius: 7.2,
  });
  const acc = useRef(0);

  useFrame((_, delta) => {
    if (isMobile) {
      acc.current += delta;
      if (acc.current < 1 / 30) return;
      acc.current = 0;
    }

    const s = spherical.current;
    const orbit = lockOrbit || reducedMotion ? 0 : isMobile ? 0.03 : 0.07;
    const pointerGain =
      lockOrbit || reducedMotion || isMobile ? 0 : 0.12;

    if (!reducedMotion && !lockOrbit) {
      s.theta += delta * orbit;
      s.theta += pointer.x * delta * pointerGain;
      s.phi = THREE.MathUtils.lerp(
        s.phi,
        1.3 - (isMobile ? 0 : pointer.y * 0.1),
        0.05,
      );
    } else if (lockOrbit) {
      s.theta = THREE.MathUtils.lerp(s.theta, Math.PI / 2, 0.1);
      s.phi = THREE.MathUtils.lerp(s.phi, 1.35, 0.1);
    }

    // Medium G: fully visible, neither tiny nor edge-cropped
    const gRadius = isMobile ? 5.9 : 6.8;
    const baseRadius = lockOrbit ? gRadius : isMobile ? 5.2 : 4.8;
    const nearRadius = lockOrbit ? gRadius * 0.97 : 3.5;
    const radius = THREE.MathUtils.lerp(baseRadius, nearRadius, scrollProgress);
    const lookY = lockOrbit
      ? isMobile
        ? 0.35
        : 0.05
      : THREE.MathUtils.lerp(0, 0.22, scrollProgress);

    const x = radius * Math.sin(s.phi) * Math.cos(s.theta);
    const y = radius * Math.cos(s.phi) + lookY * 0.12;
    const z = radius * Math.sin(s.phi) * Math.sin(s.theta);

    camera.position.lerp(
      new THREE.Vector3(x, y, z),
      reducedMotion || lockOrbit ? 0.16 : 0.06,
    );
    target.current.set(
      lockOrbit && !isMobile ? 0.55 : 0,
      lookY,
      0,
    );
    camera.lookAt(target.current);
  });

  return null;
}
