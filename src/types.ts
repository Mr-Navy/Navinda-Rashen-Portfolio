export interface ProjectFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface FeaturedProject {
  id: string;
  number: string;
  category: string;
  subCategory: string;
  title: string;
  subtitle: string;
  description: string;
  features: ProjectFeature[];
  technologies: string[];
  githubUrl: string;
  githubRepoName: string;
  demoUrl?: string;
  type: 'code-sync' | 'ml-visual' | 'decathlon-engine';
  // Code visual preview data
  codeSnippet?: {
    filename: string;
    status: string;
    language: string;
    code: string;
    metrics: { label: string; value: string }[];
  };
  // ML preview data
  mlData?: {
    accuracy: string;
    modelType: string;
    dashboardImage: string;
    chatImage: string;
    statusBadge: string;
  };
  // Decathlon/Electron engine data
  engineData?: {
    systemState: string;
    leaderboard: { rank: number; team: string; department: string; points: number }[];
    metrics: { label: string; value: string }[];
  };
}

export interface OtherProject {
  id: string;
  category: string;
  categoryTag: string;
  title: string;
  description: string;
  technologies: string[];
  repoName: string;
  repoUrl: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  categoryName: string;
  title: string;
  skills: string[];
  appliedIn: string;
  iconName: string;
}

export interface GitCommit {
  id: string;
  action: string;
  repo: string;
  message: string;
  branch: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
