'use client';

import React from 'react';
import styles from './snorkeling.module.css';
import Link from 'next/link';
import { 
  FaSwimmer, 
  FaUmbrellaBeach, 
  FaFish, 
  FaWater, 
  FaLeaf, 
  FaMapMarkerAlt, 
  FaChild, 
  FaPlaneDeparture, 
  FaSearchLocation,
  FaArrowRight
} from 'react-icons/fa';

export default function SnorkelingPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Snorkeling</h1>
          <p className={styles.heroSubtitle}>Jump In – Book Snorkeling!</p>
          <div className={styles.heroBadge}>Explore Sri Lanka</div>
        </div>
      </section>

      {/* 2. Intro Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Explore the Underwater Beauty</h2>
          <p className={styles.text}>
            Snorkeling in Sri Lanka is an unforgettable experience that lets you explore the island’s colorful coral reefs and fascinating marine life, 
            without the need for complex equipment or training. Just grab a mask, snorkel, and fins, and enjoy the magic beneath the waves.
          </p>
        </div>
      </section>

      {/* 3. Destination: Hikkaduwa (Centered Single Layout) */}
      <section className={`${styles.section} ${styles.tealSection}`}>
        <h2 className={styles.sectionTitleWhite}>Snorkeling in Hikkaduwa</h2>
        
        {/* Changed from splitGrid to singleDestinationWrapper */}
        <div className={styles.singleDestinationWrapper}>
          
          {/* Hikkaduwa Box */}
          <div className={styles.destBox}>
            <div className={styles.iconHeader}>
              <FaUmbrellaBeach size={40} color="#0096c7" />
              <h3>What to Expect</h3>
            </div>
            <p className={styles.destIntro}>
              Hikkaduwa, located on Sri Lanka’s southwest coast, is renowned for its clear waters and rich marine biodiversity. 
              The best time to snorkel here is from <strong>October to May</strong> when the seas are calm and visibility is at its best.
            </p>
            <ul className={styles.list}>
              <li>
                <FaLeaf className={styles.listIcon} />
                <span><strong>Coral Gardens:</strong> Hikkaduwa Marine National Park is home to over 70 varieties of multi-colored corals, making it a snorkeler’s paradise.</span>
              </li>
              <li>
                <FaFish className={styles.listIcon} />
                <span><strong>Marine Life:</strong> Expect to see a vibrant underwater world filled with tropical fish, sea turtles, parrotfish, and moray eels.</span>
              </li>
              <li>
                <FaWater className={styles.listIcon} />
                <span><strong>Easy Access:</strong> The coral reefs are located just a few meters from the shoreline, making it easy to start your adventure directly from the beach.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Who Is It For? */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who Is It For?</h2>
        <div className={styles.targetGrid}>
          
          <div className={styles.targetCard}>
            <FaChild size={50} color="#00b4d8" />
            <h4>Families & Beginners</h4>
            <p>Explore the underwater world together without needing extensive training. Great for all ages.</p>
          </div>

          <div className={styles.targetCard}>
            <FaPlaneDeparture size={50} color="#ff7f50" />
            <h4>Vacationers</h4>
            <p>On holiday? Add an unforgettable, easy, and accessible underwater adventure to your itinerary.</p>
          </div>

          <div className={styles.targetCard}>
            <FaSearchLocation size={50} color="#00b4d8" />
            <h4>Adventure Seekers</h4>
            <p>Experience the thrill of discovering Sri Lanka's stunning coral reefs and biodiversity.</p>
          </div>

        </div>
      </section>

      {/* 5. CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Jump In Today!</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Our snorkeling program is perfect for families, beginners, and adventure seekers.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}