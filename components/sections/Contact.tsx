"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Button } from "@/components/ui/Button";
import { BlurToSharp } from "@/components/animation/BlurToSharp";
import { GinvifyCat } from "@/components/mascot/GinvifyCat";
import { scrollTo } from "@/lib/scroll/lenis";

export type ContactCopy = {
  label: string;
  headline: [string, string, string, string];
  cta: string;
  company: string;
  address: string;
  phone: string;
  taxId: string;
  form: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    message: string;
    submit: string;
    hint: string;
    success: string;
    successDetail: string;
    projectTypes: string[];
  };
};

const DEFAULT_COPY: ContactCopy = {
  label: "09 — CONTACT",
  headline: ["LET'S", "BUILD", "WHAT'S", "NEXT."],
  cta: "START A PROJECT →",
  company: "GINVIFY",
  address: "501/2 Lũy Bán Bích, Phú Thạnh, Ho Chi Minh City, Vietnam",
  phone: "+84 867 249 092",
  taxId: "0319695451",
  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    projectType: "Project type",
    message: "Message",
    submit: "Send message",
    hint: "A short brief is enough — goals, timeline and links help us respond faster.",
    success: "Message received. We'll be in touch soon.",
    successDetail: "We usually reply with clarifying questions or a proposed next step.",
    projectTypes: [
      "Web Application",
      "AI Engineering",
      "Automation",
      "SaaS Platform",
      "Landing Page",
      "Digital Product",
      "Other",
    ],
  },
};

type ContactProps = {
  copy?: ContactCopy;
  showCanvasHint?: boolean;
};

export function Contact({ copy = DEFAULT_COPY }: ContactProps) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "");
    const name = String(data.get("name") ?? "");
    if (!name.trim() || !email.includes("@")) return;
    setSent(true);
  }

  return (
    <section
      id="contact"
      data-section="contact"
      className="relative z-10 py-section"
    >
      <div className="pointer-events-none absolute inset-0 bg-bg-0/60" />
      <Container className="relative">
        <p className="type-label text-lime">{copy.label}</p>

        <BlurToSharp as="h2" className="type-display mt-6 text-fg">
          {copy.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </BlurToSharp>

        <Button
          href="#contact-form"
          variant="primary"
          className="mt-10"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contact-form", -80);
          }}
        >
          {copy.cta}
        </Button>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <SectionPanel className="space-y-4 text-fg-muted">
            <p className="type-label text-fg">{copy.company}</p>
            <p>{copy.address}</p>
            <p>
              <a
                href={`tel:${copy.phone.replace(/\s/g, "")}`}
                className="hover:text-cyan"
              >
                {copy.phone}
              </a>
            </p>
            <p className="type-label text-fg-muted">Tax ID: {copy.taxId}</p>
          </SectionPanel>

          <SectionPanel id="contact-form">
            {sent ? (
              <div className="flex flex-col items-start gap-5">
                <GinvifyCat variant="idle" className="h-28 w-20" />
                <p className="text-fg">{copy.form.success}</p>
                <p className="text-sm text-fg-muted">{copy.form.successDetail}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <p className="text-sm text-fg-muted">{copy.form.hint}</p>
                <Field label={copy.form.name} name="name" required />
                <Field
                  label={copy.form.email}
                  name="email"
                  type="email"
                  required
                />
                <Field label={copy.form.company} name="company" />
                <label className="block">
                  <span className="type-label text-fg-muted">
                    {copy.form.projectType}
                  </span>
                  <select
                    name="projectType"
                    className="mt-2 w-full border border-white/15 bg-bg-0/60 px-3 py-3 text-fg outline-none focus:border-cyan"
                    defaultValue={copy.form.projectTypes[0]}
                  >
                    {copy.form.projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="type-label text-fg-muted">
                    {copy.form.message}
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-y border border-white/15 bg-bg-0/60 px-3 py-3 text-fg outline-none focus:border-cyan"
                  />
                </label>
                <Button type="submit" variant="primary">
                  {copy.form.submit}
                </Button>
              </form>
            )}
          </SectionPanel>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="type-label text-fg-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-white/15 bg-bg-0/60 px-3 py-3 text-fg outline-none focus:border-cyan"
      />
    </label>
  );
}
