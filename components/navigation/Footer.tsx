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
    <footer className="relative z-10 mt-8 border-t border-white/10 bg-bg-0/90">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.2em] text-fg">
            GINVIFY
          </p>
          <p className="mt-3 max-w-xs text-sm text-fg-muted">
            {footer.location}
          </p>
          <p className="type-label mt-4 text-fg-muted">{footer.copyright}</p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-3"
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
      </Container>
    </footer>
  );
}
