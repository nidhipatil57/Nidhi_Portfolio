import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/common/AnimatedBackground';
import BackToTop from './components/common/BackToTop';
import CustomCursor from './components/common/CustomCursor';
import IntroLoader from './components/common/IntroLoader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Journey from './components/Journey/Journey';
import FullJourneyPage from './components/Journey/FullJourneyPage';
import Certifications from './components/Certifications/Certifications';
import HackathonsTour from './components/Hackathons/HackathonsTour';
import Hackathons from './components/Hackathons/Hackathons';
import Stats from './components/Stats/Stats';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SkillHub from './components/Skills/SkillHub';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSkill, setActiveSkill] = useState(null);
  const [isHackathonPage, setIsHackathonPage] = useState(false);
  const [isJourneyPage, setIsJourneyPage] = useState(false);

  const wasOnHackathonPage = useRef(false);

  useEffect(() => {
    const checkRoute = () => {
      const isHack = window.location.search.includes('page=hackathons');
      const pathname = window.location.pathname;
      const isJourney = pathname === '/journey' || pathname.endsWith('/journey') || window.location.search.includes('page=journey');

      if (isHack) {
        wasOnHackathonPage.current = true;
      }
      // Skip intro loader when directly viewing subpages
      if (isHack || isJourney) {
        setLoading(false);
      } else if (wasOnHackathonPage.current) {
        setLoading(false);
      }
      setIsHackathonPage(isHack);
      setIsJourneyPage(isJourney);
    };
    checkRoute();
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  // Initialize theme from localStorage globally
  useEffect(() => {
    const isLight = localStorage.getItem('theme') === 'light';
    if (isLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, []);

  // Scroll back to Hackathons section on exit
  useEffect(() => {
    if (!isHackathonPage && wasOnHackathonPage.current) {
      setTimeout(() => {
        const element = document.getElementById('hackathonsa');
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetY = rect.top + scrollTop - 72; // Account for navbar height
          
          // Instantly jump to 100px above the target to avoid long/fast scroll
          window.scrollTo(0, Math.max(0, targetY - 100));
          
          // Gently smooth scroll the remaining 100px
          setTimeout(() => {
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }, 20);
        }
      }, 100);
    }
  }, [isHackathonPage]);

  // Prevent scroll during intro loader or when skill hub is open
  useEffect(() => {
    if (loading || activeSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading, activeSkill]);

  if (isHackathonPage) {
    return (
      <>
        <CustomCursor />
        <AnimatedBackground />
        <main>
          <Hackathons />
        </main>
        <BackToTop />
      </>
    );
  }

  if (isJourneyPage) {
    return (
      <>
        <CustomCursor />
        <AnimatedBackground />
        <FullJourneyPage 
          onBackToPortfolio={() => {
            window.history.pushState({}, '', '/');
            setIsJourneyPage(false);
            setTimeout(() => {
              const el = document.getElementById('journey');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 80);
          }}
        />
        <BackToTop />
      </>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <IntroLoader key="intro-loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeSkill && (
          <SkillHub 
            key="skill-hub" 
            activeSkill={activeSkill} 
            onClose={() => setActiveSkill(null)}
            onNavigate={(skillName) => setActiveSkill(skillName)}
          />
        )}
      </AnimatePresence>

      {!activeSkill && <CustomCursor />}
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills onOpenSkillHub={setActiveSkill} />
        <Projects />
        <Journey onNavigateToFullJourney={() => {
          window.history.pushState({}, '', '/journey');
          setIsJourneyPage(true);
        }} />
        <Certifications />
        <HackathonsTour />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
