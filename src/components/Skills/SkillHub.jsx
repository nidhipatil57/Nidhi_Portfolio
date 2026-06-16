import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, FaRobot, 
  FaLightbulb, FaMap, FaChartLine, FaProjectDiagram,
  FaCalendarAlt, FaAward, FaListUl, FaDatabase
} from 'react-icons/fa';
import { detailedSkills } from '../../data/detailedSkills';
import styles from './SkillHub.module.css';
import SparkleCursor from '../common/SparkleCursor';

// --- Static Particles Data to maintain React purity ---
const STATIC_PARTICLES = [
  { id: 0, left: '12%', duration: '7s', drift: '30px', maxOpacity: 0.35, delay: '-1s' },
  { id: 1, left: '45%', duration: '11s', drift: '-20px', maxOpacity: 0.22, delay: '-4s' },
  { id: 2, left: '78%', duration: '9s', drift: '45px', maxOpacity: 0.4, delay: '-2s' },
  { id: 3, left: '23%', duration: '13s', drift: '-15px', maxOpacity: 0.18, delay: '-7s' },
  { id: 4, left: '89%', duration: '6s', drift: '25px', maxOpacity: 0.3, delay: '-3s' },
  { id: 5, left: '6%', duration: '14s', drift: '-35px', maxOpacity: 0.25, delay: '-5s' },
  { id: 6, left: '56%', duration: '8s', drift: '10px', maxOpacity: 0.45, delay: '-0s' },
  { id: 7, left: '34%', duration: '12s', drift: '-25px', maxOpacity: 0.28, delay: '-6s' },
  { id: 8, left: '67%', duration: '10s', drift: '40px', maxOpacity: 0.32, delay: '-8s' },
  { id: 9, left: '92%', duration: '7s', drift: '-30px', maxOpacity: 0.15, delay: '-2s' },
  { id: 10, left: '18%', duration: '15s', drift: '20px', maxOpacity: 0.37, delay: '-4s' },
  { id: 11, left: '51%', duration: '9s', drift: '-10px', maxOpacity: 0.24, delay: '-1s' },
  { id: 12, left: '74%', duration: '11s', drift: '35px', maxOpacity: 0.42, delay: '-3s' },
  { id: 13, left: '39%', duration: '13s', drift: '-40px', maxOpacity: 0.29, delay: '-9s' },
  { id: 14, left: '85%', duration: '8s', drift: '15px', maxOpacity: 0.31, delay: '-5s' },
  { id: 15, left: '2%', duration: '10s', drift: '-20px', maxOpacity: 0.26, delay: '-0s' },
  { id: 16, left: '61%', duration: '12s', drift: '30px', maxOpacity: 0.38, delay: '-7s' },
  { id: 17, left: '27%', duration: '6s', drift: '-15px', maxOpacity: 0.21, delay: '-2s' },
  { id: 18, left: '80%', duration: '14s', drift: '45px', maxOpacity: 0.33, delay: '-6s' },
  { id: 19, left: '48%', duration: '9s', drift: '-30px', maxOpacity: 0.19, delay: '-3s' },
  { id: 20, left: '96%', duration: '11s', drift: '10px', maxOpacity: 0.44, delay: '-8s' },
  { id: 21, left: '15%', duration: '13s', drift: '-25px', maxOpacity: 0.27, delay: '-1s' },
  { id: 22, left: '70%', duration: '7s', drift: '20px', maxOpacity: 0.36, delay: '-5s' },
  { id: 23, left: '33%', duration: '15s', drift: '-35px', maxOpacity: 0.23, delay: '-4s' },
  { id: 24, left: '83%', duration: '10s', drift: '15px', maxOpacity: 0.34, delay: '-2s' }
];

// --- Typewriter Effect Component ---
function TypewriterText({ text, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    
    let index = 0;
    let interval;
    
    const timeout = setTimeout(() => {
      setDisplayedText('');
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, 0);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, started]);

  return (
    <span ref={containerRef}>
      {displayedText}
      {displayedText.length < text.length && <span className={styles.aiCursor} />}
    </span>
  );
}

