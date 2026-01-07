import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import CollaborationBanner from "../components/CollaborationBanner";
import TeamGrid from "../components/TeamGrid";
import CoreMessages from "../components/CoreMessages";
import AchievementsSection from "../components/AchievementsSection";
import ActionPlan from "../components/ActionPlan";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (location.hash) {
      const id = location.hash.substring(1); // Remove '#'
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <CollaborationBanner />
      <TeamGrid />
      <CoreMessages />
      <AchievementsSection />
      <ActionPlan />
      <Contact />
    </>
  );
};

export default HomePage;
