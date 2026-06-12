const projects = [
  {
    id: 'notenest',
    title: 'NoteNest',
    tagline: 'A clean space to capture thoughts, code snippets, and study notes',
    shortDescription: 'A note-taking web app I built using React and Firebase to keep my study notes and quick ideas synced.',
    fullDescription: `NoteNest is a note-taking application I built to help students (like me!) and developers keep their thoughts organized. I wanted a clean space for markdown-style notes without any clutter.

Built with React for the frontend and Firebase for live database sync and authentication, this project helped me understand how client-side state maps to cloud databases and how to manage user sessions securely.`,
    features: [
      'User authentication with Firebase Auth',
      'Real-time note syncing with Firestore',
      'Clean interface with markdown-like spacing',
      'Tag-based organization and filtering',
      'Instant search bar across all notes',
      'Responsive design for mobile and desktop',
    ],
    techStack: ['React', 'Firebase', 'CSS Modules', 'React Router'],
    challenges: [
      'Managing real-time synchronization states without creating lag',
      'Learning the Firebase Firestore data structure and query logic',
    ],
    learnings: [
      'Structuring database models in Firestore',
      'Handling asynchronous auth state changes in React lifecycle',
      'Designing custom CSS modules to prevent styling conflicts',
    ],
    github: 'https://github.com/nidhipatil57/NoteNest',
    demo: '#',
    featured: true,
    date: '2025',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    tagline: 'An interactive dashboard showing current weather and forecasts',
    shortDescription: 'One of my first JavaScript projects! It fetches weather data from an external API with dynamic visual themes.',
    fullDescription: `The Weather Dashboard is one of my first real web applications. I built this to practice fetching data from external REST APIs (OpenWeather API) and managing asynchronous state in JavaScript. 

Users can search for any city globally to get real-time temperatures, wind speed, humidity, and a 5-day forecast. The UI changes dynamically based on the current weather condition to match the atmosphere.`,
    features: [
      'City search with autocomplete suggestions',
      'Current weather conditions display',
      '5-day weather forecast preview',
      'Dynamic backgrounds based on weather status',
      'Recent searches saved in history',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    challenges: [
      'Handling API errors gracefully (like when a city is not found)',
      'Working with asynchronous fetch calls and promises in vanilla JS',
    ],
    learnings: [
      'Working with REST APIs and JSON data structures',
      'Asynchronous JavaScript (fetch, async/await)',
      'DOM manipulation and local storage persistence',
    ],
    github: 'https://github.com/nidhipatil57/weather-dashboard',
    demo: '#',
    featured: false,
    date: '2025',
  },
  {
    id: 'student-grade-analyzer',
    title: 'Student Grade Analyzer',
    tagline: 'A command-line Python tool that analyzes class grade files',
    shortDescription: 'A Python script that reads CSV files to calculate averages, trends, and generate visual grade distribution charts.',
    fullDescription: `This tool is a Python command-line utility I created to help analyze student grades. It reads student data from CSV files and outputs summaries of class performance (including average, median, range, etc.) and exports distribution graphs.

This was my first project using popular data science libraries like Pandas and Matplotlib, and it sparked my interest in data analysis.`,
    features: [
      'CSV file import and parsing',
      'Statistical calculations (mean, median, mode, range)',
      'Grade distribution visualization with Matplotlib charts',
      'Subject-wise performance comparisons',
      'Export reports as visual PDF summaries',
    ],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    challenges: [
      'Formatting terminal outputs to be readable and clean',
      'Handling missing or malformed grade entries in raw CSV files',
    ],
    learnings: [
      'Data cleaning and parsing using Pandas',
      'Data visualization principles with Matplotlib',
      'Building command-line interfaces in Python',
    ],
    github: 'https://github.com/nidhipatil57/grade-analyzer',
    demo: null,
    featured: false,
    date: '2025',
  },
  {
    id: 'quiz-app',
    title: 'Quiz App',
    tagline: 'A fun general knowledge quiz game built with vanilla JS',
    shortDescription: 'An interactive quiz with a countdown timer, category selection, and a local high-score board.',
    fullDescription: `Quiz App is a web game I built using pure HTML, CSS, and JavaScript. It features trivia questions across different subjects, scoring calculation, a dynamic timer, and stores high scores locally in the browser.

I built this project to challenge myself on complex state logic without relying on frontend frameworks.`,
    features: [
      'Multiple quiz categories (Science, Tech, History)',
      'Countdown timer for each question',
      'Instant answer feedback with short explanations',
      'Score tracking and progress bar',
      'Local storage leaderboard',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    challenges: [
      'Managing quiz states (timer, question index, score) cleanly using vanilla JS',
      'Creating smooth transition animations between questions',
    ],
    learnings: [
      'State management patterns in pure JavaScript',
      'Advanced DOM events and timing controls',
      'Using CSS transitions for clean UI states',
    ],
    github: 'https://github.com/nidhipatil57/quiz-app',
    demo: '#',
    featured: false,
    date: '2025',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'A custom portfolio showcasing my projects, skills, and progress',
    shortDescription: 'The website you are browsing right now! Built from scratch with React and Framer Motion to host my projects.',
    fullDescription: `I designed and built this portfolio to document my coding journey, projects, and what I am learning in my B.Tech studies. 

It uses React for structure, CSS Modules for modular styling, and Framer Motion for scroll reveals and interactive modals. The GitHub stats are fetched live using the GitHub API.`,
    features: [
      'Custom design system built with CSS variables',
      'Smooth scroll reveals and interactive cards',
      'Project detail modals showing challenges and learnings',
      'Live API integration for GitHub metrics',
      'Fully responsive layout for mobile and desktop',
    ],
    techStack: ['React', 'Framer Motion', 'CSS Modules', 'Vite'],
    challenges: [
      'Avoiding templated designs in favor of a clean, custom layout',
      'Handling API rate limits gracefully for the GitHub integration',
    ],
    learnings: [
      'Modular CSS architecture and styling variables',
      'Declarative animations with Framer Motion',
      'Creating custom React hooks for scroll tracking',
    ],
    github: 'https://github.com/nidhipatil57/Nidhi_Portfolio',
    demo: '#',
    featured: false,
    date: '2025',
  },
];

export default projects;
