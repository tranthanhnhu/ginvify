"use client";

import { Container } from "@/components/ui/Container";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";

export function Idea() {
  return (
    <section
      id="idea"
      data-section="idea"
      className="relative z-10 flex min-h-[100svh] items-center py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-bg-0/35" />

      <Container className="relative">
        <p className="type-label text-cyan">01 — IDEA</p>

        <BlurToSharp as="h2" className="type-h1 mt-6 max-w-4xl text-fg">
          Every product starts with an idea.
        </BlurToSharp>

        <Reveal
          as="p"
          mode="words"
          className="mt-16 type-display text-lime/90"
        >
          IDEA
        </Reveal>

        <p className="mt-8 max-w-md text-fg-muted">
          The particle field is the same system that began as the G — now the
          space an idea occupies before it becomes architecture.
        </p>
      </Container>
    </section>
  );
}
