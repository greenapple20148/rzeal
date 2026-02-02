
import React from 'react';

interface HeroProps {
  onHireClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHireClick }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
          Now Hiring: 200+ Open Positions
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
          Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Elite Talent</span><br />
          with Visionary Companies
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          RZeal is more than a staffing agency. We are your strategic growth partner, leveraging AI and deep industry expertise to build world-class teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#jobs"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none"
          >
            Search Jobs
          </a>
          <button 
            onClick={onHireClick}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Hire Talent
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Active Candidates', val: '15k+' },
            { label: 'Client Partners', val: '500+' },
            { label: 'Placements/Year', val: '2.5k' },
            { label: 'Industries', val: '12+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">{stat.val}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
