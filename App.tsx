import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
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

const AppContent: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen font-sans text-navy-deep ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <VoteDisciplineBanner variant="top" />
      <Navbar />
      <main id="main-content" role="main">
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

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;