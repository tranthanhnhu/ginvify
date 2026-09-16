"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
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
    success: string;
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
    success: "Message received. We'll be in touch soon.",
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
      className="relative z-10 py-28 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-bg-0/50" />
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

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-fg-muted">
            <p className="type-label text-fg">{copy.company}</p>
            <p>{copy.address}</p>
            <p>
              <a href={`tel:${copy.phone.replace(/\s/g, "")}`} className="hover:text-cyan">
                {copy.phone}
              </a>
            </p>
            <p className="type-label text-fg-muted">Tax ID: {copy.taxId}</p>
          </div>

          <div id="contact-form">
            {sent ? (
              <div className="flex flex-col items-start gap-5 border border-white/10 p-8">
                <GinvifyCat variant="idle" className="h-20 w-20" />
                <p className="text-fg">{copy.form.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label={copy.form.name} name="name" required />
                <Field label={copy.form.email} name="email" type="email" required />
                <Field label={copy.form.company} name="company" />
                <label className="block">
                  <span className="type-label text-fg-muted">{copy.form.projectType}</span>
                  <select
                    name="projectType"
                    className="mt-2 w-full border border-white/15 bg-bg-1 px-3 py-3 text-fg outline-none focus:border-cyan"
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
                  <span className="type-label text-fg-muted">{copy.form.message}</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-y border border-white/15 bg-bg-1 px-3 py-3 text-fg outline-none focus:border-cyan"
                  />
                </label>
                <Button type="submit" variant="primary">
                  {copy.form.submit}
                </Button>
              </form>
            )}
          </div>
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
        className="mt-2 w-full border border-white/15 bg-bg-1 px-3 py-3 text-fg outline-none focus:border-cyan"
      />
    </label>
  );
}
