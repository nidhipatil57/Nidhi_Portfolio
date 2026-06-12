import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      className={styles.sectionTitle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {label && (
        <div className={styles.label}>
          {label}
        </div>
      )}
      <h2 className={styles.heading}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.accentLine} />
    </motion.div>
  );
}
