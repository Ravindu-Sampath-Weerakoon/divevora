import React from "react";
import OfferCard from "./OfferCard";
import styles from "./OfferCardSection.module.css";

const OfferCardSection: React.FC = () => {
  const cards = [
    {
      image: "/scuba.webp",
      title: "SCUBA DIVING",
      description: "Explore reefs and marine life with certified guides.",
      buttonText: "Learn More",
      link: "/scuba-diving", // Link to Scuba page
    },
    {
      image: "/padi.webp",
      title: "PADI COURSES",
      description: "Learn from professionals and earn international diving certification.",
      buttonText: "View Courses",
      link: "/padi-courses/OpenWaterDiver", // Link to a popular course or main course list
    },
    {
      image: "/snorkeling.webp",
      title: "SNORKELING",
      description: "Perfect for beginners – enjoy surface-level marine views.",
      buttonText: "Discover",
      link: "/ACTIVITIES/Snorkeling", // Link to your new Snorkeling page
    },
  ];

  return (
    <section className={styles.sectionWrapper} id="offer-explore">
      <h2 className={styles.sectionTitle}>🌊 What We Offer</h2>
      <p className={styles.sectionSubtitle}>
        Dive into <strong style={{ color: '#0077b6' }}>Unforgettable</strong> Adventures
      </p>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <OfferCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            link={card.link} // Pass the link prop here
          />
        ))}
      </div>
    </section>
  );
};

export default OfferCardSection;