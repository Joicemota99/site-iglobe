// src/app/sobre-nos/About.tsx
import Image from 'next/image';
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={styles.sectionTitle}>
          Sobre a Iglobe
          <div className={styles.titleUnderline}></div>
        </h2>
        <p className={styles.description}>
          A iGlobe nasceu com a missão de conectar pessoas à <br />
          tecnologia com agilidade, simplicidade e confiança.
        </p>

        <div className={styles.imageGrid}>
          {/* Imagem Principal */}
          <div className={styles.mainImageContainer}>
            <Image
              src="/image-about-01.png" // Troque por sua imagem
              alt="Equipe técnica trabalhando em um escritório"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>

          {/* Imagem Secundária */}
          <div className={styles.secondaryImageContainer}>
            <Image
              src="/image-about-2.png" // Troque por sua imagem
              alt="Técnico instalando um dispositivo"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;