
import React, { useState } from 'react';
import { FEATURED_JOBS } from '../constants';
import JobCard from './JobCard';
<<<<<<< HEAD
=======
import { searchGlobalJobs } from '../services/geminiService';

interface GlobalResult {
  text: string;
  sources: { title: string; uri: string }[];
}
>>>>>>> 7940f96 (initial commit)

const FindWorkSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
<<<<<<< HEAD
=======
  const [isGlobalMode, setIsGlobalMode] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [globalResults, setGlobalResults] = useState<GlobalResult | null>(null);
>>>>>>> 7940f96 (initial commit)

  const categories = ['All', 'Engineering', 'Marketing', 'Healthcare', 'Finance', 'Design'];

  const filteredJobs = FEATURED_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                          job.company.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
=======
  const handleSearch = async () => {
    if (isGlobalMode && search.trim()) {
      setIsSearching(true);
      try {
        const results = await searchGlobalJobs(search);
        setGlobalResults(results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsSearching(false);
      }
    }
  };

>>>>>>> 7940f96 (initial commit)
  return (
    <section id="jobs" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Find Your <span className="text-indigo-600 dark:text-indigo-400">Next Adventure</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
<<<<<<< HEAD
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
=======
            Search our curated list of high-impact roles or let our AI scour the web for you.
          </p>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 gap-3">
                <i className={`fa-solid ${isGlobalMode ? 'fa-wand-magic-sparkles text-indigo-600 animate-pulse' : 'fa-magnifying-glass text-slate-400'}`}></i>
                <input 
                  type="text" 
                  placeholder={isGlobalMode ? "Describe your dream job..." : "Job title, keywords, or company..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full py-3 bg-transparent text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400"
                />
              </div>
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 min-w-[140px]"
              >
                {isSearching ? <i className="fa-solid fa-spinner animate-spin"></i> : (isGlobalMode ? 'AI Search' : 'Search')}
              </button>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-4">
              <button 
                onClick={() => { setIsGlobalMode(false); setGlobalResults(null); }}
                className={`text-sm font-bold flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${!isGlobalMode ? 'bg-indigo-600/10 text-indigo-600' : 'text-slate-400'}`}
              >
                <i className="fa-solid fa-list-ul"></i>
                RZeal Curated
              </button>
              <div className="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>
              <button 
                onClick={() => setIsGlobalMode(true)}
                className={`text-sm font-bold flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isGlobalMode ? 'bg-indigo-600/10 text-indigo-600' : 'text-slate-400'}`}
              >
                <i className="fa-solid fa-earth-americas"></i>
                Global AI Search
              </button>
            </div>
          </div>
        </div>

        {!isGlobalMode && (
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
        )}

        {isGlobalMode ? (
          <div className="max-w-4xl mx-auto">
            {isSearching ? (
              <div className="text-center py-24 animate-pulse">
                <div className="w-20 h-20 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-magnifying-glass-location text-3xl text-indigo-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AI is scouring the global web...</h3>
                <p className="text-slate-500">Checking thousands of live listings to find your match.</p>
              </div>
            ) : globalResults ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <i className="fa-solid fa-sparkles"></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Global Search Results</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                    {globalResults.text}
                  </div>
                  
                  {globalResults.sources.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Verified Sources</h4>
                      <div className="flex flex-wrap gap-3">
                        {globalResults.sources.map((source, i) => (
                          <a 
                            key={i} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all border border-slate-100 dark:border-slate-700"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            {source.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button 
                    onClick={() => { setGlobalResults(null); setSearch(''); }}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Start New Global Search
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-[40px] border-2 border-dashed border-indigo-200 dark:border-indigo-800/50 p-12">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-100 dark:shadow-none">
                  <i className="fa-solid fa-wand-magic-sparkles text-3xl text-indigo-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Unlock the Global Job Market</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                  Enter your skills, desired location, or role description. Our Gemini-powered engine will find live matches from across the internet.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['React Developer in London', 'Head of Sales NYC', 'Remote Data Scientist'].map((suggestion) => (
                    <button 
                      key={suggestion}
                      onClick={() => setSearch(suggestion)}
                      className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-all"
                    >
                      "{suggestion}"
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
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
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No local matches found</h4>
                <p className="text-slate-500 dark:text-slate-400 mb-6">Try adjusting your filters or switch to Global AI Search.</p>
                <button 
                  onClick={() => setIsGlobalMode(true)}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                >
                  Switch to Global Search
                </button>
              </div>
            )}
          </>
>>>>>>> 7940f96 (initial commit)
        )}
      </div>
    </section>
  );
};

export default FindWorkSection;
