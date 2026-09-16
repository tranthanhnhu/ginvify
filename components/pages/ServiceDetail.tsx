import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import type { Locale } from "@/lib/i18n/config";
import type { ServicePageContent } from "@/lib/content/services";
import type { ServiceSlug } from "@/lib/i18n/config";

type ServiceDetailProps = {
  locale: Locale;
  slug: ServiceSlug;
  content: ServicePageContent;
};

export function ServiceDetail({ locale, slug, content }: ServiceDetailProps) {
  return (
    <article className="pb-28 pt-32">
      <Container>
        <p className="type-label text-cyan">{slug.replace(/-/g, " ").toUpperCase()}</p>
        <BlurToSharp as="h1" className="type-h1 mt-5 max-w-4xl text-fg">
          {content.title}
        </BlurToSharp>
        <p className="mt-6 max-w-2xl text-lg text-fg-muted">{content.tagline}</p>
        <Button href={`/${locale}/contact`} variant="primary" className="mt-10">
          {content.cta}
        </Button>
      </Container>

      {content.diagram && content.diagram.length > 0 && (
        <Container className="mt-20">
          <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {content.diagram.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="type-label border border-cyan/40 px-4 py-3 text-cyan">
                  {step}
                </span>
                {i < content.diagram!.length - 1 && (
                  <span className="text-fg/30" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      )}

      <Container className="mt-24 space-y-20">
        <Block title="Problem" body={content.problem} />
        <Block title="What we build" body={content.whatWeBuild} />
        <ListBlock title="Capabilities" items={content.capabilities} />
        <ListBlock title="Technology" items={content.technology} />
        <ListBlock title="Process" items={content.process} horizontal />
        <ListBlock title="Example use cases" items={content.useCases} />

        <section>
          <h2 className="type-h2 text-fg">FAQ</h2>
          <ul className="mt-8 space-y-6">
            {content.faq.map((item) => (
              <li key={item.q} className="border-t border-white/10 pt-6">
                <h3 className="font-medium text-fg">{item.q}</h3>
                <p className="mt-2 text-fg-muted">{item.a}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-white/10 bg-bg-1/40 p-8 sm:p-12">
          <h2 className="type-h2 text-fg">{content.cta}</h2>
          <Link
            href={`/${locale}/contact`}
            className="type-label mt-6 inline-block text-lime hover:underline"
          >
            START A PROJECT →
          </Link>
        </section>
      </Container>
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="type-label text-fg-muted">{title}</h2>
      <p className="mt-4 max-w-3xl text-xl text-fg">{body}</p>
    </section>
  );
}

function ListBlock({
  title,
  items,
  horizontal,
}: {
  title: string;
  items: string[];
  horizontal?: boolean;
}) {
  return (
    <section>
      <h2 className="type-label text-fg-muted">{title}</h2>
      <ul
        className={
          horizontal
            ? "mt-6 flex flex-wrap gap-2"
            : "mt-6 grid gap-3 sm:grid-cols-2"
        }
      >
        {items.map((item) => (
          <li
            key={item}
            className="border border-white/10 px-4 py-3 text-sm text-fg"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
