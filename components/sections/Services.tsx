"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { setScrollStore } from "@/lib/scroll/useScrollProgress";
import type { Locale } from "@/lib/i18n/config";

export function Services() {
  const { servicesHome } = useDictionary();
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] === "jp" ? "jp" : "en") as Locale;

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
        <Reveal as="p" className="mt-5 max-w-xl text-fg-muted">
          {servicesHome.body}
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {servicesHome.items.map((service, index) => (
            <li key={service.id}>
              <SectionPanel
                as="article"
                className="group h-full transition-colors duration-300 hover:border-lime/45 hover:bg-bg-2/85 focus-within:border-lime/45"
                onPointerEnter={() => setScrollStore({ servicesHover: index })}
                onPointerLeave={() => setScrollStore({ servicesHover: null })}
                onFocus={() => setScrollStore({ servicesHover: index })}
                onBlur={() => setScrollStore({ servicesHover: null })}
                tabIndex={0}
              >
                <p className="type-label text-fg-muted transition-colors group-hover:text-lime group-focus-within:text-lime">
                  {service.id}
                </p>
                <h3 className="mt-4 text-lg font-medium tracking-tight text-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {service.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/15 bg-bg-0/40 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-fg-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="type-label mt-6 inline-flex text-cyan transition-colors hover:text-lime"
                >
                  {servicesHome.viewService} →
                </Link>
              </SectionPanel>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
