export default function Hero({ t }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-blue-200 text-center">
      <h1 className="text-5xl font-bold">{t.heroTitle}</h1>
      <p className="mt-4 text-xl">{t.heroSubtitle}</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">{t.heroButton}</button>
    </section>
  );
}
