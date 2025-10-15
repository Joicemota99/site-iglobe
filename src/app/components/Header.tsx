import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* O contêiner principal agora tem 3 colunas implícitas para Desktop:
          [Logo + Menu] [Espaço flexível] [Contato] */}
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Grupo Esquerdo: Logo e Menu */}
        <div className="flex items-center space-x-30 px-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-principal-slogan-azul.svg" 
              alt="Logo Igloobe"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu de navegação (Visível a partir do md) */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/sobre-nos" className={styles.navLink}>
              Sobre nós
            </Link>
            <Link href="/produtos-e-servicos" className={styles.navLink}>
              Produtos e serviços
            </Link>
            <Link href="/planos" className={styles.navLink}>
              Planos
            </Link>
          </nav>
        </div>
        
        {/* Grupo Direito: Informações de contato e localização (Visível a partir do lg) */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0">
            <Image
              src="/icons8-whatsapp.svg" 
              alt="Logo Igloobe"
              width={120}
              height={40}
              className="h-5 w-auto"
            />
          </Link>
            <span className="text-lg font-bold text-gray-800 px-2">71 98795-5190</span>
          </div>
          {/* Botão de menu para telas pequenas */}
          <button className="md:hidden text-gray-800 focus:outline-none">
            {/* Ícone de hambúrguer */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;