import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer({ onOpenOrder }) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Bio */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/petals-real-logo.png" 
                alt="Petals Peeled Garlic Logo" 
                width={56} 
                height={56} 
                className={styles.footerLogoImg}
              />
            </div>
            <p className={styles.brandBio}>
              Premium peeled garlic freshly processed and supplied across Kerala. 100% natural, hygienic, ready-to-cook cloves for restaurants, caterers, and homes.
            </p>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className={styles.linksCol}>
            <h4 className={styles.columnHeading}>QUICK LINKS</h4>
            <ul className={styles.linkList}>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#why-petals">Why Petals</Link></li>
              <li><Link href="/#faq">FAQ &amp; Delivery</Link></li>
            </ul>
          </div>

          {/* Column 3: CONTACT INFO */}
          <div className={styles.contactCol}>
            <h4 className={styles.columnHeading}>CONTACT INFO</h4>
            <div className={styles.contactItems}>
              <a href="tel:9567458588" className={styles.contactRow}>
                <Phone size={16} className={styles.contactIcon} />
                <span>+91 95674 58588</span>
              </a>

              <a href="mailto:petalsgarlic@gmail.com" className={styles.contactRow}>
                <Mail size={16} className={styles.contactIcon} />
                <span>petalsgarlic@gmail.com</span>
              </a>

              <div className={`${styles.contactRow} ${styles.addressRow}`}>
                <MapPin size={18} className={styles.contactIcon} />
                <div className={styles.addressText}>
                  <strong>PETALS GARLIC HUB</strong>
                  <span>Central Distribution Hub</span>
                  <span>Thrissur | Cochin | Kollam | Trivandrum</span>
                  <span>Kerala – 680001, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: POLICIES */}
          <div className={styles.policiesCol}>
            <h4 className={styles.columnHeading}>POLICIES</h4>
            <ul className={styles.linkList}>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#refund">Refund Policy</a></li>
              <li><a href="#shipping">Shipping Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Petals Peeled Garlic. All Rights Reserved.
          </p>

          <div className={styles.socialIcons}>
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialBtn}
              aria-label="Facebook"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919567458588?text=Hello%20Petals%20Garlic,%20I%20have%20an%20inquiry." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialBtn}
              aria-label="WhatsApp"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
