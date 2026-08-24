import React from 'react';
import styles from './ProductEditorialGrid.module.css';
import { AnimatedReveal } from '../AnimatedReveal';
import { getSlotImage } from '../../content/image-manifest';

export interface ProductItem {
  imageSlotId: string;
  name: string;
  subtitle?: string;
  description: string;
}

interface ProductEditorialGridProps {
  title: string;
  subtitle?: string;
  products: ProductItem[];
  onCtaClick?: () => void;
}

export const ProductEditorialGrid: React.FC<ProductEditorialGridProps> = ({
  title,
  subtitle,
  products,
  onCtaClick
}) => {
  return (
    <section className={styles.productEditorialSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <AnimatedReveal direction="up">
            <span className="eyebrow">Selección Novio</span>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={100}>
            <h2 className={styles.sectionTitle}>{title}</h2>
          </AnimatedReveal>
          {subtitle && (
            <AnimatedReveal direction="up" delay={200}>
              <p className={styles.sectionSubtitle}>{subtitle}</p>
            </AnimatedReveal>
          )}
        </div>
        
        <div className={styles.editorialGrid}>
          {products.map((product, index) => {
            const productImg = getSlotImage(product.imageSlotId);

            return (
              <AnimatedReveal key={index} direction="up" delay={index * 150} className={styles.cardWrapper}>
                <article className={styles.verticalCard}>
                  <div className={styles.imageFrame}>
                    {/* IMAGE_SLOT: {product.imageSlotId} */}
                    {productImg ? (
                      <img src={productImg} alt={product.name} className={styles.productImage} />
                    ) : (
                      <div className={styles.imagePlaceholder}>
                        <span className={styles.slotTag}>IMAGE_SLOT</span>
                        <span className={styles.slotId}>{product.imageSlotId}</span>
                      </div>
                    )}
                    <div className={styles.hoverOverlay} />
                  </div>

                <div className={styles.cardInfo}>
                  <span className={styles.cardNumber}>{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  
                  {onCtaClick && (
                    <button className={styles.contextualBtn} onClick={onCtaClick}>
                      <span>Descubrir estilo</span>
                      <svg className={styles.arrow} viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                  )}
                </div>
              </article>
            </AnimatedReveal>
          );
        })}
        </div>
      </div>
    </section>
  );
};
