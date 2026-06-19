import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
  SiPrisma,
  SiPython,
  SiReact,
  SiFirebase,
  SiFramer,
  SiNodedotjs,
} from 'react-icons/si';
import { FaRobot, FaServer, FaShieldAlt, FaCss3Alt, FaEnvelope, FaChartBar, FaGoogle, FaBrain, FaEye } from 'react-icons/fa';

import syrusImg from '../assets/projects/syrus.png';
import crisissyncImg from '../assets/projects/crisissync.png';
import nexoraImg from '../assets/projects/nexora.png';
import nutribloomImg from '../assets/projects/nutribloom.png';
import tatkalImg from '../assets/projects/smart-tatkal-guardian.png';
import notenestImg from '../assets/projects/notenest.png';
import hiremindImg from '../assets/projects/hiremind.png';

const projects = [
  {
    id: 'syrus',
    title: 'Syrus',
    tagline: 'AI-Powered Employee Onboarding Platform',
    shortDescription:
      'A modern, AI-driven onboarding platform built at Syrus Hackathon 2026, designed to provide a seamless onboarding experience for new employees and an efficient management dashboard for HR teams.',
    fullDescription: `Syrus is an AI-powered employee onboarding platform built for the Syrus Hackathon 2026, where our team ranked in the top 6 finalists. It is designed to bridge the gap between human resources and new hires by automating repetitive setup steps while keeping the human touch.

The platform provides a Gemini-powered conversational assistant to guide employees through their initial days, dynamic role-based task checklists with tracking, real-time analytics for HR managers, a rich knowledge base of playbooks and docs, automated emails, and customizable settings featuring a timezone work-hour calculator.`,
    features: [
      'AI Assistant — Gemini-powered conversational onboarding guide',
      'Dynamic Checklists — Role-based onboarding tasks with deadlines and progress tracking',
      'HR Dashboard — Real-time employee onboarding analytics and roster management',
      'Knowledge Base — Curated resources, playbooks, and architecture docs',
      'Mail System — Automated onboarding and task-completion emails',
      'Starter Tasks — Guided initial tickets for new hires',
      'Settings — Theme, notification preferences, AI response detail, and timezone work-hour calculator',
    ],
    techStack: [
      { name: 'Next.js 16', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS 4', icon: SiTailwindcss },
      { name: 'Gemini AI', icon: FaGoogle },
      { name: 'NextAuth', icon: FaShieldAlt },
      { name: 'Nodemailer', icon: FaEnvelope },
      { name: 'Chart.js', icon: FaChartBar },
      { name: 'Framer Motion', icon: SiFramer },
    ],
    github: 'https://github.com/CMPN-CODECELL/Syrus2026_AlgoMinds',
    demo: null,
    image: syrusImg,
    featured: false,
    date: '2026',
    accentColor: '#eab308',
  },
  {
    id: 'crisissync',
    title: 'CrisisSync',
    tagline: 'Real-Time Emergency Coordination & Triage Platform',
    shortDescription:
      'An AI-powered emergency management and response synchronization platform built for the Google Solution Challenge, purpose-built for hospitality venues with <5 min response time, <3 sec AI triage, and <200ms sync latency.',
    fullDescription: `CrisisSync is a real-time crisis response and emergency coordination platform purpose-built for hospitality venues. It combines AI-powered incident classification, real-time multi-channel synchronization, and role-based command interfaces to transform how hotels, resorts, and event venues respond to emergencies.

Built with the "Aegis Protocol" design system — a dark, atmospheric UI combining rigid technical precision with fluid depth — every pixel is engineered for high-pressure decision-making where seconds matter.

The platform provides three dedicated clearance portals: Guest (Level 1) for emergency SOS reporting and live status tracking, Staff (Level 2) for tactical incident inbox with Google Maps and AI-generated action checklists, and Admin (Level 3) for full command & control with analytics dashboards, staff management, and on-demand AI briefings.

Every incoming report is processed through Gemini AI to extract crisis type, 5-tier severity, tactical situation briefs, suggested actions, response roles, 4-step action checklists, and emotional state assessment. The ADI (Aggregated Danger Index) calculates a composite 0-100 urgency score factoring severity level, time elapsed, idle duration, responder count, and crisis type multipliers.`,
    features: [
      'Gemini AI Incident Classification Engine — Extracts crisis type, 5-tier severity, situation briefs, suggested actions, response roles, checklists, and emotional state assessment',
      'Three Clearance Portals — Guest (SOS, tracking, history), Staff (tactical inbox, Google Maps, ADI gauge, FCM alerts), Admin (analytics, team control, venue config, AI briefings)',
      'ADI Score System — Aggregated Danger Index (0-100) factoring severity, elapsed time, idle duration, responder count, and crisis type multipliers',
      'Dual-Layer Real-Time Sync — Sub-second event propagation via Firebase RTDB + Firestore with <200ms sync latency',
      'On-Demand AI Reports — Post-incident records, executive briefings, monthly analytics, shift handover docs, and hotspot analysis with prevention insights',
      'Zero-Downtime Key Pool — Automatic API key rotation across 5-key pool on rate-limit (429) errors for 99.9% AI uptime',
      'Performance Targets — <5 min response time, <3 sec AI triage, <200ms sync latency, 99.9% uptime',
    ],
    techStack: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Gemini AI', icon: FaGoogle },
      { name: 'Framer Motion', icon: SiFramer },
    ],
    github: 'https://github.com/krishnasahoo11156/crisissync',
    demo: null,
    image: crisissyncImg,
    featured: false,
    date: '2026',
    accentColor: '#06b6d4',
  },
  {
    id: 'nexora',
    title: 'Nexora',
    tagline: 'AI-powered career guidance platform',
    shortDescription:
      'A full-stack Next.js platform that analyzes aptitude, personality, and aspirations to deliver personalized career recommendations, skill-gap analysis, and AI mentorship.',
    fullDescription: `Nexora is an AI-powered career intelligence platform I designed and built end-to-end. It provides cognitive profiling through adaptive assessments, generates personalized 1–5–10 year career roadmaps, and offers a 24/7 AI mentor chat for resume reviews and interview prep.

The platform features a premium dark-themed UI with glassmorphic cards, smooth animations, and a cinematic onboarding flow. Under the hood, it uses Next.js App Router with server components, Neon PostgreSQL for persistent storage, and Prisma ORM for type-safe queries.`,
    features: [
      'Adaptive AI career assessment & cognitive profiling',
      'Personalized career recommendations with match scores',
      'Interactive 1, 3, 5, 10-year career roadmap visualizer',
      'Skill gap radar with prioritized improvement plans',
      'AI mentor chat for resume, interviews & career decisions',
      'Gamified growth system with XP, streaks & milestones',
      'ATS-optimized resume & portfolio builder',
      'Real-time market intelligence & salary forecasts',
    ],
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Vercel', icon: SiVercel },
    ],
    github: 'https://github.com/nidhipatil57/Nexora',
    demo: 'https://nexora-phi-umber.vercel.app',
    image: nexoraImg,
    featured: false,
    date: '2026',
    accentColor: '#8B5CF6',
  },
  {
    id: 'nutribloom',
    title: 'NutriBloom',
    tagline: 'A closed-loop nutrition intelligence platform',
    shortDescription:
      'A full-stack nutrition tracking and planning platform built with Next.js 16, Prisma, and NextAuth v5 that helps users discover recipes, log intake, and receive AI insights in a dark UI.',
    fullDescription: `NutriBloom is a full-stack nutrition intelligence platform that goes far beyond simple calorie counting. It provides a closed-loop system where users can discover healthy recipes, plan their weekly meals day-by-day, log their daily food intake, and get smart AI-powered insights about their nutritional trends.

The platform is designed around the "NutriBloom Loop" concept: Search & Discover → Plan & Organize → Track & Log → Analyze & Improve. Built with a premium, dark-mode-first aesthetic, it auto-generates grocery lists directly from meal plans, and utilizes a secure authentication system powered by NextAuth v5 and Prisma.`,
    features: [
      'Smart Recipe Discovery: Search 1,000+ recipes filtered by nutrition, cuisine, and dietary needs',
      'Nutrition Dashboard: Track calories and macros (protein, carbs, fat) with real-time progress rings',
      'Weekly Meal Planner: Plan your entire week day-by-day and meal-by-meal',
      'Auto-generated Grocery Lists: Categorized and aisle-sorted lists generated directly from meal plans',
      'AI Insights Engine: Behavior-driven nutrition recommendations that improve as you log',
      'Analytics & Trends: View weekly/monthly calorie trends and macro breakdowns',
      'Secure Authentication: Built using NextAuth v5 (beta) and Prisma adapter',
      'Custom Nutritional Goals: Set personalized daily calorie, protein, carb, and fat targets',
    ],
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Framer Motion', icon: SiFramer },
    ],
    github: 'https://github.com/nidhipatil57/NutriBloom',
    demo: null,
    image: nutribloomImg,
    featured: false,
    date: '2026',
    accentColor: '#10b981',
  },
  {
    id: 'notenest',
    title: 'NoteNest',
    tagline: 'A modern note-taking app for developers',
    shortDescription:
      'A clean, organized note-taking web application built with React and Firebase for real-time syncing, tag-based organization, and instant search across all notes.',
    fullDescription: `NoteNest is a note-taking application I built to help students and developers keep their thoughts organized. I wanted a clean, distraction-free space for study notes, code snippets, and quick ideas — all synced in real-time.

Built with React for the frontend and Firebase for live database sync and authentication, this project taught me how client-side state maps to cloud databases and how to manage user sessions securely. The interface features a split-pane layout with a searchable sidebar, tag-based filtering, and a rich text editor.`,
    features: [
      'User authentication with Firebase Auth',
      'Real-time note syncing with Firestore',
      'Tag-based organization and color-coded filtering',
      'Instant search bar across all notes',
      'Rich text editing with formatting toolbar',
      'Responsive design for mobile and desktop',
    ],
    techStack: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'CSS Modules', icon: FaCss3Alt },
    ],
    github: 'https://github.com/nidhipatil57/NoteNest',
    demo: null,
    image: notenestImg,
    featured: false,
    date: '2025',
    accentColor: '#6366f1',
  },
  {
    id: 'smart-tatkal-guardian',
    title: 'Smart Tatkal Guardian',
    tagline: 'Multi-agent bot detection system for IRCTC',
    shortDescription:
      'An autonomous multi-agent system built at FAR AWAY 2026 Hackathon that detects bot-driven Tatkal ticket hoarding in real-time using a honeypot strategy, achieving a 94% genuine user success rate.',
    fullDescription: `Smart Tatkal Guardian is a hackathon project I built with Team AlgoMinds at FAR AWAY 2026. It tackles the massive problem of bots hoarding IRCTC Tatkal tickets — where 60 billion bot requests were blocked in just 6 months.

Instead of simply blocking bots (which tips them off), we designed a deception-based honeypot approach. Every booking request is scored 0–100 for bot probability, high-score requests are routed to fake ticket slots, and after 3 confirmations, the bot is permanently blacklisted. Genuine users are fast-tracked to real slots.

The system uses 5 autonomous agents working in concert: a Booking Behavior Agent, Bot Probability Scorer, Honeypot Agent, Blacklist Manager, and a Decision Orchestrator — all communicating via WebSocket for real-time updates.`,
    features: [
      'Real-time bot probability scoring (0–100) per request',
      'Honeypot deception: fake ticket slots to trap bots',
      '5 autonomous agents working in concert',
      '94% genuine user success rate vs 23% baseline',
      'Live monitoring dashboard with WebSocket streams',
      'Handles 1,000+ requests/second at scale',
      'Permanent blacklisting after 3 honeypot confirmations',
      'Simulator generating 80% bot / 20% human traffic',
    ],
    techStack: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'React', icon: SiReact },
      { name: 'WebSocket', icon: FaServer },
      { name: 'AI/ML', icon: FaRobot },
      { name: 'Security', icon: FaShieldAlt },
    ],
    github: 'https://github.com/nidhipatil57/Smart-Tatkal-Guardian',
    demo: null,
    image: tatkalImg,
    featured: false,
    date: '2026',
    accentColor: '#22c55e',
  },
  {
    id: 'hiremind',
    title: 'HireMind',
    tagline: 'AI-Powered Explainable Hiring Intelligence Platform',
    shortDescription:
      'An AI-powered recruitment intelligence platform built at the Summer Hackathon 2026 that transforms hiring from resume screening to intelligent talent discovery with explainable AI, skill-gap analysis, and blind screening.',
    fullDescription: `HireMind is an AI-powered recruitment intelligence platform designed to help recruiters, hiring managers, and organizations make faster, fairer, and more data-driven hiring decisions.

Unlike traditional Applicant Tracking Systems (ATS) that simply rank candidates, HireMind provides transparent AI explanations, candidate skill-gap analysis, GitHub and LeetCode profiling, blind screening support, and recruiter feedback learning loops.

Built for the Summer Hackathon 2026 Problem Statement 3 (AI-Powered Resume Screening & Candidate Ranking System), HireMind combines modern AI workflows with enterprise-grade UX and explainability.`,
    features: [
      'Explainable AI Ranking — Transparent reasons for each candidate\'s rank, highlighting matched skills, missing requirements, and profile impact',
      'AI Resume Parsing — Upload PDF/DOCX resumes to extract skills, experience, projects, certifications, and profile links',
      'Job Description Intelligence — Automatically extracts required skills, experience, education, and hiring priorities from JDs',
      'Candidate Ranking Engine — AI Score, Match %, and Recommendation (Strong Hire / Hire / Maybe / Reject) for every candidate',
      'GitHub Profile Analyzer — Repository count, commit frequency, top languages, open-source activity, and contribution graphs',
      'LeetCode Analyzer — Problems solved, contest rating, global ranking, and skill indicators',
      'Skill Gap Heatmap — Visual comparison of required vs candidate skills with Match / Partial / Missing indicators',
      'Blind Screening Mode — Hides names, gender, email, phone, and university to reduce unconscious bias',
      'Recruiter Feedback Loop — Override AI decisions with tracked reasons to measure AI accuracy and decision quality',
      'Analytics Dashboard — Resumes reviewed, candidates selected, hiring funnel, time saved, and AI accuracy metrics',
    ],
    techStack: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
      { name: 'AI/ML', icon: FaBrain },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Framer Motion', icon: SiFramer },
    ],
    github: '',
    demo: null,
    image: hiremindImg,
    featured: false,
    date: '2026',
    accentColor: '#f97316',
  },
];

export default projects;
