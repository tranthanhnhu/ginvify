"use client";

import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { Reveal } from "@/components/animation/Reveal";
import { setScrollStore } from "@/lib/scroll/useScrollProgress";

const SERVICES = [
  {
    id: "01",
    title: "WEB APPLICATIONS",
    body: "Modern web applications built for performance, scalability and real users.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "APIs", "Cloud"],
  },
  {
    id: "02",
    title: "AI ENGINEERING",
    body: "Build intelligent applications using LLMs, RAG, agents and vision systems.",
    tags: ["LLMs", "RAG", "AI Agents", "Machine Learning", "Computer Vision", "AI APIs"],
  },
  {
    id: "03",
    title: "AUTOMATION",
    body: "Transform repetitive workflows into intelligent systems.",
    tags: [
      "Workflow automation",
      "API integration",
      "AI automation",
      "Agentic workflows",
      "Business process",
    ],
  },
  {
    id: "04",
    title: "SAAS PLATFORMS",
    body: "Design and engineer scalable SaaS products.",
    tags: [
      "Multi-tenant",
      "Authentication",
      "Subscriptions",
      "Dashboards",
      "Analytics",
      "Cloud architecture",
    ],
  },
  {
    id: "05",
    title: "LANDING PAGES",
    body: "Premium interactive landing pages focused on brand, conversion and motion.",
    tags: ["Brand", "Conversion", "Performance", "Motion", "Storytelling"],
  },
  {
    id: "06",
    title: "DIGITAL PRODUCTS",
    body: "From idea to production — discovery through deployment and optimization.",
    tags: [
      "Discovery",
      "UI/UX",
      "Prototype",
      "MVP",
      "Engineering",
      "Deployment",
    ],
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      data-section="services"
      className="relative z-10 py-28 sm:py-36 before:pointer-events-none before:absolute before:inset-0 before:bg-bg-0/55"
    >
      <Container className="relative">
        <p className="type-label text-cyan">02 — SERVICES</p>
        <BlurToSharp as="h2" className="type-h1 mt-5 max-w-3xl text-fg">
          What we build.
        </BlurToSharp>
        <Reveal as="p" className="mt-5 max-w-xl text-fg-muted">
          Six capabilities. One continuous system — hover a card and the Core
          responds.
        </Reveal>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <li key={service.id}>
              <SectionPanel
                as="article"
                className="group h-full transition-colors duration-300 hover:border-lime/45 hover:bg-bg-2/85"
                onMouseEnter={() => setScrollStore({ servicesHover: index })}
                onMouseLeave={() => setScrollStore({ servicesHover: null })}
                onFocus={() => setScrollStore({ servicesHover: index })}
                onBlur={() => setScrollStore({ servicesHover: null })}
                tabIndex={0}
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
              </SectionPanel>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
