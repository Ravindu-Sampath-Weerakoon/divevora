'use client';

import React, { useState, useEffect } from 'react';
import styles from './about-us.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaCertificate, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

// Images for the Welcome Slider
const WELCOME_SLIDES = [
  { id: 1, src: '/photos/unnamed (1).webp', alt: 'Divevora Family' },
  { id: 2, src: '/photos/unnamed (2).webp', alt: 'Scuba Diving Adventure' },
  { id: 3, src: '/photos/unnamed (3).webp', alt: 'Scuba Diving Adventure' },
  { id: 4, src: '/photos/unnamed (4).webp', alt: 'Scuba Diving Adventure' },
  { id: 5, src: '/photos/unnamed (5).webp', alt: 'Scuba Diving Adventure' },
  { id: 6, src: '/photos/unnamed (6).webp', alt: 'Scuba Diving Adventure' },
  { id: 7, src: '/photos/unnamed (7).webp', alt: 'Scuba Diving Adventure' },
  { id: 8, src: '/photos/unnamed.webp', alt: 'Scuba Diving Adventure' },
];

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic (Every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === WELCOME_SLIDES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

      {/* 2. Welcome & Intro Section (WITH THUMBNAIL SLIDER) */}
      <section className={styles.section}>
        <div className={styles.flexContainer}>
          
          {/* Text Column */}
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>Welcome to Divevora</h2>
            <p className={styles.text}>
              At Divevora, we are more than just a dive center; we are a family of passionate diving enthusiasts dedicated to sharing our love for the underwater world. 
              Nestled in the tropical paradise of <strong>Hikkaduwa, Sri Lanka</strong>, we offer unforgettable diving experiences that combine adventure, safety, and education.
            </p>
            <p className={styles.text}>
              Whether you are taking your first breath underwater or you are an experienced diver looking to explore new depths, our team is here to guide you every step of the way.
            </p>
          </div>

          {/* Image Slider Column */}
          <div className={styles.imageColumn}>
            <div className={styles.sliderWrapper}>
              
              {/* Main Large Slider */}
              <div className={styles.welcomeSliderContainer}>
                {WELCOME_SLIDES.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`${styles.welcomeSlide} ${index === currentSlide ? styles.activeSlide : ''}`}
                  >
                    <Image 
                      src={slide.src} 
                      alt={slide.alt} 
                      fill 
                      className={styles.slideImage}
                    />
                  </div>
                ))}
              </div>

              {/* Thumbnail Strip (The "Tape" of photos) */}
              <div className={styles.thumbnailStrip}>
                {WELCOME_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`${styles.thumbnailBtn} ${index === currentSlide ? styles.activeThumb : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`View slide ${index + 1}`}
                  >
                    <Image 
                      src={slide.src} 
                      alt={`Thumbnail ${index + 1}`} 
                      width={60} 
                      height={60} 
                      className={styles.thumbImage}
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className={`${styles.section} ${styles.sectionAlternate}`}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', display: 'block' }}>Why Choose Us?</h2>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <FaCertificate size={40} color="#00b4d8" style={{ marginBottom: '20px' }} />
            <h3 className={styles.featureTitle}>Experience & Expertise</h3>
            <p className={styles.text}>
              Our instructors are PADI certified professionals with years of experience. We bring unmatched expertise to every dive, ensuring you learn from the best.
            </p>
          </div>

          <div className={styles.featureCard}>
            <FaShieldAlt size={40} color="#ffd700" style={{ marginBottom: '20px' }} />
            <h3 className={styles.featureTitle}>Safety First</h3>
            <p className={styles.text}>
              Safety is our top priority. We adhere to the highest international safety standards and meticulously maintain our state-of-the-art equipment.
            </p>
          </div>

          <div className={styles.featureCard}>
            <FaUserFriends size={40} color="#00b4d8" style={{ marginBottom: '20px' }} />
            <h3 className={styles.featureTitle}>Personalized Attention</h3>
            <p className={styles.text}>
              We keep our groups small to provide personalized attention, ensuring every diver feels comfortable, confident, and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Google Reviews */}
      <section className={`${styles.section} ${styles.reviewsSection}`}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className={styles.sectionTitle}>What Our Divers Say</h2>
        </div>
        <div className="elfsight-app-2d8b6b19-6bcd-4eec-8c47-d0db7524dcde" data-elfsight-app-lazy></div>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      </section>

      {/* 5. Our Location */}
      <section className={styles.section}>
        <div className={styles.locationContainer}>
          <div className={styles.locationText}>
            <h2 className={styles.sectionTitle}>Our Location</h2>
            <p className={styles.text}>
              Located on the stunning southern coast of Sri Lanka, our <strong>Hikkaduwa Dive Center</strong> is your perfect starting point for underwater adventure.
            </p>
          </div>
          <div className={styles.mapFrame}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6876302394911!2d80.08968897147666!3d6.1641559937222405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae183000d63164b%3A0x79c106c44817f1b7!2sDivevora%20Sri%20Lanka%20-%20PADI%20Diving%20Center%20(S-30430)!5e0!3m2!1sen!2slk!4v1765452472697!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Divevora Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Ready to Dive In?</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem' }}>
          Join us for an adventure of a lifetime. Book your dive today!
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us Now
        </Link>
      </section>

    </div>
  );
}