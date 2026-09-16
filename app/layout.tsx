import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ginvify.com",
  ),
  title: {
    default: "GINVIFY — Engineering Intelligence",
    template: "%s | GINVIFY",
  },
  description:
    "We design and build web applications, AI systems, automation and SaaS products.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${syne.variable} bg-bg-0`}
      suppressHydrationWarning
    >
      <body className="bg-transparent font-sans antialiased">{children}</body>
    </html>
  );
}
