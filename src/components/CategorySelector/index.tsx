import React, { useState, useEffect, useRef } from 'react';
import styles from './CategorySelector.module.css';

interface CategorySelectorProps {
  categories: { id: string; label: string; value: string }[];
  onSelectCategory?: (categoryValue: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  categories,
  onSelectCategory 
}) => {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || '');
  const [markerStyle, setMarkerStyle] = useState<React.CSSProperties>({});
  const buttonsRef = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = categories.map(cat => document.getElementById(cat.id));
      let currentActiveId = activeId;

      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
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

  // Update marker position on active category change
  useEffect(() => {
    const activeButton = buttonsRef.current.get(activeId);
    if (activeButton) {
      setMarkerStyle({
        left: `${activeButton.offsetLeft}px`,
        width: `${activeButton.offsetWidth}px`
      });
    }
  }, [activeId]);

  const handleCategoryClick = (id: string, value: string) => {
    setActiveId(id);
    if (onSelectCategory) {
      onSelectCategory(value);
    }
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.selectorStickyWrapper}>
      <nav className={styles.selectorContainer} aria-label="Categorías de ceremonia">
        <div className={styles.categoryNavList}>
          {categories.map(category => (
            <button
              key={category.id}
              ref={el => {
                if (el) buttonsRef.current.set(category.id, el);
                else buttonsRef.current.delete(category.id);
              }}
              className={`${styles.categoryBtn} ${activeId === category.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category.id, category.value)}
              aria-current={activeId === category.id ? 'true' : 'false'}
            >
              <span className={styles.btnText}>{category.label}</span>
            </button>
          ))}
          {/* Animated Sliding Underline Marker */}
          <div className={styles.activeMarker} style={markerStyle} aria-hidden="true" />
        </div>
      </nav>
    </div>
  );
};
