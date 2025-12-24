import { Project, Experience, Writing, Skill, Education } from './types';
import { 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPytorch, 
  SiHuggingface, 
  SiScikitlearn, 
  SiFastapi, 
  SiReact, 
  SiGit, 
  SiDocker,
  SiPostgresql,
  SiTensorflow,
  SiMlflow,
  SiOpenai,
  SiPandas
} from 'react-icons/si';
import { FaBrain, FaImage } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { DiJava } from 'react-icons/di';

export const PORTFOLIO_OWNER = {
  name: "Farhan Arya Wicaksono",
  role: "",
  bio: "I’m Farhan, an undergraduate student  with a strong interest in building data-driven and intelligent systems. I have experience in machine learning, data engineering, and software development, and I enjoy exploring emerging technologies to continuously expand my technical capabilities.",
  location: "Serang, Indonesia",
  email: "farhan17wicaksono@gmail.com",
  github: "https://github.com/farhanwew",
  linkedin: "https://www.linkedin.com/in/farhan-arya-wicaksono/ ",
  kaggle: "https://www.kaggle.com/farhanwew",
  avatarUrl: "https://i.ibb.co.com/zTwNyZ3n/foto-gw-selpi.jpg"
};

export const NAVIGATION = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blogs', path: '/blogs' }
];

export const SECTION_TITLES = {
  education: "Education",
  experience: "Experience",
  skills: "Skills",
  projects: "My Projects",
  blogs: "Blogs, Articles, dan Writings"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "LLaDA: Diffusion Model PEFT",
    description: "Implementation of Parameter-Efficient Fine-Tuning for diffusion models",
    tags: ["Python", "PyTorch", "Huggingface", "PEFT"],
    year: "2025",
    category: "Machine Learning",
    demoUrl: "https://www.spuun.art/blog/llada-peft/lada-id",
    githubUrl: "https://github.com/kcv-if/fp-kcvanguard-workshop-2025/tree/main/llada-peft"
  },
  {
    id: '2',
    title: "FinSight - Financial Management Platform for UMKM",
    description: "FinSight is a comprehensive financial management platform designed to help Indonesian UMKM (Usaha Mikro, Kecil, dan Menengah) make better business decisions through smart financial analysis, cash flow predictions, and AI-based business recommendations.",
    tags: ["FastAPI", "HTML", "CSS", "JavaScript"],
    year: "2023",
    category: "Web Development",
    demoUrl: "https://finsight.up.railway.app",
    githubUrl: "https://github.com/farhanwew/FinSight_V2"
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: '1',
    institution: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor's Degree in Rekayasa Kecerdasan Artifisial (AI Engineering)",
    period: "2023 - Present"  
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: DiJava },
      { name: "SQL", icon: SiPostgresql },
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Tensorflow", icon: SiTensorflow }, 
      { name: "Mlflow", icon: SiMlflow },
      { name: "Pandas", icon: SiPandas },
    ]
  },
  {
    category: "Development & Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "FastAPI", icon: SiFastapi }
    ]
  }
];
export const EXPERIENCES: Experience[] = [
];

export const WRITINGS: Writing[] = [
  {
    id: '1',
    title: "Transfer Learning Menggunakan LoRA+ pada Llama 3.2 untuk Percakapan Bahasa Indonesia",
    description: "This  research  explores  the  application  of  the  Parameter-Efficient  Finetuning  (PEFT) method  Low-Rank  Adaptation+  (LoRA+)  on  the  transfer  learning  of  Llama  3.2  1B,  a  large language  model  (LLM).  ",
    date: "2 Mei 2025",
    readTime: "30 min read",
    link: "https://publikasi.dinus.ac.id/technoc/article/view/12508/5290"
  }
];