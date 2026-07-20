import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaTrophy, 
  FaAward, 
  FaGraduationCap, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { bentoJourneyCards } from '../../data/developerJourney';
import JourneyModal from './JourneyModal';
import styles from './Journey.module.css';

export default function Journey({ onNavigateToFullJourney }) {
  const [selectedBentoItem, setSelectedBentoItem] = useState(null);

  const vesitCard = bentoJourneyCards.find((c) => c.id === 'vesit-bento');
  const syrusCard = bentoJourneyCards.find((c) => c.id === 'syrus-bento');
  const unimergeCard = bentoJourneyCards.find((c) => c.id === 'unimerge-bento');

  const handleNavigate = (e) => {
    e.preventDefault();
    if (onNavigateToFullJourney) {
      onNavigateToFullJourney();
    } else {
      window.history.pushState({}, '', '/journey');
      window.dispatchEvent(new Event('popstate'));
    }
  };

  return (
    <section className={`section ${styles.journey}`} id="journey">
      <div className={`container ${styles.journeyContainer}`}>
        <SectionTitle
          label={null}
          title="My Journey"
          subtitle="A timeline of the experiences, hackathons, and milestones that shaped my growth as a developer."
        />

        {/* Horizontal Timeline Track */}
        <ScrollReveal variant="fadeUp" delay={0.02}>
          <div className={styles.horizontalTimelineTrack}>
            <div className={styles.timelineTrackLine} />
            
            <div className={styles.timelineNodesRow}>
              {/* Node 1: VESIT */}
              <div className={styles.timelineNodeItem}>
                <div className={styles.nodePoint} style={{ borderColor: '#10b981', boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)' }}>
                  <span className={styles.nodeDotInner} style={{ background: '#10b981' }} />
                </div>
                <span className={styles.nodeLabel} style={{ color: '#10b981' }}>
                  2025 – 2029
                </span>
              </div>

              {/* Node 2: Syrus */}
              <div className={styles.timelineNodeItem}>
                <div className={styles.nodePoint} style={{ borderColor: '#eab308', boxShadow: '0 0 15px rgba(234, 179, 8, 0.4)' }}>
                  <span className={styles.nodeDotInner} style={{ background: '#eab308' }} />
                </div>
                <span className={styles.nodeLabel} style={{ color: '#eab308' }}>
                  March 2026
                </span>
              </div>

              {/* Node 3: UniMerge */}
              <div className={styles.timelineNodeItem}>
                <div className={styles.nodePoint} style={{ borderColor: '#6366f1', boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)' }}>
                  <span className={styles.nodeDotInner} style={{ background: '#6366f1' }} />
                </div>
                <span className={styles.nodeLabel} style={{ color: '#6366f1' }}>
                  April 2026
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid Container */}
        <div className={styles.bentoGrid}>
          
          {/* Bento Card 1: Joined VESIT */}
          {vesitCard && (
            <ScrollReveal variant="fadeUp" delay={0.05} className={styles.cardColVesit}>
              <motion.div
                className={`${styles.bentoCard} ${styles.vesitCard}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedBentoItem(vesitCard)}
              >
                {/* Background Campus Illustration Graphic */}
                <div className={styles.campusBgGraphic}>
                  <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="url(#vesit-grad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.25" />
                    <circle cx="100" cy="100" r="50" stroke="url(#vesit-grad)" strokeWidth="1" opacity="0.2" />
                    <defs>
                      <linearGradient id="vesit-grad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981" />
                        <stop offset="1" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className={styles.bentoCardHeader}>
                  <div className={styles.iconBadge} style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                    <FaGraduationCap />
                  </div>
                  <span className={styles.dateTag}>{vesitCard.duration}</span>
                </div>

                <div className={styles.bentoCardBody}>
                  <div className={styles.highlightBadge}>
                    <HiSparkles style={{ color: '#10b981' }} />
                    <span>{vesitCard.highlightBadge}</span>
                  </div>

                  <h3 className={styles.bentoTitle}>{vesitCard.title}</h3>
                  <p className={styles.bentoProgram}>{vesitCard.program}</p>

                  <p className={styles.bentoDesc}>{vesitCard.description}</p>
                </div>

                <div className={styles.bentoCardFooter}>
                  <span className={styles.clickHint}>
                    View Education Details →
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          )}

          {/* Bento Card 2: Syrus Hackathon (Large Feature Card) */}
          {syrusCard && (
            <ScrollReveal variant="fadeUp" delay={0.1} className={styles.cardColSyrus}>
              <motion.div
                className={`${styles.bentoCard} ${styles.syrusCard}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedBentoItem(syrusCard)}
              >
                <div className={styles.bentoCardHeader}>
                  <div className={styles.headerLeft}>
                    <div className={styles.iconBadge} style={{ background: 'rgba(234, 179, 8, 0.12)', color: '#eab308' }}>
                      <FaTrophy />
                    </div>
                    <span className={styles.statusBadge} style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308', borderColor: 'rgba(234, 179, 8, 0.3)' }}>
                      <FaAward /> {syrusCard.statusBadge}
                    </span>
                  </div>
                  <span className={styles.dateTag}>{syrusCard.date}</span>
                </div>

                <div className={styles.syrusBentoContent}>
                  <div className={styles.syrusTextCol}>
                    <h3 className={styles.bentoTitle}>{syrusCard.title}</h3>
                    <h4 className={styles.bentoSubTitle}>{syrusCard.projectName}</h4>
                    <p className={styles.bentoDesc}>
                      Built an AI-powered onboarding platform with conversational Gemini guide, dynamic checklists, and HR analytics.
                    </p>

                    <div className={styles.techPills}>
                      <span className={styles.techPill}>Next.js 16</span>
                      <span className={styles.techPill}>Gemini AI</span>
                      <span className={styles.techPill}>Tailwind CSS 4</span>
                    </div>
                  </div>

                  {/* Large Project Preview Image */}
                  <div className={styles.syrusPreviewBox}>
                    <div className={styles.previewHeaderDots}>
                      <span className={styles.dotRed} />
                      <span className={styles.dotYellow} />
                      <span className={styles.dotGreen} />
                    </div>
                    <img src={syrusCard.projectImage} alt={syrusCard.title} className={styles.bentoPreviewImg} />
                  </div>
                </div>

                <div className={styles.bentoCardFooter}>
                  <span className={styles.clickHint}>
                    Explore Case Study →
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          )}

          {/* Bento Card 3: UniMerge 1.0 */}
          {unimergeCard && (
            <ScrollReveal variant="fadeUp" delay={0.15} className={styles.cardColUnimerge}>
              <motion.div
                className={`${styles.bentoCard} ${styles.unimergeCard}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedBentoItem(unimergeCard)}
              >
                <div className={styles.bentoCardHeader}>
                  <div className={styles.headerLeft}>
                    <div className={styles.iconBadge} style={{ background: 'rgba(99, 102, 241, 0.12)', color: '#6366f1' }}>
                      <FaAward />
                    </div>
                    <span className={styles.statusBadge} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                      🏆 {unimergeCard.statusBadge}
                    </span>
                  </div>
                  <span className={styles.dateTag}>{unimergeCard.date}</span>
                </div>

                <div className={styles.unimergeBentoContent}>
                  <h3 className={styles.bentoTitle}>{unimergeCard.title}</h3>
                  <h4 className={styles.bentoSubTitle}>{unimergeCard.projectName}</h4>
                  <p className={styles.bentoDesc}>
                    Designed and built NoteNest solo in 48 hours. Awarded Best UI/UX for active recall tools and fluid layout transitions.
                  </p>

                  <div className={styles.dualMediaPreview}>
                    <div className={styles.miniMediaFrame}>
                      <img src={unimergeCard.projectImage} alt="NoteNest UI" className={styles.miniMediaImg} />
                    </div>
                    <div className={styles.miniMediaFrame}>
                      <img src={unimergeCard.certificateImage} alt="UniMerge Award Certificate" className={styles.miniMediaImg} />
                    </div>
                  </div>

                  <div className={styles.techPills}>
                    <span className={styles.techPill}>React</span>
                    <span className={styles.techPill}>Framer Motion</span>
                    <span className={styles.techPill}>TypeScript</span>
                  </div>
                </div>

                <div className={styles.bentoCardFooter}>
                  <span className={styles.clickHint}>
                    View Winner Case Study →
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          )}

        </div>

        {/* View Full Journey CTA Button */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className={styles.ctaWrapper}>
            <a
              href="/journey"
              onClick={handleNavigate}
              className={styles.viewFullBtn}
            >
              <span>View My Full Journey</span>
              <FaArrowRight className={styles.arrowIcon} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedBentoItem && (
        <JourneyModal
          item={selectedBentoItem}
          onClose={() => setSelectedBentoItem(null)}
        />
      )}
    </section>
  );
}
