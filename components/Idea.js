export default function Idea({ t }) {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold">{t.ideaTitle}</h2>
      <p className="mt-4 text-lg">{t.ideaText}</p>
    </section>
  );
}
