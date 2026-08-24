import React, { useState, useEffect, useRef } from 'react';
import styles from './AppointmentTimeline.module.css';
import { AnimatedReveal } from '../AnimatedReveal';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface AppointmentTimelineProps {
  title: string;
  subtitle?: string;
  steps: TimelineStep[];
}

export const AppointmentTimeline: React.FC<AppointmentTimelineProps> = ({
  title,
  subtitle,
  steps
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const stepElements = document.querySelectorAll(`.${styles.stepItem}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            if (!isNaN(index)) {
              setActiveStepIndex((prev) => Math.max(prev, index));
            }
          }
        });
      },
      { threshold: 0.4, rootMargin: '0px 0px -100px 0px' }
    );

    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const progressPercentage = Math.min(100, ((activeStepIndex + 1) / steps.length) * 100);

  return (
    <section className={styles.timelineSection}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.header}>
          <AnimatedReveal direction="up">
            <span className="eyebrow">Experiencia Privada</span>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={100}>
            <h2 className={styles.title}>{title}</h2>
          </AnimatedReveal>
          {subtitle && (
            <AnimatedReveal direction="up" delay={200}>
              <p className={styles.subtitle}>{subtitle}</p>
            </AnimatedReveal>
          )}
        </div>

        {/* Progressive Timeline Track */}
        <div 
          className={styles.timelineWrapper}
          style={{ '--progress-pct': `${progressPercentage}%` } as React.CSSProperties}
        >
          <div className={styles.progressLineTrack}>
            <div className={styles.progressLineFill} />
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => {
              const isPassed = idx <= activeStepIndex;
              return (
                <div 
                  key={idx}
                  data-step-index={idx}
                  className={`${styles.stepItem} ${isPassed ? styles.activeStep : ''}`}
                >
                  <div className={styles.stepNodeContainer}>
                    <div className={styles.stepDot}>
                      <span className={styles.dotInner} />
                    </div>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>

                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
