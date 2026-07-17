import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import socialLinks from '../../data/socialLinks';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        {/* Left — Text Content */}
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.headline} variants={itemVariants}>
            Nidhi <span className={styles.headlineAccent}>Patil</span>
          </motion.h1>

          <motion.div className={styles.taglineBold} variants={itemVariants}>
            Aspiring Developer • AI Enthusiast • Problem Solver
          </motion.div>

          <motion.div className={styles.descriptionBlock} variants={itemVariants}>
            <p className={styles.descriptionPara}>
              A Second-Year <span className={styles.highlightPurple}>Artificial Intelligence & Data Science</span> student with a strong interest in software development and emerging technologies.
            </p>
            <p className={styles.descriptionPara}>
              Building projects and developing practical solutions through code.
            </p>
            <p className={styles.descriptionPara}>
              Currently focused on strengthening my Development Skills and DSA while continuously learning and growing.
            </p>
          </motion.div>

          <motion.div className={styles.cta} variants={itemVariants}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              See My Work <FaArrowRight />
            </button>
            <a className="btn btn-secondary" href="/resume.pdf" download>
              <FaDownload /> Resume
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={itemVariants}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                id={`hero-social-${link.name.toLowerCase()}`}
              >
                <link.icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.photoContainer}>
            <div className={styles.photoBg} />
            <img
              src="/nidhi-new-profile.png"
              alt="Nidhi Patil"
              className={styles.photo}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
