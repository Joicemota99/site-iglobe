// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <Image
        src="/bg-hero-3.png" // Você precisará colocar uma imagem de fundo aqui
        alt="Fundo abstrato de tecnologia"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.bgImage}
      />
      
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>
          Conecte-se com <br />
          tecnologia, segurança <br />
          e velocidade.
        </h1>
        <p className={styles.subtitle}>
          Internet + Segurança com instalação expressa e suporte humano.
        </p>

        <div className={styles.ctaButtons}>
          <a
            href="https://wa.me/5571987955190" // Troque pelo número do cliente
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            Fale via WhatsApp
          </a>
          <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.secondaryLink}>
            Conheça os Planos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;