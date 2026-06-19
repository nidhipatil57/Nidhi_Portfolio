import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTrophy, FaCertificate, FaArrowRight, FaCode, FaAward,
  FaUserFriends, FaRegClock, FaTimes, FaExternalLinkAlt,
  FaSearchPlus, FaCalendarAlt, FaGithub, FaCheckCircle,
  FaSignOutAlt
} from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import useInView from '../../hooks/useInView';
import { stats, hackathonsList } from '../../data/achievementsMuseum';
import styles from './Hackathons.module.css';

// --- Animated Count-Up Counter ---
function AnimatedCounter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ once: true, threshold: 0.1 });

  // Parse numeric part and suffix (e.g., '1 (special win)' -> 1 and ' (special win)')
  const stringVal = String(value);
  const numericMatch = stringVal.match(/^(\d+)(.*)$/);
  const numericVal = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * numericVal));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [numericVal, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix && (
        <span
          style={{
            fontSize: '0.45em',
            fontWeight: 500,
            marginLeft: '4px',
            opacity: 0.8,
            color: 'var(--text-primary)',
            WebkitTextFillColor: 'var(--text-primary)',
            verticalAlign: 'middle',
            display: 'inline-block'
          }}
        >
          {suffix}
        </span>
      )}
    </span>
  );
}

