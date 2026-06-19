import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import styles from './HackathonsTour.module.css';

export default function HackathonsTour() {
  return (
    <section className={`section ${styles.hackathonsTour}`} id="hackathonsa">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            title="Hackathons and Workshops Museum"
            subtitle="Step inside a fully interactive digital archive of my competitive hackathons, workshops, coding events and certifications"
          />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.08}>
          <div className={styles.tourContainer}>
            <a
              href="?page=hackathons"
              className={styles.museumEnterBtn}
            >
              <span>Explore Museum</span>
              <FaArrowRight className={styles.arrowIcon} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
