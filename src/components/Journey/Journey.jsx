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
          subtitle="Key moments and experiences shaping my growth as a student and developer."
        />

        <div className={styles.timelineContainer} ref={timelineRef}>
          {/* Background timeline line */}
          <div className={styles.timelineLine} />

          <div className={styles.milestonesGrid}>
            {journey.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className={`${styles.milestone} ${
                    item.isCurrent ? styles.milestoneActive : styles.milestoneCompleted
                  }`}
                >
                  {/* Date and Dot wrapper */}
                  <div className={styles.dotContainer}>
                    <span className={`${styles.milestoneDate} ${item.isCurrent ? styles.dateActive : ''}`}>
                      {item.date}
                    </span>
                    
                    <motion.div
                      className={styles.milestoneDot}
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

                  {/* Card Content wrapper */}
                  <ScrollReveal
                    variant="fadeUp"
                    delay={index * 0.08}
                    className={styles.scrollRevealWrapper}
                  >
                    <div
                      className={`${styles.milestoneContent} ${
                        item.isCurrent ? styles.cardActive : styles.cardCompleted
                      }`}
                    >
                      <div className={styles.cardHeader}>
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
                      {item.grades && (
                        <p className={styles.milestoneGrades}>{item.grades}</p>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

