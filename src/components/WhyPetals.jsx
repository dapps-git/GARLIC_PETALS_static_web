import React from 'react';
import styles from './WhyPetals.module.css';

export default function WhyPetals() {
  const points = [
    {
      emoji: '🌿',
      title: '100% Natural',
      desc: 'Just garlic. No chemicals, no shortcuts.'
    },
    {
      emoji: '🧼',
      title: 'Hygienically Peeled',
      desc: 'Hand-peeled and cleaned with care.'
    },
    {
      emoji: '⏱',
      title: 'Saves Time',
      desc: 'Open, scoop, cook. Prep time drops to zero.'
    },
    {
      emoji: '🚚',
      title: 'Doorstep Delivery',
      desc: 'Fresh to your door across Kerala.'
    }
  ];

  return (
    <section id="why-petals" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>THE PETALS STANDARD</span>
          <h2 className={styles.title}>Why Petals</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>Everything garlic should be</p>
        </div>

        <div className={styles.grid}>
          {points.map((p, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.emojiCircle}>{p.emoji}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

