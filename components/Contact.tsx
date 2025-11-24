import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-grey -skew-x-12 translate-x-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-deep rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* CTA Side */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center relative bg-navy-deep text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-4xl font-extrabold mb-6">Ready to upgrade the WOA?</h2>
            <p className="text-gray-300 text-lg mb-8 font-serif">
              We want to hear from your National Association. Request a meeting with Pernilla, Lumi, or Thomas to discuss your specific regional needs.
            </p>
            <div className="flex items-center gap-2 text-gold font-bold text-xl">
               <span>Your voice matters.</span>
               <ArrowRight />
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-2">Request Sent!</h3>
                <p className="text-gray-500">We will be in touch shortly to schedule.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name (OLY)</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    placeholder="Jane Doe, OLY"
                  />
                </div>
                <div>
                  <label htmlFor="noa" className="block text-sm font-medium text-gray-700 mb-1">National Association</label>
                  <input 
                    type="text" 
                    id="noa" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    placeholder="e.g. French Olympians Association"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    placeholder="jane@example.com"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-crimson hover:bg-crimson-hover text-white font-bold py-4 rounded-lg shadow-lg transform active:scale-95 transition-all"
                >
                  Request Meeting
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;