import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaCubes, FaGithub } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import useInView from '../../hooks/useInView';
import useCountUp from '../../hooks/useCountUp';
import styles from './About.module.css';

const stats = [
  { icon: <FaCode />, number: 5, suffix: '+', label: 'Projects' },
  { icon: <FaLaptopCode />, number: 3, suffix: '+', label: 'Hackathons' },
  { icon: <FaCubes />, number: 10, suffix: '+', label: 'Technologies' },
  { icon: <FaGithub />, number: 50, suffix: '+', label: 'Contributions' },
];

function StatCard({ icon, number, suffix, label, delay, startCounting }) {
  const count = useCountUp(number, 2000, startCounting);

  return (
    <ScrollReveal variant="scaleIn" delay={delay}>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>{icon}</div>
        <div className={styles.statNumber}>
          {count}
          <span className={styles.statSuffix}>{suffix}</span>
        </div>
        <div className={styles.statLabel}>{label}</div>
      </div>
    </ScrollReveal>
  );
}

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <SectionTitle
          label={null}
          title="About Me"

        />

        <div className={styles.aboutGrid}>
          {/* Photo */}
          <ScrollReveal variant="slideLeft">
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <img
                  src="/nidhi-about-profile.jpg"
                  alt="Nidhi Patil"
                  className={styles.profileImage}
                  loading="lazy"
                />
                <div className={styles.imageBg} />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal variant="slideRight">
            <div className={styles.aboutContent}>
              <h3>I'm a curious student who fell in with coding.</h3>

              <p className={styles.aboutText}>
                Hey! I'm Nidhi — a First Year B.Tech student studying{' '}
                <span className={styles.aboutHighlight}>Artificial Intelligence and Data Science</span> @ VESIT.
              </p>

              <p className={styles.aboutText}>
                Right now, I'm focused on getting stronger with{' '}
                <span className={styles.aboutHighlight}>Web Development</span> and{' '}
                <span className={styles.aboutHighlight}>DSA</span> — while slowly
                dipping my toes into <span className={styles.aboutHighlight}>Machine Learning</span>. I enjoy hackathons,
                building projects, and honestly just figuring out how things work.
              </p>

              <p className={styles.aboutText}>
                My goal? - To become a well-rounded developer who builds things that actually matter.
                I'm actively looking for internships and open-source opportunities to grow and learn from
                real-world experience.
              </p>

              <div className={styles.educationBadge}>
                <span className={styles.badgeIcon}>🎓</span>
                <span className={styles.badgeText}>VESIT, Mumbai</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid} ref={statsRef}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} startCounting={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
