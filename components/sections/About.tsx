"use client";

import { Container } from "@/components/ui/Container";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";

export function About() {
  return (
    <section
      id="about"
      data-section="about"
      className="relative z-10 py-28 sm:py-40"
    >
      <Container narrow>
        <p className="type-label text-fg-muted">08 — ABOUT</p>
        <BlurToSharp as="h2" className="type-h1 mt-6 text-fg">
          GINVIFY is a technology company focused on software, artificial
          intelligence and intelligent automation.
        </BlurToSharp>
        <Reveal as="p" className="mt-8 text-lg text-fg-muted">
          Engineering from Vietnam. Built for global teams.
        </Reveal>
        <p className="type-label mt-12 text-cyan">
          Ho Chi Minh City, Vietnam
        </p>
      </Container>
    </section>
  );
}
