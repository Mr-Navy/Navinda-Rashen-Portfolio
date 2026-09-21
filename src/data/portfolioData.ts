import { FeaturedProject, OtherProject, SkillCategory, GitCommit } from '../types';

export const PORTFOLIO_INFO = {
  name: 'Navinda Rashen Pimburage',
  shortName: 'NAVINDA RASHEN',
  initials: 'NR',
  role: 'Full-Stack Developer & AI/ML Enthusiast',
  status: 'AVAILABLE FOR SRE/SWE',
  subHeading: 'Navinda Rashen Pimburage — Undergraduate Computer Scientist',
  location: 'Colombo District, Sri Lanka',
  heroLocation: 'COLOMBO / HORANA, LK',
  degree: 'BSc (Hons) in Computer Science',
  university: 'University of Sri Jayewardenepura',
  cohort: '2022/2023 Intake (Inaugural Cohort)',
  phone: '0762071252',
  uptime: '99.98%',
  heroDescription:
    'Detail-oriented 3rd-year Computer Science Undergraduate at the University of Sri Jayewardenepura, building scalable web applications, applied AI/ML systems, and statistical modeling with software quality assurance and clean architecture.',
  email: 'rashenpimburage@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/navinda-rashen-97066826b',
  githubUrl: 'https://github.com/Mr-Navy',
  githubUsername: 'Mr-Navy',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBf8eFOKd0YcILllEu-wSppmF--xn7sGdWJW7_pyWQNawn1cVbw4RwDWnAtMmySEVQNL1jD0yx23FDQZgcjh8o2z41-um2Im0yNCH919mdBCwm5TPFm0TO_aTkwcxShdfQx-l2yoGKWtRNQjpS0p39MER5I7663Igub-IPVmQau2E2sIz-JG8vNaNZU9-ipQKQwCWTE360EM_aQi7bWXGtxS0_JNDDjYaMSHHbfb0Xk0iXFRupJQe2iUilf5nr3Ke6tfQ',
  aboutImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBAYrd3pzNU8J_SoJbk83C-SW4MQVzXpneG09I-O3yd-ESwPbK2RYAXAbVdz2HTYVsTszkALP7UfLt6gzjzh865MF7USxY6dIvFWyOtVL1g05PrDdwW1vMpJpEOanw2QCU-1tQFcBLbGZOAkoP5Y6U02INH9ImG5SpKBaUkECxETszL-G2OElOC6VXl_UntVc3HxMOYN-wSozsmjkcCKgYsJWKNONaGCJzOoi2dlh-kyLbRBC_EATdWD2iNj23MWV-dUxjiPXoGLazKgQ',
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'unigo',
    number: 'PROJECT 01',
    category: 'MOBILE SYSTEMS ARCHITECTURE',
    subCategory: 'CAMPUS INTELLIGENCE',
    title: 'UniGO',
    subtitle: 'University Event & Lost Item Tracking App',
    description:
      'A centralized, high-throughput campus utility platform addressing decentralized event coordination and asset retrieval. Built to eliminate communication friction across university faculties using resilient mobile state sync and authenticated student logging.',
    features: [
      {
        title: 'Interactive Lost & Found',
        description: 'Real-time status tracking, item matching, and geolocation filtering.',
        iconName: 'find_in_page',
      },
      {
        title: 'Campus Event Calendar',
        description: 'Faculty-wide scheduling with push triggers and capacity metrics.',
        iconName: 'event_available',
      },
      {
        title: 'Verified Student Reporting',
        description: 'Role-based student credential validation preventing spam submissions.',
        iconName: 'verified_user',
      },
      {
        title: 'Instant Push Notification',
        description: 'Low-latency event notifications dispatched via backend messaging brokers.',
        iconName: 'notifications_active',
      },
    ],
    technologies: ['React Native', 'Flutter', 'REST APIs', 'Firebase Auth'],
    githubUrl: 'https://github.com/Leshan-creator/UniGOApp',
    githubRepoName: 'Leshan-creator/UniGOApp',
    type: 'code-sync',
    codeSnippet: {
      filename: 'UniGO/services/locator.ts',
      status: 'SYNC_OK',
      language: 'typescript',
      code: `// Event & Lost Asset Broker Pipeline
export interface CampusAsset {
  id: UUID;
  type: "LOST" | "FOUND" | "EVENT";
  geoZone: GeoBounds;
  verifiedStudentId: string;
  timestamp: EpochTimeStamp;
}

export async function dispatchVerification(
  claim: CampusAsset
): Promise<VerificationReceipt> {
  // Enforce dual-factor faculty validation
  const validated = await authAudit(claim);
  if (!validated.ok) throw new SecurityViolation();
  return pushNotificationBroker(claim);
}`,
      metrics: [
        { label: 'LATENCY', value: '<42ms' },
        { label: 'TEST COVERAGE', value: '94.2%' },
      ],
    },
  },
  {
    id: 'addiction-predictor',
    number: 'PROJECT 02',
    category: 'MACHINE LEARNING & PREDICTIVE ANALYTICS',
    subCategory: 'BEHAVIORAL DATA',
    title: 'Social Media Addiction Predictor',
    subtitle: '"Addiction Meter"',
    description:
      'An empirical machine learning pipeline evaluating cognitive screen-time habits, notification responsiveness, and platform usage metrics to classify risk thresholds through supervised multi-variable statistical modeling.',
    features: [
      {
        title: 'Feature Extraction Pipeline',
        description: 'Transforms daily screen logs and latency into normalized feature vectors.',
        iconName: 'query_stats',
      },
      {
        title: 'Supervised Classification',
        description: 'Random Forest & Logistic Regression scoring psychological strain thresholds.',
        iconName: 'model_training',
      },
      {
        title: 'Platform Usage Metrics',
        description: 'Cross-correlates feed exposure against cognitive attention fatigue indices.',
        iconName: 'analytics',
      },
      {
        title: 'Interactive Scoring UI',
        description: 'Lightweight Flask runtime with live parameter sliders and confidence bounds.',
        iconName: 'speed',
      },
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    githubUrl: 'https://github.com/Mr-Navy/Social-Media-Addiction-Predictor',
    githubRepoName: 'Mr-Navy/Social-Media-Addiction-Predictor',
    type: 'ml-visual',
    mlData: {
      accuracy: '89.4%',
      modelType: 'SYSTEM_UI_INTERFACE',
      dashboardImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDKDSPNXOMEkHgl8JOtOuSA1rIHxLJPatEMZn1GUTkDuo_OEH_YEiDW-5l7bXmO5JndhhHjQ_FvgF2JfUkUaVmljJtywL2RAZv-CqbISr8IzndITVyvMGrBLb-j3lz3mxPoZkfydQnLzhZNOixDUWqxZ00r7UeLZ3Sl559f4Mf7pyvpWjC2BGz2Te77VBXSCLhSH_ljtnrfarfElzauQK_ZVHFfZn8d7qGlKKkg5uIZv3FETsOaTTM7NAACEaFKOHy4VQ',
      chatImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBeQTuM6G5JHg7pCeJ2l1JKcSqY5JDMz4t3pXPKPOxT0LFS-ZugE4I-bwNH36NXm37x6IWMiHrinlbiCLr3BDBXmitkABMOtgNa91_TD1Pa65UWTzm0by7jMNTgIHPQcp7uw0Ffl1EHNfD8a-mgUU1vroyfyyBi0kCuVVcPRT9emsrrf0teTDwwPAlilIodafxSax_6VyM2PbxKcMdu55_q9gJKA9qQcUsNCEvtwR_Oto8YbbzapwHBEMoi3bF5vSaA0g',
      statusBadge: 'LIVE PREVIEW · SOCIALSENSE',
    },
  },
  {
    id: 'quiz-manager',
    number: 'PROJECT 03',
    category: 'DESKTOP SOFTWARE & AI INTEGRATION',
    subCategory: 'SYSTEMS RUNTIME',
    title: 'Quiz Manager using AI',
    subtitle: 'Desktop Engine',
    description:
      'A native desktop competition orchestrator designed for offline-first academic decathlons. Features automated LLM-assisted question-bank synthesis, state synchronization, local caching with SQLite, and instant leaderboard arbitration.',
    features: [
      {
        title: 'AI Question-Bank Generation',
        description: 'Dynamic difficulty adjustments via Gemini API pipelines with strict schema parsing.',
        iconName: 'smart_toy',
      },
      {
        title: 'Live Broadcast Leaderboard',
        description: 'Sub-second score calculation rendering instantaneous standings during multi-round events.',
        iconName: 'leaderboard',
      },
      {
        title: 'Local SQLite State Ledger',
        description: 'Zero data loss on network drops; persistent local transactions and audit records.',
        iconName: 'storage',
      },
      {
        title: 'Multi-Round State Machine',
        description: 'Deterministic match progressions managing buzzer lockout timings and score audits.',
        iconName: 'sync',
      },
    ],
    technologies: ['Electron.js', 'Node.js', 'SQLite', 'Gemini APIs'],
    githubUrl: 'https://github.com/Mr-Navy/Quiz-Manager-using-AI',
    githubRepoName: 'Mr-Navy/Quiz-Manager-using-AI',
    type: 'decathlon-engine',
    engineData: {
      systemState: 'ELECTRON_IPC_ORCHESTRATOR',
      leaderboard: [
        { rank: 1, team: 'Team Alfa (CS Dept)', department: 'Computer Science', points: 1420 },
        { rank: 2, team: 'Team Beta (Data Sci)', department: 'Data Science', points: 1380 },
        { rank: 3, team: 'Team Gamma (Software Eng)', department: 'Software Engineering', points: 1210 },
      ],
      metrics: [
        { label: 'LLM Latency', value: '420ms' },
        { label: 'SQLITE', value: 'PERSISTED' },
      ],
    },
  },
];

