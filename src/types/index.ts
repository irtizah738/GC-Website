export interface Service {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  capabilities: string[];
  useCases: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  problem: string;
  architecture: string;
  techStack: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}
