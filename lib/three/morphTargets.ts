import { sampleSvgPath } from "@/lib/three/sampleSvgPath";

export type MorphTargetName =
  | "g"
  | "cluster"
  | "network"
  | "workflow"
  | "architecture"
  | "constellation";

export type StorySection =
  | "hero"
  | "idea"
  | "services"
  | "ai"
  | "automation"
  | "engineering"
  | "technology"
  | "experiments"
  | "about"
  | "contact";

export type TechGroup = "ai" | "web" | "cloud" | "data" | "automation";

function hash(i: number, salt = 1) {
  const x = Math.sin(i * 12.9898 * salt + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function fibonacciSphere(i: number, n: number, radius: number) {
  const t = i / Math.max(n - 1, 1);
  const inclination = Math.acos(1 - 2 * t);
  const azimuth = Math.PI * (1 + Math.sqrt(5)) * i;
  return {
    x: radius * Math.sin(inclination) * Math.cos(azimuth),
    y: radius * Math.sin(inclination) * Math.sin(azimuth),
    z: radius * Math.cos(inclination),
  };
}

/** 7-column horizontal pipeline for Automation */
function workflowPoint(i: number, count: number) {
  const col = i % 7;
  const row = Math.floor(i / 7);
  const rows = Math.ceil(count / 7);
  const x = (col - 3) * 0.55;
  const y = ((row / Math.max(rows - 1, 1)) - 0.5) * 1.4;
  const z = (hash(i, 4) - 0.5) * 0.45;
  return { x, y, z };
}

/** Layered grid for Engineering architecture */
function architecturePoint(i: number, count: number) {
  const layers = 4;
  const perLayer = Math.ceil(count / layers);
  const layer = Math.floor(i / perLayer) % layers;
  const idx = i % perLayer;
  const cols = Math.ceil(Math.sqrt(perLayer));
  const r = Math.floor(idx / cols);
  const c = idx % cols;
  const x = (c / Math.max(cols - 1, 1) - 0.5) * 2.4;
  const y = (layer - 1.5) * 0.55;
  const z = (r / Math.max(cols - 1, 1) - 0.5) * 2.0;
  return { x, y: y + (hash(i, 5) - 0.5) * 0.08, z };
}

const CONSTELLATION_CENTERS: Record<TechGroup, { x: number; y: number; z: number }> = {
  ai: { x: -1.4, y: 0.9, z: 0.2 },
  web: { x: 1.3, y: 0.8, z: -0.3 },
  cloud: { x: 0.1, y: -0.2, z: 1.2 },
  data: { x: -1.1, y: -0.9, z: -0.6 },
  automation: { x: 1.2, y: -0.7, z: 0.5 },
};

const TECH_GROUPS: TechGroup[] = ["ai", "web", "cloud", "data", "automation"];

function constellationPoint(i: number, count: number) {
  const group = TECH_GROUPS[i % 5]!;
  const center = CONSTELLATION_CENTERS[group];
  const local = fibonacciSphere(Math.floor(i / 5), Math.ceil(count / 5), 0.45);
  return {
    x: center.x + local.x,
    y: center.y + local.y,
    z: center.z + local.z,
  };
}

export function buildMorphTargets(count: number) {
  const g = sampleSvgPath(count);
  const cluster = new Float32Array(count * 3);
  const network = new Float32Array(count * 3);
  const workflow = new Float32Array(count * 3);
  const architecture = new Float32Array(count * 3);
  const constellation = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const s = fibonacciSphere(i, count, 1.55 + hash(i) * 0.35);
    cluster[i * 3] = s.x * 0.85;
    cluster[i * 3 + 1] = s.y * 0.85;
    cluster[i * 3 + 2] = s.z * 0.85;

    const layer = i % 5;
    const ring = 0.6 + layer * 0.35;
    const a = (i / count) * Math.PI * 2 * 3 + layer;
    const arm = hash(i, 3) > 0.82 ? 1.4 : 1;
    network[i * 3] = Math.cos(a) * ring * arm;
    network[i * 3 + 1] = (layer - 2) * 0.28 + (hash(i, 2) - 0.5) * 0.2;
    network[i * 3 + 2] = Math.sin(a) * ring * arm;

    const w = workflowPoint(i, count);
    workflow[i * 3] = w.x;
    workflow[i * 3 + 1] = w.y;
    workflow[i * 3 + 2] = w.z;

    const ar = architecturePoint(i, count);
    architecture[i * 3] = ar.x;
    architecture[i * 3 + 1] = ar.y;
    architecture[i * 3 + 2] = ar.z;

    const c = constellationPoint(i, count);
    constellation[i * 3] = c.x;
    constellation[i * 3 + 1] = c.y;
    constellation[i * 3 + 2] = c.z;
  }

  return { g, cluster, network, workflow, architecture, constellation } as const;
}

export function getTargetArray(
  targets: ReturnType<typeof buildMorphTargets>,
  name: MorphTargetName,
) {
  return targets[name];
}

export function morphForSection(section: StorySection): MorphTargetName {
  switch (section) {
    case "hero":
      return "network";
    case "idea":
    case "services":
    case "ai":
    case "about":
      return "network";
    case "automation":
      return "workflow";
    case "engineering":
      return "architecture";
    case "technology":
      return "constellation";
    case "experiments":
      return "cluster";
    case "contact":
      return "g";
    default:
      return "network";
  }
}

export { CONSTELLATION_CENTERS, TECH_GROUPS };
