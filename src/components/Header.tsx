import { site, whatsappLink } from "@/lib/site";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="font-bold text-brand-700">{site.name}</a>
        <nav aria-label="Principal" className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-700">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
             className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800">
            Agendar
          </a>
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
