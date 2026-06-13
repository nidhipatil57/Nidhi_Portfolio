import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import milestones from '../../data/achievements';
import styles from './Achievements.module.css';

function MilestoneNode({ milestone, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className={styles.milestoneNode} ref={ref}>
      {/* Connector line (not on last item) */}
      {index < total - 1 && (
        <div className={styles.connector}>
          <motion.div
            className={styles.connectorFill}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: 'easeOut' }}
          />
        </div>
      )}

      {/* Year label above */}
      <motion.div
        className={styles.yearLabel}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
      >
        {milestone.year}
      </motion.div>

      {/* Glowing dot */}
      <motion.div
        className={styles.dot}
        style={{
          '--dot-color': milestone.color,
          background: milestone.color,
          boxShadow: `0 0 0 6px ${milestone.color}18, 0 0 20px ${milestone.color}30`,
        }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 15,
          delay: 0.2 + index * 0.15,
        }}
      >
        <motion.div
          className={styles.dotPulse}
          style={{ borderColor: milestone.color }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Card below */}
      <motion.div
        className={styles.milestoneCard}
        style={{
          '--card-accent': milestone.color,
          borderColor: `${milestone.color}20`,
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
        whileHover={{
          y: -6,
          borderColor: `${milestone.color}40`,
          boxShadow: `0 12px 30px ${milestone.color}12`,
        }}
      >
        <div className={styles.cardEmoji}>{milestone.icon}</div>
        <div
          className={styles.cardValue}
          style={{ color: milestone.color }}
        >
          {milestone.value}
        </div>
        <h3 className={styles.cardTitle}>{milestone.title}</h3>
        <p className={styles.cardSubtitle}>{milestone.subtitle}</p>
      </motion.div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className={`section ${styles.achievements}`} id="achievements">
      <div className="container">
        <SectionTitle
          title="Milestones"
          subtitle="Key academic achievements that have shaped my journey so far"
        />

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className={styles.timeline}>
            {/* Horizontal line behind everything */}
            <div className={styles.timelineLine} />

            {/* Milestone nodes */}
            <div className={styles.milestonesRow}>
              {milestones.map((m, i) => (
                <MilestoneNode
                  key={m.id}
                  milestone={m}
                  index={i}
                  total={milestones.length}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
