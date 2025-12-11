'use client';

import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      
      {/* Optimized Background Image Layer */}
      <div className={styles.bgImageContainer}>
        <Image
          src="/main_image3.webp" // Ensure this image is in your /public folder
          alt="Scuba diver exploring the underwater world"
          fill // Spans the parent container
          priority // PRELOAD: Loads immediately for fast LCP
          quality={90} // High quality for hero area
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Main Content Layer */}
      <div className={styles.heroContent}>
        
        {/* Left Column for Heading */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heroHeading}>
            Discover The <span className={styles.highlightText}>Underwater</span> <span className={styles.highlightText}>World</span>
          </h1>
        </div>

        {/* Right Column for Paragraph and Buttons */}
        <div className={styles.rightColumn}>
          <p className={styles.heroParagraph}>
            Experience the magic beneath the waves - where silence meets beauty, and every dive tells a new story.
          </p>
          <div className={styles.heroButtons}>
            {/* Using standard anchors for on-page scroll sections */}
            <a href="#explore" className={styles.primaryBtn}>Explore More</a>
            <a href="#book" className={styles.secondaryBtn}>Book Your Dive</a>
          </div>
        </div>

      </div>
    </section>
  );
}