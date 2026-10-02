export interface Industry {
  id: string;
  title: string;
  challenges: string[];
  workflows: string[];
  dataComplexity: string;
  systemRequirements: string[];
  icon: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
  whyItMatters: string;
  icon: string;
}
