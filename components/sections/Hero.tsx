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
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-[max(4rem,env(safe-area-inset-bottom))] pt-[calc(var(--nav-height)+1.5rem)] sm:items-center sm:pb-0 sm:pt-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/40 to-transparent sm:hidden" />
      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <BlurToSharp as="h1" className="type-display text-fg" delay={0.15}>
            {hero.headline}
          </BlurToSharp>

          <Reveal
            as="p"
            className="mt-5 max-w-xl text-base text-fg-muted sm:mt-6 sm:text-[length:var(--type-body)]"
            delay={0.35}
          >
            {hero.body}
          </Reveal>
          <Reveal
            as="p"
            className="mt-3 max-w-lg text-sm text-fg-muted/90"
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
