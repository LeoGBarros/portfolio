import type { Dictionary, Locale } from "@/lib/i18n";

const sections = ["services", "work", "stack", "experience", "contact"] as const;

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <p className="footer__mark" aria-hidden="true">
            LB
          </p>
          <p>
            <strong>Leonardo Barros</strong>
          </p>
          <p className="mono muted">{dict.footer.role}</p>
        </div>

        <nav className="footer__col" aria-label={dict.footer.pages}>
          <p className="mono muted">{dict.footer.pages}</p>
          {sections.map((id) => (
            <a key={id} href={`/${lang}#${id}`}>
              {dict.nav[id]}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label={dict.footer.socials}>
          <p className="mono muted">{dict.footer.socials}</p>
          <a href="https://github.com/LeoGBarros" target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/barros-leonardo/" target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5519998230021" target="_blank" rel="noopener">
            WhatsApp ↗
          </a>
          <a href="mailto:leoguedesbarros@gmail.com">Email</a>
        </nav>
      </div>
      <div className="wrap footer__bottom mono muted">
        <span>© {new Date().getFullYear()} Leonardo Barros</span>
        <span>{dict.footer.built}</span>
      </div>
    </footer>
  );
}
