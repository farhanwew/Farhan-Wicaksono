import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      <div className="flex flex-col-reverse sm:flex-row items-start gap-8 mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl leading-tight text-stone-900 flex-1 max-w-xl tracking-tight">
          {PORTFOLIO_OWNER.bio}
        </h1>
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 bg-stone-200 rounded-full overflow-hidden border border-stone-300">
           <img src={PORTFOLIO_OWNER.avatarUrl} alt={PORTFOLIO_OWNER.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-4">
         <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-stone-500 hover:text-accent transition-colors duration-300" aria-label="Email">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
         <a href={PORTFOLIO_OWNER.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href={PORTFOLIO_OWNER.github} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-accent transition-colors duration-300" aria-label="GitHub">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        {(PORTFOLIO_OWNER as any).kaggle && (
          <a href={(PORTFOLIO_OWNER as any).kaggle} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-accent transition-colors duration-300" aria-label="Kaggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
              <path d="M100.402 127.243c-.126.501-.627.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258c0 1.255-.628 1.881-1.88 1.881h-12.97c-1.254 0-1.88-.626-1.88-1.88V1.876c0-1.25.625-1.877 1.88-1.877h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457c.878-.875 1.755-1.315 2.631-1.315h17.295c.75 0 1.25.315 1.504.937.252.753.19 1.316-.19 1.693L63.561 80.062l36.465 45.3c.499.502.625 1.128.38 1.881"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Home;