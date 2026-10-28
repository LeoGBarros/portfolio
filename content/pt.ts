import type { Dictionary } from "@/lib/i18n";

export const pt: Dictionary = {
  meta: {
    title: "Leonardo Barros — Engenheiro Backend",
    description:
      "Leonardo Barros, engenheiro backend em Campinas. Serviços em TypeScript e Go, PostgreSQL, Kubernetes, agentes de IA e integração com blockchain para sistemas que não podem errar.",
    ogDescription: "Engenheiro backend para sistemas que não podem errar: TypeScript, Go, Kubernetes, agentes de IA e EVM.",
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
    "Aberto a CLT/full-time e contratos remotos",
    "Engenheiro backend · TypeScript · Go",
    "APIs REST & gRPC · PostgreSQL",
    "Kubernetes · Docker · GitHub Actions",
    "Agentes de IA · Claude · OpenAI",
    "Blockchain · Solidity · EVM · Viem",
    "Campinas, Brasil · remoto para o mundo",
  ],

  hero: {
    hello: "Olá, eu sou",
    titleLine1: "Engenharia backend,",
    titleLine2: "do contrato ao cluster.",
    rotatorLead: "Eu construo",
    rotatorWords: [
      "APIs REST & gRPC",
      "serviços orientados a eventos",
      "sistemas multiagentes",
      "indexadores on-chain",
      "smart contracts",
    ],
    lead:
      "Engenheiro backend em TypeScript e Go, em sistemas onde uma resposta errada custa dinheiro: as APIs, os indexadores e os deploys em Kubernetes de uma plataforma de tokenização de créditos de carbono, e o Solidity que governa o consenso da rede blockchain nacional do Brasil.",
    ctaPrimary: "Vamos conversar",
    ctaSecondary: "Ver trabalhos",
    status: "Aberto a vagas e contratos remotos · aceito realocação",
    codeAria: "Resumo do perfil escrito como contrato Solidity",
  },

  services: {
    eyebrow: "O que faço",
    title: "Backend que se sustenta em produção.",
    sub: "Serviços tipados, testados de ponta a ponta e publicados em Kubernetes, em ambientes regulados onde estar correto vem antes de ser elegante.",
    items: [
      {
        title: "APIs & serviços backend",
        text: "Serviços REST e gRPC em TypeScript e Go com schema em toda fronteira: Fastify, Zod e Prisma sobre PostgreSQL, com testes automatizados que mantêm a cobertura acima de 95%.",
        tags: ["TypeScript", "Go", "Fastify · Zod · Prisma", "PostgreSQL"],
      },
      {
        title: "Infraestrutura & entrega",
        text: "Serviços em contêiner publicados em Kubernetes na Oracle OKE com Helm, Kustomize e Gateway API, atrás de pipelines de CI/CD que aumentaram a vazão do time em pelo menos 20%.",
        tags: ["Kubernetes", "Docker", "GitHub Actions", "Helm"],
      },
      {
        title: "Agentes de IA",
        text: "Agentes e sistemas multiagentes sobre as APIs da Claude e da OpenAI: uso de ferramentas, orquestração entre agentes especializados e as salvaguardas que mantêm a saída do modelo longe de onde um erro sai caro.",
        tags: ["Claude", "OpenAI", "Multiagentes", "Tool use"],
      },
      {
        title: "Integração com blockchain",
        text: "Contratos Solidity escritos para serem revisados e os serviços que os leem, assinam e indexam, com a fronteira de ABI entre contrato e backend tratada como contrato de API versionado.",
        tags: ["Solidity", "EVM", "Viem", "Foundry · Hardhat"],
      },
    ],
  },

  stats: {
    eyebrow: "Números",
    title: "Entregue e medido.",
    items: [
      { value: 95, suffix: "%", label: "de cobertura mínima de testes com Vitest no backend do Projeto Neo" },
      { value: 20, prefix: "+", suffix: "%", label: "de vazão de desenvolvimento com CI/CD e testes automatizados" },
      { value: 41, label: "cenários BDD por trás do contrato de seleção de validadores da RBB" },
      { value: 6, label: "nós na rede real usada para provar a troca de consenso QBFT" },
      { value: 2, label: "programas em produção no CPQD, da API ao cluster" },
      { value: 2021, label: "ano em que comecei na indústria, dos bancos de dados aos sistemas distribuídos" },
    ],
  },

  work: {
    eyebrow: "Trabalhos",
    title: "Estudos de caso.",
    sub: "Dois programas no CPQD, instituto de P&D aplicado em Campinas.",
    live: "Ativo",
    cases: [
      {
        meta: "CPQD · cliente Neoenergia · 2025 – atual",
        title: "Projeto Neo — backend de um marketplace de ativos ambientais",
        lead: "Backend REST e smart contracts de uma plataforma em que certificados de energia renovável I-REC e créditos de carbono são emitidos, negociados e aposentados como tokens, com rastreabilidade da emissão à aposentadoria.",
        points: [
          "API REST em TypeScript (Fastify, Zod, Prisma) sobre PostgreSQL, que lê e assina on-chain via Viem e Ethers.js.",
          "Transformei a fronteira de ABI entre contrato e backend — a origem mais frequente de defeitos em produção — em contrato de API versionado.",
          "CI/CD e Vitest com cobertura mínima de 95%; deploy em Kubernetes (Oracle OKE) com Helm, Kustomize e Gateway API.",
        ],
        tags: ["TypeScript", "Fastify", "PostgreSQL", "Kubernetes", "Viem"],
      },
      {
        meta: "CPQD · 2025 – atual",
        title: "Rede Blockchain Brasil — seleção de validadores on-chain",
        lead: "O mecanismo em Solidity que decide quem participa do consenso QBFT na rede blockchain permissionada compartilhada do Brasil, consultado diretamente pelo Hyperledger Besu.",
        points: [
          "Remove validadores que param de produzir blocos e trata a readmissão por governança.",
          "Upgrade por uma fachada em endereço fixo sobre lógica substituível, em vez de proxy UUPS: sem risco de colisão de storage, e o endereço fixado no genesis de cada nó continua estável.",
          "Provei a troca numa rede real de 6 nós: uma chain em execução passa para a seleção por contrato sem reset. Entregue com requisitos primeiro e 41 cenários BDD.",
        ],
        tags: ["Solidity", "Foundry", "Besu", "QBFT", "BDD"],
      },
    ],
    projectsTitle: "Open source & projetos pessoais",
    projects: [
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
      {
        href: "https://github.com/LeoGBarros/cre-chainlink",
        title: "CRE Chainlink",
        text: "Explorando o Chainlink Runtime Environment: smart contracts ligados a dados e serviços off-chain.",
        tags: ["Chainlink", "Solidity", "Oráculos"],
      },
      {
        href: "https://github.com/LeoGBarros/Solana-Zero-to-Hero-2-Deploy-Your-First-Anchor-Program",
        title: "Solana Speedrun — Zero to Hero",
        text: "Desafios do Speedrun com um programa publicado pelo framework Anchor, em Rust.",
        tags: ["Rust", "Anchor", "Solana"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Ferramentas com que entrego.",
    tiers: [
      {
        label: "Em produção",
        note: "No dia a dia, em sistemas no ar hoje",
        groups: [
          { title: "Backend", items: ["TypeScript", "Node.js", "Go", "Fastify", "Zod", "Prisma", "PostgreSQL", "REST", "gRPC"] },
          { title: "Infraestrutura", items: ["Kubernetes (Oracle OKE)", "Docker", "Helm", "Kustomize", "Gateway API", "GitHub Actions", "GitLab CI"] },
          { title: "Blockchain", items: ["Solidity", "EVM / Ethereum", "Viem", "Ethers.js", "Hardhat", "Foundry", "Hyperledger Besu"] },
          { title: "Qualidade", items: ["Vitest", "BDD / Gherkin", "Testes E2E", "Slither", "Code review", "Requisitos primeiro"] },
        ],
      },
      {
        label: "Também já entreguei com",
        note: "Empregos e projetos anteriores",
        groups: [
          { title: "IA", items: ["Claude", "OpenAI", "Sistemas multiagentes", "Tool use"] },
          { title: "Linguagens & frameworks", items: ["Python", "Rust", "Java / Spring Boot", "React", "Next.js"] },
          { title: "Cloud & dados", items: ["AWS (S3)", "MySQL", "SQL Server", "DB2", "Solana / Anchor"] },
        ],
      },
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
        text: "Backend, infraestrutura e smart contracts para o Projeto Neo (Neoenergia) e a Rede Blockchain Brasil. APIs TypeScript sobre PostgreSQL, CI/CD e testes automatizados que aumentaram a vazão de desenvolvimento em pelo menos 20%, com deploy em Kubernetes na Oracle OKE.",
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
        a: "Engenharia backend: APIs e serviços em TypeScript ou Go, a camada de dados por trás deles e a infraestrutura em que rodam. Blockchain e agentes de IA são especialidades que trago junto, não requisitos da vaga.",
      },
      {
        q: "Você aceita contrato remoto?",
        a: "Sim. Estou aberto a vagas CLT/full-time e a contratos remotos com times internacionais, com sobreposição de horário com Europa e EUA. Também aceito realocação.",
      },
      {
        q: "Você só trabalha com blockchain?",
        a: "Não. A maior parte do meu dia é backend: APIs tipadas, PostgreSQL, testes, CI/CD e Kubernetes. Blockchain é o domínio onde aprendi a construir pensando em correção, e esse hábito vale para qualquer sistema que lida com dinheiro ou dado regulado.",
      },
      {
        q: "O que você já construiu com IA?",
        a: "Agentes e sistemas multiagentes sobre as APIs da Claude e da OpenAI, além da pós-graduação em IA para devs. Também uso IA todo dia no desenvolvimento — revisão, geração de testes e documentação — com a mesma regra que aplico a contratos: nada vai para produção sem verificação.",
      },
      {
        q: "Como você trata código que não pode errar?",
        a: "Requisitos primeiro, depois testes: cenários BDD para o comportamento, suítes unitárias e E2E para o código, análise estática e revisão explícita de controle de acesso e caminhos de falha antes de qualquer deploy.",
      },
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Precisa de um engenheiro backend que entregue do contrato ao cluster?",
    sub: "Mande uma mensagem curta com a vaga ou o projeto, a stack e o prazo. Costumo responder em um ou dois dias.",
  },

  footer: {
    role: "Engenheiro Backend · Campinas · Mundo",
    pages: "Páginas",
    socials: "Redes",
    built: "Feito com Next.js",
  },
};
