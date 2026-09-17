import { defaultLocale } from "@/lib/i18n/config";

/**
 * Static root entry. `redirect()` only embeds a client RSC payload under
 * `output: "export"`, so use a meta refresh that works on Node-less hosts.
 */
export default function RootPage() {
  const href = `/${defaultLocale}/`;

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-4 px-6 text-center">
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <p className="type-label text-fg-muted">Redirecting…</p>
      <a href={href} className="type-label text-fg underline-offset-4 hover:underline">
        Continue to GINVIFY
      </a>
    </main>
  );
}
