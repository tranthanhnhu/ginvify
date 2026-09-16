"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";
import { scrollTo } from "@/lib/scroll/lenis";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "AI", href: "#ai" },
  { label: "Technology", href: "#technology" },
  { label: "Experiments", href: "#experiments" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "JA">("EN");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        ].join(" ")}
      >
        <Container>
          <div
            className={[
              "flex items-center justify-between gap-4 border border-white/8 bg-bg-0/70 backdrop-blur-md transition-all duration-500",
              scrolled ? "px-4 py-2.5" : "px-5 py-3.5",
            ].join(" ")}
          >
            <a
              href="#hero"
              className="flex items-center gap-2.5"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
            >
              {/* Static G logotype — particle G is reserved for the 3D scene */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-g.svg" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="type-label tracking-[0.22em] text-fg">
                GINVIFY
              </span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="type-label text-fg-muted transition-colors hover:text-fg"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <div
                className="type-label text-fg-muted"
                role="group"
                aria-label="Language"
              >
                <button
                  type="button"
                  className={lang === "EN" ? "text-fg" : "hover:text-fg"}
                  onClick={() => setLang("EN")}
                >
                  EN
                </button>
                <span className="mx-1.5 text-fg/30">|</span>
                <button
                  type="button"
                  className={lang === "JA" ? "text-fg" : "hover:text-fg"}
                  onClick={() => setLang("JA")}
                >
                  日本語
                </button>
              </div>
              <Button href="#contact" variant="primary" className="!py-2.5">
                START A PROJECT
              </Button>
            </div>

            <button
              type="button"
              className="type-label text-fg lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={open}
        links={LINKS}
        lang={lang}
        onLangChange={setLang}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
