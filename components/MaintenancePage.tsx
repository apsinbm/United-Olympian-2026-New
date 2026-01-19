import React from "react";
import { Medal } from "lucide-react";

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="bg-gold p-4 rounded-full inline-block mb-8">
          <Medal size={48} strokeWidth={2} className="text-navy-deep" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-sans tracking-wide">
          OLYMPIANS UNITED
        </h1>

        <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />

        <p className="text-xl md:text-2xl text-white/90 mb-4 font-serif">
          Thank you for your support.
        </p>

        <p className="text-lg text-white/70">
          The campaign has concluded.
        </p>
      </div>

      <div className="absolute bottom-8 text-white/40 text-sm">
        &copy; {new Date().getFullYear()} Olympians United
      </div>
    </div>
  );
};

export default MaintenancePage;
