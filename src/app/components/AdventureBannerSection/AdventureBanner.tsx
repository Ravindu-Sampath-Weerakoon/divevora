import React from 'react';
import Image from 'next/image';
import styles from './AdventureBanner.module.css';
import DiverImage from './9531706Asset 1@0.2x.png';  // ✅ Make sure path is correct
import Link from "next/link"; // Import Link

const AdventureBanner: React.FC = () => {
  return (
    <section className={styles.bannerWrapper} id='book-now'>
      <div className={styles.bannerContent}>

     
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            Join Us to <span className={styles.highlight}>Dive</span>, Discover, and Enjoy!
          </h2>
          <p className={styles.subheading}>
            Explore the ocean&apos;s beauty, meet amazing marine life, and make every dive an adventure to remember — all while having fun with us!
          </p>
          <Link href="/contact" className={styles.ctaButton}>
          BOOK NOW
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={DiverImage}
            alt="Scuba Diver"
            className={styles.diverImage}
            priority
          />
        </div>
      </div>
       </div>
    </section>
  );
};

export default AdventureBanner;
