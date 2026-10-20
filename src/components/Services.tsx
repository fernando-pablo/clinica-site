import Section from "./Section";
import { site } from "@/lib/site";

export default function Services() {
  return (
    <Section id="servicos" title="Nossas especialidades" subtitle="Tudo o que você precisa em um só lugar.">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((s) => (
          <li key={s.title} className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
            <span className="text-3xl" aria-hidden>{s.icon}</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-1 text-slate-600">{s.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
