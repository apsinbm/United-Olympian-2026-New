import React from "react";
import Hero from "../../components/Hero";
import SixPrioritiesPreview from "../../components/SixPrioritiesPreview";
import DeliveryTeaser from "../../components/DeliveryTeaser";
import FinalCTA from "../../components/FinalCTA";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SixPrioritiesPreview />
      <DeliveryTeaser />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
