import Section from "./Section";
import { site } from "@/lib/site";

export default function Testimonials() {
  return (
    <Section id="depoimentos" title="Quem já foi atendido">
      <div className="grid gap-6 md:grid-cols-3">
        {site.testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-slate-200 p-6">
            <blockquote className="text-slate-700">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-slate-900">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
