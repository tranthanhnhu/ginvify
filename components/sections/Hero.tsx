"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal, Stagger } from "@/components/animation/Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 sm:items-center sm:pb-0 sm:pt-0"
    >
      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <BlurToSharp as="h1" className="type-display text-fg" delay={0.15}>
            Engineering Intelligence.
          </BlurToSharp>

          <Reveal
            as="p"
            className="mt-6 max-w-xl text-fg-muted"
            delay={0.35}
          >
            We design and build web applications, AI systems, automation and
            SaaS products.
          </Reveal>

          <Stagger className="mt-10 flex flex-wrap gap-3" delay={0.5}>
            <Button href="#contact" variant="primary">
              START A PROJECT
            </Button>
            <Button href="#services" variant="secondary">
              EXPLORE SERVICES
            </Button>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
