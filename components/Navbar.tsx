
import React, { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onPostJobClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onPostJobClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 dark:shadow-none">R</div>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">RZEAL<span className="text-indigo-600 dark:text-indigo-400">STAFFING</span></span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#jobs" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Find Work</a>
            <a href="#employers" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">For Employers</a>
            <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">About</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Contact</a>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <i className="fa-solid fa-sun text-lg"></i> : <i className="fa-solid fa-moon text-lg"></i>}
            </button>

            <button 
              onClick={onPostJobClick}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg dark:shadow-none"
            >
              Post a Job
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {isDarkMode ? <i className="fa-solid fa-sun text-lg"></i> : <i className="fa-solid fa-moon text-lg"></i>}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-400 p-2">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#jobs" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>Find Work</a>
          <a href="#employers" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>For Employers</a>
          <a href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
          <button 
            onClick={() => { onPostJobClick(); setIsOpen(false); }}
            className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold"
          >
            Post a Job
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
