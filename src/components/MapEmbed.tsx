"use client";
import { useEffect, useRef, useState } from "react";

type Props = { query: string; address: string };

// O mapa incorporado do Google carrega cerca de 400 KiB de JavaScript e derrubava a nota de
// desempenho no celular. Aqui ele só é carregado quando a pessoa pede ("fachada").
// Bônus de privacidade: o Google só recebe a visita depois desse clique.
export default function MapEmbed({ query, address }: Props) {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // O botão some quando o mapa aparece: o foco vai para o mapa, para quem usa teclado não se perder.
  useEffect(() => {
    if (loaded) iframeRef.current?.focus();
  }, [loaded]);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  if (loaded) {
    return (
      <iframe
        ref={iframeRef}
        title="Mapa da clínica"
        className="h-80 w-full rounded-2xl border-0 lg:h-full"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
      />
    );
  }

  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-brand-50 p-6 text-center lg:h-full">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-12 w-12 text-brand-700" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
      <p className="max-w-xs text-slate-700">{address}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-800"
        >
          Ver mapa
        </button>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}
