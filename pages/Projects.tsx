import React from 'react';
import { PROJECTS, SECTION_TITLES } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const groupedProjects = PROJECTS.reduce((acc, project) => {
    const category = project.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  const categories = Object.keys(groupedProjects);

  return (
    <div className="fade-in">
      <h2 className="font-serif text-lg font-bold text-stone-900 mb-8 flex items-center gap-2">
        <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
        {SECTION_TITLES.projects}
      </h2>
      
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="font-serif text-md font-semibold text-stone-400 mb-6 uppercase tracking-wider">
              {category}
            </h3>
            <div className="space-y-12 pl-2 border-l-2 border-stone-100">
              {groupedProjects[category].map((project) => (
                <div key={project.id} className="group pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="font-serif text-xl text-stone-800 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-stone-400 font-mono">{project.year}</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed max-w-xl mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-stone-600 bg-white/60 border border-stone-200 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm font-medium">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-stone-600 hover:text-accent transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-stone-600 hover:text-accent transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;