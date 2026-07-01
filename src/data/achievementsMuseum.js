import hackAIThonCert from '../assets/certificates/hack-ai-thon.png';
import googleCloudJamCert from '../assets/certificates/google-cloud-study-jam.png';
import googleCloudGifts from '../assets/certificates/google-cloud-study-jam-gifts.jpg';
import syrusCert from '../assets/certificates/syrus-hackathon.png';
import unimergeCert from '../assets/certificates/unimerge.jpg';
import summerCert from '../assets/certificates/summer-hackathon.jpg';

import syrusProjImg from '../assets/projects/syrus.png';
import crisissyncProjImg from '../assets/projects/crisissync.png';
import tatkalProjImg from '../assets/projects/smart-tatkal-guardian.png';
import notenestProjImg from '../assets/projects/notenest.png';
import hiremindProjImg from '../assets/projects/hiremind.jpeg';

export const stats = {
  hackathonsAttended: 8,
  wins: '1 (special win)',
  finalistPositions: 1,
  projectsBuilt: 8,
  totalBuildHours: 72,
  teammatesCollaborated: 3
};

export const featuredStories = [
  {
    id: 'unimerge-story',
    title: 'UniMerge 1.0 — Best UI/UX Winner',
    date: 'April 2026',
    status: 'Winner',
    teamSize: 1,
    summary: 'Built NoteNest, a real-time Markdown note-taking tool for developers, securing the "Best UI/UX" title for outstanding layouts and animations.',
    challenge: 'Designing a premium, highly interactive editor and notes organizer solo within a tight 48-hour timeline.',
    solution: 'Engineered a highly responsive React client featuring glassmorphic components, fluid layout transitions with Framer Motion, and a clean dark/light mode system.',
    contributions: 'Conceived the product UI architecture, built the design tokens system, and implemented all transitions and responsive states.',
    obstacles: 'Framer Motion layout shifts during editor resizing; fixed by pinning containers and using layoutId transitions for shared UI elements.',
    learnings: 'Mastered scoped CSS custom properties and how to match UI styling to target user expectations of a premium developer tool.',
    outcome: 'Awarded "Best UI/UX Design" and received highly positive reviews from the community.',
    technologies: ['React', 'Framer Motion', 'Figma', 'CSS Modules'],
    certificateImage: unimergeCert
  },
  {
    id: 'faraway-story',
    title: 'Far Away Hackathon — Smart Tatkal Guardian',
    date: 'February 2026',
    status: 'Participant',
    teamSize: 4,
    summary: 'Developed Smart Tatkal Guardian, a 5-agent honey-pot system designed to identify and trap bot-driven Tatkal hoarding, improving genuine user booking success rates.',
    challenge: 'Mitigating automated bots hoarding IRCTC Tatkal tickets without blocking actual human travelers in high-volume traffic.',
    solution: 'Designed a real-time behavioral classifier that routes suspected requests to fake honeypot transaction loops, trapping bots without alerting them.',
    contributions: 'Built the real-time agent coordination system with WebSockets and designed the analytics dashboard showing live bot metrics.',
    obstacles: 'Simultaneous connection limits on WebSocket pools during heavy traffic spikes; resolved by introducing Redis pub/sub messaging queues.',
    learnings: 'Understood security threat modeling, multi-agent orchestrations, and high-frequency WebSocket optimizations.',
    outcome: 'Successfully logged bot activities and demonstrated how automated ticket hoarding can be bypassed.',
    technologies: ['TypeScript', 'Python', 'React', 'WebSocket', 'Machine Learning']
  },
  {
    id: 'syrus-story',
    title: 'Syrus Hackathon 2026 — Top 6 Finalist',
    date: 'March 2026',
    status: 'Finalist',
    teamSize: 4,
    summary: 'Reached the top 6 finals in the industry-sponsored Syrus Hackathon, building an AI-powered onboarding platform designed to provide a seamless onboarding experience and efficient HR management.',
    challenge: 'Creating an end-to-end employee onboarding flow that is highly customizable, interactive, and AI-driven within 36 hours.',
    solution: 'Designed and built a modern platform featuring a Gemini AI conversational guide, role-based dynamic checklists, real-time analytics, automated emails, and work-hour tools.',
    contributions: 'Worked on the conversational AI guide (Gemini integration), the HR dashboard analytics, and core UI design using Tailwind CSS 4.',
    obstacles: 'Managing complex state and deadlines across dynamic role checklists; resolved by building a robust server-side analytics layer and unified Next.js API endpoints.',
    learnings: 'Deepened understanding of Next.js 16 App Router structures, AI-powered conversational UIs, and real-time Chart.js rendering.',
    outcome: 'Ranked in the top 6 national finalists out of numerous competitive teams.',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Gemini AI', 'NextAuth', 'Chart.js'],
    certificateImage: syrusCert
  },
  {
    id: 'summer-hackathon-story',
    title: 'Summer Hackathon 2026 — HireMind',
    date: 'Summer 2026',
    status: 'Participant',
    teamSize: 4,
    summary: 'Built HireMind, an AI-Powered Explainable Hiring Intelligence Platform that transforms hiring from resume screening to intelligent talent discovery with explainable AI, skill-gap analysis, and blind screening.',
    challenge: 'Building a transparent, bias-aware AI recruitment system that goes beyond simple resume scoring to provide explainable rankings, multi-source candidate profiling, and recruiter feedback loops.',
    solution: 'Designed an end-to-end hiring intelligence platform with explainable AI ranking, GitHub & LeetCode profile analysis, skill-gap heatmaps, blind screening mode, and a recruiter feedback learning loop.',
    contributions: 'Architected the candidate ranking engine with explainability, built the skill-gap heatmap visualization, and implemented the blind screening mode and analytics dashboard.',
    obstacles: 'Integrating multiple data sources (resumes, GitHub, LeetCode) into a unified candidate score while maintaining transparency; resolved by creating a weighted scoring system with clear attribution breakdowns.',
    learnings: 'Gained deep understanding of explainable AI in recruitment, bias mitigation through blind screening, and building recruiter feedback loops for continuous AI improvement.',
    outcome: 'Successfully delivered a comprehensive hiring intelligence platform addressing Problem Statement 3 (AI-Powered Resume Screening & Candidate Ranking System).',
    technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'TypeScript', 'Framer Motion'],
    certificateImage: summerCert
  }
];

