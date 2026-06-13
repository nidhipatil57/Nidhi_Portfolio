import { HiAcademicCap } from 'react-icons/hi2';
import { FaLaptopCode } from 'react-icons/fa';

const journey = [
  {
    id: 1,
    date: '2011 - 2023',
    title: 'Pawar Public School',
    description: 'Primary & Secondary Schooling.',
    icon: HiAcademicCap,
    color: '#6366f1',
  },
  {
    id: 2,
    date: '2023 - 2025',
    title: 'Shelar Academy',
    description: 'Higher Secondary Certificate (HSC) studies.',
    icon: HiAcademicCap,
    color: '#f59e0b',
  },
  {
    id: 3,
    date: '2026 - 2029',
    title: "Vivekanand Education Society's Institute of Technology",
    description: 'Currently pursuing B.Tech in Artificial Intelligence and Data Science.',
    icon: FaLaptopCode,
    color: '#10b981',
    isCurrent: true,
  },
];

export default journey;
