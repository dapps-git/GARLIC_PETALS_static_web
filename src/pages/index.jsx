import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import WhyPetals from '@/components/WhyPetals';
import Products from '@/components/Products';
import HowItWorks from '@/components/HowItWorks';
import BulkSupply from '@/components/BulkSupply';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';
import BulkQuoteModal from '@/components/BulkQuoteModal';
import { useCart, PRODUCTS } from '@/context/CartContext';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleOpenOrder = (data = null) => {
    if (data?.pack?.id) {
      const match = PRODUCTS.find(p => p.id === data.pack.id) || PRODUCTS[0];
      addToCart(match, data.quantity || 1, true);
    } else {
      // Default to 1kg pack and open cart
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

          {/* Our Story Section */}
          <OurStory />

          {/* Why Petals: Everything garlic should be */}
          <WhyPetals />

          {/* Clean Ecommerce Product Pack Cards (1kg, 5kg, 10kg with Discounts) */}
          <Products onOpenOrder={handleOpenOrder} />

          {/* How It Works: From our hub to your kitchen */}
          <HowItWorks onOpenOrder={handleOpenOrder} />

          {/* Bulk Supply: Commercial supply for restaurants & caterers */}
          <BulkSupply onOpenQuote={handleOpenQuote} />

          {/* Customer Reviews Section */}
          <Reviews />

          {/* FAQ: Good to know + Final CTA */}
          <FAQ onOpenOrder={handleOpenOrder} onOpenQuote={handleOpenQuote} />
        </main>

        <Footer onOpenOrder={handleOpenOrder} />

        {/* Shopping Cart & Address Checkout Modal */}
        <CartModal />

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
