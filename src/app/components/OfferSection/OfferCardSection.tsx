import React from "react";
import OfferCard from "./OfferCard";
import styles from "./OfferCardSection.module.css";

const OfferCardSection: React.FC = () => {
  const cards = [
    {
      image: "/scuba.jpg",
      title: "SCUBA DIVING",
      description: "Explore reefs and marine life with certified guides.",
      buttonText: "Learn More",
    },
    {
      image: "/padi.jpg",
      title: "PADI COURSES",
      description: "Learn from professionals and earn international diving certification.",
      buttonText: "Learn More",
    },
    {
      image: "/snorkeling.jpg",
      title: "SNORKELING",
      description: "Perfect for beginners – enjoy surface-level marine views.",
      buttonText: "Learn More",
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.sectionTitle}>🌊 What We Offer</h2>
      <p className={styles.sectionSubtitle}>Dive into <strong style={{ color: '#0077b6' }}>Unforgettable</strong> Adventures</p>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <OfferCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferCardSection;