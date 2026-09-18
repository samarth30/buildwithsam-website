import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Writeups of production systems built by ${site.name}.`,
  alternates: { canonical: `${site.url}/work` },
};

const items = [
  {
    href: "/work/eliza-billing",
    title: "Credits and API-key billing at Eliza Labs",
    when: "2024–2026",
    abstract:
      "The billing platform thousands of long-running hosted AI agents ran on, at the edge on Cloudflare Workers. Correctness under concurrency.",
  },
  {
    href: "/work/gtm-stack",
    title: "A GTM data stack from scratch",
    when: "2026",
    abstract:
      "Five ATS APIs re-checked at the source, first-party tech detection, enrichment that quarantines, an LLM pipeline that abstains.",
  },
  {
    href: "/work/entity-resolution",
    title: "Entity resolution across five social APIs",
    when: "2023–2024",
    abstract:
      "TikTok’s private API, then one schema for TikTok, YouTube, Twitter/X, Instagram and Spotify. Data-layer response times down 60%.",
  },
];

export default function WorkIndex() {
  return (
    <main className="shell">
      <article className="prose">
        <header>
          <h1>Work</h1>
          <p className="lede">
            Production systems. Numbers that can be opened. Not a portfolio of
            mockups.
          </p>
        </header>
        <ul className="work-list">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.title}</Link>
              <div className="muted">
                {item.when}. {item.abstract}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
