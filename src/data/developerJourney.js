import syrusCert from '../assets/certificates/syrus-hackathon.png';
import unimergeCert from '../assets/certificates/unimerge.jpg';
import googleCloudCert from '../assets/certificates/google-cloud-study-jam.png';
import googleCloudGifts from '../assets/certificates/google-cloud-study-jam-gifts.jpg';
import summerCert from '../assets/certificates/summer-hackathon.jpg';
import hackAIThonCert from '../assets/certificates/hack-ai-thon.png';

import syrusProjImg from '../assets/projects/syrus.png';
import notenestProjImg from '../assets/projects/notenest.png';
import crisissyncProjImg from '../assets/projects/crisissync.png';
import tatkalProjImg from '../assets/projects/smart-tatkal-guardian.png';
import hiremindProjImg from '../assets/projects/hiremind.png';

// Homepage Bento Grid 3 Cards Data
export const bentoJourneyCards = [
  {
    id: 'vesit-bento',
    type: 'education',
    title: "Joined Vivekanand Education Society's Institute of Technology",
    shortTitle: 'Joined VESIT',
    institution: "VESIT, Mumbai",
    duration: '2025 – 2029',
    program: 'B.Tech in Artificial Intelligence & Data Science',
    highlightBadge: 'Semester 1 • SGPA 10',
    description: 'Began my engineering journey specializing in AI, Machine Learning, and Data Science. Built a strong foundation in Data Structures, Algorithms, and Full-Stack Engineering.',
    fullDescription: 'Started my B.Tech degree in AI & Data Science at VESIT (Vivekanand Education Society\'s Institute of Technology), Mumbai. Achieved a perfect 10.0 SGPA in Semester 1 while actively building real-world full-stack web applications, participating in hackathons, and exploring Machine Learning.',
    role: 'Engineering Student',
    achievements: [
      'Secured 10.0 SGPA in Semester 1',
      'Specialized in AI, Data Structures, and Software Development',
      'Active developer in college tech ecosystem & hackathons'
    ],
    technologies: ['Java', 'Data Structures', 'Python', 'C++', 'SQL', 'Algorithms'],
    accentColor: '#10b981',
    isEducation: true
  },
  {
    id: 'syrus-bento',
    type: 'hackathon',
    title: 'Syrus Hackathon 2026',
    projectName: 'AI-Powered Employee Onboarding Platform',
    statusBadge: 'Top 6 Finalist',
    date: 'March 2026',
    description: 'Syrus bridges the gap between HR and new hires by automating setup steps with Gemini AI, dynamic checklists, and real-time HR analytics.',
    fullDescription: 'An AI-powered employee onboarding platform built for the Syrus Hackathon 2026, where our team ranked in the top 6 finalists. It is designed to bridge the gap between human resources and new hires by automating repetitive setup steps while keeping the human touch.\n\nThe platform provides a Gemini-powered conversational assistant to guide employees through their initial days, dynamic role-based task checklists with tracking, real-time analytics for HR managers, a rich knowledge base of playbooks and docs, automated emails, and customizable settings featuring a timezone work-hour calculator.',
    projectImage: syrusProjImg,
    certificateImage: syrusCert,
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Gemini AI', 'NextAuth', 'Nodemailer', 'Chart.js', 'Framer Motion'],
    achievements: [
      'AI Assistant — Gemini-powered conversational onboarding guide',
      'Dynamic Checklists — Role-based onboarding tasks with deadlines and progress tracking',
      'HR Dashboard — Real-time employee onboarding analytics and roster management',
      'Knowledge Base — Curated resources, playbooks, and architecture docs',
      'Mail System — Automated onboarding and task-completion emails',
      'Starter Tasks — Guided initial tickets for new hires',
      'Settings — Theme, notification preferences, AI response detail, and timezone work-hour calculator'
    ],
    features: [
      'AI Assistant — Gemini-powered conversational onboarding guide',
      'Dynamic Checklists — Role-based onboarding tasks with deadlines and progress tracking',
      'HR Dashboard — Real-time employee onboarding onboarding analytics and roster management',
      'Knowledge Base — Curated resources, playbooks, and architecture docs',
      'Mail System — Automated onboarding and task-completion emails',
      'Starter Tasks — Guided initial tickets for new hires',
      'Settings — Theme, notification preferences, AI response detail, and timezone work-hour calculator'
    ],
    working: [
      'New hire signs in to Syrus via NextAuth',
      'Gemini-powered AI assistant initiates conversational guide',
      'User follows role-specific dynamic checklists with tracked progress',
      'Automated email notifications trigger upon task completion',
      'HR managers monitor employee rosters and metrics via analytics dashboard'
    ],
    github: 'https://github.com/CMPN-CODECELL/Syrus2026_AlgoMinds',
    accentColor: '#eab308',
  },
  {
    id: 'unimerge-bento',
    type: 'hackathon',
    title: 'UniMerge 1.0 Solo Hackathon',
    projectName: 'NoteNest — AI Study Companion',
    statusBadge: 'Best UI/UX Winner',
    date: 'April 2026',
    description: 'Designed and built NoteNest solo in a 48-hour sprint. Recognized for outstanding layout, fluid Framer Motion transitions, and active recall study tools.',
    fullDescription: 'A note-taking application built to help students and developers keep their thoughts organized. I wanted a clean, distraction-free space for study notes, code snippets, and quick ideas — all synced in real-time.\n\nBuilt with React for the frontend and Firebase for live database sync and authentication, this project taught me how client-side state maps to cloud databases and how to manage user sessions securely. The interface features a split-pane layout with a searchable sidebar, tag-based filtering, and a rich text editor.',
    projectImage: notenestProjImg,
    certificateImage: unimergeCert,
    technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion', 'CSS Modules', 'Figma'],
    achievements: [
      'User authentication with Firebase Auth',
      'Real-time note syncing with Firestore',
      'Tag-based organization and color-coded filtering',
      'Instant search bar across all notes',
      'Rich text editing with formatting toolbar',
      'Responsive design for mobile and desktop'
    ],
    features: [
      'User authentication with Firebase Auth',
      'Real-time note syncing with Firestore',
      'Tag-based organization and color-coded filtering',
      'Instant search bar across all notes',
      'Rich text editing with formatting toolbar',
      'Responsive design for mobile and desktop'
    ],
    working: [
      'User logs in and accesses NoteNest dashboard',
      'Create study note in markdown with real-time Firestore sync',
      'AI parses notes to generate spaced-repetition flashcards and interactive mind maps',
      'Practice quizzes test user knowledge and track strengths/weaknesses over time'
    ],
    github: 'https://github.com/nidhipatil57/NoteNest',
    accentColor: '#6366f1',
  }
];

