import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
       className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg hover:scale-105">
      💬
    </a>
  );
}
