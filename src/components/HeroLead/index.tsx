import React, { useRef, useEffect, useState } from 'react';
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
  /** When provided along with imageSlotId (used as background), renders a two-layer parallax hero */
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

  // Parallax state — only active on desktop
  const [bgOffset, setBgOffset] = useState(0);
  const [figureOffset, setFigureOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const isParallaxMode = !!(primaryImg && figureImg);

  useEffect(() => {
    if (!isParallaxMode) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        // Only apply on viewport > 1060px (no parallax on mobile)
        if (window.innerWidth <= 1060) {
          setBgOffset(0);
          setFigureOffset(0);
          return;
        }
        const scrollY = window.scrollY;
        const sectionTop = section.offsetTop;
        const relativeScroll = scrollY - sectionTop;
        // Background drifts upward slowly
        setBgOffset(relativeScroll * 0.18);
        // Figure rises slightly faster — creates depth
        setFigureOffset(relativeScroll * -0.06);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isParallaxMode]);

  return (
    <section ref={sectionRef} className={`${styles.heroSection} ${styles[variant]}`}>
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

          {/* Value Highlights Badges */}
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

          {/* Mobile image slot */}
          <div className={styles.imageWrapperMobile}>
            <div className={styles.imagePlaceholderMobile} aria-label={imageAltText}>
              {figureImg ? (
                <img src={figureImg} alt={imageAltText} className={styles.heroImageMobile} />
              ) : primaryImg ? (
                <img src={primaryImg} alt={imageAltText} className={styles.heroImageMobile} />
              ) : (
                <span className={styles.placeholderLabel}>[SLOT: {imageSlotId} | 3:4]</span>
              )}
            </div>
          </div>
        </div>

        {/* Column 2: Desktop Editorial Image — Parallax or Standard */}
        <div className={styles.imageColumnDesktop}>
          {isParallaxMode ? (
            /* ─── Two-layer Parallax Composition ─── */
            <div className={styles.parallaxFrame} aria-label={imageAltText}>
              {/* Layer 1: Brand Background (moves slowly up) */}
              <div
                className={styles.parallaxBg}
                style={{ transform: `translateY(${bgOffset}px) scale(1.12)` }}
              >
                <img
                  src={primaryImg!}
                  alt=""
                  aria-hidden="true"
                  className={styles.parallaxBgImg}
                />
              </div>

              {/* Layer 2: Figure PNG without background (rises slightly) */}
              <div
                className={styles.parallaxFigure}
                style={{ transform: `translateY(${figureOffset}px)` }}
              >
                <img
                  src={figureImg!}
                  alt={imageAltText}
                  className={styles.parallaxFigureImg}
                />
              </div>

              {/* Subtle vignette at bottom to blend into page */}
              <div className={styles.parallaxVignette} aria-hidden="true" />
            </div>
          ) : (
            /* ─── Standard Single Image ─── */
            <AnimatedReveal direction="up" delay={250} className={styles.imageRevealWrapper}>
              <div className={styles.editorialFrame}>
                {primaryImg ? (
                  <img src={primaryImg} alt={imageAltText} className={styles.heroImage} />
                ) : (
                  <div className={styles.imagePlaceholderDesktop} aria-label={imageAltText}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.slotTag}>IMAGE_SLOT</span>
                      <span className={styles.slotId}>{imageSlotId}</span>
                      <span className={styles.slotSpec}>Editorial Hero · Full Height</span>
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

        {/* Column 3: Form Column */}
        <div className={styles.formColumn}>
          <AnimatedReveal direction="up" delay={400} className={styles.formRevealWrapper}>
            {formComponent}
          </AnimatedReveal>
        </div>
      </div>

      {/* Discreet Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Descubrir</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};
