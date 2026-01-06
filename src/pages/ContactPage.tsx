import React from "react";
import Contact from "../../components/Contact";
import { useLanguage } from "../../context/LanguageContext";

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Contact />
    </div>
  );
};

export default ContactPage;
