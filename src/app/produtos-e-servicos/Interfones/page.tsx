import Footer from "../../components/Footer";
import Header from "@/app/components/Header";
import HeroInterfones from "./components/HeroInterfones"; 
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import InterfonesCTA from "./components/InterfonesCTA";
// Você precisará criar HeroInterfones.tsx e HeroInterfones.module.css nesta pasta.

export default function InterfonesPage() {
  return (
    <main>
      <Header />
      <HeroInterfones />
      <Benefits />
      <Testimonials />
      <InterfonesCTA />
      <Footer />
    </main>
  );
}