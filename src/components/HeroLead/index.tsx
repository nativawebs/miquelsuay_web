import React from 'react';
import styles from './HeroLead.module.css';

interface HeroLeadProps {
  eyebrow: string;
  headline: string;
  subtext: string;
  imageSlotId: string;
  imageAltText: string;
  formComponent: React.ReactNode;
}

export const HeroLead: React.FC<HeroLeadProps> = ({
  eyebrow,
  headline,
  subtext,
  imageSlotId,
  imageAltText,
  formComponent
}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subtext}>{subtext}</p>
          
          <div className={styles.imageWrapperMobile}>
             {/* IMAGE_SLOT: {imageSlotId} 
                 Ratio recomendado móvil: 3:4. 
                 Sustituir por URL o archivo oficial aprobado. */}
            <div className={styles.imagePlaceholder} aria-label={imageAltText}>
               <span className={styles.placeholderText}>[IMAGEN: {imageSlotId}]</span>
            </div>
          </div>
        </div>

        <div className={styles.formColumn}>
          {formComponent}
        </div>
      </div>
      
      {/* Background image for desktop (optional, based on design spec, we use explicit image instead or side-by-side) */}
      <div className={styles.imageWrapperDesktop}>
        {/* IMAGE_SLOT: {imageSlotId} 
             Ratio recomendado desktop: 4:5 o adaptable. 
             Sustituir por URL oficial aprobada. */}
        <div className={styles.imagePlaceholderDesktop} aria-label={imageAltText}>
           <span className={styles.placeholderText}>[IMAGEN: {imageSlotId}]</span>
        </div>
      </div>
    </section>
  );
};
