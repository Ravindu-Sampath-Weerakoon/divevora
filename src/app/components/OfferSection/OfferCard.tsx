import React from "react";
import Link from "next/link"; // Import Link
import styles from "./OfferCard.module.css";

interface OfferCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  link: string; // New prop for the URL
}

const OfferCard: React.FC<OfferCardProps> = ({ image, title, description, buttonText, link }) => (
  <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      
      {/* Updated: Using Link instead of Button for navigation */}
      <Link href={link} className={styles.cardButton}>
        {buttonText}
      </Link>
      
    </div>
  </div>
);

export default OfferCard;