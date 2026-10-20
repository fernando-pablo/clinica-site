// Todo o conteúdo do site fica aqui. Para um cliente novo, edite só este arquivo.
export const site = {
  name: "Clínica Vida Plena",
  tagline: "Cuidado próximo, atendimento sem fila",
  description:
    "Clínica médica com clínico geral, pediatria, cardiologia e exames. Agende pelo WhatsApp e seja atendido com hora marcada.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinica-exemplo.vercel.app",
  phone: "(74) 99999-0000",
  whatsapp: "5574999990000", // formato internacional, só números
  email: "contato@clinicaexemplo.com.br",
  address: { street: "Rua das Flores, 123", city: "Sua Cidade", region: "BA", zip: "44000-000" },
  // `days` e `time` aparecem no site. `schema` vai para os dados estruturados do Google
  // (dias em inglês abreviados: Mo, Tu, We, Th, Fr, Sa, Su). Ao mudar um horário, mude os dois na mesma linha.
  hours: [
    { days: "Segunda a sexta", time: "07h às 18h", schema: "Mo-Fr 07:00-18:00" },
    { days: "Sábado", time: "07h às 12h", schema: "Sa 07:00-12:00" },
  ],
  services: [
    { title: "Clínico geral", text: "Consultas de rotina, check-up e acompanhamento contínuo.", icon: "🩺" },
    { title: "Pediatria", text: "Cuidado desde o recém-nascido até a adolescência.", icon: "🧸" },
    { title: "Cardiologia", text: "Prevenção, diagnóstico e tratamento do coração.", icon: "❤️" },
    { title: "Exames laboratoriais", text: "Coleta rápida, com resultados online.", icon: "🧪" },
    { title: "Ginecologia", text: "Saúde da mulher em todas as fases.", icon: "🌸" },
    { title: "Nutrição", text: "Plano alimentar personalizado e acompanhado.", icon: "🥗" },
  ],
  team: [
    { name: "Dra. Ana Souza", role: "Clínica geral • CRM 00000" },
    { name: "Dr. Carlos Lima", role: "Cardiologista • CRM 00000" },
    { name: "Dra. Marina Alves", role: "Pediatra • CRM 00000" },
  ],
  testimonials: [
    { name: "Maria J.", text: "Atendimento atencioso e sem demora. Recomendo a toda a família." },
    { name: "Roberto S.", text: "Fiz meus exames e a consulta no mesmo dia. Muito prático." },
    { name: "Fernanda C.", text: "A pediatra é ótima com as crianças. Meu filho adora ir." },
  ],
};

export type Site = typeof site;

export function whatsappLink(message = "Olá! Gostaria de agendar uma consulta.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
