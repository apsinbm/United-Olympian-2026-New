export interface Candidate {
  id: string;
  name: string;
  role: string;
  sport: string;
  country: string;
  imageAction: string;
  imageHeadshot: string;
  achievements: string[];
  governance: string[];
  keyAchievement: string;
  business?: string;
  philosophy?: string;
  trackRecord?: string;
  bioFull: string;
}

export interface ActionPoint {
  id: string;
  title: string;
  description: string;
}

export interface Language {
  code: string;
  label: string;
}