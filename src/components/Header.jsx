import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          {/* Logo with Green Circle and Green Text */}
          <Link href="/" className={styles.brandLogo} aria-label="Petals Peeled Garlic">
            <Image 
              src="/images/petals-logo-green.svg" 
              alt="Petals Peeled Garlic Logo" 
              width={50} 
              height={50} 
              className={styles.navbarLogoImg}
              priority
            />
          </Link>

          {/* Navigation Links: Home, About Us, Products, Contact */}
          <div className={styles.desktopNav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#products" className={styles.navLink}>Products</a>
            <a href="#footer" className={styles.navLink}>Contact</a>
          </div>

          {/* Mobile Menu Toggle (Visible only on mobile) */}
          <div className={styles.navActions}>
            <button 
              className={styles.menuToggle} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileNavDropdown}>
          <div className={styles.mobileNavLinks}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#footer" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