// --- Animated Counter Component ---
function AnimatedCounter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, started]);

  return <span ref={ref}>{count}</span>;
}

// --- Interactive Galaxy Visualization Component ---
function GalaxyMap({ skillName, initialNodes, skillColor }) {
  // Initialize nodes with offsets around the center (0,0) dynamically on mount
  const [nodes, setNodes] = useState(() => {
    const radius = 130;
    return initialNodes.map((node, i) => {
      const angle = (i * 2 * Math.PI) / initialNodes.length;
      return {
        ...node,
        x: Math.round(Math.cos(angle) * radius),
        y: Math.round(Math.sin(angle) * radius),
      };
    });
  });
  const frameRef = useRef(null);

  const handleDrag = (index, info) => {
    setNodes((prev) =>
      prev.map((node, i) => {
        if (i === index) {
          return {
            ...node,
            x: node.x + info.delta.x,
            y: node.y + info.delta.y,
          };
        }
        return node;
      })
    );
  };

  return (
    <div className={styles.galaxyFrame} ref={frameRef}>
      <div className={styles.galaxyInstruction}>DRAG SATELLITE NODES TO ORBIT</div>

      {/* SVG Connecting Lines */}
      <svg className={styles.svgLinesOverlay} viewBox="-250 -200 500 400">
        {nodes.map((node) => (
          <line
            key={node.name}
            x1="0"
            y1="0"
            x2={node.x}
            y2={node.y}
            stroke={skillColor}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Center Main Node */}
      <div className={styles.centerNode} style={{ transform: 'translate(0, 0)' }}>
        {skillName}
      </div>

      {/* Satellites */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.name}
          className={styles.satelliteNode}
          drag
          dragConstraints={frameRef}
          dragMomentum={false}
          onDrag={(e, info) => handleDrag(i, info)}
          style={{
            x: node.x - 38, // offset half width (76px)
            y: node.y - 38, // offset half height
          }}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.05 }}
        >
          <span>{node.name}</span>
          <span className={styles.satelliteType}>{node.type}</span>
        </motion.div>
      ))}
    </div>
  );
}

