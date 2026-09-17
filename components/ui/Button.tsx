import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    variant?: Variant;
    children: ReactNode;
  };

const variants: Record<Variant, string> = {
  primary:
    "border border-[#a8cf4a]/55 bg-[#a8cf4a]/15 !text-[#c5db7a] font-semibold hover:bg-[#a8cf4a]/25 hover:border-[#a8cf4a]/80 focus-visible:outline-[#a8cf4a]",
  secondary:
    "border border-fg/25 text-fg/90 hover:border-fg/50 hover:text-fg focus-visible:outline-cyan",
  ghost: "text-fg-muted hover:text-fg focus-visible:outline-fg",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2",
    "type-label px-5 py-3 transition-colors duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:opacity-40 disabled:pointer-events-none",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    const { type: _type, ...rest } = props;
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
