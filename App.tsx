import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollaborationBanner from './components/CollaborationBanner';
import VoteDisciplineBanner from './components/VoteDisciplineBanner';
import CoreMessages from './components/CoreMessages';
import AchievementsSection from './components/AchievementsSection';
import TeamGrid from './components/TeamGrid';
import EndorsementBanner from './components/EndorsementBanner';
import ActionPlan from './components/ActionPlan';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
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
        <EndorsementBanner />
        <Contact />
      </main>
      <VoteDisciplineBanner variant="bottom" />
      <Footer />
    </div>
  );
};

export default App;