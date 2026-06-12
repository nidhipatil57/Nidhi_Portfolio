import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaExpand } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import ProjectModal from './ProjectModal';
import ProjectPreview from './ProjectPreview';
import projects from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <SectionTitle
          label="projects"
          title="What I've Been Building"
          subtitle="A collection of side projects that helped me learn coding along the way"
        />

        {/* Featured Project */}
        {featured && (
          <ScrollReveal variant="fadeUp">
            <div className={styles.featuredProject} onClick={() => setSelectedProject(featured)}>
              <div className={styles.featuredInner}>
                <div className={styles.featuredImage}>
                  <span className={styles.featuredBadge}>⭐ Featured</span>
                  <ProjectPreview projectId={featured.id} />
                </div>

                <div className={styles.featuredContent}>
                  <div>
                    <p className={styles.featuredTagline}>{featured.tagline}</p>
                    <h3>{featured.title}</h3>
                  </div>

                  <p className={styles.featuredDesc}>{featured.shortDescription}</p>

                  <div className={styles.featuresList}>
                    {featured.features?.slice(0, 4).map((f, i) => (
                      <div key={i} className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className={styles.techTags}>
                    {featured.techStack.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.featuredActions}>
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Source Code
                    </a>
                    <button className="btn btn-secondary" onClick={() => setSelectedProject(featured)}>
                      <FaExpand /> Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Project Grid */}
        <div className={styles.projectsGrid}>
          {otherProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1} variant="fadeUp">
              <motion.div
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -6 }}
                id={`project-card-${project.id}`}
              >
                <div className={styles.cardImage}>
                  <ProjectPreview projectId={project.id} />
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
                    <button
                      className={styles.overlayBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      aria-label="View details"
                    >
                      <FaExpand />
                    </button>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardTagline}>{project.tagline}</p>
                  <p className={styles.cardDesc}>{project.shortDescription}</p>
                  <div className={styles.techTags}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
