"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { useScrollProgress } from "@/lib/scroll/useScrollProgress";
import { scrollTo } from "@/lib/scroll/lenis";
import type { Locale } from "@/lib/i18n/config";

type NavLabels = {
  services: string;
  ai: string;
  technology: string;
  experiments: string;
  about: string;
  contact: string;
  cta: string;
  menu: string;
  close: string;
};

const DEFAULT_LABELS: NavLabels = {
  services: "Services",
  ai: "AI",
  technology: "Technology",
  experiments: "Experiments",
  about: "About",
  contact: "Contact",
  cta: "START A PROJECT",
  menu: "Menu",
  close: "Close",
};

type NavbarProps = {
  locale: Locale;
  labels?: NavLabels;
};

export function Navbar({ locale, labels = DEFAULT_LABELS }: NavbarProps) {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  function closeMenu() {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  const links = [
    {
      label: labels.services,
      href: isHome ? "#services" : `/${locale}/services`,
    },
    { label: labels.ai, href: isHome ? "#ai" : `/${locale}/#ai` },
    {
      label: labels.technology,
      href: isHome ? "#technology" : `/${locale}/technology`,
    },
    {
      label: labels.experiments,
      href: isHome ? "#experiments" : `/${locale}/experiments`,
    },
    { label: labels.about, href: isHome ? "#about" : `/${locale}/about` },
    {
      label: labels.contact,
      href: isHome ? "#contact" : `/${locale}/contact`,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function switchLocale(next: Locale) {
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "jp") {
      segments[1] = next;
      router.push(segments.join("/") || `/${next}`);
    } else {
      router.push(`/${next}`);
    }
  }

  function onNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollTo(href);
      setOpen(false);
    }
  }

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        ].join(" ")}
      >
        <Container>
          <div
            className={[
              "flex items-center justify-between gap-3 border transition-all duration-500 sm:gap-4",
              open
                ? "border-transparent bg-transparent backdrop-blur-none"
                : "border-white/8 bg-bg-0/70 backdrop-blur-md",
              scrolled ? "px-4 py-2.5" : "px-5 py-3.5",
            ].join(" ")}
          >
            <Link href={`/${locale}`} className="flex min-w-0 items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-g.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 shrink-0"
                aria-hidden
              />
              <span className="type-label tracking-[0.22em] text-fg">
                GINVIFY
              </span>
            </Link>

            <nav
              className="hidden items-center gap-6 lg:flex"
              aria-label="Primary"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="type-label text-fg-muted transition-colors hover:text-fg"
                  onClick={(e) => onNavClick(e, link.href)}
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
                  className={locale === "en" ? "text-fg" : "hover:text-fg"}
                  onClick={() => switchLocale("en")}
                >
                  EN
                </button>
                <span className="mx-1.5 text-fg/30">|</span>
                <button
                  type="button"
                  className={locale === "jp" ? "text-fg" : "hover:text-fg"}
                  onClick={() => switchLocale("jp")}
                >
                  日本語
                </button>
              </div>
              <Button
                href={isHome ? "#contact" : `/${locale}/contact`}
                variant="primary"
                className="!py-2.5"
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    scrollTo("#contact");
                  }
                }}
              >
                {labels.cta}
              </Button>
            </div>

            <div className="flex shrink-0 items-center gap-1 lg:hidden">
              <div
                className="type-label flex items-center gap-0.5 text-fg-muted"
                role="group"
                aria-label="Language"
              >
                <button
                  type="button"
                  className={`flex h-10 min-w-[2.25rem] items-center justify-center px-1.5 ${
                    locale === "en" ? "text-fg" : "hover:text-fg"
                  }`}
                  onClick={() => switchLocale("en")}
                >
                  EN
                </button>
                <span className="text-fg/30" aria-hidden>
                  |
                </span>
                <button
                  type="button"
                  className={`flex h-10 min-w-[2.25rem] items-center justify-center px-1.5 ${
                    locale === "jp" ? "text-fg" : "hover:text-fg"
                  }`}
                  onClick={() => switchLocale("jp")}
                >
                  JA
                </button>
              </div>
              <button
                ref={menuButtonRef}
                type="button"
                className="type-label flex h-10 min-w-[2.75rem] items-center justify-center px-2 text-fg"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? labels.close : labels.menu}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={open}
        links={links}
        ctaLabel={labels.cta}
        ctaHref={isHome ? "#contact" : `/${locale}/contact`}
        onClose={closeMenu}
      />
    </>
  );
}
