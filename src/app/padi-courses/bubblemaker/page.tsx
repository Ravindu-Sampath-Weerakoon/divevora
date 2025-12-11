'use client';

import React from 'react';
import styles from './bubblemaker.module.css';
import Link from 'next/link';
import { 
  FaChild, 
  FaWater, 
  FaMask, 
  FaLifeRing, 
  FaBirthdayCake, 
  FaUserFriends, 
  FaHeartbeat, 
  FaClock, 
  FaCertificate,
  FaArrowRight,
  FaSmileBeam,
  FaFish
} from 'react-icons/fa';

export default function BubblemakerPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Become a Bubblemaker</h1>
          <p className={styles.heroSubtitle}>Make Bubbles, Make Memories</p>
          <div className={styles.heroBadge}>Ages 8+</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Bubblemaker</strong> course is an exciting introduction to the world of scuba diving, designed specifically for children aged 8 and above. 
            This program provides young adventurers with the chance to experience scuba diving in a safe and controlled environment under the direct supervision of a PADI professional. 
            It’s perfect for curious kids who want to start their scuba diving journey and explore the underwater world!
          </p>
        </div>
      </section>

      {/* 3. What to Expect (Animated Cards) */}
      <section className={`${styles.section} ${styles.blueSection}`}>
        <h2 className={styles.sectionTitleWhite}>What to Expect</h2>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaMask />
            </div>
            <h3 className={styles.cardTitle}>Cool Gear</h3>
            <p className={styles.cardText}>
              Children will learn how to handle scuba equipment made just for them, including masks, fins, tanks, and BCDs.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#ffd700', color: '#000' }}>
              <FaWater />
            </div>
            <h3 className={styles.cardTitle}>First Breath</h3>
            <p className={styles.cardText}>
              The exhilarating experience of breathing underwater in a shallow area (max 2 meters deep).
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaSmileBeam />
            </div>
            <h3 className={styles.cardTitle}>Fun Games</h3>
            <p className={styles.cardText}>
              Fun activities like underwater frisbee or torpedo toss help kids get comfortable with the gear.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#ff4d4d', color: '#fff' }}>
              <FaLifeRing />
            </div>
            <h3 className={styles.cardTitle}>Safety First</h3>
            <p className={styles.cardText}>
              Direct supervision by a PADI instructor ensures all safety protocols are followed for a safe experience.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Requirements & Considerations */}
      <section className={styles.section}>
        <div className={styles.splitGrid}>
          
          {/* Left: Requirements */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Requirements</h3>
            <ul className={styles.list}>
              <li>
                <FaBirthdayCake className={styles.listIcon} />
                <span><strong>Age:</strong> Must be at least 8 years old.</span>
              </li>
              <li>
                <FaUserFriends className={styles.listIcon} />
                <span><strong>Parental Approval:</strong> A guardian must be present.</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Must be in good physical health.</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> About 90 minutes total experience.</span>
              </li>
              <li>
                <FaMask className={styles.listIcon} />
                <span><strong>Equipment:</strong> All kid-sized gear provided.</span>
              </li>
              <li>
                <FaCertificate className={styles.listIcon} />
                <span><strong>Certification:</strong> Includes a certificate of completion!</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Who It's For */}
      <section className={`${styles.section} ${styles.graySection}`}>
        <h2 className={styles.sectionTitle}>Who Is It For?</h2>
        <div className={styles.targetGrid}>
          <div className={styles.targetCard}>
            <FaChild size={50} color="#00b4d8" />
            <h4>Young Adventurers</h4>
            <p>Kids eager to explore the underwater world.</p>
          </div>
          <div className={styles.targetCard}>
            <FaUserFriends size={50} color="#ffd700" />
            <h4>Families</h4>
            <p>Parents introducing kids to diving safely.</p>
          </div>
          <div className={styles.targetCard}>
            <FaFish size={50} color="#00b4d8" />
            <h4>Future Divers</h4>
            <p>Kids considering the Jr. Open Water course.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps (UPDATED LINK) */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>What's Next?</h2>
          <p className={styles.text}>
            After completing Bubblemaker, young divers can continue their adventure with the <strong>PADI Seal Team</strong> or the <strong>PADI Junior Open Water Diver</strong> course.
          </p>
          
          <Link href="/padi-courses/PADIScubaDiver" className={styles.stepBadge}>
            <span>Continue the Adventure</span>
            <FaArrowRight />
          </Link>
          
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Ready to Start?</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Perfect for kids aged 8+. Reserve your spot today!
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}