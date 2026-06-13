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
} from 'react-icons/si';
import { FaRobot, FaServer, FaShieldAlt, FaCss3Alt } from 'react-icons/fa';

import nexoraImg from '../assets/projects/nexora.png';
import tatkalImg from '../assets/projects/smart-tatkal-guardian.png';
import notenestImg from '../assets/projects/notenest.png';

const projects = [
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
];

export default projects;
