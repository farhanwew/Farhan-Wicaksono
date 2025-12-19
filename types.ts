export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  year: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Writing {
  id: string;
  title: string;
  description?: string;
  date: string;
  readTime: string;
  link?: string;
}

export enum SectionId {
  HOME = 'home',
  WORK = 'work',
  ABOUT = 'about',
  WRITING = 'writing',
}