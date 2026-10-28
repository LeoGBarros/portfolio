import { notFound } from "next/navigation";
import { Contact, Experience, Faq, Hero, Services, Stack, Stats, Ticker, Work } from "@/components/sections";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Ticker items={dict.ticker} />
      <main id="top">
        <Hero hero={dict.hero} />
        <Services services={dict.services} />
        <Stats stats={dict.stats} />
        <Work work={dict.work} />
        <Stack stack={dict.stack} />
        <Experience experience={dict.experience} />
        <Faq faq={dict.faq} />
        <Contact contact={dict.contact} />
      </main>
    </>
  );
}
