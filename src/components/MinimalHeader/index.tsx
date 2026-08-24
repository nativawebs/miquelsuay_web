import React from 'react';
import styles from './MinimalHeader.module.css';
import logoMiquel from '../../assets/logo_miquel.webp';

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
              src={logoMiquel} 
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
