export const colors = {
  bg0: "#050607",
  bg1: "#0A0D10",
  bg2: "#11161A",
  lime: "#B7FF3C",
  cyan: "#5CE1E6",
  fg: "#F2F4F5",
  fgMuted: "#9AA3A8",
} as const;

export const typeScale = {
  display: "var(--type-display)",
  h1: "var(--type-h1)",
  h2: "var(--type-h2)",
  body: "var(--type-body)",
  label: "var(--type-label)",
} as const;

export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  6: 24,
  8: 32,
  12: 48,
  16: 64,
  24: 96,
  32: 128,
} as const;

export const particleCounts = {
  desktop: 800,
  mobile: 250,
} as const;
