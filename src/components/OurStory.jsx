import Image from 'next/image';
import styles from './OurStory.module.css';

export default function OurStory() {
  return (
    <section id="about" className={styles.storySection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.storyGrid}>
          {/* Left Column: Writing Section */}
          <div className={styles.storyLeft}>
            {/* Eyebrow with green underline */}
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrow}>A Little Garlic, A Lot of Goodness.</span>
              <span className={styles.eyebrowLine} />
            </div>
            
            {/* Main Heading: Welcome to Petals */}
            <div className={styles.headingBlock}>
              <h2 className={styles.welcomeText}>Welcome to</h2>
              <div className={styles.petalsRow}>
                <span className={styles.petalsScript}>Petals</span>
                {/* Golden swoosh under Petals */}
                <svg className={styles.petalsGoldSwoosh} viewBox="0 0 170 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C40 3 125 3 168 12C128 7 50 7 2 12Z" fill="#c9933b" />
                  <path d="M12 10C48 4 115 4 158 10C122 6 56 6 12 10Z" fill="#e0b153" />
                </svg>
              </div>
            </div>

            {/* Body Text in Poppins Regular 400 */}
            <p className={styles.paragraph}>
              We believe everyday cooking should be simple and enjoyable. Petals Peeled Garlic brings convenience to your kitchen, making it easier to add the wonderful taste of garlic to your everyday meals.
            </p>

            <p className={styles.paragraph}>
              Our brand is built around a simple idea: making garlic preparation easier while bringing a little more convenience to every kitchen.
            </p>

            {/* Garlic Bulb Ornament with Flanking Gold Lines */}
            <div className={styles.ornamentRow}>
              <span className={styles.ornamentLine} />
              <div className={styles.garlicIconWrapper}>
                <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left green leaf */}
                  <path d="M14 24C10 20 5 21 2 24C5 28 10 27 14 24Z" fill="#1b6347" />
                  {/* Right green leaf */}
                  <path d="M32 24C36 20 41 21 44 24C41 28 36 27 32 24Z" fill="#1b6347" />
                  {/* Garlic bulb in gold/cream */}
                  <path d="M23 4C20.5 8 14 13 14 20C14 26 18 28.5 23 28.5C28 28.5 32 26 32 20C32 13 25.5 8 23 4Z" fill="#faf4e8" stroke="#c9933b" strokeWidth="1.6" />
                  <path d="M19 11C17 15 16 19 17 24" stroke="#c9933b" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M27 11C29 15 30 19 29 24" stroke="#c9933b" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M23 5.5v21" stroke="#c9933b" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className={styles.ornamentLine} />
            </div>
          </div>

          {/* Right Column: Seamless Integrated Image Section (No text remnants, 100% clean) */}
          <div className={styles.storyRight}>
            <Image 
              src="/images/about-garlic-seamless.png" 
              alt="Fresh Petals Garlic on wooden board" 
              width={574} 
              height={485} 
              className={styles.seamlessPlatterImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
