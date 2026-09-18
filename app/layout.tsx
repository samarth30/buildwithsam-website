import "@/app/globals.css";

import type { Metadata } from "next";
import Link from "next/link";

import { sans, serif } from "@/lib/fonts";
import { personJsonLd, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    title: site.title,
    description: site.summary,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.summary,
    creator: "@samarth0x",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={sans.className}>
        <header className="site-header">
          <div className="shell inner">
            <Link href="/" rel="author" className="brand">
              {site.name}
            </Link>
            <nav aria-label="Primary">
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <a className="btn" href={site.mailto}>
                Email
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell inner">
            <span>{site.name}</span>
            <nav aria-label="Elsewhere">
              <a href={site.github} rel="me">
                GitHub
              </a>
              <a href={site.linkedin} rel="me">
                LinkedIn
              </a>
              <a href={site.x} rel="me">
                X
              </a>
              <a href={site.mailto}>{site.email}</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
