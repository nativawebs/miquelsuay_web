import React from 'react';
import styles from './FinalAppointmentCTA.module.css';

interface FinalAppointmentCTAProps {
  title: string;
  imageSlotId: string;
  onCtaClick?: () => void;
}

export const FinalAppointmentCTA: React.FC<FinalAppointmentCTAProps> = ({
  title,
  imageSlotId,
  onCtaClick
}) => {
  return (
    <section className={styles.finalCta}>
      <div className={styles.imageBackground}>
        {/* IMAGE_SLOT_BACKGROUND: {imageSlotId} */}
        <div className={styles.placeholderBackground}>
          <span style={{color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>[IMAGEN: {imageSlotId}]</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <button 
          className={styles.ctaButton}
          onClick={onCtaClick}
        >
          Reserva tu experiencia
        </button>
      </div>
    </section>
  );
};