// --- Hackathon Card Component with Cursor Spotlight ---
function HackathonCard({ item, onImageClick }) {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  const hasImages = item.images && item.images.length > 0;
  const singleImage = item.certificateImage;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowPos({ x, y });
    setShowGlow(true);
  };

  const handleMouseLeave = () => {
    setShowGlow(false);
  };

  const glowStyle = {
    '--glow-color': item.glowColor || 'var(--accent-color)'
  };

  const getStatusBadgeClass = (status) => {
    if (status && status.includes('Winner')) {
      return styles.badgeWinner;
    }
    switch (status) {
      case 'Top 6 Finalist':
      case 'Finalist':
        return styles.badgeFinalist;
      case 'Completed':
        return styles.badgeCompleted;
      default:
        return styles.badgeParticipant;
    }
  };

  return (
    <div
      className={styles.hackathonCard}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight Hover Glow Effect */}
      {showGlow && (
        <div
          className={styles.cardHoverGlow}
          style={{
            left: `${glowPos.x}px`,
            top: `${glowPos.y}px`,
            background: `radial-gradient(circle 180px at center, ${item.glowColor || '#6366f1'}12, transparent 80%)`
          }}
        />
      )}

      {/* 1. Header (Title, Badge, Date) */}
      <div className={styles.cardHeader}>
        <div className={styles.headerTitleArea}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          {item.subtitle && <span className={styles.cardSubtitle}>{item.subtitle}</span>}
        </div>
        <div className={styles.headerMetaArea}>
          <span className={`${styles.badge} ${getStatusBadgeClass(item.status)}`}>
            {item.status}
          </span>
          <span className={styles.cardDate}><FaCalendarAlt /> {item.date}</span>
        </div>
      </div>

      <div className={styles.cardDivider} />

      {/* 2. Media Row (Left: What We Built, Right: Certificate) */}
      {item.id === 'google-cloud-study-jam' ? (
        <div className={styles.fullWidthCertPanel}>
          <h4 className={styles.panelHeading}><FaCertificate /> Certificate & Goodies</h4>
          <div className={styles.certContainerFull}>
            <div className={styles.splitImageContainerFull}>
              {item.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${styles.splitImageFrameFull} clickable`}
                  onClick={() => onImageClick(img.url, `${item.title} - ${img.label}`)}
                >
                  <img src={img.url} alt={img.label} className={styles.visualImage} />
                  <div className={styles.imageOverlay}>
                    <FaSearchPlus /> Zoom {img.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.cardMediaRow}>
          {/* Left Column: What We Built mockup */}
          <div className={styles.builtPanel}>
            <h4 className={styles.panelHeading}>
              <FaCode /> {item.isSolo ? 'What I Built' : 'What We Built'} {item.projectName && <span className={styles.builtProjectName}>— {item.projectName}</span>}
            </h4>

            {item.projectImage ? (
              <div className={styles.projectImageContainer}>
                <img
                  src={item.projectImage}
                  alt={`${item.title} Project`}
                  className={styles.projectImageNatural}
                />

                {/* Hover overlay with buttons */}
                <div className={styles.cardOverlay}>
                  <a
                    className={`${styles.overlayBtn} ${!item.demo ? styles.disabledBtn : ''}`}
                    href={item.demo || '#'}
                    target={item.demo ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!item.demo) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                    <span className={styles.overlayBtnTooltip}>
                      {item.demo ? 'Live Demo' : 'Live Demo (Unavailable)'}
                    </span>
                  </a>
                  <a
                    className={`${styles.overlayBtn} ${!item.github ? styles.disabledBtn : ''}`}
                    href={item.github || '#'}
                    target={item.github ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!item.github) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                    <span className={styles.overlayBtnTooltip}>
                      {item.github ? 'GitHub Repository' : 'GitHub (Unavailable)'}
                    </span>
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles.mockupContainer}>
                <div className={styles.mockupFrame}>
                  <div className={styles.mockupHeader}>
                    <div className={styles.mockupDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.mockupAddress}>localhost:3000</div>
                  </div>
                  <div className={styles.mockupBody}>
                    <div className={styles.mockupSidebar}>
                      <div className={styles.mockupSidebarItem} />
                      <div className={styles.mockupSidebarItem} />
                      <div className={styles.mockupSidebarItem} />
                    </div>
                    <div className={styles.mockupMain}>
                      <div className={styles.mockupMainHeader}>
                        <div className={styles.mockupTitleSkeleton} />
                        <div className={styles.mockupAvatarSkeleton} />
                      </div>
                      <div className={styles.mockupGrid}>
                        <div className={styles.mockupWidgetSkeleton} />
                        <div className={styles.mockupWidgetSkeleton} />
                        <div className={styles.mockupWidgetSkeleton} />
                      </div>
                      <div className={styles.mockupChartSkeleton}>
                        <div className={styles.mockupChartBar} style={{ height: '40%' }} />
                        <div className={styles.mockupChartBar} style={{ height: '70%' }} />
                        <div className={styles.mockupChartBar} style={{ height: '50%' }} />
                        <div className={styles.mockupChartBar} style={{ height: '90%' }} />
                        <div className={styles.mockupChartBar} style={{ height: '60%' }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mockupOverlayText}>
                    <span>Mockup Interface</span>
                  </div>
                </div>

                {/* Hover overlay with buttons */}
                <div className={styles.cardOverlay}>
                  <a
                    className={`${styles.overlayBtn} ${!item.demo ? styles.disabledBtn : ''}`}
                    href={item.demo || '#'}
                    target={item.demo ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!item.demo) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                    <span className={styles.overlayBtnTooltip}>
                      {item.demo ? 'Live Demo' : 'Live Demo (Unavailable)'}
                    </span>
                  </a>
                  <a
                    className={`${styles.overlayBtn} ${!item.github ? styles.disabledBtn : ''}`}
                    href={item.github || '#'}
                    target={item.github ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!item.github) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                    <span className={styles.overlayBtnTooltip}>
                      {item.github ? 'GitHub Repository' : 'GitHub (Unavailable)'}
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Certificate */}
          <div className={styles.certPanel}>
            <h4 className={styles.panelHeading}><FaCertificate /> Certificate</h4>

            {hasImages || singleImage ? (
              <div className={styles.certificateImageContainer}>
                {hasImages ? (
                  <div className={styles.splitImagesNatural}>
                    {item.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`${styles.splitImageFrameNatural} clickable`}
                        onClick={() => onImageClick(img.url, `${item.title} - ${img.label}`)}
                      >
                        <img src={img.url} alt={img.label} className={styles.visualImageNatural} />
                        <div className={styles.imageOverlay}>
                          <FaSearchPlus /> Zoom {img.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`${styles.certificateImageFrame} clickable`}
                    onClick={() => onImageClick(singleImage, item.title)}
                  >
                    <img src={singleImage} alt={item.title} className={styles.visualImageNatural} />
                    <div className={styles.imageOverlay}>
                      <FaSearchPlus /> Zoom Certificate
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.certContainer}>
                <div className={styles.verifiedPlaceholder}>
                  <div className={styles.placeholderGlow} />
                  <FaCheckCircle className={styles.placeholderIcon} />
                  <span className={styles.placeholderText}>Participation Verified</span>
                  <span className={styles.placeholderSub}>VESIT Academic Board</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.cardDivider} />

      {/* 3. Details Row (Info & How We Solved) */}
      <div className={styles.cardDetailsRow}>
        {/* Left Side: Info about Hackathon & Problem */}
        <div className={styles.infoSection}>
          <h4 className={styles.detailsHeading}>
            <span>✦</span> {item.infoHeading || 'Info about the Hackathon, Problem'}
          </h4>
          <p className={styles.detailsParagraph}>
            {item.infoText}
          </p>
        </div>

        {/* Right Side: How we solved the problem (Features & Working) */}
        <div className={styles.solutionSection}>
          <h4 className={styles.detailsHeading}>
            <span>✦</span> {item.solutionHeading || 'How we solved the problem'}
          </h4>
          <div className={styles.solutionSubgrid}>
            <div className={styles.solutionSubBlock}>
              <h5 className={styles.solutionSubHeading}>Features</h5>
              <ul className={styles.solutionList}>
                {item.features.map((feat, idx) => (
                  <li key={idx} className={styles.solutionListItem}>
                    <span className={styles.solutionDot} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.solutionSubBlock}>
              <h5 className={styles.solutionSubHeading}>Working</h5>
              <ul className={styles.solutionList}>
                {item.working.map((step, idx) => (
                  <li key={idx} className={styles.solutionListItem}>
                    <span className={styles.solutionDot} />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function Hackathons() {
  const [lightbox, setLightbox] = useState({ isOpen: false, imgUrl: '', title: '' });
  const [particles, setParticles] = useState([]);

  // Generate background particles dynamically
  useEffect(() => {
    const colors = ['#ec4899', '#3b82f6', '#f43f5e', '#eab308', '#10b981', '#6366f1', '#06b6d4', '#8b5cf6'];
    
    // Generate a small, clean number of particles (32 particles) spread everywhere
    const generated = Array.from({ length: 32 }).map((_, i) => {
      const durationVal = 8 + Math.random() * 8; // calm, pleasant speed (8s to 16s)
      const delayVal = -Math.random() * durationVal;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`, // spread everywhere on the screen
        delay: `${delayVal}s`,
        duration: `${durationVal}s`,
        driftX: `${-25 + Math.random() * 50}px`, // visible gentle drift
        driftY: `${-25 + Math.random() * 50}px`,
        size: `${4 + Math.random() * 6}px`, // slightly larger to be visible on the sides
        opacity: 0.3 + Math.random() * 0.45, // clear but calm visibility
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });

    setParticles(generated);
  }, []);

  const handleOpenLightbox = (url, title) => {
    setLightbox({ isOpen: true, imgUrl: url, title });
  };

  const handleCloseLightbox = () => {
    setLightbox({ isOpen: false, imgUrl: '', title: '' });
  };

  // Keyboard listener for Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock screen scroll when lightbox is active
  useEffect(() => {
    if (lightbox.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.isOpen]);

  return (
    <section className={`section ${styles.hackathons}`} id="hackathons">
      {/* Sci-Fi / Digital Space Background with Grid & Floating Particles */}
      <div className={styles.spaceBackground}>
        <div className={styles.gridOverlay} />
        <div className={styles.radialBlob1} />
        <div className={styles.radialBlob2} />
        <div className={styles.particlesContainer}>
          {particles.map((p) => (
            <div
              key={p.id}
              className={styles.particle}
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                color: p.color,
                boxShadow: `0 0 8px ${p.color}, 0 0 15px ${p.color}`,
                '--drift-x': p.driftX,
                '--drift-y': p.driftY,
                '--max-opacity': p.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Exit Button */}
        <div className={styles.exitBar}>
          <button
            className={styles.exitBtn}
            onClick={() => {
              window.history.pushState({}, '', window.location.pathname);
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            <FaSignOutAlt /> Exit Section
          </button>
        </div>

        {/* Section Heading */}
        <SectionTitle
          title="Hackathons, Workshops, Achievements and Certifications"
          subtitle="A showcase of my hackathons, workshops, coding skills, achievements and certifications"
        />

        {/* 1. Stats strip */}
        <div className={styles.statsContainer}>
          <ScrollReveal variant="fadeUp" delay={0.05}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <FaTrophy className={styles.statIcon} style={{ color: '#f59e0b' }} />
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stats.hackathonsAttended} />
                </div>
                <div className={styles.statLabel}>Attended</div>
              </div>

              <div className={styles.statCard}>
                <FaAward className={styles.statIcon} style={{ color: '#10b981' }} />
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stats.wins} />
                </div>
                <div className={styles.statLabel}>Wins</div>
              </div>

              <div className={styles.statCard}>
                <FaCertificate className={styles.statIcon} style={{ color: '#3b82f6' }} />
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stats.finalistPositions} />
                </div>
                <div className={styles.statLabel}>Finalist</div>
              </div>

              <div className={styles.statCard}>
                <FaCode className={styles.statIcon} style={{ color: '#a855f7' }} />
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stats.projectsBuilt} />
                </div>
                <div className={styles.statLabel}>Projects</div>
              </div>

              <div className={styles.statCard}>
                <FaRegClock className={styles.statIcon} style={{ color: '#f43f5e' }} />
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stats.totalBuildHours} />+
                </div>
                <div className={styles.statLabel}>Build Hours</div>
              </div>

              <div className={styles.statCard}>
                <FaUserFriends className={styles.statIcon} style={{ color: '#06b6d4' }} />
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stats.teammatesCollaborated} />
                </div>
                <div className={styles.statLabel}>Collab Partners</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. Premium Interactive Achievements Gallery */}
        <div className={styles.sectionWrapper}>
          <div className={styles.galleryHeadingContainer}>
            <h3 className={styles.subHeading}>Achievements Gallery</h3>
          </div>

          <div className={styles.cardsList}>
            {hackathonsList.map((item) => (
              <HackathonCard key={item.id} item={item} onImageClick={handleOpenLightbox} />
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Image Viewer */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            {/* Close Button */}
            <button className={styles.lightboxClose} onClick={handleCloseLightbox} aria-label="Close Lightbox">
              <FaTimes />
            </button>

            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.imgUrl} alt={lightbox.title} className={styles.lightboxImage} />
              <div className={styles.lightboxInfo}>
                <h4 className={styles.lightboxTitle}>{lightbox.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
