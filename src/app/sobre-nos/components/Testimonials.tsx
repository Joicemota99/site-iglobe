// src/app/sobre-nos/Testimonials.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Testimonials.module.css';

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
                <p>"A IGLOBE foi a única que conseguiu me atender no dia seguinte. Instalaram tudo direitinho, explicaram como usar e ainda acompanham depois. Me senti respeitada."</p>
                <div className={styles.testimonialAuthor}>Mariana Lopes</div>
              </div>
              <div className={styles.authorImage}>
                <Image
                  src="/Mariana-lopes.png" // Troque pela sua imagem
                  alt="Foto de Mariana Lopes"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Card de Depoimento 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialText}>
                <div className={styles.stars}>★★★★★</div>
                <p>"Depois que instalei a internet da IGLOBE, nunca mais fiquei na mão. Mesmo nos dias chuvosos, tudo funciona. Atendimento nota 10."</p>
                <div className={styles.testimonialAuthor}>João Gustavo</div>
              </div>
              <div className={styles.authorImage}>
                <Image
                  src="/joao-gustavo.png" // Troque pela sua imagem
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