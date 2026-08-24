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
          <a href="/" className={styles.logo}>
            <img 
              src="https://www.miquelsuay.com/wp-content/uploads/2026/06/logo-miquel-suay-2.svg" 
              alt="Miquel Suay Logo" 
              className={styles.logoImage} 
            />
          </a>
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
