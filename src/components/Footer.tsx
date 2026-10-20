import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
    </footer>
  );
}
