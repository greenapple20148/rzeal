
import React, { useState } from 'react';
import { FEATURED_JOBS } from '../constants';
import JobCard from './JobCard';

const FindWorkSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering', 'Marketing', 'Healthcare', 'Finance', 'Design'];

  const filteredJobs = FEATURED_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                          job.company.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="jobs" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Find Your <span className="text-indigo-600 dark:text-indigo-400">Next Adventure</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Browse through our curated list of high-impact roles at innovative companies.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-3">
              <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
              <input 
                type="text" 
                placeholder="Job title, keywords, or company..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3 bg-transparent text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
              Search Jobs
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all border ${
                selectedCategory === cat 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 dark:shadow-none' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[32px] border border-dashed border-slate-300 dark:border-slate-700">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-search text-3xl text-slate-400"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No jobs found</h4>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindWorkSection;
