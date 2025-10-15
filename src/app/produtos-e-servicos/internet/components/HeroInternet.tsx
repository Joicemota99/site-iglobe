// src/app/produtos-e-servicos/internet/HeroInternet.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './HeroInternet.module.css';

const HeroInternet = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/hero-internet.jpg" // Troque por sua imagem de fundo
        alt="Pessoa jogando em um setup de tecnologia"
        layout="fill"
        objectFit="cover"
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.heroCard}>
          <h1 className={styles.title}>
            Conexão rápida para toda a família! <br />
            Navegue, assista, jogue e <br />
            compartilhe sem interrupções.
          </h1>
          <p className={styles.subtitle}>
            Conexão de Internet Mais Confiável
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