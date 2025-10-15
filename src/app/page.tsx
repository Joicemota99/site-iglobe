// src/app/page.tsx
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      {/* Barra superior do cabeçalho */}
      <div className="bg-[#04169e] text-white py-2 text-center text-sm md:text-base">
        <p>Precisa trocar de Provedor? Conecte-se com mais agilidade, segurança e atenção.</p>
      </div>

      {/* Renderiza o componente Header */}
      <Header />

      {/* Conteúdo principal da página inicial */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Página Inicial</h1>
        <p className="mt-4 text-center">
          Aqui será o conteúdo da página principal.
        </p>
      </div>
    </main>
  );
}