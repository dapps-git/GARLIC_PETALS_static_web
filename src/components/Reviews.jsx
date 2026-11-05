import { useState } from 'react';
import { 
  CheckCircle2, 
  ThumbsUp, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  X
} from 'lucide-react';
import ReviewStar from './ReviewStar';
import styles from './Reviews.module.css';

const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'Home Cook',
    location: 'Kadavanthra, Kochi',
    rating: 5,
    date: '3 days ago',
    verified: true,
    pack: '5 kg Fresh Pouch',
    headline: 'Saves so much morning cooking time',
    content: 'Order arrived in Kochi within 24 hours of booking on WhatsApp. Cloves were completely dry, firm, and lasted over 3 weeks in the fridge. No peeling mess before packing school lunch boxes.',
    helpfulCount: 28,
    category: 'home'
  },
  {
    id: 2,
    name: 'Chef Rajesh Kumar',
    role: 'Head Chef, Malabar Spices Catering',
    location: 'Thrissur',
    rating: 5,
    date: '5 days ago',
    verified: true,
    pack: '15 kg Bulk Pack',
    headline: 'Reliable bulk supply for our catering kitchen',
    content: 'We order 30 to 50 kg every week from the Thrissur hub. Peeling garlic used to tie down two kitchen helpers for two hours every morning. Petals garlic arrives clean, dry, and ready to grind.',
    helpfulCount: 42,
    category: 'catering'
  },
  {
    id: 3,
    name: 'Anand Mathew',
    role: 'Verified Buyer',
    location: 'Kowdiar, Trivandrum',
    rating: 5,
    date: '1 week ago',
    verified: true,
    pack: '1 kg Fresh Pouch',
    headline: 'Fresh quality with zero chemical smell',
    content: 'I was hesitant about pre-peeled garlic, but the 1 kg pack was impressive. Pure dry cloves with the natural pungent aroma intact. No vinegar or chemical wash smell at all.',
    helpfulCount: 19,
    category: 'home'
  },
  {
    id: 4,
    name: 'Fatima Shaji',
    role: 'Cloud Kitchen Owner',
    location: 'Calicut',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    pack: '10 kg Wholesale Pack',
    headline: 'Strong natural flavor for our biryani pastes',
    content: 'Unlike market peeled garlic that is water-soaked and soggy, this is solid and fresh. When ground with ginger, the paste is thick and aromatic. Perfect for our daily biryani dum prep.',
    helpfulCount: 35,
    category: 'catering'
  },
  {
    id: 5,
    name: 'Deepa Varghese',
    role: 'Verified Buyer',
    location: 'Chinnakada, Kollam',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    pack: '5 kg Fresh Pouch',
    headline: 'Will never buy whole unpeeled garlic again',
    content: 'No sticky fingers, no skin flakes flying everywhere, and zero waste from spoiled cloves. The 5 kg pack easily lasts our family a month in the refrigerator.',
    helpfulCount: 22,
    category: 'home'
  },
  {
    id: 6,
    name: 'Suresh Menon',
    role: 'Restaurant Manager',
    location: 'Aluva, Ernakulam',
    rating: 5,
    date: '1 month ago',
    verified: true,
    pack: '15 kg Bulk Pack',
    headline: 'Consistent supply and honest pricing',
    content: 'Great communication directly on WhatsApp. Doorstep delivery is prompt and rates are lower than paying kitchen staff to peel raw garlic daily. Highly recommend for commercial kitchens.',
    helpfulCount: 31,
    category: 'catering'
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [filter, setFilter] = useState('all');
  const [helpfulLiked, setHelpfulLiked] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    pack: '1 kg Fresh Pouch',
    headline: '',
    content: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleHelpful = (id) => {
    if (helpfulLiked[id]) return;
    setReviews(prev =>
      prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r)
    );
    setHelpfulLiked(prev => ({ ...prev, [id]: true }));
  };

  const handleOpenModal = () => {
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.content.trim()) return;

    const created = {
      id: Date.now(),
      name: newReview.name.trim(),
      role: 'Verified Buyer',
      location: newReview.location.trim() || 'Kerala',
      rating: Number(newReview.rating),
      date: 'Just now',
      verified: true,
      pack: newReview.pack,
      headline: newReview.headline.trim() || 'Great quality fresh garlic!',
      content: newReview.content.trim(),
      helpfulCount: 0,
      category: 'home'
    };

    setReviews([created, ...reviews]);
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setNewReview({
        name: '',
        location: '',
        rating: 5,
        pack: '1 kg Fresh Pouch',
        headline: '',
        content: ''
      });
    }, 1800);
  };

  const filteredReviews = reviews.filter(r => {
    if (filter === 'all') return true;
    if (filter === 'catering') return r.category === 'catering';
    if (filter === 'home') return r.category === 'home';
    return true;
  });

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>VERIFIED CUSTOMER FEEDBACK</span>
          </div>
          <h2 className={styles.title}>Customer Reviews</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Read honest experiences from Kerala households, catering companies, and restaurants.
          </p>
        </div>

        {/* E-Commerce Rating Overview Banner */}
        <div className={styles.ratingOverviewCard}>
          <div className={styles.scoreCol}>
            <div className={styles.bigScore}>4.9</div>
            <div className={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <ReviewStar key={i} size={20} className={styles.goldStarFilled} />
              ))}
            </div>
            <div className={styles.scoreMeta}>Based on 320+ verified orders</div>
          </div>

          <div className={styles.barsCol}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>5 Stars</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '94%' }} />
              </div>
              <span className={styles.barPercent}>94%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>4 Stars</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '5%' }} />
              </div>
              <span className={styles.barPercent}>5%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>3 Stars</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '1%' }} />
              </div>
              <span className={styles.barPercent}>1%</span>
            </div>
          </div>

          <div className={styles.trustCol}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={18} className={styles.trustIcon} />
              <span>100% Naturally Hand-Peeled</span>
            </div>
            <div className={styles.trustItem}>
              <ShieldCheck size={18} className={styles.trustIcon} />
              <span>Zero Chemicals &amp; Preservatives</span>
            </div>
            <div className={styles.trustItem}>
              <Truck size={18} className={styles.trustIcon} />
              <span>Same-Day Branch Dispatch</span>
            </div>
            <button 
              type="button" 
              className={styles.writeReviewBtn}
              onClick={handleOpenModal}
            >
              <MessageSquare size={16} />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className={styles.filterRow}>
          <button 
            type="button" 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('all')}
          >
            All Reviews ({reviews.length})
          </button>
          <button 
            type="button" 
            className={`${styles.filterBtn} ${filter === 'home' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('home')}
          >
            Home Cooks
          </button>
          <button 
            type="button" 
            className={`${styles.filterBtn} ${filter === 'catering' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('catering')}
          >
            Hotels &amp; Caterers
          </button>
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {filteredReviews.map((rev) => (
            <div key={rev.id} className={styles.reviewCard}>
              {/* Header */}
              <div className={styles.cardTop}>
                <div className={styles.userWrap}>
                  <div className={styles.avatar}>
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.nameRow}>
                      <span className={styles.userName}>{rev.name}</span>
                      {rev.verified && (
                        <span className={styles.verifiedBadge}>
                          <CheckCircle2 size={13} /> Verified Buyer
                        </span>
                      )}
                    </div>
                    <div className={styles.userLocation}>{rev.location}</div>
                  </div>
                </div>
                <span className={styles.reviewDate}>{rev.date}</span>
              </div>

              {/* Star Rating & Pack Tag */}
              <div className={styles.ratingAndPackRow}>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <ReviewStar 
                      key={s} 
                      size={15} 
                      className={s <= rev.rating ? styles.goldStarFilled : styles.starEmpty}
                    />
                  ))}
                </div>
                <span className={styles.packTag}>{rev.pack}</span>
              </div>

              {/* Review Headline & Text */}
              <h4 className={styles.reviewHeadline}>&ldquo;{rev.headline}&rdquo;</h4>
              <p className={styles.reviewContent}>{rev.content}</p>

              {/* Helpful footer */}
              <div className={styles.cardFooter}>
                <button 
                  type="button" 
                  className={`${styles.helpfulBtn} ${helpfulLiked[rev.id] ? styles.helpfulActive : ''}`}
                  onClick={() => handleHelpful(rev.id)}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Write a Review</h3>
              <button 
                type="button" 
                className={styles.modalClose} 
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {formSubmitted ? (
              <div className={styles.successFormMsg}>
                <CheckCircle2 size={46} color="#15803d" />
                <h4>Thank You for Your Review!</h4>
                <p>Your feedback helps home cooks and restaurants across Kerala choose fresh peeled garlic.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className={styles.modalForm}>
                <div className={styles.modalFormGroup}>
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Anjali Nair"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  />
                </div>

                <div className={styles.modalFormGroup}>
                  <label>Your City / Town</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ernakulam / Thrissur"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  />
                </div>

                <div className={styles.modalRow2}>
                  <div className={styles.modalFormGroup}>
                    <label>Rating</label>
                    <select 
                      value={newReview.rating} 
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Good)</option>
                      <option value={3}>⭐⭐⭐ (3 - Average)</option>
                    </select>
                  </div>

                  <div className={styles.modalFormGroup}>
                    <label>Pack Purchased</label>
                    <select 
                      value={newReview.pack} 
                      onChange={(e) => setNewReview({ ...newReview, pack: e.target.value })}
                    >
                      <option value="1 kg Fresh Pouch">1 kg Fresh Pouch</option>
                      <option value="5 kg Fresh Pouch">5 kg Fresh Pouch</option>
                      <option value="10 kg Wholesale Pack">10 kg Wholesale Pack</option>
                    </select>
                  </div>
                </div>

                <div className={styles.modalFormGroup}>
                  <label>Review Headline *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Super fresh and huge time saver!"
                    value={newReview.headline}
                    onChange={(e) => setNewReview({ ...newReview, headline: e.target.value })}
                  />
                </div>

                <div className={styles.modalFormGroup}>
                  <label>Your Review *</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell others how you liked Petals peeled garlic, freshness, packaging, or delivery..."
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitReviewBtn}>
                  Submit Verified Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

