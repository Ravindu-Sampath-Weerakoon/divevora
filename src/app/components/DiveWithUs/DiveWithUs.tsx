'use client';

import React from 'react';
import styles from './DiveWithUs.module.css';
import { GraduationCap, Cog, Award, HeartHandshake, ShipWheel } from 'lucide-react';

const features = [
  { icon: GraduationCap, title: 'Expert Guidance' },
  { icon: Cog, title: 'Top-Quality Gear' },
  { icon: Award, title: 'Certified Courses' },
  { icon: HeartHandshake, title: 'Trusted Experience' },
];

const DiveWithUs = () => {
  return (
    <div className={styles.diveWithUsContainer}>
      <div className={styles.mainCard}>

        <div className={styles.mainCardBackgroundImage}>
          <img
            src="/image-from-rawpixel-id-5926894-jpeg.jpg"
            alt="Diver in the ocean background"
            className={styles.mainCardImage}
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1200x800/0077b6/ffffff?text=Image+Not+Found";
              e.currentTarget.onerror = null;
            }}
          />
        </div>

        <div className={styles.mainCardContentOverlay}>
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>
              <ShipWheel className={styles.headerIcon} size={32} /> Why Dive With Us?
            </h2>
          </div>

          <div className={styles.mainContentLayout}>

            <div className={styles.leftTextColumn}>
            <h1 className={styles.mainHeading}>
                    <span className={styles.highlight}>Safe</span>, Fun & Unforgettable Dives For Everyone
            </h1>
              <p className={styles.mainParagraph}>
                Dive into the beauty of the underwater world with a passionate team dedicated to creating memorable, safe, and fun experiences.
              </p>
            </div>

            <div className={styles.rightFeaturesColumn}>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureCard}>
                    <feature.icon className={styles.featureIcon} size={32} />
                    <span className={styles.featureTitle}>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DiveWithUs;
