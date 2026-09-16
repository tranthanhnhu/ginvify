"use client";

import { Button } from "@/components/ui/Button";
import { scrollTo } from "@/lib/scroll/lenis";

type Link = { label: string; href: string };

type MobileMenuProps = {
  open: boolean;
  links: readonly Link[];
  lang: "EN" | "JA";
  onLangChange: (lang: "EN" | "JA") => void;
  onClose: () => void;
};

export function MobileMenu({
  open,
  links,
  lang,
  onLangChange,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal={open}
      aria-label="Menu"
      hidden={!open}
      // Prefer inert when closed so focusable children are skipped
      {...(!open ? { inert: true } : {})}
      className={[
        "fixed inset-0 z-40 bg-bg-0/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {links.map((link, i) => (
            <a
              key={link.href + link.label}
              href={link.href}
              tabIndex={open ? 0 : -1}
              className={[
                "type-h2 text-fg transition-transform duration-500",
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

        <div className="flex flex-col gap-6">
          <div
            className="type-label text-fg-muted"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              className={lang === "EN" ? "text-fg" : ""}
              onClick={() => onLangChange("EN")}
            >
              EN
            </button>
            <span className="mx-2 text-fg/30">|</span>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              className={lang === "JA" ? "text-fg" : ""}
              onClick={() => onLangChange("JA")}
            >
              日本語
            </button>
          </div>
          <Button
            href="#contact"
            tabIndex={open ? 0 : -1}
            onClick={onClose}
            className="w-full"
          >
            START A PROJECT
          </Button>
        </div>
      </div>
    </div>
  );
}
