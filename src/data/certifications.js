import { FaMicrosoft, FaFigma, FaGraduationCap, FaGoogle } from 'react-icons/fa';

import genAiImg from '../assets/certificates/gen-ai.jpg';
import unimergeImg from '../assets/certificates/unimerge.jpg';
import mlImg from '../assets/certificates/machine-learning.jpg';
import googleGenAiImg from '../assets/certificates/google-gen-ai.png';
import microsoftAiSkillsImg from '../assets/certificates/microsoft-ai-skills.png';

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
    id: 'google-gen-ai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud / Coursera',
    issuerIcon: FaGoogle,
    date: 'June 16, 2026',
    credentialId: 'LZC9JJ35UU9F',
    image: googleGenAiImg,
    accentColor: '#4285F4', // Google Blue accent
    verifyLink: 'https://coursera.org/verify/LZC9JJ35UU9F',
    description: 'An online course authorized by Google Cloud and offered through Coursera. The course introduces the definitions of Generative AI, how it is used, and how it differs from traditional machine learning methods.',
    skills: ['Generative AI', 'Artificial Intelligence', 'Google Cloud', 'Machine Learning'],
    modules: [
      'Introduction to Generative AI',
      'Generative AI vs. Traditional ML',
      'How Generative AI Works',
      'Google Cloud AI Development Tools'
    ]
  },
  {
    id: 'microsoft-ai-skills-fest',
    title: 'Microsoft AI Skills Fest 2026',
    issuer: 'Microsoft',
    issuerIcon: FaMicrosoft,
    date: '2026',
    credentialId: 'Microsoft AI Skills Challenge',
    image: microsoftAiSkillsImg,
    accentColor: '#00a4ef', // Microsoft blue
    verifyLink: null,
    description: 'Completed the Microsoft AI Skills Fest challenge, acquiring hands-on expertise in developing and deploying artificial intelligence solutions using Azure AI, Copilot, and Azure OpenAI Service.',
    skills: ['Azure AI', 'Generative AI', 'Microsoft Copilot', 'Azure OpenAI'],
    modules: [
      'Empowering Productivity with Microsoft Copilot',
      'Getting Started with Azure OpenAI Service',
      'Developing AI Solutions on Microsoft Azure',
      'Responsible AI Design and Implementation'
    ]
  }
];

export default certifications;
