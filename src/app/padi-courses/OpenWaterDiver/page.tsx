'use client';

import React from 'react';
import styles from './openWater.module.css';
import Link from 'next/link';
import { 
  FaBookOpen, 
  FaSwimmingPool, 
  FaWater, 
  FaBirthdayCake, 
  FaSwimmer, 
  FaHeartbeat, 
  FaClock, 
  FaMask, 
  FaIdCard, 
  FaUserAstronaut,
  FaCompass,
  FaPlaneDeparture,
  FaArrowRight
} from 'react-icons/fa';

export default function OpenWaterPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PADI Open Water Diver</h1>
          <p className={styles.heroSubtitle}>Dive Into Adventure</p>
          <div className={styles.heroBadge}>Max Depth 18m</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Open Water Diver</strong> course is the world’s most popular and widely recognized scuba certification. 
            It’s your ticket to a lifetime of intense adventure with PADI, the most respected scuba diving training organization. 
            This course equips you with the essential skills and knowledge to explore the underwater world confidently and safely.
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
              Understand the basics of scuba diving through the manual and video theory. Study at your own pace online (eLearning) or offline and complete quizzes.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#ffd700', color: '#000' }}>
              <FaSwimmingPool />
            </div>
            <h3 className={styles.cardTitle}>Confined Water Dives</h3>
            <p className={styles.cardText}>
              Practice essential skills in a pool or calm lagoon. Take your first breaths underwater and learn gear setup, buoyancy control, and mask clearing.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#005f8f', color: '#fff' }}>
              <FaWater />
            </div>
            <h3 className={styles.cardTitle}>Open Water Dives</h3>
            <p className={styles.cardText}>
              Experience four dives in the ocean under the supervision of a PADI Instructor. Apply your skills in real-world conditions and explore the underwater world.
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
                <FaSwimmer className={styles.listIcon} />
                <span><strong>Swimming:</strong> Swim 200m & tread water for 10 mins.</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Must be medically fit for diving.</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> 3-4 days (flexible schedule).</span>
              </li>
              <li>
                <FaMask className={styles.listIcon} />
                <span><strong>Equipment:</strong> All basic scuba gear is provided.</span>
              </li>
              <li>
                <FaIdCard className={styles.listIcon} />
                <span><strong>Certification:</strong> Dive to 18 meters (60 feet) with a buddy.</span>
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
            <h4>Beginners</h4>
            <p>New to scuba diving and want to earn their first full certification.</p>
          </div>
          <div className={styles.targetCard}>
            <FaCompass size={50} color="#ffd700" />
            <h4>Adventurers</h4>
            <p>Individuals looking to explore the underwater world & marine life.</p>
          </div>
          <div className={styles.targetCard}>
            <FaPlaneDeparture size={50} color="#00b4d8" />
            <h4>Vacation Divers</h4>
            <p>Tourists wishing to add an exciting underwater adventure to their trip.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>Next Steps</h2>
          <p className={styles.text}>
            After becoming a certified Open Water Diver, you can continue your education with the <strong>PADI Advanced Open Water Diver</strong>, Rescue Diver, or Specialty courses to unlock new adventures!
          </p>
          <div className={styles.stepBadge}>
            <span>Go Advanced</span>
            <FaArrowRight />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Start Your Underwater Journey</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          The gateway to adventure. Perfect for beginners aged 10+.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}