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
    duration: '1 Month Hands-On Track',
    achievements: [
      'Completed official Google Cloud labs for Compute & GenAI APIs',
      'Mastered serverless deployment on Google Cloud Run & Vertex AI',
      'Awarded Google Cloud Certificate and official Goodies/Swag'
    ],
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
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Node.js'],
    accentColor: '#f43f5e',
    github: '',
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
    technologies: ['TypeScript', 'Python', 'React', 'WebSockets', 'Machine Learning'],
    projectImage: tatkalProjImg,
    accentColor: '#6366f1',
    github: 'https://github.com/nidhipatil57/Smart-Tatkal-Guardian',
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
    technologies: ['React', 'Firebase', 'Gemini AI', 'Google Maps API', 'TypeScript', 'Tailwind CSS'],
    projectImage: crisissyncProjImg,
    accentColor: '#06b6d4',
    github: 'https://github.com/krishnasahoo11156/crisissync',
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
    technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'TypeScript', 'Framer Motion'],
    projectImage: hiremindProjImg,
    certificateImage: summerCert,
    accentColor: '#f97316',
    github: '',
    demo: ''
  }
];
