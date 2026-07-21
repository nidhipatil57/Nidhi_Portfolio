import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTrophy, 
  FaGraduationCap, 
  FaClock, 
  FaUserTag, 
  FaCheckCircle,
  FaAward,
  FaFileAlt,
  FaSearchPlus,
  FaCode
} from 'react-icons/fa';
import styles from './JourneyModal.module.css';

export default function JourneyModal({ item, onClose }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeImage]);

  if (!item) return null;

  const isEducation = item.type === 'education' || item.type === 'milestone';

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div
          className={styles.modalCard}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close Case Study">
            <FaTimes />
          </button>

          {/* Modal Header */}
          <div className={styles.modalHeader} style={{ borderColor: `${item.accentColor}33` }}>
            <div className={styles.headerTop}>
              <span className={styles.typeBadge} style={{ background: `${item.accentColor}18`, color: item.accentColor, borderColor: `${item.accentColor}40` }}>
                {isEducation ? <FaGraduationCap /> : <FaTrophy />}
                {isEducation ? 'Engineering Milestone' : 'Developer Case Study'}
              </span>
              {item.statusBadge && (
                <span className={styles.statusBadge} style={{ background: `${item.accentColor}25`, color: item.accentColor, borderColor: `${item.accentColor}50` }}>
                  <FaAward /> {item.statusBadge}
                </span>
              )}
            </div>

            <h2 className={styles.modalTitle}>{item.title}</h2>
            {item.subtitle && <h4 className={styles.modalSubtitle}>{item.subtitle}</h4>}
            {item.projectName && <p className={styles.projectName}>Project: <strong>{item.projectName}</strong></p>}

            <div className={styles.metaRow}>
              {item.duration && (
                <div className={styles.metaItem}>
                  <FaClock className={styles.metaIcon} style={{ color: item.accentColor }} />
                  <span>Duration: {item.duration}</span>
                </div>
              )}
              {item.role && (
                <div className={styles.metaItem}>
                  <FaUserTag className={styles.metaIcon} style={{ color: item.accentColor }} />
                  <span>Role: {item.role}</span>
                </div>
              )}
            </div>
          </div>

          {/* Modal Content Scroll Body */}
          <div className={styles.modalBody}>
            {/* Gallery Showcase Section */}
            {(item.projectImage || item.certificateImage || item.additionalImage) && (
              <div className={styles.gallerySection}>
                <h3 className={styles.sectionHeading}>Visual Showcase & Media</h3>
                <div className={styles.galleryGrid}>
                  {item.projectImage && (
                    <div 
                      className={styles.mediaCard}
                      style={{ '--cert-accent': item.accentColor }}
                      onClick={() => setActiveImage({ src: item.projectImage, alt: item.title })}
                    >
                      <img src={item.projectImage} alt={item.title} className={styles.mediaImg} />
                      <div className={styles.holoBorderHighlight} />
                      <div className={styles.zoomIndicator}>
                        <FaSearchPlus /> Click to expand
                      </div>
                    </div>
                  )}
                  {item.certificateImage && (
                    <div 
                      className={`${styles.mediaCard} ${styles.certificateCard}`}
                      style={{ '--cert-accent': item.accentColor }}
                      onClick={() => setActiveImage({ src: item.certificateImage, alt: `${item.title} Certificate` })}
                    >
                      <span className={styles.mediaTag}>Official Certificate</span>
                      <img 
                        src={item.certificateImage} 
                        alt={`${item.title} Certificate`} 
                        className={`${styles.mediaImg} ${styles.certificateImg}`} 
                      />
                      <div className={styles.holoBorderHighlight} />
                      <div className={styles.zoomIndicator}>
                        <FaSearchPlus /> Click to expand
                      </div>
                    </div>
                  )}
                  {item.additionalImage && (
                    <div 
                      className={styles.mediaCard}
                      style={{ '--cert-accent': item.accentColor }}
                      onClick={() => setActiveImage({ src: item.additionalImage, alt: 'Additional recognition' })}
                    >
                      <span className={styles.mediaTag}>Recognition / Goodies</span>
                      <img src={item.additionalImage} alt="Additional recognition" className={styles.mediaImg} />
                      <div className={styles.holoBorderHighlight} />
                      <div className={styles.zoomIndicator}>
                        <FaSearchPlus /> Click to expand
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Overview / Story Section */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionHeading}>
                <FaFileAlt className={styles.headingIcon} style={{ color: item.accentColor }} />
                Overview & Story
              </h3>
              <p className={styles.descriptionText}>
                {item.fullDescription || item.description || item.shortDescription}
              </p>
            </div>

            {/* Key Achievements List */}
            {item.achievements && item.achievements.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionHeading}>
                  <FaCheckCircle className={styles.headingIcon} style={{ color: item.accentColor }} />
                  Key Highlights & Impact
                </h3>
                <ul className={styles.achievementsList}>
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className={styles.achievementItem}>
                      <span className={styles.bulletDot} style={{ background: item.accentColor }} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How It Works & Architecture Section */}
            {((item.features && item.features.length > 0 && JSON.stringify(item.features) !== JSON.stringify(item.achievements)) || (item.working && item.working.length > 0)) && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionHeading}>
                  <FaCode className={styles.headingIcon} style={{ color: item.accentColor }} />
                  Technical Architecture
                </h3>
                
                <div className={styles.detailsGrid}>
                  {item.features && item.features.length > 0 && JSON.stringify(item.features) !== JSON.stringify(item.achievements) && (
                    <div className={styles.detailsCol}>
                      <h4 className={styles.detailsSubheading}>Key Features</h4>
                      <ul className={styles.achievementsList}>
                        {item.features.map((feat, idx) => (
                          <li key={idx} className={styles.achievementItem}>
                            <span className={styles.bulletDot} style={{ background: item.accentColor }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.working && item.working.length > 0 && (
                    <div className={styles.detailsCol}>
                      <h4 className={styles.detailsSubheading}>System Execution Flow</h4>
                      <ol className={styles.workingList}>
                        {item.working.map((step, idx) => (
                          <li key={idx} className={styles.workingItem}>
                            <span className={styles.stepNumber} style={{ borderColor: `${item.accentColor}35`, color: item.accentColor }}>
                              {idx + 1}
                            </span>
                            <span className={styles.stepText}>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {item.technologies && item.technologies.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionHeading}>Technologies & Tools Used</h3>
                <div className={styles.techStackContainer}>
                  {item.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge} style={{ borderColor: `${item.accentColor}35`, color: item.accentColor }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action Links */}
            {(item.github || item.demo) && (
              <div className={styles.actionsRow}>
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className={styles.primaryActionBtn}>
                    <FaGithub />
                    <span>View GitHub Repository</span>
                    <FaExternalLinkAlt className={styles.externalIcon} />
                  </a>
                )}
                {item.demo && item.demo !== '#' && (
                  <a href={item.demo} target="_blank" rel="noopener noreferrer" className={styles.secondaryActionBtn}>
                    <FaExternalLinkAlt />
                    <span>Live Product Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {activeImage && (
        <motion.div
          key="fullscreen-overlay"
          className={styles.fullscreenOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <button 
            className={styles.fullscreenClose} 
            onClick={() => setActiveImage(null)}
            aria-label="Close image viewer"
          >
            <FaTimes />
          </button>
          <motion.img
            src={activeImage.src}
            alt={activeImage.alt}
            className={styles.fullscreenImage}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
