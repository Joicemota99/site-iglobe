// src/app/sobre-nos/Testimonials.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../../sobre-nos/components/Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container mx-auto px-4 py-16">
        <div className={styles.contentWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>
              Quem confia na IGLOBE <br />
              <span className={styles.sectionSubtitle}>
                A opinião de <br />
                pessoas como <br />
                você
              </span>
            </h2>
          </div>

          <div className={styles.cardsContainer}>
            {/* Card de Depoimento 1 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialText}>
                <div className={styles.stars}>★★★★★</div>
                <p>"A instação foi eficiente e o sistema é excelente."</p>
                <div className={styles.testimonialAuthor}>Luana, Periperi</div>
              </div>
              <div className={styles.authorImage}>
                <Image
                  src="/luana-periperi.jpg" // Troque pela sua imagem
                  alt="Foto de Beatriz"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Card de Depoimento 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialText}>
                <div className={styles.stars}>★★★★★</div>
                <p>"Equipe técnica muito competente."</p>
                <div className={styles.testimonialAuthor}>Marcos, Camaçari</div>
              </div>
              <div className={styles.authorImage}>|
                <Image
                  src="/marcos-camacari.jpg" // Troque pela sua imagem
                  alt="Foto de João Gustavo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaButtonContainer}>
          <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.ctaButton}>
            Avalie-nos também
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;