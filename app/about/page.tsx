import type { Metadata } from "next";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.summary,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: `About — ${site.name}`,
    description: site.summary,
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="shell">
      <article className="prose">
        <header>
          <h1>About</h1>
          <p className="lede">{site.summary}</p>
        </header>

        <h2>Now</h2>
        <p>
          Independent, April 2026–present. I build backend and data
          infrastructure and the LLM systems on top of them. Remote. Six years
          remote for distributed teams. Overlap hours US, EU or APAC.
        </p>
        <p>
          {site.name}. GitHub {site.handles.github}. X {site.handles.x}.
          LinkedIn in/{site.handles.linkedin}. {site.email}.
        </p>

        <aside className="correction">
          <h2 style={{ marginTop: 0 }}>Not a blockchain developer</h2>
          <p style={{ marginTop: "0.5rem" }}>{site.notBlockchain}</p>
        </aside>

        <h2>Eliza Labs</h2>
        <p>
          Senior Software Engineer, November 2024–March 2026. San Francisco Bay
          Area, remote. One of the first engineers, reported to the CTO. Core
          maintainer of elizaOS, an open-source AI-agent operating system with
          15,000+ GitHub stars and 100+ contributors.
        </p>
        <p>
          I built the credits and API-key billing platform that thousands of
          long-running hosted AI agents ran on, at the edge on Cloudflare
          Workers: key issuance, usage metering, accounting, quota enforcement.
          Correctness under concurrency was the constraint. I also built a
          plugin autocoder from a spec; setup time down about 70%. I reviewed
          and merged work from 100+ contributors and mentored interns fully
          async across a 12-hour time difference.
        </p>
        <p>
          I stayed through a $20M funding round. The project became a large
          open-source agent ecosystem; its token peaked at a $2.5B market cap. I
          did not found Eliza. I did not own the token. I was an early engineer
          and core maintainer who owned billing.
        </p>

        <h2>Independent GTM data stack</h2>
        <p>
          April 2026–present. I built a revenue / GTM data stack from scratch
          and ran it in production: a hiring-signal crawler over five ATS APIs
          (Greenhouse, Lever, Ashby, Workable, Teamtailor) with 351 companies
          verified live at the source and 456 contacts across 219 of them;
          technology detection from DNS, response headers, cookies and resource
          hosts; sequencing and deliverability against a sending-platform API;
          a 13-prompt LLM pipeline over 5,000+ accounts that drops any claim it
          cannot trace to the source page; Clay CLI enrichment with quarantine
          for unverified rows; an operator UI in Next.js where a human accepts
          or rejects before anything ships.
        </p>

        <h2>Camp Network</h2>
        <p>
          Full-stack engineer, June 2023–October 2024. One of the first
          engineers. Owned the data and AI layer from pre-seed through Series A.
          Reverse-engineered TikTok’s private API. Entity
          resolution across TikTok, YouTube, Twitter/X, Instagram and Spotify.
          Data-layer response times down 60%. An AI chatbot on metrics:
          satisfaction +30%, support tickets −40%.
        </p>

        <h2>Shield, SignAssist, Intelli Chains</h2>
        <p>
          Shield (a16z-backed), freelance, March–June 2023: zero-to-one in four
          months, sole engineer on the build, data model and APIs, customer
          acquisition +25%.
        </p>
        <p>
          SignAssist, CTO, June–December 2022: engineering for a seven-person
          company through a full pivot. Chrome extension, then API-as-a-service
          that landed Frontier.xyz. Early operator/engineering experience, not
          current identity.
        </p>
        <p>
          Intelli Chains, founder, August 2021–June 2022: engineering services,
          15+ international clients in under a year. APIs, distributed systems,
          real-time indexing bots over high-throughput event streams.
        </p>

        <h2>Earlier, 2020–2021</h2>
        <p>
          Cryption Network (intern from August 2020, then second employee
          through September 2021): early fintech, core transaction systems and
          test suite as assets scaled to about a $10M market cap. YFDAI Finance,
          part-time 2020–2021, blockchain lead — dated early experience only.
          Unbox Innovations internship, 2020. Google Summer of Code, Amahi,
          2020: system reliability PRs and non-admin user login. B.Tech
          Computer Science, Chitkara University.
        </p>

        <h2>Skills</h2>
        <div className="skills">
          <h3>Languages</h3>
          <ul>
            <li>Python, TypeScript, JavaScript, Node.js, SQL</li>
          </ul>
          <h3>Backend / APIs</h3>
          <ul>
            <li>
              REST, webhooks, microservices, API-key issuance, usage metering,
              quota enforcement, rate limiting, idempotency and retries,
              concurrency correctness, third-party APIs where docs are wrong or
              absent
            </li>
          </ul>
          <h3>Data</h3>
          <ul>
            <li>
              PostgreSQL, MySQL, MongoDB, Redis, DuckDB, Parquet, modeling, ETL
              / incremental pipelines, entity resolution and dedup across
              disagreeing sources, warehouse querying
            </li>
          </ul>
          <h3>AI</h3>
          <ul>
            <li>
              Anthropic Claude API, OpenAI API, Claude Code, Cursor, MCP, prompt
              engineering, multi-agent pipelines with adversarial verification,
              embeddings / vector search, extraction from unstructured text,
              confidence gating and abstention
            </li>
          </ul>
          <h3>Infra / frontend</h3>
          <ul>
            <li>
              Cloudflare Workers, AWS Lambda, Vercel, Railway, Docker, Git,
              CI/CD, async HTTP crawlers, Playwright, DNS and
              certificate-transparency analysis, response-header fingerprinting,
              Next.js, React, Tailwind
            </li>
          </ul>
          <h3>GTM systems (secondary)</h3>
          <ul>
            <li>
              Clay, Apollo, Instantly, Smartlead, n8n, Zapier, Make, HubSpot,
              qualification/routing, waterfall enrichment, email verification,
              deliverability, GDPR / CAN-SPAM aware sending
            </li>
          </ul>
        </div>

        <h2>Contact</h2>
        <p>
          <a href={site.mailto}>{site.email}</a>
          <br />
          <a href={site.github}>{site.github}</a>
          <br />
          <a href={site.linkedin}>{site.linkedin}</a>
          <br />
          <a href={site.x}>{site.x}</a>
        </p>
        <p className="muted">
          Also at <a href="/about.md">/about.md</a> and{" "}
          <a href="/llms.txt">/llms.txt</a>.
        </p>
      </article>
    </main>
  );
}
