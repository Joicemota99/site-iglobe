// src/app/produtos-e-servicos/internet/TestimonialsCTA.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../internet/components/TestimonialsCTA.module.css'; // Importação local e correta

const TestimonialsCTA = () => {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 py-16">
        {/* Seção de Depoimentos */}
        <div className={styles.testimonialsGrid}>
          {/* Título */}
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              Quem confia na IGLOBE <br />
              <span className={styles.subtitle}>
                A opinião de <br />
                pessoas como <br />
                você
              </span>
            </h2>
          </div>

          {/* Cards de Depoimento */}
          <div className={styles.cardsWrapper}>
            <div className={styles.testimonialCard}>
              <div className={styles.authorImage}>
                <Image
                  src="/Beatriz.png" // Troque pela sua imagem
                  alt="Foto de Beatriz"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.stars}>★★★★★</div>
                <p>"Ficou prático controlar o acesso no prédio. Recomendo!"</p>
                <div className={styles.author}>Beatriz,São Caetano</div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.authorImage}>
                <Image
                  src="/claudia.png" // Troque pela sua imagem
                  alt="Foto de Cláudia"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.stars}>★★★★★</div>
                <p>"Serviço ágil e bem instalado."</p>
                <div className={styles.author}>Cláudia, Centro Histórico</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaButtonRow}>
          <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.ctaButton}>
            Avalie-nos também →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCTA;