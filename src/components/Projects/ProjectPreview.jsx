import styles from './Projects.module.css';

// Generates a unique SVG preview for each project based on its id
export default function ProjectPreview({ projectId, height = '100%' }) {
  const themes = {
    notenest: {
      primary: '#6366f1',
      secondary: '#f59e0b',
      elements: (
        <>
          {/* Note app mockup */}
          <rect x="15%" y="15%" width="70%" height="70%" rx="8" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="1" />
          <rect x="15%" y="15%" width="70%" height="12%" rx="8" fill="#1e1e32" />
          {/* Sidebar */}
          <rect x="15%" y="27%" width="22%" height="58%" fill="#16161e" />
          <rect x="18%" y="32%" width="16%" height="4%" rx="2" fill="#6366f1" opacity="0.6" />
          <rect x="18%" y="39%" width="14%" height="4%" rx="2" fill="#f59e0b" opacity="0.3" />
          <rect x="18%" y="46%" width="15%" height="4%" rx="2" fill="#a0a0b8" opacity="0.2" />
          <rect x="18%" y="53%" width="13%" height="4%" rx="2" fill="#a0a0b8" opacity="0.2" />
          {/* Main content area */}
          <rect x="40%" y="32%" width="40%" height="4%" rx="2" fill="#6366f1" opacity="0.5" />
          <rect x="40%" y="39%" width="35%" height="2.5%" rx="1" fill="#a0a0b8" opacity="0.3" />
          <rect x="40%" y="44%" width="42%" height="2.5%" rx="1" fill="#a0a0b8" opacity="0.25" />
          <rect x="40%" y="49%" width="30%" height="2.5%" rx="1" fill="#a0a0b8" opacity="0.2" />
          <rect x="40%" y="54%" width="38%" height="2.5%" rx="1" fill="#a0a0b8" opacity="0.25" />
          <rect x="40%" y="59%" width="25%" height="2.5%" rx="1" fill="#f59e0b" opacity="0.3" />
          {/* Title bar buttons */}
          <circle cx="20%" cy="21%" r="1.5%" fill="#ff6b6b" opacity="0.6" />
          <circle cx="25%" cy="21%" r="1.5%" fill="#ffd93d" opacity="0.6" />
          <circle cx="30%" cy="21%" r="1.5%" fill="#6bcb77" opacity="0.6" />
          {/* Search bar */}
          <rect x="55%" y="18%" width="25%" height="5%" rx="3" fill="#0d0d14" opacity="0.5" />
        </>
      ),
    },
    'weather-dashboard': {
      primary: '#f59e0b',
      secondary: '#ffd93d',
      elements: (
        <>
          {/* Weather card mockup */}
          <rect x="15%" y="15%" width="70%" height="70%" rx="8" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="1" />
          {/* Sun */}
          <circle cx="35%" cy="38%" r="12%" fill="none" stroke="#ffd93d" strokeWidth="2" opacity="0.7" />
          <circle cx="35%" cy="38%" r="8%" fill="#ffd93d" opacity="0.3" />
          {/* Temperature */}
          <text x="55%" y="42%" fill="#e8e8f0" fontSize="28" fontFamily="Outfit, sans-serif" fontWeight="700" opacity="0.8">24°</text>
          {/* City name */}
          <rect x="25%" y="55%" width="25%" height="4%" rx="2" fill="#f59e0b" opacity="0.5" />
          {/* Forecast bars */}
          <rect x="20%" y="65%" width="12%" height="15%" rx="4" fill="#1e1e32" />
          <rect x="36%" y="68%" width="12%" height="12%" rx="4" fill="#1e1e32" />
          <rect x="52%" y="63%" width="12%" height="17%" rx="4" fill="#1e1e32" />
          <rect x="68%" y="66%" width="12%" height="14%" rx="4" fill="#1e1e32" />
          {/* Forecast bar fills */}
          <rect x="23%" y="72%" width="6%" height="5%" rx="2" fill="#f59e0b" opacity="0.6" />
          <rect x="39%" y="74%" width="6%" height="3%" rx="2" fill="#f59e0b" opacity="0.4" />
          <rect x="55%" y="71%" width="6%" height="6%" rx="2" fill="#f59e0b" opacity="0.7" />
          <rect x="71%" y="73%" width="6%" height="4%" rx="2" fill="#f59e0b" opacity="0.5" />
        </>
      ),
    },
    'student-grade-analyzer': {
      primary: '#6bcb77',
      secondary: '#6366f1',
      elements: (
        <>
          {/* Terminal mockup */}
          <rect x="15%" y="15%" width="70%" height="70%" rx="8" fill="#0d0d14" stroke="#2a2a40" strokeWidth="1" />
          <rect x="15%" y="15%" width="70%" height="10%" rx="8" fill="#1a1a2e" />
          {/* Terminal buttons */}
          <circle cx="20%" cy="20%" r="1.5%" fill="#ff6b6b" opacity="0.6" />
          <circle cx="25%" cy="20%" r="1.5%" fill="#ffd93d" opacity="0.6" />
          <circle cx="30%" cy="20%" r="1.5%" fill="#6bcb77" opacity="0.6" />
          {/* Terminal lines */}
          <text x="18%" y="33%" fill="#6bcb77" fontSize="9" fontFamily="monospace" opacity="0.7">$ python analyze.py</text>
          <text x="18%" y="39%" fill="#a0a0b8" fontSize="8" fontFamily="monospace" opacity="0.4">Loading data...</text>
          <text x="18%" y="45%" fill="#a0a0b8" fontSize="8" fontFamily="monospace" opacity="0.4">Students: 45</text>
          <text x="18%" y="51%" fill="#6366f1" fontSize="8" fontFamily="monospace" opacity="0.5">Average: 78.5</text>
          <text x="18%" y="57%" fill="#f59e0b" fontSize="8" fontFamily="monospace" opacity="0.5">Highest: 98</text>
          {/* Chart */}
          <rect x="55%" y="35%" width="5%" height="25%" rx="2" fill="#6bcb77" opacity="0.5" />
          <rect x="63%" y="40%" width="5%" height="20%" rx="2" fill="#6366f1" opacity="0.5" />
          <rect x="71%" y="33%" width="5%" height="27%" rx="2" fill="#f59e0b" opacity="0.5" />
          <text x="18%" y="68%" fill="#6bcb77" fontSize="9" fontFamily="monospace" opacity="0.6">✓ Report generated</text>
          <rect x="18%" y="73%" width="3%" height="3%" rx="1" fill="#6bcb77" opacity="0.8">
            <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
          </rect>
        </>
      ),
    },
    'quiz-app': {
      primary: '#ff6b6b',
      secondary: '#ffd93d',
      elements: (
        <>
          {/* Quiz card */}
          <rect x="15%" y="15%" width="70%" height="70%" rx="8" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="1" />
          {/* Question */}
          <rect x="22%" y="22%" width="56%" height="5%" rx="3" fill="#e8e8f0" opacity="0.15" />
          {/* Timer */}
          <circle cx="78%" cy="24%" r="4%" fill="none" stroke="#ff6b6b" strokeWidth="2" opacity="0.6" />
          <text x="78%" y="26%" fill="#ff6b6b" fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.6">15</text>
          {/* Options */}
          <rect x="22%" y="35%" width="56%" height="9%" rx="4" fill="#1e1e32" stroke="#6bcb77" strokeWidth="1.5" opacity="0.7" />
          <rect x="22%" y="48%" width="56%" height="9%" rx="4" fill="#1e1e32" stroke="#2a2a40" strokeWidth="1" />
          <rect x="22%" y="61%" width="56%" height="9%" rx="4" fill="#1e1e32" stroke="#2a2a40" strokeWidth="1" />
          <rect x="22%" y="74%" width="56%" height="9%" rx="4" fill="#1e1e32" stroke="#ff6b6b" strokeWidth="1" opacity="0.5" />
          {/* Option letters */}
          <circle cx="27%" cy="39.5%" r="2.5%" fill="#6bcb77" opacity="0.3" />
          <text x="27%" y="41%" fill="#6bcb77" fontSize="8" textAnchor="middle" fontWeight="600" opacity="0.8">A</text>
          <circle cx="27%" cy="52.5%" r="2.5%" fill="#a0a0b8" opacity="0.15" />
          <text x="27%" y="54%" fill="#a0a0b8" fontSize="8" textAnchor="middle" fontWeight="600" opacity="0.4">B</text>
          <circle cx="27%" cy="65.5%" r="2.5%" fill="#a0a0b8" opacity="0.15" />
          <text x="27%" y="67%" fill="#a0a0b8" fontSize="8" textAnchor="middle" fontWeight="600" opacity="0.4">C</text>
          <circle cx="27%" cy="78.5%" r="2.5%" fill="#ff6b6b" opacity="0.15" />
          <text x="27%" y="80%" fill="#ff6b6b" fontSize="8" textAnchor="middle" fontWeight="600" opacity="0.4">D</text>
          {/* Score */}
          <rect x="30%" y="18%" width="12%" height="4%" rx="2" fill="#ffd93d" opacity="0.3" />
        </>
      ),
    },
    'portfolio-website': {
      primary: '#6366f1',
      secondary: '#f59e0b',
      elements: (
        <>
          {/* Browser mockup */}
          <rect x="15%" y="15%" width="70%" height="70%" rx="8" fill="#0d0d14" stroke="#2a2a40" strokeWidth="1" />
          <rect x="15%" y="15%" width="70%" height="8%" rx="8" fill="#1a1a2e" />
          {/* Browser buttons */}
          <circle cx="20%" cy="19%" r="1.2%" fill="#ff6b6b" opacity="0.6" />
          <circle cx="24%" cy="19%" r="1.2%" fill="#ffd93d" opacity="0.6" />
          <circle cx="28%" cy="19%" r="1.2%" fill="#6bcb77" opacity="0.6" />
          {/* URL bar */}
          <rect x="35%" y="17%" width="40%" height="4%" rx="2" fill="#12121a" />
          {/* Hero section mini */}
          <rect x="20%" y="28%" width="25%" height="3%" rx="1" fill="#6366f1" opacity="0.5" />
          <rect x="20%" y="33%" width="20%" height="2%" rx="1" fill="#a0a0b8" opacity="0.3" />
          <rect x="20%" y="37%" width="22%" height="2%" rx="1" fill="#a0a0b8" opacity="0.2" />
          {/* CTA button */}
          <rect x="20%" y="42%" width="12%" height="3.5%" rx="2" fill="#6366f1" opacity="0.6" />
          {/* Profile */}
          <circle cx="65%" cy="38%" r="8%" fill="#1a1a2e" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
          {/* Cards below */}
          <rect x="20%" y="52%" width="18%" height="22%" rx="4" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="0.5" />
          <rect x="41%" y="52%" width="18%" height="22%" rx="4" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="0.5" />
          <rect x="62%" y="52%" width="18%" height="22%" rx="4" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="0.5" />
          {/* Card accents */}
          <rect x="20%" y="52%" width="18%" height="3%" rx="4" fill="#6366f1" opacity="0.2" />
          <rect x="41%" y="52%" width="18%" height="3%" rx="4" fill="#f59e0b" opacity="0.2" />
          <rect x="62%" y="52%" width="18%" height="3%" rx="4" fill="#6bcb77" opacity="0.2" />
        </>
      ),
    },
  };

  const theme = themes[projectId] || themes['portfolio-website'];

  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height }}>
      <rect width="600" height="400" fill="#12121a" />
      <rect width="600" height="400" fill={`url(#prevGrad-${projectId})`} fillOpacity="0.1" />
      {theme.elements}
      <defs>
        <linearGradient id={`prevGrad-${projectId}`} x1="0" y1="0" x2="600" y2="400">
          <stop offset="0%" stopColor={theme.primary} />
          <stop offset="100%" stopColor={theme.secondary} />
        </linearGradient>
      </defs>
    </svg>
  );
}
