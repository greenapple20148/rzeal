
import React from 'react';
import { LEGAL_CONTENT } from '../constants';

type PolicyType = 'privacy' | 'terms' | 'cookies';

interface PolicyModalProps {
  type: PolicyType | null;
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = LEGAL_CONTENT[type];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[85vh] rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{content.title}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Last updated: {content.lastUpdated}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                {section.heading}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}

          <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Have questions?</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                If you have any questions regarding our {content.title.toLowerCase()}, please contact our legal team at 
                <a href="mailto:legal@rzeal.com" className="text-indigo-600 dark:text-indigo-400 font-bold ml-1 hover:underline">legal@rzeal.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end gap-4">
          <button 
            onClick={() => window.print()}
            className="px-6 py-2.5 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            <i className="fa-solid fa-print"></i>
            Print
          </button>
          <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-none transition-all"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
