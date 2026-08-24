import React from 'react';
import styles from './HeroLead.module.css';
import { AnimatedReveal } from '../AnimatedReveal';
import { getSlotImage } from '../../content/image-manifest';

interface HeroLeadProps {
  variant?: 'novio' | 'mujer';
  eyebrow: string;
  headlineTitle: string;
  headlineItalic?: string;
  headlineEnd?: string;
  subtext: string;
  imageSlotId: string;
  secondaryImageSlotId?: string;
  imageAltText: string;
  formComponent: React.ReactNode;
}

export const HeroLead: React.FC<HeroLeadProps> = ({
  variant = 'novio',
  eyebrow,
  headlineTitle,
  headlineItalic,
  headlineEnd,
  subtext,
  imageSlotId,
  secondaryImageSlotId,
  imageAltText,
  formComponent
}) => {
  const primaryImg = getSlotImage(imageSlotId);
  const secondaryImg = getSlotImage(secondaryImageSlotId);

  return (
    <section className={`${styles.heroSection} ${styles[variant]}`}>
      {/* Background Geometric Accent Shape for Novio/Mujer */}
      <div className={styles.bgGeometry} aria-hidden="true">
        <div className={styles.geoRect} />
        <div className={styles.geoLine} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <AnimatedReveal direction="up" delay={100}>
            <span className="eyebrow">{eyebrow}</span>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={200}>
            <h1 className={styles.headline}>
              {headlineTitle}{' '}
              {headlineItalic && (
                <span className="font-italic">{headlineItalic} </span>
              )}
              {headlineEnd}
            </h1>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={300}>
            <p className={styles.subtext}>{subtext}</p>
          </AnimatedReveal>

          {/* Collage / Editorial Image frame for Mobile */}
          <div className={styles.imageWrapperMobile}>
            {/* IMAGE_SLOT: {imageSlotId} [Ratio 3:4 Mobile] */}
            <div className={styles.imagePlaceholderMobile} aria-label={imageAltText}>
              {primaryImg ? (
                <img src={primaryImg} alt={imageAltText} className={styles.heroImageMobile} />
              ) : (
                <span className={styles.placeholderLabel}>[SLOT: {imageSlotId} | 3:4]</span>
              )}
            </div>
            {secondaryImageSlotId && (
              /* IMAGE_SLOT: {secondaryImageSlotId} [Ratio 1:1 Mobile Secondary] */
              <div className={styles.secondaryPlaceholderMobile}>
                {secondaryImg ? (
                  <img src={secondaryImg} alt={imageAltText} className={styles.heroImageMobile} />
                ) : (
                  <span className={styles.placeholderLabel}>[SLOT: {secondaryImageSlotId}]</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={styles.formColumn}>
          <AnimatedReveal direction="up" delay={400} className={styles.formRevealWrapper}>
            {formComponent}
          </AnimatedReveal>
        </div>
      </div>

      {/* Editorial Image Side for Desktop (55-65% width) */}
      <div className={styles.desktopImageContainer}>
        <div className={styles.primaryDesktopFrame}>
          {/* IMAGE_SLOT: {imageSlotId} [Ratio 4:5 / High resolution editorial] */}
          {primaryImg ? (
            <img src={primaryImg} alt={imageAltText} className={styles.heroImage} />
          ) : (
            <div className={styles.imagePlaceholderDesktop} aria-label={imageAltText}>
              <div className={styles.placeholderContent}>
                <span className={styles.slotTag}>IMAGE_SLOT</span>
                <span className={styles.slotId}>{imageSlotId}</span>
                <span className={styles.slotSpec}>Editorial Hero · Desktop (4:5 / 16:9)</span>
              </div>
            </div>
          )}
        </div>

        {variant === 'mujer' && secondaryImageSlotId && (
          <div className={styles.secondaryDesktopFrame}>
            {/* IMAGE_SLOT: {secondaryImageSlotId} [Ratio 3:4 Secondary Overlap] */}
            {secondaryImg ? (
              <img src={secondaryImg} alt={imageAltText} className={styles.secondaryHeroImage} />
            ) : (
              <div className={styles.secondaryPlaceholderDesktop}>
                <span className={styles.slotIdSmall}>{secondaryImageSlotId}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Discreett Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Descubrir</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};
