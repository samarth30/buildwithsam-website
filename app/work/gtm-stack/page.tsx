import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/site";

const title = "A GTM data stack from scratch";
const description =
  "I built a revenue and GTM data stack from scratch and ran it in production: five ATS APIs re-checked at the source, technology detection from first-party signals, enrichment that quarantines unverified rows, and a thirteen-prompt LLM pipeline that drops any claim it cannot trace to the source page.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/work/gtm-stack` },
  openGraph: {
    title: `${title} — ${site.name}`,
    description,
    url: `${site.url}/work/gtm-stack`,
    type: "article",
  },
};

export default function GtmStack() {
  return (
    <main className="shell">
      <article className="prose">
        <header>
          <p className="muted">
            <Link href="/work">Work</Link> · Independent · Apr 2026–present
          </p>
          <h1>{title}</h1>
          <p className="abstract">{description}</p>
        </header>

        <h2>Problem</h2>
        <p>
          Vendor lists go stale. Cached indexes keep filled roles listed as
          open. A no-code canvas stops at the endpoint the vendor did not
          expose. Language models invent a CRM that was never on the page. I had
          already watched an extractor of mine read a truncated job description
          and almost report the wrong CRM into a live campaign.
        </p>

        <h2>Constraints</h2>
        <p>
          Production, not a demo. Every row needs a source. Unverified contact
          data does not ship. The operator, not the model, accepts the send.
          Built with Claude Code and Cursor as daily tools — custom skills,
          subagents, MCP integrations — with the rule that what an agent may
          settle without a human is decided up front.
        </p>

        <h2>What shipped</h2>
        <ul>
          <li>
            Hiring-signal crawler over Greenhouse, Lever, Ashby, Workable,
            Teamtailor. Cached indexes go stale, so every posting is re-checked
            at the source before use. Each row stamped with source API and
            timestamp. 351 companies verified live at the source. 456 contacts
            resolved across 219 of them.
          </li>
          <li>
            Technology detection from first-party signals: DNS records, HTTP
            response headers, cookie names, resource hosts. Extracts
            per-customer IDs (HubSpot portal ID, GA4 measurement ID) as proof. A
            vendor merely named in page text is not an install and is rejected
            with a reason.
          </li>
          <li>
            Sequencing and deliverability: about 1,500 lines of Python against a
            sending-platform API — campaign push, rate caps per inbox and per
            domain, send scheduling in each recipient’s timezone, suppression
            registry. Where docs were silent, the API was probed.
          </li>
          <li>
            LLM pipeline: 13 chained prompts turning a rendered screenshot of a
            prospect site into a personalized outbound sequence, across 5,000+
            accounts sourced from live ad activity. Any claim not traceable to
            the source page is dropped. Extractors abstain when confidence is
            low.
          </li>
          <li>
            Enrichment via Clay CLI, waterfall plus email verification, push
            into Instantly. Unverified rows quarantined with a reason.
          </li>
          <li>
            Operator UI in Next.js, React, TypeScript: a human accepts, rejects,
            or corrects before anything ships.
          </li>
        </ul>

        <h2>Numbers</h2>
        <p>
          351 companies live at the ATS. 456 contacts. 219 companies. 5,000+
          accounts through the LLM pipeline. 13 prompts. Five ATS APIs. About
          1,500 lines against the sending API.
        </p>

        <h2>Stack</h2>
        <p>
          Python, TypeScript, Next.js, React, Playwright, Clay CLI, Instantly,
          DNS and response-header fingerprinting, Anthropic Claude API, MCP.
        </p>

        <h2>Guardrail</h2>
        <p>
          Extractors abstain when confidence is low. Every row carries its
          evidence. A vendor name in copy is not an install. A truncated page is
          not a CRM. The human signs off where the agent would guess.
        </p>
      </article>
    </main>
  );
}
