import { FaTrophy, FaCertificate, FaMedal, FaAward } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';

const achievements = [
  {
    id: 1,
    title: 'Hackathon Participation',
    description: 'Participated in college-level hackathons, collaborating with teams to build innovative solutions under time constraints.',
    date: '2025',
    category: 'Hackathons',
    icon: FaTrophy,
    color: '#ffd93d',
  },
  {
    id: 2,
    title: 'Python Programming Certificate',
    description: 'Completed a comprehensive Python programming course covering data structures, algorithms, and object-oriented programming.',
    date: '2025',
    category: 'Certificates',
    icon: FaCertificate,
    color: '#6366f1',
  },
  {
    id: 3,
    title: 'Web Development Bootcamp',
    description: 'Finished a full-stack web development bootcamp learning HTML, CSS, JavaScript, React, and backend fundamentals.',
    date: '2025',
    category: 'Certificates',
    icon: FaCertificate,
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Academic Excellence',
    description: 'Maintained strong academic performance in the first year of B.Tech in AI & Data Science.',
    date: '2025',
    category: 'Academic',
    icon: HiAcademicCap,
    color: '#6bcb77',
  },
  {
    id: 5,
    title: 'Coding Competition',
    description: 'Participated in intra-college coding competitions, solving algorithmic challenges and improving problem-solving skills.',
    date: '2025',
    category: 'Competitions',
    icon: FaMedal,
    color: '#ff6b6b',
  },
  {
    id: 6,
    title: 'Data Science Foundation',
    description: 'Completed introductory courses in data science and machine learning, learning the fundamentals of data analysis and model building.',
    date: '2025',
    category: 'Certificates',
    icon: FaAward,
    color: '#ffa07a',
  },
];

export default achievements;
