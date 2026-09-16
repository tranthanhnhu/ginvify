import { type HTMLAttributes, type ReactNode } from "react";

type SectionPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  as?: "div" | "article" | "section" | "li";
  padded?: boolean;
};

/**
 * Readable surface over the WebGL backdrop — border + translucent panel.
 */
export function SectionPanel({
  children,
  className = "",
  as: Tag = "div",
  padded = true,
  ...props
}: SectionPanelProps) {
  return (
    <Tag
      className={[
        "border border-white/12 bg-bg-1/80 backdrop-blur-sm",
        padded ? "p-6 sm:p-8" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
