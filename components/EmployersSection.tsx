
import React, { useState } from 'react';
import { HIRING_PROCESS } from '../constants';

type SolutionTab = 'direct' | 'contract' | 'executive';

interface SolutionContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stat: string;
  statLabel: string;
  image: string;
}

const SOLUTIONS: Record<SolutionTab, SolutionContent> = {
  direct: {
    title: "Permanent Placement",
    subtitle: "Built for Longevity",
    description: "Our AI-driven matching engine doesn't just look at skills; it analyzes cultural DNA to ensure your next hire is a pillar of your organization for years to come.",
    features: ["Deep Culture Analysis", "Retention Guarantees", "Market Benchmarking", "Brand Representation"],
    stat: "98%",
    statLabel: "Retention Rate",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },
  contract: {
    title: "Agile Staffing",
    subtitle: "Speed Meets Expertise",
    description: "Scale your engineering or marketing teams instantly with vetted contractors. We handle payroll, compliance, and onboarding so you can focus on the product.",
    features: ["48-Hour Matching", "Global Compliance", "Seamless Offboarding", "Technical Vetting"],
    stat: "12 Days",
    statLabel: "Avg. Fill Time",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
  },
  executive: {
    title: "Leadership Search",
    subtitle: "The Future of Your C-Suite",
    description: "Discreet, high-impact headhunting for senior leadership. We leverage a global network of passive talent to find the visionaries your company needs.",
    features: ["Full Market Mapping", "Competency Interviews", "Onboarding Support", "Total Discretion"],
    stat: "500+",
    statLabel: "CXO Placements",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  }
};

const EmployersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SolutionTab>('direct');

  const content = SOLUTIONS[activeTab];

  return (
    <section id="employers" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">For Employers</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Our Talent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tailored hiring strategies designed to meet the demands of fast-growing enterprises.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            {(['direct', 'contract', 'executive'] as SolutionTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {SOLUTIONS[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="order-2 lg:order-1">
            <h3 className="text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">
              {content.subtitle}
            </h3>
            <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {content.title}
            </h4>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {content.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {content.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check text-indigo-600 dark:text-indigo-400 text-[10px]"></i>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-100 dark:shadow-none transition-all">
                Request a Consultation
              </button>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">{content.stat}</span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{content.statLabel}</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[40px] blur-2xl"></div>
            <img 
              src={content.image} 
              alt={content.title} 
              className="relative rounded-[32px] w-full h-[400px] object-cover border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-700"
            />
          </div>
        </div>

        {/* Hiring Process Component */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-[40px] p-12 border border-slate-100 dark:border-slate-700">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Hiring Process</h3>
            <p className="text-slate-600 dark:text-slate-400">Simple, transparent, and results-driven.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIRING_PROCESS.map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-slate-200 dark:text-slate-700 absolute -top-4 -left-2 opacity-50 transition-colors group-hover:text-indigo-200 dark:group-hover:text-indigo-900/50">{p.step}</div>
                <div className="relative pt-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{p.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployersSection;
