import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaLightbulb, FaTools, FaBook } from 'react-icons/fa';
import ProjectPreview from './ProjectPreview';
import styles from './Projects.module.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>

          <div className={styles.modalImage}>
            <ProjectPreview
              image={project.image}
              title={project.title}
              accentColor={project.accentColor}
            />
          </div>

          <div className={styles.modalBody}>
            <div>
              <h3 className={styles.modalTitle}>{project.title}</h3>
              <p className={styles.modalTagline}>{project.tagline}</p>
            </div>

            <p className={styles.modalDesc}>{project.fullDescription}</p>

            <div className={styles.techTags}>
              {project.techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span key={tech.name} className={styles.techTag}>
                    <Icon className={styles.techIcon} />
                    {tech.name}
                  </span>
                );
              })}
            </div>

            {project.features && (
              <div className={styles.modalSection}>
                <h4><span>✦</span> Key Features</h4>
                <div className={styles.modalList}>
                  {project.features.map((feature, i) => (
                    <div key={i} className={styles.modalListItem}>
                      <span className={styles.featureDot} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.challenges && (
              <div className={styles.modalSection}>
                <h4><span><FaLightbulb /></span> Challenges</h4>
                <div className={styles.modalList}>
                  {project.challenges.map((item, i) => (
                    <div key={i} className={styles.modalListItem}>
                      <span className={styles.featureDot} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.learnings && (
              <div className={styles.modalSection}>
                <h4><span><FaBook /></span> What I Learned</h4>
                <div className={styles.modalList}>
                  {project.learnings.map((item, i) => (
                    <div key={i} className={styles.modalListItem}>
                      <span className={styles.featureDot} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.modalActions}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaGithub /> View Code
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
