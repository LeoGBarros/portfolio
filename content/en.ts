export const en = {
  meta: {
    title: "Leonardo Barros — Blockchain Engineer",
    description:
      "Leonardo Barros, blockchain engineer in Campinas, Brazil. Solidity smart contracts, Go and TypeScript backends, Hyperledger Besu and Kubernetes for production EVM systems.",
    ogDescription: "Smart contracts and backends for production EVM systems in regulated environments.",
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
    "Open to relocation",
    "Blockchain engineer · smart contracts & backend",
    "Solidity · EVM · Foundry · Hardhat",
    "Go · TypeScript · Viem",
    "Hyperledger Besu · QBFT",
    "Kubernetes · Helm · Gateway API",
    "Campinas, Brazil · remote worldwide",
  ],

  hero: {
    hello: "Hello, I'm",
    titleLine1: "Production blockchain,",
    titleLine2: "from contract to cluster.",
    rotatorLead: "I build",
    rotatorWords: [
      "smart contracts",
      "on-chain indexers",
      "type-safe chain APIs",
      "permissioned networks",
      "tokenization platforms",
    ],
    lead:
      "I write the Solidity that governs consensus membership on Brazil's national permissioned blockchain network, and the contracts and TypeScript services behind a tokenization platform for carbon credits and renewable-energy certificates.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "See selected work",
    status: "Available for full-time roles · open to relocation",
    codeAria: "Profile summary as a Solidity contract",
  },

  services: {
    eyebrow: "What I build",
    title: "Work I've shipped in production.",
    sub: "Regulated environments, permissioned networks, and code that has to stay correct after the demo.",
    items: [
      {
        title: "Smart contracts",
        text: "Solidity for EVM networks, written for review: explicit access control, reentrancy guards, upgrade paths that don't put storage at risk, and Slither findings closed before deploy.",
        tags: ["Solidity", "Foundry", "Hardhat", "ERC-20 / 1155"],
      },
      {
        title: "Chain integration & backend",
        text: "Type-safe services that read, sign and index on-chain data. The contract↔backend ABI boundary treated as a versioned API contract, not a copy-pasted JSON file.",
        tags: ["Go", "TypeScript", "Viem", "Fastify · Zod · Prisma"],
      },
      {
        title: "Network & infrastructure",
        text: "Permissioned Besu networks with QBFT consensus, validator transitions and node operations, shipped to Kubernetes with Helm, Kustomize and the Gateway API.",
        tags: ["Besu", "QBFT", "Kubernetes (OKE)", "GitHub Actions"],
      },
    ],
  },

  stats: {
    eyebrow: "Proof in numbers",
    title: "Shipped, measured.",
    items: [
      { value: 41, label: "BDD scenarios behind the RBB validator-selection contract" },
      { value: 6, label: "node live network used to prove the QBFT consensus handover" },
      { value: 95, suffix: "%", label: "minimum test coverage with Vitest on Projeto Neo" },
      { value: 20, prefix: "+", suffix: "%", label: "development throughput from CI/CD and test automation" },
      { value: 2, label: "production blockchain programs at CPQD" },
      { value: 2021, label: "working in industry since, from databases to the chain" },
    ] as { value: number; prefix?: string; suffix?: string; label: string }[],
  },

  work: {
    eyebrow: "Selected work",
    title: "Case studies.",
    sub: "Two programs at CPQD, an applied R&D institute in Campinas.",
    live: "Live",
    cases: [
      {
        meta: "CPQD · 2025 – present",
        title: "Rede Blockchain Brasil — on-chain validator selection",
        lead: "The Solidity mechanism that decides QBFT consensus membership for Brazil's shared permissioned blockchain network, queried directly by Hyperledger Besu.",
        points: [
          "Removes validators that stop producing blocks and handles readmission through governance.",
          "Upgradeability as a fixed-address ingress facade over replaceable logic instead of a UUPS proxy: no storage-collision or initialization risk, and the address pinned in every node's genesis stays stable.",
          "Proved the handover on a live 6-node network: Besu's QBFT transition config sits outside the genesis hash, so a running chain switches to contract-based selection without a reset.",
        ],
        tags: ["Solidity", "Foundry", "Besu", "QBFT", "BDD"],
      },
      {
        meta: "CPQD · client Neoenergia · 2025 – present",
        title: "Projeto Neo — marketplace for environmental assets",
        lead: "Smart contracts and REST backend of a dApp where I-REC renewable-energy certificates and carbon credits are issued, traded and retired as tokens, with on-chain traceability from issuance to retirement.",
        points: [
          "Token families across ERC-1155 and ERC-20 on parallel I-REC and carbon tracks, built with Hardhat + Ignition and TypeChain.",
          "REST API in TypeScript (Fastify, Zod, Prisma) reading and signing through Viem and Ethers.js.",
          "Hardened after audit: ReentrancyGuard on the token contracts, Slither findings closed, ABI boundary turned into a versioned contract.",
        ],
        tags: ["ERC-1155", "Hardhat", "Viem", "Fastify", "Kubernetes"],
      },
    ],
    projectsTitle: "Open source & personal projects",
    projects: [
      {
        href: "https://github.com/LeoGBarros/Solana-Zero-to-Hero-2-Deploy-Your-First-Anchor-Program",
        title: "Solana Speedrun — Zero to Hero",
        text: "Speedrun challenges with a program deployed through the Anchor framework, in Rust.",
        tags: ["Rust", "Anchor", "Solana"],
      },
      {
        href: "https://github.com/LeoGBarros/cre-chainlink",
        title: "CRE Chainlink",
        text: "Exploring the Chainlink Runtime Environment: smart contracts wired to off-chain data and services.",
        tags: ["Chainlink", "Solidity", "Oracles"],
      },
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
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Tools I ship with, daily.",
    groups: [
      { title: "Smart contracts", items: ["Solidity", "EVM", "ERC-20", "ERC-1155", "Foundry", "Hardhat + Ignition", "Slither", "OpenZeppelin"] },
      { title: "Blockchain infra", items: ["Hyperledger Besu", "QBFT", "Permissioned networks", "Genesis & validator transitions", "Solana / Anchor"] },
      { title: "Backend", items: ["Go", "TypeScript", "Node.js", "Fastify", "Zod", "Prisma", "Java / Spring Boot", "PostgreSQL", "MySQL"] },
      { title: "Chain integration", items: ["Viem", "Ethers.js", "TypeChain", "Event indexing", "gRPC"] },
      { title: "Infrastructure", items: ["Kubernetes (Oracle OKE)", "Helm", "Kustomize", "Gateway API", "Docker", "GitHub Actions", "GitLab CI"] },
      { title: "Practices", items: ["Requirements-first", "BDD / Gherkin", "Vitest", "E2E testing", "Code review", "AI-assisted development"] },
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
        text: "Smart contracts, backend and infrastructure for Rede Blockchain Brasil and Projeto Neo (Neoenergia). CI/CD and automated testing that raised development throughput by at least 20%, shipped to Kubernetes on Oracle OKE.",
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
        a: "Blockchain or backend engineering on production EVM systems: smart contracts, the services that integrate with them, and the infrastructure they run on. Full-time, remote or with relocation.",
      },
      {
        q: "Are you open to relocation?",
        a: "Yes. I'm based in Campinas, Brazil, and open to relocating or working remotely with overlap for EU and US teams.",
      },
      {
        q: "Public chains or permissioned networks?",
        a: "My production work is on permissioned EVM networks (Hyperledger Besu with QBFT). The contracts, tooling and integration patterns are the same EVM stack used on public chains, and I've built on Solana and Chainlink in personal projects.",
      },
      {
        q: "How do you approach contract security?",
        a: "Requirements first, then tests: BDD scenarios for behavior, Foundry or Hardhat suites for the code, static analysis with Slither, and explicit review of access control, reentrancy and upgrade paths before anything is deployed.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Need an engineer who ships from contract to cluster?",
    sub: "Send a short note with the role, the stack, and the timing. I usually reply within a day or two.",
  },

  footer: {
    role: "Blockchain Engineer · Campinas · Worldwide",
    pages: "Pages",
    socials: "Socials",
    built: "Built with Next.js",
  },
};
