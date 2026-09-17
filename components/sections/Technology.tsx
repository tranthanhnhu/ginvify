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

type TechnologyProps = {
  hideIntro?: boolean;
};

export function Technology({ hideIntro = false }: TechnologyProps) {
  const { technologyHome } = useDictionary();
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] === "jp" ? "jp" : "en") as Locale;

  return (
    <section
      id="technology"
      data-section="technology"
      className="relative z-10 py-section before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/50"
    >
      <Container className="relative">
        {!hideIntro && (
          <SectionPanel variant="ghost" padded={false} className="max-w-3xl">
            <p className="type-label text-cyan">{technologyHome.label}</p>
            <BlurToSharp as="h2" className="type-h1 mt-5 text-fg">
              {technologyHome.title}
            </BlurToSharp>
            <Reveal as="p" className="mt-6 max-w-xl text-fg/75">
              {technologyHome.body}
            </Reveal>
          </SectionPanel>
        )}

        <ul
          className={[
            "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
            hideIntro ? "mt-0" : "mt-10",
          ].join(" ")}
        >
          {technologyHome.groups.map((group) => (
            <li key={group.id}>
              <Link
                href={`/${locale}/technology`}
                className="block h-full min-h-[44px] border border-white/12 bg-bg-1/80 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-lime/40 focus-visible:border-cyan focus-visible:outline-none"
                onPointerEnter={() => setScrollStore({ techGroup: group.id })}
                onPointerLeave={() => setScrollStore({ techGroup: null })}
                onFocus={() => setScrollStore({ techGroup: group.id })}
                onBlur={() => setScrollStore({ techGroup: null })}
              >
                <span className="type-label text-lime">{group.label}</span>
                <p className="mt-2 text-xs text-fg-muted">{group.why}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-fg-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
