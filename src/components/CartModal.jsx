import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Truck
} from 'lucide-react';
import { useCart, PRODUCTS } from '@/context/CartContext';
import styles from './CartModal.module.css';

const WHATSAPP_NUMBER = '919567458588';

const KERALA_DISTRICTS = [
  'Thrissur (Branch)',
  'Ernakulam / Cochin (Branch)',
  'Kollam (Branch)',
  'Thiruvananthapuram (Branch)',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Kottayam',
  'Alappuzha',
  'Kannur',
  'Idukki',
  'Pathanamthitta',
  'Kasaragod',
  'Wayanad'
];

export default function CartModal() {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    totalItems, 
    totalAmount,
    addToCart
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    street: '',
    landmark: '',
    city: '',
    district: 'Thrissur (Branch)',
    pincode: '',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isCartOpen) return null;

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Please enter at least 2 characters';
        return '';
      case 'phone': {
        const cleanPhone = value.replace(/[\s-]/g, '');
        if (!cleanPhone) return 'Phone number is required';
        if (!/^[6-9]\d{9}$/.test(cleanPhone)) return 'Enter valid 10-digit mobile number';
        return '';
      }
      case 'street':
        if (!value.trim()) return 'Address is required';
        if (value.trim().length < 4) return 'Please enter detailed address';
        return '';
      case 'city':
        if (!value.trim()) return 'City / Town is required';
        return '';
      case 'district':
        if (!value) return 'Please select district';
        return '';
      case 'pincode': {
        const cleanPin = value.trim();
        if (!cleanPin) return 'PIN code is required';
        if (!/^\d{6}$/.test(cleanPin)) return 'PIN code must be 6 digits';
        return '';
      }
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    const fieldsToValidate = ['name', 'phone', 'street', 'city', 'district', 'pincode'];
    fieldsToValidate.forEach(field => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const err = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const isValid = validateAll();
    if (!isValid) {
      setShowErrorBanner(true);
      return;
    }

    setShowErrorBanner(false);

    // Format item list
    const itemsList = cartItems
      .map(item => `• *${item.name}* (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('\n');

    const totalWeight = cartItems.reduce((acc, item) => acc + (item.kgValue * item.quantity), 0);

    const orderMsg = 
      `*🌿 NEW ORDER - PETALS PEELED GARLIC*\n` +
      `---------------------------------\n` +
      `*CART ITEMS:*\n` +
      `${itemsList}\n\n` +
      `*SUMMARY:*\n` +
      `• *Total Packs:* ${totalItems}\n` +
      `• *Total Weight:* ${totalWeight} Kg\n` +
      `• *TOTAL AMOUNT:* ₹${totalAmount}\n` +
      `• *Delivery:* FREE Doorstep Delivery\n` +
      `---------------------------------\n` +
      `*CUSTOMER DETAILS:*\n` +
      `• *Name:* ${formData.name.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n\n` +
      `*DELIVERY ADDRESS:*\n` +
      `• *Street/Building:* ${formData.street.trim()}\n` +
      `${formData.landmark ? `• *Landmark:* ${formData.landmark.trim()}\n` : ''}` +
      `• *City/Town:* ${formData.city.trim()}\n` +
      `• *District:* ${formData.district}\n` +
      `• *Pincode:* ${formData.pincode.trim()}\n` +
      `${formData.note ? `\n*NOTE:* ${formData.note.trim()}\n` : ''}` +
      `---------------------------------\n` +
      `_Order placed via Petals Peeled Garlic Online Store_`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMsg)}`;
    setWaUrl(url);
    setSubmitted(true);
    clearCart();

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={closeCart}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.header}>
          <div className={styles.headerTitleWrap}>
            <ShoppingBag size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.modalTitle}>Your Cart</h2>
              <span className={styles.itemCountText}>
                {totalItems} {totalItems === 1 ? 'pack' : 'packs'}
              </span>
            </div>
          </div>
          <button 
            type="button" 
            className={styles.closeBtn} 
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className={styles.successState}>
            <div className={styles.successIconCircle}>
              <CheckCircle2 size={46} color="#15803d" />
            </div>
            <h3 className={styles.successTitle}>Order Sent to WhatsApp!</h3>
            <p className={styles.successText}>
              We have forwarded your order and delivery address details directly to our WhatsApp dispatch team. We will confirm your order and delivery schedule shortly.
            </p>
            {waUrl && (
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.continueWaBtn}
              >
                <span>Continue on WhatsApp</span>
                <ArrowRight size={18} />
              </a>
            )}
            <button 
              type="button" 
              className={styles.doneBtn} 
              onClick={() => {
                setSubmitted(false);
                closeCart();
              }}
            >
              Back to Home
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIconCircle}>
              <ShoppingBag size={48} color="#899a91" />
            </div>
            <h3 className={styles.emptyTitle}>Your cart is empty</h3>
            <p className={styles.emptyText}>
              Choose from our 1 kg, 5 kg, or 10 kg fresh peeled garlic packs to start your order.
            </p>
            <div className={styles.quickAddRow}>
              {PRODUCTS.map(p => (
                <button 
                  key={p.id} 
                  type="button" 
                  className={styles.quickAddBtn}
                  onClick={() => addToCart(p, 1, false)}
                >
                  <Plus size={14} /> Add {p.weight} (₹{p.price})
                </button>
              ))}
            </div>
            <button 
              type="button" 
              className={styles.shopNowBtn}
              onClick={() => {
                closeCart();
                if (typeof window !== 'undefined') {
                  window.location.hash = '#products';
                }
              }}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className={styles.contentScroll}>
            {/* 1. Items List */}
            <div className={styles.itemsSection}>
              <h4 className={styles.subSectionTitle}>Items in Cart</h4>
              <div className={styles.itemsList}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemImgWrap}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        width={60} 
                        height={60} 
                        className={styles.itemImg} 
                      />
                    </div>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemTitleRow}>
                        <h5 className={styles.itemName}>{item.weight} Peeled Garlic</h5>
                        <button 
                          type="button" 
                          className={styles.deleteBtn}
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className={styles.itemPriceRate}>₹{item.price} per pack</div>
                      
                      <div className={styles.stepperAndTotal}>
                        <div className={styles.stepper}>
                          <button 
                            type="button" 
                            className={styles.stepBtn}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className={styles.stepCount}>{item.quantity}</span>
                          <button 
                            type="button" 
                            className={styles.stepBtn}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className={styles.itemSubtotal}>
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Calculation Strip */}
              <div className={styles.costSummary}>
                <div className={styles.costRow}>
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className={styles.costRow}>
                  <span className={styles.freeDeliveryLabel}>
                    <Truck size={15} /> Delivery
                  </span>
                  <span className={styles.freeBadge}>FREE</span>
                </div>
                <div className={`${styles.costRow} ${styles.totalCostRow}`}>
                  <span>Total Payable</span>
                  <span className={styles.grandTotal}>₹{totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Error Banner */}
            {showErrorBanner && (
              <div className={styles.alertBox}>
                <AlertCircle size={18} />
                <span>Please fill all required address fields marked with * before placing your order.</span>
              </div>
            )}

            {/* 2. Delivery Address Form */}
            <form onSubmit={handleSubmitOrder} className={styles.addressForm} noValidate>
              <div className={styles.addressHeader}>
                <MapPin size={18} className={styles.pinIcon} />
                <div>
                  <h4 className={styles.addressTitle}>Add Delivery Address</h4>
                  <span className={styles.addressSubtitle}>Where should we deliver your order?</span>
                </div>
              </div>

              <div className={styles.formGrid}>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name / Business Name <span className={styles.req}>*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Rahul / Spice Kitchen"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                </div>

                {/* Mobile Phone */}
                <div className={styles.formGroup}>
                  <label htmlFor="phone">WhatsApp Phone Number <span className={styles.req}>*</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.phone ? styles.inputError : ''}
                  />
                  {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                </div>

                {/* Street / Building Address */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="street">House / Building / Street Address <span className={styles.req}>*</span></label>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="e.g. Flat 3B, Sunshine Apartments, MG Road"
                    value={formData.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.street ? styles.inputError : ''}
                  />
                  {errors.street && <span className={styles.errorMsg}>{errors.street}</span>}
                </div>

                {/* Landmark */}
                <div className={styles.formGroup}>
                  <label htmlFor="landmark">Landmark (Optional)</label>
                  <input
                    id="landmark"
                    name="landmark"
                    type="text"
                    placeholder="e.g. Near Metro Pillar 42"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>

                {/* City */}
                <div className={styles.formGroup}>
                  <label htmlFor="city">City / Town <span className={styles.req}>*</span></label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="e.g. Cochin / Thrissur"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.city ? styles.inputError : ''}
                  />
                  {errors.city && <span className={styles.errorMsg}>{errors.city}</span>}
                </div>

                {/* District */}
                <div className={styles.formGroup}>
                  <label htmlFor="district">District <span className={styles.req}>*</span></label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.district ? styles.inputError : ''}
                  >
                    {KERALA_DISTRICTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Pincode */}
                <div className={styles.formGroup}>
                  <label htmlFor="pincode">PIN Code <span className={styles.req}>*</span></label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    maxLength={6}
                    placeholder="6 digits (e.g. 680001)"
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.pincode ? styles.inputError : ''}
                  />
                  {errors.pincode && <span className={styles.errorMsg}>{errors.pincode}</span>}
                </div>

                {/* Optional note */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="note">Delivery Notes (Optional)</label>
                  <input
                    id="note"
                    name="note"
                    type="text"
                    placeholder="e.g. Deliver before 12 PM / Call on arrival"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Action Button: Place Order */}
              <div className={styles.actionWrap}>
                <button type="submit" className={styles.buyNowBtn}>
                  <span>Buy Now • ₹{totalAmount}</span>
                  <ArrowRight size={20} />
                </button>
                <p className={styles.waGuarantee}>
                  Direct WhatsApp dispatch confirmation • Pay on delivery or UPI
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

