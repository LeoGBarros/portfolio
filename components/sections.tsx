import Image from "next/image";
import { Counter } from "@/components/Counter";
import { Rotator } from "@/components/Rotator";
import type { Dictionary } from "@/lib/i18n";

function SectionHead({ n, eyebrow, title, sub, id }: { n: string; eyebrow: string; title: string; sub?: string; id: string }) {
  return (
    <header className="section__head reveal">
      <p className="eyebrow mono">
        <span>{n}</span> / {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {sub && <p className="section__sub">{sub}</p>}
    </header>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags mono">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Ticker({ items }: { items: string[] }) {
  // Lista duplicada: a animação desloca -50% e recomeça sem emenda visível
  const loop = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {loop.map((t, i) => (
          <span key={i} className="ticker__item">
            <span>{t}</span>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="hero wrap" aria-label="Intro">
      <div className="hero__text">
        <p className="hero__hello mono">
          <Image src="/img/leo-profiles.jpg" alt="" className="hero__avatar" width={28} height={28} priority />
          {hero.hello} <strong>Leonardo Barros</strong>
        </p>

        <h1 className="hero__title">
          {hero.titleLine1}
          <br />
          <span className="grad-text">{hero.titleLine2}</span>
        </h1>

        <p className="hero__rotator">
          <span className="mono muted">{hero.rotatorLead}</span>
          <Rotator words={hero.rotatorWords} />
        </p>

        <p className="hero__lead">{hero.lead}</p>

        <div className="hero__ctas">
          <a href="#contact" className="btn btn--primary">
            {hero.ctaPrimary} <span aria-hidden="true">→</span>
          </a>
          <a href="#work" className="btn btn--ghost">
            {hero.ctaSecondary}
          </a>
        </div>

        <p className="hero__status mono">
          <span className="pulse" aria-hidden="true" />
          {hero.status}
        </p>
      </div>

      <div className="hero__code" aria-label={hero.codeAria}>
        <div className="code-card">
          <div className="code-card__bar">
            <span className="dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="mono">LeonardoBarros.sol</span>
          </div>
          <pre className="code-card__body">
            <code>
              <span className="c">{"// SPDX-License-Identifier: MIT"}</span>
              {"\n"}
              <span className="k">pragma solidity</span>
              {" ^0.8.24;\n\n"}
              <span className="k">contract</span> <span className="f">LeonardoBarros</span>
              {" {\n    "}
              <span className="t">string</span> <span className="k">public constant</span>
              {" role =\n        "}
              <span className="s">&quot;Backend Engineer&quot;</span>
              {";\n    "}
              <span className="t">string</span> <span className="k">public constant</span>
              {" base =\n        "}
              <span className="s">&quot;Campinas, BR&quot;</span>
              {";\n\n    "}
              <span className="t">string</span>
              {"[] "}
              <span className="k">public</span>
              {" stack = [\n        "}
              <span className="s">&quot;TypeScript&quot;</span>, <span className="s">&quot;Go&quot;</span>
              {",\n        "}
              <span className="s">&quot;PostgreSQL&quot;</span>, <span className="s">&quot;Kubernetes&quot;</span>
              {",\n        "}
              <span className="s">&quot;Solidity&quot;</span>, <span className="s">&quot;AI agents&quot;</span>
              {"\n    ];\n\n    "}
              <span className="c">{"/// correctness and access control"}</span>
              {"\n    "}
              <span className="c">{"/// come before elegance and gas"}</span>
              {"\n    "}
              <span className="k">function</span> <span className="f">hire</span>
              {"() "}
              <span className="k">external</span>
              {" {\n        "}
              <span className="f">emit</span> <span className="f">Conversation</span>
              {"(msg.sender);\n    }\n}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <section className="section wrap" id="services" aria-labelledby="services-title">
      <SectionHead n="01" id="services-title" eyebrow={services.eyebrow} title={services.title} sub={services.sub} />
      <div className="services">
        {services.items.map((s, i) => (
          <article key={s.title} className="service reveal">
            <span className="service__num mono">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <Tags items={s.tags} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function Stats({ stats }: { stats: Dictionary["stats"] }) {
  return (
    <section className="section wrap" id="numbers" aria-labelledby="numbers-title">
      <SectionHead n="02" id="numbers-title" eyebrow={stats.eyebrow} title={stats.title} />
      <div className="stats">
        {stats.items.map((s) => (
          <div key={s.label} className="stat reveal">
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work({ work }: { work: Dictionary["work"] }) {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <SectionHead n="03" id="work-title" eyebrow={work.eyebrow} title={work.title} sub={work.sub} />

      <div className="cases">
        {work.cases.map((c) => (
          <article key={c.title} className="case reveal">
            <div className="case__meta mono">
              <span>{c.meta}</span>
              <span className="badge">{work.live}</span>
            </div>
            <h3>{c.title}</h3>
            <p className="case__lead">{c.lead}</p>
            <ul className="case__points">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Tags items={c.tags} />
          </article>
        ))}
      </div>

      <h3 className="subhead mono reveal">{work.projectsTitle}</h3>
      <div className="projects">
        {work.projects.map((p, i) => (
          <a key={p.href} href={p.href} target="_blank" rel="noopener" className="project reveal">
            <div className="project__top">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
            <Tags items={p.tags} />
          </a>
        ))}
      </div>
    </section>
  );
}

export function Stack({ stack }: { stack: Dictionary["stack"] }) {
  return (
    <section className="section wrap" id="stack" aria-labelledby="stack-title">
      <SectionHead n="04" id="stack-title" eyebrow={stack.eyebrow} title={stack.title} />
      {stack.tiers.map((tier, t) => (
        <div key={tier.label} className={`stack__tier${t > 0 ? " stack__tier--secondary" : ""}`}>
          <p className="stack__tier-label mono reveal">
            {tier.label} <span className="muted">· {tier.note}</span>
          </p>
          <div className="stack">
            {tier.groups.map((g) => (
              <div key={g.title} className="stack__group reveal">
                <h3 className="mono">{g.title}</h3>
                <ul className="chips">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function Experience({ experience }: { experience: Dictionary["experience"] }) {
  return (
    <section className="section wrap" id="experience" aria-labelledby="experience-title">
      <SectionHead n="05" id="experience-title" eyebrow={experience.eyebrow} title={experience.title} />

      <ol className="timeline">
        {experience.jobs.map((job) => (
          <li key={job.when} className="job reveal">
            <div className="job__when mono">{job.when}</div>
            <div className="job__body">
              <div className="job__head">
                <Image src={job.logo} alt="" width={40} height={40} />
                <div>
                  <h3>{job.role}</h3>
                  <p className="mono muted">{job.company}</p>
                </div>
              </div>
              <p>{job.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="edu reveal">
        <div>
          <p className="mono muted">{experience.educationLabel}</p>
          {experience.education.map((e) => (
            <p key={e.title}>
              <strong>{e.title}</strong> — {e.rest}
            </p>
          ))}
        </div>
        <div>
          <p className="mono muted">{experience.languagesLabel}</p>
          {experience.languages.map((l) => (
            <p key={l.title}>
              <strong>{l.title}</strong> — {l.rest}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section className="section wrap" id="faq" aria-labelledby="faq-title">
      <SectionHead n="06" id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />
      <div className="faq">
        {faq.items.map((item) => (
          <details key={item.q} className="reveal">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact({ contact }: { contact: Dictionary["contact"] }) {
  return (
    <section className="section wrap" id="contact" aria-labelledby="contact-title">
      <div className="cta reveal">
        <p className="eyebrow mono">
          <span>07</span> / {contact.eyebrow}
        </p>
        <h2 id="contact-title">{contact.title}</h2>
        <p className="section__sub">{contact.sub}</p>
        <div className="hero__ctas">
          <a href="mailto:leoguedesbarros@gmail.com" className="btn btn--primary">
            leoguedesbarros@gmail.com <span aria-hidden="true">→</span>
          </a>
          <a href="https://www.linkedin.com/in/barros-leonardo/" target="_blank" rel="noopener" className="btn btn--ghost">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
