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
        "mx-auto w-full px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:px-8 md:px-10",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
