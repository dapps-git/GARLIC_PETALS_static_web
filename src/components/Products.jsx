import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Plus, Minus, Leaf, ShieldCheck, Clock, Truck } from 'lucide-react';
import styles from './Products.module.css';

export default function Products({ onOpenOrder }) {
  const [quantity, setQuantity] = useState(1);
  const UNIT_PRICE = 200;
  const totalPrice = UNIT_PRICE * quantity;

  const handleDecrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleBuy = () => {
    onOpenOrder({
      pack: {
        id: 'garlic-1kg',
        name: 'Petals Peeled Garlic',
        size: `${quantity} Kg`,
        price: UNIT_PRICE
      },
      quantity: quantity
    });
  };

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Product</h2>
        </div>

        <div className={styles.productCard}>
          {/* Left Column: Product Photo */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <span className={styles.freshBadge}>100% Fresh Garlic</span>
              <Image 
                src="/images/product-pouch.jpg" 
                alt="Petals Peeled Garlic Pouch" 
                width={720} 
                height={540} 
                className={styles.productImg}
                priority
              />
            </div>
          </div>

          {/* Right Column: Details & Stepper */}
          <div className={styles.detailsColumn}>
            <span className={styles.packType}>Fresh Zipper Pouch</span>
            <h3 className={styles.productName}>Petals Peeled Garlic</h3>

            {/* Price Row: 1kg = 200 */}
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>₹{totalPrice}</span>
              <span className={styles.rateNotice}>({quantity} Kg @ ₹200 / Kg)</span>
            </div>

            <p className={styles.description}>
              We believe everyday cooking should be simple and enjoyable. Hand-picked, cleanly peeled garlic cloves ready to cook instantly with zero waste.
            </p>

            {/* Key Benefits with Dark Green Icons */}
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <Leaf size={18} className={styles.featureIcon} />
                <span>100% Natural &amp; Chemical-Free</span>
              </div>
              <div className={styles.featureItem}>
                <ShieldCheck size={18} className={styles.featureIcon} />
                <span>Hygienically Hand-Peeled &amp; Cleaned</span>
              </div>
              <div className={styles.featureItem}>
                <Clock size={18} className={styles.featureIcon} />
                <span>Zero Prep Time — Ready to Cook</span>
              </div>
              <div className={styles.featureItem}>
                <Truck size={18} className={styles.featureIcon} />
                <span>Doorstep Delivery Across Kerala</span>
              </div>
            </div>

            {/* Quantity Stepper (+ -) */}
            <div className={styles.stepperContainer}>
              <span className={styles.stepperLabel}>Select Quantity:</span>
              <div className={styles.stepperBox}>
                <button 
                  type="button" 
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className={styles.stepBtn}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <div className={styles.stepValue}>
                  <span className={styles.qtyNum}>{quantity}</span>
                  <span className={styles.qtyUnit}>Kg</span>
                </div>
                <button 
                  type="button" 
                  onClick={handleIncrement}
                  className={styles.stepBtn}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Button: Dark Green Order Now */}
            <div className={styles.actionRow}>
              <button 
                type="button" 
                onClick={handleBuy}
                className={styles.buyNowBtn}
              >
                <ShoppingBag size={20} strokeWidth={2.2} />
                <span>Buy Now ({quantity} Kg — ₹{totalPrice})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
