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
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 sm:items-center sm:pb-0 sm:pt-0"
    >
      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <BlurToSharp as="h1" className="type-display text-fg" delay={0.15}>
            {hero.headline}
          </BlurToSharp>

          <Reveal as="p" className="mt-6 max-w-xl text-fg-muted" delay={0.35}>
            {hero.body}
          </Reveal>

          <Stagger className="mt-10 flex flex-wrap gap-3" delay={0.5}>
            <Button href="#contact" variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button href="#services" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
