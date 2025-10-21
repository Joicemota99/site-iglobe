// src/app/sobre-nos/Benefits.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../../produtos-e-servicos/internet/components/BenefitsInternet.module.css';

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={styles.sectionTitle}>
          Benefícios Iglobe
          <div className={styles.titleUnderline}></div>
        </h2>

        <div className={styles.cardsContainer}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Equipamentos compactos e duráveis
              </h3>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/INTERFONE.png" // Troque pela sua imagem
                alt="Internet rápida e estável"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
               Instalação expressa sem complicação
              </h3>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/image-about-2.png" // Troque pela sua imagem
                alt="Atendimento em até 24h"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
               Ideal para residências, condomínios e pequenos negócios
              </h3>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/Benefits-about-3.png" // Troque pela sua imagem
                alt="Suporte técnico via WhatsApp"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;