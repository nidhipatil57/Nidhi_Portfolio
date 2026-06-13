import styles from './Projects.module.css';

export default function ProjectPreview({ image, title, accentColor }) {
  if (image) {
    return (
      <div className={styles.previewContainer}>
        <img
          src={image}
          alt={`${title} preview`}
          className={styles.previewImage}
          loading="lazy"
        />
        <div
          className={styles.previewOverlayGradient}
          style={{
            background: `linear-gradient(135deg, ${accentColor}18 0%, transparent 60%)`,
          }}
        />
      </div>
    );
  }

  // Fallback: gradient with initial
  return (
    <div
      className={styles.previewFallback}
      style={{
        background: `linear-gradient(135deg, ${accentColor}22 0%, #12121a 100%)`,
      }}
    >
      <span className={styles.previewInitial} style={{ color: accentColor }}>
        {title?.charAt(0) || '?'}
      </span>
    </div>
  );
}
