import { Candidate, ActionPoint, Language } from './types';

export const HERO_IMAGES = [
  '/images/hero/unnamed-5.jpg',
  '/images/hero/unnamed-6.jpg',
  '/images/hero/unnamed-7.jpg',
  '/images/hero/unnamed-8.jpg',
  '/images/hero/unnamed-9.jpg',
  '/images/hero/unnamed-10.jpg',
  '/images/hero/unnamed-11.jpg',
  '/images/hero/unnamed-12.jpg',
  '/images/hero/unnamed-13.jpg',
  '/images/hero/unnamed-14.jpg',
  '/images/hero/unnamed-15.jpg',
  '/images/hero/unnamed-16.jpg',
  '/images/hero/unnamed-17.jpg',
];

export const LANGUAGES: Language[] = [
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'Français' },
  { code: 'ES', label: 'Español' },
  { code: 'RU', label: 'Русский' },
  { code: 'AR', label: 'العربية' },
  { code: 'CN', label: '中文' },
];

export const CANDIDATES: Candidate[] = [
  {
    id: 'pernilla',
    name: 'Pernilla Wiberg, OLY',
    role: 'For President',
    sport: 'Alpine Skiing',
    country: 'Sweden',
    location: 'Monte Carlo, Monaco',
    imageAction: 'Pernilla Business.jpg',
    imageHeadshot: 'Pernilla Sport.webp',
    achievements: [
      'Triple Olympic Medalist (Gold 1992, Gold 1994, Silver 1998)',
      '4x World Champion',
      '24 Individual World Cup Victories',
      'FIS World Cup Overall Champion 1997',
      'Winner of World Cup races in all 5 disciplines',
      'Renowned TV Sports Broadcaster'
    ],
    governance: [
      'IOC Member (2002–2010): Athletes\', Ethics, Nominations, Coordination Commissions',
      'Chaired IOC Evaluation Commission for 1st Winter Youth Olympic Games (2008)',
      'WOA IOC Athletes\' Commission Representative (2020–2025)',
      'WOA Vice President (Current)',
      'Champions for Peace Member'
    ],
    keyAchievement: 'Olympic Champion with 20+ years of sports diplomacy. Led constitutional reforms enabling 50/50 gender representation.',
    business: 'Entrepreneur and Owner of the Pernilla Wiberg Hotel (Idre Fjäll, Sweden). Founder of Pernilla Wiberg Sportpromotion.',
    bioFull: 'Pernilla Wiberg is a legend on the slopes and a powerhouse in the boardroom. As a Triple Olympic Medalist with 24 individual World Cup victories, 61 World Cup podiums, and the 1997 Overall World Cup title, she is one of the few skiers in history to win races in all five alpine disciplines—her 1991 World Championship gold was the first for a Scandinavian woman in 33 years.\n\nBeyond competition, she became a renowned TV sports commentator for Sveriges Television (SVT). In governance, she served as an IOC Member for eight years across multiple commissions, chaired the IOC Evaluation Commission for the first Winter Youth Olympic Games, and represented the WOA on the IOC Athletes\' Commission from 2020–2025.\n\nAs current WOA Vice President, she was instrumental in the historic 50/50 gender representation reform. A Champions for Peace member and successful entrepreneur, she owns and operates the Pernilla Wiberg Hotel in Sweden. Based in Monaco since 1995, she is married with two children. Fluent in Swedish, English, French, German, and Norwegian.',
    socialLinks: {
      linkedIn: 'https://www.linkedin.com/in/pernilla-wiberg-bjerke-oly-0609271ba/',
      twitter: 'https://x.com/pernillawiberg',
      facebook: 'https://www.facebook.com/pernillawibergOLY/',
      instagram: 'https://www.instagram.com/pernillawiberg/',
      website: 'https://pernilla-wiberg.com'
    }
  },
  {
    id: 'lumi',
    name: 'Olumide Oyedeji, OLY',
    role: 'For Secretary General',
    sport: 'Basketball',
    country: 'Nigeria',
    location: 'London, England',
    imageAction: 'Lumi Business.jpg',
    imageHeadshot: 'Lumi Sport.jpg',
    achievements: [
      'First African player drafted outside America to the NBA (2000)',
      'NBA Player (Seattle SuperSonics, Orlando Magic)',
      'Led Nigeria to first-ever AfroBasket Gold (2015) & 2012 Olympics',
      'First African to compete in ALL major tournaments: Olympics, World Cup, NBA, EuroLeague, Commonwealth Games, All Africa Games, Asia Championships',
      'Played professionally in 10 countries across 4 continents'
    ],
    governance: [
      'Vice President: Nigeria Olympic Committee (NOC)',
      'President: Nigeria Olympians Association (NOA)',
      'WADA Athlete Council Member (2023–Present)',
      'Member: FIBA Players\' Commission (2014–2019)',
      'Board Member: Nigeria Basketball Federation',
      'Laureus Sport for Good Ambassador'
    ],
    keyAchievement: 'NBA Star and successful sports administrator. Founded the Youth Foundation that has mentored 40,000+ young people.',
    philosophy: 'Servant Leadership and bridging the gap for developing nations.',
    education: [
      'Master\'s Degree in Public Relations & Image Management (Florida Metropolitan University)',
      'Loyola College, Ibadan'
    ],
    bioFull: 'Olumide "Lumi" Oyedeji brings a global perspective and a heart for service. The first African player ever drafted outside America to the NBA (42nd pick, 2000), Lumi made history as the inaugural African to compete in ALL major basketball tournaments worldwide—Olympics, World Cup, NBA, EuroLeague, Commonwealth Games, All Africa Games, and Asia Championships.\n\nA Nigerian League MVP, 3× CBA rebounding leader, and 2× BBL Slam Dunk Contest champion, he led Nigeria to their first-ever AfroBasket trophy in 2015 and represented them at the 2012 Olympics and 1999 World Cup.\n\nNow based in London, he serves as Vice President of the Nigeria Olympic Committee, President of the Nigeria Olympians Association, and Board Member of the Nigeria Basketball Federation. A WADA Athlete Council member since 2023, Laureus Ambassador, and holder of a Master\'s degree in Public Relations, his "Servant Leadership" philosophy has mentored over 40,000 young people through his foundation and basketball camps since 2002. He is dedicated to bridging the gap for developing nations within the Olympic movement.',
    socialLinks: {
      linkedIn: 'https://www.linkedin.com/in/olumide-oyedeji-oly-23508b1b3/',
      twitter: 'https://x.com/olumideoyedeji1',
      facebook: 'https://www.facebook.com/olumideoyedejiyouthfoundation/',
      instagram: 'https://www.instagram.com/olumideoyedeji1/'
    }
  },
  {
    id: 'thomas',
    name: 'Thomas Tang, OLY',
    role: 'For Treasurer',
    sport: 'Alpine Skiing',
    country: 'Chinese Taipei',
    location: 'Portland, Oregon, USA',
    imageAction: 'Thomas Business.jpg',
    imageHeadshot: 'Thomas Sport.jpg',
    achievements: [
      'Two-time Winter Olympian (Calgary 1988, Albertville 1992)',
      'World Championship & World Cup Competitor',
      'Chef de Mission for Guinea-Bissau (2026 Milano-Cortina Olympics)',
      'Secretary General, Guinea-Bissau Winter Sports Federation',
      'Olympic Family: Daughter (Figure Skating Worlds), Son (2026 Olympic qualifier)'
    ],
    governance: [
      'World Olympian Association Member (2018–Present)',
      'Board Member: Taiwanese Chamber of Commerce of North America',
      'SMPTE Member (1996–Present)'
    ],
    keyAchievement: 'Business Wizard and Olympian. Built a global tech company from scratch that powered the Sochi 2014 and Paris 2024 Olympic broadcasts.',
    business: 'Founder & President: Apantac LLC (Global leader in broadcast signal processing). President: Eubank Investment Group.',
    trackRecord: 'Founded Apantac in his basement in 2008. Won prestigious PICK HIT AWARD at NAB 2009. By 2014: 200+ products distributed in 40+ countries. Technology powers Olympic Games broadcasts, Soccer World Cups, and national broadcasters worldwide. Prior experience: VP at Avitech (grew business 8x), Director of Marketing at Grass Valley ($50M P&L responsibility), worked on F-14/F-16 flight simulators and NASA Space Shuttle training systems.',
    education: [
      'Harvard Business School - Executive Training (Marketing & Business Strategy)',
      'University of London - Post Graduate Certificate (Sports Marketing, World Academy of Sport)'
    ],
    bioFull: 'Thomas Tang combines Olympic grit with Silicon Valley innovation. A two-time Winter Olympian for Chinese Taipei who competed at World Championships and World Cups, he now serves as Chef de Mission for Guinea-Bissau at the 2026 Milano-Cortina Olympics and Secretary General of their Winter Sports Federation. His Olympic legacy is a family affair—his daughter competed at the Figure Skating World Championships, and his son has qualified for the 2026 Olympics in Alpine Skiing.\n\nThomas founded Apantac in his basement during the 2008 financial crisis and built it into a global broadcast technology leader—winning the prestigious NAB PICK HIT AWARD in 2009 and now shipping 200+ products to 40+ countries. His technology has powered Olympic broadcasts, Soccer World Cups, and national broadcasters worldwide.\n\nWith Harvard Business School executive training, prior leadership at Grass Valley ($50M P&L) and Avitech (8x growth), and early career engineering on F-14/F-16 simulators and NASA Space Shuttle training systems, Thomas brings unmatched financial acumen and operational excellence to the WOA. Fluent in English, Mandarin, Cantonese, and Taiwanese.',
    socialLinks: {
      linkedIn: 'https://www.linkedin.com/in/thomas-tang-oly-5202b84/',
      facebook: 'https://www.facebook.com/thomas.tang.18',
      website: 'https://www.apantac.com'
    }
  }
];

