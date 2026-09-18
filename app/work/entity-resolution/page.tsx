import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/site";

const title = "Entity resolution across five social APIs";
const description =
  "At Camp Network I reverse-engineered TikTok’s private API and resolved the same creator across TikTok, YouTube, Twitter/X, Instagram and Spotify — five sources that agreed on nothing — into one schema. Data-layer response times fell 60%.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/work/entity-resolution` },
  openGraph: {
    title: `${title} — ${site.name}`,
    description,
    url: `${site.url}/work/entity-resolution`,
    type: "article",
  },
};

export default function EntityResolution() {
  return (
    <main className="shell">
      <article className="prose">
        <header>
          <p className="muted">
            <Link href="/work">Work</Link> · Camp Network · Jun 2023–Oct 2024
          </p>
          <h1>{title}</h1>
          <p className="abstract">{description}</p>
        </header>

        <h2>Problem</h2>
        <p>
          The product needed one creator across five platforms. Public endpoints
          did not expose the data. Each platform had its own identifier, its own
          schema, and no interest in agreeing. Display names are not identity.
        </p>

        <h2>Constraints</h2>
        <p>
          I was one of the first engineers. I owned the data and AI layer from
          pre-seed to Series A, about $30M raised. Remote. The TikTok data we
          needed was not on the public API.
        </p>

        <h2>What shipped</h2>
        <ul>
          <li>
            Reverse-engineering of TikTok’s private API, and scrapers for data
            public endpoints did not expose.
          </li>
          <li>
            Entity resolution across TikTok, YouTube, Twitter/X, Instagram and
            Spotify into one schema.
          </li>
          <li>
            An AI chatbot on metrics: satisfaction +30%, support tickets −40%.
          </li>
        </ul>

        <h2>Numbers</h2>
        <p>
          Five sources. One schema. Data-layer response times down 60%. Series A
          on about $30M raised. I did not raise that round. I owned the data
          layer under it.
        </p>

        <h2>Stack</h2>
        <p>
          Node.js, TypeScript, third-party APIs where docs were wrong or absent,
          entity resolution and dedup, async HTTP, the usual SQL store behind a
          product that had to answer “is this the same person?” without
          guessing.
        </p>

        <h2>Guardrail</h2>
        <p>
          Do not trust a display name, or a vendor string in page text, as
          identity. Resolution needs a schema and a match you can defend. The
          same instinct later became abstention on the GTM stack: if the source
          does not support the claim, the row does not ship.
        </p>
      </article>
    </main>
  );
}
