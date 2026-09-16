"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { StorySection, TechGroup } from "@/lib/three/morphTargets";

export type { StorySection, TechGroup };

type ScrollStore = {
  progress: number;
  heroProgress: number;
  ideaProgress: number;
  scrolled: boolean;
  activeSection: StorySection;
  sectionProgress: number;
  servicesHover: number | null;
  techGroup: TechGroup | null;
};

const listeners = new Set<() => void>();
let state: ScrollStore = {
  progress: 0,
  heroProgress: 0,
  ideaProgress: 0,
  scrolled: false,
  activeSection: "hero",
  sectionProgress: 0,
  servicesHover: null,
  techGroup: null,
};

function emit() {
  listeners.forEach((l) => l());
}

export function setScrollStore(partial: Partial<ScrollStore>) {
  state = { ...state, ...partial };
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

const serverSnapshot: ScrollStore = {
  progress: 0,
  heroProgress: 0,
  ideaProgress: 0,
  scrolled: false,
  activeSection: "hero",
  sectionProgress: 0,
  servicesHover: null,
  techGroup: null,
};

function getServerSnapshot(): ScrollStore {
  return serverSnapshot;
}

export function useScrollProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return mobile;
}
