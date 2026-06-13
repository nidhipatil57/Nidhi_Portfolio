import { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import journey from '../../data/journey';
import styles from './Journey.module.css';

export default function Journey() {
  const timelineRef = useRef(null);

  return (
    <section className={`section ${styles.journey}`} id="journey">
      <div className="container">
        <SectionTitle
          label={null}
          title="My Journey"
          subtitle="Key moments and experiences 
          shaping my growth as a student and developer."
        />

        <div className={styles.timeline} ref={timelineRef}>
          {/* Background line */}
          <div className={styles.timelineLine} />

          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={`${styles.milestone} ${isLeft ? styles.milestoneLeft : styles.milestoneRight
                  } ${item.isCurrent ? styles.milestoneActive : styles.milestoneCompleted}`}
              >
                <ScrollReveal
                  variant={isLeft ? 'slideLeft' : 'slideRight'}
                  delay={index * 0.08}
                  className={styles.scrollRevealWrapper}
                >
                  <div
                    className={`${styles.milestoneContent} ${item.isCurrent ? styles.cardActive : styles.cardCompleted
                      }`}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.milestoneDate}>{item.date}</span>
                      {item.isCurrent && (
                        <span className={styles.badgeActive}>
                          <span className={styles.badgeActiveDot} />
                          Currently Here
                        </span>
                      )}
                    </div>

                    <div className={styles.titleWrapper}>
                      {IconComponent && (
                        <div className={styles.iconContainer}>
                          <IconComponent className={styles.itemIcon} />
                        </div>
                      )}
                      <h3 className={styles.milestoneTitle}>{item.title}</h3>
                    </div>

                    <p className={styles.milestoneDesc}>{item.description}</p>
                  </div>
                </ScrollReveal>

                <motion.div
                  className={`${styles.milestoneDot} ${item.isCurrent ? styles.milestoneDotCurrent : styles.milestoneDotStable
                    }`}
                  whileInView={{ scale: [0.8, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {item.isCurrent ? (
                    <div className={styles.pulseDot} title="I'm here" />
                  ) : (
                    <div className={styles.stableDot} />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

