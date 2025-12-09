import React from 'react';
import styles from './about-us.module.css';
import Image from 'next/image';

// Placeholder import - Replace with your actual image paths later
// import aboutImage from '../../public/about-image.jpg'; 

export default function AboutUs() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Divevora</h1>
          <p className={styles.heroSubtitle}>Your Gateway to the Underwater World</p>
        </div>
      </section>

      {/* 2. Welcome & Intro Section */}
      <section className={styles.section}>
        <div className={styles.flexContainer}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>Welcome to Divevora</h2>
            <p className={styles.text}>
              At Divevora, we are more than just a dive center; we are a family of passionate diving enthusiasts dedicated to sharing our love for the underwater world. 
              Nestled in the tropical paradise of <strong>Mirissa, Sri Lanka</strong>, we offer unforgettable diving experiences that combine adventure, safety, and education.
            </p>
            <p className={styles.text}>
              Whether you are taking your first breath underwater or you are an experienced diver looking to explore new depths, our team is here to guide you every step of the way.
            </p>
          </div>
          <div className={styles.imageColumn}>
             {/* Replace this div with <Image /> when you have a photo */}
            <div className={styles.imagePlaceholder}>
              [Insert Team/Diving Image Here]
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Darker Background) */}
      <section className={`${styles.section} ${styles.sectionAlternate}`}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', display: 'block' }}>Why Choose Us?</h2>
        
        <div className={styles.featuresGrid}>
          {/* Feature 1 */}
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Experience & Expertise</h3>
            <p className={styles.text}>
              Our instructors are PADI certified professionals with years of experience. We bring unmatched expertise to every dive, ensuring you learn from the best.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Safety First</h3>
            <p className={styles.text}>
              Safety is our top priority. We adhere to the highest international safety standards and meticulously maintain our state-of-the-art equipment.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Personalized Attention</h3>
            <p className={styles.text}>
              We keep our groups small to provide personalized attention, ensuring every diver feels comfortable, confident, and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Story / Location */}
      <section className={styles.section}>
        <div className={styles.flexContainer} style={{ flexDirection: 'row-reverse' }}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>Our Location</h2>
            <p className={styles.text}>
              Located on Sri Lanka's stunning southern coast, our <strong>Mirissa Dive Center</strong> is your perfect starting point.
            </p>
            <p className={styles.text}>
              Dive into a world of vibrant coral gardens, encounter majestic sea turtles, and explore the crystal-clear waters that make Sri Lanka a world-class diving destination.
            </p>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imagePlaceholder}>
              [Insert Location/Map Image Here]
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Ready to Dive In?</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem' }}>
          Join us for an adventure of a lifetime. Book your dive today!
        </p>
        <a href="/contact" className={styles.ctaButton}>Contact Us Now</a>
      </section>

    </div>
  );
}