'use client';

import React, { useState } from 'react';
import styles from './scuba-diving.module.css';
import { FaUserAstronaut, FaCertificate, FaCheckCircle, FaWater } from 'react-icons/fa';

export default function ScubaDivingPage() {
  const [activeTab, setActiveTab] = useState<'beginners' | 'certified'>('beginners');

  return (
    <div className={styles.container}>
      
      {/* --- Hero Section --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Scuba Diving</h1>
          <p className={styles.heroSubtitle}>Explore the Unseen World</p>
        </div>

        {/* NEW: Guide Text */}
        <p className={styles.guideText}>Select your experience level below:</p>

        {/* Tab Navigation Buttons */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'beginners' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('beginners')}
          >
            <FaUserAstronaut style={{ marginRight: '8px' }} /> Beginners (Discover)
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === 'certified' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('certified')}
          >
            <FaCertificate style={{ marginRight: '8px' }} /> Certified Divers
          </button>
        </div>
      </section>

      {/* --- Tab Content Area --- */}
      <div className={styles.contentSection}>
        
        {/* TAB 1: BEGINNERS */}
        {activeTab === 'beginners' && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Discover Scuba Diving</h2>
            <p className={styles.text}>
              Never dived before? No problem! Our <strong>Discover Scuba Diving (DSD)</strong> program is designed specifically for beginners. 
              No prior experience or swimming skills are required. Our PADI certified instructors will guide you hand-in-hand to ensure your safety and fun.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <FaCheckCircle size={40} color="#00b4d8" style={{ marginBottom: '20px' }} />
                <h3 className={styles.cardTitle}>No Experience Needed</h3>
                <p className={styles.cardText}>
                  We start with a comprehensive briefing and shallow water training to make you comfortable.
                </p>
              </div>

              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaWater size={40} color="#ffd700" style={{ marginBottom: '20px' }} />
                <h3 className={styles.cardTitle}>What's Included?</h3>
                <p className={styles.cardText}>
                  Full Equipment Rental, Personal Instructor, Boat Trip, and Photos/Videos of your dive.
                </p>
              </div>

              <div className={styles.card}>
                <FaUserAstronaut size={40} color="#00b4d8" style={{ marginBottom: '20px' }} />
                <h3 className={styles.cardTitle}>Safe & Fun</h3>
                <p className={styles.cardText}>
                  Dive to a max depth of 12 meters under direct supervision. See turtles and colorful reefs!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CERTIFIED DIVERS */}
        {activeTab === 'certified' && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Fun Dives for Certified Divers</h2>
            <p className={styles.text}>
              Already certified? Join us for exciting <strong>Fun Dives</strong> at the best dive sites in Mirissa. 
              From shipwrecks to deep reef walls, we have adventures for Open Water, Advanced, and Rescue divers.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <FaWater size={40} color="#00b4d8" style={{ marginBottom: '20px' }} />
                <h3 className={styles.cardTitle}>Explore Dive Sites</h3>
                <p className={styles.cardText}>
                  Visit famous spots like Diyamba Gala, Reef Walls, and local shipwrecks teeming with marine life.
                </p>
              </div>

              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaCertificate size={40} color="#ffd700" style={{ marginBottom: '20px' }} />
                <h3 className={styles.cardTitle}>Small Groups</h3>
                <p className={styles.cardText}>
                  We keep groups small based on certification level to ensure longer bottom times and safety.
                </p>
              </div>

              <div className={styles.card}>
                <FaUserAstronaut size={40} color="#00b4d8" style={{ marginBottom: '20px' }} />
                <h3 className={styles.cardTitle}>Full Service</h3>
                <p className={styles.cardText}>
                  Our team handles all equipment setup and logistics. Just jump in and enjoy the dive!
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}