import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <aside className={styles.floatingContainer} aria-label="WhatsApp quick contact">
      <a 
        href="https://wa.me/919567458588?text=Hello%20Petals%20Peeled%20Garlic,%20I%20would%20like%20to%20order%20fresh%20garlic." 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.waButton} pulse-wa`}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </aside>
  );
}

