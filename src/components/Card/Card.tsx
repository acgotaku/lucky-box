import { useState } from 'react';
import cls from 'clsx';
import icon from '@/assets/icon.jpg';
import styles from './card.module.css';

interface CardProps {
  number?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ number, className = '' }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={cls(styles.card, className)}
      onClick={() => setFlip(flip => !flip)}
    >
      <div className={cls(styles.inner, flip && styles.flip)}>
        <picture className={cls(styles.face, styles.front)}>
          <img src={icon} className={styles.img} />
        </picture>
        <div className={cls(styles.face, styles.back)}>
          <span className={styles.text}>{number}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
