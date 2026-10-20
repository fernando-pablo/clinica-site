import Section from "./Section";
import { site } from "@/lib/site";

export default function Team() {
  return (
    <Section id="equipe" title="Nossa equipe" alt>
      <ul className="grid gap-6 sm:grid-cols-3">
        {site.team.map((p) => (
          <li key={p.name} className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-2xl font-bold text-brand-700">
              {p.name.split(" ").slice(1, 3).map((w) => w[0]).join("")}
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{p.name}</h3>
            <p className="text-sm text-slate-600">{p.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
