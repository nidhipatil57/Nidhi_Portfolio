import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import achievements from '../../data/achievements';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={`section ${styles.achievements}`} id="achievements">
      <div className="container">
        <SectionTitle
          label="highlights"
          title="Certificates & Events"
          subtitle="A summary of certifications, hackathons, and courses I've completed"
        />

        <div className={styles.achievementsGrid}>
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={i * 0.08} variant="fadeUp">
                <div className={styles.achievementCard}>
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.iconContainer}
                      style={{
                        background: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <Icon />
                    </div>
                    <span className={styles.categoryBadge}>{item.category}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <div className={styles.cardDate}>📅 {item.date}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
