"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal, Stagger } from "@/components/animation/Reveal";
import { useDictionary } from "@/components/i18n/DictionaryProvider";

export function Hero() {
  const { hero } = useDictionary();

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-[max(3.5rem,env(safe-area-inset-bottom))] pt-[calc(var(--nav-height)+1.25rem)] sm:items-center sm:pb-0 sm:pt-0"
    >
      {/* Mobile: even bottom scrim so centered copy stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/50 to-bg-0/20 sm:hidden" />
      {/* Desktop left/text scrim — G stays bright on the right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[min(72%,42rem)] bg-gradient-to-r from-bg-0/85 via-bg-0/40 to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-bg-0/70 to-transparent sm:block" />

      <Container className="relative z-10 w-full">
        {/* Mobile: centered stack. Desktop: left brand column. */}
        <div className="mx-auto w-full max-w-md text-center sm:mx-0 sm:max-w-3xl sm:text-left">
          <BlurToSharp as="h1" className="type-display text-fg" delay={0.15}>
            {hero.headline}
          </BlurToSharp>

          <Reveal
            as="p"
            className="mx-auto mt-5 max-w-md text-base text-fg/80 sm:mx-0 sm:mt-6 sm:max-w-xl sm:text-[length:var(--type-body)]"
            delay={0.35}
          >
            {hero.body}
          </Reveal>
          <Reveal
            as="p"
            className="mx-auto mt-3 max-w-sm text-sm text-fg/65 sm:mx-0 sm:max-w-lg"
            delay={0.42}
          >
            {hero.supporting}
          </Reveal>

          <Stagger
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap"
            delay={0.5}
          >
            <Button
              href="#contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              href="#services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.ctaSecondary}
            </Button>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
