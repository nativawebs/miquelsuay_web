import React from 'react';
import styles from './GridSection.module.css';

interface GridItem {
  title: string;
  description: string;
  icon?: string; // Optional if we want to add SVGs later
}

interface GridSectionProps {
  title: string;
  subtitle?: string;
  items: GridItem[];
  columns?: 2 | 3 | 4;
  theme?: 'light' | 'dark';
}

export const GridSection: React.FC<GridSectionProps> = ({
  title,
  subtitle,
  items,
  columns = 3,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  
  return (
    <section className={`${styles.section} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        
        <div className={styles.grid} style={{ '--cols': columns } as React.CSSProperties}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <h3 className={styles.itemTitle}>
                <span className={styles.bullet}></span>
                {item.title}
              </h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
