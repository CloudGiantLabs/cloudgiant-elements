import React from 'react';
import styles from './Card.module.scss';

const Card = ({ children }) => (
  <div className={styles.cardContainer}>
    <div className={styles.cardAuth}>{children}</div>
  </div>
);

export default Card;
