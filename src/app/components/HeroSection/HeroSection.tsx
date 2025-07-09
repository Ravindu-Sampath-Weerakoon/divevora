'use client';
import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        {/* Left Column for Heading */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heroHeading}>
            Discover The <span className={styles.highlightText}>Underwater</span> <span className={styles.highlightText}>World</span>
          </h1>
        </div>

        {/* Right Column for Paragraph and Buttons */}
        <div className={styles.rightColumn}>
          <p className={styles.heroParagraph}>
            Experience the magic beneath the waves - where silence meets beauty, and every dive tells a new story.
          </p>
          <div className={styles.heroButtons}>
            <a href="#explore" className={styles.primaryBtn}>Explore More</a>
            <a href="#book" className={styles.secondaryBtn}>Book Your Dive</a>
          </div>
        </div>
      </div>
    </section>
  );
}