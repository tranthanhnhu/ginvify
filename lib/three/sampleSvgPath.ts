/**
 * Sample evenly spaced points along an SVG path string.
 * Works in the browser (Path2D + Canvas) and returns XYZ coords centered at origin.
 */

export type SampledPoint = { x: number; y: number; z: number };

const G_PATH =
  "M72 28 C64 18 52 12 40 12 C22 12 10 26 10 44 C10 66 24 88 50 88 C68 88 82 76 86 58 L86 48 L52 48 L52 58 L74 58 C70 68 62 74 50 74 C34 74 24 62 24 44 C24 30 32 22 40 22 C48 22 56 26 62 32 Z";

function hash(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Approximate arc-length sampling via dense polyline of cubic segments. */
function approximatePathPoints(path: string, steps = 400): { x: number; y: number }[] {
  // Fallback parametric G if Path2D unavailable (SSR / tests)
  if (typeof Path2D === "undefined" || typeof document === "undefined") {
    return fallbackGPoints(steps);
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return fallbackGPoints(steps);

  const p = new Path2D(path);
  // Use path bounds approximation by sampling with getPoint-like walk:
  // Canvas has no getPointAtLength — use SVGPathElement when available.
  const svgNS = "http://www.w3.org/2000/svg";
  const svgPath = document.createElementNS(svgNS, "path");
  svgPath.setAttribute("d", path);
  const length = svgPath.getTotalLength();
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < steps; i++) {
    const pt = svgPath.getPointAtLength((i / steps) * length);
    pts.push({ x: pt.x, y: pt.y });
  }
  // silence unused Path2D in some bundlers
  void p;
  return pts;
}

function fallbackGPoints(count: number) {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / count;
    // Outer arc of a G
    const angle = Math.PI * 0.15 + t * Math.PI * 1.7;
    const r = 28 + Math.sin(t * Math.PI) * 4;
    let x = 50 + Math.cos(angle) * r;
    let y = 50 + Math.sin(angle) * r;
    // horizontal bar of G for last portion
    if (t > 0.72) {
      const u = (t - 0.72) / 0.28;
      x = 50 + u * 28;
      y = 50 + Math.sin(u * Math.PI) * 2;
    }
    pts.push({ x, y });
  }
  return pts;
}

export function sampleSvgPath(
  count: number,
  path = G_PATH,
  scale = 0.045,
): Float32Array {
  const dense = approximatePathPoints(path, Math.max(count * 2, 200));
  const positions = new Float32Array(count * 3);

  // center
  let cx = 0;
  let cy = 0;
  for (const p of dense) {
    cx += p.x;
    cy += p.y;
  }
  cx /= dense.length;
  cy /= dense.length;

  for (let i = 0; i < count; i++) {
    const src = dense[Math.floor((i / count) * dense.length)]!;
    const jitter = (hash(i) - 0.5) * 0.08;
    const zJitter = (hash(i + 99) - 0.5) * 0.35;
    positions[i * 3] = (src.x - cx) * scale + jitter;
    positions[i * 3 + 1] = -(src.y - cy) * scale + jitter * 0.5;
    positions[i * 3 + 2] = zJitter;
  }

  return positions;
}

export { G_PATH };
