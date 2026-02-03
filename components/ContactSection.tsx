
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Conversation.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Whether you're looking to scale your team or find your next breakthrough role, our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-headset text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Talent Support</h4>
              <p className="text-slate-500 dark:text-slate-400 mb-4">Dedicated assistance for our candidates and contractors.</p>
              <a href="mailto:support@rzeal.com" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline inline-flex items-center gap-2">
                support@rzeal.com
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-building-columns text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Partnerships</h4>
              <p className="text-slate-500 dark:text-slate-400 mb-4">Explore how RZeal can transform your organization's hiring.</p>
              <a href="mailto:partners@rzeal.com" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline inline-flex items-center gap-2">
                partners@rzeal.com
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>

            <div className="p-8 bg-slate-900 rounded-[32px] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <i className="fa-solid fa-map-pin text-6xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-4 relative z-10">HQ</h4>
              <p className="text-slate-400 mb-6 relative z-10">
                43154 Cleland Dr<br />
                Ashburn, VA 20148
              </p>
              <div className="flex items-center gap-3 text-indigo-400 font-semibold relative z-10">
                <i className="fa-solid fa-clock"></i>
                <span>Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles' })} PST</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden">
              {status === 'success' && (
                <div className="absolute inset-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-12 animate-in fade-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                    <i className="fa-solid fa-check text-5xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">Thank you for reaching out. An expert from our team will be in touch shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                  <select 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Hiring Talent">Hiring Talent</option>
                    <option value="Job Search Support">Job Search Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us more about how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-4 disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <i className="fa-solid fa-spinner animate-spin"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-slate-400 mt-6">
                    By submitting this form, you agree to our <span className="text-indigo-600 font-bold cursor-pointer">Privacy Policy</span>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
