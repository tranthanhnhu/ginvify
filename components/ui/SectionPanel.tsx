import { type ReactNode } from "react";

type SectionPanelVariant = "surface" | "intro" | "ghost";

type SectionPanelProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
  padded?: boolean;
  variant?: SectionPanelVariant;
  id?: string;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

const VARIANT_CLASS: Record<SectionPanelVariant, string> = {
  surface: "border border-white/12 bg-bg-1/80 backdrop-blur-sm",
  intro: "border border-white/10 bg-bg-1/55 backdrop-blur-sm",
  ghost: "border-0 bg-transparent backdrop-blur-none",
};

/**
 * Readable surface over the WebGL backdrop.
 * - surface: interactive cards / form / FAQ
 * - intro: light scrim when copy needs help over WebGL
 * - ghost: typography-only, no frosted box
 */
export function SectionPanel({
  children,
  className = "",
  as = "div",
  padded = true,
  variant = "surface",
  ...props
}: SectionPanelProps) {
  const classes = [
    VARIANT_CLASS[variant],
    padded ? "p-6 sm:p-8" : "",
    className,
  ].join(" ");

  if (as === "article") {
    return (
      <article className={classes} {...props}>
        {children}
      </article>
    );
  }
  if (as === "section") {
    return (
      <section className={classes} {...props}>
        {children}
      </section>
    );
  }
  if (as === "li") {
    return (
      <li className={classes} {...props}>
        {children}
      </li>
    );
  }
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
