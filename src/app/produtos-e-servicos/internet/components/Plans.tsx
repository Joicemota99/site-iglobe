// src/app/produtos-e-servicos/internet/Plans.tsx
import Link from 'next/link';
import React from 'react';
import styles from './Plans.module.css';

const Plans = () => {
  const plans = [
    { speed: '60 MB', price: '59,90' },
    { speed: '80 MB', price: '69,90' },
    { speed: '100 MB', price: '89,90' },
    { speed: '250 MB', price: '109,90' },
    { speed: '400 MB', price: '119,90' },
    { speed: '500 MB', price: '129,90' },
  ];

  return (
    <section className={styles.plansSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={styles.sectionTitle}>
          Planos
          <div className={styles.titleUnderline}></div>
        </h2>

        <div className={styles.cardsGrid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <h3 className={styles.planSpeed}>{plan.speed}</h3>
              <p className={styles.planSubtitle}>UPLOAD E DOWLOAD</p>
              <p className={styles.planPrice}>
                R$
                <span className={styles.priceValue}>{plan.price}</span>
                mês
              </p>
              <Link href="https://api.whatsapp.com/send/?phone=5571987955190&text&type=phone_number&app_absent=0" className={styles.planButton}>
                ASSINE AGORA
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;