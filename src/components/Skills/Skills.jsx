import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import skills from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <SectionTitle
          label={null}
          title="My Skills"
          subtitle="Languages, Tools and Libraries I've been learning and exploring"
        />

        <div className={styles.skillsGrid}>
          {skills.map((category, catIndex) => {
            const accentColors = ['#6366f1', '#0ea5e9', '#f59e0b', '#ec4899'];
            const currentAccent = accentColors[catIndex];

            return (
              <ScrollReveal key={category.category} delay={catIndex * 0.1} variant="fadeUp">
                <div 
                  className={`${styles.categoryCard} ${styles['card' + catIndex]}`}
                  style={{ 
                    '--card-accent': currentAccent,
                    '--card-accent-glow': `${currentAccent}15`,
                    '--card-accent-hover-border': `${currentAccent}66`,
                    '--card-accent-hover-glow': `${currentAccent}18`,
                    '--card-accent-grid': `${currentAccent}0b`,
                    '--card-accent-orb': `${currentAccent}0a`,
                    '--card-accent-orb-border': `${currentAccent}1f`,
                    '--card-accent-orb-glow': `${currentAccent}22`,
                    '--card-accent-orb-inner': `${currentAccent}1c`,
                    '--card-accent-orb-hover-border': `${currentAccent}77`,
                    '--card-accent-orb-hover-inner': `${currentAccent}26`,
                    '--card-accent-orb-hover-outer': `${currentAccent}33`
                  }}
                >
                  {/* High-fidelity grid background overlay */}
                  <div className={styles.cardGridOverlay} />
                  
                  {/* Sci-fi Mono Index */}
                  <span className={styles.cardIndex}>// 0{catIndex + 1}</span>

                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryEmoji}>
                      {category.icon}
                    </div>
                    <div className={styles.categoryInfo}>
                      <div className={styles.categoryTitleWrapper}>
                        <h3>{category.category}</h3>
                      </div>
                      <p>{category.description}</p>
                    </div>
                  </div>

                  <div className={styles.skillsList}>
                    {category.items.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        className={styles.skillChip}
                        style={{ 
                          '--skill-accent': skill.color,
                          '--skill-accent-glow': `${skill.color}1f`,
                          '--skill-accent-inner-glow': `${skill.color}10`,
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + i * 0.05, duration: 0.3 }}
                      >
                        <span className={styles.skillIcon} style={{ color: skill.color }}>
                          <skill.icon />
                        </span>
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
