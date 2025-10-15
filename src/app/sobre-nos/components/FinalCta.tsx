// src/app/sobre-nos/FinalCTA.tsx
import Link from 'next/link';
import React from 'react';
import styles from './FinalCta.module.css';
import Image from 'next/image';

const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={styles.title}>
          Conecte-se com mais agilidade, <br />
          segurança e atenção. A IGLOBE resolve <br />
          seu problema hoje.
        </h2>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            Atendimento via WhatsApp
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            Orçamento sem compromisso
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            Instalação em até 24h
          </div>
        </div>

        <p className={styles.instruction}>
          Clique no botão abaixo e fale com um especialista.
        </p>

        <div className={styles.buttonWrapper}>
          <Link href="https://wa.me/5571987955190" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Falar com atendente
          </Link>
        </div>
        <div className={styles.Logo}>
             <Image
        src="/bg-hero-3.png" // Você precisará colocar uma imagem de fundo aqui
        alt="Fundo abstrato de tecnologia"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.bgImage}
      />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;