// Full Developer Timeline Data for /journey page
export const fullDeveloperJourney = [
  {
    id: 'vesit-journey',
    type: 'milestone',
    year: '2025 – 2029',
    date: 'August 2025',
    title: "Joined Vivekanand Education Society's Institute of Technology",
    subtitle: 'B.Tech in Artificial Intelligence & Data Science',
    statusBadge: 'Semester 1 • SGPA 10',
    badgeType: 'academic',
    shortDescription: 'Initiated my B.Tech engineering degree at VESIT Mumbai, diving deep into Computer Science fundamentals, Java DSA, and AI.',
    fullDescription: 'Started my B.Tech degree in AI & Data Science at VESIT (Vivekanand Education Society\'s Institute of Technology), Mumbai. Achieved a perfect 10.0 SGPA in Semester 1 while actively building real-world full-stack web applications, participating in hackathons, and exploring Machine Learning.',
    role: 'Engineering Student',
    duration: '2025 – 2029',
    achievements: [
      'Secured 10.0 SGPA in Semester 1',
      'Specialized in AI, Data Structures, and Software Development',
      'Active developer in college tech ecosystem & hackathons'
    ],
    features: [
      'Secured 10.0 SGPA in Semester 1',
      'Specialized in AI, Data Structures, and Software Development',
      'Active developer in college tech ecosystem & hackathons'
    ],
    technologies: ['Java', 'Data Structures', 'Python', 'C++', 'SQL', 'Algorithms'],
    accentColor: '#10b981',
    github: '',
    demo: ''
  },
  {
    id: 'google-cloud-jam',
    type: 'certification',
    year: '2025',
    date: 'October 2025',
    title: 'Google Cloud Study Jam',
    subtitle: 'Hands-on Cloud & Generative AI Labs',
    statusBadge: 'Completed • Cloud Swag Awarded',
    badgeType: 'certificate',
    shortDescription: 'Completed hands-on labs on Google Cloud Compute Engine, Vertex AI, App Engine, and Serverless architectures.',
    fullDescription: 'Participated in the Google Cloud Study Jam program. Completed intense hands-on lab tracks configuring cloud compute instances, serverless functions, Pub/Sub messaging queues, Vertex AI models, and database pipelines on Google Cloud Platform.',
    role: 'Cloud Participant',
    duration: '1 Month Track',
    achievements: [
      'Completed official Google Cloud labs for Compute & GenAI APIs',
      'Mastered serverless deployment on Google Cloud Run & Vertex AI',
      'Awarded Google Cloud Certificate and official Goodies/Swag'
    ],
    features: ['Cloud deployment labs', 'Generative AI & Vertex AI APIs', 'Serverless architectures', 'No-code AppSheet setup'],
    working: ['Access Google Cloud labs console', 'Deploy compute engine and cloud run services', 'Implement Vertex AI pipeline integrations', 'Pass official lab verification checks'],
    technologies: ['Google Cloud Platform', 'Vertex AI', 'App Engine', 'Pub/Sub', 'Compute Engine'],
    certificateImage: googleCloudCert,
    additionalImage: googleCloudGifts,
    accentColor: '#3b82f6',
    github: '',
    demo: ''
  },
  {
    id: 'hack-ai-thon',
    type: 'hackathon',
    year: '2025',
    date: 'Late 2025',
    title: 'Hack AI Thon 4.0',
    subtitle: 'Generative Engine Optimization (GEO) Prototype',
    statusBadge: 'Participant',
    badgeType: 'hackathon',
    shortDescription: 'Built an AI prototype analyzing how LLM search engines (Perplexity, ChatGPT) parse web content structure to optimize citations.',
    fullDescription: 'Built a Generative Engine Optimization (GEO) prototype at Hack AI Thon 4.0. The platform scrapes competitor layouts and queries LLMs to identify content structure gaps, outputting actionable formatting recommendations to maximize AI search citation probabilities.',
    role: 'Full-Stack Developer',
    duration: '36 Hours',
    achievements: [
      'Engineered competitor layout parser and LLM citation matcher',
      'Designed synthetic AI search simulator with live API tracking'
    ],
    features: [
      'Competitor Structure Scraping — Automatically extracts heading levels, tags, and word counts from rival URLs',
      'Synthetic AI Search Simulation — Direct API integration to fetch and monitor target LLM search responses',
      'Format Detection Engine — Classifies AI answers into structural layouts (paragraphs, steps, bullets)',
      'Layout Match Comparison — Compares target site\'s structural density against the AI\'s preferred format',
      'GEO Recommendation Engine — Outputs layout adjustments'
    ],
    working: [
      'Input Details — User provides target website URL and search query',
      'Scrape Competitor Structure — Extracts structural statistics from top competitor pages',
      'AI Query Execution — Queries the LLM search simulator to obtain the AI response',
      'Format & Layout Extraction — Identifies formatting patterns in the AI response',
      'GEO Gap Analysis — Contrasts competitor content layouts against the AI response structures',
      'Generate Visibility Report — Outputs structural recommendations to optimize content for AI citations'
    ],
    technologies: ['Python', 'React', 'Tailwind CSS', 'OpenAI APIs', 'Web Scraping'],
    certificateImage: hackAIThonCert,
    accentColor: '#ec4899',
    github: '',
    demo: ''
  },
  {
    id: 'invictus-hackathon',
    type: 'hackathon',
    year: '2025',
    date: 'Late 2025',
    title: 'Invictus Hackathon',
    subtitle: 'Invictus Hardware Inventory Automation',
    statusBadge: 'Participant',
    badgeType: 'hackathon',
    shortDescription: 'Engineered an automated hardware inventory tracking platform with real-time stock deduction triggers for manufacturing lines.',
    fullDescription: 'Competed in the Invictus Hackathon, building a real-time hardware component stock tracking system. Engineered automatic stock deduction triggers when PCB production logs update, reorder recommendation alerts, and Excel batch processing.',
    role: 'Core Frontend & Logic Developer',
    duration: '24 Hours',
    achievements: [
      'Built real-time stock consumption deduction algorithm',
      'Designed low-stock procurement alert dashboard'
    ],
    features: ['Real-time component stock control', 'Automatic stock deduction logic', 'Procurement alert triggers', 'Excel-based inventory import/export'],
    working: ['PCB production log triggers deduction', 'Stock checks are processed against live inventory', 'Low-stock alert is generated if quantity < 20%', 'Reorder recommendation lists are generated'],
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Node.js'],
    accentColor: '#f43f5e',
    github: '',
    demo: ''
  },
  {
    id: 'syrus-hackathon',
    type: 'hackathon',
    year: '2026',
    date: 'March 2026',
    title: 'Syrus Hackathon 2026',
    subtitle: 'AI-Powered Employee Onboarding Platform',
    statusBadge: 'Top 6 Finalist',
    badgeType: 'finalist',
    shortDescription: 'Syrus bridges the gap between HR and new hires by automating setup steps with Gemini AI, dynamic checklists, and HR analytics.',
    fullDescription: 'An AI-powered employee onboarding platform built for the Syrus Hackathon 2026, where our team ranked in the top 6 finalists. It is designed to bridge the gap between human resources and new hires by automating repetitive setup steps while keeping the human touch.\n\nThe platform provides a Gemini-powered conversational assistant to guide employees through their initial days, dynamic role-based task checklists with tracking, real-time analytics for HR managers, a rich knowledge base of playbooks and docs, automated emails, and customizable settings featuring a timezone work-hour calculator.',
    role: 'AI Integration & UI Architect',
    duration: '36 Hours',
    achievements: [
      'AI Assistant — Gemini-powered conversational onboarding guide',
      'Dynamic Checklists — Role-based onboarding tasks with deadlines and progress tracking',
      'HR Dashboard — Real-time employee onboarding analytics and roster management',
      'Knowledge Base — Curated resources, playbooks, and architecture docs',
      'Mail System — Automated onboarding and task-completion emails',
      'Starter Tasks — Guided initial tickets for new hires',
      'Settings — Theme, notification preferences, AI response detail, and timezone work-hour calculator'
    ],
    features: [
      'AI Assistant — Gemini-powered conversational onboarding guide',
      'Dynamic Checklists — Role-based onboarding tasks with deadlines and progress tracking',
      'HR Dashboard — Real-time employee onboarding analytics and roster management',
      'Knowledge Base — Curated resources, playbooks, and architecture docs',
      'Mail System — Automated onboarding and task-completion emails',
      'Starter Tasks — Guided initial tickets for new hires',
      'Settings — Theme, notification preferences, AI response detail, and timezone work-hour calculator'
    ],
    working: [
      'New hire signs in to Syrus via NextAuth',
      'Gemini-powered AI assistant initiates conversational guide',
      'User follows role-specific dynamic checklists with tracked progress',
      'Automated email notifications trigger upon task completion',
      'HR managers monitor employee rosters and metrics via analytics dashboard'
    ],
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Gemini AI', 'NextAuth', 'Nodemailer', 'Chart.js', 'Framer Motion'],
    projectImage: syrusProjImg,
    certificateImage: syrusCert,
    accentColor: '#eab308',
    github: 'https://github.com/CMPN-CODECELL/Syrus2026_AlgoMinds',
    demo: ''
  },
  {
    id: 'unimerge-hackathon',
    type: 'hackathon',
    year: '2026',
    date: 'April 2026',
    title: 'UniMerge 1.0 Solo Hackathon',
    subtitle: 'NoteNest — AI-Powered Study Companion',
    statusBadge: 'Best UI/UX Winner',
    badgeType: 'winner',
    shortDescription: 'Awarded "Best UI/UX Winner" in a 48-hour solo hackathon for designing and building NoteNest, a real-time developer note-taking & active recall tool.',
    fullDescription: 'Competed solo in UniMerge 1.0 and won the "Best UI/UX" title. Engineered NoteNest, a comprehensive AI-powered study companion with Markdown notes, interactive flashcards, active recall quizzes, mind mapping visualizers, and glassmorphic layout transitions.',
    role: 'Solo Founder & Full-Stack Developer',
    duration: '48 Hours (Solo)',
    achievements: [
      'Won "Best UI/UX Winner" award in UniMerge 1.0',
      'Built complete product solo from concept, Figma designs, to full deployment',
      'Implemented active recall flashcards & interactive mind maps'
    ],
    features: [
      'User authentication with Firebase Auth',
      'Real-time note syncing with Firestore',
      'Tag-based organization and color-coded filtering',
      'Instant search bar across all notes',
      'Rich text editing with formatting toolbar',
      'Responsive design for mobile and desktop'
    ],
    working: [
      'User logs in and accesses NoteNest dashboard',
      'Create study note in markdown with real-time Firestore sync',
      'AI parses notes to generate spaced-repetition flashcards and interactive mind maps',
      'Practice quizzes test user knowledge and track strengths/weaknesses over time'
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Figma', 'CSS Modules'],
    projectImage: notenestProjImg,
    certificateImage: unimergeCert,
    accentColor: '#10b981',
    github: 'https://github.com/nidhipatil57/NoteNest',
    demo: ''
  },
  {
    id: 'crisissync-challenge',
    type: 'hackathon',
    year: '2026',
    date: 'Early 2026',
    title: 'Google Solution Challenge',
    subtitle: 'CrisisSync — AI Crisis Response Platform',
    statusBadge: 'Participant',
    badgeType: 'hackathon',
    shortDescription: 'Built CrisisSync, a real-time crisis response platform for hospitality venues with AI triage (<3s) and sub-200ms multi-role sync.',
    fullDescription: 'Participated in the Google Solution Challenge building CrisisSync — a real-time crisis response and emergency coordination platform for hospitality venues. Features Gemini AI incident classification, sub-second Firebase synchronization, Aggregated Danger Index (ADI) scoring, and three role-based command portals (Guest, Staff, Admin).',
    role: 'Full-Stack Developer',
    duration: 'Hackathon Sprint',
    achievements: [
      'Implemented Gemini AI incident classification in <3 seconds',
      'Built sub-200ms multi-channel synchronization using Firebase RTDB',
      'Designed 3 role-based clearance portals for high-pressure emergency response'
    ],
    features: [
      'Gemini AI Incident Classification — Extracts crisis type, situation briefs, and severity in <3 sec',
      'Three Clearance Portals — Guest (SOS, tracking), Staff (tactical inbox, ADI gauge), Admin (analytics, team control)',
      'ADI Score System — Composite 0-100 urgency metric factoring severity and responder count',
      'Dual-Layer Real-Time Sync — Firebase RTDB + Firestore for sub-second event propagation',
      'On-Demand AI Reports — Post-incident records, executive briefings, and hotspot analysis',
      'Zero-Downtime Key Pool — Automatic 5-key API rotation on rate-limit errors for 99.9% AI uptime'
    ],
    working: [
      'Guest reports emergency SOS via Level 1 clearance portal',
      'Gemini AI classifies incident — extracts severity, briefs, and checklists in <3 sec',
      'Firebase dual-layer sync propagates event to Staff and Admin dashboards in <200ms',
      'Staff responds using Level 2 tactical interface with Google Maps and AI-generated checklists',
      'Admin monitors via Level 3 command dashboard with ADI scores, heatmaps, and live analytics',
      'AI generates post-incident reports, shift handovers, and hotspot analysis on-demand'
    ],
    technologies: ['React', 'Firebase', 'Gemini AI', 'Google Maps API', 'TypeScript', 'Tailwind CSS'],
    projectImage: crisissyncProjImg,
    accentColor: '#06b6d4',
    github: 'https://github.com/krishnasahoo11156/crisissync',
    demo: ''
  },
  {
    id: 'smart-tatkal-guardian',
    type: 'hackathon',
    year: '2026',
    date: 'February 2026',
    title: 'Far Away Hackathon 2026',
    subtitle: 'Smart Tatkal Guardian — Multi-Agent Honeypot System',
    statusBadge: 'Participant',
    badgeType: 'hackathon',
    shortDescription: 'Developed an autonomous 5-agent honeypot system to trap and blacklist automated Tatkal ticket hoarding bots.',
    fullDescription: 'Developed Smart Tatkal Guardian at Far Away Hackathon 2026. Built an autonomous multi-agent honeypot system that analyzes speed and fingerprint metrics, silently trapping high-probability ticket hoarding bots in fake transaction loops to ensure fair IRCTC Tatkal ticket booking for genuine human travelers.',
    role: 'Real-Time Systems & UI Lead',
    duration: '36 Hours',
    achievements: [
      'Designed honeypot isolation architecture for bot requests',
      'Integrated WebSocket real-time analytics dashboard',
      'Boosted simulated human booking success rate from 23% to 94%'
    ],
    features: [
      'Booking Behavior Agent — Analyzes speed, location, and device fingerprints per request',
      'Bot Probability Scorer — Assigns 0–100 score using weighted behavioral rules',
      'Honeypot Agent — Shows fake ticket slots to suspected bots to isolate them',
      'Blacklist Manager — Tracks confirmed bot IDs across sessions',
      'Fairness Monitor — Tracks genuine vs bot booking ratio in real-time'
    ],
    working: [
      'Score Booking Request — Assigns a 0-100 bot probability score based on real-time behavior',
      'Isolate Suspected Bots — Automatically routes high-probability requests to virtual fake ticket slots',
      'Trap with Fake Confirmation — Wait for bots to complete transaction loops',
      'Permanent Blacklist — Logs and blocks the bot credentials permanently after 3 fake attempts',
      'Fast-Track Humans — Routes verified human users to real slots, boosting success rates to 94%'
    ],
    technologies: ['TypeScript', 'Python', 'React', 'WebSockets', 'Machine Learning'],
    projectImage: tatkalProjImg,
    accentColor: '#6366f1',
    github: 'https://github.com/nidhipatil57/Smart-Tatkal-Guardian',
    demo: ''
  },
  {
    id: 'summer-hackathon-hiremind',
    type: 'hackathon',
    year: 'Summer 2026',
    date: 'Summer 2026',
    title: 'Summer Hackathon 2026',
    subtitle: 'HireMind — AI Explainable Hiring Intelligence',
    statusBadge: 'Participant',
    badgeType: 'hackathon',
    shortDescription: 'Built HireMind, an explainable AI recruitment platform featuring skill-gap heatmaps, GitHub/LeetCode profiling, and blind screening mode.',
    fullDescription: 'Competed in Summer Hackathon 2026 organized by SpectrumCircle. Built HireMind for AI-Powered Resume Screening & Candidate Ranking. Engineered explainable AI ranking breakdowns, multi-source developer profiling (GitHub & LeetCode), blind screening mode for bias mitigation, and recruiter feedback learning loops.',
    role: 'AI & Full-Stack Lead',
    duration: '36 Hours',
    achievements: [
      'Built Explainable AI candidate ranking engine with transparent scoring',
      'Implemented Skill-Gap Heatmaps & Blind Screening mode for recruiter bias mitigation',
      'Analyzed GitHub & LeetCode candidate profiles for holistic talent discovery'
    ],
    features: [
      'Explainable AI Ranking — Transparent reasoning for each candidate rank',
      'AI Resume Parsing — PDF/DOCX extraction of skills, experience, and profiles',
      'GitHub & LeetCode Profiling — Multi-source candidate evaluation',
      'Skill Gap Heatmap — Visual match/partial/missing skill comparison',
      'Blind Screening Mode — Bias-free evaluation hiding personal identifiers',
      'Recruiter Feedback Loop — AI accuracy tracking and decision quality metrics',
      'Analytics Dashboard — Hiring funnel, time saved, and screening efficiency'
    ],
    working: [
      'Recruiter uploads Job Description and candidate resumes',
      'AI parses resumes and extracts structured data with profile links',
      'Ranking engine scores candidates with explainable attribution',
      'GitHub and LeetCode profiles are analyzed for additional signal',
      'Skill gap heatmap highlights matches, partials, and missing skills',
      'Blind screening mode enables bias-free candidate evaluation'
    ],
    technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'TypeScript', 'Framer Motion'],
    projectImage: hiremindProjImg,
    certificateImage: summerCert,
    accentColor: '#f97316',
    github: '',
    demo: ''
  }
];
