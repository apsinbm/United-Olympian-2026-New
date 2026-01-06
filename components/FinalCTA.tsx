import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-navy-deep">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t("finalCTA.headline")}
        </h2>
        <p className="text-xl text-gray-300 mb-10">{t("finalCTA.subline")}</p>
        <Link
          to="/contact"
          className="inline-flex items-center px-10 py-5 bg-gold text-navy-deep rounded-md font-bold text-lg hover:bg-gold-hover transition-colors shadow-xl"
        >
          {t("finalCTA.ctaButton")}
          <ArrowRight className="ml-3 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default FinalCTA;
