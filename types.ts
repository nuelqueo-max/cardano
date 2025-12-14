export interface TrendItem {
  name: string;
  description: string;
  growthPotential: number; // 0-100
  saturation: number; // 0-100
  category: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: string[];
  locked?: boolean;
}

export interface AiPrompt {
  id: string;
  title: string;
  category: 'Discovery' | 'Analysis' | 'Creation' | 'Marketing';
  content: string;
}

export enum AppView {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD',
  COURSE = 'COURSE',
  ANALYZER = 'ANALYZER',
  CALCULATOR = 'CALCULATOR',
  PROMPTS = 'PROMPTS',
  PRICING = 'PRICING'
}

export interface TrendAnalysisResult {
  niche: string;
  trends: TrendItem[];
  summary: string;
}
