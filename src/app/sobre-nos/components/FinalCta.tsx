import Link from 'next/link';
import React from 'react';
import styles from './FinalCta.module.css';
import Image from 'next/image';

const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container mx-auto px-50 py-16">
        <div className={styles.contentWrapper}>
          {/* Conteúdo do bloco à esquerda */}
          <div className={styles.textColumn}>
            <h2 className={styles.title}>
              Conecte-se com mais agilidade,
              segurança e atenção. A IGLOBE <br />
              resolve seu problema hoje.
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
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Falar com atendente
              </Link>
            </div>
          </div>
          
          {/* Coluna da imagem à direita */}
          <div className={styles.imageColumn}>
            <Image
              src="/logo-header-azul.svg" // Troque pelo caminho da sua imagem
              alt="logo"
              fill
              className={styles.ctaImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;