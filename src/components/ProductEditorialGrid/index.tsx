import React from 'react';
import styles from './ProductEditorialGrid.module.css';

interface ProductItem {
  imageSlotId: string;
  name: string;
  description: string;
}

interface ProductEditorialGridProps {
  title: string;
  products: ProductItem[];
}

export const ProductEditorialGrid: React.FC<ProductEditorialGridProps> = ({
  title,
  products
}) => {
  return (
    <section className={styles.productGrid}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                 {/* IMAGE_SLOT: {product.imageSlotId} */}
                <div className={styles.imagePlaceholder}>
                   <span className={styles.placeholderText}>[IMAGEN: {product.imageSlotId}]</span>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.number}>{(index + 1).toString().padStart(2, '0')}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
