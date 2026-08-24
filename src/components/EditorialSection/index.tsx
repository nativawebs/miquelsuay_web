import React from 'react';
import styles from './EditorialSection.module.css';
import { AnimatedReveal } from '../AnimatedReveal';

interface EditorialSectionProps {
  numberTag?: string;
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  description: string;
  imageSlotId1: string;
  imageSlotId2?: string;
  reversed?: boolean;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  numberTag,
  eyebrow,
  title,
  titleItalic,
  description,
  imageSlotId1,
  imageSlotId2,
  reversed = false,
}) => {
  return (
    <section className={`${styles.editorialSection} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          {numberTag && (
            <AnimatedReveal direction="down">
              <span className={styles.editorialNumber}>{numberTag}</span>
            </AnimatedReveal>
          )}

          {eyebrow && (
            <AnimatedReveal direction="up">
              <span className="eyebrow">{eyebrow}</span>
            </AnimatedReveal>
          )}

          <AnimatedReveal direction="up" delay={150}>
            <h2 className={styles.title}>
              {title}{' '}
              {titleItalic && <span className="font-italic">{titleItalic}</span>}
            </h2>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={250}>
            <p className={styles.description}>{description}</p>
          </AnimatedReveal>

          <div className={styles.burgundyLine} aria-hidden="true" />
        </div>
        
        <div className={styles.imageGrid}>
          <AnimatedReveal direction="clip-up" delay={200} className={styles.primaryFrameWrapper}>
            <div className={styles.primaryImage}>
              {/* IMAGE_SLOT: {imageSlotId1} */}
              <div className={styles.imagePlaceholder}>
                <span className={styles.slotTag}>IMAGE_SLOT</span>
                <span className={styles.slotId}>{imageSlotId1}</span>
              </div>
            </div>
          </AnimatedReveal>

          {imageSlotId2 && (
            <AnimatedReveal direction="up" delay={400} className={styles.secondaryFrameWrapper}>
              <div className={styles.secondaryImage}>
                {/* IMAGE_SLOT: {imageSlotId2} */}
                <div className={styles.imagePlaceholderSecondary}>
                  <span className={styles.slotIdSmall}>{imageSlotId2}</span>
                </div>
              </div>
            </AnimatedReveal>
          )}
        </div>
      </div>
    </section>
  );
};
