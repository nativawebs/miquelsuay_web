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
  /** When set, imageSlotId is treated as background and this as the foreground figure (PNG) */
  parallaxFigureSlotId?: string;
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
  parallaxFigureSlotId,
  imageAltText,
  formComponent
}) => {
  const primaryImg = getSlotImage(imageSlotId);
  const secondaryImg = getSlotImage(secondaryImageSlotId);
  const figureImg = getSlotImage(parallaxFigureSlotId);

  const isCompositeMode = !!(primaryImg && figureImg);

  return (
    <section className={`${styles.heroSection} ${styles[variant]}`}>
      {/* Background Geometry Accent */}
      <div className={styles.bgGeometry} aria-hidden="true">
        <div className={styles.geoRect} />
        <div className={styles.geoLine} />
      </div>

      <div className={styles.container}>
        {/* Column 1: Editorial text */}
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

          <AnimatedReveal direction="up" delay={350} className={styles.highlightsWrapper}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Atelier Privado</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Patronaje a Medida</span>
            </div>
          </AnimatedReveal>

          {/* Mobile image */}
          <div className={styles.imageWrapperMobile}>
            <div className={styles.imagePlaceholderMobile} aria-label={imageAltText}>
              {isCompositeMode ? (
                <>
                  {/* Background layer */}
                  <img src={primaryImg!} alt="" aria-hidden="true" className={styles.compositeBg} />
                  {/* Figure layer */}
                  <img src={figureImg!} alt={imageAltText} className={styles.compositeFigure} />
                </>
              ) : primaryImg ? (
                <img src={primaryImg} alt={imageAltText} className={styles.heroImageMobile} />
              ) : (
                <span className={styles.placeholderLabel}>[SLOT: {imageSlotId} | 3:4]</span>
              )}
            </div>
          </div>
        </div>

        {/* Column 2: Desktop Editorial Image */}
        <div className={styles.imageColumnDesktop}>
          {isCompositeMode ? (
            /* Composite: background + figure PNG layered on top */
            <div className={styles.compositeFrame} aria-label={imageAltText}>
              {/* Background layer */}
              <img
                src={primaryImg!}
                alt=""
                aria-hidden="true"
                className={styles.compositeBg}
              />
              {/* Figure layer — PNG without background, anchored at bottom center */}
              <img
                src={figureImg!}
                alt={imageAltText}
                className={styles.compositeFigure}
              />
            </div>
          ) : (
            /* Standard single image */
            <AnimatedReveal direction="up" delay={250} className={styles.imageRevealWrapper}>
              <div className={styles.editorialFrame}>
                {primaryImg ? (
                  <img src={primaryImg} alt={imageAltText} className={styles.heroImage} />
                ) : (
                  <div className={styles.imagePlaceholderDesktop} aria-label={imageAltText}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.slotTag}>IMAGE_SLOT</span>
                      <span className={styles.slotId}>{imageSlotId}</span>
                      <span className={styles.slotSpec}>Editorial Hero</span>
                    </div>
                  </div>
                )}
                {secondaryImageSlotId && (
                  <div className={styles.secondaryDesktopFrame}>
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
            </AnimatedReveal>
          )}
        </div>

        {/* Column 3: Form */}
        <div className={styles.formColumn}>
          <AnimatedReveal direction="up" delay={400} className={styles.formRevealWrapper}>
            {formComponent}
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroLead;
