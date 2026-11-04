import { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';
import styles from './FAQ.module.css';

const WHATSAPP_NUMBER = '919567458588';

const FAQS = [
  {
    question: 'How do I place an order?',
    answer: 'Choose your quantity and tap “Order on WhatsApp”. Our team confirms your order and delivery details.'
  },
  {
    question: 'Where do you deliver?',
    answer: 'Thrissur, Cochin, Kollam and Trivandrum, with doorstep delivery across Kerala.'
  },
  {
    question: 'Do you supply restaurants and caterers in bulk?',
    answer: 'Yes. Message us on WhatsApp with your weekly requirement and we will share bulk details.'
  },
  {
    question: 'Is the garlic natural?',
    answer: 'Yes. Petals is 100% natural and chemical-free, hand-peeled and cleaned hygienically.'
  },
  {
    question: 'How should I store it?',
    answer: 'Keep the pouch zipped and refrigerated, and use clean, dry utensils to scoop.'
  }
];

export default function FAQ({ onOpenOrder, onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  const ctaWaMsg = encodeURIComponent(
    'Hi Petals, I am ready to skip the peeling! Please help me with an order.'
  );

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>QUESTIONS &amp; ANSWERS</span>
          <h2 className={styles.title}>FAQ</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>Good to know</p>
        </div>

        {/* Accordion FAQ Items */}
        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}>
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} 
                  />
                </button>
                {isOpen && (
                  <div className={styles.answerWrap}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ready to skip the peeling? Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to skip the peeling?</h3>
            <p className={styles.ctaSubtitle}>
              Talk to us for home orders, bulk supply or regular deliveries.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${ctaWaMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <a 
              href="#products" 
              className={styles.orderBtn}
            >
              <span>View Product Packs</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

