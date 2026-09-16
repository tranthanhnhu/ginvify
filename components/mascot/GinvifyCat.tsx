"use client";

import { useEffect, useId, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/scroll/useScrollProgress";

type Variant = "idle" | "blink" | "wave";

type GinvifyCatProps = {
  variant?: Variant;
  className?: string;
};

/**
 * Quiet geometric line-art cat. Only for 404 / empty states / approved spots.
 * Never import into components/three or homepage scroll-story sections
 * (except Experiments empty branch).
 */
export function GinvifyCat({
  variant = "idle",
  className = "",
}: GinvifyCatProps) {
  const reduced = usePrefersReducedMotion();
  const titleId = useId();
  const [blink, setBlink] = useState(false);
  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (variant === "blink" || variant === "idle") {
      const id = window.setInterval(() => {
        setBlink(true);
        window.setTimeout(() => setBlink(false), 160);
      }, 3200);
      return () => window.clearInterval(id);
    }
  }, [reduced, variant]);

  useEffect(() => {
    if (reduced || variant !== "wave") return;
    const id = window.setInterval(() => {
      setWave(true);
      window.setTimeout(() => setWave(false), 600);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduced, variant]);

  const eyeScaleY = !reduced && blink ? 0.15 : 1;
  const pawRotate = !reduced && wave ? -18 : 0;

  return (
    <svg
      className={["h-28 w-28 text-fg", className].join(" ")}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>
        Ginvify cat — a minimal geometric line-art companion
      </title>
      {/* body */}
      <ellipse
        cx="60"
        cy="72"
        rx="28"
        ry="22"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* head */}
      <circle
        cx="60"
        cy="42"
        r="18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* ears */}
      <path
        d="M46 30 L42 16 L54 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M74 30 L78 16 L66 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* ear nodes */}
      <circle cx="42" cy="16" r="2" fill="#B7FF3C" />
      <circle cx="78" cy="16" r="2" fill="#5CE1E6" />
      {/* eyes */}
      <g style={{ transformOrigin: "52px 42px", transform: `scaleY(${eyeScaleY})` }}>
        <circle cx="52" cy="42" r="2.2" fill="currentColor" />
      </g>
      <g style={{ transformOrigin: "68px 42px", transform: `scaleY(${eyeScaleY})` }}>
        <circle cx="68" cy="42" r="2.2" fill="currentColor" />
      </g>
      {/* nose */}
      <circle cx="60" cy="48" r="1.2" fill="#B7FF3C" />
      {/* paws */}
      <circle cx="46" cy="90" r="5" stroke="currentColor" strokeWidth="1.5" />
      <g
        style={{
          transformOrigin: "74px 90px",
          transform: `rotate(${pawRotate}deg)`,
          transition: "transform 0.35s ease",
        }}
      >
        <circle cx="74" cy="90" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="74" cy="90" r="1.5" fill="#5CE1E6" />
      </g>
      <circle cx="46" cy="90" r="1.5" fill="#B7FF3C" />
      {/* tail */}
      <path
        d="M86 70 C102 62 108 78 98 88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="98" cy="88" r="2" fill="#5CE1E6" />
    </svg>
  );
}
