import React, { useState, useEffect } from 'react';
import styles from './CategorySelector.module.css';

interface CategorySelectorProps {
  categories: { id: string; label: string }[];
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ categories }) => {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      // Find the category section currently in view
      const sectionElements = categories.map(cat => document.getElementById(cat.id));
      
      let currentActiveId = activeId;
      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Offset to trigger earlier when scrolling down
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActiveId = section.id;
          }
        }
      }
      
      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId, categories]);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header/selector
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.selectorWrapper}>
      <nav className={styles.selectorContainer} aria-label="Categorías de ceremonia">
        <ul className={styles.categoryList}>
          {categories.map(category => (
            <li key={category.id} className={styles.categoryItem}>
              <button
                className={`${styles.categoryButton} ${activeId === category.id ? styles.active : ''}`}
                onClick={() => scrollToCategory(category.id)}
                aria-current={activeId === category.id ? 'true' : 'false'}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
