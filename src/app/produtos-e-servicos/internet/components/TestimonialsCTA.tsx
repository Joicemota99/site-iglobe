// src/app/produtos-e-servicos/internet/TestimonialsCTA.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './TestimonialsCTA.module.css'; // Importação local e correta

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
                  src="/Leandro.png" // Troque pela sua imagem
                  alt="Foto de Leandro"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.stars}>★★★★★</div>
                <p>"É a primeira vez que uso um provedor que realmente entrega o que promete. Instalaram rápido e o sinal é ótimo."</p>
                <div className={styles.author}>Leandro, Cliente residencial</div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.authorImage}>
                <Image
                  src="/Mariana.png" // Troque pela sua imagem
                  alt="Foto de Mariana Lopes"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.stars}>★★★★★</div>
                <p>"A IGLOBE foi a única que conseguiu me atender no dia seguinte. Instalaram tudo direitinho, explicaram como usar e ainda acompanham depois. Me senti respeitada."</p>
                <div className={styles.author}>Mariana Lopes</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaButtonRow}>
          <Link href="/avaliar" className={styles.ctaButton}>
            Avalie-nos também →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCTA;