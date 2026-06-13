import { FaMicrosoft, FaFigma, FaGraduationCap } from 'react-icons/fa';

import genAiImg from '../assets/certificates/gen-ai.jpg';
import unimergeImg from '../assets/certificates/unimerge.jpg';
import mlImg from '../assets/certificates/machine-learning.jpg';

const certifications = [
  {
    id: 'gen-ai',
    title: 'Generative AI Foundations Certificate',
    issuer: 'upGrad in collaboration with Microsoft',
    issuerIcon: FaMicrosoft,
    date: 'July 22, 2025',
    credentialId: 'LhQp9qZWaGzQkEOi',
    image: genAiImg,
    accentColor: '#ef4444', // Red accent matching the certificate's red seal
    verifyLink: null,
    description: 'A comprehensive certification program focused on masteries in Generative AI technology, custom prompt engineering, and utilizing AI systems for business productivity and automated workflows.',
    skills: ['Generative AI', 'Prompt Engineering', 'AI Automation', 'Workflows'],
    modules: [
      'Introduction to Generative AI',
      'Basic & Advanced Prompt Engineering Techniques',
      'Generative AI Powered Research, Learning and Content Creation',
      'Generative AI for Analysis and Presentation',
      'Generative AI for Problem-Solving',
      'Generative AI for Automation'
    ]
  },
  {
    id: 'unimerge-ui-ux',
    title: 'Best UI/UX in UniMerge 1.0',
    issuer: 'UniMerge 1.0 / parth.builds community',
    issuerIcon: FaFigma,
    date: 'April 11-12, 2026',
    credentialId: 'Solo Hackathon Title Winner',
    image: unimergeImg,
    accentColor: '#3b82f6', // Premium blue accent
    verifyLink: null,
    description: 'Awarded the Certificate of Appreciation for securing the title of "Best UI/UX" in UniMerge 1.0, a community-based Solo Online Hackathon. Recognized for outstanding layout, styling, and design implementation.',
    skills: ['UI/UX Design', 'Figma', 'Visual Aesthetics', 'Prototyping'],
    modules: [
      'User Interface Design',
      'User Experience Planning',
      'Responsive Layout Engineering',
      'Interactive Prototyping'
    ]
  },
  {
    id: 'ibm-ml',
    title: 'Machine Learning Introduction for Everyone',
    issuer: 'IBM / Coursera',
    issuerIcon: FaGraduationCap,
    date: 'January 19, 2026',
    credentialId: 'E64DHASRV23F',
    image: mlImg,
    accentColor: '#10b981', // Emerald green accent matching Coursera's look
    verifyLink: 'https://coursera.org/verify/E64DHASRV23F',
    description: 'An online course authorized by IBM and offered through Coursera, covering the fundamental algorithms, methodologies, and concepts of Machine Learning, including supervised and unsupervised learning.',
    skills: ['Machine Learning', 'Data Science', 'Supervised Learning', 'AI Models'],
    modules: [
      'Introduction to Machine Learning Concepts',
      'Supervised vs Unsupervised Learning Algorithms',
      'Model Evaluation and Metrics',
      'Applications of ML in Real-World Scenarios'
    ]
  }
];

export default certifications;
