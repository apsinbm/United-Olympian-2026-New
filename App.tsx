import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import VoteDisciplineBanner from "./components/VoteDisciplineBanner";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

// Import page components
import HomePage from "./src/pages/HomePage";
import TeamPage from "./src/pages/TeamPage";
import PrioritiesPage from "./src/pages/PrioritiesPage";
import HowWeDeliverPage from "./src/pages/HowWeDeliverPage";
import UpdatesPage from "./src/pages/UpdatesPage";
import ContactPage from "./src/pages/ContactPage";
import PernillaPage from "./src/pages/PernillaPage";
import LumiPage from "./src/pages/LumiPage";
import ThomasPage from "./src/pages/ThomasPage";

const AppContent: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { isRTL } = useLanguage();

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen font-sans text-navy-deep ${isRTL ? "rtl" : "ltr"}`}
      >
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <VoteDisciplineBanner variant="top" />
        <Navbar />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/priorities" element={<PrioritiesPage />} />
            <Route path="/how-well-deliver" element={<HowWeDeliverPage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pernilla" element={<PernillaPage />} />
            <Route path="/lumi" element={<LumiPage />} />
            <Route path="/thomas" element={<ThomasPage />} />
          </Routes>
        </main>
        <VoteDisciplineBanner variant="bottom" />
        <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
        <PrivacyPolicy
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />
      </div>
    </BrowserRouter>
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