export const ACHIEVEMENTS = [
  { title: 'OLY Designation', description: 'Created the OLY post-nominal letters for all Olympians worldwide' },
  { title: 'World Olympians Forum', description: 'Established the global gathering of Olympians' },
  { title: 'OLY House Rio', description: 'Award-winning OLY House at Rio 2016' },
  { title: 'OLY House Paris', description: 'Best OLY House ever at Paris 2024' },
  { title: 'Development Officers', description: 'Established regional development officers to support NOAs' },
  { title: 'Development Grants', description: 'Created development grants for growing NOAs' },
  { title: 'Service to Society Grants', description: 'Funding for Olympians making community impact' },
  { title: 'Service to Olympians Grants', description: 'Direct support for Olympians in need' },
  { title: 'IOC Funding Increase', description: 'Increased funding from IOC by 400%' },
  { title: 'University Scholarships', description: 'Education opportunities for Olympians worldwide' },
  { title: 'Olympians Ceremonies', description: 'Established recognition ceremonies for new Olympians' },
  { title: 'Health Research', description: 'First-ever global musculoskeletal health survey of Olympians' },
  { title: 'Olympians for Life', description: 'Developed the Olympians for Life program' },
  { title: 'NOA Guide & Toolkits', description: 'Created comprehensive NOA Guide and Toolkits' },
  { title: 'Olympian.org Website', description: 'Rebuilt the Olympian.org website' },
  { title: 'Partnership Network', description: 'Built relationships with World Academy of Sport, SkillsBuild, and more' },
  { title: 'New IOC Agreement', description: 'Secured long-term funding and stability for all WOA programs' },
  { title: 'Financial Independence', description: 'Built sustainable funding model independent from IOC control' },
];

