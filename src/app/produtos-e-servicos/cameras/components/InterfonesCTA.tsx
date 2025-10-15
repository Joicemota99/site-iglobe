import Link from 'next/link';
import React from 'react';
import styles from './InterfonesCTA.module.css';

const InterfonesCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container mx-auto px-45 py-16">
        <h2 className={styles.title}>
          Monitore em tempo real e de qualquer lugar. Oferecemos sistemas de câmeras de alta qualidade, ajustados ao tamanho e à demanda do seu ambiente,
          para você ter total controle e tranquilidade.
        </h2>

        <div className={styles.buttonWrapper}>
          <Link
            href="https://wa.me/5571987955190" // Número de contato do cliente
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicite um orçamento personalizado
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.whatsappIcon}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M12 8l4 4-4 4V8z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InterfonesCTA;
