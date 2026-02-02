
import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all hover:shadow-xl group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
          <i className="fa-solid fa-briefcase text-indigo-600 dark:text-indigo-400 text-xl"></i>
        </div>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{job.postedDate}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">{job.company} • {job.location}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">{job.type}</span>
        <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-xs font-bold rounded-full">{job.category}</span>
        <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">{job.salary}</span>
      </div>

      <button className="w-full py-3 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl font-bold group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-all">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