export const CORE_MESSAGES = [
  {
    id: 'built',
    title: 'We Built It',
    subtitle: 'The Modern WOA',
    description: 'We delivered every major program Olympians rely on today. Proven results, not promises.',
    icon: 'Trophy'
  },
  {
    id: 'secure',
    title: 'We Secure It',
    subtitle: 'Independent & Trusted',
    description: 'We protect WOA independence while maintaining the strong working relationship that brings funding and influence.',
    icon: 'Shield'
  },
  {
    id: 'lead',
    title: 'We Lead It',
    subtitle: 'The Right Team',
    description: 'An Olympic Champion, an NBA Star, and a Business Wizard. Experienced leaders ready to continue the work.',
    icon: 'Users'
  }
];

export const JOEL_ENDORSEMENT = {
  quote: "For 14 years, we built the WOA from nothing into the organization that serves Olympians today. Pernilla, Lumi, and Thomas have been integral to many of these achievements. They have my full confidence to continue this work and take it to even greater heights. This is the team I trust to protect what we've built.",
  author: "Joël Bouzou",
  title: "WOA President (2010-2026)"
};

export const ACTION_PLAN: ActionPoint[] = [
  {
    id: 'relations',
    title: 'Independent but Collaborative IOC Relations',
    description: 'Maintaining our independence as an association while working closely and constructively with the IOC. We are the real bridge.'
  },
  {
    id: 'rights',
    title: 'Health, Pensions & Image Sovereignty',
    description: 'We will aggressively champion a global safety net, lobbying for health insurance coverage and pension schemes for Olympians. Furthermore, we demand the absolute protection of Image Rights post-Games. Once the competition ends, your likeness belongs to you, and we will secure the frameworks to ensure you control your own legacy.'
  },
  {
    id: 'reform',
    title: 'Constitutional Reform & Gender Equity',
    description: 'We commit to actively protecting the historic 50/50 gender representation reform initiated by Pernilla Wiberg.'
  },
  {
    id: 'transparency',
    title: 'Financial Transparency',
    description: 'We will publish clear, downloadable financial reports accessible to every NOA president. Every dollar spent will be accounted for, with a focus on increasing the percentage of funds that go directly to helping Olympians.'
  },
  {
    id: 'dignity',
    title: "The 'Transition Dignity' Fund",
    description: 'Establishing a dedicated grant specifically for NOAs to run mental health and career transition workshops locally. Resources must be flexible to meet local cultural and economic needs.'
  },
  {
    id: 'empowerment',
    title: 'Regional NOA Empowerment',
    description: 'Shifting resources from centralized administration to regional hubs. Empowering local NOAs with the autonomy and funding to execute their own strategic plans without excessive bureaucratic oversight.'
  },
  {
    id: 'digital',
    title: 'Digital Community Platform',
    description: "Building a real, usable digital network for Olympians to connect for mentorship and business opportunities. A functional tool for career networking, leveraging Thomas Tang's tech expertise."
  },
  {
    id: 'legacy',
    title: 'Sustainable Legacy Projects',
    description: 'Legacy Grants for Olympians leading youth sports, education, and environmental initiatives in their communities.'
  }
];