import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import ProjectModal from './ProjectModal';
import ProjectPreview from './ProjectPreview';
import projects from '../../data/projects';
import styles from './Projects.module.css';

// Reusable Project Card Component
function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className={`${styles.projectCard} ${project.featured ? styles.projectCardFeatured : ''}`}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      id={`project-card-${project.id}`}
    >
      {/* Image */}
      <div className={styles.cardImage}>
        {project.featured && (
          <span className={styles.featuredBadge}>⭐ Featured</span>
        )}
        <ProjectPreview
          image={project.image}
          title={project.title}
          accentColor={project.accentColor}
        />
        <div className={styles.cardOverlay}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayBtn}
            onClick={(e) => e.stopPropagation()}
            aria-label="View source code"
          >
            <FaGithub />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayBtn}
              onClick={(e) => e.stopPropagation()}
              aria-label="Live demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.cardDate}>{project.date}</span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardTagline}>{project.tagline}</p>
        <p className={styles.cardDesc}>{project.shortDescription}</p>

        <div className={styles.techTags}>
          {project.techStack.slice(0, 4).map((tech) => {
            const Icon = tech.icon;
            return (
              <span key={tech.name} className={styles.techTag}>
                <Icon className={styles.techIcon} />
                {tech.name}
              </span>
            );
          })}
          {project.techStack.length > 4 && (
            <span className={styles.techTag}>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.viewDetails}>
            View Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showHackathons, setShowHackathons] = useState(false);

  // Filter individual vs hackathon projects
  const individualProjects = projects.filter((p) =>
    ['nexora', 'novalife', 'nutribloom', 'notenest'].includes(p.id)
  );
  const hackathonProjects = projects.filter((p) =>
    ['syrus', 'crisissync', 'smart-tatkal-guardian', 'hiremind'].includes(p.id)
  );

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <SectionTitle
          title="My Projects"
          subtitle="A collection of the individual projects I've built while exploring new technologies."
        />

        {/* Individual Projects Grid */}
        <div className={styles.projectsGrid}>
          {individualProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Toggle Button for Hackathon Projects */}
        <div className={styles.toggleContainer}>
          <button
            className={styles.toggleBtn}
            onClick={() => setShowHackathons(!showHackathons)}
          >
            <span>{showHackathons ? 'Hide Hackathon Projects' : 'Explore Hackathon Projects'}</span>
            <motion.span
              animate={{ rotate: showHackathons ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <FaChevronDown style={{ fontSize: '0.8rem' }} />
            </motion.span>
          </button>
        </div>

        {/* Hackathon Projects Box */}
        <AnimatePresence>
          {showHackathons && (
            <motion.div
              className={styles.hackathonBox}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <h3 className={styles.boxTitle}>Hackathon & Team Projects</h3>
              <div className={styles.projectsGrid}>
                {hackathonProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