// --- Main Component ---
export default function SkillHub({ activeSkill, onClose, onNavigate }) {
  const data = detailedSkills[activeSkill];
  
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedNodes, setExpandedNodes] = useState({ 0: true }); // Keep first node expanded by default
  const [selectedConcept, setSelectedConcept] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const contentRef = useRef(null);
  const dropdownRef = useRef(null);

  // Click outside dropdown handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Setup intersection observer to highlight sticky sidebar links
  useEffect(() => {
    const sections = [
      'overview', 'journey', 'roadmap', 'projects', 
      'achievements', 'statistics', 'currently-learning', 
      'ecosystem', 'summary'
    ];

    const observerOptions = {
      root: contentRef.current,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in upper-middle of pane
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSkill]);

  if (!data) return null;

  const SkillIcon = data.icon;
  const accentColor = data.color;
  const accentColorGlow = `${accentColor}25`;

  // Navigate to section smoothly inside content pane
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleRoadmapNode = (index) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // List of all keys for dropdown navigation, filtered to match the active skill's category
  const categorySkills = Object.keys(detailedSkills).filter(
    (key) => detailedSkills[key].category === data.category
  );

  // Generate 25 floating particles
  const particles = STATIC_PARTICLES;

  return (
    <motion.div 
      className={styles.hubOverlay}
      style={{
        '--skill-color': accentColor,
        '--skill-color-glow': accentColorGlow
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <SparkleCursor />
      {/* Sci-Fi Ambient Background */}
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
                '--duration': p.duration,
                '--drift': p.drift,
                '--max-opacity': p.maxOpacity,
                animationDelay: p.delay
              }}
            />
          ))}
        </div>
      </div>

      {/* Left Sticky Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <button className={styles.backBtn} onClick={onClose}>
            <FaArrowLeft /> Exit Hub
          </button>
          
          <div className={styles.customDropdownWrapper} ref={dropdownRef}>
            <h4 className={styles.skillSelectorTitle}>CORE EXPLORATION</h4>
            <button 
              className={styles.dropdownTrigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={styles.dropdownTriggerLeft}>
                <SkillIcon className={styles.dropdownIcon} style={{ color: accentColor }} />
                <span>{activeSkill}</span>
              </span>
              <span className={`${styles.dropdownChevron} ${dropdownOpen ? styles.dropdownChevronOpen : ''}`}>▼</span>
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  className={styles.dropdownList}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {categorySkills.map((sk) => {
                    const skillData = detailedSkills[sk];
                    const SkillDataIcon = skillData.icon;
                    const isSelected = sk === activeSkill;
                    return (
                      <button
                        key={sk}
                        className={`${styles.dropdownItem} ${isSelected ? styles.dropdownItemActive : ''}`}
                        onClick={() => {
                          onNavigate(sk);
                          setDropdownOpen(false);
                        }}
                        style={{ '--item-color': skillData.color }}
                      >
                        <SkillDataIcon className={styles.itemIcon} style={{ color: skillData.color }} />
                        <span className={styles.itemName}>{sk}</span>
                        {isSelected && <span className={styles.itemActiveIndicator} />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          <button 
            className={`${styles.navItem} ${activeSection === 'overview' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('overview')}
          >
            <FaLightbulb /> Overview
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'journey' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('journey')}
          >
            <FaCalendarAlt /> Journey
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'roadmap' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('roadmap')}
          >
            <FaMap /> Knowledge Map
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'projects' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('projects')}
          >
            <FaDatabase /> Projects
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'achievements' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('achievements')}
          >
            <FaAward /> Achievements
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'statistics' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('statistics')}
          >
            <FaChartLine /> Statistics
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'currently-learning' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('currently-learning')}
          >
            <FaListUl /> Current Focus
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'ecosystem' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('ecosystem')}
          >
            <FaProjectDiagram /> Ecosystem
          </button>
          <button 
            className={`${styles.navItem} ${activeSection === 'summary' ? styles.navItemActive : ''}`}
            onClick={() => handleScrollToSection('summary')}
          >
            <FaRobot /> Summary
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.systemStatus}>
            <span className={styles.statusIndicator} />
            <span>KNOWLEDGE CORE ONLINE</span>
          </div>
        </div>
      </aside>

      {/* Right Scrollable Content Pane */}
      <main className={styles.hubContent} ref={contentRef}>
        
        {/* --- Header Section (Always at the top) --- */}
        <header className={`${styles.sectionWrapper} ${styles.glassCard}`} style={{ marginTop: '1rem' }}>
          <div className={styles.headerGrid}>
            <div className={styles.headerIconWrapper}>
              <span className={styles.headerIcon} style={{ color: accentColor }}>
                <SkillIcon />
              </span>
              <div className={styles.headerIconGlow} />
            </div>

            <div className={styles.headerInfo}>
              <span className={styles.categoryTag}>{data.category}</span>
              <h1 className={styles.headerTitle}>{data.name}</h1>
              <div className={styles.headerMeta}>
                <div className={styles.metaItem}>
                  <span>Experience:</span>
                  <strong style={{ color: '#fff' }}>{data.experience}</strong>
                </div>
                <div className={styles.metaItem}>
                  <span>Status:</span>
                  <strong style={{ color: '#10b981' }}>{data.status}</strong>
                </div>
              </div>
            </div>

            <div className={styles.headerProficiency}>
              <div className={styles.profRingContainer}>
                <svg width="80" height="80">
                  <circle className={styles.ringBg} cx="40" cy="40" r="34" />
                  <motion.circle 
                    className={styles.ringFill} 
                    cx="40" 
                    cy="40" 
                    r="34"
                    strokeDasharray={2 * Math.PI * 34}
                    initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - data.proficiency / 100) }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  />
                </svg>
                <div className={styles.profValue}>{data.proficiency}%</div>
              </div>
              <span className={styles.profLabel}>Proficiency</span>
            </div>
          </div>
        </header>

        {/* --- 1. Interactive Overview --- */}
        <section id="overview" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Interactive Overview</h2>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}>💻</div>
              <h3 className={styles.overviewCardTitle}>What is it?</h3>
              <p className={styles.overviewCardText}>{data.overview.what}</p>
            </div>
            <div className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}>🎯</div>
              <h3 className={styles.overviewCardTitle}>Why I learned it</h3>
              <p className={styles.overviewCardText}>{data.overview.why}</p>
            </div>
            <div className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}>⚡</div>
              <h3 className={styles.overviewCardTitle}>How I use it</h3>
              <p className={styles.overviewCardText}>{data.overview.how}</p>
            </div>
            <div className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}>📂</div>
              <h3 className={styles.overviewCardTitle}>Where I use it</h3>
              <p className={styles.overviewCardText}>{data.overview.where}</p>
            </div>
          </div>
        </section>

        {/* --- 2. Learning Journey Timeline --- */}
        <section id="journey" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Learning Journey</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine} />
            {data.journey.map((item, index) => (
              <div key={index} className={styles.timelineNode}>
                <div className={`${styles.timelineIndicator} ${index === data.journey.length - 1 ? styles.timelineIndicatorActive : ''}`}>
                  <div className={styles.timelineIndicatorGlow} />
                </div>
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <span className={styles.timelinePhase}>{item.phase}</span>
                </div>
                <div className={styles.timelineCard}>
                  <h3 className={styles.timelineCardTitle}>{item.title}</h3>
                  <p className={styles.timelineCardText}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. Knowledge Structure Map --- */}
        <section id="roadmap" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Knowledge Structure Map</h2>
          <div className={styles.roadmapTree}>
            {data.roadmap.map((chapter, cIndex) => {
              const isExpanded = !!expandedNodes[cIndex];
              return (
                <div key={cIndex} className={`${styles.roadmapNode} ${isExpanded ? styles.roadmapNodeExpanded : ''}`}>
                  <div className={styles.nodeHeader} onClick={() => toggleRoadmapNode(cIndex)}>
                    <div className={styles.nodeLeft}>
                      <span className={styles.nodeIndex}>0{cIndex + 1}.</span>
                      <h3 className={styles.nodeTitle}>{chapter.title}</h3>
                    </div>
                    <span className={`${styles.nodeToggleIcon} ${isExpanded ? styles.nodeToggleIconRotated : ''}`}>
                      ▼
                    </span>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        className={styles.nodeContent}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className={styles.leafGrid}>
                          {chapter.items.map((leaf, lIndex) => (
                            <div key={lIndex} className={styles.leafChip}>
                              <div className={styles.leafBullet} />
                              <span>{leaf}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- Concepts Mastered --- */}
        {data.masteredConcepts && data.masteredConcepts.length > 0 && (
          <section className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>Concepts Mastered</h2>
            <div className={styles.conceptsContainer}>
              <div className={styles.chipsFlex}>
                {data.masteredConcepts.map((concept, idx) => (
                  <button
                    key={concept.name}
                    className={`${styles.conceptChip} ${selectedConcept === idx ? styles.conceptChipActive : ''}`}
                    onClick={() => setSelectedConcept(idx)}
                  >
                    <span>{concept.name}</span>
                  </button>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedConcept}
                  className={styles.conceptDetailBox}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>
                    {data.masteredConcepts[selectedConcept].name}
                  </strong>
                  {data.masteredConcepts[selectedConcept].description}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* --- 4. Project Showcase --- */}
        <section id="projects" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Related Projects</h2>
          <div className={styles.projectsGrid}>
            {data.projects.map((proj) => (
              <article key={proj.id} className={styles.projectCard}>
                <div className={styles.projectImageWrapper}>
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className={styles.projectImg} />
                  ) : (
                    <div className={styles.projectFallbackImg}>
                      <SkillIcon />
                    </div>
                  )}
                  <div className={styles.projectTagline}>{proj.title} Showcase</div>
                </div>
                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <p className={styles.projectDesc}>{proj.description}</p>
                  
                  <div className={styles.projectTechRow}>
                    {proj.tech.map((t) => (
                      <span key={t} className={styles.projectTechBadge}>{t}</span>
                    ))}
                  </div>

                  <div className={styles.projectInsights}>
                    <div>
                      <div className={styles.insightLabel}>Key Learnings</div>
                      <p className={styles.insightText}>{proj.learnings}</p>
                    </div>
                    <div>
                      <div className={styles.insightLabel}>Challenge Solved</div>
                      <p className={styles.insightText}>{proj.challenges}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- 5. Achievements Section --- */}
        <section id="achievements" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Key Achievements</h2>
          <div className={styles.achievementsGrid}>
            {data.achievements.map((ach, idx) => (
              <div key={idx} className={styles.achievementCard}>
                <div className={styles.achievementBadge}>🏆</div>
                <div className={styles.achievementInfo}>
                  <h3 className={styles.achievementTitle}>{ach.title}</h3>
                  <p className={styles.achievementDesc}>{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 6. Skill Statistics Dashboard --- */}
        <section id="statistics" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Statistics Dashboard</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedCounter value={data.stats.projectsBuilt} />
              </div>
              <div className={styles.statLabel}>Projects Built</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedCounter value={data.stats.hoursInvested} />+
              </div>
              <div className={styles.statLabel}>Hours Invested</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedCounter value={data.stats.certifications} />
              </div>
              <div className={styles.statLabel}>Certifications</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedCounter value={data.stats.technologiesConnected} />
              </div>
              <div className={styles.statLabel}>Technologies Connected</div>
            </div>
          </div>
        </section>

        {/* --- 7. Current Learning & Goals --- */}
        <section id="currently-learning" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Current Learning Progress</h2>
          
          <div className={styles.progressList} style={{ marginBottom: '3rem' }}>
            {data.progress.map((item, idx) => (
              <div key={idx} className={styles.progressItem}>
                <div className={styles.progressLabelWrapper}>
                  <span>{item.name}</span>
                  <span className={styles.progressPercent}>{item.value}%</span>
                </div>
                <div className={styles.progressBarTrack}>
                  <motion.div 
                    className={styles.progressBarFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.workingGrid}>
            <div className={styles.workingCard}>
              <h3 className={styles.workingHeading}>
                <span className={styles.workingIcon}>📚</span> Current Topics
              </h3>
              <div className={styles.taskList}>
                {data.currentlyWorking.learning.map((topic, i) => (
                  <div key={i} className={styles.taskItem}>
                    <div className={`${styles.taskCheckbox} ${styles.taskCheckboxChecked}`}>✓</div>
                    <span className={styles.taskText}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.workingCard}>
              <h3 className={styles.workingHeading}>
                <span className={styles.workingIcon}>⚡</span> Upcoming Projects
              </h3>
              <div className={styles.taskList}>
                {data.currentlyWorking.building.map((project, i) => (
                  <div key={i} className={styles.taskItem}>
                    <div className={styles.taskCheckbox}>•</div>
                    <span className={styles.taskText}>{project}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 8. Skill Ecosystem (Galaxy Map) --- */}
        <section id="ecosystem" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>Ecosystem Visualization</h2>
          <GalaxyMap 
            skillName={data.name} 
            initialNodes={data.galaxy.nodes} 
            skillColor={accentColor} 
          />
        </section>

        {/* --- Fun Facts --- */}
        {data.funFacts && data.funFacts.length > 0 && (
          <section className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>Fun Facts</h2>
            <div className={styles.funFactsGrid}>
              {data.funFacts.map((fact, i) => (
                <div key={i} className={styles.factCard}>
                  <span className={styles.factQuoteIcon}>”</span>
                  <span className={styles.factNumber}>// FACT 0{i + 1}</span>
                  <p className={styles.factText}>{fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- 9. AI Skill Summary --- */}
        <section id="summary" className={styles.sectionWrapper}>
          <h2 className={styles.sectionHeading}>AI Summary Analysis</h2>
          <div className={`${styles.glassCard} ${styles.aiSummaryCard}`}>
            <div className={styles.aiHeader}>
              <span className={styles.aiIndicatorDot} />
              <span>COGNITIVE SUMMARY ENGINE v1.4</span>
            </div>
            <p className={styles.aiText}>
              <TypewriterText text={data.summary} speed={25} />
            </p>
          </div>
        </section>

      </main>
    </motion.div>
  );
}
