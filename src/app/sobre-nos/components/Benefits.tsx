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
            <Image
              src="/card-image-1.png"
              alt="Internet rápida e estável"
              fill
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Internet <br />
                Rápida <br />
                e Estável
              </h3>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <Image
              src="/Benefits-02-about.png"
              alt="Atendimento em até 24h"
              fill
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Atendimento <br />
                em até 24h
              </h3>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <Image
              src="/Benefits-about-3.png"
              alt="Suporte técnico via WhatsApp"
              fill
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Suporte <br />
                técnico via <br />
                WhatsApp
              </h3>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;