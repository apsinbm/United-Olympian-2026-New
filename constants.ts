import { Candidate, ActionPoint, Language, Achievement } from './types';

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
    olympicYears: [
      { year: 1992, medal: 'gold' },
      { year: 1994, medal: 'gold' },
      { year: 1998, medal: 'silver' },
      { year: 2002 }
    ],
    country: 'Sweden',
    location: 'Idre Fjäll, Sweden & Monte Carlo, Monaco',
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
    keyAchievement: 'Double Olympic Champion with 20+ years of sports administration and athlete advocacy. Led the WOA constitutional reforms enabling 50/50 gender representation.',
    philosophy: 'Make every-day life better for Olympians. Walk the talk.',
    business: 'Entrepreneur and Owner of the Pernilla Wiberg Hotel (Idre Fjäll, Sweden). CEO of Pernilla Wiberg Sportpromotion.',
    bioFull: 'Pernilla Wiberg is a legend on the slopes and a powerhouse in the boardroom. As a Triple Olympic Medalist with 24 individual World Cup victories, 61 World Cup podiums, and the 1997 Overall World Cup title, she is one of the few skiers in history to win races in all five alpine disciplines—her 1991 World Championship gold was the first for a Scandinavian woman in 33 years.\n\nBeyond competition, she became a renowned TV sports commentator for Sveriges Television (SVT). In governance, she served as an IOC Member for eight years across multiple commissions, chaired the IOC Evaluation Commission for the first Winter Youth Olympic Games, and represented the WOA on the IOC Athletes\' Commission from 2020–2025.\n\nAs current WOA Vice President, she was instrumental in the historic 50/50 gender representation reform. A Champions for Peace member and successful entrepreneur, she owns and operates the Pernilla Wiberg Hotel in Sweden and is CEO of Pernilla Wiberg Sportpromotion. Based in Idre Fjäll, Sweden and Monte Carlo, Monaco since 1995—strategically positioned near WOA Patron Prince Albert and the IOC in Lausanne. She is married with two children. Fluent in Swedish, English, French, German, and Norwegian.',
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
    olympicYears: [
      { year: 2012 }
    ],
    country: 'Nigeria',
    location: 'Lagos, Nigeria',
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
      'Laureus Sport for Good Ambassador',
      'Secured lifetime business class travel for 1976 Nigerian athletes on Air Peace',
      'Secured 4-hectare Olympian Village with government for athlete welfare',
      'Established Olympian Welfare Scheme providing insurance and emergency support',
      'Founded youth mentorship program reaching 40,000+ young people since 2002'
    ],
    keyAchievement: 'NBA Star turned athlete advocate. Founded programs that have mentored 40,000+ young people and secured tangible welfare benefits for athletes across Africa.',
    philosophy: 'Athlete-First Leadership. Understanding the billion-dollar business of professional sport to better protect athlete welfare, retirement, and image rights.',
    bioFull: 'Olumide "Lumi" Oyedeji brings a global perspective and a heart for service. The first African player ever drafted outside America to the NBA (42nd pick, 2000), Lumi made history as the inaugural African to compete in ALL major basketball tournaments worldwide—Olympics, World Cup, NBA, EuroLeague, Commonwealth Games, All Africa Games, and Asia Championships.\n\nA Nigerian League MVP, 3× CBA rebounding leader, and 2× BBL Slam Dunk Contest champion, he led Nigeria to their first-ever AfroBasket trophy in 2015 and represented them at the 2012 Olympics and 1999 World Cup.\n\nNow based in Lagos, he serves as Vice President of the Nigeria Olympic Committee, President of the Nigeria Olympians Association, and Board Member of the Nigeria Basketball Federation. A WADA Athlete Council member since 2023 and Laureus Ambassador, his "Athlete-First Leadership" philosophy delivers real results: mentoring 40,000+ young people through his foundation since 2002, securing lifetime business class travel for Nigeria\'s 1976 athletes through Air Peace, negotiating a 4-hectare Olympian Village with government, and establishing the Olympian Welfare Scheme providing insurance and emergency support. His professional sport experience—navigating contracts, endorsements, and athlete transitions across 10 countries—gives him unique insight into the welfare, retirement, and image rights issues facing Olympians today. Speaks English, Russian, Chinese, Korean, and French.',
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
    olympicYears: [
      { year: 1988 },
      { year: 1992 }
    ],
    country: 'Chinese Taipei',
    location: 'Taipei, with residences in Park City (Utah), Portland (Oregon), Hong Kong & Guinea-Bissau',
    imageAction: 'Thomas Business.jpg',
    imageHeadshot: 'Thomas Sport 2.jpg',
    achievements: [
      'Two-time Winter Olympian (Calgary 1988, Albertville 1992)',
      'Alpine World Championships Competitor (1989)',
      'Alpine World Cup Competitor (1989)',
      'Chinese Taipei National Ski Team (1987–1992)'
    ],
    governance: [
      'Secretary General: Guinea-Bissau Winter Sports Federation (2023–Present)',
      'President & CEO: Apantac LLC (2008–Present)',
      'President: Eubank Investment Group (2012–Present)',
      'President: Anextus Trading & Export, Guinea-Bissau (2024–Present)',
      'Board Member: Taiwanese American Chamber of Commerce (2023–Present)',
      'Director of International Affairs: Chinese Taipei Olympians Association'
    ],
    keyAchievement: 'Business, Technology Wizard, Built a global tech company from scratch that has powered multiple generations of Olympic and FIFA World Cup and leading global sporting events.',
    business: 'Founder & President: Apantac LLC (Global leader in broadcast & ProAV, HQ in Beaverton, Oregon with offices in Paris, Taipei, Tokyo, Singapore & Mexico City). President: Eubank Investment Group.',
    trackRecord: 'Founded Apantac in his basement in 2008. Won prestigious PICK HIT AWARD at NAB 2009. By 2014: 200+ products distributed in 40+ countries. Technology powers Olympic Games broadcasts, Soccer World Cups, and national broadcasters worldwide. Prior experience: VP at Avitech (grew business 8x), Director of Marketing at Grass Valley ($50M P&L responsibility), worked on F-14/F-16 flight simulators and NASA Space Shuttle training systems.',
    education: [
      'Harvard Business School - Executive Education (Marketing & Business Strategy)',
      'Westminster College - M.S., Computer Science',
      'University of Utah - M.S., Applied Physics',
      'University of Utah - B.S., Physics'
    ],
    bioFull: 'Thomas Tang combines Olympic grit with Silicon Valley innovation. A two-time Winter Olympian for Chinese Taipei who competed at World Championships and World Cups, he now serves as Chef de Mission for Guinea-Bissau at the 2026 Milano-Cortina Olympics and Secretary General of their Winter Sports Federation. His Olympic legacy is a family affair—his daughter competed at Figure Skating at an international level, and his sons have qualified for the 2022 and 2026 Olympics in Alpine Skiing.\n\nThomas founded Apantac in his basement during the 2008 financial crisis and built it into a global broadcast and ProAV technology leader—winning the prestigious NAB PICK HIT AWARD in 2009 and now shipping 200+ products to 40+ countries, from Greenland to New Zealand. His technology has powered Olympic broadcasts, Soccer World Cups, major professional sports leagues, and national broadcasters worldwide, and is used daily by leading social media for their event spaces.\n\nWith Harvard Business School executive training, prior leadership at Philips Broadcast ($50M P&L) and career engineering on F-14/F-16 simulators and NASA Space Shuttle training systems, Thomas brings unmatched financial acumen and operational excellence to the WOA. Fluent in English, Mandarin, Cantonese, and Taiwanese.',
    socialLinks: {
      linkedIn: 'https://www.linkedin.com/in/thomas-tang-oly-5202b84/',
      facebook: 'https://www.facebook.com/thomas.tang.18',
      website: 'https://www.apantac.com'
    }
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'OLY Designation',
    description: 'Created the OLY post-nominal letters for all Olympians worldwide',
    links: [
      { url: 'https://olympians.org/news/983/oly-post-nominal-letters-to-honour-olympians/', label: 'WOA Announcement', description: 'Launch of OLY post-nominal letters' },
      { url: 'https://olympians.org/news/986/over-3000-olympians-register-for-oly-letters/', label: 'Thousands Register', description: 'Early take-up of OLY post-nominals' },
      { url: 'https://olympians.org/news/1416/olympians-and-noas-get-creative-to-boost-oly-sign-ups/', label: 'Creative Sign-ups', description: 'NOAs promoting OLY sign-ups' },
      { url: 'https://en.wikipedia.org/wiki/OLY', label: 'Wikipedia - OLY', description: 'Wikipedia overview of the OLY post-nominal letters program' },
      { url: 'https://olympians.org/library/noa_guide/oly_ceremony_delivery_guide_en.pdf', label: 'OLY Ceremony Guide', description: 'Official OLY Ceremony Delivery Guide with global OLY registration figures' },
      { url: 'https://olympics.com/athlete365/articles/career/make-your-personal-brand-stand-out-with-oly', label: 'IOC Athlete365', description: 'IOC Athlete365 article promoting OLY as a professional credential for Olympians' },
    ]
  },
  {
    title: 'World Olympians Forum',
    description: 'Established the global gathering of Olympians',
    links: [
      { url: 'https://olympians.org/news/403/moscow-to-host-the-inaugural-world-olympians-forum/', label: 'Inaugural Forum', description: 'Announcement of the first World Olympians Forum' },
      { url: 'https://olympians.org/news/442/world-olympians-forum-gets-underway-in-moscow/', label: 'First WOF Success', description: 'Report from World Olympians Forum in Moscow' },
      { url: 'https://olympians.org/news/1292/successful-world-olympians-forum-empowers-olympians-worldwide/', label: '2019 Lausanne Forum', description: 'Full article on the 2019 World Olympians Forum in Lausanne' },
      { url: 'https://olympics.ie/inaugural-world-olympians-forum-declared-a-resounding-success/', label: 'Irish NOC Report', description: 'Irish NOC report on the success of the inaugural WOF' },
      { url: 'https://eurolympic.org/inaugural-world-olympians-forum', label: 'EOC Coverage', description: 'European Olympic Committees coverage of the first WOF' },
      { url: 'https://olympics.com/ioc/news/the-biggest-ever-international-athletes-forum', label: 'IOC Article', description: 'IOC article referencing joint IOC–WOA sessions and WOF context' },
    ]
  },
  {
    title: 'Service to Society Grants',
    description: 'Funding for Olympians making community impact',
    links: [
      { url: 'https://olympians.org/noas/grants/', label: 'Grants Overview', description: 'Overview of WOA grants including Service to Society' },
      { url: 'https://olympians.org/grants/service-to-society/', label: 'Service to Society', description: 'Dedicated page describing the Service to Society Grants for Olympian-led community projects' },
      { url: 'https://olympians.org/news/774/woa-launches-service-to-society-grant-programme/', label: 'Programme Launch', description: 'Launch of Service to Society Grants' },
      { url: 'https://olympians.org/news/1672/support-your-community-with-a-woa-grant/', label: 'Community Support', description: 'Community-focused grants explainer' },
      { url: 'https://olympians.org/news/1767/olympians-give-back-to-their-communities-with-woa-grants/', label: '28 Projects Awarded', description: 'Case studies of Service to Society grants' },
      { url: 'https://olympians.org/news/1840/30-olympian-led-projects-awarded-woa-grants/', label: '30 Projects in 2024', description: 'News on 30 projects in 25 countries receiving 2024 Service to Society and related grants' },
      { url: 'https://olympics.com/ioc/news/inspirational-olympian-led-initiatives-rewarded-for-their-services-to-society-and-to-fellow-olympians', label: 'IOC Article', description: 'IOC article on Olympian-led projects funded by WOA grants' },
    ]
  },
  {
    title: 'IOC Funding Increase',
    description: 'Increased funding from IOC by up to 300%',
    links: [
      { url: 'https://olympians.org/news/1945/ioc-and-woa-strengthen-their-partnership-to-better-support-olympians/', label: '2025 Agreement', description: 'Strengthened IOC–WOA partnership and funding' },
      { url: 'https://olympians.org/news/497/athlete-welfare-a-top-priority-for-woa-in-2016/', label: 'Athlete Welfare Priority', description: 'Athlete welfare and funding priorities' },
      { url: 'https://olympians.org/news/1942/ioc-and-woa-to-reaffirm-commitment-to-work-closely-together/', label: 'Joint Communication', description: 'New MoU / partnership reaffirmation with IOC' },
    ]
  },
  {
    title: 'Development Officers',
    description: 'Established regional development officers to support NOAs',
    links: [
      { url: 'https://olympians.org/news/1179/establish-regional-development-officers-to-support-noas/', label: 'Asia Officer', description: 'Announcement of regional Development Officers' },
      { url: 'https://olympians.org/news/1295/woa-welcomes-new-development-officers/', label: 'Americas Recruitment', description: 'New Development Officers introduced' },
      { url: 'https://olympians.org/news/1564/woa-development-officers-bring-support-closer-to-noas/', label: 'Africa Position', description: 'Update on Development Officers\' impact' },
    ]
  },
  {
    title: 'Development Grants',
    description: 'Created development grants to help grow NOAs',
    links: [
      { url: 'https://olympians.org/noas/grants/', label: 'Grants Overview', description: 'Central grants page describing NOA Development Grants and other WOA grant streams' },
      { url: 'https://olympians.org/grants/development-grants/', label: 'Development Grants', description: 'Specific page for NOA Development Grants with criteria and application details' },
      { url: 'https://olympians.org/news/536/woa-launches-2016-noa-development-grants/', label: '2016 Launch', description: 'Launch of NOA Development Grants' },
      { url: 'https://olympians.org/noas/noa-guide/project-delivery/', label: 'NOA Guide', description: 'NOA Guide section explaining project delivery and use of WOA grants' },
    ]
  },
  {
    title: 'OLY House Rio',
    description: 'Award-winning OLY House at Rio 2016',
    links: [
      { url: 'https://olympians.org/news/735/olympians-reunion-centre-by-ey-wins-top-rio-award/', label: 'Top Rio Award', description: 'WOA report on the Rio Olympians Reunion Centre by EY winning the ACRio Hospitality House Award' },
      { url: 'https://olympians.org/news/732/woa-celebrates-most-successful-olympians-reunion-centre-ever/', label: 'Most Successful Edition', description: 'Post-Games wrap on Rio Olympians Reunion Centre' },
      { url: 'https://olympians.org/news/284/woa-confirms-venue-for-rio-2016-olympians-reunion-centre/', label: 'Venue Confirmation', description: 'Confirms Rio 2016 Olympians Reunion Centre venue' },
      { url: 'https://olympians.org/woa/about/history/', label: 'WOA History', description: 'History page noting the award-winning Rio 2016 Olympians Reunion Centre' },
    ]
  },
  {
    title: 'Service to Olympians Grants',
    description: 'Direct support for Olympians',
    links: [
      { url: 'https://olympians.org/noas/grants/', label: 'Grants Overview', description: 'Main grants overview including Service to Olympians' },
      { url: 'https://olympians.org/grants/service-to-olympians/', label: 'Service to Olympians', description: 'Page explaining Service to Olympians Grants for education, skills and reunion activities' },
      { url: 'https://olympians.org/news/1796/chilean-olympians-make-history-in-santiago/', label: 'Chilean Olympians', description: 'Example of Service to Olympians support' },
      { url: 'https://olympians.org/news/1840/30-olympian-led-projects-awarded-woa-grants/', label: '2024 Recipients', description: 'Article listing 2024 grants including Service to Olympians recipients' },
      { url: 'https://olympians.org/noas/noa-guide/project-delivery/', label: 'NOA Guide', description: 'NOA Guide section detailing Service to Olympians project types' },
      { url: 'https://olympics.com/ioc/news/inspirational-olympian-led-initiatives-rewarded-for-their-services-to-society-and-to-fellow-olympians', label: 'IOC Article', description: 'IOC article listing projects funded to support fellow Olympians' },
    ]
  },
  {
    title: 'OLY House Paris',
    description: 'Best OLY House ever at Paris 2024',
    links: [
      { url: 'https://olympians.org/news/1843/oly-house-paris-to-be-at-an-historic-location/', label: 'Historic Location', description: 'Announcement of OLY House Paris at the historic Caisse d\'Epargne headquarters and the e-OLY House concept' },
      { url: 'https://olympians.org/news/1866/94-year-old-olympian-stars-at-oly-house-paris-2024/', label: '94-Year-Old Star', description: 'Feature on a 94-year-old Olympian visiting OLY House Paris 2024' },
      { url: 'https://olympians.org/news/1869/jesse-owens-and-luz-long-among-5-awarded-olympians-for-life-by-woa-patron-prince-albert/', label: 'Olympians for Life Awards', description: 'Article on Olympians for Life awards held at OLY House Paris 2024' },
      { url: 'https://olympians.org/news/1875/oly-house-paris-2024-is-rocking/', label: 'Mid-Games Update', description: 'Mid-Games OLY House Paris update' },
      { url: 'https://olympians.org/news/1887/six-films-chosen-for-prestigious-awards-at-oly-house-film-festival/', label: 'Film Festival', description: 'OLY House Film Festival awards' },
      { url: 'https://olyhouse.org', label: 'OLY House Website', description: 'Dedicated OLY House website with Paris 2024 programme details' },
      { url: 'https://olympics.com/athlete365/news/paris2024/meet-olympians-from-around-the-world-at-the-paris-2024-oly-house', label: 'IOC Athlete365', description: 'IOC Athlete365 article inviting Olympians to OLY House Paris' },
      { url: 'https://youtube.com/watch?v=pwGuKFn_NGc', label: 'Video Highlights', description: 'Video highlights of OLY House Paris 2024' },
    ]
  },
  {
    title: 'Fundraising Success',
    description: 'Raised millions to fund OLY Houses and World Olympians Forums',
    links: [
      { url: 'https://olympians.org/news/1924/another-5-years-of-clean-financial-audits-for-woa/', label: 'Clean Audits', description: 'Clean PwC audit sequence for WOA finances' },
      { url: 'https://olympians.org/news/735/olympians-reunion-centre-by-ey-wins-top-rio-award/', label: 'EY Partnership', description: 'Story showing the EY-backed Rio OLY House winning a hospitality award' },
      { url: 'https://olympians.org/news/1843/oly-house-paris-to-be-at-an-historic-location/', label: 'Paris Partnership', description: 'Announcement highlighting the Caisse d\'Epargne partnership funding OLY House Paris' },
      { url: 'https://olympics.com/ioc/news/the-world-olympians-association-announces-financial-support-to-olympian-led-community-initiatives', label: 'IOC Report', description: 'IOC report on financial support to Olympian-led projects via WOA grants' },
    ]
  },
  {
    title: 'University Scholarships',
    description: 'Education opportunities for Olympians worldwide',
    links: [
      { url: 'https://olympians.org/news/1441/woa-awards-six-olympians-university-of-london-scholarships/', label: 'Scholarships Launch', description: 'Six Olympians receive University of London awards' },
      { url: 'https://olympians.org/news/1699/more-university-of-london-scholarships-awarded-to-olympians/', label: '2022 Recipients', description: 'Second wave of University of London scholarships' },
      { url: 'https://olympians.org/news/1784/woa-awards-four-more-olympians-full-postgraduate-scholarships/', label: '2023/24 Recipients', description: 'Further postgraduate scholarships awarded' },
      { url: 'https://olympians.org/news/1890/woa-awards-four-olympians-sports-diplomacy-scholarships/', label: '2024/25 Recipients', description: 'Sports diplomacy scholarship awards' },
      { url: 'https://olympians.org/news/1930/apply-now-for-university-of-london-scholarships/', label: '2025 Applications', description: 'Call for 2025 scholarship applications and summary of graduates so far' },
      { url: 'https://olympians.org/news/1770/apply-for-discounted-postgraduate-sports-diplomacy-course/', label: 'Sports Diplomacy', description: 'Discounted sports diplomacy course offer' },
      { url: 'https://olympians.org/news/1438/apply-now-for-university-of-london-scholarships/', label: 'First Scholarship Call', description: 'First call for University of London scholarships' },
      { url: 'https://worldacademy.sport/scholarship', label: 'WAoS Scholarships', description: 'WAoS page describing scholarship pathways in sport management' },
    ]
  },
  {
    title: 'OLY Ceremonies',
    description: 'Established recognition ceremonies for Olympians',
    links: [
      { url: 'https://olympians.org/library/noa_guide/oly_ceremony_delivery_guide_en.pdf', label: 'Ceremony Guide', description: 'Official guide for NOAs on delivering OLY ceremonies' },
      { url: 'https://olympians.org/news/1796/chilean-olympians-make-history-in-santiago/', label: 'Chile Ceremony', description: 'Coverage of a major OLY certificate ceremony in Chile' },
      { url: 'https://olympians.org/news/1416/olympians-and-noas-get-creative-to-boost-oly-sign-ups/', label: 'Creative Ceremonies', description: 'Article showcasing creative OLY ceremonies around the world' },
      { url: 'https://olympians.org/news/1804/holiday-wishes-from-woa/', label: 'Record Registrations', description: 'End-of-year message referencing multiple OLY celebrations and record registrations' },
      { url: 'https://olympians.org/oly-house/oly-day', label: 'OLY Day', description: 'Page describing OLY Day and associated ceremonies for Olympians' },
      { url: 'https://olympics.com/ioc/news/world-olympians-association-launches-oly-house-beijing-2022', label: 'Beijing 2022', description: 'IOC news on Beijing 2022 OLY House, including OLY recognition activity' },
    ]
  },
  {
    title: 'Health Research',
    description: 'First-ever global musculoskeletal health survey of Olympians',
    links: [
      { url: 'https://olympians.org/olympians/health/', label: 'Health Study', description: 'WOA Olympians Health Study page summarising key findings' },
      { url: 'https://olympians.org/news/1106/woa-olympic-games-musculoskeletal-health-study-kicks-off-in-pyeongchang/', label: 'Study Launch', description: 'Start of global musculoskeletal health study' },
      { url: 'https://bjsm.bmj.com/content/55/1/46', label: 'BJSM Paper', description: 'British Journal of Sports Medicine paper on injuries and later-life health in 3,357 retired Olympians' },
      { url: 'https://pubmed.ncbi.nlm.nih.gov/33168580', label: 'PubMed Entry', description: 'PubMed entry for the BJSM Olympian health study' },
      { url: 'https://napier.ac.uk/about-us/news/olympianhealth', label: 'Edinburgh Napier', description: 'Edinburgh Napier University article on Dr Debbie Palmer\'s leadership of the study' },
      { url: 'https://www.fims.org/news/the-long-term-health-of-olympians-a-fims-and-woa-collaboration/', label: 'FIMS News', description: 'FIMS/WOA news about collaboration on long-term Olympian health' },
    ]
  },
  {
    title: 'Olympians for Life',
    description: 'Created the Olympians for Life awards and ceremonies',
    links: [
      { url: 'https://olympians.org/olympians/olympians-for-life/', label: 'Programme Page', description: 'Official Olympians for Life programme page' },
      { url: 'https://olympians.org/news/1869/jesse-owens-and-luz-long-among-5-awarded-olympians-for-life-by-woa-patron-prince-albert/', label: 'Paris 2024 Inductees', description: 'Article on the Paris 2024 Olympians for Life inductees' },
      { url: 'https://olympians.org/library/media/220209_woa_inducts_latest_olympians_for_life_final.pdf', label: 'Beijing 2022 Inductees', description: 'Press release on Beijing 2022 Olympians for Life inductees' },
      { url: 'https://youtube.com/watch?v=Lf3cF-nc_U4', label: 'Ceremony Video', description: 'Video of an Olympians for Life ceremony' },
      { url: 'https://hockey.org.au/news/lynch-receives-olympians-for-life-accolade/', label: 'Rachael Lynch', description: 'Story on Rachael Lynch OLY being named an Olympian for Life' },
      { url: 'https://www.olympic.org.nz/news/barbara-kendall-made-an-olympian-for-life', label: 'Barbara Kendall', description: 'NZOC article on Barbara Kendall\'s Olympian for Life honour' },
      { url: 'https://www.olympics.com/en/news/an-olympian-for-life-keeping-the-flame-alive-beyond-the-games', label: 'IOC Feature', description: 'IOC feature on the Olympians for Life initiative' },
    ]
  },
  {
    title: 'Olympian.org Website',
    description: 'Rebuilt the Olympian.org website',
    links: [
      { url: 'https://olympians.org/news/13/world-olympians-association-launches-new-website/', label: 'New Brand Launch', description: 'Original launch of the Olympian.org website' },
      { url: 'https://olympians.org/library/world_olympians_association_unveils_new_brand_identity_and_website_in_sochi_final.pdf', label: 'Full Press Release', description: 'Full press release on the 2014 rebrand and website launch' },
      { url: 'https://olympians.org/news/33/woa-website-launched-in-three-languages/', label: 'Multilingual Site', description: 'Early update on multilingual WOA site' },
      { url: 'https://olympians.org/woa/about/introduction/', label: 'WOA Introduction', description: 'Introduction to WOA and its services on the rebuilt site' },
      { url: 'https://olympians.org', label: 'Olympians.org', description: 'Current WOA website homepage' },
    ]
  },
  {
    title: 'NOA Guide & Toolkits',
    description: 'Created comprehensive NOA Guide and Toolkits',
    links: [
      { url: 'https://olympians.org/noas/noa-guide/', label: 'NOA Guide', description: 'Main NOA Guide homepage' },
      { url: 'https://olympians.org/news/1286/new-noa-guide-will-boost-capabilities/', label: 'Guide Launch', description: 'Launch article for the NOA Guide at the World Olympians Forum' },
      { url: 'https://olympians.org/noas/noa-guide/member-engagement/', label: 'Member Engagement', description: 'Toolkit section on member engagement and services' },
      { url: 'https://olympians.org/noas/noa-guide/project-delivery-overview/', label: 'Project Delivery', description: 'Toolkit section on project delivery and use of grants' },
      { url: 'https://olympians.org/noas/noa-guide/leadership-governance-overview/', label: 'Leadership & Governance', description: 'Section on leadership, governance and structures' },
      { url: 'https://olympians.org/noas/noa-guide/finance-management/', label: 'Finance Management', description: 'Section on finance management and budgeting' },
      { url: 'https://olympians.org/noas/noa-guide/communications-overview/', label: 'Communications', description: 'Communications toolkit for NOAs' },
      { url: 'https://olympians.org/noas/noa-guide/resource-library-overview/', label: 'Resource Library', description: 'Resource library with templates and sample documents' },
    ]
  },
  {
    title: 'Relationship Network',
    description: 'Built relationships with World Academy of Sport, SkillsBuild, and more',
    links: [
      { url: 'https://olympians.org/skillsbuild/', label: 'SkillsBuild', description: 'WOA page introducing the SkillsBuild partnership for Olympians' },
      { url: 'https://worldacademy.sport/news-scholarship-mou', label: 'WAoS Press Release', description: 'WAoS press release on its scholarship MOU with WOA' },
      { url: 'https://worldacademy.sport/scholarship', label: 'WAoS Scholarships', description: 'WAoS scholarship information aligned with Olympian programmes' },
      { url: 'https://www.fims.org/news/the-long-term-health-of-olympians-a-fims-and-woa-collaboration/', label: 'FIMS Partnership', description: 'FIMS news on partnering with WOA on Olympian health' },
    ]
  },
  {
    title: 'New Agreement with IOC',
    description: 'Secured independence, long-term funding and stability for all WOA programs',
    links: [
      { url: 'https://olympians.org/news/1945/ioc-and-woa-strengthen-their-partnership-to-better-support-olympians/', label: '2025 Agreement', description: 'WOA announcement of the 2025 Cooperation and Licence Agreement with the IOC' },
      { url: 'https://olympians.org/news/1942/', label: 'Joint Communication', description: 'Earlier joint communication outlining the IOC–WOA commitment to collaborate' },
      { url: 'https://www.insidethegames.biz/articles/1155387/woa-ioc-partneship-renew-agreement', label: 'InsideTheGames', description: 'InsideTheGames report on renewal of the IOC–WOA partnership agreement' },
      { url: 'https://www.olympics.com/ioc/news/ioc-and-world-olympians-association-strengthen-their-partnership-to-better-support-olympians', label: 'IOC News', description: 'IOC news release on the strengthened partnership and Licence Agreement' },
    ]
  },
  {
    title: 'Successful Global Campaigns',
    description: 'When Ebola struck and our NOAs asked for help we launched #TargetEbola and thanks to the global Olympian community we sent six containers of medical and other supplies to Sierra Leone and Liberia. Our #OlympiansforUkraine campaign raised funding to help displaced Ukrainian Olympian families.',
    links: [
      { url: 'https://olympians.org/news/204/join-the-targetebola-fundraising-campaign-and-help-save-lives/', label: '#TargetEbola Launch', description: 'WOA article on launching the #TargetEbola fundraising campaign' },
      { url: 'https://olympians.org/news/491/olympians-answer-call-to-help-ebola-hit-communities/', label: 'Olympians Mobilise', description: 'Olympians mobilise for Ebola-hit communities' },
      { url: 'https://olympians.org/news/222/ifs-show-support-for-targetebola/', label: 'IF Support', description: 'IFs join the #TargetEbola campaign' },
      { url: 'https://olympians.org/actions/events/278/-targetebola-supplies-reach-sierra-leone', label: 'Supplies Reach Sierra Leone', description: 'Article on TargetEbola medical supplies reaching Sierra Leone' },
      { url: 'https://olympians.org/news/287/woa-gives-anti-ebola-supplies-to-sierra-leone-noc-president/', label: 'Sierra Leone NOC', description: 'WOA gives anti-Ebola supplies to Sierra Leone NOC President' },
      { url: 'https://olympians.org/news/883/legacy-of-target-ebola-campaign-lives-on-in-liberia/', label: 'Liberia Legacy', description: 'Ongoing impact of TargetEbola in Liberia' },
      { url: 'https://olympians.org/news/1675/woa-upholds-athletes-right-to-compete-and-launches-ukraine-appeal/', label: '#GiveBackToUkraine', description: 'WOA upholds athletes\' right to compete and launches Ukraine appeal' },
      { url: 'https://olympians.org/news/1678/join-olympians-around-the-world-and-raise-your-whitecard-on-april6/', label: 'WhiteCard Campaign', description: 'WhiteCard / Peace and Sport campaign call' },
      { url: 'https://olympians.org/news/1688/please-donate-now-to-olympiansforukraine/', label: 'Donation Appeal', description: 'Main #OlympiansforUkraine donation appeal' },
      { url: 'https://www.insidethegames.biz/articles/1130425/trauma-recovery-woa', label: 'Trauma Recovery', description: 'InsideTheGames story on trauma-recovery work for Ukrainian Olympians funded by the appeal' },
      { url: 'https://www.olympics.com/ioc/news/ioc-stands-in-solidarity-with-ukraine', label: 'IOC Support', description: 'IOC stands in solidarity with Ukraine' },
    ]
  },
];

