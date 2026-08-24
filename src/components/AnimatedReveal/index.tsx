import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './AnimatedReveal.module.css';

export interface AnimatedRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'clip-up';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration,
  threshold = 0.15,
  once = true,
  className = '',
  as: Component = 'div'
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    once
  });

  const directionClass = styles[direction] || styles.up;
  const revealClass = isIntersecting ? styles.isRevealed : '';

  const inlineStyles: React.CSSProperties = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    transitionDuration: duration ? `${duration}ms` : undefined
  };

  return (
    <Component
      ref={elementRef}
      className={`${styles.revealBase} ${directionClass} ${revealClass} ${className}`}
      style={inlineStyles}
    >
      {children}
    </Component>
  );
};
