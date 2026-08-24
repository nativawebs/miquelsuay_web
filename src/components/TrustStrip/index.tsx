import React from 'react';
import styles from './TrustStrip.module.css';

interface TrustItem {
  title: string;
  description: string;
}

interface TrustStripProps {
  items: TrustItem[];
}

export const TrustStrip: React.FC<TrustStripProps> = ({ items }) => {
  return (
    <section className={styles.trustStrip}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
