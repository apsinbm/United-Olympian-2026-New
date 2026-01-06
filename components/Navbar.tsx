import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Medal, Menu, X, Globe } from "lucide-react";
import { LANGUAGES } from "../constants";
import { useLanguage, useTranslation } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 bg-navy-deep text-white shadow-lg border-b border-navy-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="bg-gold p-2 rounded-full mr-3 text-navy-deep">
              <Medal size={24} strokeWidth={2.5} />
            </div>
            <span className="font-sans font-extrabold text-xl tracking-wider">
              {t("nav.brand")}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/team"
              className="hover:text-gold transition-colors font-medium"
            >
              {t("nav.team")}
            </Link>
            <Link
              to="/priorities"
              className="hover:text-gold transition-colors font-medium"
            >
              {t("nav.priorities")}
            </Link>
            <Link
              to="/how-well-deliver"
              className="hover:text-gold transition-colors font-medium"
            >
              {t("nav.delivery")}
            </Link>
            <Link
              to="/updates"
              className="hover:text-gold transition-colors font-medium"
            >
              {t("nav.updates")}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1 text-sm bg-navy-light px-3 py-1 rounded hover:bg-navy-light/80 transition"
              >
                <Globe size={14} />
                <span>{language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 text-navy-deep ring-1 ring-black ring-opacity-5">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(
                          lang.code as
                            | "EN"
                            | "FR"
                            | "ES"
                            | "PT"
                            | "RU"
                            | "AR"
                            | "CN",
                        );
                        setLangOpen(false);
                      }}
                      className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-hover text-navy-deep px-5 py-2 rounded-md font-bold transition-all transform hover:scale-105 shadow-md"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-deep border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium hover:text-gold"
            >
              {t("nav.team")}
            </Link>
            <Link
              to="/priorities"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium hover:text-gold"
            >
              {t("nav.priorities")}
            </Link>
            <Link
              to="/how-well-deliver"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium hover:text-gold"
            >
              {t("nav.delivery")}
            </Link>
            <Link
              to="/updates"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium hover:text-gold"
            >
              {t("nav.updates")}
            </Link>
            <div className="flex flex-wrap justify-center gap-2 py-2">
              {LANGUAGES.map((l) => (
                <span
                  key={l.code}
                  className={`text-xs border px-2 py-1 rounded cursor-pointer transition-colors ${language === l.code ? "bg-gold text-navy-deep border-gold" : "text-gray-400 border-gray-600 hover:border-gold hover:text-gold"}`}
                  onClick={() => {
                    setLanguage(
                      l.code as "EN" | "FR" | "ES" | "PT" | "RU" | "AR" | "CN",
                    );
                    setIsOpen(false);
                  }}
                >
                  {l.code}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-gold text-navy-deep py-3 rounded-md font-bold text-center block"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
