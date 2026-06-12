import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import journey from '../../data/journey';
import styles from './Journey.module.css';

export default function Journey() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      // How far from top of viewport to bottom of timeline
      const scrolled = windowHeight - rect.top;
      const percentage = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`section ${styles.journey}`} id="journey">
      <div className="container">
        <SectionTitle
          label="timeline"
          title="My Progress"
          subtitle="Key milestones that mark my journey as a student and developer"
        />

        <div className={styles.timeline} ref={timelineRef}>
          {/* Background line */}
          <div className={styles.timelineLine} />
          {/* Progress line */}
          <div
            className={styles.timelineProgress}
            style={{ height: `${progress * 100}%` }}
          />

          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.id}
                variant={isLeft ? 'slideLeft' : 'slideRight'}
                delay={index * 0.08}
              >
                <div
                  className={`${styles.milestone} ${
                    isLeft ? styles.milestoneLeft : styles.milestoneRight
                  }`}
                >
                  <div className={styles.milestoneContent}>
                    <div className={styles.milestoneDate}>{item.date}</div>
                    <h3 className={styles.milestoneTitle}>{item.title}</h3>
                    <p className={styles.milestoneDesc}>{item.description}</p>
                  </div>

                  <motion.div
                    className={`${styles.milestoneDot} ${
                      progress > index / journey.length
                        ? styles.milestoneDotActive
                        : ''
                    }`}
                    style={{ color: item.color }}
                    whileInView={{ scale: [0.8, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Icon />
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
