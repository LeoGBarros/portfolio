export const en = {
  meta: {
    title: "Leonardo Barros — Backend Engineer",
    description:
      "Leonardo Barros, backend engineer in Campinas, Brazil. TypeScript and Go services, PostgreSQL, Kubernetes, AI agents and blockchain integration for correctness-critical systems.",
    ogDescription: "Backend engineer for correctness-critical systems: TypeScript, Go, Kubernetes, AI agents and EVM.",
  },

  nav: {
    services: "What I build",
    work: "Work",
    stack: "Stack",
    experience: "Experience",
    faq: "FAQ",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchTo: "Ver em português",
    home: "Leonardo Barros, back to top",
  },

  ticker: [
    "Open to full-time & remote contracts",
    "Backend engineer · TypeScript · Go",
    "REST & gRPC APIs · PostgreSQL",
    "Kubernetes · Docker · GitHub Actions",
    "AI agents · Claude · OpenAI",
    "Blockchain · Solidity · EVM · Viem",
    "Campinas, Brazil · remote worldwide",
  ],

  hero: {
    hello: "Hello, I'm",
    titleLine1: "Backend engineering,",
    titleLine2: "from contract to cluster.",
    rotatorLead: "I build",
    rotatorWords: [
      "REST & gRPC APIs",
      "event-driven services",
      "multi-agent systems",
      "on-chain indexers",
      "smart contracts",
    ],
    lead:
      "Backend engineer working in TypeScript and Go on systems where a wrong answer costs money: the APIs, indexers and Kubernetes deployments behind a carbon-credit tokenization platform, and the Solidity that governs consensus on Brazil's national blockchain network.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "See selected work",
    status: "Open to full-time roles & remote contracts · relocation welcome",
    codeAria: "Profile summary as a Solidity contract",
  },

  services: {
    eyebrow: "What I build",
    title: "Backend work that holds up in production.",
    sub: "Typed services, tested end to end, deployed to Kubernetes — in regulated environments where correctness comes before elegance.",
    items: [
      {
        title: "Backend APIs & services",
        text: "REST and gRPC services in TypeScript and Go with schemas at every boundary: Fastify, Zod and Prisma over PostgreSQL, with automated tests that keep coverage above 95%.",
        tags: ["TypeScript", "Go", "Fastify · Zod · Prisma", "PostgreSQL"],
      },
      {
        title: "Infrastructure & delivery",
        text: "Containerized services shipped to Kubernetes on Oracle OKE with Helm, Kustomize and the Gateway API, behind CI/CD pipelines that raised team throughput by at least 20%.",
        tags: ["Kubernetes", "Docker", "GitHub Actions", "Helm"],
      },
      {
        title: "AI agents",
        text: "Agents and multi-agent systems on the Claude and OpenAI APIs: tool use, orchestration between specialized agents, and the guardrails that keep model output away from places where a wrong answer is expensive.",
        tags: ["Claude", "OpenAI", "Multi-agent", "Tool use"],
      },
      {
        title: "Blockchain integration",
        text: "Solidity contracts written for review and the services that read, sign and index them, with the contract↔backend ABI boundary treated as a versioned API contract.",
        tags: ["Solidity", "EVM", "Viem", "Foundry · Hardhat"],
      },
    ],
  },

  stats: {
    eyebrow: "Proof in numbers",
    title: "Shipped, measured.",
    items: [
      { value: 95, suffix: "%", label: "minimum test coverage with Vitest on the Projeto Neo backend" },
      { value: 20, prefix: "+", suffix: "%", label: "development throughput from CI/CD and test automation" },
      { value: 41, label: "BDD scenarios behind the RBB validator-selection contract" },
      { value: 6, label: "node live network used to prove the QBFT consensus handover" },
      { value: 2, label: "production programs at CPQD, from API to cluster" },
      { value: 2021, label: "working in industry since, from databases to distributed systems" },
    ] as { value: number; prefix?: string; suffix?: string; label: string }[],
  },

  work: {
    eyebrow: "Selected work",
    title: "Case studies.",
    sub: "Two programs at CPQD, an applied R&D institute in Campinas.",
    live: "Live",
    cases: [
      {
        meta: "CPQD · client Neoenergia · 2025 – present",
        title: "Projeto Neo — backend for an environmental-asset marketplace",
        lead: "REST backend and smart contracts of a platform where I-REC renewable-energy certificates and carbon credits are issued, traded and retired as tokens, with traceability from issuance to retirement.",
        points: [
          "REST API in TypeScript (Fastify, Zod, Prisma) over PostgreSQL, reading and signing on-chain through Viem and Ethers.js.",
          "Turned the contract↔backend ABI boundary — the most frequent source of production defects — into a versioned API contract.",
          "CI/CD and Vitest at a minimum 95% coverage; shipped to Kubernetes (Oracle OKE) with Helm, Kustomize and Gateway API.",
        ],
        tags: ["TypeScript", "Fastify", "PostgreSQL", "Kubernetes", "Viem"],
      },
      {
        meta: "CPQD · 2025 – present",
        title: "Rede Blockchain Brasil — on-chain validator selection",
        lead: "The Solidity mechanism that decides QBFT consensus membership for Brazil's shared permissioned blockchain network, queried directly by Hyperledger Besu.",
        points: [
          "Removes validators that stop producing blocks and handles readmission through governance.",
          "Upgradeability as a fixed-address facade over replaceable logic instead of a UUPS proxy: no storage-collision risk, and the address pinned in every node's genesis stays stable.",
          "Proved the handover on a live 6-node network: a running chain switches to contract-based selection without a reset. Delivered requirements-first, with 41 BDD scenarios.",
        ],
        tags: ["Solidity", "Foundry", "Besu", "QBFT", "BDD"],
      },
    ],
    projectsTitle: "Open source & personal projects",
    projects: [
      {
        href: "https://github.com/LeoGBarros/APP-TCC",
        title: "Sparklly",
        text: "App for domestic employers to organize schedules and find services.",
        tags: ["TypeScript", "Go", "PostgreSQL", "Docker"],
      },
      {
        href: "https://github.com/LeoGBarros/SuperTrunfo",
        title: "Super Trunfo API",
        text: "Card-game backend: user and admin management, cards and decks, and full match flow.",
        tags: ["REST", "Auth", "Game logic"],
      },
      {
        href: "https://github.com/LeoGBarros/cre-chainlink",
        title: "CRE Chainlink",
        text: "Exploring the Chainlink Runtime Environment: smart contracts wired to off-chain data and services.",
        tags: ["Chainlink", "Solidity", "Oracles"],
      },
      {
        href: "https://github.com/LeoGBarros/Solana-Zero-to-Hero-2-Deploy-Your-First-Anchor-Program",
        title: "Solana Speedrun — Zero to Hero",
        text: "Speedrun challenges with a program deployed through the Anchor framework, in Rust.",
        tags: ["Rust", "Anchor", "Solana"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Tools I ship with.",
    tiers: [
      {
        label: "In production",
        note: "Daily, on systems running today",
        groups: [
          { title: "Backend", items: ["TypeScript", "Node.js", "Go", "Fastify", "Zod", "Prisma", "PostgreSQL", "REST", "gRPC"] },
          { title: "Infrastructure", items: ["Kubernetes (Oracle OKE)", "Docker", "Helm", "Kustomize", "Gateway API", "GitHub Actions", "GitLab CI"] },
          { title: "Blockchain", items: ["Solidity", "EVM / Ethereum", "Viem", "Ethers.js", "Hardhat", "Foundry", "Hyperledger Besu"] },
          { title: "Quality", items: ["Vitest", "BDD / Gherkin", "E2E testing", "Slither", "Code review", "Requirements-first"] },
        ],
      },
      {
        label: "Also shipped with",
        note: "Previous roles and projects",
        groups: [
          { title: "AI", items: ["Claude", "OpenAI", "Multi-agent systems", "Tool use"] },
          { title: "Languages & frameworks", items: ["Python", "Rust", "Java / Spring Boot", "React", "Next.js"] },
          { title: "Cloud & data", items: ["AWS (S3)", "MySQL", "SQL Server", "DB2", "Solana / Anchor"] },
        ],
      },
    ],
  },

  experience: {
    eyebrow: "Experience",
    title: "Where I've worked.",
    jobs: [
      {
        when: "Aug 2025 — Present",
        role: "Blockchain Developer",
        company: "CPQD · Campinas, Brazil",
        logo: "/img/cpqd_logo.svg",
        text: "Backend, infrastructure and smart contracts for Projeto Neo (Neoenergia) and Rede Blockchain Brasil. TypeScript APIs on PostgreSQL, CI/CD and automated testing that raised development throughput by at least 20%, shipped to Kubernetes on Oracle OKE.",
      },
      {
        when: "May 2024 — Nov 2024",
        role: "Software Developer",
        company: "Software 4U (Gedui) · Remote",
        logo: "/img/SF4U.png",
        text: "REST services and microservices in Node.js (Express) and Java (Spring Boot) for a school-management platform. Containerized the delivery pipeline with Docker, cutting deploy time roughly in half, and integrated AWS S3 for image storage.",
      },
      {
        when: "Aug 2021 — Sep 2023",
        role: "Database Analyst (intern)",
        company: "Kyndryl · Hortolândia, Brazil",
        logo: "/img/kyndryl_logo-1.png",
        text: "SQL Server and DB2 estates for enterprise clients: user and permission management, administrator profiles across Windows and UNIX servers, and level-1 support.",
      },
    ],
    educationLabel: "Education",
    education: [
      { title: "Postgraduate Diploma, AI for Developers", rest: "FIAP · 2025 – 2026" },
      { title: "BSc, Information Systems", rest: "PUC-Campinas · 2019 – 2024" },
    ],
    languagesLabel: "Languages",
    languages: [
      { title: "Portuguese", rest: "native" },
      { title: "English", rest: "professional working proficiency" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "What teams usually ask.",
    items: [
      {
        q: "What kind of role are you looking for?",
        a: "Backend engineering: APIs and services in TypeScript or Go, the data layer behind them and the infrastructure they run on. Blockchain and AI agents are specialties I bring along, not requirements for the role.",
      },
      {
        q: "Do you take remote contract work?",
        a: "Yes. I'm open to full-time roles and to remote contracts with international teams, with working-hour overlap for Europe and the US. Relocation is welcome too.",
      },
      {
        q: "Do you only work on blockchain?",
        a: "No. Most of my day is backend work — typed APIs, PostgreSQL, testing, CI/CD and Kubernetes. Blockchain is the domain where I learned to build for correctness, and that habit carries over to any system that handles money or regulated data.",
      },
      {
        q: "What have you built with AI?",
        a: "Agents and multi-agent systems on the Claude and OpenAI APIs, plus a postgraduate diploma in AI for developers. I also use AI daily in development — for review, test generation and documentation — with the same rule I apply to contracts: nothing ships without verification.",
      },
      {
        q: "How do you approach code that can't be wrong?",
        a: "Requirements first, then tests: BDD scenarios for behavior, unit and E2E suites for the code, static analysis, and explicit review of access control and failure paths before anything is deployed.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Need a backend engineer who ships from contract to cluster?",
    sub: "Send a short note with the role or project, the stack, and the timing. I usually reply within a day or two.",
  },

  footer: {
    role: "Backend Engineer · Campinas · Worldwide",
    pages: "Pages",
    socials: "Socials",
    built: "Built with Next.js",
  },
};
