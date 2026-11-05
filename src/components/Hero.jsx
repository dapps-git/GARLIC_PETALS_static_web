import Image from 'next/image';
import { 
  ShoppingBag,
  Phone,
  Store,
  Utensils,
  Hotel,
  Factory
} from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ onOpenOrder }) {
  const handleMobileBuy = () => {
    if (typeof onOpenOrder === 'function') {
      onOpenOrder({
        pack: {
          id: 'garlic-1kg',
          name: 'Petals Peeled Garlic',
          size: '1 Kg',
          price: 200
        },
        quantity: 1
      });
    } else if (typeof window !== 'undefined') {
      window.location.hash = '#products';
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* ========================================================
          LAPTOP / RESPONSIVE HERO BANNER
          Clean high-res background + sharp vector HTML typography
          ======================================================== */}
      <div className={styles.laptopHeroWrapper}>
        {/* Clean Background Image */}
        <div className={styles.laptopBgFrame}>
          <Image 
            src="/images/main-banner.jpg" 
            alt="Petals Peeled Garlic Banner" 
            width={1920} 
            height={1040} 
            className={styles.laptopBgImg}
            priority
          />
        </div>

        {/* Crisp HTML / Vector Content Overlay on the Left - Vertically Centered */}
        <div className={styles.laptopOverlayContainer}>
          <div className={styles.laptopContentLeft}>
            {/* Top Leaves Accent */}
            <div className={styles.topLeavesAccent}>
              <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Leaf */}
                <path d="M24 26C22.8 15.5 13 6 1 6C1 18.5 11 26 24 26Z" fill="#1b6347" />
                <path d="M24 26C23 18.5 18.5 12 11 8.5" stroke="#7ac99f" strokeWidth="1.2" strokeLinecap="round" />
                {/* Right Leaf */}
                <path d="M24 26C25.2 15.5 35 6 47 6C47 18.5 37 26 24 26Z" fill="#2d8a63" />
                <path d="M24 26C25 18.5 29.5 12 37 8.5" stroke="#9be0ba" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Headline Block: Pure Garlic. with natural gold brush accent + Pure Trust. */}
            <div className={styles.headlineBlock}>
              <div className={styles.scriptRow}>
                <span className={styles.pureGarlicText}>Pure Garlic.</span>
                {/* Natural golden brush swoosh underline under Garlic. */}
                <svg className={styles.goldSwoosh} viewBox="0 0 160 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5C38 2 110 2 158 5C110 3.5 38 3.5 2 5Z" fill="#c9933b" opacity="0.9" />
                </svg>
              </div>

              <h1 className={styles.pureTrustText}>Pure Trust.</h1>
            </div>

            {/* Pill with gold flanking lines */}
            <div className={styles.pillContainer}>
              <span className={styles.flankLine} />
              <div className={styles.pillBadge}>
                <span>Carefully Hand-Peeled for Best Quality &amp; Taste.</span>
              </div>
              <span className={styles.flankLine} />
            </div>

            {/* 4 Circular Quality Badges with Vertical Dividers */}
            <div className={styles.badgesCluster}>
              {/* Badge 1: 100% Natural */}
              <div className={styles.badgeItem}>
                <div className={styles.badgeCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0e3b2b">
                    <path d="M19.5 3C10.5 3 4.5 9 4.5 16.5c0 1.5.5 2.5 1 3.5 1-.5 2-1 3.5-1 7.5 0 13.5-6 13.5-15 0-.5-.5-.8-1-1-.5-.2-1.3-.2-2-.2z" />
                    <path d="M6 19c3-4 7-7 12-8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div className={styles.badgeLabel}>
                  <span className={styles.boldLabel}>100%</span>
                  <span className={styles.subLabel}>Natural</span>
                </div>
              </div>

              <div className={styles.badgeDivider} />

              {/* Badge 2: Hygienic & Clean */}
              <div className={styles.badgeItem}>
                <div className={styles.badgeCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 5.2v6.2c0 5.2 3.4 10.1 8 11.3 4.6-1.2 8-6.1 8-11.3V5.2L12 2z" fill="#0e3b2b" />
                    <path d="M9.5 12.3l2.2 2.2 4.8-4.8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.badgeLabel}>
                  <span className={styles.boldLabel}>Hygienic &amp;</span>
                  <span className={styles.subLabel}>Clean</span>
                </div>
              </div>

              <div className={styles.badgeDivider} />

              {/* Badge 3: Premium Quality (Faceted Diamond) */}
              <div className={styles.badgeItem}>
                <div className={styles.badgeCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e3b2b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9z" />
                    <path d="M2 9h20" />
                    <path d="M10 3l-4 6 6 12 6-12-4-6" />
                  </svg>
                </div>
                <div className={styles.badgeLabel}>
                  <span className={styles.boldLabel}>Premium</span>
                  <span className={styles.subLabel}>Quality</span>
                </div>
              </div>

              <div className={styles.badgeDivider} />

              {/* Badge 4: Ready to Use (Speed Clock) */}
              <div className={styles.badgeItem}>
                <div className={styles.badgeCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e3b2b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 8.5h3" />
                    <path d="M1 12.5h4" />
                    <path d="M2 16.5h3" />
                    <circle cx="14" cy="13" r="7" />
                    <polyline points="14 9.5 14 13 16.5 14.5" />
                    <path d="M14 3.5v2.5" />
                  </svg>
                </div>
                <div className={styles.badgeLabel}>
                  <span className={styles.boldLabel}>Ready to</span>
                  <span className={styles.subLabel}>Use</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Order Now & Contact Us */}
            <div className={styles.heroActionButtons}>
              <a href="#products" className={styles.heroOrderBtn}>
                <ShoppingBag size={15} strokeWidth={1.8} />
                <span>Order Now</span>
              </a>

              <a href="tel:9567458588" className={styles.heroContactBtn}>
                <Phone size={14} strokeWidth={1.8} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* IDEAL FOR Bottom Ribbon Bar in Both Desktop & Mobile Views */}
        <div className={styles.idealForRibbon}>
          <div className={styles.ribbonContainer}>
            <span className={styles.idealForTag}>IDEAL FOR</span>
            <div className={styles.ribbonDivider} />

            <div className={styles.idealTarget}>
              <Store size={15} strokeWidth={2} />
              <span>RESTAURANTS</span>
            </div>
            <span className={styles.targetSep}>|</span>

            <div className={styles.idealTarget}>
              <Utensils size={15} strokeWidth={2} />
              <span>CATERERS</span>
            </div>
            <span className={styles.targetSep}>|</span>

            <div className={styles.idealTarget}>
              <Hotel size={15} strokeWidth={2} />
              <span>HOTELS</span>
            </div>
            <span className={styles.targetSep}>|</span>

            <div className={styles.idealTarget}>
              <Factory size={15} strokeWidth={2} />
              <span>FOOD INDUSTRIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
