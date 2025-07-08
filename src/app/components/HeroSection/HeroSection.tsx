'use client';
import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <p className={styles.heroParagraph}>
          Experience the magic beneath the waves - where silence meets beauty, and every dive tells a new story.
        </p>
        <h1 className={styles.heroHeading}>Discover the Underwater World</h1>
        <div className={styles.heroButtons}>
          <a href="#explore" className={styles.primaryBtn}>Explore More</a>
          <a href="#book" className={styles.secondaryBtn}>Book Your Dive</a>
        </div>
      </div>
    </section>
  );
}
