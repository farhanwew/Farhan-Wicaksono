import React from 'react';
import { EXPERIENCES, SECTION_TITLES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="font-serif text-lg font-bold text-stone-900 mb-8 flex items-center gap-2">
        <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
        {SECTION_TITLES.about}
      </h2>
      <div className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="group grid sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 cursor-default border-b border-stone-200 pb-12 last:border-0">
            <span className="text-sm text-stone-400 font-mono pt-1">{exp.period}</span>
            <div>
              <h3 className="font-medium text-stone-900 group-hover:text-accent transition-colors duration-300 mb-1">{exp.role}</h3>
              <div className="text-stone-500 text-sm mb-3">{exp.company}</div>
              <p className="text-stone-600 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;