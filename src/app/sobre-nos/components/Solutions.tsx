import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Solutions.module.css';

const Solutions = () => {
  return (
    <section className={styles.solutionsSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={styles.sectionTitle}>
          Soluções Iglobe
          <div className={styles.titleUnderline}></div>
        </h2>
        <p className={styles.subtitle}>
          Oferecemos soluções completas para residências e empresas:
        </p>

        <div className={styles.cardsGrid}>
          {/* Card Principal - Dividido em 2 colunas para o design */}
          <div className={styles.mainCardWrapper}>
            {/* Coluna 1: Imagem da Internet Fibra */}
            <div className={styles.mainImageColumn}>
              <Image
                src="/internet.png" // Troque por sua imagem
                alt="Internet Fibra Óptica"
                layout="fill"
                objectFit="cover"
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitleOverlay}>Internet Fibra Óptica</h3>
            </div>

            {/* Coluna 2: Conteúdo Principal dos Planos */}
            <div className={styles.mainContentColumn}>
              <h3 className={styles.mainCardTitle}>
                Planos fáceis <br />
                de contratar:
              </h3>
              <p className={styles.mainCardText}>
                Planos de internet rápidos e práticos para instalar sem burocracia, direto pelo WhatsApp.
              </p>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.mainCardButton}>
                Saiba mais
              </Link>
              
              <div className={styles.mainCardFeature}>
                <div className={styles.mainCardFeatureImage}>
                  <Image
                    src="/card-image-1.png" // Troque por sua imagem do ícone
                    alt="Plano de Internet Rápida"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className={styles.mainCardFeatureText}>
                    Plano de Internet Rápida
                  </p>
                  <p className={styles.mainCardFeatureDetail}>
                    Conexão estável para navegar, trabalhar e se divertir, com instalação em até 24h.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Secundários - Layout vertical para desktop */}
          <div className={styles.secondaryCardsGroup}>
            {/* Card 3: Câmeras */}
            <div className={styles.card}>
              <Image
                src="/CAMERA.PNG" // Troque por sua imagem
                alt="Câmeras de Segurança"
                layout="fill"
                objectFit="cover"
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>Câmeras de Segurança</h3>
            </div>

            {/* Card 4: Alarmes */}
            <div className={styles.card}>
              <Image
                src="/ALARME.png" // Troque por sua imagem
                alt="Alarmes Modernos"
                layout="fill"
                objectFit="cover"
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>Alarmes Modernos</h3>
            </div>

            {/* Card 5: Interfones */}
            <div className={styles.card}>
              <Image
                src="/INTERFONE.png" // Troque por sua imagem
                alt="Interfones Inteligentes"
                layout="fill"
                objectFit="cover"
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>Interfones Inteligentes</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;