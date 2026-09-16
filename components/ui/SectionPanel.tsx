import { type ReactNode } from "react";

type SectionPanelProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
  padded?: boolean;
  id?: string;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

/**
 * Readable surface over the WebGL backdrop — border + translucent panel.
 */
export function SectionPanel({
  children,
  className = "",
  as = "div",
  padded = true,
  ...props
}: SectionPanelProps) {
  const classes = [
    "border border-white/12 bg-bg-1/80 backdrop-blur-sm",
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
