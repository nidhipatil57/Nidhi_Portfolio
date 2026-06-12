import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './IntroLoader.module.css';

export default function IntroLoader({ onComplete }) {
  const [text, setText] = useState('');
  const fullName = 'nidhi patil';

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullName.length) {
        currentText += fullName.charAt(index);
        setText(currentText);
        index++;
      } else {
        clearInterval(interval);
        // Hold the final screen state visible briefly before exit transition slides up
        setTimeout(() => {
          onComplete();
        }, 1600);
      }
    }, 90); // Increased typing speed (90ms)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.title}
        >
          {text}
          <span className={styles.typeCursor}>|</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
          className={styles.subtitle}
        >
          Code • Create • Innovate.
        </motion.div>
      </div>
    </motion.div>
  );
}
