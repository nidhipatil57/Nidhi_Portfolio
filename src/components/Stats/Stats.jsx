import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaBook,
  FaTimes,
  FaTrophy,
  FaFire,
  FaPercent,
  FaAward,
} from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import styles from './Stats.module.css';

const GITHUB_USERNAME = 'nidhipatil57';
const LEETCODE_USERNAME = 'Nidhi_57';

const GITHUB_LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  TypeScript: '#3178c6',
  default: '#6366f1',
};

// Fallback high-fidelity data
const FALLBACK_GITHUB_USER = {
  avatar_url: '',
  name: 'Nidhi Patil',
  bio: 'First-Year B.Tech AI & DS Student | Building projects & learning every day',
  public_repos: 5,
  followers: 2,
  following: 5,
  html_url: `https://github.com/${GITHUB_USERNAME}`,
};

const FALLBACK_GITHUB_REPOS = [
  { id: 1, name: 'Nidhi_Portfolio', description: 'My personal developer portfolio built with React', language: 'JavaScript', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/Nidhi_Portfolio` },
  { id: 2, name: 'NoteNest', description: 'A modern note-taking app with React and Firebase', language: 'JavaScript', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/NoteNest` },
  { id: 3, name: 'weather-dashboard', description: 'Real-time weather dashboard using OpenWeather API', language: 'HTML', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/weather-dashboard` },
  { id: 4, name: 'quiz-app', description: 'Interactive quiz application with multiple categories', language: 'JavaScript', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/quiz-app` },
];

const FALLBACK_LEETCODE_DATA = {
  totalSolved: 142,
  totalQuestions: 3250,
  easySolved: 85,
  totalEasy: 820,
  mediumSolved: 48,
  totalMedium: 1650,
  hardSolved: 9,
  totalHard: 780,
  acceptanceRate: 58.4,
  ranking: 185240,
  contributionPoints: 1250,
  reputation: 15,
};

// Custom SVG LeetCode Icon
const LeetCodeIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.071-.26 2.235 2.235 0 0 1-.986-.985 2.235 2.235 0 0 1-.26-1.07c0-.635.244-1.28.696-1.745l3.39-3.29a.832.832 0 0 0-.584-1.42h-8.03c-1.298 0-2.355-1.058-2.355-2.356 0-1.298 1.057-2.356 2.355-2.356h8.03a.832.832 0 0 0 .584-1.42l-3.39-3.292a2.31 2.31 0 0 1-.696-1.744c0-.623.24-1.258.682-1.71A2.3 2.3 0 0 1 11.668 0c.633 0 1.278.244 1.744.696l2.69 2.607a7.24 7.24 0 0 1 2.112 5.096c0 1.954-.772 3.822-2.112 5.096-.115.11-.233.21-.353.31a7.243 7.243 0 0 1 2.112 5.096c0 1.954-.772 3.822-2.112 5.096-.12.1-.238.2-.358.3z" />
  </svg>
);

