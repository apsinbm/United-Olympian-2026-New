import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import HeroSlideshow from "./HeroSlideshow";
import { useTranslation } from "../context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen flex flex-col" id="mission">
      {/* Background Slideshow */}
      <HeroSlideshow />

      <div className="relative z-10 h-[calc(100vh-140px)] flex items-center justify-center text-center px-4 pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/40 text-sm font-bold mb-6 tracking-widest uppercase">
            {t("hero.badge")}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {t("hero.title1")} <br />
            {t("hero.title2") && (
              <span className="text-gold">{t("hero.title2")}</span>
            )}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-4 font-serif max-w-2xl mx-auto">
            {t("hero.subtitle")}
            {t("hero.subtitleHighlight") && (
              <>
                <br />
                <span className="text-white/90">
                  {t("hero.subtitleHighlight")}
                </span>
              </>
            )}
          </p>
          {t("hero.tagline") && (
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-sans max-w-2xl mx-auto">
              {t("hero.tagline")}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/priorities"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-navy-deep rounded-full font-bold text-lg shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all transform hover:-translate-y-1"
            >
              {t("hero.ctaPrimary")}
            </Link>
            <Link
              to="/team"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;
