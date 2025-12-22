import React from 'react';

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

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon: React.ElementType;
}

export interface Skill {
  category: string;
  items: SkillItem[];
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