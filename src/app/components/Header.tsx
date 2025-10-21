"use client"; // Esta linha transforma o componente em Client Component

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  // Lista dos seus serviços (para o Dropdown)
  const services = [
    { name: 'Internet Fibra Óptica', href: '/produtos-e-servicos/internet' },
    { name: 'Interfones Inteligentes', href: '/produtos-e-servicos/Interfones' },
    { name: 'Câmeras de Segurança', href: '/produtos-e-servicos/cameras' },
    { name: 'Alarmes Modernos', href: '/produtos-e-servicos/alarmes' },
  ];

  return (
    <header className="bg-white shadow-md z-10 relative">
      {/* Replicando o padding e espaçamento do código antigo */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Grupo Esquerdo: Logo e Menu (usando classes customizadas para replicar o espaçamento "space-x-30 px-20" do código antigo) */}
        <div className="flex items-center space-x-45 px-10">
          {/* Logo */}
          <Link href="/sobre-nos">
            <Image
              src="/logo-principal-slogan-azul.svg" 
              alt="Logo Igloobe"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Menu de navegação (Visível a partir do md) */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/sobre-nos" className={styles.navLink}>
              Sobre nós
            </Link>
            
            {/* Dropdown: Item 'Produtos e serviços' */}
            <div
              className={styles.dropdownContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${styles.navLink} ${styles.dropdownToggle}`}>
                Produtos e serviços
              </div>
              
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map(service => (
                    <Link key={service.name} href={service.href} className={styles.dropdownItem}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.navLink}>
              Planos
            </Link>
          </nav>
        </div>
        
        {/* Grupo Direito: Contato Simplificado (WhatsApp) */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-1">
             <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons8-whatsapp.svg" 
                alt="Ícone WhatsApp"
                width={20}
                height={20}
                className="h-5 w-auto"
              />
            </Link>
            <span className="text-lg font-bold text-gray-800 px-2">71 98795-5190</span>
          </div>

          {/* Botão de menu para telas pequenas (Manter) */}
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