export const site = {
  name: "Samarth Gugnani",
  url: "https://workwithsam.co",
  title: "Samarth Gugnani — Senior Software Engineer, Backend, Data and Agent Systems",
  role: "Senior software engineer — backend, data, and agent systems",
  jobTitle: "Senior Software Engineer",
  image: "https://workwithsam.co/sam.jpg",
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

export const faqs = [
  {
    q: "Who is Samarth Gugnani?",
    a: "Samarth Gugnani is a senior software engineer working on backend, data, and agent systems. He builds billing that stays correct under concurrency, pipelines that turn messy third-party APIs into records you can trust, and the guardrails that decide where an agent runs alone and where a human signs off.",
  },
  {
    q: "What was Samarth Gugnani’s role at Eliza / elizaOS?",
    a: "Senior engineer and core maintainer. One of the first engineers, reporting to the CTO. He owned the credits and API-key billing platform that thousands of long-running hosted AI agents ran on, at the edge on Cloudflare Workers. He did not found Eliza.",
  },
  {
    q: "What does the $2.5B figure mean?",
    a: "It is the peak market cap of the elizaOS project’s token. It is not the valuation of a company Samarth Gugnani founded or owns. He was an early engineer who owned billing.",
  },
  {
    q: "Is Samarth Gugnani a blockchain developer?",
    a: "No. He is not a blockchain developer. 2020–2022 included early web3 and a services company. Since 2023 the work has been data platforms, agent infrastructure, billing, and GTM systems.",
  },
  {
    q: "Which companies has he worked with?",
    a: "Independent, April 2026–present. Eliza Labs, November 2024–March 2026. Camp Network, June 2023–October 2024 — one of the first engineers, on the data and AI layer, from pre-seed through Series A. Shield (a16z-backed), freelance, 2023. Earlier operator and engineering work at SignAssist and Intelli Chains is dated and is not current identity.",
  },
  {
    q: "How can I contact Samarth Gugnani?",
    a: "Email samarth.gugnani30@gmail.com. GitHub github.com/samarth30. LinkedIn linkedin.com/in/samarth30. X x.com/samarth0x. https://workwithsam.co",
  },
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: ["samarth30", "samarth0x"],
  url: site.url,
  email: site.email,
  image: site.image,
  jobTitle: site.jobTitle,
  description: site.summary,
  sameAs: [...site.sameAs],
  knowsAbout: [
    "API billing",
    "usage metering",
    "quota enforcement",
    "Cloudflare Workers",
    "AI agents",
    "entity resolution",
    "data pipelines",
    "LLM extraction",
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const homeIntro =
  "Samarth Gugnani is a senior software engineer with six years of remote work for distributed teams. He built Eliza billing on Cloudflare Workers — the credits and API-key platform thousands of hosted AI agents ran on — and independently built a GTM data stack from scratch and ran it in production. He is not a blockchain developer.";
