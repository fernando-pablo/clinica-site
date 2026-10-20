import type { ReactNode } from "react";

type Props = { id: string; title: string; subtitle?: string; children: ReactNode; alt?: boolean };

export default function Section({ id, title, subtitle, children, alt }: Props) {
  return (
    <section id={id} className={alt ? "bg-slate-50" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
