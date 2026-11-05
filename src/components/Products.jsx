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
        {/* Section Header: Simply Products */}
        <div className={styles.headerWrapper}>
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
                      SAVE ₹{product.discountAmount}
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

                {/* 2. Content Row: Weight | Price, Stars, Quantity Stepper & Cart Icon */}
                <div className={styles.cardBody}>
                  {/* Row 1: Weight | Price */}
                  <div className={styles.productMetaRow}>
                    <span className={styles.productWeight}>{product.weight}</span>
                    <span className={styles.metaDivider}>|</span>
                    <div className={styles.priceContainer}>
                      <span className={styles.productPrice}>₹{product.price}</span>
                      {product.discountAmount > 0 && (
                        <span className={styles.strikethroughPrice}>₹{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: 5 Faceted Stars + Rating Score + Count */}
                  <div className={styles.ratingBadge}>
                    <div className={styles.starsRow}>
                      {[...Array(5)].map((_, i) => (
                        <ReviewStar key={i} size={14} className={styles.starIcon} />
                      ))}
                    </div>
                    <span className={styles.ratingScore}>{product.rating || '4.8'}</span>
                    <span className={styles.ratingCount}>({product.reviewCount || '142'})</span>
                  </div>

                  {/* Row 3: Stepper (- / +) and Cart Icon Only (No "Add to cart" text button) */}
                  <div className={styles.cartActionRow}>
                    <div className={styles.qtyStepper}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => handleDecrease(product.id)}
                        aria-label={`Decrease quantity of ${product.weight}`}
                      >
                        <Minus size={14} strokeWidth={2.4} />
                      </button>
                      <span className={styles.qtyValue}>{qty}</span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => handleIncrease(product.id)}
                        aria-label={`Increase quantity of ${product.weight}`}
                      >
                        <Plus size={14} strokeWidth={2.4} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className={`${styles.cartIconOnlyBtn} ${isAdded ? styles.addedIconBtn : ''}`}
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${qty} ${product.weight} to cart`}
                    >
                      {isAdded ? (
                        <Check size={18} strokeWidth={2.4} />
                      ) : (
                        <ShoppingCart size={18} strokeWidth={2.2} />
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
