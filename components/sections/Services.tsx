"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { setScrollStore } from "@/lib/scroll/useScrollProgress";
import { scrollTo } from "@/lib/scroll/lenis";
import type { Locale } from "@/lib/i18n/config";

export function Services() {
  const { servicesHome, nav } = useDictionary();
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] === "jp" ? "jp" : "en") as Locale;
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <section
      id="services"
      data-section="services"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/55"
    >
      <Container className="relative">
        <p className="type-label text-cyan">{servicesHome.label}</p>
        <BlurToSharp as="h2" className="type-h1 mt-5 max-w-3xl text-fg">
          {servicesHome.title}
        </BlurToSharp>
        <Reveal as="p" className="mt-5 max-w-xl text-fg/75">
          {servicesHome.body}
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {servicesHome.items.map((service, index) => (
            <li key={service.id}>
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="block h-full focus-visible:outline-none"
                onPointerEnter={() => setScrollStore({ servicesHover: index })}
                onPointerLeave={() => setScrollStore({ servicesHover: null })}
                onFocus={() => setScrollStore({ servicesHover: index })}
                onBlur={() => setScrollStore({ servicesHover: null })}
              >
                <SectionPanel
                  as="article"
                  className="group h-full transition-colors duration-300 hover:border-lime/45 hover:bg-bg-2/85"
                >
                  <p className="type-label text-fg-muted transition-colors group-hover:text-lime">
                    {service.id}
                  </p>
                  <h3 className="mt-4 text-lg font-medium tracking-tight text-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {service.body}
                  </p>
                  <p className="mt-5 text-xs tracking-[0.08em] text-fg-muted/80">
                    {service.tags.slice(0, 3).join(" · ")}
                  </p>
                  <span className="type-label mt-6 inline-flex text-cyan transition-colors group-hover:text-lime">
                    {servicesHome.viewService} →
                  </span>
                </SectionPanel>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16">
          <Button
            href={isHome ? "#contact" : `/${locale}/contact`}
            variant="primary"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollTo("#contact");
              }
            }}
          >
            {nav.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
