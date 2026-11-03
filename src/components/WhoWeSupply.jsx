import { Utensils, Hotel, Factory, Store, ArrowUpRight } from 'lucide-react';
import styles from './WhoWeSupply.module.css';

export default function WhoWeSupply({ onOpenQuote }) {
  const segments = [
    {
      icon: <Utensils size={30} />,
      title: 'Restaurants',
      desc: 'Biryani houses, Arabian grills, Chinese kitchens & fine dining restaurants rely on us for zero-waste instant prep garlic.'
    },
    {
      icon: <Hotel size={30} />,
      title: 'Hotels & Caterers',
      desc: 'Large banquets, wedding caterers, and luxury hotel kitchens requiring scheduled morning bulk supply.'
    },
    {
      icon: <Factory size={30} />,
      title: 'Food Processors',
      desc: 'Commercial manufacturers of ginger-garlic paste, Kerala pickles, snacks, and ready-to-eat packaged foods.'
    },
    {
      icon: <Store size={30} />,
      title: 'Retailers & Exporters',
      desc: 'Supermarkets, organic stores, and grocery chains stocking consumer-ready hygienic 500g & 1kg zipper packs.'
    }
  ];

  return (
    <section id="who-we-supply" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span>WHO WE SUPPLY 🌿</span>
          </div>
          <h2 className={styles.title}>Trusted by Businesses Across Kerala</h2>
          <p className={styles.subtitle}>
            From local culinary kitchens to industrial food processors – we keep your business stocked with the finest, freshest peeled garlic every single day.
          </p>
        </div>

        <div className={styles.grid}>
          {segments.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <button 
                onClick={onOpenQuote} 
                className={styles.inquireLink}
              >
                <span>Bulk Supply Inquiry</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

