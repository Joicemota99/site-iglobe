// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-16">
        <div className={styles.footerGrid}>
          {/* Coluna 1: Logo e Descrição */}
          <div className={styles.footerColumn}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo-principal-laranja-branco.svg" // Troque por sua logo
                alt="Logo Igloobe"
                width={150}
                height={50}
              />
            </Link>
            <p className={styles.description}>
              Internet ultrarrápida, segura e confiável. Conecte-se com tecnologia e agilidade.
            </p>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icon-instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icon-facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icon-whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links de Navegação */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <ul className={styles.footerNav}>
              <li><Link href="/planos" className={styles.footerLink}>Planos</Link></li>
              <li><Link href="/sobre-nos" className={styles.footerLink}>Sobre Nós</Link></li>
              <li><Link href="/contato" className={styles.footerLink}>Contato</Link></li>
              <li><Link href="/suporte" className={styles.footerLink}>Suporte</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Informações de Contato */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <address className={styles.contactInfo}>
              <p>Av. Exemplo, 123 - Centro<br />Salvador, BA 40000-000</p>
              <p>Telefone: (71) 98795-5190</p>
              <p>Email: contato@igloobe.com.br</p>
            </address>
          </div>

          {/* Coluna 4: Links Legais */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Informações Legais</h4>
            <ul className={styles.footerNav}>
              <li><Link href="/termos-de-uso" className={styles.footerLink}>Termos de Uso</Link></li>
              <li><Link href="/politica-de-privacidade" className={styles.footerLink}>Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <div className="container mx-auto px-4 py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Igloobe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;