export const OTHER_PROJECTS: OtherProject[] = [
  {
    id: 'greenhouse',
    category: 'RESEARCH',
    categoryTag: 'RESEARCH',
    title: 'Greenhouse Conditions Optimization',
    description:
      'Empirical parametric research utilizing statistical inference to calculate optimal humidity, thermal variance, and sensor metrics.',
    technologies: ['Python', 'Pandas', 'SciPy', 'Statsmodels'],
    repoName: 'final-research-project-stat-nexus',
    repoUrl: 'https://github.com/Mr-Navy',
    iconName: 'psychiatry',
  },
  {
    id: 'smart-hotel',
    category: 'FRONTEND APP',
    categoryTag: 'FRONTEND APP',
    title: 'Smart Hotel Reservation & Management',
    description:
      'High-performance hotel reservation interface featuring interactive booking flows, dynamic room occupancy states, and REST client integration.',
    technologies: ['React.js', 'Tailwind', 'Axios', 'State Sync'],
    repoName: 'Mr-Navy/smart-hotel-frontend',
    repoUrl: 'https://github.com/Mr-Navy/smart-hotel-frontend',
    iconName: 'hotel',
  },
  {
    id: 'ecommerce',
    category: 'FULL-STACK',
    categoryTag: 'FULL-STACK',
    title: 'Full-Stack E-Commerce Platform',
    description:
      'Production-grade multi-tenant e-commerce system featuring token auth, inventory concurrency control, cart persistence, and order dispatch.',
    technologies: ['React.js', 'Spring Boot / Node', 'PostgreSQL'],
    repoName: 'Mr-Navy/Ecommerce_Web',
    repoUrl: 'https://github.com/Mr-Navy/Ecommerce_Web',
    iconName: 'shopping_cart',
  },
  {
    id: 'academic-collab',
    category: 'COLLABORATIVE',
    categoryTag: 'COLLABORATIVE',
    title: 'Academic Collaborative Systems',
    description:
      'Modular software architecture engineered in collaborative teams, emphasizing design patterns, clean code principles, and unified documentation.',
    technologies: ['Java', 'OOP', 'Git Flow', 'Modular CI'],
    repoName: 'Group-07 / Architecture',
    repoUrl: 'https://github.com/Mr-Navy',
    iconName: 'hub',
  },
];

