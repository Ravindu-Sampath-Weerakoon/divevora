import React from 'react';
import styles from './CommentCard.module.css';
import { Quote } from 'lucide-react';

interface CommentCardProps {
  text: string;
  author?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ text, author }) => {
  return (
    <div className={styles.commentCard}>
      <Quote className={styles.quoteIcon} size={32} />
      <p className={styles.commentText}>{text}</p>
      {author && <p className={styles.authorName}>— {author}</p>}
    </div>
  );
};

export default CommentCard;