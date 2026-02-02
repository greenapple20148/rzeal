
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAssistant from './components/AIAssistant';
import AboutSection from './components/AboutSection';
import FindWorkSection from './components/FindWorkSection';
import EmployersSection from './components/EmployersSection';
import ContactSection from './components/ContactSection';
import PostJobModal from './components/PostJobModal';
import PolicyModal from './components/PolicyModal';
import { TESTIMONIALS } from './constants';

type PolicyType = 'privacy' | 'terms' | 'cookies';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onPostJobClick={() => setIsPostJobOpen(true)}
      />
      
      <main>
        <Hero onHireClick={() => setIsPostJobOpen(true)} />

        {/* Sections are ordered for optimal user journey */}
        <FindWorkSection />
        <EmployersSection />
        <AboutSection />
        <ContactSection />

        {/* Testimonials */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Built on Trust</h2>
              <p className="text-slate-600 dark:text-slate-400">Join the hundreds of companies and thousands of professionals already thriving with RZeal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS && TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-slate-100 dark:border-slate-700 transition-colors shadow-sm hover:shadow-xl transition-all">
                  <div className="flex gap-4 items-center mb-6">
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-indigo-100 dark:border-slate-600 shadow-md object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.name}</h4>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-xl text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 dark:bg-indigo-950 rounded-[50px] p-16 text-center relative overflow-hidden transition-colors shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative">Your Future Starts Here.</h2>
              <p className="text-slate-400 dark:text-indigo-200 text-lg mb-12 max-w-xl mx-auto relative">
                Whether you're looking to hire elite talent or land your next dream role, RZeal is your partner in excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative">
                <a href="#jobs" className="px-12 py-5 bg-white text-slate-900 rounded-2xl flex items-center justify-center font-black text-xl hover:scale-105 transition-all shadow-lg">
                  Apply Today
                </a>
                <button 
                  onClick={() => setIsPostJobOpen(true)}
                  className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl border border-indigo-500 hover:bg-indigo-700 transition-all shadow-lg"
                >
                  Hire Elite Talent
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">R</div>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">RZEAL<span className="text-indigo-600 dark:text-indigo-400">STAFFING</span></span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-sm mb-8 text-lg leading-relaxed">
                Building world-class teams through the fusion of AI-driven intelligence and human-centric expertise.
              </p>
              <div className="flex gap-4">
                {[ "linkedin-in", "twitter", "instagram", "facebook" ].map(icon => (
                  <a key={icon} href="#" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-lg transition-all">
                    <i className={`fa-brands fa-${icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-8 text-lg">Find Work</h5>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li><a href="#jobs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Job Search</a></li>
                <li><a href="#jobs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Talent Network</a></li>
                <li><a href="#jobs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Candidate Login</a></li>
                <li><a href="#jobs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Resume Help</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-8 text-lg">For Clients</h5>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li><button onClick={() => setIsPostJobOpen(true)} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Employer Portal</button></li>
                <li><button onClick={() => setIsPostJobOpen(true)} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Post a Job</button></li>
                <li><a href="#employers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Market Insights</a></li>
                <li><a href="#employers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Managed Services</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-8 text-lg">Company</h5>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Our Story</a></li>
                <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Us</a></li>
                <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Newsroom</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p>© 2024 RZeal Staffing Solutions. Empowering Global Workforce.</p>
            <div className="flex gap-10">
              <button onClick={() => setActivePolicy('privacy')} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy Policy</button>
              <button onClick={() => setActivePolicy('terms')} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms of Service</button>
              <button onClick={() => setActivePolicy('cookies')} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>

      <AIAssistant />
      <PostJobModal isOpen={isPostJobOpen} onClose={() => setIsPostJobOpen(false)} />
      <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />
    </div>
  );
};

export default App;
