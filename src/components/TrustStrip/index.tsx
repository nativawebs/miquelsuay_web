import React from 'react';
import styles from './TrustStrip.module.css';
import { AnimatedReveal } from '../AnimatedReveal';

export interface TrustItem {
  number?: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface TrustStripProps {
  title?: string;
  items: TrustItem[];
  theme?: 'dark' | 'light';
}

export const TrustStrip: React.FC<TrustStripProps> = ({ 
  title, 
  items,
  theme = 'dark' 
}) => {
  return (
    <section className={`${styles.trustStrip} ${styles[theme]}`}>
      <div className={styles.container}>
        {title && (
          <div className={styles.header}>
            <AnimatedReveal direction="up">
              <h2 className={styles.sectionTitle}>{title}</h2>
            </AnimatedReveal>
          </div>
        )}

        <div className={styles.editorialGrid}>
          {items.map((item, index) => (
            <AnimatedReveal 
              key={index} 
              direction="up" 
              delay={index * 120} 
              className={`${styles.itemCard} ${item.highlighted ? styles.highlightedCard : ''}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.numberBadge}>
                  {item.number || (index + 1).toString().padStart(2, '0')}
                </span>
                <div className={styles.accentLine} />
              </div>

              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
