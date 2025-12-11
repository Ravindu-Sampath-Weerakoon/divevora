'use client';

import React from 'react';
import styles from './pricing.module.css';
import Link from 'next/link';
import { 
  FaTags, 
  FaShip, 
  FaCertificate, 
  FaPlusCircle, 
  FaCheck
} from 'react-icons/fa';

export default function PricingPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Diving Price List</h1>
          <p className={styles.heroSubtitle}>Affordable Adventures in Sri Lanka</p>
          <div className={styles.heroBadge}>Best Value Guaranteed</div>
        </div>
      </section>

      {/* 2. Intro / Location Info */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Hikkaduwa Pricing</h2>
          <p className={styles.text}>
            Discover our diving rates for Hikkaduwa. Whether you’re looking for single dives, 
            dive packages, or PADI courses, our affordable rates ensure you get the best value.
            <br />
          
          </p>
        </div>
      </section>

      {/* 3. Pricing Cards Container */}
      <section className={styles.pricingSection}>
        
        {/* --- BOAT DIVES CARD --- */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle} style={{background: '#0077b6'}}>
              <FaShip />
            </div>
            <h3>Boat Dives</h3>
            <p>For Certified Divers</p>
          </div>
          
          <div className={styles.cardBody}>
            <ul className={styles.priceList}>
              <li>
                <span>Two Dives</span>
                <span className={styles.price}>$35 <small>each</small></span>
              </li>
              <li>
                <span>5 Dive Package</span>
                <span className={styles.price}>$165</span>
              </li>
              <li>
                <span>10 Dive Package</span>
                <span className={styles.price}>$330</span>
              </li>
            </ul>
            
            {/* Discount Banner */}
            <div className={styles.discountBox}>
              <FaTags className={styles.discountIcon} />
              <p>Bring your own equipment and enjoy a <strong>10% discount</strong> on your dives!</p>
            </div>
          </div>
        </div>

        {/* --- COURSES CARD --- */}
        <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle} style={{background: '#e9c46a'}}>
              <FaCertificate />
            </div>
            <h3>PADI Courses</h3>
            <p>Start or Continue Your Journey</p>
          </div>
          
          <div className={styles.cardBody}>
            <ul className={styles.priceList}>
              <li>
                <span>Discover Scuba Diving (2-3 hrs)</span>
                <span className={styles.price}>$75</span>
              </li>
              <li className={styles.subItem}>
                <span>Additional DSD Dive (Same/Next Day)</span>
                <span className={styles.price}>$50</span>
              </li>
              <li>
                <span>PADI Scuba Review</span>
                <span className={styles.price}>$40</span>
              </li>
              <li>
                <span>PADI Scuba Diver</span>
                <span className={styles.price}>$250</span>
              </li>
              <li>
                <span>PADI Open Water</span>
                <span className={styles.price}>$375</span>
              </li>
              <li>
                <span>PADI Open Water (eLearning)</span>
                <span className={styles.price}>$290</span>
              </li>
              <li>
                <span>PADI Open Water Referral</span>
                <span className={styles.price}>$220</span>
              </li>
              <li>
                <span>PADI Advanced Open Water</span>
                <span className={styles.price}>$320</span>
              </li>
              <li>
                <span>PADI Rescue Diver</span>
                <span className={styles.price}>$415</span>
              </li>
              <li>
                <span>Emergency First Response</span>
                <span className={styles.price}>$165</span>
              </li>
              <li>
                <span>PADI Divemaster</span>
                <span className={styles.price}>On Request</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- EXTRAS & SNORKELING CARD --- */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle} style={{background: '#2a9d8f'}}>
              <FaPlusCircle />
            </div>
            <h3>Extras & Snorkeling</h3>
            <p>Rentals and Fun Activities</p>
          </div>
          
          <div className={styles.cardBody}>
            <ul className={styles.priceList}>
              <li>
                <span>Dive Computer Rental</span>
                <span className={styles.price}>$7</span>
              </li>
              <li>
                <span>Logbook</span>
                <span className={styles.price}>$7</span>
              </li>
              <li>
                <span>Snorkeling (Equip Only)</span>
                <span className={styles.price}>$5</span>
              </li>
              <li>
                <span>Snorkeling (Equip + Guide)</span>
                <span className={styles.price}>$15</span>
              </li>
            </ul>
            
            <div className={styles.infoBox}>
              <FaCheck className={styles.checkIcon} />
              <p>Snorkeling starts right from the beach! Easy access to vibrant coral reefs. No boat needed.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 4. CTA Section (Full Width Rounded Top) */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Start Your Diving Journey</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          Experience the best of Sri Lanka’s underwater world with our affordable rates.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}