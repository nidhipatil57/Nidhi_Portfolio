import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaLaptopCode, FaCloud,
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbBrain } from 'react-icons/tb';
import { SiFirebase, SiSupabase, SiPostgresql } from 'react-icons/si';

const skills = [
  {
    category: 'Programming',
    icon: '💻',
    description: 'Languages I\'m building a strong foundation in',
    items: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    description: 'Technologies I use to build web projects',
    items: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'React', icon: FaReact, color: '#61DAFB' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    description: 'My environment and version control toolkit',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#e8e8f0' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ],
  },
  {
    category: 'Databases',
    icon: '💻',
    description: 'Database systems and backend storage services',
    items: [
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    category: 'Currently Learning',
    icon: '🚀',
    description: 'Topics and frameworks I\'m diving into next',
    items: [
      { name: 'Machine Learning', icon: TbBrain, color: '#FF6F61' },
      { name: 'Full Stack Web Development', icon: FaLaptopCode, color: '#818cf8' },
      { name: 'Cloud Computing', icon: FaCloud, color: '#0ea5e9' },
    ],
  },
];

export default skills;
