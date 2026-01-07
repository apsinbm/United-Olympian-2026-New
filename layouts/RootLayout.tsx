import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import VoteDisciplineBanner from "../components/VoteDisciplineBanner";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";

const RootLayout: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { isRTL } = useLanguage();

  return (
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
        <Outlet />
      </main>
      <VoteDisciplineBanner variant="bottom" />
      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
      <PrivacyPolicy
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
};

export default RootLayout;
