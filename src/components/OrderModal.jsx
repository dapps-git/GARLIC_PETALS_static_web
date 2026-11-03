import { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, MessageSquare, ShoppingBag, MapPin, Truck, AlertCircle } from 'lucide-react';
import styles from './OrderModal.module.css';

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

export default function OrderModal({ orderData, onClose }) {
  const [pack, setPack] = useState(orderData?.pack || {
    id: 'garlic-1kg',
    name: 'Petals Peeled Garlic',
    size: '1 Kg',
    price: 200
  });
  const [quantity, setQuantity] = useState(orderData?.quantity || 1);

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

  const totalPrice = (pack.price || 200) * quantity;

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name or business name is required';
        if (value.trim().length < 2) return 'Please enter at least 2 characters';
        return '';
      case 'phone': {
        const cleanPhone = value.replace(/[\s-]/g, '');
        if (!cleanPhone) return 'Phone number is required';
        if (!/^[6-9]\d{9}$/.test(cleanPhone)) return 'Enter valid 10-digit mobile number';
        return '';
      }
      case 'street':
        if (!value.trim()) return 'Street / Building address is required';
        if (value.trim().length < 4) return 'Please enter complete address';
        return '';
      case 'city':
        if (!value.trim()) return 'City / Town is required';
        if (value.trim().length < 2) return 'Please enter a valid city or town';
        return '';
      case 'district':
        if (!value) return 'Please select district';
        return '';
      case 'pincode': {
        const cleanPin = value.trim();
        if (!cleanPin) return 'PIN code is required';
        if (!/^\d{6}$/.test(cleanPin)) return 'PIN code must be exactly 6 digits';
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

  // Check if all required fields are filled properly
  const isFormComplete = Boolean(
    formData.name.trim().length >= 2 &&
    /^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, '')) &&
    formData.street.trim().length >= 4 &&
    formData.city.trim().length >= 2 &&
    formData.district &&
    /^\d{6}$/.test(formData.pincode.trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid || !isFormComplete) {
      setShowErrorBanner(true);
      return;
    }

    setShowErrorBanner(false);

    const orderMsg = 
      `*🌿 NEW ORDER - PETALS PEELED GARLIC*\n` +
      `---------------------------------\n` +
      `*ORDER DETAILS:*\n` +
      `• *Product:* ${pack.name}\n` +
      `• *Quantity:* ${quantity} Kg\n` +
      `• *Rate:* ₹${pack.price} / Kg\n` +
      `• *TOTAL AMOUNT:* ₹${totalPrice}\n\n` +
      `*CUSTOMER INFO:*\n` +
      `• *Name:* ${formData.name.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n\n` +
      `*DELIVERY ADDRESS:*\n` +
      `• *Building/Street:* ${formData.street.trim()}\n` +
      `${formData.landmark ? `• *Landmark:* ${formData.landmark.trim()}\n` : ''}` +
      `• *City/Town:* ${formData.city.trim()}\n` +
      `• *District:* ${formData.district}\n` +
      `• *Pincode:* ${formData.pincode.trim()}\n\n` +
      `${formData.note ? `*SPECIAL INSTRUCTIONS:*\n${formData.note.trim()}\n\n` : ''}` +
      `---------------------------------\n` +
      `_Sent from Petals Peeled Garlic Website_`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMsg)}`;
    setWaUrl(url);
    setSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.headerIcon}>
                <ShoppingBag size={22} />
              </div>
              <div>
                <h2 className={styles.modalTitle}>Complete Your Order</h2>
                <p className={styles.modalSubtitle}>Please fill all delivery address details below.</p>
              </div>
            </div>

            {/* Order Product Summary Card */}
            <div className={styles.summaryCard}>
              <div className={styles.summaryTop}>
                <div>
                  <h4 className={styles.productTitle}>{pack.name}</h4>
                  <span className={styles.packTag}>Quantity: {quantity} Kg (@ ₹{pack.price}/Kg)</span>
                </div>
                <div className={styles.stepperWrap}>
                  <button 
                    type="button" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={styles.stepperBtn}
                  >-</button>
                  <span className={styles.stepperValue}>{quantity} Kg</span>
                  <button 
                    type="button" 
                    onClick={() => setQuantity(quantity + 1)}
                    className={styles.stepperBtn}
                  >+</button>
                </div>
              </div>
              <div className={styles.summaryBottom}>
                <div className={styles.calculation}>
                  ₹{pack.price} × {quantity} Kg
                </div>
                <div className={styles.totalValue}>
                  Total: <span>₹{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Error Banner when attempting to submit with missing fields */}
            {showErrorBanner && (
              <div className={styles.alertBox}>
                <AlertCircle size={17} />
                <span>Please fill in all required address fields marked with * before placing your order.</span>
              </div>
            )}

            {/* Address & Details Form */}
            <form onSubmit={handleSubmit} className={styles.orderForm} noValidate autoComplete="off">
              <div className={styles.formSectionTitle}>
                <MapPin size={16} /> Delivery Address
                <span className={styles.requiredNotice}>(* All fields required)</span>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    Your Name / Business Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    placeholder="e.g. Rahul / Spice Kitchen"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    Phone / WhatsApp Number <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    autoComplete="off"
                    placeholder="10-digit number (e.g. 9876543210)"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.phone ? styles.inputError : ''}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="street">
                  Street Address / House / Building <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="Door No, Building Name, Street / Road"
                  value={formData.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.street ? styles.inputError : ''}
                />
                {errors.street && <span className={styles.errorText}>{errors.street}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="landmark">Landmark (Optional)</label>
                  <input
                    id="landmark"
                    type="text"
                    name="landmark"
                    autoComplete="off"
                    autoCorrect="off"
                    placeholder="Near Junction, Temple, etc."
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="city">
                    City / Town <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    placeholder="e.g. Aluva, Thrissur town, etc."
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.city ? styles.inputError : ''}
                  />
                  {errors.city && <span className={styles.errorText}>{errors.city}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="district">
                    District in Kerala <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.district ? styles.inputError : ''}
                  >
                    {KERALA_DISTRICTS.map((dist, idx) => (
                      <option key={idx} value={dist}>{dist}</option>
                    ))}
                  </select>
                  {errors.district && <span className={styles.errorText}>{errors.district}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="pincode">
                    PIN Code <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    name="pincode"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={6}
                    placeholder="6-digit PIN (e.g. 680001)"
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.pincode ? styles.inputError : ''}
                  />
                  {errors.pincode && <span className={styles.errorText}>{errors.pincode}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="note">Special Instructions / Delivery Timing</label>
                <textarea
                  id="note"
                  name="note"
                  rows={2}
                  autoComplete="off"
                  placeholder="e.g. Deliver before 11 AM, deliver to back kitchen door, etc."
                  value={formData.note}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.deliveryNotice}>
                <Truck size={16} className={styles.truckIcon} />
                <span>Fast doorstep delivery from Thrissur, Cochin, Kollam &amp; Trivandrum hubs.</span>
              </div>

              {/* Submit Button - Disabled until required address fields are complete */}
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={!isFormComplete}
                title={!isFormComplete ? 'Please fill all required address fields marked with *' : 'Click to send order to WhatsApp'}
              >
                <MessageSquare size={19} />
                <span>
                  {isFormComplete 
                    ? `Send Order via WhatsApp (₹${totalPrice})` 
                    : 'Fill Required Fields to Order'}
                </span>
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={54} color="#25D366" />
            </div>
            <h3 className={styles.successTitle}>Order Details Ready!</h3>
            <p className={styles.successText}>
              Your WhatsApp window should have opened with your order summary. If it did not open automatically, click the button below:
            </p>

            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.openWaBtn}
            >
              <MessageSquare size={18} />
              <span>Open in WhatsApp</span>
            </a>

            <button onClick={onClose} className={styles.doneBtn}>
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
