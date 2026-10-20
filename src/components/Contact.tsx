import Section from "./Section";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  const { street, city, region, zip } = site.address;
  const q = encodeURIComponent(`${street}, ${city} - ${region}`);
  return (
    <Section id="contato" title="Agende sua consulta" subtitle="Fale com a recepção ou nos visite." alt>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <ContactForm />
          <address className="not-italic text-slate-700">
            <p className="font-semibold text-slate-900">Endereço</p>
            <p>{street}, {city} - {region}, {zip}</p>
            <p className="mt-3 font-semibold text-slate-900">Telefone</p>
            <a href={`tel:+${site.whatsapp}`} className="hover:text-brand-600">{site.phone}</a>
          </address>
          <div>
            <p className="font-semibold text-slate-900">Horários</p>
            <ul className="text-slate-700">
              {site.hours.map((h) => <li key={h.days}>{h.days}: {h.time}</li>)}
            </ul>
          </div>
        </div>
        <iframe title="Mapa da clínica" loading="lazy" className="h-80 w-full rounded-2xl border-0 lg:h-full"
          src={`https://www.google.com/maps?q=${q}&output=embed`} />
      </div>
    </Section>
  );
}
