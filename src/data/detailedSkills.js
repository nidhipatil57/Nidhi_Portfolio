import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaLaptopCode, FaCloud
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbBrain } from 'react-icons/tb';

// Import project images to link them
import nexoraImg from '../assets/projects/nexora.png';
import nutribloomImg from '../assets/projects/nutribloom.png';
import tatkalImg from '../assets/projects/smart-tatkal-guardian.png';
import notenestImg from '../assets/projects/notenest.png';

export const detailedSkills = {
  Python: {
    name: 'Python',
    icon: FaPython,
    color: '#3776AB',
    category: 'Programming',
    proficiency: 92,
    startedLearning: 'January 2023',
    status: 'Actively Building Projects',
    experience: '3+ Years',
    overview: {
      what: 'Python is a high-level, general-purpose programming language celebrated for its readability, versatility, and extremely rich library ecosystem.',
      why: 'I started learning Python to automate repetitive workflows. Over time, I discovered its immense potential in scripting, Web APIs, and Artificial Intelligence, making it my core backend language.',
      how: 'I write clean, modular OOP-based scripts, develop high-performance REST APIs with Flask and FastAPI, and build ML workflows using NumPy and Pandas.',
      where: 'It drives the bot probability scoring, logging, and multi-agent coordination system in my Smart Tatkal Guardian project.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Jan 2023', title: 'The Syntax Spark', description: 'Mastered basic variables, control loops, functions, and discovered Python\'s clean execution style.' },
      { phase: 'First Project', date: 'Mar 2023', title: 'Smart Task Automator', description: 'Built a command-line script that automatically sorts downloads, parses system logs, and queries weather APIs.' },
      { phase: 'Major Breakthrough', date: 'Oct 2024', title: 'Asynchronous Web Scrapers', description: 'Developed highly concurrent data-gathering scripts using asyncio and aiohttp, validating thousands of rows.' },
      { phase: 'Advanced Concepts', date: 'Jul 2025', title: 'Metaprogramming & Optimization', description: 'Explored decorators, generators, context managers, custom classes, and garbage collection mechanisms.' },
      { phase: 'Current Focus', date: 'Active', title: 'AI Agents & LLM Orchestration', description: 'Building agentic AI systems using LangChain, fine-tuning neural architectures, and deploying REST webhooks.' }
    ],
    roadmap: [
      {
        title: 'Fundamentals',
        items: ['Variables & Types', 'Control Flow (If/Loops)', 'Functions & Lambdas', 'Object-Oriented Programming (OOP)']
      },
      {
        title: 'Data Structures',
        items: ['Lists, Tuples & Dicts', 'Generators & Iterators', 'Collections Module', 'List Comprehensions']
      },
      {
        title: 'Libraries & Scripting',
        items: ['NumPy (Scientific Computing)', 'Pandas (Dataframes)', 'Matplotlib & Seaborn', 'BeautifulSoup (Scraping)']
      },
      {
        title: 'Backend Development',
        items: ['Flask Framework', 'FastAPI & Pydantic', 'RESTful API Architecture', 'SQLAlchemy ORM']
      },
      {
        title: 'AI & Machine Learning',
        items: ['Scikit-Learn Algorithms', 'TensorFlow Basics', 'Model Evaluation Metrics', 'Feature Engineering']
      }
    ],
    progress: [
      { name: 'Advanced Core Patterns', value: 90 },
      { name: 'Machine Learning Systems', value: 80 },
      { name: 'REST APIs & Web Frameworks', value: 75 }
    ],
    masteredConcepts: [
      { name: 'OOP', description: 'Designing modular code utilizing classes, inheritance, polymorphism, and encapsulation.' },
      { name: 'REST APIs', description: 'Creating endpoints, managing HTTP status codes, routing, and schema validation.' },
      { name: 'Data Analysis', description: 'Cleaning raw datasets, grouping data, and extracting key statistics.' },
      { name: 'NumPy', description: 'Utilizing vectorized math routines on multi-dimensional array structures.' },
      { name: 'Pandas', description: 'Handling relational tabular operations and custom DataFrame manipulation.' },
      { name: 'Automation', description: 'Writing background Cron scripts, folder monitors, and automatic email alert utilities.' },
      { name: 'Algorithms', description: 'Analyzing time and space complexities (Big-O) and designing efficient search models.' }
    ],
    projects: [
      {
        id: 'smart-tatkal-guardian',
        title: 'Smart Tatkal Guardian',
        image: tatkalImg,
        description: 'Multi-agent bot detection system built at FAR AWAY 2026 Hackathon, using a honey-pot deception strategy to route malicious agents away from IRCTC booking systems.',
        tech: ['Python', 'React', 'WebSocket', 'ML'],
        learnings: 'Developed experience in real-time bot scoring models and WebSocket message routing.',
        challenges: 'Preventing memory locks when scoring 1,000 concurrent bot requests per second.'
      }
    ],
    achievements: [
      { title: 'Hackathon Contributor', description: 'Engineered Python backend agents under high pressure, winning prizes.' },
      { title: 'LeetCode Problem Solver', description: 'Solved 200+ data structure puzzles utilizing Python\'s collection API.' },
      { title: 'AI Assistant Creator', description: 'Designed custom semantic Search and Q&A tools with LLM nodes.' }
    ],
    stats: {
      projectsBuilt: 14,
      hoursInvested: 800,
      certifications: 5,
      technologiesConnected: 12,
      problemSolvingCount: 300
    },
    currentlyWorking: {
      learning: ['Advanced Async Performance', 'TensorFlow Optimization'],
      building: ['AI Portfolio Assistant', 'Resume Analyzer', 'Skill Ecosystem Map']
    },
    galaxy: {
      nodes: [
        { name: 'Flask', type: 'Backend', desc: 'Micro web framework' },
        { name: 'Pandas', type: 'Data Science', desc: 'Data structures & analysis' },
        { name: 'NumPy', type: 'Math', desc: 'Scientific computing library' },
        { name: 'AI & ML', type: 'Core', desc: 'Predictive intelligence models' },
        { name: 'Automation', type: 'Scripting', desc: 'OS automations & scrapers' },
        { name: 'REST APIs', type: 'Backend', desc: 'Web communication endpoints' }
      ]
    },
    funFacts: [
      'My first Python project was a terminal calculator, and I remember typing each operation manually!',
      'Python is the technology I use most frequently for quick prototyping.',
      'I enjoy building custom scripts to automate desktop workflows, saving me hours of manual folder sorting.'
    ],
    summary: 'Python has become one of my strongest technologies. Over time, I progressed from learning basic syntax to developing AI-powered applications, backend systems, automation tools, and data-driven solutions. I continue to deepen my expertise through real-world projects and continuous learning.'
  },
  React: {
    name: 'React',
    icon: FaReact,
    color: '#61DAFB',
    category: 'Web Development',
    proficiency: 95,
    startedLearning: 'May 2024',
    status: 'Actively Building Projects',
    experience: '2 Years',
    overview: {
      what: 'React is a popular component-based JavaScript library for building interactive, declarative, and high-performance user interfaces.',
      why: 'I transitioned to React because plain JS DOM manipulation became hard to scale. React\'s component model and state management made building complex interfaces incredibly smooth and intuitive.',
      how: 'I write functional components with Hooks, manage global state, implement smooth Framer Motion triggers, and design clean CSS modules.',
      where: 'I used React to build NoteNest (developer notes app), Nexora, and the dashboard for the Smart Tatkal Guardian.'
    },
    journey: [
      { phase: 'Started Learning', date: 'May 2024', title: 'The Declarative Path', description: 'Understood JSX, component structures, props, and the basic useState and useEffect lifecycles.' },
      { phase: 'First Project', date: 'Jul 2024', title: 'Interactive Dashboard', description: 'Built a modular calendar planner that dynamically saved tasks and adjusted cards.' },
      { phase: 'Major Breakthrough', date: 'Jan 2025', title: 'NoteNest Application', description: 'Completed a real-time Markdown text editor synced with Firebase database nodes.' },
      { phase: 'Advanced Concepts', date: 'Nov 2025', title: 'Performance Optimization', description: 'Deep-dived into react-window virtualization, custom hooks, useMemo, useCallback, and dynamic lazy loading.' },
      { phase: 'Current Focus', date: 'Active', title: 'Next.js 16 & Server Actions', description: 'Transitioning React skills into server-side architectures, React Server Components (RSC), and Edge rendering.' }
    ],
    roadmap: [
      {
        title: 'Core Concepts',
        items: ['JSX & VDOM', 'Components & Props', 'useState & useEffect Hooks', 'Event Handling']
      },
      {
        title: 'Advanced State',
        items: ['useContext API', 'useReducer Hook', 'Custom Hooks Creation', 'Zustand / Redux Basics']
      },
      {
        title: 'Performance & Hooks',
        items: ['useRef & Portals', 'useMemo & useCallback', 'Code Splitting (React.lazy)', 'Profiler & DevTools']
      },
      {
        title: 'Ecosystem Integrations',
        items: ['React Router', 'CSS Modules / Tailwind', 'Framer Motion (Animations)', 'React Query (TanStack)']
      },
      {
        title: 'Next-Gen Patterns',
        items: ['React Server Components', 'Server Actions', 'Streaming / Suspense', 'PPR (Partial Prerendering)']
      }
    ],
    progress: [
      { name: 'Component Architecture', value: 95 },
      { name: 'Performance Optimization', value: 85 },
      { name: 'State Management', value: 90 }
    ],
    masteredConcepts: [
      { name: 'Functional Components', description: 'Writing modular, reusable UI parts driven by deterministic state logic.' },
      { name: 'Virtual DOM', description: 'How React reconciles changes efficiently by maintaining a lightweight memory tree.' },
      { name: 'Custom Hooks', description: 'Extracting and reusing stateful workflows across multiple decoupled components.' },
      { name: 'Reconciliation', description: 'Deep knowledge of React Diffing algorithms and why lists need unique keys.' },
      { name: 'Lazy Loading', description: 'Using Suspense and dynamic imports to optimize site load times and bundle sizes.' },
      { name: 'Context API', description: 'Managing lightweight global states without introducing large state stores.' }
    ],
    projects: [
      {
        id: 'notenest',
        title: 'NoteNest',
        image: notenestImg,
        description: 'A developer-centric note-taking app with real-time Firebase syncing, syntax highlight blocks, and folder trees.',
        tech: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
        learnings: 'Learned state syncing with cloud databases and client-side optimistic UI updates.',
        challenges: 'Syncing note changes in real time while maintaining smooth keyboard text input responsiveness.'
      },
      {
        id: 'nexora',
        title: 'Nexora',
        image: nexoraImg,
        description: 'AI-powered career guidance and mentorship system featuring interactive multi-year career roadmaps.',
        tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
        learnings: 'Mastered Tailwind design systems, responsive layout structures, and server components.',
        challenges: 'Building a dynamic career roadmap visualizer that looks premium and loads without blocking.'
      }
    ],
    achievements: [
      { title: 'Interactive Designer', description: 'Created 5+ interactive user dashboards with premium glassmorphism layouts.' },
      { title: 'Performance Optimizer', description: 'Reduced NoteNest bundle size by 35% through proper route split patterns.' },
      { title: 'Component Builder', description: 'Built an open-source library of custom reusable React utility UI components.' }
    ],
    stats: {
      projectsBuilt: 8,
      hoursInvested: 600,
      certifications: 3,
      technologiesConnected: 10,
      problemSolvingCount: 150
    },
    currentlyWorking: {
      learning: ['React 19 Concurrent Features', 'Next.js 16 App Router'],
      building: ['AI Portfolio Assistant', 'Interactive Portfolio Dashboard']
    },
    galaxy: {
      nodes: [
        { name: 'Next.js', type: 'Framework', desc: 'RSC & Server Actions' },
        { name: 'Framer Motion', type: 'Animation', desc: 'Fluid animations' },
        { name: 'Zustand', type: 'State', desc: 'Lightweight state management' },
        { name: 'Vite', type: 'Tooling', desc: 'Ultra-fast build tool' },
        { name: 'TypeScript', type: 'Type Safety', desc: 'Static type compiler' },
        { name: 'CSS Modules', type: 'Styling', desc: 'Scoped stylesheet sheets' }
      ]
    },
    funFacts: [
      'I spent 3 hours debugging React state before realizing I was mutating an array directly instead of creating a copy!',
      'React is my go-to choice for web projects because it has such a massive, helpful ecosystem.',
      'I love using Framer Motion to make standard buttons react with satisfying spring-like animations.'
    ],
    summary: 'React has completely changed how I build interfaces. I moved away from slow imperative DOM updates to structured, component-based architectures. By mastering React hooks, state lifecycles, and optimization triggers, I build web experiences that feel extremely fluid, fast, and responsive.'
  },
  JavaScript: {
    name: 'JavaScript',
    icon: FaJs,
    color: '#F7DF1E',
    category: 'Web Development',
    proficiency: 90,
    startedLearning: 'September 2023',
    status: 'Actively Building Projects',
    experience: '2+ Years',
    overview: {
      what: 'JavaScript is a dynamic, high-level programming language that powers interactive frontend behaviors and server backend tasks across the modern web.',
      why: 'I learned JavaScript to transform static website pages into interactive environments. Understanding JS core engine behaviors made picking up frontend libraries like React much faster.',
      how: 'I write clean ES6+ code, manage asynchronous promises, query API nodes, handle client-side storage, and coordinate browser events.',
      where: 'It coordinates browser calculations, particle animations, and UI state switches in NoteNest, NutriBloom, and this portfolio.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Sep 2023', title: 'Dynamic DOM Basics', description: 'Learned variables, event listeners, array loops, and modified HTML elements using document queries.' },
      { phase: 'First Project', date: 'Nov 2023', title: 'Task Manager App', description: 'Built an interactive task manager featuring priority tags, custom search filters, and localStorage persistence.' },
      { phase: 'Major Breakthrough', date: 'Jul 2024', title: 'Asynchronous Programming', description: 'Mastered Promises, async/await structures, and fetching JSON datasets from public API hosts.' },
      { phase: 'Advanced Concepts', date: 'Mar 2025', title: 'Closures & Prototypes', description: 'Studied execution contexts, lexical scoping, closures, prototype chaining, and Event Loop cycles.' },
      { phase: 'Current Focus', date: 'Active', title: 'Modern ES Next Standards', description: 'Applying ES14 features, modular script structures, and optimizing browser rendering paths.' }
    ],
    roadmap: [
      {
        title: 'Core Engine',
        items: ['Variables & Lexical Scope', 'Data Types & Coercion', 'Loops & Array Iterators', 'Arrow Functions']
      },
      {
        title: 'Asynchronous JS',
        items: ['Callbacks & Call Stack', 'Promises API', 'Async / Await Flow', 'Fetch API / Ajax Calls']
      },
      {
        title: 'Browser APIs',
        items: ['DOM Nodes Traversal', 'Event Listeners (Bubbling)', 'Local & Session Storage', 'Intersection Observer']
      },
      {
        title: 'Advanced JS',
        items: ['Lexical Closures', 'Prototypes & Inheritance', 'ES Modules (Import/Export)', 'Memory Profiling']
      },
      {
        title: 'Execution Model',
        items: ['Event Loop & Microtasks', 'Garbage Collection', 'Web Workers', 'Performance Auditing']
      }
    ],
    progress: [
      { name: 'ES6+ Logic & Arrays', value: 95 },
      { name: 'Asynchronous Workflows', value: 90 },
      { name: 'Browser API Integrations', value: 85 }
    ],
    masteredConcepts: [
      { name: 'Closures', description: 'Understanding how functions retain access to their outer lexical scopes even when executed elsewhere.' },
      { name: 'Event Loop', description: 'How JavaScript coordinates asynchronous microtasks and macrotasks on a single thread.' },
      { name: 'Promises', description: 'Handling pending network operations, error bubbles, and chaining response pipelines.' },
      { name: 'Dynamic DOM', description: 'Modifying website content dynamically without triggering full page reloads.' },
      { name: 'LocalStorage', description: 'Caching application configurations and token payloads on the client browser.' },
      { name: 'Array Methods', description: 'Utilizing map, filter, reduce, find, and some for immutable transformations.' }
    ],
    projects: [
      {
        id: 'notenest',
        title: 'NoteNest',
        image: notenestImg,
        description: 'Note taking application utilizing JavaScript logic to manage dynamic text parsing and real-time interface switches.',
        tech: ['React', 'JavaScript', 'Firebase'],
        learnings: 'Understood advanced array processing and filtering operations.',
        challenges: 'Managing document inputs and auto-save timers securely.'
      }
    ],
    achievements: [
      { title: 'Frontend Developer', description: 'Designed interactive web features used in multiple portfolio projects.' },
      { title: 'API Builder', description: 'Connected multiple frontends to complex external API database sources.' }
    ],
    stats: {
      projectsBuilt: 10,
      hoursInvested: 500,
      certifications: 2,
      technologiesConnected: 8,
      problemSolvingCount: 200
    },
    currentlyWorking: {
      learning: ['Web Audio API', 'Intersection Observer Optimization'],
      building: ['Interactive Physics Animation', 'Custom Drag Framework']
    },
    galaxy: {
      nodes: [
        { name: 'ES6+', type: 'Core', desc: 'Modern language syntax' },
        { name: 'Promises', type: 'Async', desc: 'Asynchronous handler' },
        { name: 'DOM API', type: 'Browser', desc: 'HTML page modification' },
        { name: 'Event Loop', type: 'Engine', desc: 'Single-thread scheduler' },
        { name: 'JSON APIs', type: 'Network', desc: 'REST server requests' },
        { name: 'WebSockets', type: 'Network', desc: 'Real-time duplex lines' }
      ]
    },
    funFacts: [
      'I used to think "null" and "undefined" were exactly the same thing, which led to interesting bugs!',
      'JavaScript is the language that makes everything in web apps feel alive.',
      'I enjoy creating small visual scripts, like particle systems, using vanilla canvas contexts.'
    ],
    summary: 'JavaScript is the backbone of all my web-based projects. By understanding how the browser engine processes code (including closure chains, call stacks, and event loops), I write clean, optimized code that renders quickly, animations that glide, and applications that scale.'
  },
  'Machine Learning': {
    name: 'Machine Learning',
    icon: TbBrain,
    color: '#FF6F61',
    category: 'Currently Learning',
    proficiency: 80,
    startedLearning: 'September 2025',
    status: 'Diving into Frameworks',
    experience: '1 Year',
    overview: {
      what: 'Machine Learning is a subset of artificial intelligence focused on building algorithms that learn from data and make predictions without explicit programming.',
      why: 'I chose to learn Machine Learning because data holds answers to complex problems. Developing systems that recognize patterns and predict behaviors opens up futuristic engineering paths.',
      how: 'I prepare datasets, train classification/regression models using Scikit-Learn, and experiment with neural network architectures in TensorFlow.',
      where: 'I applied ML models in Smart Tatkal Guardian to identify user click sequences and score bot booking behaviors.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Sep 2025', title: 'Data & Regression', description: 'Studied linear/logistic regression, decision trees, K-means clustering, and learned to clean data.' },
      { phase: 'First Project', date: 'Nov 2025', title: 'Iris Classification Engine', description: 'Trained a simple classification model using Scikit-Learn to categorize flower types with 98% accuracy.' },
      { phase: 'Major Breakthrough', date: 'Feb 2026', title: 'Smart Tatkal Bot Detection', description: 'Designed a real-time behavioral classifier to separate automated bots from human ticket bookings.' },
      { phase: 'Advanced Concepts', date: 'Apr 2026', title: 'Deep Learning & Neural Nets', description: 'Began building feedforward neural networks, optimizing weights, and understanding gradient descent.' },
      { phase: 'Current Focus', date: 'Active', title: 'LLM Fine-Tuning & RAG', description: 'Exploring Retrieval-Augmented Generation (RAG) and configuring local vector databases for search.' }
    ],
    roadmap: [
      {
        title: 'Foundations',
        items: ['Probability & Stats', 'Linear Algebra Basics', 'Data Cleaning', 'Data Visualization']
      },
      {
        title: 'Supervised Learning',
        items: ['Linear/Logistic Regression', 'Decision Trees', 'Support Vector Machines', 'Ensemble (Random Forest)']
      },
      {
        title: 'Unsupervised Learning',
        items: ['K-Means Clustering', 'Hierarchical Clustering', 'PCA (Dimension Reduction)', 'Anomaly Detection']
      },
      {
        title: 'Deep Learning',
        items: ['Artificial Neural Nets', 'Gradient Descent & SGD', 'Activation Functions', 'CNNs for Vision']
      },
      {
        title: 'NLP & LLMs',
        items: ['Text Tokenization', 'TF-IDF & Embeddings', 'Vector Databases (Chroma)', 'RAG Pipelines']
      }
    ],
    progress: [
      { name: 'Model Training & Tuning', value: 85 },
      { name: 'Data Preprocessing', value: 80 },
      { name: 'Neural Network Basics', value: 70 }
    ],
    masteredConcepts: [
      { name: 'Supervised Learning', description: 'Training algorithms on labeled input-output mappings for predictions.' },
      { name: 'Feature Engineering', description: 'Selecting, transforming, and scaling raw variables to improve model accuracy.' },
      { name: 'Regression', description: 'Estimating continuous values and mathematical relationships between variables.' },
      { name: 'Overfitting Control', description: 'Using regularization, cross-validation, and pruning to ensure models generalize well.' },
      { name: 'Data Visualization', description: 'Plotting correlations and cluster groupings using Seaborn and Matplotlib.' },
      { name: 'Neural Networks', description: 'Layered mathematical structures that learn hierarchical representations of inputs.' }
    ],
    projects: [
      {
        id: 'smart-tatkal-guardian',
        title: 'Smart Tatkal Guardian',
        image: tatkalImg,
        description: 'Hackathon bot detection project that uses a behavioral classifier to evaluate booking interactions in real-time.',
        tech: ['Python', 'React', 'WebSocket', 'ML'],
        learnings: 'Understood the challenge of implementing ML models on hot real-time network routes.',
        challenges: 'Achieving bot detection inference times under 15 milliseconds.'
      }
    ],
    achievements: [
      { title: 'Bot Destroyer', description: 'Successfully engineered bot detection pipelines that blocked spam traffic during hackathons.' },
      { title: 'ML Practitioner', description: 'Created prediction models and deployed them as Flask API services.' }
    ],
    stats: {
      projectsBuilt: 4,
      hoursInvested: 350,
      certifications: 3,
      technologiesConnected: 6,
      problemSolvingCount: 80
    },
    currentlyWorking: {
      learning: ['Deep Learning Tuning', 'Vector Databases'],
      building: ['AI Resume Profiler', 'Personalized Learning Bot']
    },
    galaxy: {
      nodes: [
        { name: 'Scikit-Learn', type: 'Framework', desc: 'Predictive algorithms' },
        { name: 'TensorFlow', type: 'Framework', desc: 'Deep learning neural nets' },
        { name: 'Pandas', type: 'Data', desc: 'Dataframe cleaning operations' },
        { name: 'NumPy', type: 'Math', desc: 'Matrix linear algebra calculations' },
        { name: 'Matplotlib', type: 'Plotting', desc: 'Visual correlations' },
        { name: 'PyTorch', type: 'Deep Learning', desc: 'Tensors & dynamic graphs' }
      ]
    },
    funFacts: [
      'My first machine learning model was trained to identify iris flowers, which is the "hello world" of ML!',
      'I love that machine learning combines clean math, raw statistics, and software engineering.',
      'I once spent a whole day trying to train a model, only to realize I forgot to scale the input features!'
    ],
    summary: 'Machine Learning has opened up an entirely new way of thinking about coding. Instead of writing hardcoded logic rules, I feed algorithms data and let them extract patterns. By applying ML to problems like real-time bot classification, I build systems that adapt and predict with high accuracy.'
  },
  Java: {
    name: 'Java',
    icon: FaJava,
    color: '#ED8B00',
    category: 'Programming',
    proficiency: 85,
    startedLearning: 'August 2024',
    status: 'Building DSA Foundations',
    experience: '1+ Years',
    overview: {
      what: 'Java is a secure, class-based, object-oriented programming language designed to have as few implementation dependencies as possible (Write Once, Run Anywhere).',
      why: 'I started learning Java to build a rock-solid foundation in Object-Oriented Programming (OOP) and study Data Structures and Algorithms (DSA) within a strictly typed environment.',
      how: 'I write object-oriented classes, design custom collections, optimize search algorithms, and manage memory lifecycles.',
      where: 'I use Java to solve algorithmic puzzles, build CLI utility tools, and study structural design patterns.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Aug 2024', title: 'The Strict JVM', description: 'Understood static typing, compiler checks, main methods, and Object structures in Java.' },
      { phase: 'First Project', date: 'Oct 2024', title: 'Student Grade System', description: 'Built a terminal application that organized student database entries using objects and serialized files.' },
      { phase: 'Major Breakthrough', date: 'Feb 2025', title: 'Custom DSA Collection', description: 'Implemented linked lists, binary trees, hash map buckets, and heap structures from scratch.' },
      { phase: 'Advanced Concepts', date: 'Nov 2025', title: 'Multithreading & Generics', description: 'Deep-dived into thread safety, synchronized locks, executor services, and type-safe generics.' },
      { phase: 'Current Focus', date: 'Active', title: 'Design Patterns & Spring', description: 'Learning Enterprise Design patterns (Singleton, Factory, Builder) and researching Spring Boot structures.' }
    ],
    roadmap: [
      {
        title: 'Fundamentals',
        items: ['JVM & JRE Architecture', 'Variables & Static Types', 'Class & Object Layouts', 'Access Modifiers']
      },
      {
        title: 'Core OOP',
        items: ['Inheritance & Interfaces', 'Polymorphism (Overrides)', 'Abstract Classes', 'Encapsulation Rules']
      },
      {
        title: 'Data Structures',
        items: ['Arrays & Collections API', 'ArrayList & LinkedList', 'HashMap Buckets', 'Binary Trees & Heaps']
      },
      {
        title: 'Advanced Java',
        items: ['Generics (Type Safety)', 'Exceptions (Try/Catch)', 'File I/O Streams', 'Java Streams API']
      },
      {
        title: 'Concurrency',
        items: ['Threads & Runnable', 'Synchronized Blocks', 'Locks & Semaphores', 'Executor Thread Pools']
      }
    ],
    progress: [
      { name: 'Data Structures & Algorithms', value: 88 },
      { name: 'Object-Oriented Architecture', value: 85 },
      { name: 'Multithreading & JVM', value: 70 }
    ],
    masteredConcepts: [
      { name: 'OOP Structure', description: 'Modeling software systems using clean classes, encapsulation barriers, and inheritance hierarchies.' },
      { name: 'DSA Arrays', description: 'Creating and sorting array-based data configurations quickly.' },
      { name: 'Generics', description: 'Designing reusable classes and methods that operate on compile-time types.' },
      { name: 'Collections API', description: 'Utilizing Lists, Sets, and Maps to store, filter, and access application data structures.' },
      { name: 'Exceptions', description: 'Handling runtime errors safely using try-catch blocks and custom throwing systems.' },
      { name: 'JVM Memory', description: 'Understanding how Java allocates memory on Stack vs Heap and trigger Garbage Collection.' }
    ],
    projects: [
      {
        id: 'dsa-tracker',
        title: 'DSA Library',
        image: null,
        description: 'A repository containing from-scratch implementations of classical Data Structures and Algorithms in Java.',
        tech: ['Java'],
        learnings: 'Gained a deep understanding of pointer manipulation, array resizes, and tree balance.',
        challenges: 'Optimizing Custom HashMap bucket traversal to keep lookups at O(1) time complexity.'
      }
    ],
    achievements: [
      { title: 'DSA Master', description: 'Implemented 20+ classical data structures and algorithms in vanilla Java.' },
      { title: 'Problem Solver', description: 'Solved 100+ Java-based competitive programming challenges.' }
    ],
    stats: {
      projectsBuilt: 3,
      hoursInvested: 400,
      certifications: 1,
      technologiesConnected: 4,
      problemSolvingCount: 150
    },
    currentlyWorking: {
      learning: ['Spring Boot Web Framework', 'System Design Patterns'],
      building: ['Personal DSA Visualizer', 'Enterprise Task API']
    },
    galaxy: {
      nodes: [
        { name: 'JVM', type: 'Runtime', desc: 'Java virtual machine core' },
        { name: 'DSA', type: 'Logic', desc: 'Data structures & algorithms' },
        { name: 'OOP', type: 'Design', desc: 'Object-oriented structures' },
        { name: 'Collections', type: 'Core', desc: 'Lists, Maps & Sets API' },
        { name: 'Spring Boot', type: 'Framework', desc: 'Microservice creation' },
        { name: 'Generics', type: 'Design', desc: 'Type-safe parameters' }
      ]
    },
    funFacts: [
      'Learning Java static typing forced me to think about memory sizes and compiler checks, which made my JavaScript cleaner!',
      'Java was the first language that taught me how garbage collection works under the hood.',
      'I enjoy modeling real-world objects, like bank accounts or traffic nets, using OOP structures.'
    ],
    summary: 'Java has built my logical foundation. Studying this statically-typed language taught me object-oriented patterns, strict compile-time checks, and algorithmic optimizations. By implementing data structures from scratch, I gained a low-level appreciation for memory, layouts, and system efficiency.'
  },
  HTML5: {
    name: 'HTML5',
    icon: FaHtml5,
    color: '#E34F26',
    category: 'Web Development',
    proficiency: 95,
    startedLearning: 'April 2023',
    status: 'Fully Mastered',
    experience: '3 Years',
    overview: {
      what: 'HTML5 is the standard markup language used to structure and display content across the World Wide Web.',
      why: 'I learned HTML5 because it is the fundamental building block of the web. Understanding semantics and document outline flows is crucial for writing accessible and SEO-friendly websites.',
      how: 'I write semantic layouts, manage forms and inputs, embed media assets, and set meta tags.',
      where: 'It defines the structures, SEO headers, and layout grids for Nexora, NutriBloom, and my portfolio website.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Apr 2023', title: 'Elements & Tags', description: 'Discovered tag structures, headings, links, paragraphs, and list elements.' },
      { phase: 'First Project', date: 'Jun 2023', title: 'Personal Recipe Page', description: 'Created a static recipe cookbook page using clean division headers and list items.' },
      { phase: 'Major Breakthrough', date: 'Jan 2024', title: 'Semantic Web Structure', description: 'Shifted from division grids to semantic layout tags (header, main, section, footer).' },
      { phase: 'Advanced Concepts', date: 'Aug 2024', title: 'Accessibility & SEO', description: 'Mastered ARIA labels, meta viewport tags, open graph attributes, and image alt optimization.' },
      { phase: 'Current Focus', date: 'Active', title: 'Shadow DOM & Web Comp', description: 'Researching Web Component frameworks and optimizing accessibility pipelines.' }
    ],
    roadmap: [
      {
        title: 'Core Markup',
        items: ['Element Tags', 'Attributes', 'Headings & Text', 'List Elements']
      },
      {
        title: 'Semantic HTML',
        items: ['Sectioning tags', 'Article & Aside', 'Header & Footer', 'Time & Mark tags']
      },
      {
        title: 'Forms & Inputs',
        items: ['Form Validation', 'Input type variations', 'Select & Labels', 'Buttons & Actions']
      },
      {
        title: 'SEO & Metadata',
        items: ['Meta tag descriptions', 'Open Graph (OG)', 'Robots config', 'Structured JSON-LD']
      },
      {
        title: 'Accessibility',
        items: ['ARIA roles', 'Keyboard Focus paths', 'Screen Reader tags', 'WCAG color rules']
      }
    ],
    progress: [
      { name: 'Semantic Layouts', value: 98 },
      { name: 'Accessibility (A11y)', value: 90 },
      { name: 'SEO & Headers', value: 92 }
    ],
    masteredConcepts: [
      { name: 'Semantic Tags', description: 'Structuring website outlines using tags that describe their content (main, article, section) rather than appearances.' },
      { name: 'SEO Headers', description: 'Configuring descriptions, viewport scales, and keyword lists to assist search engine indexing.' },
      { name: 'Accessibility', description: 'Enabling screen readers to read sites correctly using ARIA landmarks and key mappings.' },
      { name: 'Form Inputs', description: 'Utilizing HTML5 validation filters (required, pattern) without loading scripting blocks.' },
      { name: 'Media Embeds', description: 'Integrating responsive images, videos, and SVG elements with fallback containers.' }
    ],
    projects: [
      {
        id: 'nexora',
        title: 'Nexora',
        image: nexoraImg,
        description: 'AI career platform utilizing accessible semantic HTML5 layouts to construct responsive dashboard frames.',
        tech: ['Next.js', 'React', 'HTML5'],
        learnings: 'Gained expertise in structural outline layout hierarchy and dynamic SEO indexing.',
        challenges: 'Optimizing page structures to score high on Google PageSpeed reports.'
      }
    ],
    achievements: [
      { title: 'SEO Optimizer', description: 'Achieved 100/100 Lighthouse SEO scores across all portfolio pages.' },
      { title: 'Semantic Designer', description: 'Created templates that conform strictly to W3C semantic markup standards.' }
    ],
    stats: {
      projectsBuilt: 20,
      hoursInvested: 300,
      certifications: 1,
      technologiesConnected: 5,
      problemSolvingCount: 50
    },
    currentlyWorking: {
      learning: ['WCAG 2.2 Accessibility Standards', 'Microdata Schemas'],
      building: ['Accessible Dashboard Kit', 'Portfolio Blog Outline']
    },
    galaxy: {
      nodes: [
        { name: 'Semantic Tags', type: 'Structure', desc: 'Self-describing layout blocks' },
        { name: 'Forms API', type: 'Inputs', desc: 'Client-side data collection' },
        { name: 'Meta Tags', type: 'SEO', desc: 'Search engine configuration' },
        { name: 'Accessibility', type: 'A11y', desc: 'Screen reader helpers' },
        { name: 'SVGs', type: 'Graphics', desc: 'Vector drawing elements' }
      ]
    },
    funFacts: [
      'The first website I made was plain HTML with black text on white background and zero CSS!',
      'Using semantic elements like <section> makes code infinitely easier to read for both humans and computers.',
      'SVG files are actually written in XML, which is very similar to HTML markup!'
    ],
    summary: 'HTML5 is the starting point of my developer journey. Over the years, I learned that structured markup is about much more than putting elements on a screen — it is about accessibility, search visibility, and creating a robust outline that stylesheets and script files can build on.'
  },
  CSS3: {
    name: 'CSS3',
    icon: FaCss3Alt,
    color: '#1572B6',
    category: 'Web Development',
    proficiency: 92,
    startedLearning: 'May 2023',
    status: 'Mastering Layouts & Animations',
    experience: '3 Years',
    overview: {
      what: 'CSS3 is the style sheet language used to describe the presentation, layouts, colors, and animations of a document written in HTML.',
      why: 'I learned CSS3 to turn basic web pages into stunning visual experiences. Understanding grids, responsive rules, and keyframes gives me total control over visual presentation.',
      how: 'I write modular CSS variables, design layouts with Flexbox and CSS Grid, implement responsive media queries, and construct animations.',
      where: 'I engineered the entire dark glassmorphic styling system, scrolling cards, and neon glow rings in this portfolio and NoteNest.'
    },
    journey: [
      { phase: 'Started Learning', date: 'May 2023', title: 'Colors & Selectors', description: 'Learned class selectors, margins, paddings, color schemes, and font styling.' },
      { phase: 'First Project', date: 'Jul 2023', title: 'Styling a Recipe Hub', description: 'Created responsive layouts using border radius, floating boxes, and custom margins.' },
      { phase: 'Major Breakthrough', date: 'Feb 2024', title: 'Flexbox & CSS Grid', description: 'Eliminated floats and absolute positioning by mastering flexible containers and grid systems.' },
      { phase: 'Advanced Concepts', date: 'Sep 2024', title: 'Keyframes & Variables', description: 'Designed interactive buttons using CSS Custom Properties and smooth hover transitions.' },
      { phase: 'Current Focus', date: 'Active', title: 'Glassmorphism & Neon Glows', description: 'Designing high-fidelity dark interfaces using backdrop-filter blur and layered radial glows.' }
    ],
    roadmap: [
      {
        title: 'Foundations',
        items: ['Box Model (Margins)', 'CSS Selectors', 'Colors & Typography', 'Positioning (Relative)']
      },
      {
        title: 'Modern Layouts',
        items: ['Flexbox Alignments', 'CSS Grid Template Areas', 'Media Queries (Mobile)', 'Aspect Ratios']
      },
      {
        title: 'Styling & Custom',
        items: ['CSS Variables (:root)', 'Pseudo-classes (:hover)', 'Linear/Radial Gradients', 'Box & Text Shadows']
      },
      {
        title: 'Transitions',
        items: ['Transition Timing', 'Keyframe Animations', 'Transform (Translate/Scale)', 'Will-Change Property']
      },
      {
        title: 'Advanced FX',
        items: ['Backdrop-filter (Blur)', 'Clip Path Masks', 'Mix Blend Modes', 'CSS Variable Math (calc)']
      }
    ],
    progress: [
      { name: 'Grid & Flexbox Layouts', value: 96 },
      { name: 'Transitions & Keyframes', value: 88 },
      { name: 'Modern CSS variables', value: 92 }
    ],
    masteredConcepts: [
      { name: 'Flexbox', description: 'Aligning and distributing space among items in a container, even when their sizes are unknown.' },
      { name: 'CSS Grid', description: 'Building complex 2-dimensional layouts with rows, columns, and named grid areas.' },
      { name: 'CSS Variables', description: 'Defining dynamic custom properties in the root to facilitate dark/light theme swapping.' },
      { name: 'Keyframes', description: 'Designing custom animations, like pulsing rings or floating background orbs.' },
      { name: 'Backdrop Filter', description: 'Applying blur and lighting overlays directly onto background elements (glassmorphism).' },
      { name: 'Media Queries', description: 'Repositioning page grids based on device screen sizes to ensure mobile responsiveness.' }
    ],
    projects: [
      {
        id: 'notenest',
        title: 'NoteNest',
        image: notenestImg,
        description: 'Clean developer-first application using custom CSS Modules to style split-pane editor frames.',
        tech: ['React', 'CSS Modules', 'CSS3'],
        learnings: 'Mastered scoped styling to prevent theme collisions in React components.',
        challenges: 'Creating a highly responsive editor sidebar that collapses smoothly across devices.'
      }
    ],
    achievements: [
      { title: 'UI Stylist', description: 'Designed 5+ beautiful responsive web templates from scratch.' },
      { title: 'Animation Engineer', description: 'Crafted smooth, non-blocking hover transformations.' }
    ],
    stats: {
      projectsBuilt: 18,
      hoursInvested: 400,
      certifications: 1,
      technologiesConnected: 4,
      problemSolvingCount: 40
    },
    currentlyWorking: {
      learning: ['CSS Scroll-driven Animations', 'Subgrid Layouts'],
      building: ['Glassmorphic UI Elements Kit', 'Interactive Particles Background']
    },
    galaxy: {
      nodes: [
        { name: 'Flexbox', type: 'Layout', desc: '1D component alignments' },
        { name: 'CSS Grid', type: 'Layout', desc: '2D page structures' },
        { name: 'Variables', type: 'Theme', desc: 'Dynamic style properties' },
        { name: 'Animations', type: 'FX', desc: 'Transitions & keyframes' },
        { name: 'Glassmorphism', type: 'FX', desc: 'Blurs & transparent sheets' },
        { name: 'Media Queries', type: 'Response', desc: 'Mobile grid adjustments' }
      ]
    },
    funFacts: [
      'My favorite CSS feature is CSS Variables — they make theme engines so much cleaner to build!',
      'I spent 2 hours centering a div when I first started learning CSS. Now I can do it in 2 lines!',
      'Using hardware acceleration (translate3d) makes complex animations run at a smooth 60fps.'
    ],
    summary: 'CSS3 is where art meets code. Understanding grids, variables, layouts, and animations lets me turn static HTML outlines into visually stunning web interfaces. I focus on creating smooth transitions, dark themes, and responsive page frames that look amazing on all viewports.'
  },
  Git: {
    name: 'Git',
    icon: FaGitAlt,
    color: '#F05032',
    category: 'Tools & Platforms',
    proficiency: 90,
    startedLearning: 'September 2023',
    status: 'Mastered Branching & Merges',
    experience: '2 Years',
    overview: {
      what: 'Git is a distributed version control system designed to track changes in source code files during software development.',
      why: 'I learned Git because managing file backups manually is impossible. Git lets me track my code history, experiment safely in isolated branches, and collaborate with teams.',
      how: 'I write commits, create and merge branches, resolve file conflicts, stash temporary edits, and trace commit histories.',
      where: 'I use Git daily across all my repositories to manage commits, feature branches, and deployment integrations.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Sep 2023', title: 'Initializing Repos', description: 'Learned git init, add, commit, push, and how to configure repository folders.' },
      { phase: 'First Project', date: 'Oct 2023', title: 'Tracked Task Tracker', description: 'Used Git commits to record daily features and rollback code when updates broke layouts.' },
      { phase: 'Major Breakthrough', date: 'Jun 2024', title: 'Branching & Merging', description: 'Mastered git checkout -b, branching strategies, and merging feature updates into main branches.' },
      { phase: 'Advanced Concepts', date: 'Feb 2025', title: 'Rebase & Conflict Res', description: 'Learned to resolve complex merge conflicts, clean commit trees with rebases, and use git stash.' },
      { phase: 'Current Focus', date: 'Active', title: 'Git Hooks & Actions', description: 'Integrating pre-commit hooks to automate code checks and formatting before commits are logged.' }
    ],
    roadmap: [
      {
        title: 'Core Basics',
        items: ['Repository init', 'Staging & Add', 'Commit Structure', 'Git status & diff']
      },
      {
        title: 'Branching Flow',
        items: ['Creating branches', 'Switching (checkout)', 'Merging branches', 'Delete & Rename']
      },
      {
        title: 'History & Logs',
        items: ['Git log formatting', 'Git show details', 'Git checkout files', 'Git revert commits']
      },
      {
        title: 'Collab & Sync',
        items: ['Git clone setups', 'Push & Pull routes', 'Fetch updates', 'Remote management']
      },
      {
        title: 'Advanced Utilities',
        items: ['Git stash rules', 'Rebasing commits', 'Interactive rebase', 'Merge conflict resolutions']
      }
    ],
    progress: [
      { name: 'Branching & Merges', value: 95 },
      { name: 'History & Reverts', value: 85 },
      { name: 'Conflict Resolution', value: 90 }
    ],
    masteredConcepts: [
      { name: 'Staging Area', description: 'Reviewing and preparing specific file edits before recording them into the history.' },
      { name: 'Branching Strategy', description: 'Working on features in isolated sandbox branches to keep the main branch stable.' },
      { name: 'Merge Conflicts', description: 'Identifying overlapping file edits, editing conflict lines, and concluding merges safely.' },
      { name: 'Git Stash', description: 'Saving dirty working directory edits temporarily to clear the workspace for quick hotfixes.' },
      { name: 'Commit History', description: 'Traversing past commits, comparing file diffs, and restoring prior builds if needed.' },
      { name: 'Interactive Rebase', description: 'Squashing, renaming, and editing commits to keep the repository history clean.' }
    ],
    projects: [
      {
        id: 'smart-tatkal-guardian',
        title: 'Smart Tatkal Guardian',
        image: tatkalImg,
        description: 'Collaborated during a hackathon, resolving merge conflicts under tight deadlines.',
        tech: ['Git', 'Python', 'React'],
        learnings: 'Learned branch coordination under high pressure environments.',
        challenges: 'Merging parallel updates across the core decision orchestrator.'
      }
    ],
    achievements: [
      { title: 'Branch Coordinator', description: 'Managed repository branches and resolved conflicts during hackathons.' },
      { title: 'Clean Committer', description: 'Maintained semantic, clear, and organized commit records across all projects.' }
    ],
    stats: {
      projectsBuilt: 20,
      hoursInvested: 500,
      certifications: 1,
      technologiesConnected: 8,
      problemSolvingCount: 0
    },
    currentlyWorking: {
      learning: ['Custom Pre-Commit Hooks', 'Git Submodules'],
      building: ['Automated Linting Hook', 'Multi-Repo Project Sync']
    },
    galaxy: {
      nodes: [
        { name: 'Commit Staging', type: 'Core', desc: 'Preparing edits' },
        { name: 'Branching', type: 'Workflow', desc: 'Isolated sandbox folders' },
        { name: 'Merge Rules', type: 'Workflow', desc: 'Combining histories' },
        { name: 'Conflict Fixes', type: 'Core', desc: 'Resolving file overlaps' },
        { name: 'Git Stash', type: 'Utility', desc: 'Temporary saving blocks' },
        { name: 'Rebasing', type: 'Utility', desc: 'Linear history squashing' }
      ]
    },
    funFacts: [
      'My most used Git command besides commit is "git status" to double-check my workspace!',
      'Git is entirely decentralized — you have a full copy of the project history on your local drive.',
      'Learning to rebase commit logs completely changed how I organize my git history.'
    ],
    summary: 'Git is the baseline tool for my development workflow. By mastering commits, stashes, rebases, and branch merges, I manage my software lifecycles safely, coordinate team hackathons, and maintain clean commit logs.'
  },
  GitHub: {
    name: 'GitHub',
    icon: FaGithub,
    color: '#E8E8F0',
    category: 'Tools & Platforms',
    proficiency: 92,
    startedLearning: 'October 2023',
    status: 'Mastering Actions & PRs',
    experience: '2 Years',
    overview: {
      what: 'GitHub is a cloud-based hosting service for Git repositories, providing collaborative tools, issue tracking, and automation pipelines.',
      why: 'I chose GitHub to host my open-source projects, share my code with recruiters, and learn how to build automated pipelines (CI/CD) that run tests automatically.',
      how: 'I manage Pull Requests, write Markdown document READMEs, configure GitHub Actions pipelines, and track bug issues.',
      where: 'It hosts all my repositories, manages my project issue boards, and automates site deployments to Vercel.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Oct 2023', title: 'Hosting Repos', description: 'Configured remote origins, pushed commits, and wrote my first profile README.' },
      { phase: 'First Project', date: 'Dec 2023', title: 'Task tracker host', description: 'Shared my interactive task tracker code online and configured page deployments.' },
      { phase: 'Major Breakthrough', date: 'Jul 2024', title: 'Pull Requests & Review', description: 'Began working with branches, opening PRs, and reviewing code contributions.' },
      { phase: 'Advanced Concepts', date: 'Mar 2025', title: 'GitHub Actions (CI/CD)', description: 'Wrote YAML workflow files to run lint checkers and tests automatically on push.' },
      { phase: 'Current Focus', date: 'Active', title: 'Project Management & Pages', description: 'Utilizing GitHub Projects to track sprint lists and configuring custom page domains.' }
    ],
    roadmap: [
      {
        title: 'Remote Basics',
        items: ['Remote SSH keys', 'Push & Pull origin', 'Forks & Clones', 'Readme markdown']
      },
      {
        title: 'Collaboration',
        items: ['Pull Requests (PR)', 'Code Reviews & Tags', 'Branch Protections', 'Assignees & Projects']
      },
      {
        title: 'Issue Tracking',
        items: ['Issues & Milestones', 'Bug reports templates', 'Wiki documentation', 'Release tag versioning']
      },
      {
        title: 'CI/CD Pipelines',
        items: ['GitHub Actions (YAML)', 'Workflow Triggers', 'Build Integrations', 'Secrets management']
      },
      {
        title: 'Hosting & APIs',
        items: ['GitHub Pages routes', 'Releases uploads', 'GitHub API queries', 'Marketplace tools']
      }
    ],
    progress: [
      { name: 'PRs & Collaboration', value: 95 },
      { name: 'Actions & Automation', value: 85 },
      { name: 'Project Board Tracking', value: 90 }
    ],
    masteredConcepts: [
      { name: 'Pull Requests', description: 'Proposing code changes, responding to reviews, and resolving conflicts prior to merge.' },
      { name: 'GitHub Actions', description: 'Creating automated workflows (CI/CD) to run builds, formats, and tests on push.' },
      { name: 'Markdown Docs', description: 'Writing professional README files with badges, screenshots, and visual markdown.' },
      { name: 'Branch Protection', description: 'Locking main branches so that tests must pass and code must be reviewed before merging.' },
      { name: 'Secrets Manager', description: 'Injecting secure database links and API tokens into automation actions without exposure.' },
      { name: 'Issue Boards', description: 'Sorting bug lists, allocating tags (documentation, bug), and tracing project milestones.' }
    ],
    projects: [
      {
        id: 'nexora',
        title: 'Nexora',
        image: nexoraImg,
        description: 'AI platform hosted on GitHub, with automatic build checks and Vercel CD integration.',
        tech: ['GitHub Actions', 'Next.js', 'Vercel'],
        learnings: 'Configured branch rules to keep production releases clean and fully tested.',
        challenges: 'Syncing Prisma database migrations during automatic deployment build steps.'
      }
    ],
    achievements: [
      { title: 'Open Source Dev', description: 'Published 10+ open repositories showcasing portfolio applications.' },
      { title: 'Automation Builder', description: 'Created custom YAML actions to auto-format and lint Javascript files.' }
    ],
    stats: {
      projectsBuilt: 20,
      hoursInvested: 400,
      certifications: 1,
      technologiesConnected: 8,
      problemSolvingCount: 0
    },
    currentlyWorking: {
      learning: ['Advanced GitHub Actions caching', 'Packages publication'],
      building: ['Lint & Build Test Workflow', 'Automated release notes generator']
    },
    galaxy: {
      nodes: [
        { name: 'Pull Requests', type: 'Collab', desc: 'Code reviews & branches' },
        { name: 'GitHub Actions', type: 'CI/CD', desc: 'YAML test runs' },
        { name: 'Issue Boards', type: 'Sprints', desc: 'Task lists & tags' },
        { name: 'Markdown', type: 'Docs', desc: 'Documentation READMEs' },
        { name: 'Pages', type: 'Hosting', desc: 'Static page deployments' }
      ]
    },
    funFacts: [
      'I enjoy decorating my GitHub profile page with custom SVG stats cards and glowing badges!',
      'GitHub Actions can execute code on Windows, Linux, and macOS server containers.',
      'I use GitHub projects to break down complex apps into smaller issues, keeping myself organized.'
    ],
    summary: 'GitHub is the center of my coding ecosystem. It is where I back up my work, manage project boards, collaborate with other programmers, and configure automated CI/CD workflows that test and build applications continuously.'
  },
  'VS Code': {
    name: 'VS Code',
    icon: VscVscode,
    color: '#007ACC',
    category: 'Tools & Platforms',
    proficiency: 95,
    startedLearning: 'September 2023',
    status: 'IDE Optimized',
    experience: '2 Years',
    overview: {
      what: 'Visual Studio Code is a lightweight, extensible source-code editor developed by Microsoft, supporting multiple languages and debugging extensions.',
      why: 'I selected VS Code because it is fast, highly customizable, and has a massive library of extensions that speed up typing, formatting, and debugging.',
      how: 'I configure custom workspace keybindings, configure Prettier and ESLint formats, debug JavaScript code, and utilize integrated terminals.',
      where: 'It is the IDE I used to write every single line of code in this portfolio, NoteNest, Nexora, and my python utilities.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Sep 2023', title: 'The Editor Setup', description: 'Installed VS Code, learned key shortcuts, configured tab sizes, and set up syntax highlighting.' },
      { phase: 'First Project', date: 'Oct 2023', title: 'Prettier Integration', description: 'Integrated formatting extensions to automatically align code blocks on file saves.' },
      { phase: 'Major Breakthrough', date: 'Jun 2024', title: 'Integrated Debugging', description: 'Setup custom launch.json scripts to trace and debug JS variables directly in the IDE.' },
      { phase: 'Advanced Concepts', date: 'Feb 2025', title: 'Workspaces & Settings', description: 'Configured custom workspace settings, multi-cursor workflows, and Git integrations.' },
      { phase: 'Current Focus', date: 'Active', title: 'Snippets & Shortcuts', description: 'Building custom React and JS code snippets to reduce repetitive typing.' }
    ],
    roadmap: [
      {
        title: 'Core Editor',
        items: ['Keybindings', 'Settings JSON', 'Integrated Terminal', 'Multi-cursor selects']
      },
      {
        title: 'Extensions',
        items: ['Prettier (Formatter)', 'ESLint (Linter)', 'GitLens (History)', 'Live Server (Preview)']
      },
      {
        title: 'Debugging',
        items: ['Breakpoints', 'Launch.json configs', 'Debug Console', 'Watch Variables']
      },
      {
        title: 'Version Control',
        items: ['Git sidebar commits', 'File diff checker', 'Branch selectors', 'Conflict editor']
      },
      {
        title: 'Optimization',
        items: ['Custom Snippets', 'Theme configuring', 'Workspace tasks', 'Command Palette']
      }
    ],
    progress: [
      { name: 'Editor Customization', value: 98 },
      { name: 'Debugging & Configurations', value: 88 },
      { name: 'Git Integration', value: 95 }
    ],
    masteredConcepts: [
      { name: 'Keybindings', description: 'Navigating and editing text rapidly using keyboard shortcuts instead of the mouse.' },
      { name: 'Integrated Debugger', description: 'Setting breakpoints, stepping through loops, and reviewing values inside VS Code.' },
      { name: 'Prettier & ESLint', description: 'Enforcing consistent code formats and identifying syntax errors dynamically.' },
      { name: 'Multi-Cursor Edit', description: 'Editing code lines in parallel using keyboard cursor splits.' },
      { name: 'Snippets', description: 'Expanding code macros (e.g. typing "rfc" to build a React functional component) instantly.' },
      { name: 'Git Lens', description: 'Reviewing file histories, commit messages, and line changes directly inside the code view.' }
    ],
    projects: [
      {
        id: 'portfolio',
        title: 'Portfolio Website',
        image: null,
        description: 'Built this entire portfolio in VS Code using custom snippets and hot reload frameworks.',
        tech: ['VS Code', 'React', 'CSS Modules'],
        learnings: 'Improved typing efficiency through layout setups.',
        challenges: 'Syncing project linters across multiple component directories.'
      }
    ],
    achievements: [
      { title: 'Keyboard Wizard', description: 'Navigated and refactored code without lifting hands from the keyboard.' },
      { title: 'IDE Organizer', description: 'Configured workspace templates for web projects.' }
    ],
    stats: {
      projectsBuilt: 20,
      hoursInvested: 1000,
      certifications: 1,
      technologiesConnected: 12,
      problemSolvingCount: 0
    },
    currentlyWorking: {
      learning: ['Keyboard macros', 'Advanced workspace configurations'],
      building: ['Custom Coding Theme', 'React Code Snippets Pack']
    },
    galaxy: {
      nodes: [
        { name: 'Keybindings', type: 'Speed', desc: 'Keyboard-only navigations' },
        { name: 'Extensions', type: 'Addons', desc: 'Linters & formatters' },
        { name: 'Debugging', type: 'Tracer', desc: 'Breakpoints & watch lists' },
        { name: 'Git Sidebar', type: 'Version', desc: 'IDE commit staging' },
        { name: 'Snippets', type: 'Speed', desc: 'Custom code macros' }
      ]
    },
    funFacts: [
      'My favorite extension is GitLens — it helps me see exactly when I wrote a line and why!',
      'VS Code is actually built with Web technologies (HTML, CSS, JS) and runs on Electron.',
      'I customize my theme and layout colors to make my workspace look like a sci-fi cockpit!'
    ],
    summary: 'VS Code is my development cockpit. By customizing shortcuts, installing formatting extensions, configuring launch scripts, and writing code snippets, I create a highly efficient workspace that makes writing code faster and debugging bugs much easier.'
  },
  'Full Stack Web Development': {
    name: 'Full Stack Web Development',
    icon: FaLaptopCode,
    color: '#818cf8',
    category: 'Currently Learning',
    proficiency: 75,
    startedLearning: 'October 2025',
    status: 'Learning Backend APIs',
    experience: '1 Year',
    overview: {
      what: 'Full Stack Web Development involves designing and building both front-end user interfaces and back-end database engines.',
      why: 'I chose to learn Full Stack development so I could turn ideas into fully functional applications without needing a separate backend developer.',
      how: 'I design UI components with React, write API endpoints with Next.js, and integrate relational databases like PostgreSQL.',
      where: 'I built NutriBloom (nutrition tracker) and Nexora (career guidance) as complete end-to-end full stack web platforms.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Oct 2025', title: 'The Client & Server', description: 'Understood Client-Server architecture, HTTP methods, and database schemas.' },
      { phase: 'First Project', date: 'Dec 2025', title: 'Task Database Tracker', description: 'Designed a React frontend connected to a Flask Python server that saved user lists.' },
      { phase: 'Major Breakthrough', date: 'Feb 2026', title: 'NutriBloom App', description: 'Created a Next.js 16 food logging platform utilizing Prisma and a PostgreSQL database.' },
      { phase: 'Advanced Concepts', date: 'Apr 2026', title: 'Authentications & SQL', description: 'Studied NextAuth authentication cycles, database relations, joins, and indexing.' },
      { phase: 'Current Focus', date: 'Active', title: 'Scalable System Design', description: 'Researching Redis cache systems, message brokers, and serverless edge functions.' }
    ],
    roadmap: [
      {
        title: 'Core Frontend',
        items: ['React Components', 'State Lifecycles', 'Responsive CSS', 'Dynamic Routings']
      },
      {
        title: 'Core Backend',
        items: ['Node.js & Express', 'RESTful API routing', 'Middleware flows', 'Authentication tokens']
      },
      {
        title: 'Databases',
        items: ['PostgreSQL (SQL)', 'MongoDB (NoSQL)', 'Prisma ORM tools', 'Relations & Joins']
      },
      {
        title: 'Security & Auth',
        items: ['JWT Encodings', 'NextAuth / Auth.js', 'Password Hashing', 'CORS Policies']
      },
      {
        title: 'Deployment & CI',
        items: ['Docker containers', 'CI/CD Pipelines', 'AWS / Vercel setups', 'Environment Variables']
      }
    ],
    progress: [
      { name: 'Frontend React/CSS', value: 90 },
      { name: 'Database & ORM Integrations', value: 80 },
      { name: 'Server & Security Architecture', value: 70 }
    ],
    masteredConcepts: [
      { name: 'Client-Server API', description: 'Connecting reactive user screens to database API nodes using secure JSON payloads.' },
      { name: 'ORM Integration', description: 'Writing type-safe database queries using Prisma instead of writing raw SQL strings.' },
      { name: 'Database Schemas', description: 'Designing tables, keys, and foreign relations to structure application databases.' },
      { name: 'State Syncing', description: 'Coordinating client-side state hooks with server records.' },
      { name: 'API Security', description: 'Restricting access to server data routes using token filters and authorization rules.' },
      { name: 'Responsive Layouts', description: 'Designing dashboards that resize and reflow fluidly from mobile to desktop screens.' }
    ],
    projects: [
      {
        id: 'nexora',
        title: 'Nexora',
        image: nexoraImg,
        description: 'Full-stack AI guidance platform built using Next.js, Prisma, and PostgreSQL.',
        tech: ['Next.js', 'React', 'Prisma', 'PostgreSQL'],
        learnings: 'Configured end-to-end data schemas and relational databases.',
        challenges: 'Structuring relational data schemas for multi-year career roadmaps.'
      },
      {
        id: 'nutribloom',
        title: 'NutriBloom',
        image: nutribloomImg,
        description: 'Nutrition tracking platform built with Next.js, Prisma ORM, and PostgreSQL.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
        learnings: 'Learned relational joins and authorization systems.',
        challenges: 'Auto-generating dynamic grocery shopping lists directly from weekly meal plans.'
      }
    ],
    achievements: [
      { title: 'Full Stack Engineer', description: 'Built 2 fully-featured database applications featuring authentication systems.' },
      { title: 'Database Architect', description: 'Designed relational PostgreSQL database schemas.' }
    ],
    stats: {
      projectsBuilt: 3,
      hoursInvested: 500,
      certifications: 2,
      technologiesConnected: 9,
      problemSolvingCount: 100
    },
    currentlyWorking: {
      learning: ['Serverless Edge functions', 'Redis caching networks'],
      building: ['Personal Blog with dynamic DB', 'Live Chat Platform']
    },
    galaxy: {
      nodes: [
        { name: 'Next.js', type: 'Server', desc: 'RSC & Server Actions' },
        { name: 'PostgreSQL', type: 'Database', desc: 'Relational storage' },
        { name: 'Prisma ORM', type: 'Query', desc: 'Type-safe DB queries' },
        { name: 'NextAuth', type: 'Security', desc: 'Session authorizations' },
        { name: 'REST APIs', type: 'Network', desc: 'JSON web endpoints' },
        { name: 'Vercel', type: 'Deploy', desc: 'Edge server hosting' }
      ]
    },
    funFacts: [
      'My first backend route sent back a plain text "Hello World", and seeing it in the browser felt amazing!',
      'Full Stack development lets me build whatever ideas come to my mind, end-to-end.',
      'I enjoy modeling the connections between users, sessions, and data fields on database diagrams.'
    ],
    summary: 'Full Stack Web Development brings all my skills together. By combining reactive user interfaces with database engines, secure authentication servers, and clean data schemas, I build complete web platforms that solve real-world problems.'
  },
  'Cloud Computing': {
    name: 'Cloud Computing',
    icon: FaCloud,
    color: '#0ea5e9',
    category: 'Currently Learning',
    proficiency: 70,
    startedLearning: 'January 2026',
    status: 'Exploring Infrastructure',
    experience: '6 Months',
    overview: {
      what: 'Cloud Computing is the on-demand delivery of IT resources and database hosting over the Internet with pay-as-you-go pricing.',
      why: 'I started learning Cloud Computing to understand how applications run at scale, how databases sync across regions, and how to configure servers securely.',
      how: 'I deploy projects on serverless platforms, manage environment variables, and configure database clusters.',
      where: 'I use Vercel edge routes and Neon cloud database clusters to host Nexora and NutriBloom.'
    },
    journey: [
      { phase: 'Started Learning', date: 'Jan 2026', title: 'The Cloud Shift', description: 'Studied virtual machines, static hosting services, and database clusters.' },
      { phase: 'First Project', date: 'Feb 2026', title: 'Vercel Static Deploy', description: 'Deployed my first React application onto cloud routes with automated push-to-deploy.' },
      { phase: 'Major Breakthrough', date: 'Mar 2026', title: 'Cloud PostgreSQL Cluster', description: 'Connected a Next.js client to a serverless Neon database, managing connections.' },
      { phase: 'Advanced Concepts', date: 'May 2026', title: 'Serverless Functions', description: 'Configured API routing layers that spin up on-demand to process requests.' },
      { phase: 'Current Focus', date: 'Active', title: 'AWS Core Services', description: 'Learning AWS EC2, S3 bucket storage, and lambda serverless configurations.' }
    ],
    roadmap: [
      {
        title: 'Core Concepts',
        items: ['SaaS, PaaS & IaaS', 'Serverless execution', 'Regions & Zones', 'Edge networks']
      },
      {
        title: 'Database Hosting',
        items: ['Serverless PostgreSQL', 'Cloud clusters config', 'Connection pooling', 'Data migrations']
      },
      {
        title: 'Serverless Deploy',
        items: ['Vercel deployments', 'Netlify hostings', 'Render services', 'Environment variables']
      },
      {
        title: 'AWS Foundations',
        items: ['EC2 Virtual Instances', 'S3 Bucket storage', 'IAM User permissions', 'Lambda functions']
      },
      {
        title: 'Monitoring & CI',
        items: ['Server log streams', 'Performance checkers', 'CI/CD pipeline runs', 'CDN caching setups']
      }
    ],
    progress: [
      { name: 'Serverless Deployment', value: 85 },
      { name: 'Database Cluster Config', value: 75 },
      { name: 'AWS Core Infrastructure', value: 50 }
    ],
    masteredConcepts: [
      { name: 'Serverless Hosting', description: 'Deploying code that runs on-demand, removing the need to manage server hardware.' },
      { name: 'Environment Setup', description: 'Configuring secret keys and tokens securely across dev, staging, and production.' },
      { name: 'Edge Networking', description: 'Caching static assets and executing code at edge locations close to users for fast load times.' },
      { name: 'Cloud Databases', description: 'Connecting applications to cloud PostgreSQL servers.' },
      { name: 'CI/CD Integration', description: 'Linking GitHub to deployment platforms to trigger automatic builds on git push.' },
      { name: 'Object Storage', description: 'Uploading and serving media files from cloud buckets.' }
    ],
    projects: [
      {
        id: 'nexora',
        title: 'Nexora',
        image: nexoraImg,
        description: 'AI career platform deployed on Vercel utilizing Neon Postgres databases.',
        tech: ['Vercel', 'PostgreSQL', 'Next.js'],
        learnings: 'Understood edge performance configurations and environment setup.',
        challenges: 'Managing serverless database connections during high traffic bursts.'
      }
    ],
    achievements: [
      { title: 'Cloud Deployer', description: 'Configured automated deployment pipelines for all web projects.' },
      { title: 'Serverless Engineer', description: 'Integrated serverless database clusters with Next.js.' }
    ],
    stats: {
      projectsBuilt: 2,
      hoursInvested: 150,
      certifications: 2,
      technologiesConnected: 5,
      problemSolvingCount: 0
    },
    currentlyWorking: {
      learning: ['AWS Cloud Practitioner curriculum', 'Docker containerization'],
      building: ['S3 Image hosting service', 'Dockerized task processor']
    },
    galaxy: {
      nodes: [
        { name: 'Vercel', type: 'PaaS', desc: 'Edge hosting routes' },
        { name: 'Neon DB', type: 'Database', desc: 'Serverless Postgres storage' },
        { name: 'AWS S3', type: 'Storage', desc: 'File bucket storage' },
        { name: 'Edge CDN', type: 'Network', desc: 'Dynamic request routing' },
        { name: 'Lambda', type: 'Serverless', desc: 'On-demand code execution' }
      ]
    },
    funFacts: [
      'My first cloud-hosted database had a single table, but being able to query it from anywhere felt like magic!',
      'Serverless computing does not mean there are no servers — it just means you do not have to configure them!',
      'Edge functions execute code closer to the user, reducing latency times down to single-digit milliseconds.'
    ],
    summary: 'Cloud Computing completes my development pipeline. By moving applications from localhost onto scalable cloud platforms, configuring serverless databases, and setting up automatic CD routes, I build software that is accessible to anyone in the world.'
  }
};
