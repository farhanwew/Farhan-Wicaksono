import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import { PORTFOLIO_OWNER, NAVIGATION } from './constants';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
      <nav className="fixed top-0 left-0 w-full bg-paper/90 backdrop-blur-sm z-40 border-b border-stone-200/50 py-4 sm:py-6 transition-all">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="font-serif text-lg font-bold tracking-tight text-stone-900">
            {PORTFOLIO_OWNER.name}
          </Link>
          <ul className="flex space-x-6 text-sm font-medium text-stone-500">
            {NAVIGATION.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`hover:text-accent transition-colors duration-300 ${isActive(item.path) ? 'text-stone-900 underline decoration-1 underline-offset-4' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
}

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen font-sans text-stone-800 selection:bg-stone-200 selection:text-stone-900">
        <Navigation />

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>

          {/* Footer */}
          <footer className="pt-12 border-t border-stone-200 mt-32">
            <div className="flex justify-between items-center text-sm text-stone-400">
              <p>&copy; {new Date().getFullYear()} {PORTFOLIO_OWNER.name}</p>
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
};

export default App;