import type { Metadata } from "next";
import Link from "next/link";

import { faqJsonLd, faqs, homeIntro, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.summary,
  alternates: { canonical: site.url },
  openGraph: {
    title: site.title,
    description: site.summary,
    url: site.url,
  },
  twitter: {
    title: site.title,
    description: site.summary,
  },
};

const proof = [
  {
    value: "15,000+",
    label: "GitHub stars on elizaOS. Core maintainer. 100+ contributors.",
  },
  {
    value: "Thousands",
    label: "of hosted agents billed on Cloudflare Workers. Correctness under concurrency.",
  },
  {
    value: "351",
    label: "companies live at the ATS. 456 contacts. Source API on every row.",
  },
  {
    value: "60%",
    label: "faster data layer after resolving one creator across five platforms.",
  },
];

const stop = [
  "Cached indexes treated as the list",
  "A canvas until the vendor does not expose the endpoint",
  "An LLM that writes a CRM that was never on the page",
  "Billing that is eventually consistent",
];

const start = [
  "Re-check at the source before use",
  "Write against the real API",
  "Drop the claim. Abstain when confidence is low",
  "Quota that holds when thousands of agents hit the edge at once",
];

const modules = [
  {
    n: "01",
    title: "Billing at the edge",
    body: "Credits and API keys for long-running hosted agents on Cloudflare Workers. Key issuance, metering, accounting, quota. Correctness under concurrency.",
  },
  {
    n: "02",
    title: "Disagreeing sources, one schema",
    body: "TikTok’s private API, then the same creator across YouTube, Twitter/X, Instagram and Spotify. Data-layer response times down 60%.",
  },
  {
    n: "03",
    title: "Signal verified at the source",
    body: "Five ATS APIs. 351 companies re-checked live. Cached indexes go stale. Every row stamped with source API and timestamp.",
  },
  {
    n: "04",
    title: "Installs, not vendor names",
    body: "DNS, headers, cookies, resource hosts. HubSpot portal ID and GA4 measurement ID as proof. A name in page copy is rejected with a reason.",
  },
  {
    n: "05",
    title: "Extraction that abstains",
    body: "13 chained prompts. 5,000+ accounts. Any claim not on the source page is dropped. Extractors abstain when confidence is low.",
  },
  {
    n: "06",
    title: "A human on the line",
    body: "Next.js operator UI. Accept, reject, or correct before anything ships. What an agent may settle alone is decided up front.",
  },
];

const work = [
  {
    href: "/work/eliza-billing",
    title: "Credits and API-key billing at Eliza Labs",
    blurb:
      "The platform thousands of hosted agents ran on. I did not found Eliza. I owned billing.",
  },
  {
    href: "/work/gtm-stack",
    title: "A GTM data stack, crawler to operator UI",
    blurb:
      "Live ATS verification, first-party tech detection, enrichment that quarantines, LLM extraction that abstains.",
  },
  {
    href: "/work/entity-resolution",
    title: "Entity resolution across five social APIs",
    blurb:
      "Five sources that agreed on nothing. One schema. Data layer 60% faster.",
  },
];

const experience = [
  {
    title: "Software engineer",
    org: "Independent",
    when: "Apr 2026–present",
    datetime: "2026-04",
  },
  {
    title: "Senior Software Engineer",
    org: "Eliza Labs",
    when: "Nov 2024–Mar 2026",
    datetime: "2024-11",
  },
  {
    title: "Full-stack engineer",
    org: "Camp Network",
    when: "Jun 2023–Oct 2024",
    datetime: "2023-06",
  },
  {
    title: "Full-stack engineer",
    org: "Shield (a16z-backed)",
    when: "Mar 2023–Jun 2023",
    datetime: "2023-03",
  },
  {
    title: "CTO",
    org: "SignAssist",
    when: "Jun 2022–Dec 2022",
    datetime: "2022-06",
  },
  {
    title: "Founder",
    org: "Intelli Chains",
    when: "Aug 2021–Jun 2022",
    datetime: "2021-08",
  },
];

