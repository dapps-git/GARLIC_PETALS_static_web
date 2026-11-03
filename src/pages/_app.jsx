import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Petals Peeled Garlic | Fresh, Hygienic & 100% Pure Ready-to-Use Garlic</title>
        <meta name="description" content="Order freshly peeled garlic across Kerala. 100% Pure, Hygienically Processed, and Ready-to-Use. Branches in Thrissur, Cochin, Kollam & Trivandrum. Fast doorstep delivery." />
        <link rel="icon" href="/images/garlic-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

