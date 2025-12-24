import React from 'react';
import { WRITINGS, SECTION_TITLES } from '../constants';

const Blogs: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="font-serif text-lg font-bold text-stone-900 mb-8 flex items-center gap-2">
         <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
        {SECTION_TITLES.blogs}
      </h2>
      <div className="space-y-6">
        {WRITINGS.map((post) => (
          <a 
            key={post.id} 
            href={post.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group"
          >
            <div className="flex flex-row flex-wrap justify-between items-baseline gap-2 border-b border-stone-200 pb-4 group-hover:border-stone-400 transition-colors">
              <h3 className="font-serif text-lg text-stone-800 group-hover:text-accent transition-colors duration-300 mb-0">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-stone-400 font-mono whitespace-nowrap">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            {post.description && (
              <p className="mt-3 text-stone-600 text-sm leading-relaxed max-w-2xl">
                {post.description}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;