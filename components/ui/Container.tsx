import { type HTMLAttributes, type ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  narrow?: boolean;
};

export function Container({
  children,
  narrow = false,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full px-5 sm:px-8",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
