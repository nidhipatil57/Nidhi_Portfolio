import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import useScrollPosition from '../../hooks/useScrollPosition';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Journey', href: 'journey' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Hackathons', href: 'hackathonsa' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const { scrollY } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLightMode, setIsLightMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const isLight = localStorage.getItem('theme') !== 'dark';
    setIsLightMode(isLight);
    if (isLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const nextLightMode = !isLightMode;
    setIsLightMode(nextLightMode);
    if (nextLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Track active section
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (href) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrollY > 50 ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id="navbar"
    >
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          N<span className={styles.logoAccent}>P</span>
        </div>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`${styles.navLink} ${activeSection === item.href ? styles.navLinkActive : ''}`}
              onClick={() => scrollToSection(item.href)}
              id={`nav-${item.href}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Header Actions (Theme Toggle + Hamburger) */}
        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            {isLightMode ? <FaMoon /> : <FaSun />}
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu List */}
        <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
          {navItems.map((item, i) => (
            <button
              key={item.href}
              className={`${styles.mobileNavLink} ${activeSection === item.href ? styles.mobileNavLinkActive : ''}`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
