import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollaborationBanner from './components/CollaborationBanner';
import VoteDisciplineBanner from './components/VoteDisciplineBanner';
import CoreMessages from './components/CoreMessages';
import AchievementsSection from './components/AchievementsSection';
import TeamGrid from './components/TeamGrid';
import ActionPlan from './components/ActionPlan';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-navy-deep">
      <VoteDisciplineBanner variant="top" />
      <Navbar />
      <main>
        <Hero />
        <CollaborationBanner />
        <TeamGrid />
        <CoreMessages />
        <AchievementsSection />
        <ActionPlan />
        <Contact />
      </main>
      <VoteDisciplineBanner variant="bottom" />
      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;