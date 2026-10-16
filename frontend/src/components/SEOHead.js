
import Head from "next/head";
import { useLanguage } from "@/components/LanguageContext";

const translations = {
  english: {
    title: "Dmytro | Ukrainian Painter",
    description: "Discover original paintings by Dmytro, a Ukrainian painter.",
  },
  german: {
    title: "Dmytro | Ukrainischer Maler",
    description: "Entdecken Sie die Gemälde von Dmytro, einem ukrainischen Maler.",
  },
  ukrainian: {
    title: "Дмитро | Український художник",
    description: "Відкрийте для себе картини Дмитра — українського художника.",
  },
};

export default function SEOHead({ title, description }) {
  const { language } = useLanguage();
  const seo = translations[language] || translations.english;

  return (
    <Head>
      <title>{title || seo.title}</title>
      <meta name="description" content={description || seo.description} />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || seo.title} />
      <meta property="og:description" content={description || seo.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
