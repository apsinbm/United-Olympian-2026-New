import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { CANDIDATES } from "../constants";
import { Candidate, OlympicYear } from "../types";
import { useTranslation, useLanguage } from "../context/LanguageContext";

interface TranslatedCandidateContent {
  name: string;
  role: string;
  sport: string;
  country: string;
  keyAchievement: string;
}

const MedalIcon: React.FC<{ type: "gold" | "silver" | "bronze" }> = ({
  type,
}) => {
  const colors = {
    gold: { fill: "#FFD700", stroke: "#B8860B", ribbon: "#DC143C" },
    silver: { fill: "#C0C0C0", stroke: "#808080", ribbon: "#1E90FF" },
    bronze: { fill: "#CD7F32", stroke: "#8B4513", ribbon: "#228B22" },
  };
  const c = colors[type];
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      className="inline-block -mt-1"
    >
      <path d="M6 0 L4 8 L8 6 L12 8 L10 0 Z" fill={c.ribbon} />
      <circle
        cx="8"
        cy="13"
        r="6"
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth="1"
      />
      <path
        d="M8 9 L9 11.5 L11.5 11.5 L9.5 13 L10.5 15.5 L8 14 L5.5 15.5 L6.5 13 L4.5 11.5 L7 11.5 Z"
        fill={c.stroke}
      />
    </svg>
  );
};

const OlympicYearsDisplay: React.FC<{ years?: OlympicYear[] }> = ({
  years,
}) => {
  if (!years || years.length === 0) return null;
  return (
    <span className="flex flex-wrap items-center justify-center gap-2">
      {years.map((oy, idx) => (
        <span key={oy.year} className="inline-flex items-center gap-0.5">
          <span className="font-semibold">{oy.year}</span>
          {oy.medal && <MedalIcon type={oy.medal} />}
          {idx < years.length - 1 && <span className="ml-1">,</span>}
        </span>
      ))}
    </span>
  );
};

const TeamGrid: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const getTranslatedContent = useCallback(
    (candidate: Candidate): TranslatedCandidateContent => {
      const candidateKey = candidate.id as "pernilla" | "lumi" | "thomas";

      return {
        name: t(`candidates.${candidateKey}.name`) || candidate.name,
        role: t(`candidates.${candidateKey}.role`) || candidate.role,
        sport: t(`candidates.${candidateKey}.sport`) || candidate.sport,
        country: t(`candidates.${candidateKey}.country`) || candidate.country,
        keyAchievement:
          t(`candidates.${candidateKey}.keyAchievement`) ||
          candidate.keyAchievement,
      };
    },
    [t],
  );

  return (
    <section id="team" className="py-24 bg-light-grey">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-crimson font-bold tracking-widest uppercase text-sm">
            {t("team.sectionLabel")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep mt-4 mb-4">
            {t("team.sectionTitle")}{" "}
            <span className="text-gold">{t("team.sectionTitleHighlight")}</span>
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            {t("team.sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CANDIDATES.map((candidate) => {
            const translated = getTranslatedContent(candidate);
            return (
              <div
                key={candidate.id}
                className={`group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  candidate.id === "pernilla"
                    ? "order-1 md:order-2"
                    : candidate.id === "lumi"
                      ? "order-2 md:order-1"
                      : "order-3"
                }`}
              >
                {/* Top: Business Photo */}
                <div className="h-64 md:h-72 w-full overflow-hidden bg-navy-deep relative">
                  <img
                    src={candidate.imageAction}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://picsum.photos/800/600?random=${candidate.id}`;
                    }}
                    alt={`${translated.name} in action`}
                    className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      objectPosition:
                        candidate.id === "thomas"
                          ? "80% 40%"
                          : candidate.id === "lumi"
                            ? "center 10%"
                            : "center 30%",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gold text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {translated.country}
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="flex-grow px-6 pt-4 pb-6 text-center order-2">
                  <h3 className="text-2xl font-bold text-navy-deep leading-tight">
                    {translated.name}
                  </h3>
                  <p className="text-crimson font-bold text-sm uppercase tracking-wide mt-1">
                    {translated.role}
                  </p>

                  <div className="mt-4 text-sm text-gray-600 space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      {candidate.olympicYears ? (
                        <OlympicYearsDisplay years={candidate.olympicYears} />
                      ) : (
                        <>
                          <Trophy
                            size={16}
                            className="text-gold flex-shrink-0"
                          />
                          <span>{translated.sport}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm line-clamp-6 mb-6 font-serif italic">
                    "{translated.keyAchievement}"
                  </p>

                  {/* Link - visible on desktop only */}
                  <Link
                    to={`/${candidate.id}${language !== "EN" ? `?lang=${language.toLowerCase()}` : ""}`}
                    className="hidden md:block w-full py-2 border-2 border-navy-deep text-navy-deep font-bold rounded hover:bg-navy-deep hover:text-white transition-colors mb-4 text-center"
                  >
                    {t("team.viewFullProfile")}
                  </Link>
                </div>

                {/* Bottom: Sport Photo */}
                <div className="h-64 md:h-72 w-full overflow-hidden bg-gray-200 relative order-3">
                  <img
                    src={candidate.imageHeadshot}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://picsum.photos/800/600?random=${candidate.id}2`;
                    }}
                    alt={`${translated.name} sport`}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition:
                        candidate.id === "lumi" ? "center 35%" : "center",
                      transform:
                        candidate.id === "pernilla" ? "scaleX(-1)" : undefined,
                    }}
                  />
                </div>

                {/* Link - visible on mobile only, after sport photo */}
                <div className="md:hidden px-6 pt-4 pb-6 order-4">
                  <Link
                    to={`/${candidate.id}${language !== "EN" ? `?lang=${language.toLowerCase()}` : ""}`}
                    className="w-full py-2 border-2 border-navy-deep text-navy-deep font-bold rounded hover:bg-navy-deep hover:text-white transition-colors block text-center"
                  >
                    {t("team.viewFullProfile")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
