import { useState } from "react";

export default function LanguageSwitcher({ setLocale }) {
  return (
    <div className="flex space-x-2">
      <button onClick={() => setLocale('en')} className="px-2 py-1 bg-gray-200 rounded">EN</button>
      <button onClick={() => setLocale('de')} className="px-2 py-1 bg-gray-200 rounded">DE</button>
      <button onClick={() => setLocale('ru')} className="px-2 py-1 bg-gray-200 rounded">RU</button>
    </div>
  );
}
