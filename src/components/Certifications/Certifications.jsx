import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaAward, FaCheckCircle, FaSearchPlus } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import certifications from '../../data/certifications';
import styles from './Certifications.module.css';

// Card sub-component for the main grid
function CertificationCard({ cert, index, onClick }) {
  const Icon = cert.issuerIcon;

  return (
    <ScrollReveal delay={index * 0.12} variant="fadeUp">
      <motion.div
        className={styles.certCard}
        style={{ '--cert-accent': cert.accentColor }}
        onClick={onClick}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className={styles.cardGlow} />
        
        {/* Certificate Mini-preview / Decor */}
        <div className={styles.cardHeader}>
          <div className={styles.cardImageContainer}>
            <img src={cert.image} alt={cert.title} className={styles.cardImageMini} />
            <div className={styles.cardImageOverlay}>
              <span className={styles.viewBadge}>
                <FaSearchPlus /> View Certificate
              </span>
            </div>
          </div>
          <div className={styles.logoBadge} style={{ backgroundColor: `${cert.accentColor}15` }}>
            <Icon className={styles.logoIcon} style={{ color: cert.accentColor }} />
          </div>
        </div>

        {/* Card Details */}
        <div className={styles.cardBody}>
          <span className={styles.cardDate}>{cert.date}</span>
          <h3 className={styles.cardTitle}>{cert.title}</h3>
          <p className={styles.cardIssuer}>{cert.issuer}</p>
          
          {/* Skill Pills preview */}
          <div className={styles.skillPills}>
            {cert.skills.slice(0, 3).map((skill) => (
              <span key={skill} className={styles.skillPill}>
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className={styles.skillPillMore}>+{cert.skills.length - 3}</span>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

// Holo image container for the modal
function HoloCertificateImage({ src, title }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isFullscreen) return;

    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Convert to percentage
    const percentX = (x / box.width) * 100;
    const percentY = (y / box.height) * 100;
    setCoords({ x: percentX, y: percentY });

    // 3D rotation calculation
    const rotX = -((y - box.height / 2) / (box.height / 2)) * 10; // max 10deg
    const rotY = ((x - box.width / 2) / (box.width / 2)) * 10; // max 10deg
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 50, y: 50 });
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div 
        className={styles.holoContainer}
        onClick={() => setIsFullscreen(true)}
        title="Click to view full screen"
      >
        <motion.div
          ref={cardRef}
          className={styles.holoCard}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          <img src={src} alt={title} className={styles.holoImage} />
          
          {/* Shine effect layer */}
          <div 
            className={styles.holoShine} 
            style={{
              background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
            }}
          />
          
          {/* Border highlight layer */}
          <div className={styles.holoBorderHighlight} />
          
          <div className={styles.zoomIndicator}>
            <FaSearchPlus /> Click to expand
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            className={styles.fullscreenOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            <button className={styles.fullscreenClose} onClick={() => setIsFullscreen(false)}>
              <FaTimes />
            </button>
            <motion.img 
              src={src} 
              alt={title} 
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
    </>
  );
}

// Certificate Detailed Modal
function CertificationModal({ cert, onClose }) {
  const Icon = cert.issuerIcon;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContent}
        style={{ '--cert-accent': cert.accentColor }}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className={styles.modalLayout}>
          {/* Left Side: Certificate Preview with Holo effect */}
          <div className={styles.modalLeft}>
            <HoloCertificateImage src={cert.image} title={cert.title} />
          </div>

          {/* Right Side: Detailed Description */}
          <div className={styles.modalRight}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIssuerBadge} style={{ backgroundColor: `${cert.accentColor}12` }}>
                <Icon className={styles.modalIssuerIcon} style={{ color: cert.accentColor }} />
              </div>
              <div>
                <h4 className={styles.modalIssuerName}>{cert.issuer}</h4>
                <p className={styles.modalDate}>{cert.date}</p>
              </div>
            </div>

            <h3 className={styles.modalTitle}>{cert.title}</h3>
            
            {cert.credentialId && (
              <div className={styles.credentialBadge}>
                <span className={styles.credentialLabel}>Credential ID:</span>
                <code className={styles.credentialCode}>{cert.credentialId}</code>
              </div>
            )}

            <div className={styles.divider} />

            <div className={styles.modalScrollArea}>
              <div className={styles.modalSection}>
                <h5 className={styles.sectionHeader}>
                  <FaAward className={styles.sectionIcon} style={{ color: cert.accentColor }} /> Description
                </h5>
                <p className={styles.modalDesc}>{cert.description}</p>
              </div>

              {cert.modules && cert.modules.length > 0 && (
                <div className={styles.modalSection}>
                  <h5 className={styles.sectionHeader}>
                    <FaCheckCircle className={styles.sectionIcon} style={{ color: cert.accentColor }} /> Program Modules
                  </h5>
                  <div className={styles.modulesGrid}>
                    {cert.modules.map((mod, i) => (
                      <div key={i} className={styles.moduleItem}>
                        <span className={styles.bullet} style={{ backgroundColor: cert.accentColor }} />
                        <span className={styles.moduleText}>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.modalSection}>
                <h5 className={styles.sectionHeader}>Skills Mastered</h5>
                <div className={styles.skillsContainer}>
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={styles.modalSkillPill}
                      style={{ 
                        borderColor: `${cert.accentColor}25`,
                        color: cert.accentColor,
                        backgroundColor: `${cert.accentColor}06`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            {cert.verifyLink && (
              <div className={styles.modalActions}>
                <a 
                  href={cert.verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{
                    background: `linear-gradient(135deg, ${cert.accentColor} 0%, ${cert.accentColor}dd 100%)`,
                    boxShadow: `0 4px 15px ${cert.accentColor}33`
                  }}
                >
                  <FaExternalLinkAlt /> Verify Credential
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent scroll on body when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className="container">
        <SectionTitle
          title="Certifications"
          subtitle="Professional milestones, awards, and credentials validating my continuous learning journey"
        />

        {/* Certifications Grid */}
        <div className={styles.certGrid}>
          {certifications.map((cert, i) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={i}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Detail Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificationModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
