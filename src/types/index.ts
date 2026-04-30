export interface System {
  id: string;
  title: string;
  description: string;
  whyItsHard: string;
  howWeSolveIt: string;
  keyFeatures: string[];
  architectureThinking: string;
  icon: string;
  externalLink?: string;
}

export interface Industry {
  id: string;
  title: string;
  challenges: string[];
  workflows: string[];
  dataComplexity: string;
  systemRequirements: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  problemContext: string;
  systemComplexity: string;
  architectureDecisions: string;
  tradeoffs: string;
  outcome: string;
  techStack: string[];
  imageUrl: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
  whyItMatters: string;
  icon: string;
}
