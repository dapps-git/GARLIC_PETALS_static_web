import { useState } from 'react';
import { X, MessageSquare, CheckCircle2, FileText, Building2, Scale, Calendar } from 'lucide-react';
import styles from './BulkQuoteModal.module.css';

const WHATSAPP_NUMBER = '919567458588';

export default function BulkQuoteModal({ onClose }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    businessType: 'Restaurant / Hotel',
    dailyVolume: '5 - 10 Kg / day',
    deliveryCity: 'Ernakulam / Cochin',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quoteMsg = 
      `*📋 BULK SUPPLY QUOTATION REQUEST*\n` +
      `---------------------------------\n` +
      `*BUSINESS DETAILS:*\n` +
      `• *Business Name:* ${formData.businessName}\n` +
      `• *Contact Person:* ${formData.contactPerson}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Business Type:* ${formData.businessType}\n\n` +
      `*REQUIREMENTS:*\n` +
      `• *Estimated Volume:* ${formData.dailyVolume}\n` +
      `• *Delivery Location / City:* ${formData.deliveryCity}\n` +
      `${formData.comments ? `• *Notes / Frequency:* ${formData.comments}\n` : ''}` +
      `---------------------------------\n` +
      `_Please share your best wholesale rate per kg and delivery schedule._`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quoteMsg)}`;
    setWaUrl(url);
    setSubmitted(true);

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className={styles.header}>
              <div className={styles.iconCircle}>
                <FileText size={22} />
              </div>
              <div>
                <h2 className={styles.title}>Request Bulk Supply Quote</h2>
                <p className={styles.subtitle}>Direct wholesale rates for commercial kitchens &amp; caterers</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.group}>
                  <label htmlFor="businessName">Restaurant / Business Name *</label>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    required
                    placeholder="e.g. Royal Palace Hotel"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.group}>
                  <label htmlFor="contactPerson">Contact Person *</label>
                  <input
                    id="contactPerson"
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="e.g. Chef Shaji / Manager"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.group}>
                  <label htmlFor="phone">Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.group}>
                  <label htmlFor="businessType">Business Type *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                  >
                    <option value="Restaurant / Hotel">Restaurant / Hotel</option>
                    <option value="Catering & Events">Catering &amp; Events</option>
                    <option value="Food Processing / Factory">Food Processing / Factory</option>
                    <option value="Supermarket / Retail Chain">Supermarket / Retail Chain</option>
                    <option value="Cloud Kitchen / Canteen">Cloud Kitchen / Canteen</option>
                    <option value="Other Commercial">Other Commercial</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.group}>
                  <label htmlFor="dailyVolume">Estimated Requirement *</label>
                  <select
                    id="dailyVolume"
                    name="dailyVolume"
                    value={formData.dailyVolume}
                    onChange={handleChange}
                  >
                    <option value="2 - 5 Kg / day">2 - 5 Kg / day</option>
                    <option value="5 - 10 Kg / day">5 - 10 Kg / day (Popular)</option>
                    <option value="10 - 25 Kg / day">10 - 25 Kg / day (Wholesale)</option>
                    <option value="25 - 50 Kg / day">25 - 50 Kg / day (Commercial)</option>
                    <option value="100+ Kg / week or bulk lots">100+ Kg / week or bulk lots</option>
                  </select>
                </div>
                <div className={styles.group}>
                  <label htmlFor="deliveryCity">Location / Branch Area *</label>
                  <input
                    id="deliveryCity"
                    type="text"
                    name="deliveryCity"
                    required
                    placeholder="e.g. Cochin / Thrissur / Kollam"
                    value={formData.deliveryCity}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label htmlFor="comments">Additional Notes / Delivery Days</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={2}
                  placeholder="Need morning 8 AM daily delivery, weekly billing, sample pack required, etc."
                  value={formData.comments}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <MessageSquare size={18} />
                <span>Submit Quote Request via WhatsApp</span>
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successBox}>
            <CheckCircle2 size={50} color="#25D366" />
            <h3 className={styles.successTitle}>Quotation Request Sent!</h3>
            <p className={styles.successText}>
              Your WhatsApp window has been initiated with your quotation request. We will reply shortly with wholesale rates.
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
              <MessageSquare size={17} /> Open WhatsApp
            </a>
            <button onClick={onClose} className={styles.closeDone}>Back to Site</button>
          </div>
        )}
      </div>
    </div>
  );
}