export const hackathonsList = [
  {
    id: 'syrus',
    title: 'Syrus Hackathon',
    projectName: 'Autonomous Onboarding Agent',
    date: 'March 17-18, 2026',
    status: 'Top 6 Finalist',
    summary: 'Reclaimed top spots in the industry-sponsored Syrus Hackathon 2026 organized by VESIT CodeCell++ in association with VESIT-IIC & IQAC.',
    glowColor: '#eab308', // Gold/Amber
    certificateImage: syrusCert,
    projectImage: syrusProjImg,
    infoText: 'We built a modern employee onboarding platform in the competitive Syrus Hackathon, focusing on solving operational inefficiencies in corporate onboarding processes.',
    howSolved: 'Designed and built a web platform featuring AI-guided workflows and robust security controls.',
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
    github: 'https://github.com/CMPN-CODECELL/Syrus2026_AlgoMinds',
    demo: ''
  },
  {
    id: 'google-cloud-study-jam',
    title: 'Google Cloud Study Jam',
    subtitle: 'Hands On Lab',
    date: 'October 2025',
    status: 'Completed',
    summary: 'Successfully completed the Google Cloud Study Jam, gaining hands-on experience with Google Cloud Compute and Storage services, AppSheet, AppScript, App Engine, Pub/Sub, Dataplex, API Gateway, and Vertex AI/Gemini.',
    glowColor: '#3b82f6', // Google Blue
    images: [
      { type: 'certificate', url: googleCloudJamCert, label: 'Completion Certificate' },
      { type: 'gifts', url: googleCloudGifts, label: 'Google Goodies & Swag' }
    ],
    infoText: 'Participated in the hands-on Google Cloud program designed to master cloud infrastructure, GenAI APIs, database management, and deployment strategies on Google Cloud Platform.',
    infoHeading: 'Info about the Program',
    howSolved: 'Completed various Google Cloud self-paced labs, configuring compute instances, serverless functions, Vertex AI models, and database synchronization.',
    solutionHeading: 'How I completed the labs',
    features: ['Cloud deployment labs', 'Generative AI & Vertex AI APIs', 'Serverless architectures', 'No-code AppSheet setup'],
    working: ['Access Google Cloud labs console', 'Deploy compute engine and cloud run services', 'Implement Vertex AI pipeline integrations', 'Pass official lab verification checks'],
    github: '',
    demo: ''
  },
  {
    id: 'google-solution-challenge',
    title: 'Google Solution Challenge',
    subtitle: 'All India Hackathon',
    projectName: 'CrisisSync',
    date: '2026',
    status: 'Participant',
    summary: 'Participated in the Google Solution Challenge, building CrisisSync — a real-time crisis response platform with AI-powered triage (<3 sec), <200ms sync latency, and three role-based clearance portals.',
    glowColor: '#06b6d4', // Cyan
    hasNoImage: true,
    projectImage: crisissyncProjImg,
    infoHeading: 'Info about the Challenge, Problem',
    infoText: 'We built CrisisSync - a real-time crisis response and emergency coordination platform purpose-built for hospitality venues. It combines AI-powered incident classification, real-time multi-channel synchronization, and role-based clearance command interfaces to transform how hotels, resorts, and event venues respond to emergencies. Built with the "Aegis Protocol" design system — a dark, atmospheric UI combining rigid technical precision with fluid depth — every pixel is engineered for high-pressure decision-making where seconds matter. Performance targets: <5 min response time, <3 sec AI triage, <200ms sync latency, and 99.9% uptime.',
    howSolved: 'Engineered a full-stack tactical communication platform using Firebase and Gemini AI with three dedicated clearance portals, an AI-powered incident classification engine, and an Aggregated Danger Index (ADI) scoring system.',
    solutionHeading: 'How we solved the problem',
    features: [
      'Gemini AI Incident Classification — Extracts crisis type, 5-tier severity, situation briefs, response roles, checklists, and emotional state',
      'Three Clearance Portals — Guest (SOS, tracking), Staff (tactical inbox, Google Maps, ADI gauge, FCM alerts), Admin (analytics, team control, AI briefings)',
      'ADI Score System — Composite 0-100 urgency metric factoring severity, elapsed time, idle duration, responder count, and crisis type multipliers',
      'Dual-Layer Real-Time Sync — Firebase RTDB + Firestore for sub-second event propagation',
      'On-Demand AI Reports — Post-incident records, executive briefings, monthly analytics, shift handovers, and hotspot analysis',
      'Zero-Downtime Key Pool — Automatic 5-key API rotation on rate-limit errors for 99.9% AI uptime'
    ],
    working: [
      'Guest reports emergency SOS via Level 1 clearance portal',
      'Gemini AI classifies incident — extracts severity, briefs, checklists, and emotional state in <3 sec',
      'Firebase dual-layer sync propagates event to Staff and Admin dashboards in <200ms',
      'Staff responds using Level 2 tactical interface with Google Maps and AI-generated action checklists',
      'Admin monitors via Level 3 command dashboard with ADI scores, heatmaps, and live analytics',
      'AI generates post-incident reports, shift handovers, and hotspot analysis on-demand'
    ],
    github: 'https://github.com/krishnasahoo11156/crisissync',
    demo: ''
  },
  {
    id: 'unimerge',
    title: 'UniMerge Hackathon',
    subtitle: 'Solo Hackathon',
    projectName: 'NoteNest',
    isSolo: true,
    date: 'April 2026',
    status: 'UI/UX Winner',
    summary: 'Secured the "Best UI/UX Winner" award in the UniMerge hackathon, showcasing exceptional product design, animation smoothness, and interface clarity.',
    glowColor: '#10b981', // Emerald
    certificateImage: unimergeCert,
    projectImage: notenestProjImg,
    infoText: 'Participated in this solo hackathon and I built- NoteNest - an AI-powered study companion that helps students organize notes, generate quizzes and flashcards, visualize concepts, plan learning goals, and track academic progress—all from a single platform.',
    howSolved: 'Engineered NoteNest, an AI-powered study companion focusing on active recall, personalized schedules, and layout transitions.',
    solutionHeading: 'Features & Working',
    features: [
      'Dashboard — Get an overview of your learning progress, streaks, and activity',
      'Notes — Create, organize, and manage your study notes in one place',
      'Study Materials — Store and access learning resources and reference content',
      'Flashcards — Review key concepts using active recall and spaced repetition',
      'Quizzes — Test your knowledge with AI-generated practice quizzes',
      'Mind Maps — Visualize topics and their connections through interactive diagrams',
      'Profile — View your statistics, achievements, and learning activity'
    ],
    working: [
      'AI Study Planner — Build personalized study schedules and track completion',
      'Knowledge Graph — Explore relationships between concepts across your learning journey',
      'Study Groups — Collaborate, share resources, and learn with others',
      'Analytics — Track performance, study habits, and learning trends',
      'Achievements — Unlock badges, XP, and milestones as you progress',
      'Focus Mode — Enter a distraction-free environment for productive study sessions'
    ],
    github: 'https://github.com/nidhipatil57/NoteNest',
    demo: ''
  },
  {
    id: 'far-away',
    title: 'FAR AWAY HACKATHON - 2026',
    projectName: 'Smart Tatkal Guardian',
    date: 'February 2026',
    status: 'Participant',
    summary: 'Developed Smart Tatkal Guardian, an autonomous multi-agent honey-pot system designed to identify, trap, and blacklist automated booking bots to ensure fair IRCTC Tatkal ticket distribution.',
    glowColor: '#6366f1', // Indigo
    hasNoImage: true,
    projectImage: tatkalProjImg,
    infoHeading: 'The Problem & Context',
    infoText: 'IRCTC Tatkal booking opens daily at 10AM — and all tickets are gone in under 5 minutes. High-speed script bots and black market operators hoard bookings first, then resell them at 5x markup. Even with modern bot detection, they evolve continuously. Statistics show: 60 Billion bot requests blocked (Jul-Dec 2025), 3.03 Crore suspicious user IDs deactivated in 2025, and 501 complaints with 4.18 Lakh suspicious PNRs logged on the Cyber Crime Portal.',
    howSolved: 'Collaborated in a team of 4 to design and engineer a multi-agent honeypot system that silently redirects suspected bot requests to isolated booking queues, permanently blacklisting them after three fake transactions.',
    solutionHeading: 'Honeypot Architecture & Agents',
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
      'Trap with Fake Confirmation — Wait for bots to complete transaction loops (which they always do)',
      'Permanent Blacklist — Logs and blocks the bot credentials permanently after 3 fake attempts',
      'Fast-Track Humans — Routes verified human users to real slots, boosting success rates to 94% (vs 23% without)'
    ],
    github: 'https://github.com/nidhipatil57/Smart-Tatkal-Guardian',
    demo: ''
  },
  {
    id: 'summer-hackathon',
    title: 'Summer Hackathon',
    projectName: 'HireMind',
    date: 'Summer 2026',
    status: 'Participant',
    summary: 'Participated in the Summer Hackathon 2026 organized by SpectrumCircle, building HireMind — an AI-Powered Explainable Hiring Intelligence Platform.',
    glowColor: '#f97316', // Orange
    certificateImage: summerCert,
    projectImage: hiremindProjImg,
    infoText: 'Built for Problem Statement 3 (AI-Powered Resume Screening & Candidate Ranking System), HireMind is designed to help recruiters, hiring managers, and organizations make faster, fairer, and more data-driven hiring decisions. Unlike traditional ATS that simply rank candidates, HireMind provides transparent AI explanations, candidate skill-gap analysis, GitHub and LeetCode profiling, blind screening support, and recruiter feedback learning loops.',
    howSolved: 'Engineered a full-stack AI recruitment intelligence platform with explainable candidate rankings, multi-source profiling, and bias mitigation features.',
    solutionHeading: 'How we built the solution',
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
    github: '',
    demo: ''
  },
  {
    id: 'hack-ai-thon',
    title: 'Hack AI Thon 4.0',
    subtitle: 'Generative Engine Optimization (GEO) Platform',
    projectName: 'GEO Platform',
    date: '2025',
    status: 'Participant',
    summary: 'Built a Generative Engine Optimization (GEO) prototype that analyzes how AI search engines synthesize web content and provides structure-based ranking recommendations.',
    glowColor: '#ec4899', // Pink
    certificateImage: hackAIThonCert,
    infoHeading: 'The Challenge & Platform Context',
    infoText: 'This platform simulates how generative AI search engines (such as Perplexity, Gemini, and ChatGPT Search) consume, synthesize, and prioritize structured web content. By comparing real-time AI-generated answers against competitor page structures, we identify optimization gaps and provide actionable GEO recommendations to improve a website\'s visibility and citation probability in generative search results.',
    howSolved: 'Developed a GEO intelligence tool that scrapes competitor page layouts, queries generative models to analyze response patterns, and maps layout recommendations to win high-visibility citation spots.',
    solutionHeading: 'GEO Analytics & Operations',
    features: [
      'Competitor Structure Scraping — Automatically extracts heading levels, tags, and word counts from rival URLs',
      'Synthetic AI Search Simulation — Direct API integration to fetch and monitor target LLM search responses',
      'Format Detection Engine — Classifies AI answers into structural layouts (paragraphs, steps, bullets)',
      'Layout Match Comparison — Compares target site\'s structural density against the AI\'s preferred format',
      'GEO Recommendation Engine — Outputs layout adjustments (e.g. "Convert H2 to bulleted lists to win Gemini citation blocks")'
    ],
    working: [
      'Input Details — User provides the target website URL along with their primary topic or search query',
      'Scrape Competitor Structure — System extracts structural and text statistics from top-ranking competitor pages',
      'AI Query Execution — Queries the LLM search simulator with the target question to obtain the AI response',
      'Format & Layout Extraction — Classifies and tokenizes the AI response to identify its formatting patterns',
      'GEO Gap Analysis — Contrasts competitor content layouts against the AI response structures',
      'Generate Visibility Report — Outputs structural recommendations to optimize content for AI citations'
    ],
    github: '',
    demo: ''
  },
  {
    id: 'invictus',
    title: 'Invictus Hackathon',
    projectName: 'Invictus Inventory',
    date: '2025',
    status: 'Participant',
    summary: 'Participated in the Invictus Hackathon, engineering software solutions and presenting pitches to a panel of judges.',
    glowColor: '#f43f5e', // Rose
    hasNoImage: true,
    infoText: 'Competed in the Invictus Hackathon, tackling a complex inventory and consumption automation challenge for hardware manufacturing under time-constrained environments.',
    howSolved: 'Engineered a comprehensive inventory dashboard and procurement trigger system using custom tracking logic.',
    features: ['Real-time component stock control', 'Automatic stock deduction logic', 'Procurement alert triggers', 'Excel-based inventory import/export'],
    working: ['PCB production log triggers deduction', 'Stock checks are processed against live inventory', 'Low-stock alert is generated if quantity < 20%', 'Reorder recommendation lists are generated'],
    github: '',
    demo: ''
  }
];
