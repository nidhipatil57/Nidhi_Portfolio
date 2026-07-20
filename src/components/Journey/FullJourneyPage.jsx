import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaTrophy, 
  FaAward, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaCode, 
  FaExternalLinkAlt,
  FaGithub,
  FaSun,
  FaMoon,
  FaChevronRight
} from 'react-icons/fa';
import { fullDeveloperJourney } from '../../data/developerJourney';
import JourneyModal from './JourneyModal';
import styles from './FullJourneyPage.module.css';

export default function FullJourneyPage({ onBackToPortfolio }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const isLight = localStorage.getItem('theme') === 'light';
    setIsLightMode(isLight);
    if (isLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const nextLight = !isLightMode;
    setIsLightMode(nextLight);
    if (nextLight) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (onBackToPortfolio) {
      onBackToPortfolio();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    }
  };

  return (
    <div className={styles.fullPageWrapper}>
      {/* Top Navbar */}
      <header className={styles.navHeader}>
        <div className={styles.navContainer}>
          <a href="/" onClick={handleBack} className={styles.backBtn}>
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </a>

          <div className={styles.navRight}>
            <button onClick={toggleTheme} className={styles.themeToggleBtn} aria-label="Toggle theme">
              {isLightMode ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.heroContent}
          >
            <span className={styles.heroBadge}>
              <FaCode /> Interactive Developer Timeline
            </span>
            <h1 className={styles.heroTitle}>My Developer Journey</h1>
            <p className={styles.heroSubtitle}>
              A comprehensive chronicle of hackathons, engineering milestones, awards, and major project builds that shape my growth as a developer.
            </p>

            <div className={styles.statsSummary}>
              <div className={styles.statPill}>
                <span className={styles.statVal}>9+</span>
                <span className={styles.statLbl}>Major Milestones</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.statVal}>8</span>
                <span className={styles.statLbl}>Hackathons Attended</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.statVal}>10.0</span>
                <span className={styles.statLbl}>Sem 1 SGPA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternating Developer Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          {/* Vertical Timeline Spine Line */}
          <div className={styles.timelineSpine} />

          <div className={styles.timelineList}>
            {fullDeveloperJourney.map((item, index) => {
              const isEven = index % 2 === 0; // Left side if even, Right side if odd
              const isAcademic = item.type === 'milestone' || item.type === 'education';

              return (
                <motion.div
                  key={item.id}
                  className={`${styles.timelineRow} ${isEven ? styles.rowLeft : styles.rowRight}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                >
                  {/* Timeline Center Animated Node */}
                  <div className={styles.nodeWrapper}>
                    <div
                      className={styles.nodeDot}
                      style={{ 
                        borderColor: item.accentColor, 
                        boxShadow: `0 0 15px ${item.accentColor}60`
                      }}
                    >
                      <span className={styles.innerDot} style={{ background: item.accentColor }} />
                    </div>
                  </div>

                  {/* Card Side Column */}
                  <div className={styles.cardCol}>
                    <div
                      className={styles.timelineCard}
                      onClick={() => setSelectedItem(item)}
                      style={{ borderTopColor: item.accentColor }}
                    >
                      <div className={styles.cardTopBar}>
                        <span className={styles.cardYear}>
                          <FaCalendarAlt className={styles.calIcon} />
                          {item.date || item.year}
                        </span>

                        {item.statusBadge && (
                          <span
                            className={styles.badgePill}
                            style={{
                              background: `${item.accentColor}18`,
                              color: item.accentColor,
                              borderColor: `${item.accentColor}35`
                            }}
                          >
                            {isAcademic ? <FaGraduationCap /> : <FaAward />}
                            {item.statusBadge}
                          </span>
                        )}
                      </div>

                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      {item.subtitle && <h4 className={styles.cardSubtitle}>{item.subtitle}</h4>}

                      <p className={styles.cardShortDesc}>
                        {item.shortDescription}
                      </p>

                      {item.technologies && item.technologies.length > 0 && (
                        <div className={styles.techStackList}>
                          {item.technologies.slice(0, 4).map((tech, idx) => (
                            <span key={idx} className={styles.miniTechPill}>
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 4 && (
                            <span className={styles.miniTechPill}>
                              +{item.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      <div className={styles.cardFooterHint}>
                        <span>View Full Case Study</span>
                        <FaChevronRight className={styles.chevronIcon} style={{ color: item.accentColor }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedItem && (
        <JourneyModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Bottom Footer navigation */}
      <footer className={styles.pageFooter}>
        <div className={styles.footerContainer}>
          <p>© 2026 Nidhi Patil — Built with React, TypeScript & Framer Motion</p>
          <a href="/" onClick={handleBack} className={styles.footerBackLink}>
            Return to Main Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
