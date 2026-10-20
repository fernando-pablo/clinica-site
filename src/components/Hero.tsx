import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">{site.name}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">{site.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
             className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow hover:bg-brand-700">
            Agendar pelo WhatsApp
          </a>
          <a href="#servicos"
             className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100">
            Ver especialidades
          </a>
        </div>
      </div>
    </section>
  );
}
