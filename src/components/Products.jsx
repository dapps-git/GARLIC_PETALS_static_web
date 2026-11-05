import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import ReviewStar from './ReviewStar';
import { useCart, PRODUCTS } from '@/context/CartContext';
import styles from './Products.module.css';

export default function Products() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);
  const [quantities, setQuantities] = useState({
    'garlic-1kg': 1,
    'garlic-5kg': 1,
    'garlic-10kg': 1,
    'garlic-15kg': 1,
  });

  const handleDecrease = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) - 1)
    }));
  };

  const handleIncrease = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1
    }));
  };

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    addToCart(product, qty, true);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Header: Centered Leaves Accent + Products in Serif */}
        <div className={styles.headerWrapper}>
          <div className={styles.headingLeaves}>
            <svg width="32" height="18" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 26C22.8 15.5 13 6 1 6C1 18.5 11 26 24 26Z" fill="#1b6347" />
              <path d="M24 26C25.2 15.5 35 6 47 6C47 18.5 37 26 24 26Z" fill="#2d8a63" />
            </svg>
          </div>
          <h2 className={styles.sectionTitle}>Products</h2>
        </div>

        {/* Product Cards Grid: 4 Cards on Desktop, 2 Cards on Mobile */}
        <div className={styles.productsGrid}>
          {PRODUCTS.map((product) => {
            const isAdded = addedId === product.id;
            const qty = quantities[product.id] || 1;

            return (
              <div key={product.id} className={styles.productCard}>
                {/* 1. Image Frame with Top Rounded Corners */}
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

                {/* 2. Content Row: Title, Weight | Price, Rating, Stepper & Add button */}
                <div className={styles.cardBody}>
                  <h3 className={styles.productTitle}>Peeled Garlic</h3>

                  {/* Row 1: Weight Pill | Price */}
                  <div className={styles.productMetaRow}>
                    <span className={styles.productWeightPill}>{product.weight}</span>
                    <span className={styles.metaDivider}>|</span>
                    <div className={styles.priceContainer}>
                      <span className={styles.productPrice}>₹{product.price}</span>
                      {product.discountAmount > 0 && (
                        <span className={styles.strikethroughPrice}>₹{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Gold Star + Rating Score + Count */}
                  <div className={styles.ratingBadge}>
                    <span className={styles.starGold}>★</span>
                    <span className={styles.ratingScore}>{product.rating || '4.8'}</span>
                    <span className={styles.ratingCount}>({product.reviewCount || '142'})</span>
                  </div>

                  {/* Row 3: Stepper (- / +) and Add Button (🛒 Add) */}
                  <div className={styles.cartActionRow}>
                    <div className={styles.qtyStepper}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => handleDecrease(product.id)}
                        aria-label={`Decrease quantity of ${product.weight}`}
                      >
                        -
                      </button>
                      <span className={styles.qtyValue}>{qty}</span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => handleIncrease(product.id)}
                        aria-label={`Increase quantity of ${product.weight}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className={`${styles.addToCartBtn} ${isAdded ? styles.addedBtn : ''}`}
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${qty} ${product.weight} to cart`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} strokeWidth={2.4} />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={14} strokeWidth={2.2} />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
