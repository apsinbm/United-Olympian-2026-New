import { Candidate, ActionPoint, Language } from './types';

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
    imageAction: 'Pernilla Business.jpg',
    imageHeadshot: 'Pernilla Sport.webp',
    achievements: [
      'Triple Olympic Medalist (Gold 1992, Gold 1994, Silver 1998)',
      '4x World Champion',
      'Winner of World Cup races in all 5 disciplines'
    ],
    governance: [
      'IOC Member (2002–2010): Ethics, Nominations, Coordination Commissions',
      'WOA Vice President (Current)'
    ],
    keyAchievement: 'Overseeing constitutional reforms enabling 50/50 gender representation and negotiating the MOU with the IOC.',
    business: 'Owner/Operator of the Pernilla Wiberg Hotel (Idre Fjäll, Sweden).',
    bioFull: 'Pernilla Wiberg is a legend on the slopes and a powerhouse in the boardroom. As a Triple Olympic Medalist and one of the few skiers to win World Cup races in all five disciplines, she knows what it takes to dominate. In governance, she has served as an IOC Member for eight years and is the current WOA Vice President. She was instrumental in the historic 50/50 gender representation reform. Outside of sport, she is a successful hotelier, owning and operating the Pernilla Wiberg Hotel in Sweden.'
  },
  {
    id: 'lumi',
    name: 'Olumide "Lumi" Oyedeji, OLY',
    role: 'For Secretary General',
    sport: 'Basketball',
    country: 'Nigeria',
    imageAction: 'Lumi Business.jpg',
    imageHeadshot: 'Lumi Sport.jpg',
    achievements: [
      'NBA Player (Seattle SuperSonics, Orlando Magic)',
      'Captained Nigeria ("D\'Tigers") to 2015 AfroBasket Gold & 2012 Olympics',
      'Played professionally on 4 continents'
    ],
    governance: [
      'President: Nigeria Olympians Association (NOA)',
      'Member: FIBA Players\' Commission (2014–2019)'
    ],
    keyAchievement: 'Founder of the Olumide Oyedeji Youth Foundation (40,000+ youths mentored).',
    philosophy: 'Servant Leadership and bridging the gap for developing nations.',
    bioFull: 'Olumide "Lumi" Oyedeji brings a global perspective and a heart for service. An NBA veteran who played on four continents, Lumi captained Nigeria to historic victories. As President of the Nigeria Olympians Association, he has been a champion for athlete welfare. His philosophy of "Servant Leadership" is exemplified by his Youth Foundation, which has mentored over 40,000 young people. He is dedicated to bridging the gap for developing nations within the Olympic movement.'
  },
  {
    id: 'thomas',
    name: 'Thomas Tang, OLY',
    role: 'For Treasurer',
    sport: 'Alpine Skiing',
    country: 'Chinese Taipei',
    imageAction: 'Thomas Business.jpg',
    imageHeadshot: 'Thomas Sport.jpg',
    achievements: [
      'Two-time Winter Olympian (Calgary 1988, Albertville 1992)'
    ],
    governance: [],
    keyAchievement: 'Financial literacy, scaling operations, and tangible innovation (hardware, not buzzwords).',
    business: 'Founder & CEO: Apantac LLC (Global leader in broadcast signal processing).',
    trackRecord: 'Bootstrapped company in 2008; now ships 200+ products to 40+ countries. His technology powered broadcasts for Sochi 2014 and Paris 2024 Olympics.',
    bioFull: 'Thomas Tang combines Olympic grit with Silicon Valley innovation. A two-time Winter Olympian for Chinese Taipei, Thomas is the Founder & CEO of Apantac LLC. He bootstrapped the company in 2008 during a global financial crisis and built it into a global leader in broadcast signal processing. His technology powered the broadcasts for the Sochi 2014 and Paris 2024 Olympics. Thomas brings deep financial literacy and a track record of scaling operations to the WOA.'
  }
];

export const ACTION_PLAN: ActionPoint[] = [
  {
    id: 'relations',
    title: 'Independent but Collaborative IOC Relations',
    description: 'Maintaining our independence as an association while working closely and constructively with the IOC. We are the bridge, not the barrier.'
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