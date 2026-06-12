import socialLinks from '../../data/socialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGradient} />

      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerLogo}>
          Nidhi <span className={styles.footerLogoAccent}>Patil</span>
        </div>

        <div className={styles.footerSocials}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label={link.name}
            >
              <link.icon />
            </a>
          ))}
        </div>

        <div className={styles.footerDivider} />

        <p className={styles.footerText}>
          Designed & Developed with <span className={styles.footerHeart}>♥</span> by Nidhi Patil
        </p>

        <p className={styles.footerText}>
          © {currentYear} Nidhi Patil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
