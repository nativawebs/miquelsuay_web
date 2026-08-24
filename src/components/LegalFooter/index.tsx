import React from 'react';
import styles from './LegalFooter.module.css';

export const LegalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          MIQUEL SUAY
        </div>
        
        <div className={styles.links}>
          {/* TODO LEGAL CONTENT: Sustituir por modales o páginas reales de legal */}
          <button className={styles.link}>Aviso Legal</button>
          <button className={styles.link}>Política de Privacidad</button>
          <button className={styles.link}>Política de Cookies</button>
        </div>

        <div className={styles.copyright}>
          &copy; {currentYear} Miquel Suay. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
