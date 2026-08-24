import React from 'react';
import styles from './MinimalHeader.module.css';

interface MinimalHeaderProps {
  onCtaClick?: () => void;
  ctaText?: string;
}

export const MinimalHeader: React.FC<MinimalHeaderProps> = ({ 
  onCtaClick,
  ctaText = "Solicita tu cita"
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {/* TODO BRAND FONT/LOGO: Sustituir texto por logo SVG oficial */}
          <a href="/" className={styles.logo}>MIQUEL SUAY</a>
        </div>
        <div className={styles.actionContainer}>
          <button 
            className={styles.ctaButton} 
            onClick={onCtaClick}
            aria-label={ctaText}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </header>
  );
};
