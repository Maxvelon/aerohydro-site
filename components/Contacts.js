export default function Contacts({ t }) {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold">{t.contactsTitle}</h2>
      <p className="mt-4 text-lg">{t.contactsText}</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">{t.contactButton}</button>
    </section>
  );
}
