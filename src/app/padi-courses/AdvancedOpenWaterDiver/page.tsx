'use client';

import React from 'react';
import styles from './advancedDiver.module.css';
import Link from 'next/link';
import { 
  FaBookReader, 
  FaCompass, 
  FaWater, 
  FaShip, 
  FaBirthdayCake, 
  FaIdCard, 
  FaHeartbeat, 
  FaClock, 
  FaMask, 
  FaCertificate,
  FaUserAstronaut, 
  FaPlane, 
  FaArrowRight,
  FaMoon
} from 'react-icons/fa';

export default function AdvancedOpenWaterPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PADI Advanced Open Water</h1>
          <p className={styles.heroSubtitle}>Dive Deeper, Explore Further</p>
          <div className={styles.heroBadge}>Max Depth 30m</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Advanced Open Water Diver</strong> course is designed to enhance your diving skills and knowledge beyond the basic Open Water level. 
            This course helps you become a more confident and capable diver through a series of <strong>Adventure Dives</strong> that introduce you to new underwater activities and deeper environments.
          </p>
        </div>
      </section>

      {/* 3. What to Expect (Animated Cards) */}
      <section className={`${styles.section} ${styles.blueSection}`}>
        <h2 className={styles.sectionTitleWhite}>What to Expect</h2>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaBookReader />
            </div>
            <h3 className={styles.cardTitle}>Knowledge Development</h3>
            <p className={styles.cardText}>
              Study the theory behind specific adventure dives (like Navigation and Deep diving). Flexible self-paced study online or offline with minimal classroom time.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#ffd700', color: '#000' }}>
              <FaCompass />
            </div>
            <h3 className={styles.cardTitle}>Mandatory Dives</h3>
            <p className={styles.cardText}>
              You must complete two core dives: <strong>Deep Dive</strong> (exploring below 18m/60ft) and <strong>Underwater Navigation</strong> (mastering compass use).
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#4b0082', color: '#fff' }}>
              <FaShip />
            </div>
            <h3 className={styles.cardTitle}>Elective Dives</h3>
            <p className={styles.cardText}>
              Choose 3 more adventure dives! Options include <strong>Wreck Diving</strong>, <strong>Night Diving</strong>, Peak Performance Buoyancy, Fish ID, and more.
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
                <span><strong>Age:</strong> Must be at least 12 years old.</span>
              </li>
              <li>
                <FaIdCard className={styles.listIcon} />
                <span><strong>Prerequisite:</strong> PADI Open Water Diver certification (or equivalent).</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Good physical health. Medical questionnaire required.</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> Typically 2-3 days (5 dives total).</span>
              </li>
              <li>
                <FaMask className={styles.listIcon} />
                <span><strong>Equipment:</strong> All basic gear + specialty gear (e.g., compass, dive light) provided.</span>
              </li>
              <li>
                <FaCertificate className={styles.listIcon} />
                <span><strong>Certification:</strong> Qualifies you to dive up to 30 meters (100 feet).</span>
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
            <FaUserAstronaut size={50} color="#00b4d8" />
            <h4>Certified Divers</h4>
            <p>Open Water divers ready to advance their skills & confidence.</p>
          </div>
          <div className={styles.targetCard}>
            <FaMoon size={50} color="#4b0082" />
            <h4>Adventure Seekers</h4>
            <p>Those wanting to explore wrecks, night dives, and deeper reefs.</p>
          </div>
          <div className={styles.targetCard}>
            <FaPlane size={50} color="#00b4d8" />
            <h4>Travelers</h4>
            <p>Divers wanting access to deeper dive sites worldwide.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>Next Steps</h2>
          <p className={styles.text}>
            After earning your Advanced Open Water certification, you are ready for the <strong>PADI Rescue Diver</strong> course or specialized courses like <strong>Deep Diver</strong> and <strong>Wreck Diver</strong> to truly master the ocean.
          </p>
          
            <Link href="/padi-courses/RescueDiver" className={styles.stepBadge}>
            <span>Become a Rescue Diver</span>
            <FaArrowRight />
            </Link>
       
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Take Your Diving to the Next Level</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Perfect for certified divers aged 12+. Explore deeper today.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}