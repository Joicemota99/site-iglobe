import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Benefits.module.css';

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
                Internet <br />
                Rápida <br />
                e Estável
              </h3>
              <Link href="/planos" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/card-image-1.png" // Troque pela sua imagem
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
                Atendimento <br />
                em até 24h
              </h3>
              <Link href="/contato" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/card-image-2.jpg" // Troque pela sua imagem
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
                Suporte <br />
                técnico via <br />
                WhatsApp
              </h3>
              <Link href="/suporte" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/card-image-3.jpg" // Troque pela sua imagem
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