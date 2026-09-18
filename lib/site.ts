export const site = {
  name: "Samarth Gugnani",
  url: "https://buildwithsam.co",
  title: "Samarth Gugnani — Software Engineer, Backend, Data and Agent Systems",
  role: "Software engineer — backend, data, and agent systems",
  jobTitle: "Software Engineer",
  summary:
    "Samarth Gugnani builds backend and data infrastructure and the LLM systems on top of them: billing that stays correct under concurrency, pipelines that turn messy third-party APIs into records you can trust, and the guardrails that decide where an agent runs alone and where a human signs off.",
  location:
    "Remote · six years remote for distributed teams · overlap hours US, EU or APAC",
  email: "samarth.gugnani30@gmail.com",
  mailto: "mailto:samarth.gugnani30@gmail.com",
  notBlockchain:
    "I am not a blockchain developer. 2020–2022 included early web3 and a services company. Since 2023 the work has been data platforms, agent infrastructure, billing, and GTM systems.",
  sameAs: [
    "https://github.com/samarth30",
    "https://www.linkedin.com/in/samarth30",
    "https://x.com/samarth0x",
  ],
  github: "https://github.com/samarth30",
  linkedin: "https://www.linkedin.com/in/samarth30",
  x: "https://x.com/samarth0x",
  handles: {
    github: "samarth30",
    x: "samarth0x",
    linkedin: "samarth30",
  },
  promise:
    "Billing that holds under concurrency. Pipelines you can open at the source. Agents that abstain when they cannot prove the row.",
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: ["samarth30", "samarth0x"],
  url: site.url,
  email: site.email,
  jobTitle: site.jobTitle,
  description: site.summary,
  sameAs: [...site.sameAs],
};

export const homeIntro =
  "Samarth Gugnani is a software engineer with six years of remote work for distributed teams. He built Eliza billing on Cloudflare Workers — the credits and API-key platform thousands of hosted AI agents ran on — and independently built a GTM data stack from scratch and ran it in production. He is not a blockchain developer.";
