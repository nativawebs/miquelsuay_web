import React from 'react';
import styles from './CategoryBlock.module.css';
import { AnimatedReveal } from '../AnimatedReveal';
import { getSlotImage } from '../../content/image-manifest';

export interface CategoryBlockProps {
  id: string;
  categoryValue: string;
  variant: 'bride' | 'festera' | 'madrina' | 'graduation';
  eyebrowText?: string;
  title: string;
  titleItalic?: string;
  description: string;
  ctaText: string;
  imageSlotId1: string;
  imageSlotId2?: string;
  onCtaClick: (category: string) => void;
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  id,
  categoryValue,
  variant,
  eyebrowText,
  title,
  titleItalic,
  description,
  ctaText,
  imageSlotId1,
  imageSlotId2,
  onCtaClick
}) => {
  const primaryImg = getSlotImage(imageSlotId1);
  const secondaryImg = getSlotImage(imageSlotId2);

  return (
    <section id={id} className={`${styles.categoryBlock} ${styles[variant]}`}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <AnimatedReveal direction="up">
            <span className="eyebrow">{eyebrowText || categoryValue}</span>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={150}>
            <h2 className={styles.title}>
              {title}{' '}
              {titleItalic && <span className="font-italic">{titleItalic}</span>}
            </h2>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={250}>
            <p className={styles.description}>{description}</p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={350}>
            <button 
              className={`btn-editorial ${styles.contextualBtn}`} 
              onClick={() => onCtaClick(categoryValue)}
            >
              <span>{ctaText}</span>
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
          </AnimatedReveal>
        </div>
        
        <div className={styles.imageGrid}>
          <AnimatedReveal direction="clip-up" delay={200} className={styles.primaryFrameWrapper}>
            <div className={styles.primaryImage}>
              {primaryImg ? (
                <img src={primaryImg} alt={title} className={styles.productImage} />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.slotInfo}>
                    <span className={styles.slotLabel}>IMAGE_SLOT</span>
                    <span className={styles.slotId}>{imageSlotId1}</span>
                    <span className={styles.variantBadge}>{variant}</span>
                  </div>
                </div>
              )}
            </div>
          </AnimatedReveal>

          {imageSlotId2 && (
            <AnimatedReveal direction="up" delay={400} className={styles.secondaryFrameWrapper}>
              <div className={styles.secondaryImage}>
                {secondaryImg ? (
                  <img src={secondaryImg} alt={`${title} detalle`} className={styles.productImage} />
                ) : (
                  <div className={styles.imagePlaceholderSecondary}>
                    <span className={styles.slotIdSmall}>{imageSlotId2}</span>
                  </div>
                )}
              </div>
            </AnimatedReveal>
          )}
        </div>
      </div>
    </section>
  );
};
