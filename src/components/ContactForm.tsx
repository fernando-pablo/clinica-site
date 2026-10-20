"use client";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";

// Sem backend: o formulário monta a mensagem e abre o WhatsApp da clínica.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name.trim()}. ${msg.trim()}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/30";

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block text-sm font-medium text-slate-700">
        Seu nome
        <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Como podemos ajudar?
        <textarea required rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} className={field} />
      </label>
      <button className="w-full rounded-full bg-brand-700 py-3 font-semibold text-white hover:bg-brand-800">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
