import React from 'react';
import styles from './Home.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img 
            src="https://www.miquelsuay.com/wp-content/uploads/2026/06/logo-miquel-suay-2.svg" 
            alt="Miquel Suay Logo" 
            className={styles.logoImage} 
          />
        </div>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Bienvenido a Miquel Suay</h1>
        <p className={styles.subtitle}>Selecciona la experiencia que estás buscando</p>
        
        <div className={styles.linksContainer}>
          <a href="/novio/" className={styles.linkCard}>
            <div className={styles.cardImage}>
              {/* IMAGE_SLOT: HOME_GROOM */}
              <div className={styles.placeholderImage}></div>
            </div>
            <div className={styles.cardContent}>
              <h2>Colección Novio</h2>
              <span className={styles.cardCta}>Ver más</span>
            </div>
          </a>

          <a href="/mujer/" className={styles.linkCard}>
            <div className={styles.cardImage}>
              {/* IMAGE_SLOT: HOME_WOMEN */}
              <div className={styles.placeholderImage}></div>
            </div>
            <div className={styles.cardContent}>
              <h2>Universo Mujer</h2>
              <span className={styles.cardCta}>Ver más</span>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
