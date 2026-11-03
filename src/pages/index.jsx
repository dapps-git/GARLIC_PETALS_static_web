import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import BulkQuoteModal from '@/components/BulkQuoteModal';

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeOrderData, setActiveOrderData] = useState(null);

  const handleOpenOrder = (data = null) => {
    if (data) {
      setActiveOrderData(data);
    } else {
      // Default to 1kg pack
      setActiveOrderData({
        pack: {
          id: 'garlic-1kg',
          name: 'Petals Peeled Garlic - 1 Kg',
          size: '1 Kg',
          price: 200,
          mrp: 250
        },
        quantity: 1
      });
    }
    setOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setOrderModalOpen(false);
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
        <title>Petals Peeled Garlic - Fresh &amp; 100% Pure</title>
        <meta 
          name="description" 
          content="Buy fresh peeled garlic online across Kerala. Direct doorstep delivery in Thrissur, Cochin, Kollam &amp; Trivandrum. WhatsApp 9567458588." 
        />
        <meta property="og:title" content="Petals Peeled Garlic" />
        <meta property="og:image" content="/images/main-banner.jpg" />
        <link rel="icon" href="/images/garlic-icon.png" />
      </Head>

      <div className="main-wrapper">
        <Header 
          onOpenQuote={handleOpenQuote} 
        />

        <main id="home">
          {/* Full Bleed Hero Banner */}
          <Hero onOpenOrder={handleOpenOrder} />

          {/* Our Story Section with Story Text, 2 Buttons & Garlic Photo */}
          <OurStory />

          {/* Product Pack Cards */}
          <Products onOpenOrder={handleOpenOrder} />
        </main>

        <Footer onOpenOrder={handleOpenOrder} />

        {/* Address Form Modal -> Sends to WhatsApp */}
        {orderModalOpen && (
          <OrderModal 
            orderData={activeOrderData} 
            onClose={handleCloseOrder} 
          />
        )}

        {/* Bulk Quote Modal */}
        {quoteModalOpen && (
          <BulkQuoteModal 
            onClose={handleCloseQuote} 
          />
        )}
      </div>
    </>
  );
}
