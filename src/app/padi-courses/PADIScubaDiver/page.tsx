'use client';

import React from 'react';
import styles from './scubaDiver.module.css';
import Link from 'next/link';
import { 
  FaBookOpen, 
  FaSwimmingPool, 
  FaWater, 
  FaBirthdayCake, 
  FaHeartbeat, 
  FaClock, 
  FaMask, 
  FaUserGraduate,
  FaPlaneDeparture,
  FaArrowRight,
  FaSearchLocation
} from 'react-icons/fa';

export default function PadiScubaDiverPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PADI Scuba Diver</h1>
          <p className={styles.heroSubtitle}>Start Your Diving Journey</p>
          <div className={styles.heroBadge}>Max Depth 12m</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Scuba Diver</strong> course is a subset of the PADI Open Water Diver course and is perfect for those who want to dive but are short on time. 
            This certification allows you to dive under the supervision of a PADI professional to a maximum depth of <strong>12 meters (40 feet)</strong>. 
            It’s an ideal choice if you plan to dive mainly with dive guides or are limited by time on your holiday.
          </p>
        </div>
      </section>

      {/* 3. What to Expect (Animated Cards) */}
      <section className={`${styles.section} ${styles.blueSection}`}>
        <h2 className={styles.sectionTitleWhite}>What to Expect</h2>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaBookOpen />
            </div>
            <h3 className={styles.cardTitle}>Knowledge Development</h3>
            <p className={styles.cardText}>
              Learn the basics of scuba diving theory. You can complete this at your own pace online via PADI eLearning® or offline with traditional materials.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#ffd700', color: '#000' }}>
              <FaSwimmingPool />
            </div>
            <h3 className={styles.cardTitle}>Confined Water Dives</h3>
            <p className={styles.cardText}>
              Practice essential skills in a controlled pool-like environment. Learn gear setup, buoyancy control, and mask clearing.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#005f8f', color: '#fff' }}>
              <FaWater />
            </div>
            <h3 className={styles.cardTitle}>Open Water Dives</h3>
            <p className={styles.cardText}>
              Experience two open water dives under the supervision of a PADI Instructor, applying your new skills in real-world conditions.
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
                <span><strong>Age:</strong> Must be at least 10 years old.</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Must be medically fit. A medical questionnaire is required.</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> 2-3 days (flexible schedule).</span>
              </li>
              <li>
                <FaMask className={styles.listIcon} />
                <span><strong>Equipment:</strong> All basic scuba gear is provided.</span>
              </li>
              <li>
                <FaUserGraduate className={styles.listIcon} />
                <span><strong>Supervision:</strong> Must dive with a PADI Pro after certification.</span>
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
            <FaSearchLocation size={50} color="#00b4d8" />
            <h4>Beginners</h4>
            <p>New to diving and want a quick, supervised certification.</p>
          </div>
          <div className={styles.targetCard}>
            <FaPlaneDeparture size={50} color="#ffd700" />
            <h4>Vacation Divers</h4>
            <p>Tourists who want an underwater adventure but have limited time.</p>
          </div>
          <div className={styles.targetCard}>
            <FaUserGraduate size={50} color="#00b4d8" />
            <h4>Future Divers</h4>
            <p>Those wanting an introductory step before the full Open Water course.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>Next Steps</h2>
          <p className={styles.text}>
            After becoming a certified PADI Scuba Diver, you can easily upgrade to the full <strong>PADI Open Water Diver</strong> certification at any time by completing the remaining modules. This unlocks more independence and greater depths!
          </p>
          <div className={styles.stepBadge}>
            <span>Upgrade to Open Water</span>
            <FaArrowRight />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Explore The Underwater World</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Perfect for beginners and vacation divers. Gain skills and dive today!
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}