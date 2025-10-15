// src/app/produtos-e-servicos/internet/BenefitsInternet.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './BenefitsInternet.module.css'; // Importa a nova estilização

const BenefitsInternet = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={styles.sectionTitle}>
          Benefícios
          <div className={styles.titleUnderline}></div>
        </h2>

        <div className={styles.cardsContainer}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Internet estável <br />
                e de alta <br />
                velocidade
              </h3>
              <Link href="/planos" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/card-internet-1.jpg" // Troque pela sua imagem
                alt="Internet estável"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Planos <br />
                acessíveis e <br />
                contratação <br />
                fácil
              </h3>
              <Link href="/planos" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/card-internet-2.jpg" // Troque pela sua imagem
                alt="Contratação fácil"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Sem análise <br />
                de crédito ou <br />
                papelada
              </h3>
              <Link href="/contratar" className={styles.cardButton}>
                Saiba mais
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/card-internet-3.jpg" // Troque pela sua imagem
                alt="Sem análise de crédito"
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

export default BenefitsInternet;