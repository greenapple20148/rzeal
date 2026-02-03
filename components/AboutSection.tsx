
import React from 'react';
import { COMPANY_VALUES, LEADERSHIP } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision Module */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110">
              <i className="fa-solid fa-rocket text-9xl"></i>
            </div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 opacity-80">Our Mission</h3>
            <p className="text-2xl font-bold leading-relaxed relative z-10">
              To empower the world's most innovative companies by connecting them with elite talent through radical transparency and human-centric intelligence.
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-transform group-hover:scale-110">
              <i className="fa-solid fa-earth-americas text-9xl text-indigo-600 dark:text-white"></i>
            </div>
            <h3 className="text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em] mb-4">Our Vision</h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white leading-relaxed relative z-10">
              To become the global standard for the future of work, where every professional find their purpose and every organization achieves its peak potential.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
              alt="RZeal Culture" 
              className="relative rounded-[40px] shadow-2xl border-4 border-white dark:border-slate-800 w-full object-cover aspect-video lg:aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Inc. 5000</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Fastest Growing Agency</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
              A New Era of <span className="text-indigo-600 dark:text-indigo-400">Human Capital.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              We started RZeal with a simple belief: the right hire can change the trajectory of an entire company. 
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              In a world obsessed with algorithms, we focus on the human element. We use technology to augment our expertise, not replace it, ensuring that every connection we make is meaningful and lasting.
            </p>
            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">2018</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">50+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Cities</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">100%</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Dedicated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Leadership Team</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Visionary minds dedicated to building the future workforce.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {LEADERSHIP && LEADERSHIP.map((leader, i) => (
              <div key={i} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-indigo-600 rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-48 h-48 rounded-full relative grayscale group-hover:grayscale-0 transition-all border-4 border-white dark:border-slate-800 shadow-xl mx-auto object-cover"
                  />
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-indigo-600 shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{leader.name}</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Values that Define Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES && COMPANY_VALUES.map((value, i) => (
              <div key={i} className="p-8 bg-slate-50 dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${value.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