export const TECH_LOGOS: Record<string, string> = {
  JavaScript: '/logos/javascript.svg',
  TypeScript: '/logos/javascript.svg',
  Java: '/logos/java.svg',
  Python: '/logos/python.svg',
  C: '/logos/c.svg',
  'C++': '/logos/cpp-iso.svg',
  React: '/logos/react.svg',
  'React.js': '/logos/react.svg',
  'React Native': '/logos/react.svg',
  HTML5: '/logos/html5.svg',
  CSS3: '/logos/css3.svg',
  'Tailwind CSS': '/logos/css3.svg',
  GitHub: '/logos/github.svg',
  'Git / GitHub': '/logos/github.svg',
  LinkedIn: '/logos/linkedin.svg',
  Email: '/logos/email.svg',
  Telephone: '/logos/telephone.svg',
  CodeShare: '/logos/code-share.svg',
};

export const FEATURED_TECH_LOGOS = [
  { name: 'Python', logo: '/logos/python.svg', badge: 'AI & Backend', highlight: '#ffe052' },
  { name: 'React', logo: '/logos/react.svg', badge: 'Frontend UI', highlight: '#00d8ff' },
  { name: 'Java', logo: '/logos/java.svg', badge: 'OOP Systems', highlight: '#f89820' },
  { name: 'JavaScript', logo: '/logos/javascript.svg', badge: 'Web Engine', highlight: '#ffffff' },
  { name: 'C++', logo: '/logos/cpp-iso.svg', badge: 'Performance', highlight: '#00599c' },
  { name: 'C', logo: '/logos/c.svg', badge: 'Systems Code', highlight: '#ffffff' },
  { name: 'HTML5', logo: '/logos/html5.svg', badge: 'Semantics', highlight: '#e34f26' },
  { name: 'CSS3', logo: '/logos/css3.svg', badge: 'Modern Styling', highlight: '#1b73ba' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'software-dev',
    number: '01',
    categoryName: 'Core Languages',
    title: 'Software Development',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'C++'],
    appliedIn: 'UniGO, Academic Group-07, Quiz Manager',
    iconName: 'terminal',
  },
  {
    id: 'web-tech',
    number: '02',
    categoryName: 'Frontend & Web',
    title: 'Web Technologies',
    skills: ['React', 'Next.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs'],
    appliedIn: 'Smart Hotel, Ecommerce_Web, Portfolio',
    iconName: 'language',
  },
  {
    id: 'ai-ml',
    number: '03',
    categoryName: 'Modeling & GenAI',
    title: 'AI & Machine Learning',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Gemini APIs'],
    appliedIn: 'Addiction Predictor, Quiz Manager AI',
    iconName: 'neurology',
  },
  {
    id: 'data-stats',
    number: '04',
    categoryName: 'Inference & Plots',
    title: 'Data & Statistics',
    skills: ['Pandas', 'SciPy', 'Statsmodels', 'Matplotlib', 'Seaborn'],
    appliedIn: 'Greenhouse Optimization, Research Nexus',
    iconName: 'bar_chart',
  },
  {
    id: 'db-backend',
    number: '05',
    categoryName: 'Persistence & Cloud',
    title: 'Database & Backend',
    skills: ['SQLite', 'MySQL', 'PostgreSQL', 'Firebase'],
    appliedIn: 'Quiz Manager, UniGO, Ecommerce',
    iconName: 'database',
  },
  {
    id: 'tools-workflow',
    number: '06',
    categoryName: 'Toolchain & OS',
    title: 'Tools & Workflow',
    skills: ['Git / GitHub', 'Jupyter', 'VS Code', 'Linux (CLI)'],
    appliedIn: 'Continuous Integration, Git-Flow, Shell Automation',
    iconName: 'settings',
  },
];

export const TELEMETRY_COMMITS: GitCommit[] = [
  {
    id: 'c1',
    action: 'git push',
    repo: 'Leshan-creator/UniGOApp',
    message: 'refactor(services): enhance lost asset claim validation & push worker',
    branch: 'main',
  },
  {
    id: 'c2',
    action: 'git push',
    repo: 'Mr-Navy/Social-Media-Addiction-Predictor',
    message: 'feat(model): cross-validate random forest with updated survey vectors',
    branch: 'main',
  },
  {
    id: 'c3',
    action: 'git push',
    repo: 'Mr-Navy/Quiz-Manager-using-AI',
    message: 'chore(electron): harden sqlite transaction ledger against timeout',
    branch: 'main',
  },
  {
    id: 'c4',
    action: 'git push',
    repo: 'Mr-Navy/smart-hotel-frontend',
    message: 'style(booking): optimize responsive modal layout & room occupancy cards',
    branch: 'main',
  },
];
