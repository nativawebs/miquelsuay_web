import React from 'react';
import styles from './CategoryBlock.module.css';

interface CategoryBlockProps {
  id: string;
  categoryValue: string;
  title: string;
  description: string;
  ctaText: string;
  imageSlotId1: string;
  imageSlotId2?: string;
  reversed?: boolean;
  onCtaClick: (category: string) => void;
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  id,
  categoryValue,
  title,
  description,
  ctaText,
  imageSlotId1,
  imageSlotId2,
  reversed = false,
  onCtaClick
}) => {
  return (
    <section id={id} className={`${styles.categoryBlock} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button 
            className={styles.ctaContextual} 
            onClick={() => onCtaClick(categoryValue)}
          >
            {ctaText}
          </button>
        </div>
        
        <div className={styles.imageGrid}>
          <div className={styles.primaryImage}>
            {/* IMAGE_SLOT: {imageSlotId1} */}
            <div className={styles.imagePlaceholder}>
               <span className={styles.placeholderText}>[IMAGEN: {imageSlotId1}]</span>
            </div>
          </div>
          {imageSlotId2 && (
            <div className={styles.secondaryImage}>
              {/* IMAGE_SLOT: {imageSlotId2} */}
              <div className={styles.imagePlaceholder}>
                 <span className={styles.placeholderText}>[IMAGEN: {imageSlotId2}]</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
