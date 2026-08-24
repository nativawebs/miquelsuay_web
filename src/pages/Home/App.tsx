import React from 'react';
import styles from './Home.module.css';
import logoMiquel from '../../assets/logo_miquel.webp';
import homeNovio from '../../assets/home_novio.jpg';
import homeNovia from '../../assets/home_novia.jpg';
import AuraCursor from '../../components/originkit/ui/aura-cursor';

const App: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundAnimation}>
        <AuraCursor 
          label={false}
          backdrop="light"
          paletteColors={['#9D2149', '#C39F68', '#040404']}
          densityDissipation={4}
          splatRadius={6}
        />
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <img 
            src={logoMiquel} 
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
              <img src={homeNovio} alt="Colección Novio" className={styles.categoryImage} />
            </div>
            <div className={styles.cardContent}>
              <h2>Colección Novio</h2>
              <span className={styles.cardCta}>Ver más</span>
            </div>
          </a>

          <a href="/mujer/" className={styles.linkCard}>
            <div className={styles.cardImage}>
              <img src={homeNovia} alt="Universo Mujer" className={styles.categoryImage} />
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
