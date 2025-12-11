'use client';

import React, { useState } from 'react';
import styles from './hikkaduwa.module.css';
import Link from 'next/link';
import { 
  FaShip, FaFish, FaMountain, FaWater, FaDungeon, FaGem, FaAnchor, FaLeaf
} from 'react-icons/fa';

// Data
const DIVE_SITES = [
  {
    name: 'Kirala Gala',
    desc: 'One of the best deep dives (20m-40m). A pinnacle surrounded by shoals of triggerfish, barracuda, and soft coral.',
    icon: <FaMountain />,
    color: '#0077b6'
  },
  {
    name: 'Conch Wreck',
    desc: 'The wreck of one of the world’s first oil tankers (1847). Depth 14-20m. Highlights include scattered wreckage.',
    icon: <FaShip />,
    color: '#9e2a2b'
  },
  {
    name: 'Goda Gala',
    desc: 'An alien-like landscape of large boulders at 24m depth. Home to blue boxfish, morays, and lobsters.',
    icon: <FaGem />,
    color: '#0096c7'
  },
  {
    name: 'Ralahamigala Rock',
    desc: 'Close to Godagala, full of big tropical fish like snappers and barracuda. Features natural creations.',
    icon: <FaFish />,
    color: '#f4a261'
  },
  {
    name: 'Earl of Shaftsbury',
    desc: 'An English ship sunk in 1847 ("One Piece"). A historical site studded with centuries-old coral growth.',
    icon: <FaAnchor />,
    color: '#6d597a'
  },
  {
    name: 'Black Coral Point',
    desc: 'A gorgeous site with majestic Black Corals and vivid reef colors. Teeming with clownfish.',
    icon: <FaLeaf />,
    color: '#2a9d8f'
  },
  {
    name: 'Coral Garden Cave',
    desc: 'A natural stone cave created by boulders. The area resembles a flower garden of corals.',
    icon: <FaDungeon />,
    color: '#e76f51'
  },
  {
    name: 'Seenigama Rock',
    desc: 'Covered in fantastically shaped colored corals. A splendid site full of marine life.',
    icon: <FaMountain />,
    color: '#457b9d'
  },
  {
    name: 'Hikkaduwa Gala Rock',
    desc: 'A deep rift dive covered by the legendary Hikkaduwa Coral Reef.',
    icon: <FaWater />,
    color: '#00b4d8'
  },
  {
    name: 'Yakamuththagala',
    desc: 'The "Rock of Grand Demon". Features rifted barriers and massive rocks.',
    icon: <FaMountain />,
    color: '#264653'
  },
  {
    name: 'Kadwaragala Rock',
    desc: 'Named after the legendary God "Kadawara". Part of the famous reef barrier.',
    icon: <FaGem />,
    color: '#e9c46a'
  },
  {
    name: 'Sunil\'s Rock',
    desc: 'Located close to the main reef, offering mature wonders like caves.',
    icon: <FaDungeon />,
    color: '#1d3557'
  },
];

const FlipCard = ({ site }: { site: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.flipCardContainer} onClick={handleFlip}>
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ''}`}>
        
        {/* FRONT SIDE */}
        <div 
          className={styles.flipCardFront} 
          style={{ backgroundColor: site.color }}
        >
          <div className={styles.cardBorder}>
            <div className={styles.iconBoxFront}>{site.icon}</div>
            <h3 className={styles.cardTitleFront}>{site.name}</h3>
            <div className={styles.cardDecoration}>♦</div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className={styles.flipCardBack}>
          <h3 className={styles.cardTitleBack} style={{ color: site.color }}>{site.name}</h3>
          <p className={styles.cardTextBack}>{site.desc}</p>
        </div>

      </div>
    </div>
  );
};

export default function HikkaduwaSitesPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hikkaduwa Dive Sites</h1>
          <p className={styles.heroSubtitle}>Discover the Best Dives</p>
          <div className={styles.heroBadge}>Dive In Today!</div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Why Dive in Hikkaduwa?</h2>
          <p className={styles.text}>
            Hikkaduwa’s appeal lies in its diverse marine ecosystem. From colorful coral reefs and shoals of tropical fish to majestic manta rays and whale sharks, this area offers something for everyone. 
            With warm waters, excellent visibility, and well-preserved sites, it is an ideal location for both novice and experienced divers.
          </p>
        </div>
      </section>

      {/* 3. Dive Sites Grid */}
      <section className={`${styles.section} ${styles.sitesSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>Explore Our Dive Sites</h2>
          <p className={styles.instructionText}>
            (Click on a card to flip and see details)
          </p>
        </div>
        
        <div className={styles.siteGrid}>
          {DIVE_SITES.map((site, index) => (
            <FlipCard key={index} site={site} />
          ))}
        </div>
      </section>

      {/* 4. Highlights Section (NEW - Added as requested) */}
      <section className={styles.section}>
        <div className={styles.introContainer}>
          <h2 className={styles.sectionTitle}>Highlights of Diving in Hikkaduwa</h2>
          <p className={styles.text}>
            Hikkaduwa’s dive sites are celebrated for their unique features and the array of marine life they support. 
            Each site offers something special, whether it’s the depth and beauty of <strong>Kirala Gala</strong>, the historical intrigue of the <strong>Conch Wreck</strong>, or the stunning biodiversity of <strong>Coral Garden Cave</strong>.
          </p>
          <p className={styles.text}>
            With short boat rides to most sites and the opportunity to dive in small, personalized groups, you’re guaranteed a safe and enjoyable experience.
          </p>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.heroTitle}>Discover Underwater Wonders</h2>
        <p className={styles.text} style={{ fontSize: '1.2rem', color: '#fff' }}>
          From Kirala Gala to the Conch Wreck, experience vibrant marine life.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Now
        </Link>
      </section>

    </div>
  );
}