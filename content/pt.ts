import type { Dictionary } from "@/lib/i18n";

export const pt: Dictionary = {
  meta: {
    title: "Leonardo Barros — Engenheiro Blockchain",
    description:
      "Leonardo Barros, engenheiro blockchain em Campinas. Smart contracts em Solidity, backends em Go e TypeScript, Hyperledger Besu e Kubernetes para sistemas EVM em produção.",
    ogDescription: "Smart contracts e backends para sistemas EVM em produção, em ambientes regulados.",
  },

  nav: {
    services: "O que faço",
    work: "Trabalhos",
    stack: "Stack",
    experience: "Experiência",
    faq: "FAQ",
    contact: "Contato",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    switchTo: "View in English",
    home: "Leonardo Barros, voltar ao topo",
  },

  ticker: [
    "Aberto a realocação",
    "Engenheiro blockchain · smart contracts & backend",
    "Solidity · EVM · Foundry · Hardhat",
    "Go · TypeScript · Viem",
    "Hyperledger Besu · QBFT",
    "Kubernetes · Helm · Gateway API",
    "Campinas, Brasil · remoto para o mundo",
  ],

  hero: {
    hello: "Olá, eu sou",
    titleLine1: "Blockchain em produção,",
    titleLine2: "do contrato ao cluster.",
    rotatorLead: "Eu construo",
    rotatorWords: [
      "smart contracts",
      "indexadores on-chain",
      "APIs tipadas para a chain",
      "redes permissionadas",
      "plataformas de tokenização",
    ],
    lead:
      "Escrevo o Solidity que define quem participa do consenso na rede blockchain permissionada nacional do Brasil, e os contratos e serviços TypeScript de uma plataforma de tokenização de créditos de carbono e certificados de energia renovável.",
    ctaPrimary: "Vamos conversar",
    ctaSecondary: "Ver trabalhos",
    status: "Disponível para vagas CLT/full-time · aberto a realocação",
    codeAria: "Resumo do perfil escrito como contrato Solidity",
  },

  services: {
    eyebrow: "O que faço",
    title: "Trabalho que já está em produção.",
    sub: "Ambientes regulados, redes permissionadas e código que precisa continuar correto depois da demo.",
    items: [
      {
        title: "Smart contracts",
        text: "Solidity para redes EVM, escrito para ser revisado: controle de acesso explícito, proteção contra reentrância, caminhos de upgrade que não arriscam o storage e achados do Slither resolvidos antes do deploy.",
        tags: ["Solidity", "Foundry", "Hardhat", "ERC-20 / 1155"],
      },
      {
        title: "Integração com a chain & backend",
        text: "Serviços tipados que leem, assinam e indexam dados on-chain. A fronteira de ABI entre contrato e backend tratada como contrato de API versionado, não como JSON copiado e colado.",
        tags: ["Go", "TypeScript", "Viem", "Fastify · Zod · Prisma"],
      },
      {
        title: "Rede & infraestrutura",
        text: "Redes Besu permissionadas com consenso QBFT, transições de validadores e operação de nós, publicadas em Kubernetes com Helm, Kustomize e Gateway API.",
        tags: ["Besu", "QBFT", "Kubernetes (OKE)", "GitHub Actions"],
      },
    ],
  },

  stats: {
    eyebrow: "Números",
    title: "Entregue e medido.",
    items: [
      { value: 41, label: "cenários BDD por trás do contrato de seleção de validadores da RBB" },
      { value: 6, label: "nós na rede real usada para provar a troca de consenso QBFT" },
      { value: 95, suffix: "%", label: "de cobertura mínima de testes com Vitest no Projeto Neo" },
      { value: 20, prefix: "+", suffix: "%", label: "de vazão de desenvolvimento com CI/CD e testes automatizados" },
      { value: 2, label: "programas de blockchain em produção no CPQD" },
      { value: 2021, label: "ano em que comecei na indústria, dos bancos de dados à chain" },
    ],
  },

  work: {
    eyebrow: "Trabalhos",
    title: "Estudos de caso.",
    sub: "Dois programas no CPQD, instituto de P&D aplicado em Campinas.",
    live: "Ativo",
    cases: [
      {
        meta: "CPQD · 2025 – atual",
        title: "Rede Blockchain Brasil — seleção de validadores on-chain",
        lead: "O mecanismo em Solidity que decide quem participa do consenso QBFT na rede blockchain permissionada compartilhada do Brasil, consultado diretamente pelo Hyperledger Besu.",
        points: [
          "Remove validadores que param de produzir blocos e trata a readmissão por governança.",
          "Upgrade por uma fachada de entrada em endereço fixo sobre lógica substituível, em vez de proxy UUPS: sem risco de colisão de storage ou de inicialização, e o endereço fixado no genesis de cada nó continua estável.",
          "Provei a troca numa rede real de 6 nós: a configuração de transição do QBFT no Besu fica fora do hash do genesis, então uma chain em execução passa para a seleção por contrato sem reset.",
        ],
        tags: ["Solidity", "Foundry", "Besu", "QBFT", "BDD"],
      },
      {
        meta: "CPQD · cliente Neoenergia · 2025 – atual",
        title: "Projeto Neo — marketplace de ativos ambientais",
        lead: "Smart contracts e backend REST de um dApp em que certificados de energia renovável I-REC e créditos de carbono são emitidos, negociados e aposentados como tokens, com rastreabilidade on-chain da emissão à aposentadoria.",
        points: [
          "Famílias de tokens em ERC-1155 e ERC-20, com trilhas paralelas para I-REC e carbono, construídas com Hardhat + Ignition e TypeChain.",
          "API REST em TypeScript (Fastify, Zod, Prisma) que lê e assina via Viem e Ethers.js.",
          "Endurecido após auditoria: ReentrancyGuard nos contratos de token, achados do Slither resolvidos e a fronteira de ABI transformada em contrato versionado.",
        ],
        tags: ["ERC-1155", "Hardhat", "Viem", "Fastify", "Kubernetes"],
      },
    ],
    projectsTitle: "Open source & projetos pessoais",
    projects: [
      {
        href: "https://github.com/LeoGBarros/Solana-Zero-to-Hero-2-Deploy-Your-First-Anchor-Program",
        title: "Solana Speedrun — Zero to Hero",
        text: "Desafios do Speedrun com um programa publicado pelo framework Anchor, em Rust.",
        tags: ["Rust", "Anchor", "Solana"],
      },
      {
        href: "https://github.com/LeoGBarros/cre-chainlink",
        title: "CRE Chainlink",
        text: "Explorando o Chainlink Runtime Environment: smart contracts ligados a dados e serviços off-chain.",
        tags: ["Chainlink", "Solidity", "Oráculos"],
      },
      {
        href: "https://github.com/LeoGBarros/APP-TCC",
        title: "Sparklly",
        text: "App para empregadores domésticos organizarem agendas e encontrarem serviços.",
        tags: ["TypeScript", "Go", "PostgreSQL", "Docker"],
      },
      {
        href: "https://github.com/LeoGBarros/SuperTrunfo",
        title: "Super Trunfo API",
        text: "Backend de jogo de cartas: gestão de usuários e admins, cartas e baralhos, e partida completa.",
        tags: ["REST", "Auth", "Lógica de jogo"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Ferramentas do dia a dia.",
    groups: [
      { title: "Smart contracts", items: ["Solidity", "EVM", "ERC-20", "ERC-1155", "Foundry", "Hardhat + Ignition", "Slither", "OpenZeppelin"] },
      { title: "Infra blockchain", items: ["Hyperledger Besu", "QBFT", "Redes permissionadas", "Genesis & transição de validadores", "Solana / Anchor"] },
      { title: "Backend", items: ["Go", "TypeScript", "Node.js", "Fastify", "Zod", "Prisma", "Java / Spring Boot", "PostgreSQL", "MySQL"] },
      { title: "Integração com a chain", items: ["Viem", "Ethers.js", "TypeChain", "Indexação de eventos", "gRPC"] },
      { title: "Infraestrutura", items: ["Kubernetes (Oracle OKE)", "Helm", "Kustomize", "Gateway API", "Docker", "GitHub Actions", "GitLab CI"] },
      { title: "Práticas", items: ["Requisitos primeiro", "BDD / Gherkin", "Vitest", "Testes E2E", "Code review", "Desenvolvimento assistido por IA"] },
    ],
  },

  experience: {
    eyebrow: "Experiência",
    title: "Onde trabalhei.",
    jobs: [
      {
        when: "Ago 2025 — Atual",
        role: "Desenvolvedor Blockchain",
        company: "CPQD · Campinas, Brasil",
        logo: "/img/cpqd_logo.svg",
        text: "Smart contracts, backend e infraestrutura para a Rede Blockchain Brasil e o Projeto Neo (Neoenergia). CI/CD e testes automatizados que aumentaram a vazão de desenvolvimento em pelo menos 20%, com deploy em Kubernetes na Oracle OKE.",
      },
      {
        when: "Mai 2024 — Nov 2024",
        role: "Desenvolvedor de Software",
        company: "Software 4U (Gedui) · Remoto",
        logo: "/img/SF4U.png",
        text: "Serviços REST e microsserviços em Node.js (Express) e Java (Spring Boot) para uma plataforma de gestão escolar. Conteinerizei o pipeline de entrega com Docker, reduzindo o tempo de deploy pela metade, e integrei o AWS S3 para armazenar imagens.",
      },
      {
        when: "Ago 2021 — Set 2023",
        role: "Analista de Banco de Dados (estágio)",
        company: "Kyndryl · Hortolândia, Brasil",
        logo: "/img/kyndryl_logo-1.png",
        text: "Ambientes SQL Server e DB2 de clientes corporativos: gestão de usuários e permissões, perfis de administrador em servidores Windows e UNIX, e suporte nível 1.",
      },
    ],
    educationLabel: "Formação",
    education: [
      { title: "Pós-graduação, IA para Devs", rest: "FIAP · 2025 – 2026" },
      { title: "Bacharelado, Sistemas de Informação", rest: "PUC-Campinas · 2019 – 2024" },
    ],
    languagesLabel: "Idiomas",
    languages: [
      { title: "Português", rest: "nativo" },
      { title: "Inglês", rest: "profissional" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "O que os times costumam perguntar.",
    items: [
      {
        q: "Que tipo de vaga você procura?",
        a: "Engenharia blockchain ou backend em sistemas EVM em produção: smart contracts, os serviços que se integram a eles e a infraestrutura em que rodam. Full-time, remoto ou com realocação.",
      },
      {
        q: "Você aceita se mudar?",
        a: "Sim. Moro em Campinas e estou aberto a me mudar ou a trabalhar remoto com sobreposição de horário com times da Europa e dos EUA.",
      },
      {
        q: "Chains públicas ou redes permissionadas?",
        a: "Meu trabalho em produção é em redes EVM permissionadas (Hyperledger Besu com QBFT). Contratos, ferramentas e padrões de integração são a mesma stack EVM das chains públicas, e já construí em Solana e Chainlink em projetos pessoais.",
      },
      {
        q: "Como você trata a segurança dos contratos?",
        a: "Requisitos primeiro, depois testes: cenários BDD para o comportamento, suítes Foundry ou Hardhat para o código, análise estática com Slither e revisão explícita de controle de acesso, reentrância e caminhos de upgrade antes de qualquer deploy.",
      },
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Precisa de alguém que entregue do contrato ao cluster?",
    sub: "Mande uma mensagem curta com a vaga, a stack e o prazo. Costumo responder em um ou dois dias.",
  },

  footer: {
    role: "Engenheiro Blockchain · Campinas · Mundo",
    pages: "Páginas",
    socials: "Redes",
    built: "Feito com Next.js",
  },
};
