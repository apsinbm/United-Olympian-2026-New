import React from 'react';
import { Trophy, Shield, Users } from 'lucide-react';
import { CORE_MESSAGES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="h-10 w-10" />,
  Shield: <Shield className="h-10 w-10" />,
  Users: <Users className="h-10 w-10" />,
};

const CoreMessages: React.FC = () => {
  return (
    <section className="py-20 bg-navy-deep" id="core-messages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Three Reasons. <span className="text-gold">One Clear Choice.</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            New leadership with the experience to deliver and the vision to go further.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CORE_MESSAGES.map((message, index) => (
            <div
              key={message.id}
              className="relative bg-navy-light rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all group"
            >
              <div className="absolute -top-5 left-8">
                <div className="bg-gold text-navy-deep p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  {iconMap[message.icon]}
                </div>
              </div>

              <div className="pt-8">
                <span className="text-gold text-sm font-bold tracking-wider">{message.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">{message.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{message.description}</p>
              </div>

              <div className="absolute bottom-4 right-4 text-6xl font-extrabold text-white/5">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreMessages;
