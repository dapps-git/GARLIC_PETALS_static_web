import { MapPin, Phone, Truck, Clock, MessageSquare } from 'lucide-react';
import styles from './Branches.module.css';

export default function Branches({ onOpenOrder }) {
  const branches = [
    {
      city: 'Thrissur',
      role: 'Central Processing & Distribution Hub',
      areas: 'Thrissur Town, Guruvayur, Chalakudy, Irinjalakuda, Kunnamkulam',
      delivery: 'Morning 7:00 AM - 11:00 AM Daily'
    },
    {
      city: 'Cochin (Ernakulam)',
      role: 'Commercial, Hotel & Restaurant Dispatch',
      areas: 'MG Road, Edappally, Kakkanad, Fort Kochi, Aluva, Angamaly',
      delivery: 'Twice Daily: Morning & Evening Express'
    },
    {
      city: 'Kollam',
      role: 'South-Central Regional Distribution',
      areas: 'Kollam City, Karunagappally, Kottarakkara, Paravur',
      delivery: 'Morning 8:00 AM - 12:00 PM Daily'
    },
    {
      city: 'Trivandrum',
      role: 'Capital City Wholesale & Catering Supply',
      areas: 'Thampanoor, Kazhakoottam, Kowdiar, Attingal, Neyyattinkara',
      delivery: 'Early Morning Restaurant Delivery'
    }
  ];

  return (
    <section id="branches" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span>OUR NETWORK 🚚</span>
          </div>
          <h2 className={styles.title}>Kerala Distribution Branches</h2>
          <p className={styles.subtitle}>
            Strategically stationed across major culinary hubs to guarantee same-day fresh dispatch straight to your door.
          </p>
        </div>

        <div className={styles.grid}>
          {branches.map((b, idx) => (
            <div key={idx} className={styles.branchCard}>
              <div className={styles.branchHeader}>
                <div className={styles.pinIconWrap}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className={styles.cityName}>{b.city}</h3>
                  <span className={styles.cityRole}>{b.role}</span>
                </div>
              </div>

              <div className={styles.cardDetails}>
                <div className={styles.detailItem}>
                  <Truck size={15} className={styles.inlineIcon} />
                  <span><strong>Coverage:</strong> {b.areas}</span>
                </div>
                <div className={styles.detailItem}>
                  <Clock size={15} className={styles.inlineIcon} />
                  <span><strong>Dispatch:</strong> {b.delivery}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a href="tel:9567458588" className={styles.phoneLink}>
                  <Phone size={14} /> 9567458588
                </a>
                <button 
                  onClick={() => onOpenOrder()} 
                  className={styles.orderBranchBtn}
                >
                  <MessageSquare size={14} />
                  <span>Order Here</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

