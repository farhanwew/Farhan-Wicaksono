import React from 'react';
import { EXPERIENCES, SKILLS, EDUCATIONS, SECTION_TITLES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="fade-in space-y-16">
      {/* Education Section */}
      <section>
        <h2 className="font-serif text-lg font-bold text-stone-900 mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
          {SECTION_TITLES.education}
        </h2>
        <div className="space-y-12">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="group grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 cursor-default border-b border-stone-200 pb-12 last:border-0 last:pb-0">
              <span className="text-sm text-stone-400 font-mono pt-1">{edu.period}</span>
              <div>
                <h3 className="font-medium text-stone-900 group-hover:text-accent transition-colors duration-300 mb-1">{edu.institution}</h3>
                <div className="text-stone-500 text-sm mb-3">{edu.degree}</div>
                {edu.description && (
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="font-serif text-lg font-bold text-stone-900 mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
          {SECTION_TITLES.experience}
        </h2>
        <div className="space-y-12">
          {EXPERIENCES.length > 0 ? (
            EXPERIENCES.map((exp) => (
              <div key={exp.id} className="group grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 cursor-default border-b border-stone-200 pb-12 last:border-0 last:pb-0">
                <span className="text-sm text-stone-400 font-mono pt-1">{exp.period}</span>
                <div>
                  <h3 className="font-medium text-stone-900 group-hover:text-accent transition-colors duration-300 mb-1">{exp.role}</h3>
                  <div className="text-stone-500 text-sm mb-3">{exp.company}</div>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-stone-500 italic text-sm">More experiences coming soon.</p>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="font-serif text-lg font-bold text-stone-900 mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
          {SECTION_TITLES.skills}
        </h2>
        <div className="space-y-12">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="font-medium text-stone-900 mb-6 border-b border-stone-100 pb-2 text-sm uppercase tracking-wider">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-6">
                {skillGroup.items.map((item) => (
                  <div key={item.name} className="relative group flex items-center justify-center">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-default">
                      <item.icon className="text-5xl text-stone-400 group-hover:text-stone-800 transition-colors duration-300" />
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-stone-800 text-stone-50 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;