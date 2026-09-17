"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { scrollTo } from "@/lib/scroll/lenis";

type Link = { label: string; href: string };

type MobileMenuProps = {
  open: boolean;
  links: readonly Link[];
  ctaLabel: string;
  ctaHref: string;
  onClose: () => void;
};

export function MobileMenu({
  open,
  links,
  ctaLabel,
  ctaHref,
  onClose,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal={open}
      aria-label="Menu"
      hidden={!open}
      {...(!open ? { inert: true } : {})}
      className={[
        "fixed inset-0 z-40 bg-bg-0/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col justify-between px-[max(1.5rem,env(safe-area-inset-left))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pr-[max(1.5rem,env(safe-area-inset-right))] pt-[calc(var(--nav-height)+2rem)]">
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {links.map((link, i) => (
            <a
              key={link.href + link.label}
              href={link.href}
              tabIndex={open ? 0 : -1}
              className={[
                "type-h2 min-h-11 text-fg transition-transform duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  onClose();
                  scrollTo(link.href);
                } else {
                  onClose();
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href={ctaHref}
          tabIndex={open ? 0 : -1}
          onClick={(e) => {
            if (ctaHref.startsWith("#")) {
              e.preventDefault();
              onClose();
              scrollTo(ctaHref);
            } else {
              onClose();
            }
          }}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
