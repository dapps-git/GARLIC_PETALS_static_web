import Image from 'next/image';
import { ShieldCheck, Sparkles, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection({ onOpenOrder, onOpenQuote }) {
  const points = [
    {
      title: 'Hand-Selected & Machine Peeled',
      desc: 'Selected from premium garlic cultivars, then gently peeled using automated air-pressure peeling tech to avoid bruising.'
    },
    {
      title: 'Zero Chemical Treatment',
      desc: 'No chlorine, no sulfur bleaching, and zero chemical preservatives. Just 100% natural pure white garlic cloves.'
    },
    {
      title: 'Triple-Washed & Chilled Packaged',
      desc: 'Rinsed in ozonated pure water, dried in sterile rooms, and vacuum/zip-sealed immediately to seal in natural pungency.'
    },
    {
      title: '30-40% Cost & Time Savings',
      desc: 'Save on kitchen labor, eliminate peeling waste (normally 25-30% of garlic weight is skin), and enjoy ready-to-cook cloves.'
    }
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Visual Left */}
          <div className={styles.visualCol}>
            <div className={styles.posterWrapper}>
              <Image 
                src="/images/hero-banner.jpg" 
                alt="Petals Peeled Garlic Showcase" 
                width={540} 
                height={340} 
                className={styles.bannerImg}
              />
              <div className={styles.experienceBadge}>
                <Award size={24} className={styles.awardIcon} />
                <div>
                  <span className={styles.badgeNumber}>100% Pure</span>
                  <span className={styles.badgeLabel}>Natural Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className={styles.contentCol}>
            <div className={styles.tag}>
              <span>ABOUT PETALS GARLIC 🌿</span>
            </div>
            <h2 className={styles.title}>
              Pure Garlic. Pure Trust.<br />
              <span className={styles.titleAccent}>From Kerala&apos;s Trusted Suppliers.</span>
            </h2>
            <p className={styles.description}>
              Garlic peeling is the most tedious, labor-intensive, and wasteful chore in commercial food preparation. <strong>Petals Peeled Garlic</strong> solves this by delivering freshly peeled, spotless, aromatic garlic directly to your kitchen.
            </p>

            <div className={styles.pointsList}>
              {points.map((pt, i) => (
                <div key={i} className={styles.pointItem}>
                  <div className={styles.pointCheck}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className={styles.pointTitle}>{pt.title}</h4>
                    <p className={styles.pointDesc}>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <button onClick={() => onOpenOrder()} className={styles.orderBtn}>
                Order Fresh Garlic Now
              </button>
              <button onClick={onOpenQuote} className={styles.quoteBtn}>
                Wholesale Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

