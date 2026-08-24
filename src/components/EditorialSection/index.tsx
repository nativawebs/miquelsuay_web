import React from 'react';
import styles from './EditorialSection.module.css';

interface EditorialSectionProps {
  title: string;
  description?: string;
  imageSlotId1: string;
  imageSlotId2?: string;
  reversed?: boolean;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  title,
  description,
  imageSlotId1,
  imageSlotId2,
  reversed = false,
}) => {
  return (
    <section className={`${styles.editorialSection} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
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
