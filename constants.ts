import { Project, Experience, Writing } from './types';

export const PORTFOLIO_OWNER = {
  name: "Farhan Arya Wicaksono",
  role: "",
  bio: "I’m Farhan, an undergraduate student  with a strong interest in building data-driven and intelligent systems. I have experience in machine learning, data engineering, and software development, and I enjoy exploring emerging technologies to continuously expand my technical capabilities.",
  location: "Cilegon, Indonesia",
  email: "farhan17wicaksono@gmail.com",
  github: "https://github.com/farhanwew",
  linkedin: "https://www.linkedin.com/in/farhan-arya-wicaksono/ ",
  kaggle: "https://www.kaggle.com/farhanwew",
  avatarUrl: "https://avatars.githubusercontent.com/u/154995211?v=4"
};

export const NAVIGATION = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blogs', path: '/blogs' }
];

export const SECTION_TITLES = {
  about: "Experiences & Skills",
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
    demoUrl: "#",
    githubUrl: "https://github.com/farhanwew/FinSight_V2"
  }
];

export const EXPERIENCES: Experience[] = [
];

export const WRITINGS: Writing[] = [
  {
    id: '1',
    title: "Transfer Learning Menggunakan LoRA+ pada Llama 3.2 untuk Percakapan Bahasa Indonesia",
    description: "Penelitian mengenai optimasi model Llama 3.2 untuk percakapan dalam Bahasa Indonesia menggunakan teknik LoRA+.",
    date: "2 Mei 2025",
    readTime: "30 min read",
    link: "https://publikasi.dinus.ac.id/technoc/article/view/12508/5290"
  }
];