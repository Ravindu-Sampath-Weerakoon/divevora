'use client';

import React from 'react';
import styles from './efr.module.css';
import Link from 'next/link';
import { 
  FaBookMedical, 
  FaHeartbeat, 
  FaHandsHelping, 
  FaUserInjured, 
  FaUserFriends, 
  FaClock, 
  FaMedkit, 
  FaCertificate, 
  FaHiking,
  FaArrowRight,
  FaUserCheck
} from 'react-icons/fa';

export default function EFRPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Emergency First Response</h1>
          <p className={styles.heroSubtitle}>Learn Life-Saving Skills</p>
          <div className={styles.heroBadge}>CPR & First Aid</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Emergency First Response (EFR)</strong> course is a comprehensive CPR and first aid training program. 
            It equips you with essential skills to respond to medical emergencies effectively, providing care during the critical moments until professional medical services arrive. 
            The course focuses on both <strong>Primary Care (CPR)</strong> and <strong>Secondary Care (First Aid)</strong>, ensuring you are prepared to handle a wide range of emergency situations.
          </p>
        </div>
      </section>

      {/* 3. What to Expect (Animated Cards) */}
      <section className={`${styles.section} ${styles.redSection}`}>
        <h2 className={styles.sectionTitleWhite}>What to Expect</h2>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaBookMedical />
            </div>
            <h3 className={styles.cardTitle}>Knowledge Development</h3>
            <p className={styles.cardText}>
              Study the theoretical aspects of CPR and first aid using the EFR manual and videos. Interactive lessons help you understand procedures for emergency situations.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#d90429', color: '#fff' }}>
              <FaHeartbeat />
            </div>
            <h3 className={styles.cardTitle}>Practical Training</h3>
            <p className={styles.cardText}>
              Hands-on sessions to practice CPR, use an AED, and perform first aid techniques like bandaging and splinting. Build confidence in a safe environment.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#2b2d42', color: '#fff' }}>
              <FaUserInjured />
            </div>
            <h3 className={styles.cardTitle}>Realistic Scenarios</h3>
            <p className={styles.cardText}>
              Engage in scenario-based training that simulates real-life emergencies. This practical approach ensures you are ready to respond effectively when it matters.
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
                <FaUserCheck className={styles.listIcon} />
                <span><strong>Age:</strong> No minimum age. Open to everyone.</span>
              </li>
              <li>
                <FaCertificate className={styles.listIcon} />
                <span><strong>Prerequisites:</strong> None. No prior experience needed.</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Capable of performing physical CPR tasks.</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> 4-6 hours (1 day).</span>
              </li>
              <li>
                <FaMedkit className={styles.listIcon} />
                <span><strong>Equipment:</strong> Manikins, AED units, and bandages provided.</span>
              </li>
              <li>
                <FaCertificate className={styles.listIcon} />
                <span><strong>Certification:</strong> Valid for 2 years. Required for Rescue Diver.</span>
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
            <FaUserFriends size={50} color="#00b4d8" />
            <h4>Divers</h4>
            <p>Fulfill requirements for the PADI Rescue Diver course.</p>
          </div>
          <div className={styles.targetCard}>
            <FaHiking size={50} color="#d90429" />
            <h4>Adventure Seekers</h4>
            <p>Be prepared for emergencies during outdoor activities.</p>
          </div>
          <div className={styles.targetCard}>
            <FaHandsHelping size={50} color="#2b2d42" />
            <h4>General Public</h4>
            <p>Parents, teachers, and anyone wanting life-saving skills.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>Next Steps</h2>
          <p className={styles.text}>
            After completing EFR, divers can proceed to the <strong>PADI Rescue Diver</strong> course. You can also become an <strong>EFR Instructor</strong> to teach these vital skills to others!
          </p>
          <div className={styles.stepBadge}>
            <span>Become a Rescue Diver</span>
            <FaArrowRight />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Become a Confident Responder</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Perfect for everyone, regardless of age or experience. Gain proficiency in handling emergencies.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}