import React from 'react';
import { Medal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-deep border-t border-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gold p-1.5 rounded-full mr-2 text-navy-deep">
                <Medal size={20} strokeWidth={2.5} />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-wider">UNITED OLYMPIANS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We are a group of OLYs dedicated to serving the World Olympians Association with integrity, transparency, and action.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#mission" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#team" className="hover:text-white transition">The Candidates</a></li>
              <li><a href="#action-plan" className="hover:text-white transition">2026 Action Plan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Voting Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 United Olympians Campaign. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for the future of sport.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;