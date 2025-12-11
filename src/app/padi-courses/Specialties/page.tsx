'use client';

import React from 'react';
import styles from './specialties.module.css';
import Link from 'next/link';
import { 
  FaBalanceScale, 
  FaMoon, 
  FaArrowDown, 
  FaShip, 
  FaCheckCircle, 
  FaStar, 
  FaGlobeAmericas, 
  FaUserTie,
  FaBookOpen,
  FaSwimmer
} from 'react-icons/fa';

// Data for the 4 Specialty Courses
const SPECIALTIES = [
  {
    id: 'buoyancy',
    title: 'Peak Performance Buoyancy',
    slogan: 'ACHIEVE UNDERWATER BALANCE!',
    icon: <FaBalanceScale />,
    color: '#00b4d8', // Cyan/Blue
    description: 'Master the art of buoyancy control. Hover effortlessly and reduce your impact on the environment.',
    expect: 'Learn buoyancy principles and practice weight distribution and streamlining in 2 open water dives.',
    requirements: 'Age 10+ | PADI Open Water Diver (or equivalent).',
    who: 'All divers wanting to improve skills and reduce air consumption.'
  },
  {
    id: 'night',
    title: 'Night Diver',
    slogan: 'DIVE INTO THE DARK!',
    icon: <FaMoon />,
    color: '#0d1b2a', // Dark Navy
    description: 'Discover the underwater world at night. See nocturnal marine life and experience a different side of the ocean.',
    expect: 'Learn night safety and navigation techniques. Participate in 3 night dives practicing communication and observation.',
    requirements: 'Age 12+ | PADI Open Water Diver (or equivalent).',
    who: 'Adventure seekers looking to see the ocean come alive at night.'
  },
  {
    id: 'deep',
    title: 'Deep Diver',
    slogan: 'DIVE DEEPER NOW!',
    icon: <FaArrowDown />,
    color: '#005f73', // Deep Teal
    description: 'Expand your limits. Learn the skills needed to safely explore deeper sites up to 40 meters (130 feet).',
    expect: 'Study deep diving theory. Complete 4 deep dives practicing depth management and planning.',
    requirements: 'Age 15+ | PADI Adventure Diver (or equivalent).',
    who: 'Experienced divers wanting to explore walls, deep wrecks, and reefs.'
  },
  {
    id: 'wreck',
    title: 'Wreck Diver',
    slogan: 'DISCOVER SUNKEN TREASURES!',
    icon: <FaShip />,
    color: '#9e2a2b', // Rust Red
    description: 'Uncover the mysteries of sunken ships. Learn techniques to safely explore underwater wrecks and history.',
    expect: 'Learn mapping and penetration techniques. Complete 4 wreck dives practicing navigation and safety.',
    requirements: 'Age 15+ | PADI Adventure Diver (or equivalent).',
    who: 'History enthusiasts and divers fascinated by artificial reefs.'
  }
];

export default function SpecialtiesPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PADI Specialty Courses</h1>
          <p className={styles.heroSubtitle}>Unlock New Diving Experiences</p>
          <div className={styles.heroBadge}>Explore New Adventures</div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            Enhance your diving skills and explore new underwater adventures with PADI Specialty Courses. 
            Each specialty is designed to teach you specific skills and knowledge, allowing you to dive deeper into your areas of interest and become a more versatile diver.
          </p>
        </div>
      </section>

      {/* 3. The Specialty Courses (Vertical Cards) */}
      <section className={styles.courseSection}>
        {SPECIALTIES.map((course) => (
          <div key={course.id} className={styles.courseCard} style={{ borderTop: `6px solid ${course.color}` }}>
            
            {/* Header Area */}
            <div className={styles.cardHeader}>
              <div className={styles.iconBox} style={{ backgroundColor: course.color }}>
                {course.icon}
              </div>
              <div className={styles.headerText}>
                <span className={styles.slogan} style={{ color: course.color }}>{course.slogan}</span>
                <h3 className={styles.courseName}>{course.title}</h3>
                <p className={styles.courseDesc}>{course.description}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <FaBookOpen className={styles.detailIcon} style={{ color: course.color }} />
                <h4>What to Expect</h4>
                <p>{course.expect}</p>
              </div>
              <div className={styles.detailItem}>
                <FaCheckCircle className={styles.detailIcon} style={{ color: course.color }} />
                <h4>Requirements</h4>
                <p>{course.requirements}</p>
              </div>
              <div className={styles.detailItem}>
                <FaUserTie className={styles.detailIcon} style={{ color: course.color }} />
                <h4>Who It's For</h4>
                <p>{course.who}</p>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 4. Why Choose PADI Specialties */}
      <section className={`${styles.section} ${styles.graySection}`}>
        <h2 className={styles.sectionTitle}>Why Choose PADI Specialties?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <FaSwimmer size={40} color="#0077b6" />
            <h4>Enhanced Skills</h4>
            <p>Build on existing skills and learn new techniques.</p>
          </div>
          <div className={styles.benefitCard}>
            <FaStar size={40} color="#ffd700" />
            <h4>Personal Growth</h4>
            <p>Gain confidence and proficiency in different scenarios.</p>
          </div>
          <div className={styles.benefitCard}>
            <FaGlobeAmericas size={40} color="#0077b6" />
            <h4>New Adventures</h4>
            <p>Explore unique environments like wrecks and deep reefs.</p>
          </div>
          <div className={styles.benefitCard}>
            <FaUserTie size={40} color="#ffd700" />
            <h4>Professional Path</h4>
            <p>Essential steps toward Master Scuba Diver or Divemaster.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Dive Into New Adventures</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Enhance your skills. Master buoyancy, night diving, deep diving, and wreck diving.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}