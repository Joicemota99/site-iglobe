// src/app/sobre-nos/page.tsx
import Header from "../components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Solutions from "./components/Solutions"; // Importa o novo componente
import About from "./components/About"; // Importa o novo componente
import Testimonials from "./components/Testimonials"; // Importa o novo componente
import FinalCTA from "./components/FinalCta"; // Importa o novo componente
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Solutions />
      <About />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}