export default function Stats() {
  // Modal states
  const [githubOpen, setGithubOpen] = useState(false);
  const [leetcodeOpen, setLeetcodeOpen] = useState(false);

  // GitHub Data states
  const [githubUser, setGithubUser] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);

  // LeetCode Data states
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [leetcodeError, setLeetcodeError] = useState(false);

  // Fetch GitHub
  const fetchGitHubData = async () => {
    setGithubLoading(true);
    setGithubError(false);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
      ]);

      if (!userRes.ok || !reposRes.ok) throw new Error('API Error');

      const userData = await userRes.json();
      const reposData = await reposRes.json();

      setGithubUser(userData);
      setGithubRepos(reposData);
    } catch (err) {
      console.warn('GitHub API failed, using fallback data:', err);
      setGithubUser(FALLBACK_GITHUB_USER);
      setGithubRepos(FALLBACK_GITHUB_REPOS);
      setGithubError(true);
    } finally {
      setGithubLoading(false);
    }
  };

  // Fetch LeetCode
  const fetchLeetcodeData = async () => {
    setLeetcodeLoading(true);
    setLeetcodeError(false);
    try {
      const res = await fetch(`https://leetcode-api-faisal.vercel.app/${LEETCODE_USERNAME}`);
      if (!res.ok) throw new Error('API Error');

      const data = await res.json();
      if (data.errors || !data.ranking) {
        throw new Error('User not found or API returned error');
      }

      // Extract details
      const totalSolved = data.totalSolved || 0;
      const easySolved = data.easySolved || 0;
      const mediumSolved = data.mediumSolved || 0;
      const hardSolved = data.hardSolved || 0;

      const totalQuestions = data.totalQuestions || 3250;
      const totalEasy = data.totalEasy || 820;
      const totalMedium = data.totalMedium || 1650;
      const totalHard = data.totalHard || 780;

      // Calculate acceptance rate
      let accRate = 52.4;
      if (data.totalSubmissions && data.totalSubmissions.length > 0) {
        const allSubs = data.totalSubmissions.find((t) => t.difficulty === 'All');
        if (allSubs && allSubs.submissions > 0) {
          accRate = ((totalSolved / allSubs.submissions) * 100).toFixed(1);
        }
      }

      setLeetcodeData({
        totalSolved,
        totalQuestions,
        easySolved,
        totalEasy,
        mediumSolved,
        totalMedium,
        hardSolved,
        totalHard,
        acceptanceRate: accRate,
        ranking: data.ranking || 0,
        contributionPoints: data.contributionPoint || 0,
        reputation: data.reputation || 0,
      });
    } catch (err) {
      console.warn('LeetCode API failed, using fallback data:', err);
      setLeetcodeData(FALLBACK_LEETCODE_DATA);
      setLeetcodeError(true);
    } finally {
      setLeetcodeLoading(false);
    }
  };

  // Trigger data fetching on modal open
  useEffect(() => {
    if (githubOpen && !githubUser) {
      fetchGitHubData();
    }
  }, [githubOpen]);

  useEffect(() => {
    if (leetcodeOpen && !leetcodeData) {
      fetchLeetcodeData();
    }
  }, [leetcodeOpen]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (githubOpen || leetcodeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [githubOpen, leetcodeOpen]);

  // Close modals on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setGithubOpen(false);
        setLeetcodeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // LeetCode Progress Circle calculation
  const getLeetcodeCircleData = () => {
    if (!leetcodeData) return { circumference: 0, strokeDashoffset: 0 };
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min((leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100, 100);
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return { circumference, strokeDashoffset, radius };
  };

  const lcCircle = getLeetcodeCircleData();

  return (
    <section className={`section ${styles.statsSection}`} id="stats">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            label="profiles"
            title="Stats & Activity"
            subtitle="Live tracking of my coding progress, challenges solved, and open source commits"
          />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => setGithubOpen(true)}
              className={`${styles.statsBtn} ${styles.githubBtn}`}
              aria-label="View Github stats"
            >
              <FaGithub className={`${styles.btnIcon} ${styles.githubColor}`} />
              View GitHub Stats
            </button>

            <button
              onClick={() => setLeetcodeOpen(true)}
              className={`${styles.statsBtn} ${styles.leetcodeBtn}`}
              aria-label="View Leetcode stats"
            >
              <LeetCodeIcon className={`${styles.btnIcon} ${styles.leetcodeColor}`} />
              View LeetCode Stats
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* GitHub Modal Overlay */}
      <AnimatePresence>
        {githubOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGithubOpen(false)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setGithubOpen(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h2>
                    <FaGithub className={styles.githubColor} /> GitHub Stats Dashboard
                  </h2>
                </div>

                {githubLoading ? (
                  <div className={styles.modalLoading}>
                    <div className={styles.modalLoadingSpinner} />
                    <p>Fetching real-time GitHub data...</p>
                  </div>
                ) : (
                  <>
                    {githubError && (
                      <div className={styles.modalBanner}>
                        <p>⚠️ Displaying cached/demo data because GitHub API is rate-limited</p>
                      </div>
                    )}

                    <div className={styles.githubGrid}>
                      {/* Left Column Profile Card */}
                      <div className={styles.profileCard}>
                        <div className={styles.avatar}>
                          {githubUser?.avatar_url ? (
                            <img src={githubUser.avatar_url} alt="GitHub Avatar" loading="lazy" />
                          ) : (
                            <div
                              style={{
                                width: '100%',
                                height: '100%',
                                background: 'var(--accent-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.2rem',
                                color: '#fff',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                              }}
                            >
                              N
                            </div>
                          )}
                        </div>
                        <h3 className={styles.profileName}>{githubUser?.name || GITHUB_USERNAME}</h3>
                        <p className={styles.profileBio}>{githubUser?.bio || FALLBACK_GITHUB_USER.bio}</p>

                        <div className={styles.profileStats}>
                          <div className={styles.profileStat}>
                            <div className={styles.profileStatNumber}>{githubUser?.public_repos || 0}</div>
                            <div className={styles.profileStatLabel}>Repos</div>
                          </div>
                          <div className={styles.profileStat}>
                            <div className={styles.profileStatNumber}>{githubUser?.followers || 0}</div>
                            <div className={styles.profileStatLabel}>Followers</div>
                          </div>
                          <div className={styles.profileStat}>
                            <div className={styles.profileStatNumber}>{githubUser?.following || 0}</div>
                            <div className={styles.profileStatLabel}>Following</div>
                          </div>
                        </div>

                        <a
                          href={githubUser?.html_url || FALLBACK_GITHUB_USER.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.githubLink}
                        >
                          <FaGithub /> View Profile <FaExternalLinkAlt size={10} />
                        </a>
                      </div>

                      {/* Right Column Stats & Repos */}
                      <div className={styles.githubContent}>
                        <div className={styles.statsCards}>
                          <div className={styles.statsCard}>
                            <img
                              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&text_color=9ca3af&icon_color=f59e0b&bg_color=00000000`}
                              alt="GitHub Stats"
                              loading="lazy"
                            />
                          </div>
                          <div className={styles.statsCard}>
                            <img
                              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=6366f1&text_color=9ca3af&bg_color=00000000`}
                              alt="Top Languages"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className={`${styles.statsCard} ${styles.streakCard}`}>
                          <img
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=6366f1&fire=f59e0b&currStreakLabel=f3f4f6&sideLabels=9ca3af&dates=6b7280&background=00000000&stroke=1f2937`}
                            alt="GitHub Streak"
                            loading="lazy"
                          />
                        </div>

                        {githubRepos.length > 0 && (
                          <div className={styles.reposSection}>
                            <h3>📁 Recent Repositories</h3>
                            <div className={styles.reposGrid}>
                              {githubRepos.slice(0, 4).map((repo) => (
                                <a
                                  key={repo.id}
                                  href={repo.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.repoCard}
                                >
                                  <div className={styles.repoName}>
                                    <FaBook size={13} />
                                    {repo.name}
                                  </div>
                                  <p className={styles.repoDesc}>
                                    {repo.description || 'No description provided'}
                                  </p>
                                  <div className={styles.repoMeta}>
                                    {repo.language && (
                                      <span className={styles.repoLang}>
                                        <span
                                          className={styles.langDot}
                                          style={{
                                            background:
                                              GITHUB_LANG_COLORS[repo.language] ||
                                              GITHUB_LANG_COLORS.default,
                                          }}
                                        />
                                        {repo.language}
                                      </span>
                                    )}
                                    <span>
                                      <FaStar size={11} /> {repo.stargazers_count}
                                    </span>
                                    <span>
                                      <FaCodeBranch size={11} /> {repo.forks_count}
                                    </span>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LeetCode Modal Overlay */}
      <AnimatePresence>
        {leetcodeOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLeetcodeOpen(false)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setLeetcodeOpen(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h2>
                    <LeetCodeIcon className={styles.leetcodeColor} /> LeetCode Stats Dashboard
                  </h2>
                </div>

                {leetcodeLoading ? (
                  <div className={styles.modalLoading}>
                    <div className={styles.modalLoadingSpinner} style={{ borderTopColor: 'var(--accent-secondary)' }} />
                    <p>Fetching real-time LeetCode data...</p>
                  </div>
                ) : (
                  <>
                    {leetcodeError && (
                      <div className={styles.modalBanner}>
                        <p>⚠️ Displaying demo/mock profile data (LeetCode username or API is currently offline)</p>
                      </div>
                    )}

                    <div className={styles.leetcodeDashboard}>
                      {/* Summary Section: Gauge & Bars */}
                      <div className={styles.leetcodeSummarySection}>
                        {/* Solved Problems circular chart */}
                        <div className={styles.leetcodeProgressCircleContainer}>
                          <svg className={styles.circularGauge}>
                            <circle
                              className={styles.gaugeBg}
                              cx="80"
                              cy="80"
                              r={lcCircle.radius}
                            />
                            <circle
                              className={styles.gaugeFill}
                              cx="80"
                              cy="80"
                              r={lcCircle.radius}
                              strokeDasharray={lcCircle.circumference}
                              strokeDashoffset={lcCircle.strokeDashoffset}
                            />
                          </svg>
                          <div className={styles.gaugeCenterText}>
                            <div className={styles.gaugeSolved}>{leetcodeData?.totalSolved || 0}</div>
                            <div className={styles.gaugeLabel}>
                              of {leetcodeData?.totalQuestions || 3250} Solved
                            </div>
                          </div>
                        </div>

                        {/* Difficulty breakdown list */}
                        <div className={styles.leetcodeDifficultySection}>
                          {/* Easy */}
                          <div className={styles.difficultyBarGroup}>
                            <div className={styles.difficultyHeader}>
                              <span className={`${styles.diffName} ${styles.diffEasy}`}>Easy</span>
                              <span className={styles.diffCount}>
                                <span className={styles.diffCountSpan}>{leetcodeData?.easySolved}</span>
                                /{leetcodeData?.totalEasy}
                              </span>
                            </div>
                            <div className={styles.progressBarContainer}>
                              <div
                                className={`${styles.progressBarFill} ${styles.fillEasy}`}
                                style={{
                                  width: `${((leetcodeData?.easySolved || 0) / (leetcodeData?.totalEasy || 1)) * 100}%`,
                                }}
                              />
                            </div>
                          </div>

                          {/* Medium */}
                          <div className={styles.difficultyBarGroup}>
                            <div className={styles.difficultyHeader}>
                              <span className={`${styles.diffName} ${styles.diffMedium}`}>Medium</span>
                              <span className={styles.diffCount}>
                                <span className={styles.diffCountSpan}>{leetcodeData?.mediumSolved}</span>
                                /{leetcodeData?.totalMedium}
                              </span>
                            </div>
                            <div className={styles.progressBarContainer}>
                              <div
                                className={`${styles.progressBarFill} ${styles.fillMedium}`}
                                style={{
                                  width: `${((leetcodeData?.mediumSolved || 0) / (leetcodeData?.totalMedium || 1)) * 100}%`,
                                }}
                              />
                            </div>
                          </div>

                          {/* Hard */}
                          <div className={styles.difficultyBarGroup}>
                            <div className={styles.difficultyHeader}>
                              <span className={`${styles.diffName} ${styles.diffHard}`}>Hard</span>
                              <span className={styles.diffCount}>
                                <span className={styles.diffCountSpan}>{leetcodeData?.hardSolved}</span>
                                /{leetcodeData?.totalHard}
                              </span>
                            </div>
                            <div className={styles.progressBarContainer}>
                              <div
                                className={`${styles.progressBarFill} ${styles.fillHard}`}
                                style={{
                                  width: `${((leetcodeData?.hardSolved || 0) / (leetcodeData?.totalHard || 1)) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Detail Metrics Grid */}
                      <div className={styles.leetcodeStatsGrid}>
                        {/* Ranking */}
                        <div className={styles.leetcodeStatCard}>
                          <div className={styles.leetcodeStatCardIcon}>
                            <FaTrophy />
                          </div>
                          <div className={styles.leetcodeStatCardValue}>
                            {leetcodeData?.ranking ? leetcodeData.ranking.toLocaleString() : 'N/A'}
                          </div>
                          <div className={styles.leetcodeStatCardLabel}>Global Ranking</div>
                        </div>

                        {/* Acceptance Rate */}
                        <div className={styles.leetcodeStatCard}>
                          <div className={styles.leetcodeStatCardIcon}>
                            <FaPercent />
                          </div>
                          <div className={styles.leetcodeStatCardValue}>
                            {leetcodeData?.acceptanceRate}%
                          </div>
                          <div className={styles.leetcodeStatCardLabel}>Acceptance Rate</div>
                        </div>

                        {/* Reputation */}
                        <div className={styles.leetcodeStatCard}>
                          <div className={styles.leetcodeStatCardIcon}>
                            <FaAward />
                          </div>
                          <div className={styles.leetcodeStatCardValue}>
                            {leetcodeData?.reputation ? leetcodeData.reputation.toLocaleString() : 0}
                          </div>
                          <div className={styles.leetcodeStatCardLabel}>Reputation</div>
                        </div>

                        {/* Streak / Points */}
                        <div className={styles.leetcodeStatCard}>
                          <div className={styles.leetcodeStatCardIcon}>
                            <FaFire />
                          </div>
                          <div className={styles.leetcodeStatCardValue}>
                            {leetcodeData?.contributionPoints ? leetcodeData.contributionPoints.toLocaleString() : 0}
                          </div>
                          <div className={styles.leetcodeStatCardLabel}>Contribution Points</div>
                        </div>
                      </div>

                      {/* Link to LeetCode Profile */}
                      <div className={styles.leetcodeProfileLinkSection}>
                        <a
                          href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.leetcodeLink}
                        >
                          <LeetCodeIcon className={styles.leetcodeColor} /> Visit LeetCode Profile <FaExternalLinkAlt size={10} />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
