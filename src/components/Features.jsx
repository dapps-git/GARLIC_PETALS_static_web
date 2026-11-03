import { ShieldCheck, Sprout, Clock, Truck } from 'lucide-react';
import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={28} className={styles.featureIcon} />,
      title: 'Hygienically Processed',
      desc: 'State-of-the-art hygienic processing ensures pure cleanliness, zero touch, and 100% food safety.'
    },
    {
      icon: <Sprout size={28} className={styles.featureIcon} />,
      title: 'Farm-Fresh Quality',
      desc: 'Carefully sourced from selected high-yield farms for rich aroma, intense pungency & natural taste.'
    },
    {
      icon: <Clock size={28} className={styles.featureIcon} />,
      title: 'Time-Saving Kitchen Ready',
      desc: 'Ready-to-use freshly peeled garlic saves chef hours, eliminates kitchen mess, and speeds up service.'
    },
    {
      icon: <Truck size={28} className={styles.featureIcon} />,
      title: 'Reliable Daily Delivery',
      desc: 'Timely supply across Kerala with localized branch dispatches in Thrissur, Cochin, Kollam & Trivandrum.'
    }
  ];

  return (
    <section id="why-us" className={styles.featuresSection}>
      <div className={`container ${styles.featuresContainer}`}>
        <div className={styles.featuresGrid}>
          {features.map((f, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.iconCircle}>
                {f.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

