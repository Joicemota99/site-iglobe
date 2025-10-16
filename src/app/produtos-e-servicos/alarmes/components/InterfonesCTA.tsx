import Link from 'next/link';
import React from 'react';
import styles from './InterfonesCTA.module.css';
import Image from 'next/image';

const InterfonesCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container mx-auto px-4 py-16">
        
        <div className={styles.contentWrapper}>
          
          {/* Coluna 1: Logo e Imagem Chamativa */}
          <div className={styles.imageColumn}>
            {/* Usamos o Logo da Iglobe aqui para dar o chamativo */}
            <Image
              src="/logo-header-azul.svg"
              alt="Logo Iglobe - Segurança"
              width={200}
              height={80}
              className={styles.logoImage}
            />
          </div>

          {/* Coluna 2: Conteúdo da CTA e Botão */}
          <div className={styles.textColumn}>
            <h2 className={styles.title}>
              Proteja o que realmente importa com soluções de alarme personalizadas para sua casa ou empresa.
              Cada projeto é feito sob medida para garantir máxima segurança, de acordo com as suas necessidades e o seu espaço.
            </h2>

            <div className={styles.buttonWrapper}>
              <Link
                href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" // Número de contato do cliente
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
        </div>
      </div>
    </section>
  );
};

export default InterfonesCTA;
