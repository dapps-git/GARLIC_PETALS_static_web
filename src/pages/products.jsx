import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';
import BulkQuoteModal from '@/components/BulkQuoteModal';
import { useCart, PRODUCTS } from '@/context/CartContext';

export default function ProductsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleOpenOrder = (data = null) => {
    if (data?.pack?.id) {
      const match = PRODUCTS.find(p => p.id === data.pack.id) || PRODUCTS[0];
      addToCart(match, data.quantity || 1, true);
    } else {
      addToCart(PRODUCTS[0], 1, true);
    }
  };

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Products - Petals Peeled Garlic (1kg, 5kg, 10kg, 15kg)</title>
        <meta 
          name="description" 
          content="Order fresh, hygienically peeled garlic online in 1kg, 5kg, 10kg, and 15kg packs. Zero waste, ready to cook, doorstep delivery across Kerala." 
        />
        <meta property="og:title" content="Products - Petals Peeled Garlic" />
        <meta property="og:image" content="/images/main-banner.jpg" />
        <link rel="icon" href="/images/garlic-icon.png" />
      </Head>

      <div className="main-wrapper">
        <Header onOpenQuote={handleOpenQuote} />

        <main id="products-catalog">
          {/* Breadcrumb only - No extra texts as requested */}
          <div style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '1.75rem 1.5rem 0.5rem',
            width: '100%'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.86rem', 
              color: '#64748b', 
              fontWeight: 500
            }}>
              <Link href="/" style={{ color: '#0e3b2b', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: '#15803d', fontWeight: 600 }}>Products</span>
            </div>
          </div>

          {/* Clean 4-Product Grid with "Products" Heading (That's all) */}
          <Products onOpenOrder={handleOpenOrder} />

          {/* Client Reviews Section */}
          <Reviews />

          {/* FAQ & Support */}
          <FAQ onOpenOrder={handleOpenOrder} onOpenQuote={handleOpenQuote} />
        </main>

        <Footer onOpenOrder={handleOpenOrder} />

        {/* Cart & Checkout */}
        <CartModal />

        {/* Bulk Quote Modal */}
        {quoteModalOpen && (
          <BulkQuoteModal onClose={handleCloseQuote} />
        )}
      </div>
    </>
  );
}

