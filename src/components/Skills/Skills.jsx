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
          {skills.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={catIndex * 0.1} variant="fadeUp">
              <div className={`${styles.categoryCard} ${styles['card' + catIndex]}`}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryEmoji}>{category.icon}</div>
                  <div className={styles.categoryInfo}>
                    <h3>{category.category}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>

                <div className={styles.skillsList}>
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className={styles.skillChip}
                      style={{ '--currentColor': `${skill.color}44` }}
                      whileHover={{
                        borderColor: skill.color,
                        boxShadow: `0 0 20px ${skill.color}22`,
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
          ))}
        </div>
      </div>
    </section>
  );
}
