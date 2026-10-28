"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

const sections = ["services", "work", "stack", "experience", "faq"] as const;

export function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const other: Locale = lang === "en" ? "pt" : "en";
  // Mesma página no outro idioma: troca só o primeiro segmento
  const switchHref = pathname.replace(/^\/(en|pt)(?=\/|$)/, `/${other}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Link ativo conforme a seção visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <Link href={`/${lang}`} className="logo" aria-label={nav.home}>
        <span className="logo__mark">lb</span>
        <span className="logo__dot">.</span>dev
      </Link>

      <nav className={`nav${open ? " is-open" : ""}`} id="nav" aria-label="Primary">
        {sections.map((id) => (
          <a key={id} href={`/${lang}#${id}`} onClick={close} className={active === id ? "is-active" : undefined}>
            {nav[id]}
          </a>
        ))}
        <a href={`/${lang}#contact`} className="nav__cta" onClick={close}>
          {nav.contact}
        </a>
        <div className="lang" role="group" aria-label="Language">
          <Link href={`/${lang}`} className="lang__opt is-current" aria-current="true" hrefLang={lang} onClick={close}>
            {lang.toUpperCase()}
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={switchHref} className="lang__opt" hrefLang={other} title={nav.switchTo} onClick={close}>
            {other.toUpperCase()}
          </Link>
        </div>
      </nav>

      <button
        className="menu-btn"
        aria-label={open ? nav.menuClose : nav.menuOpen}
        aria-expanded={open}
        aria-controls="nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
