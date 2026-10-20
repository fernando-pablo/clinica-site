import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Primeiro item do Tab: quem navega pelo teclado ou leitor de tela pula direto o menu. */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-700 focus:shadow"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