export default function Home() {
  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="shell">
        <header className="hero">
          <div className="hero-id">
            <h1>{site.name}</h1>
            <p className="role">{site.role}</p>
          </div>
          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sam.jpg" alt="Samarth Gugnani" width={640} height={800} />
          </figure>
          <div className="hero-sell">
            <p className="lede">{homeIntro}</p>
            <p className="promise serif">{site.promise}</p>
            <div className="hero-cta">
              <a className="btn btn-lg" href={site.mailto}>
                Email Samarth Gugnani
              </a>
              <Link href="/work">See the work</Link>
            </div>
            <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.92rem" }}>
              {site.location}
            </p>
          </div>
        </header>
      </div>

      <section className="proof-band" aria-labelledby="proof-heading">
        <div className="shell">
          <h2 id="proof-heading" className="kicker" style={{ color: "#c9c4b8", margin: 0 }}>
            Proof, not adjectives
          </h2>
          <dl className="proof" style={{ marginTop: "1.2rem" }}>
            {proof.map((item) => (
              <div key={item.value}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="shell">
        <section className="section" aria-labelledby="problem-heading">
          <p className="kicker">The old way is a guess</p>
          <h2 id="problem-heading">Source at the API, or it does not ship.</h2>
          <div className="split">
            <div className="pane pane-stop">
              <p className="kicker">Stop</p>
              <ul>
                {stop.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pane pane-start">
              <p className="kicker">Start</p>
              <ul>
                {start.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="inside-heading">
          <p className="kicker">What the work actually is</p>
          <h2 id="inside-heading">Six systems. All shipped.</h2>
          <div className="modules">
            {modules.map((m) => (
              <article key={m.n} className="module">
                <p className="n">{m.n}</p>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="how-heading">
          <p className="kicker">How it holds</p>
          <h2 id="how-heading">Three rules. Not a stack of tools.</h2>
          <ol className="steps">
            <li className="step">
              <p className="n">1</p>
              <h3>Prove it at the source</h3>
              <p>
                ATS, DNS, headers, the page itself. If it is not there, it is
                not a row.
              </p>
            </li>
            <li className="step">
              <p className="n">2</p>
              <h3>Abstain when unsure</h3>
              <p>
                Extractors drop the claim. Unverified contacts are quarantined
                with a reason.
              </p>
            </li>
            <li className="step">
              <p className="n">3</p>
              <h3>A human signs off</h3>
              <p>
                What an agent may settle alone is decided up front. The rest
                waits.
              </p>
            </li>
          </ol>
        </section>

        <section className="section" aria-labelledby="work-heading">
          <p className="kicker">Selected work</p>
          <h2 id="work-heading">Open the writeup.</h2>
          <div className="modules">
            {work.map((item) => (
              <Link key={item.href} href={item.href} className="work-card card-link">
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="exp-heading">
          <p className="kicker">Experience</p>
          <h2 id="exp-heading">Title, company, dates.</h2>
          <ol className="exp">
            {experience.map((job) => (
              <li key={job.org}>
                <span>
                  {job.title}, {job.org}
                </span>
                <time dateTime={job.datetime}>{job.when}</time>
              </li>
            ))}
          </ol>
          <p className="muted" style={{ marginTop: "1rem" }}>
            Earlier, 2020–2021, dated only: Cryption Network, YFDAI Finance,
            Unbox Innovations, Google Summer of Code (Amahi). B.Tech Computer
            Science, Chitkara University. I am not a blockchain developer.
          </p>
        </section>

        <section
          className="section"
          id="faq"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <p className="kicker">FAQ</p>
          <h2 id="faq-heading">Straight answers.</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <article
                key={item.q}
                className="faq-item"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 itemProp="name">{item.q}</h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{item.a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="close" aria-labelledby="close-heading">
          <h2 id="close-heading">If the work is this, write.</h2>
          <p>
            {site.summary}
          </p>
          <a className="btn btn-lg" href={site.mailto}>
            Email Samarth Gugnani
          </a>
        </section>
      </div>
    </main>
  );
}
