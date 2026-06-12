import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import styles from './GitHub.module.css';

const GITHUB_USERNAME = 'nidhipatil57';

const LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  TypeScript: '#3178c6',
  default: '#6366f1',
};

// Fallback data if API fails
const FALLBACK_USER = {
  avatar_url: '',
  name: 'Nidhi Patil',
  bio: 'First-Year B.Tech AI & DS Student | Building projects & learning every day',
  public_repos: 5,
  followers: 2,
  following: 5,
  html_url: `https://github.com/${GITHUB_USERNAME}`,
};

const FALLBACK_REPOS = [
  { id: 1, name: 'Nidhi_Portfolio', description: 'My personal developer portfolio built with React', language: 'JavaScript', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/Nidhi_Portfolio` },
  { id: 2, name: 'NoteNest', description: 'A modern note-taking app with React and Firebase', language: 'JavaScript', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/NoteNest` },
  { id: 3, name: 'weather-dashboard', description: 'Real-time weather dashboard using OpenWeather API', language: 'HTML', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/weather-dashboard` },
  { id: 4, name: 'quiz-app', description: 'Interactive quiz application with multiple categories', language: 'JavaScript', stargazers_count: 0, forks_count: 0, html_url: `https://github.com/${GITHUB_USERNAME}/quiz-app` },
];

export default function GitHub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(false);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
      ]);

      if (!userRes.ok || !reposRes.ok) throw new Error('API Error');

      const userData = await userRes.json();
      const reposData = await reposRes.json();

      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      console.warn('GitHub API failed, using fallback data:', err);
      setUser(FALLBACK_USER);
      setRepos(FALLBACK_REPOS);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className={`section ${styles.github}`} id="github">
        <div className="container">
          <SectionTitle label="github" title="My Activity" />
          <div className={styles.loading}>
            <div className={styles.loadingSpinner} />
            <p>Loading GitHub data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${styles.github}`} id="github">
      <div className="container">
        <SectionTitle
          label="github"
          title="My Activity"
          subtitle="A live look at my coding commits and public repositories"
        />

        <div className={styles.githubGrid}>
          {/* Profile Card */}
          <ScrollReveal variant="slideLeft">
            <div className={styles.profileCard}>
              <div className={styles.avatar}>
                {user?.avatar_url ? (
                  <img src={user.avatar_url} alt="GitHub Avatar" loading="lazy" />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'var(--accent-gradient)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.5rem', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700,
                  }}>
                    N
                  </div>
                )}
              </div>
              <h3 className={styles.profileName}>{user?.name || GITHUB_USERNAME}</h3>
              <p className={styles.profileBio}>{user?.bio || FALLBACK_USER.bio}</p>

              <div className={styles.profileStats}>
                <div className={styles.profileStat}>
                  <div className={styles.profileStatNumber}>{user?.public_repos || 0}</div>
                  <div className={styles.profileStatLabel}>Repos</div>
                </div>
                <div className={styles.profileStat}>
                  <div className={styles.profileStatNumber}>{user?.followers || 0}</div>
                  <div className={styles.profileStatLabel}>Followers</div>
                </div>
                <div className={styles.profileStat}>
                  <div className={styles.profileStatNumber}>{user?.following || 0}</div>
                  <div className={styles.profileStatLabel}>Following</div>
                </div>
              </div>

              <a
                href={user?.html_url || FALLBACK_USER.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub /> View Profile <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <div className={styles.githubContent}>
            {/* Stats Cards */}
            <ScrollReveal variant="fadeUp">
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
            </ScrollReveal>

            {/* Contribution Graph */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className={styles.statsCard}>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=6366f1&fire=f59e0b&currStreakLabel=f3f4f6&sideLabels=9ca3af&dates=6b7280&background=00000000&stroke=1f2937`}
                  alt="GitHub Streak"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            {/* Repositories */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className={styles.reposSection}>
                <h3>📁 Recent Repositories</h3>
                <div className={styles.reposGrid}>
                  {repos.slice(0, 4).map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoCard}
                    >
                      <div className={styles.repoName}>
                        <FaBook size={14} />
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
                                background: LANG_COLORS[repo.language] || LANG_COLORS.default,
                              }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span><FaStar size={11} /> {repo.stargazers_count}</span>
                        <span><FaCodeBranch size={11} /> {repo.forks_count}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {error && (
              <div className={styles.error}>
                <p>⚠️ Using cached data — GitHub API might be rate-limited</p>
                <button className={`btn btn-secondary ${styles.retryBtn}`} onClick={fetchGitHubData}>
                  Retry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
