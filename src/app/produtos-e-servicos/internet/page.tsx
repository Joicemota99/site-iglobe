// src/app/produtos-e-servicos/internet/page.tsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroInternet from "./components/HeroInternet";
import BenefitsInternet from "./components/BenefitsInternet"; // Importa o novo componente
import Plans from "./components/Plans"; // Import the new component
import TestimonialsCTA from "./components/TestimonialsCTA"; // Importa o novo componente

export default function InternetPage() {
  return (
    <main>
      <Header />
      <HeroInternet />
      <BenefitsInternet />
      <Plans />
      <TestimonialsCTA />
      <Footer />
    </main>
  );
}