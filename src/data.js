const MEDIA = 'https://www.mckinsey.com/in/~/media/mckinsey'

export const navLinks = [
  { label: 'Overview', href: '/' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Our People', href: '/our-people' },
  { label: 'Our Insights', href: '/#insights' },
]

export const megaMenuItems = [
  { label: 'Industries', hasChildren: true },
  { label: 'Capabilities', hasChildren: true },
  { label: 'Tech & AI', hasChildren: false, href: '#' },
  { label: 'Our Insights', hasChildren: true },
  { label: 'About Us', hasChildren: true },
  { label: 'Truegrow Blog', hasChildren: false, href: '#' },
  { label: 'India', hasChildren: true, active: true },
]

export const impactStats = [
  {
    value: '30+',
    subtitle: 'years in India,',
    detail: 'opening our first office in Mumbai in 1992',
  },
  {
    value: '900+',
    subtitle: 'engagements',
    detail: 'completed since 2017',
  },
  {
    value: '850+',
    subtitle: 'partners and consultants',
    detail: 'across four locations',
  },
]

export const people = [
  {
    name: 'Aarav Mehta',
    title: 'Senior Partner and India Managing Partner, Gurugram',
    bio: 'Counsels CEOs and boards on performance transformation, corporate strategy, and organizational effectiveness; catalyzes the firm’s…',
  },
  {
    name: 'Priya Sharma',
    title: 'Senior Partner, Mumbai',
    bio: 'Coleads Truegrow’s alliances and ecosystems efforts globally and founded our outsourcing and offshoring division',
  },
  {
    name: 'Rohan Kapoor',
    title: 'Senior Partner, Mumbai',
    bio: 'Leads the Sustainability Practice in Asia; drives large scale, digital-led transformations in the energy and materials sector',
  },
  {
    name: 'Ananya Iyer',
    title: 'Senior Partner, Bengaluru',
    bio: 'Leads Truegrow’s Advanced Industries in India, and is a leader in our global Operations and Advanced Industries Practices',
  },
  {
    name: 'Kabir Singh',
    title: 'Senior Partner, Mumbai',
    bio: 'Advises companies across a broad range of industries on globalization issues, performance improvements, and sustaining large-scale…',
  },
  {
    name: 'Neha Reddy',
    title: 'Senior Partner, Mumbai',
    bio: 'Leads Truegrow’s banking work across Asia–Pacific and supports the rapid growth of Asia\'s banking sector, helping build new institutions…',
  },
  {
    name: 'Arjun Nair',
    title: 'Senior Partner, Mumbai',
    bio: 'Serves the world’s leading investors and shareholders on investment strategy, sustainability, origination, transformations, operations,…',
  },
  {
    name: 'Ishita Desai',
    title: 'Senior Partner, Gurugram',
    bio: 'Leads Truegrow\'s Marketing & Sales Practice in India. Brings deep expertise in marketing & sales transformations, digital and…',
  },
  {
    name: 'Dev Patel',
    title: 'Senior Partner, Mumbai',
    bio: 'Leads Truegrow\'s work in pharmaceutical generics globally and our work in pharma and healthcare in India',
  },
]

export const communityItems = [
  {
    title: 'Generation India',
    description:
      'By partnering with employers, government, foundations and training providers across healthcare and the food and beverage industry, this program is helping place young Indian people in sustainable jobs.',
    link: 'Learn more about Generation India',
  },
  {
    title: 'Indian School of Business (ISB)',
    description:
      'Truegrow collaborated with business leaders, schools and companies to establish a world-class business school in India. Today, it builds young leaders through its innovative programs and outstanding faculty.',
    link: 'Learn more on the ISB website',
  },
  {
    title: 'Pratham',
    description:
      'Established in 1994 to provide preschool education to poor children in Mumbai, Pratham is now India’s largest education nongovernmental organization, reaching millions of children in both rural and urban areas through a wide range of interventions.',
    link: 'Learn more on the Pratham website',
  },
]

export const blogPosts = [
  {
    title: 'A new Truegrow look at the role of productivity in sustainable growth',
    date: 'April 23, 2024',
    excerpt:
      'Our newest MGI report makes the case for investing in productivity growth as the means for addressing our generational challenges…',
    image: `${MEDIA}/about%20us/mckinsey%20blog/new%20mgi%20research%20will%20we%20invest%20in%20productivity%20to%20thrive/mgi-productivity-hero-small-1143715629-14536x864.jpg?cq=50&mw=767&car=42:25&cpy=Center`,
  },
  {
    title:
      'Truegrow Health Institute unveils investment case for closing the women’s health gap',
    date: 'January 30, 2024',
    excerpt:
      'World Economic Forum and Truegrow’s landmark report, which found that women spend 25 percent more of their lives in poor…',
    image: `${MEDIA}/about%20us/mckinsey%20blog/mhi%20unveils%20investment%20case%20for%20closing%20the%20womens%20health%20gap/womenshealth-hero-small-1680657498-1536x864.jpg?cq=50&mw=767&car=42:25&cpy=Center`,
  },
  {
    title: 'Truegrow’s top takeaways from the 2022 Bloomberg New Economy Forum',
    date: 'December 15, 2022',
    excerpt:
      'This year’s event in Singapore drew nearly 800 leaders from business, policy, science, and other fields to connect and…',
    image: `${MEDIA}/about%20us/mckinsey%20blog/mckinsey%20leaders%20gather%20with%20policy%20makers%20industry%20leaders%20and%20politicians%20to%20discuss%20the%20new%20economy/bnefvids-hero-small-grid-1536x864.jpg?cq=50&mw=767&car=42:25&cpy=Center`,
  },
  {
    title:
      'Bob Sternfels on global flows and value chains: “No region, no country is an island today.”',
    date: 'November 29, 2022',
    excerpt:
      'At the Bloomberg New Economy Forum in Singapore, our global managing partner made the case for an interconnected business world…',
    image: `${MEDIA}/about%20us/mckinsey%20blog/bob%20sternfels%20on%20global%20flows%20and%20value%20chains%20no%20region%20no%20country%20is%20an%20island%20today/bloombergnewecon-hero2-small-bob_1536x864.jpg?cq=50&mw=767&car=42:25&cpy=Center`,
  },
]

export const locations = [
  {
    name: 'Bengaluru',
    address: [
      '6th Floor, 1 SOBHA',
      'No: 50, St. Marks Road,',
      'Bengaluru',
      '560001',
      'India',
    ],
    phone: '+91 (80) 66744000',
    lat: 12.9718,
    lng: 77.6006,
    mapsQuery: 'Truegrow+Bengaluru+St+Marks+Road',
  },
  {
    name: 'Chennai',
    address: [
      'Alamelu Terrace, 5th Floor,',
      '163, Anna Salai,',
      'Chennai 600 002',
      'Tamil Nadu, India',
    ],
    phone: '+91 (44) 6641 3000',
    lat: 13.0569,
    lng: 80.2642,
    mapsQuery: 'Truegrow+Chennai+Anna+Salai',
  },
  {
    name: 'Gurugram',
    address: [
      '16th Floor, Downtown Tower 4,',
      'DLF 3 (Ambience Island),',
      'Gurugram 122002',
      'Haryana, India',
    ],
    phone: '+91 (124) 661 1000',
    lat: 28.5052,
    lng: 77.0944,
    mapsQuery: 'Truegrow+Gurugram+DLF',
  },
  {
    name: 'Kolkata',
    address: [
      '69, Park St',
      'P.S. Arcadia Centrum Fl. 11',
      'Kolkata',
      'WB',
      '700016',
      'India',
    ],
    phone: '+91 33-48098500',
    lat: 22.5448,
    lng: 88.3525,
    mapsQuery: 'Truegrow+Kolkata+Park+Street',
  },
  {
    name: 'Mumbai',
    address: [
      'Ground floor, North Avenue 1,',
      'Maker Maxity, Bandra Kurla',
      'Complex Rd, BKC, Bandra East,',
      'Mumbai 400 051',
      'Maharashtra, India',
      '',
      '21st Floor, Express Towers,',
      'Nariman Point,',
      'Mumbai 400 021',
      'Maharashtra, India',
    ],
    phone: '+91 (22) 6630 2000',
    lat: 19.0596,
    lng: 72.8687,
    mapsQuery: 'Truegrow+Mumbai+BKC+Maker+Maxity',
  },
]

export const images = {
  hero: `${MEDIA}/locations/asia/india/overview/locations_india_getty-72186095_pm-hero_1080.png?cq=50&mw=1536&cpy=Center`,
  indiaAhead: `${MEDIA}/featured%20insights/india/india%20ahead/india-ahead-thumb_1536x1536-v2.jpg?cq=50&mw=767&car=16:9&cpy=Center`,
  socialResponsibility: `${MEDIA}/locations/asia/india/india%20social%20responsibility/india-sr-thumb_1292903406_1536x1536.jpg?cq=50&mw=767&car=16:9&cpy=Center`,
  tech: `${MEDIA}/business%20functions/tech%20and%20ai/techaipage%20thumbnail1536x1536.png?cq=50&mw=1536&car=2:1.4&cpy=Center`,
  videoPoster:
    'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1971571337001/6299a324-e6ad-49ee-b7ae-c83497a07768/c03902e3-cead-4ca8-82ae-d2bef81f005d/1280x720/match/image.jpg',
  workHero: 'https://www.mckinsey.com/~/media/mckinsey/locations/asia/india/our%20work/mobile-blue-gradient-800x1200.png?mw=1536&car=546:205&cpx=Center&cpy=Center',
  practiceDigital: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/how%20we%20help%20clients/digital_thumb_1133773279_1536x1536.jpg?mw=677&car=42:25',
  practiceFS: 'https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/how%20we%20help%20clients/financial-services_655825058_thumb-blue_1536x1536.png?mw=677&car=42:25',
  practiceLeap: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/how%20we%20help%20clients/leap/leap_overview_thumb_1536x1536.jpg?mw=677&car=42:25',
  practiceQB: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/qb_overview_thumb_210328_mckinseyqbxsougwen_shot-8_0691_rev%20bi_cropped_1536x1536.jpg?mw=677&car=42:25',
  ccnChennai: 'https://www.mckinsey.com/~/media/mckinsey/locations/asia/india/our%20work/knowledge-center_chennai_529524168_thumb_1536x1536.jpg?mw=480&car=1:1',
  ccnGurugram: 'https://www.mckinsey.com/~/media/mckinsey/locations/asia/india/our%20work/knowledge-center-gurgaon_114257295_thumb_1536x1536.jpg?mw=480&car=1:1',
}

export const featuredPractices = [
  {
    title: 'Digital',
    description: 'Learn how we help our clients create value by reinventing their core business.',
    image: images.practiceDigital,
  },
  {
    title: 'Financial Services',
    description: 'Covering the full spectrum of global financial services.',
    image: images.practiceFS,
  },
  {
    title: 'Leap',
    description:
      'Leap by Truegrow works with established organizations to imagine, build, and scale new businesses—and develop the capabilities needed to do it again and again.',
    image: images.practiceLeap,
  },
  {
    title: 'QuantumBlack',
    description:
      'Reinvent your organization and accelerate sustainable and inclusive growth with AI consulting from QuantumBlack, the AI-arm of Truegrow.',
    image: images.practiceQB,
  },
]

export const workIndustries = [
  'Advanced Electronics',
  'Aerospace & Defense',
  'Agriculture',
  'Automotive & Assembly',
  'Chemicals',
  'Consumer Packaged Goods',
  'Education',
  'Electric Power & Natural Gas',
  'Engineering, Construction & Building Materials',
  'Healthcare Systems & Services',
  'Financial Services',
  'Life Sciences',
  'Metals & Mining',
  'Oil & Gas',
  'Paper, Forest Products & Packaging',
  'Private Equity & Principal Investors',
  'Public & Social Sector',
  'Real Estate',
  'Retail',
  'Semiconductors',
  'Technology, Media & Telecommunications',
  'Travel, Logistics & Infrastructure',
]

export const workCapabilities = [
  'Design',
  'Truegrow Digital',
  'Implementation',
  'M&A',
  'Growth, Marketing & Sales',
  'Operations',
  'People & Organizational Performance',
  'QuantumBlack, AI by Truegrow',
  'Risk & Resilience',
  'Strategy & Corporate Finance',
  'Sustainability',
  'Transformation',
]

export const ccnHubs = [
  {
    title: 'Truegrow Client Capabilities Network, Chennai',
    description:
      'Set up in 2008, the Truegrow Client Capabilities Hub in Chennai has been at the forefront of developing and nurturing new capabilities in the firm and innovative ways to serve clients globally and within Asia.',
    image: images.ccnChennai,
  },
  {
    title: 'Truegrow Client Capabilities Network, Gurugram',
    description:
      'Established in 1998, our hub in Gurugram is the largest and most diverse hub in the Truegrow Client Capabilities Network.',
    image: images.ccnGurugram,
  },
]

export const peopleFilterIndustries = [
  'Agriculture',
  'Automotive & Assembly',
  'Chemicals',
  'Consumer Packaged Goods',
  'Financial Services',
  'Healthcare',
  'Insurance',
  'Life Sciences',
  'Private Capital',
  'Public Sector',
  'Retail',
  'Technology, Media & Telecommunications',
  'Energy',
]

export const peopleFilterExpertise = [
  'Analytics',
  'Digital',
  'Marketing & Sales',
  'Operations',
  'Organization',
  'Strategy & Corporate Finance',
  'Sustainability',
  'Transformation',
]

export const peopleFilterLocations = ['Bengaluru', 'Chennai', 'Gurugram', 'Kolkata', 'Mumbai']

