import { useState } from "react";
import Hero from "../components/Hero";
import Idea from "../components/Idea";
import Economics from "../components/Economics";
import Contacts from "../components/Contacts";
import LanguageSwitcher from "../components/LanguageSwitcher";

import en from "../locales/en.json";
import de from "../locales/de.json";
import ru from "../locales/ru.json";

export default function Home() {
  const [locale, setLocale] = useState('en');

  const translations = { en, de, ru };
  const t = translations[locale];

  return (
    <div>
      <header className="absolute top-4 right-4">
        <LanguageSwitcher setLocale={setLocale} />
      </header>
      <main>
        <Hero t={t} />
        <Idea t={t} />
        <Economics t={t} />
        <Contacts t={t} />
      </main>
    </div>
  );
}
