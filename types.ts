export interface SocialLinks {
  linkedIn?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  sport: string;
  country: string;
  location?: string;
  imageAction: string;
  imageHeadshot: string;
  achievements: string[];
  governance: string[];
  keyAchievement: string;
  business?: string;
  philosophy?: string;
  trackRecord?: string;
  education?: string[];
  bioFull: string;
  socialLinks?: SocialLinks;
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