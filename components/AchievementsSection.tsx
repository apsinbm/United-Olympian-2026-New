import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-crimson font-bold tracking-widest uppercase text-sm">14 Years of Delivery</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep mt-4">
            What We've <span className="text-gold">Already Built</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            The other candidates promise what we already delivered. Here's our track record.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gold/50 hover:shadow-lg transition-all"
            >
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-navy-deep text-lg">{achievement.title}</h3>
                <p className="text-gray-600 mt-1">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy-deep to-navy-light rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl text-white font-serif italic max-w-3xl mx-auto">
            "14 years ago, the WOA had nothing. Our team built everything Olympians rely on today.
            <span className="text-gold font-bold not-italic block mt-4">
              Why start over? Continue what works.
            </span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
