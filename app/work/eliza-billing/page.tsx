import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/site";

const title = "Credits and API-key billing at Eliza Labs";
const description =
  "At Eliza Labs I built the credits and API-key billing platform that thousands of long-running hosted AI agents ran on at the edge. The constraint was correctness under concurrency, not a dashboard.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/work/eliza-billing` },
  openGraph: {
    title: `${title} — ${site.name}`,
    description,
    url: `${site.url}/work/eliza-billing`,
    type: "article",
  },
};

export default function ElizaBilling() {
  return (
    <main className="shell">
      <article className="prose">
        <header>
          <p className="muted">
            <Link href="/work">Work</Link> · Eliza Labs · Nov 2024–Mar 2026
          </p>
          <h1>{title}</h1>
          <p className="abstract">{description}</p>
        </header>

        <h2>Problem</h2>
        <p>
          Eliza hosted long-running AI agents. Thousands of them. Each needed an
          API key, a usage meter, a quota, and an account that stayed correct
          when they all hit the edge at once. A billing bug is not a UI bug. It
          is money and access, wrong, under concurrency.
        </p>

        <h2>Constraints</h2>
        <p>
          Cloudflare Workers. Edge compute. No “fix it in a nightly job” for
          quota enforcement. I was one of the first engineers, reporting to the
          CTO. The runtime was open source: 100+ contributors touching the same
          project. Mentorship of interns was fully async, across a 12-hour time
          difference.
        </p>

        <h2>What shipped</h2>
        <ul>
          <li>API-key issuance.</li>
          <li>Usage metering.</li>
          <li>Accounting.</li>
          <li>Quota enforcement that had to hold under concurrency.</li>
          <li>
            A plugin autocoder that generated boilerplate from a spec. Setup
            time down about 70%.
          </li>
          <li>Review and merge of work from 100+ contributors.</li>
        </ul>

        <h2>Numbers</h2>
        <p>
          15,000+ GitHub stars on elizaOS. 100+ contributors. Thousands of
          hosted agents on the billing platform. Stayed through a $20M funding
          round. The project’s token peaked at a $2.5B market cap. I did not
          found Eliza. I did not own the token. I was an early engineer and core
          maintainer who owned billing.
        </p>

        <h2>Stack</h2>
        <p>
          TypeScript, Cloudflare Workers, API-key issuance, usage metering,
          quota enforcement, concurrency correctness.
        </p>

        <h2>What I would not do again</h2>
        <p>
          Treat billing as an afterthought of the agent runtime. The constraint
          is correctness under concurrency. What the runtime may settle without
          a human has to be decided before the first request, not in an
          incident. Same rule later: extractors abstain; every row carries its
          evidence.
        </p>
      </article>
    </main>
  );
}
