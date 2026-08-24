import React from 'react';
import styles from './FinalAppointmentCTA.module.css';
import { AnimatedReveal } from '../AnimatedReveal';
import boutiqueFacade from '../../assets/boutique_facade.jpg';

interface FinalAppointmentCTAProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  onCtaClick?: () => void;
}

export const FinalAppointmentCTA: React.FC<FinalAppointmentCTAProps> = ({
  eyebrow = "Experiencia Inolvidable",
  title,
  subtitle = "Vive el proceso de confección y prueba en la tranquilidad de nuestro Atelier privado.",
  onCtaClick
}) => {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.imageBackground}>
        <img src={boutiqueFacade} alt="Atelier Miquel Suay" className={styles.bgImage} />
        <div className={styles.darkOverlay} />
      </div>
      
      <div className={styles.contentContainer}>
        <AnimatedReveal direction="up">
          <span className={`${styles.eyebrowText} eyebrow`}>{eyebrow}</span>
        </AnimatedReveal>

        <AnimatedReveal direction="up" delay={150}>
          <h2 className={styles.title}>{title}</h2>
        </AnimatedReveal>

        <AnimatedReveal direction="up" delay={250}>
          <p className={styles.subtitle}>{subtitle}</p>
        </AnimatedReveal>

        <AnimatedReveal direction="up" delay={350}>
          <button 
            className={`btn-editorial ${styles.ctaBtn}`}
            onClick={onCtaClick}
          >
            <span>Reservar Cita Privada</span>
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </AnimatedReveal>
      </div>
    </section>
  );
};