export const CORE_MESSAGES = [
  {
    id: 'built',
    title: 'We Built It',
    subtitle: 'The Modern WOA',
    description: 'We helped deliver every major program Olympians rely on today. We are credible because we have done it—14 years of proven results, not promises.',
    icon: 'Trophy'
  },
  {
    id: 'secure',
    title: 'We Secured It',
    subtitle: 'Independent & Trusted',
    description: 'We protected WOA independence while rebuilding the strong working relationship with the IOC that brings funding and influence.',
    icon: 'Shield'
  },
  {
    id: 'lead',
    title: 'We\'re Listening',
    subtitle: 'The Right Team',
    description: 'An Olympic Champion, an NBA Star, and a Business Wizard—with complementary expertise: Pernilla brings Olympic governance and IOC experience, Lumi brings professional sport business insight, Thomas brings financial and technology acumen. The complete package, listening to your needs.',
    icon: 'Users'
  }
];

export const JOEL_ENDORSEMENT = {
  quote: "For 14 years, we've worked tirelessly to create today's WOA which serves Olympians needs and empowers them to give back to their communities through our many services, initiatives and grants. Pernilla, Lumi, and Thomas have been integral to many of these achievements. They have my full confidence to continue this work and take the WOA to even greater heights. And, crucially, to protect our independence.",
  author: "Joël Bouzou",
  title: "WOA President (2011-2026)"
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
    description: 'We will aggressively champion a global safety net, lobbying for health insurance coverage and pension schemes for Olympians. Furthermore, we will demand the absolute protection of Image Rights post-Games. Once the competition ends, your likeness and your data belongs to you, and we will work to secure the frameworks that ensure you control your own legacy.'
  },
  {
    id: 'reform',
    title: 'Maintaining and Enhancing Gender Equity',
    description: 'We commit to actively protect and enhance the historic 50/50 gender representation reform initiated by the WOA Constitution Committee chaired by Pernilla Wiberg.'
  },
  {
    id: 'transparency',
    title: 'Continuing Financial Transparency',
    description: 'The current administration moved from publishing our annual audit reports every four years to publishing them every year. We will continue that practice and ensure we implement the latest financial best practices and good governance processes.'
  },
  {
    id: 'dignity',
    title: "The Life Transition Fund",
    description: 'We will establish a dedicated grant specifically for NOAs to run local mental health and life and career transition workshops. Resources will be flexible to meet local cultural and economic needs.'
  },
  {
    id: 'empowerment',
    title: 'Building NOA Empowerment',
    description: 'We will appoint a Development Officer for every continent and prioritise regional and continental workshops and meetings to build NOA capacity and experience.'
  },
  {
    id: 'digital',
    title: 'Supercharging OLY Connect',
    description: "We will leverage Thomas Tang's tech expertise to make OLY Connect the indispensable app for Olympians that provides them with benefits, opportunities, connections, and business, career and life networking and support."
  },
  {
    id: 'legacy',
    title: 'Increasing NOA Grants',
    description: 'The NOA Development Grants and Service to Society and Service to Olympians Grants are always oversubscribed. We will raise more funding to increase the number of grants we can award every year.'
  }
];