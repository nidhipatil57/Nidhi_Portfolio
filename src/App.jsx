import { useState, useEffect } from 'react';
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
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import Stats from './components/Stats/Stats';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during intro loader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <IntroLoader key="intro-loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Achievements />
        <Certifications />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
