import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaCubes, FaGithub } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import useInView from '../../hooks/useInView';
import useCountUp from '../../hooks/useCountUp';
import styles from './About.module.css';

const stats = [
  { icon: <FaCode />, number: 5, suffix: '+', label: 'Projects' },
  { icon: <FaLaptopCode />, number: 10, suffix: '+', label: 'Hackathons' },
  { icon: <FaCubes />, number: 5, suffix: '+', label: 'Technologies' },
  { icon: <FaGithub />, number: 300, suffix: '+', label: 'Contributions' },
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

function DottedGrid({ className }) {
  return (
    <svg className={className} width="96" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotted-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
    </svg>
  );
}



export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <section className={`section ${styles.about}`} id="about">
      {/* Background Dotted Grid */}
      <DottedGrid className={`${styles.dottedGrid} ${styles.gridTopRight}`} />

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
                {/* Dotted Grid behind photo - now inside the container so it scales & translates with it */}
                <DottedGrid className={`${styles.dottedGrid} ${styles.gridBottomLeft}`} />



                {/* Glowing corners on hover */}
                <div className={`${styles.corner} ${styles.topLeft}`} />
                <div className={`${styles.corner} ${styles.topRight}`} />
                <div className={`${styles.corner} ${styles.bottomLeft}`} />
                <div className={`${styles.corner} ${styles.bottomRight}`} />

                <img
                  src="aboutme.png"
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


              <h2 className={styles.headingTitle}>
                Curious mind. Creative soul. Builder at{' '}
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  heart.
                  <span className={styles.sparkleContainer}>
                    <SparklesIcon className={styles.sparkleIcon} />
                  </span>
                </span>
              </h2>

              <h3 className={styles.aboutSubtitle}>Driven by curiosity and a passion for building impactful technology.</h3>

              <p className={styles.aboutText}>
                I'm Nidhi, a second-year B.Tech student in Artificial Intelligence and Data Science at Vivekanand Education Society's Institute of Technology (VESIT), Mumbai.
              </p>

              <p className={styles.aboutText}>
                I'm currently strengthening my skills in Java, Data Structures & Algorithms, and Full-Stack Web Development while exploring Machine Learning. I enjoy building projects, participating in hackathons, and solving real-world problems through technology.
              </p>

              <p className={styles.aboutText}>
                My goal is to become a software engineer who builds reliable, scalable, and user-focused applications that create real-world impact.
                I'm actively seeking internship and open-source opportunities where I can contribute, collaborate, and continue growing as a developer.
              </p>

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

function SparklesIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.187L15 15l-5.187.813zM18.094 6.094L18 9l-.094-2.906L15 6l2.906-.094L18 3l.094 2.906L21 6l-2.906.094z"
      />
    </svg>
  );
}

