import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import styles from './MalayalamBanner.module.css';

export default function MalayalamBanner({ onOpenOrder }) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.bannerBox}>
          <div className={styles.textSide}>
            <div className={styles.malayalamTag}>കേരളത്തിലെ പ്രമുഖ ബ്രാൻഡ്</div>
            <h2 className={styles.malayalamHead}>
              വെളുത്തുള്ളി തൊലി കളയാൻ ഇനി <span className={styles.highlight}>സമയം കളയണ്ട!</span>
            </h2>
            <p className={styles.malayalamSub}>
              പാചകത്തിന് ഉടൻ ഉപയോഗിക്കാവുന്ന തൊലി കളഞ്ഞ വെളുത്തുള്ളി. 100% സ്വാഭാവികം, ശുചിത്വപൂർവ്വം തയ്യാറാക്കിയത്.
            </p>

            <div className={styles.benefitsRow}>
              <div className={styles.benefit}>
                <CheckCircle2 size={16} color="#4ade80" />
                <span>ഹാൻഡ് &amp; മെഷീൻ പീൽഡ്</span>
              </div>
              <div className={styles.benefit}>
                <CheckCircle2 size={16} color="#4ade80" />
                <span>പൂർണ്ണമായും തൊലി കളഞ്ഞത്</span>
              </div>
              <div className={styles.benefit}>
                <CheckCircle2 size={16} color="#4ade80" />
                <span>റസ്റ്റോറന്റുകൾക്കും കാറ്ററിംഗിനും ഉത്തമം</span>
              </div>
            </div>

            <div className={styles.btnRow}>
              <button onClick={() => onOpenOrder()} className={styles.orderBtn}>
                Buy Now (ഓൺലൈനായി ഓർഡർ ചെയ്യുക)
              </button>
              <a href="tel:9567458588" className={styles.callBtn}>
                <Phone size={17} />
                <span>വിളിക്കുക: 9567458588</span>
              </a>
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.posterCard}>
              <Image 
                src="/images/product-poster.jpg" 
                alt="Petals Peeled Garlic Poster" 
                width={360} 
                height={520} 
                className={styles.posterImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

