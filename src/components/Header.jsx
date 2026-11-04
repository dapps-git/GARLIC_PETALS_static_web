import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { totalItems = 0, openCart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

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

          {/* Navigation Links: Home, Why Petals, Products, Bulk Supply, How It Works, FAQ */}
          <div className={styles.desktopNav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#why-petals" className={styles.navLink}>Why Petals</a>
            <a href="#products" className={styles.navLink}>Products</a>
            <a href="#bulk-supply" className={styles.navLink}>Bulk Supply</a>
            <a href="#how-it-works" className={styles.navLink}>How It Works</a>
            <a href="#faq" className={styles.navLink}>FAQ</a>
          </div>

          {/* Cart Icon & Mobile Menu Toggle */}
          <div className={styles.navActions}>
            <button
              type="button"
              className={styles.cartHeaderBtn}
              onClick={openCart}
              aria-label={`View cart (${totalItems} items)`}
            >
              <ShoppingCart size={21} strokeWidth={2.2} />
              {mounted && totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </button>

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
            <a href="#why-petals" onClick={() => setMobileMenuOpen(false)}>Why Petals</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#bulk-supply" onClick={() => setMobileMenuOpen(false)}>Bulk Supply</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a 
              href="#cart" 
              onClick={(e) => { 
                e.preventDefault(); 
                setMobileMenuOpen(false); 
                openCart(); 
              }}
              className={styles.mobileCartLink}
            >
              Shopping Cart {mounted && totalItems > 0 ? `(${totalItems})` : ''}
            </a>
            <a href="#footer" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
