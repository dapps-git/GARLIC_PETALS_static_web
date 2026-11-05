import React from 'react';
import styles from './WhyPetals.module.css';

export default function WhyPetals() {
  const points = [
    {
      title: '100% Raw & Natural',
      desc: 'Pure garlic cloves. No chemical washing, no acid treatments, and no preservatives.'
    },
    {
      title: 'Clean & Dry Packed',
      desc: 'Peeled hygienically and packed dry in airtight bags so it stays fresh in your fridge.'
    },
    {
      title: 'Zero Peeling Time',
      desc: 'No sticky fingers, no skin waste, and no morning hassle. Just open, scoop, and cook.'
    },
    {
      title: 'Doorstep Delivery',
      desc: 'Daily dispatch from hubs in Thrissur, Ernakulam, Kollam, and Trivandrum.'
    }
  ];

  return (
    <section id="why-petals" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>WHY SWITCH TO PETALS</span>
          <h2 className={styles.title}>Real Fresh Garlic. Zero Mess.</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Save hours in your home or restaurant kitchen without compromising on aroma or taste.
          </p>
        </div>

        <div className={styles.grid}>
          {points.map((p, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

