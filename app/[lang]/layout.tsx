import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Gabarito, Oxanium, Share_Tech_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Effects } from "@/components/Effects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

const display = Chakra_Petch({ weight: ["500", "600", "700"], subsets: ["latin"], variable: "--ff-display" });
const sans = Gabarito({ subsets: ["latin"], variable: "--ff-sans" });
const label = Oxanium({ subsets: ["latin"], variable: "--ff-label" });
const code = Share_Tech_Mono({ weight: "400", subsets: ["latin"], variable: "--ff-code" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// SITE_URL define o domínio final; na Vercel, cai no domínio de produção do projeto
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const viewport: Viewport = { themeColor: "#0a0618" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    authors: [{ name: "Leonardo Guedes Barros" }],
    alternates: { languages: { en: "/en", "pt-BR": "/pt" } },
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.ogDescription,
      images: ["/img/leo-profiles.jpg"],
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Guedes Barros",
  jobTitle: "Blockchain Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Campinas", addressCountry: "BR" },
  email: "mailto:leoguedesbarros@gmail.com",
  sameAs: ["https://www.linkedin.com/in/barros-leonardo/", "https://github.com/LeoGBarros"],
  knowsAbout: ["Solidity", "EVM", "Hyperledger Besu", "QBFT", "Go", "TypeScript", "Viem", "Kubernetes"],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${display.variable} ${sans.variable} ${label.variable} ${code.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca JS ativo antes da pintura, para o reveal não piscar conteúdo */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <div className="bg-glow" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        <Header lang={lang} nav={dict.nav} />
        {children}
        <Footer lang={lang} dict={dict} />
        <Effects />
      </body>
    </html>
  );
}
