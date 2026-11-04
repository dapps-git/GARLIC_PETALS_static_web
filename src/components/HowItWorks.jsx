import React from 'react';
import { ShoppingBag, MessageSquare, ChefHat, ArrowRight } from 'lucide-react';
import styles from './HowItWorks.module.css';

export default function HowItWorks({ onOpenOrder }) {
  const steps = [
    {
      num: '01',
      icon: <ShoppingBag size={24} />,
      title: 'Choose your quantity',
      desc: 'Pick the kilos you need, from home packs to bulk kitchen orders.'
    },
    {
      num: '02',
      icon: <MessageSquare size={24} />,
      title: 'Confirm on WhatsApp',
      desc: 'One tap sends your order. We confirm the delivery details with you.'
    },
    {
      num: '03',
      icon: <ChefHat size={24} />,
      title: 'Cook with ease',
      desc: 'Fresh peeled garlic arrives at your door, ready to use.'
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>FAST &amp; SIMPLE ORDERING</span>
          <h2 className={styles.title}>How it works</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>From our hub to your kitchen</p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>{s.num}</span>
                <div className={styles.iconBox}>{s.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a href="#products" className={styles.orderNowBtn}>
            <span>Order Fresh Garlic Now</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

