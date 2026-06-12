import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <div className={styles.bgContainer} aria-hidden="true">
      {/* Subtle grid overlay */}
      <div className={styles.grid} />

      {/* Gradient orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      {/* Floating particles */}
      <div className={styles.particles}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.particle} />
        ))}
      </div>
    </div>
  );
}
