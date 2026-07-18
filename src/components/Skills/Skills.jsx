import { motion } from 'framer-motion';
import { FaCode, FaGlobe, FaCog, FaBookOpen, FaDatabase } from 'react-icons/fa';
import ScrollReveal from '../common/ScrollReveal';
import skills from '../../data/skills';
import styles from './Skills.module.css';

function CategoryCard({ cat, index, onOpenSkillHub }) {
  return (
    <ScrollReveal delay={index * 0.05} variant="fadeUp" className={styles.scrollRevealWrapper}>
      <div 
        className={styles.categoryCard}
        style={{
          '--card-accent': cat.accent,
          '--card-accent-glow': `${cat.accent}15`,
          '--card-accent-hover-border': `${cat.accent}66`,
          '--card-accent-hover-glow': `${cat.accent}18`,
          '--card-accent-grid': `${cat.accent}0b`,
          '--card-accent-orb': `${cat.accent}0a`,
          '--card-accent-orb-border': `${cat.accent}1f`,
          '--card-accent-orb-glow': `${cat.accent}22`,
          '--card-accent-orb-inner': `${cat.accent}1c`,
          '--card-accent-orb-hover-border': `${cat.accent}77`,
          '--card-accent-orb-hover-inner': `${cat.accent}26`,
          '--card-accent-orb-hover-outer': `${cat.accent}33`
        }}
      >
        <div className={styles.categoryHeader}>
          <div className={styles.categoryNumber}>
            0{index + 1}
          </div>
          <div className={styles.categoryInfo}>
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </div>
        </div>

        <div className={styles.skillsList}>
          {cat.items.map((skill, i) => (
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
              transition={{ delay: index * 0.05 + i * 0.01, duration: 0.2 }}
              // onClick={() => onOpenSkillHub && onOpenSkillHub(skill.name)}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <span className={styles.skillIcon} style={{ color: skill.color }}>
                <skill.icon />
              </span>
              {skill.name}
            </motion.div>
          ))}
        </div>

        {/* Commented out for now to disable opening the skill hub modal
        <button
          className={styles.hubButton}
          onClick={() => onOpenSkillHub && onOpenSkillHub(cat.items[0].name)}
        >
          Explore my skills →
        </button>
        */}
      </div>
    </ScrollReveal>
  );
}

export default function Skills({ onOpenSkillHub }) {
  // Map skills data with specific accent colors and timeline icons
  const categories = [
    {
      id: '01',
      title: skills[0].category,
      emoji: skills[0].icon,
      description: skills[0].description,
      items: skills[0].items,
      accent: '#6366f1',
      icon: <FaCode />
    },
    {
      id: '02',
      title: skills[1].category,
      emoji: skills[1].icon,
      description: skills[1].description,
      items: skills[1].items,
      accent: '#0ea5e9',
      icon: <FaGlobe />
    },
    {
      id: '03',
      title: skills[2].category,
      emoji: skills[2].icon,
      description: skills[2].description,
      items: skills[2].items,
      accent: '#f59e0b',
      icon: <FaCog />
    },
    {
      id: '04',
      title: skills[3].category,
      emoji: skills[3].icon,
      description: skills[3].description,
      items: skills[3].items,
      accent: '#10b981',
      icon: <FaDatabase />
    },
    {
      id: '05',
      title: skills[4].category,
      emoji: skills[4].icon,
      description: skills[4].description,
      items: skills[4].items,
      accent: '#ec4899',
      icon: <FaBookOpen />
    }
  ];

  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        
        {/* Top Header Block */}
        <div className={styles.skillsHeader}>
          <div className={styles.titleBlock}>
            <span className={styles.label}>WHAT I WORK WITH</span>
            <h2 className={styles.headingTitle}>My Skills</h2>
          </div>
          <p className={styles.skillsDescription}>
            A collection of technologies, tools and concepts I use to build, learn and bring ideas to life.
          </p>
        </div>

        {/* Horizontal Timeline Wrapper */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />
          
          <div className={styles.timelineGrid}>
            {categories.map((cat, index) => (
              <div key={cat.id} className={styles.timelineColumn}>
                
                {/* Center Node & Connector Line */}
                <div className={styles.timelineNodeWrapper}>
                  <div 
                    className={styles.timelineNode} 
                    style={{ 
                      '--node-accent': cat.accent,
                      '--node-accent-glow': `${cat.accent}22`,
                      '--card-accent': cat.accent,
                      '--card-accent-orb': `${cat.accent}0a`,
                      '--card-accent-orb-border': `${cat.accent}1f`,
                      '--card-accent-orb-glow': `${cat.accent}22`,
                      '--card-accent-orb-inner': `${cat.accent}1c`,
                      '--card-accent-orb-hover-border': `${cat.accent}77`,
                      '--card-accent-orb-hover-inner': `${cat.accent}26`,
                      '--card-accent-orb-hover-outer': `${cat.accent}33`
                    }}
                  >
                    {cat.id === '01' ? cat.icon : cat.emoji}
                  </div>
                  <div 
                    className={styles.connectorLineVertical} 
                    style={{ '--card-accent': cat.accent }}
                  >
                    <div className={styles.connectorDot} />
                  </div>
                </div>
                
                {/* Category Card Area */}
                <div className={styles.cardWrapper}>
                  <CategoryCard cat={cat} index={index} onOpenSkillHub={onOpenSkillHub} />
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
