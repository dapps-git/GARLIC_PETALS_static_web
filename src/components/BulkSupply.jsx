import React from 'react';
import { 
  Building2, 
  UtensilsCrossed, 
  Truck, 
  TrendingDown, 
  Scale, 
  CheckCircle2, 
  MessageSquare, 
  PhoneCall,
  FileText
} from 'lucide-react';
import styles from './BulkSupply.module.css';

const WHATSAPP_NUMBER = '919567458588';

export default function BulkSupply({ onOpenQuote }) {
  const bulkMsg = encodeURIComponent(
    'Hi Petals Team, I am interested in regular bulk peeled garlic supply for my business. Please share wholesale price slabs and delivery schedule.'
  );

  return (
    <section id="bulk-supply" className={styles.section}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>B2B &amp; COMMERCIAL SUPPLY</span>
          <h2 className={styles.title}>Bulk Commercial Supply</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Direct wholesale peeled garlic supply for restaurants, hotels, catering banquets &amp; cloud kitchens across Kerala.
          </p>
        </div>

        {/* 2-Column Main Info */}
        <div className={styles.mainGrid}>
          {/* Left: Commercial Advantages */}
          <div className={styles.leftCol}>
            <h3 className={styles.colTitle}>Engineered for High-Volume Kitchens</h3>
            <p className={styles.colDesc}>
              In commercial kitchens, peeling garlic is the #1 labor bottleneck. Petals provides ready-to-cook, uniform, hand-peeled garlic cloves delivered straight to your kitchen door on a reliable recurring schedule.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIconBox}>
                  <TrendingDown size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Zero Peeling Labor &amp; Kitchen Mess</h4>
                  <p className={styles.benefitDesc}>Eliminate 2 to 3 staff prep hours every morning. Your chefs start cooking instantly.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIconBox}>
                  <Scale size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>100% Net Usable Weight (Zero Waste)</h4>
                  <p className={styles.benefitDesc}>Unpeeled garlic loses 30%–35% in skin and spoiled cloves. With Petals, you pay only for 100% usable pure garlic.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIconBox}>
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Scheduled Morning Doorstep Delivery</h4>
                  <p className={styles.benefitDesc}>Direct daily or weekly dispatch from our 4 localized branches in Thrissur, Cochin, Kollam &amp; Trivandrum.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Supply Specifications Card */}
          <div className={styles.specsCard}>
            <div className={styles.specsHeader}>
              <Building2 size={22} className={styles.buildingIcon} />
              <h3 className={styles.specsTitle}>Commercial Supply Specifications</h3>
            </div>

            <div className={styles.specsList}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Available Bulk Packaging</span>
                <span className={styles.specVal}>10 kg, 25 kg, 50 kg &amp; 100 kg+</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Clove Grade &amp; Quality</span>
                <span className={styles.specVal}>First Grade, Large, Uniform Size</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Processing Standard</span>
                <span className={styles.specVal}>100% Chemical-Free, Hygienic Water-Cleaned</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Delivery Areas</span>
                <span className={styles.specVal}>All Kerala (Doorstep Branch Delivery)</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Supply Frequency</span>
                <span className={styles.specVal}>Daily, Alternate Days, or Weekly Contracts</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Billing &amp; Payment</span>
                <span className={styles.specVal}>Commercial Tax Invoicing, UPI / Net Banking</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={styles.actionButtons}>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${bulkMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBulkBtn}
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp (Wholesale)</span>
              </a>

              {onOpenQuote && (
                <button 
                  type="button" 
                  className={styles.quoteBtn}
                  onClick={onOpenQuote}
                >
                  <FileText size={18} />
                  <span>Request Custom Wholesale Quote</span>
                </button>
              )}
            </div>

            <div className={styles.directCallNote}>
              Direct Wholesale Desk: <a href="tel:+919567458588">+91 95674 58588</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

