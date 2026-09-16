"use client";

import {
  Children,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  mode?: "block" | "words" | "lines";
  className?: string;
  delay?: number;
};

export function Reveal({
  children,
  as: Tag = "div",
  mode = "block",
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(el, { clearProps: "all", opacity: 1, y: 0, clipPath: "none" });
      return;
    }

    const targets =
      mode === "words" || mode === "lines"
        ? el.querySelectorAll("[data-reveal-unit]")
        : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          y: mode === "block" ? 28 : "110%",
          opacity: mode === "block" ? 0 : 1,
          clipPath:
            mode === "block" ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0 0)",
          duration: 1.05,
          delay,
          ease: "power3.out",
          stagger: mode === "block" ? 0 : 0.06,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, mode]);

  if (mode === "words" && typeof children === "string") {
    const words = children.split(" ");
    return (
      <Tag
        ref={ref as never}
        className={["overflow-hidden", className].join(" ")}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden">
            <span data-reveal-unit className="inline-block pr-[0.3em]">
              {word}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function Stagger({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = el.querySelectorAll("[data-stagger-item]");
    if (!items.length) return;

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child) => (
        <div data-stagger-item>{child}</div>
      ))}
    </div>
  );
}
