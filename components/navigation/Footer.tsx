"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import type { Locale } from "@/lib/i18n/config";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const { footer, nav } = useDictionary();

  return (
    <footer className="relative z-10 mt-8 border-t border-white/10 bg-bg-0 pb-[env(safe-area-inset-bottom,0px)]">
      <Container className="py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-display text-base tracking-[0.22em] text-fg">
              GINVIFY
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="type-label text-fg-muted/60">{footer.location}</p>
            <address className="mt-3 not-italic">
              <p className="whitespace-pre-line text-sm leading-relaxed text-fg/80">
                {footer.address}
              </p>
            </address>
            <a
              href={`tel:${footer.phone.replace(/\s/g, "")}`}
              className="mt-4 inline-block text-sm text-fg-muted transition-colors hover:text-cyan"
            >
              {footer.phone}
            </a>
          </div>

          <nav
            className="flex flex-col gap-3 md:col-span-3 md:items-end"
            aria-label="Footer"
          >
            <Link
              href={`/${locale}/services`}
              className="type-label text-fg-muted transition-colors hover:text-fg"
            >
              {nav.services}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="type-label text-fg-muted transition-colors hover:text-fg"
            >
              {nav.about}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="type-label text-fg-muted transition-colors hover:text-fg"
            >
              {nav.contact}
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/8 pt-6">
          <p className="type-label text-fg-muted/45">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
