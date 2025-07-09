import React from "react";
import styles from "./OfferCard.module.css";

interface OfferCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ image, title, description, buttonText, onClick }) => (
  <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <button className={styles.cardButton} onClick={onClick}>{buttonText}</button>
    </div>
  </div>
);

export default OfferCard;
