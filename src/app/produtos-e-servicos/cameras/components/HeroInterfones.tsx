// src/app/produtos-e-servicos/internet/HeroInternet.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../internet/components/HeroInternet.module.css';

const HeroInternet = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/interfone-intelbras.png" // Troque por sua imagem de fundo
        alt="Pessoa jogando em um setup de tecnologia"
        layout="fill"
        objectFit="cover"
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.heroCard}>
          <h1 className={styles.title}>
            Proteção que você vê. A IGLOBE instala câmeras
            modernas com tecnologia de ponta e suporte rápido.
          </h1>
          <p className={styles.subtitle}>
            Em até 24h, sua casa ou negócio estará mais seguro com equipamentos Intelbras e atendimento direto 
            pelo WhatsApp.
          </p>
          <Link 
            href="https://wa.me/5571987955190" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappButton}
          >
            Fale via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroInternet;