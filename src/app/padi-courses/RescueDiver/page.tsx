'use client';

import React from 'react';
import styles from './rescueDiver.module.css';
import Link from 'next/link';
import { 
  FaBookMedical, 
  FaLifeRing, 
  FaHandsHelping, 
  FaBirthdayCake, 
  FaFileContract, 
  FaHeartbeat, 
  FaClock, 
  FaMask, 
  FaCertificate, 
  FaUserShield,
  FaSearchLocation,
  FaUserTie,
  FaArrowRight
} from 'react-icons/fa';

export default function RescueDiverPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PADI Rescue Diver</h1>
          <p className={styles.heroSubtitle}>Master Emergency Skills</p>
          <div className={styles.heroBadge}>Challenging & Rewarding</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Rescue Diver</strong> course is designed to expand your diving skills by teaching you how to manage and prevent diving emergencies. 
            It is often described as the most challenging yet rewarding course, as it builds your confidence and ability to handle stressful situations both above and underwater. 
            This course is essential for divers who want to improve their safety skills and become better dive buddies.
          </p>
        </div>
      </section>

      {/* 3. What to Expect (Animated Cards) */}
      <section className={`${styles.section} ${styles.blueSection}`}>
        <h2 className={styles.sectionTitleWhite}>What to Expect</h2>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaBookMedical />
            </div>
            <h3 className={styles.cardTitle}>Knowledge Development</h3>
            <p className={styles.cardText}>
              Start with the manual and video theory to understand the fundamentals: emergency management, recognizing diver stress, and handling equipment problems. (8-12 hours).
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#d62828', color: '#fff' }}>
              <FaLifeRing />
            </div>
            <h3 className={styles.cardTitle}>Rescue Training Exercises</h3>
            <p className={styles.cardText}>
              Practice handling emergencies in open water. Exercises include self-rescue, assisting tired/panicked divers, and dealing with unresponsive divers.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#f77f00', color: '#fff' }}>
              <FaHandsHelping />
            </div>
            <h3 className={styles.cardTitle}>Rescue Scenarios</h3>
            <p className={styles.cardText}>
              Engage in realistic rescue scenarios simulating real-life situations. Apply your skills to locate, surface, and aid divers to become capable and confident.
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
                <span><strong>Age:</strong> 12+ Years (12-14 receive Jr. Rescue Diver).</span>
              </li>
              <li>
                <FaFileContract className={styles.listIcon} />
                <span><strong>Prerequisite:</strong> Adventure Diver (w/ Nav dive) & EFR Training (last 24 months).</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Medically fit. Questionnaire required.</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> 4-7 days (flexible eLearning/in-water).</span>
              </li>
              <li>
                <FaMask className={styles.listIcon} />
                <span><strong>Equipment:</strong> All basic gear provided. Bring swimwear/towel.</span>
              </li>
              <li>
                <FaCertificate className={styles.listIcon} />
                <span><strong>Certification:</strong> Prerequisite for PADI Divemaster.</span>
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
            <FaUserShield size={50} color="#00b4d8" />
            <h4>Certified Divers</h4>
            <p>Those who have completed Advanced Open Water and want to enhance safety skills.</p>
          </div>
          <div className={styles.targetCard}>
            <FaSearchLocation size={50} color="#d62828" />
            <h4>Adventure Seekers</h4>
            <p>Individuals looking to gain confidence and proficiency in emergency situations.</p>
          </div>
          <div className={styles.targetCard}>
            <FaUserTie size={50} color="#00b4d8" />
            <h4>Professional Aspirants</h4>
            <p>Divers aiming for professional levels like Divemaster or Instructor.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>Next Steps</h2>
          <p className={styles.text}>
            After earning your Rescue Diver certification, you are ready to enter the professional world of diving! Continue your education with the <strong>PADI Divemaster</strong> course or become an <strong>EFR Instructor</strong>.
          </p>
        
            <Link href="/padi-courses/EmergencyFirstResponse" className={styles.stepBadge}>
            <span>Go Professional</span>
            <FaArrowRight />
            </Link>
          
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Become a Rescue Diver</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Perfect for certified divers aged 12+. Learn to handle emergencies and become a better dive buddy.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}