import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart, PRODUCTS } from '@/context/CartContext';
import styles from './Products.module.css';

export default function Products() {
  const { addToCart, totalItems = 0, openCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, 1, true);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.headerCenter}>
            <span className={styles.categoryBadge}>PREMIUM PEELED GARLIC</span>
            <h2 className={styles.sectionTitle}>Our Products</h2>
            <div className={styles.titleDivider} />
            <p className={styles.sectionSubtitle}>
              100% pure, hygenically processed &amp; ready to use.
            </p>
          </div>

          {/* Cart Status Button */}
          <button 
            type="button" 
            className={styles.headerCartBtn}
            onClick={openCart}
            aria-label={`View cart with ${totalItems} items`}
          >
            <ShoppingCart size={17} strokeWidth={2} />
            <span>Cart ({mounted ? totalItems : 0})</span>
          </button>
        </div>

        {/* Product Cards Grid: Clean Minimalist E-Commerce (Zero Border Radius, Medium Font Weight) */}
        <div className={styles.productsGrid}>
          {PRODUCTS.map((product) => {
            const isAdded = addedId === product.id;

            return (
              <div key={product.id} className={styles.productCard}>
                {/* 1. Flush Edge-to-Edge Image (Zero Border Radius) */}
                <div className={styles.imageCardFrame}>
                  {product.discountAmount > 0 && (
                    <span className={styles.saveTag}>
                      Save ₹{product.discountAmount}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={600}
                    height={600}
                    className={styles.productImage}
                    priority
                  />
                </div>

                {/* 2. Clean Minimalist Content (Reduced Font Weight) */}
                <div className={styles.cardBody}>
                  {/* Weight: Reduced Font Weight (500) */}
                  <h3 className={styles.productWeight}>{product.weight}</h3>

                  {/* Price with Discount Note */}
                  <div className={styles.priceContainer}>
                    <span className={styles.productPrice}>₹{product.price}</span>
                    {product.discountAmount > 0 && (
                      <span className={styles.strikethroughPrice}>₹{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Clean Add to Cart Button */}
                  <button
                    type="button"
                    className={`${styles.addToCartBtn} ${isAdded ? styles.addedBtn : ''}`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {isAdded ? (
                      <>
                        <Check size={18} strokeWidth={2.2} />
                        <span>Added to cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={18} strokeWidth={2} />
                        <span>Add to cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
