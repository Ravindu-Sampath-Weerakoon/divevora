'use client';

import React from 'react';
import styles from './divemaster.module.css';
import Link from 'next/link';
import { 
  FaLaptop, 
  FaUsers, 
  FaTools, 
  FaBirthdayCake, 
  FaFileContract, 
  FaHistory, 
  FaHeartbeat, 
  FaClock, 
  FaMask, 
  FaIdCard, 
  FaUserTie, 
  FaGraduationCap, 
  FaMapMarkedAlt, 
  FaArrowRight
} from 'react-icons/fa';

export default function DivemasterPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PADI Divemaster</h1>
          <p className={styles.heroSubtitle}>Become a Dive Leader</p>
          <div className={styles.heroBadge}>Professional Level</div>
        </div>
      </section>

      {/* 2. Course Description */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Course Description</h2>
          <p className={styles.text}>
            The <strong>PADI Divemaster</strong> course is your gateway to becoming a professional diver. 
            This comprehensive program is designed to develop your leadership abilities by training you to supervise diving activities and assist instructors with student divers. 
            It’s the first step toward a rewarding career in scuba diving.
          </p>
        </div>
      </section>

      {/* 3. What to Expect (Pro Themed Cards) */}
      <section className={`${styles.section} ${styles.proSection}`}>
        <h2 className={styles.sectionTitleWhite}>What to Expect</h2>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <FaLaptop />
            </div>
            <h3 className={styles.cardTitle}>Knowledge Development</h3>
            <p className={styles.cardText}>
              Cover topics like dive theory, leadership, and risk management via the Divemaster manual and videos. This phase typically takes around 50 hours.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#ffd700', color: '#000' }}>
              <FaUsers />
            </div>
            <h3 className={styles.cardTitle}>Practical Application</h3>
            <p className={styles.cardText}>
              Refine your skills by leading dive groups, assisting instructors, conducting briefings, mapping sites, and managing diver stress.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconCircle} style={{ background: '#333', color: '#fff' }}>
              <FaTools />
            </div>
            <h3 className={styles.cardTitle}>Skill Workshops</h3>
            <p className={styles.cardText}>
              Participate in hands-on workshops focusing on rescue skills, navigation, and dive management to prepare for real-world scenarios.
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
                <span><strong>Age:</strong> Must be at least 18 years old.</span>
              </li>
              <li>
                <FaFileContract className={styles.listIcon} />
                <span><strong>Prerequisites:</strong> Rescue Diver + EFR (Primary/Secondary Care within 24 months).</span>
              </li>
              <li>
                <FaHistory className={styles.listIcon} />
                <span><strong>Experience:</strong> 40 logged dives to start, 60 to certify.</span>
              </li>
              <li>
                <FaHeartbeat className={styles.listIcon} />
                <span><strong>Health:</strong> Medically fit (Signed physician statement required).</span>
              </li>
            </ul>
          </div>

          {/* Right: Considerations */}
          <div className={styles.infoBox}>
            <h3 className={styles.subTitle}>Considerations</h3>
            <ul className={styles.list}>
              <li>
                <FaClock className={styles.listIcon} />
                <span><strong>Duration:</strong> Several weeks (variable pace).</span>
              </li>
              <li>
                <FaMask className={styles.listIcon} />
                <span><strong>Equipment:</strong> Basic gear provided (Having your own pro gear is recommended).</span>
              </li>
              <li>
                <FaIdCard className={styles.listIcon} />
                <span><strong>Certification:</strong> Allows you to work as a dive pro and lead dives.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Who It's For */}
      <section className={`${styles.section} ${styles.goldSection}`}>
        <h2 className={styles.sectionTitle}>Who Is It For?</h2>
        <div className={styles.targetGrid}>
          <div className={styles.targetCard}>
            <FaUserTie size={50} color="#000" />
            <h4>Aspiring Pros</h4>
            <p>Those looking to start a serious career in the diving industry.</p>
          </div>
          <div className={styles.targetCard}>
            <FaGraduationCap size={50} color="#b8860b" />
            <h4>Advanced Divers</h4>
            <p>Individuals who want to master their skills and dive theory.</p>
          </div>
          <div className={styles.targetCard}>
            <FaMapMarkedAlt size={50} color="#000" />
            <h4>Adventure Seekers</h4>
            <p>Those who enjoy leading others and teaching about the ocean.</p>
          </div>
        </div>
      </section>

      {/* 6. Next Steps */}
      <section className={styles.section}>
        <div className={styles.nextStepsContainer}>
          <h2 className={styles.sectionTitle}>Next Steps</h2>
          <p className={styles.text}>
            After earning your Divemaster certification, you can continue your education with the <strong>PADI Instructor Development Course (IDC)</strong> or specialize in areas like marine conservation and equipment maintenance.
          </p>
          <div className={styles.stepBadge}>
            <Link href="/padi-courses/PADIScubaDiver" className={styles.stepBadge}>
            <span>Become an Instructor</span>
            <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Start Your Professional Career</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Develop your leadership skills and dive expertise. Join the pro ranks today.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}