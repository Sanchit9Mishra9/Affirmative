export type Capability = {
  number: string;
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string;
  approach: { title: string; text: string }[];
  image: string;
  alt: string;
};

export type Industry = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string;
  issues: string[];
  image: string;
  alt: string;
};

export type Insight = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  date: string;
  dateISO: string;
  read: string;
  image: string;
  alt: string;
  pullQuote: string;
  body: string[];
};

export type Leader = {
  initials: string;
  name: string;
  role: string;
  credential: string;
};

export const firm = {
  name: "Trugro",
  legal: "Trugro Advisors LLP",
  tagline: "Building Defence Enterprises Today",
  values: "Growth. Trust. Commitment.",
  email: "connect@trugro.in",
  descriptor: "Defence strategy consulting",
  url: "https://trugro.in",
};

export const capabilities: Capability[] = [
  {
    number: "01",
    slug: "strategic-advisory",
    title: "Strategic Advisory",
    short: "Defence market entry with a map, not a pitch.",
    summary:
      "We help companies decide where they belong in India’s defence ecosystem — and what must change in the product, the company and the story before they enter.",
    body: "India’s defence market rewards preparation, not enthusiasm. Trugro works with founders and corporate leadership to assess technology readiness, map policy and regulation, and build a market-entry roadmap that can survive contact with the Ministry of Defence, the services and DPSUs. We start with an honest view of product-market fit: what the forces will actually buy, under which category, and on what timeline.",
    approach: [
      {
        title: "Defence market entry",
        text: "Build a sequenced roadmap for Army, Navy, Air Force or MHA — including who decides, who evaluates and who pays.",
      },
      {
        title: "Technology readiness",
        text: "Audit TRL, IP and military applicability so the company knows the gap between a commercial product and a defence-grade system.",
      },
      {
        title: "Policy and regulation",
        text: "Translate indigenisation norms, offset obligations and current procurement policy into decisions leadership can act on.",
      },
    ],
    image: "/images/capability-strategy.jpg",
    alt: "Leadership team in a strategy session for defence market entry",
  },
  {
    number: "02",
    slug: "product-positioning",
    title: "Product Positioning",
    short: "Map the product to how the forces actually buy.",
    summary:
      "Commercial products rarely meet military specifications without repositioning. We align systems to GSQRs, trial pathways and the way evaluators read a capability.",
    body: "The gap between a working prototype and a force-accepted system is where most defence ambitions stall. Trugro maps products to General Staff Qualitative Requirements, prepares teams for trials and evaluation, and guides the military-grade adaptations that procurement actually demands — interoperability, environmental qualification, and a value proposition the user community will recognise.",
    approach: [
      {
        title: "GSQR and specification mapping",
        text: "Place the product against published and emerging requirements so positioning is evidence, not aspiration.",
      },
      {
        title: "Trial and evaluation preparation",
        text: "Prepare the company for unit-level demonstrations, user feedback cycles and the questions evaluators will ask.",
      },
      {
        title: "Military-grade adaptation",
        text: "Identify what must change in form, fit, function and documentation to meet defence QA and interoperability demands.",
      },
    ],
    image: "/images/capability-technology.jpg",
    alt: "Systems environment used to position products for military evaluation",
  },
  {
    number: "03",
    slug: "procurement-strategy",
    title: "Procurement Strategy",
    short: "Navigate the categories that turn interest into orders.",
    summary:
      "We guide clients through RFP and RFI processes, iDEX and MAKE routes, and the compliance and certification work that sits between a trial and a contract.",
    body: "Defence procurement is a sequence, not a single meeting. Trugro helps clients choose the right entry category — iDEX, MAKE-I/II, Buy Indian–IDDM and related routes — then stay with them through DGQA and DGAQA processes, EMI/EMC and environmental testing, TEC and staff evaluation, and price negotiation. The work is operational: papers, protocols, indigenous-content norms and the cadence of the committees that decide.",
    approach: [
      {
        title: "RFP and RFI navigation",
        text: "Read the requirement, shape the response, and keep the company coherent through evaluation queries.",
      },
      {
        title: "iDEX and MAKE support",
        text: "Position innovation programmes and MAKE projects so they are more than a grant — they are a path to induction.",
      },
      {
        title: "Compliance and certification",
        text: "Guide DGQA/DGAQA, environmental and EMI/EMC testing, and indigenous content so certification is planned, not improvised.",
      },
    ],
    image: "/images/capability-risk.jpg",
    alt: "Controlled operations setting representing certification and procurement",
  },
  {
    number: "04",
    slug: "business-development",
    title: "Business Development",
    short: "Relationships that make a product visible to decision-makers.",
    summary:
      "Without trusted access across MoD, DPSUs and OEMs, even strong products remain invisible. We open the right rooms and stay through the order pipeline.",
    body: "Trugro was built to close a network gap. We introduce technology companies to the OEM, DPSU and service stakeholders who shape requirements and programmes, represent clients at defence expos, and help build a long-term order pipeline rather than a single meeting. For foreign OEMs, that includes Make in India partnerships and offset obligations; for Indian firms, it is a path from first conversation to sustained presence.",
    approach: [
      {
        title: "OEM and DPSU partnerships",
        text: "Identify and pursue the industrial relationships that carry a product into a platform or a programme.",
      },
      {
        title: "Defence expo representation",
        text: "Put the company in front of the right visitors — and convert the booth into follow-up that survives the show.",
      },
      {
        title: "Long-term order pipeline",
        text: "Treat each engagement as the start of a multi-year relationship with the user, not a one-off pitch.",
      },
    ],
    image: "/images/capability-people.jpg",
    alt: "Advisors in discussion representing OEM, DPSU and service partnerships",
  },
];

export const industries: Industry[] = [
  {
    slug: "uav-cuas",
    title: "UAV / CUAS",
    short: "Drone, counter-drone, surveillance, strike and swarm.",
    summary:
      "Unmanned aerial systems and counter-UAS — from ISR and strike to swarm operations and the defences that defeat them.",
    body: "India’s services are absorbing unmanned systems faster than most commercial drone companies are prepared for. Trugro works with UAV and CUAS teams on mission fit, GSQR alignment, trial pathways and the industrial partnerships required to move from demonstration to induction — covering surveillance, strike, swarm operations and counter-drone architectures.",
    issues: [
      "Surveillance and strike mission fit",
      "Swarm operations and autonomy",
      "Counter-drone architectures",
      "Trial, certification and induction pathways",
    ],
    image: "/images/industry-manufacturing.jpg",
    alt: "Industrial production floor representing UAV and counter-UAS manufacturing",
  },
  {
    slug: "micro-nano-satellite",
    title: "Micro & Nano Satellite",
    short: "Space-based ISR, comms payloads and constellation support.",
    summary:
      "Small-satellite programmes for ISR, communications payloads and the constellation support the forces increasingly expect.",
    body: "Space is no longer adjacent to defence — it is a theatre. Trugro helps micro and nano satellite teams position ISR and communications payloads for Indian requirements, navigate procurement categories, and build the industrial and user relationships that turn a constellation concept into a programme the services can use.",
    issues: [
      "Space-based ISR payloads",
      "Secure communications in orbit",
      "Constellation support and ground segment",
      "Make in India and programme entry",
    ],
    image: "/images/industry-technology.jpg",
    alt: "Technology infrastructure representing micro and nano satellite programmes",
  },
  {
    slug: "combat-platforms",
    title: "Combat Platforms",
    short: "Armoured and strike vehicles, and the subsystems they carry.",
    summary:
      "Armoured vehicles, strike vehicles and the subsystem integration that turns a hull into a fighting system.",
    body: "Combat platforms are where mobility, protection, ISR and strike have to coexist. Trugro partners with manufacturers on requirements, integration logic and procurement strategy — from conceptualising a platform that combines surveillance and firepower to guiding the industrial and evaluation path that follows.",
    issues: [
      "Armoured and strike vehicle concepts",
      "Subsystem and sensor integration",
      "ISR-plus-strike architectures",
      "User requirements and procurement categories",
    ],
    image: "/images/capability-operations.jpg",
    alt: "Manufacturing operations representing combat platform integration",
  },
  {
    slug: "rcws-electro-optics",
    title: "RCWS / Electro-Optics",
    short: "Remote weapon stations, firepower and electro-optic suites.",
    summary:
      "Remote-controlled weapon stations, firepower packages and electro-optics for platforms that must see and engage at range.",
    body: "Remote weapon stations and electro-optic suites sit at the intersection of sensors, fire control and platform integration. Trugro helps companies position RCWS and EO systems against service requirements, prepare for trials, and build the OEM relationships that place a suite onto a vehicle, vessel or static post.",
    issues: [
      "Remote-controlled weapon stations",
      "Fire control and engagement logic",
      "Electro-optic sensing and targeting",
      "Platform integration with OEMs",
    ],
    image: "/images/capability-technology.jpg",
    alt: "Sensor and systems environment representing remote weapon stations and electro-optics",
  },
  {
    slug: "quantum",
    title: "Quantum Computing",
    short: "QRNG, cryptography, sensing and secure communications.",
    summary:
      "Quantum-ready capabilities — random number generation, cryptography, sensing and communications the forces can actually field.",
    body: "Quantum is moving from laboratory language into defence programmes. Trugro works with teams building QRNG, cryptography, quantum sensing and secure communications to define defence use-cases, productise for military environments, and place the work on a procurement path — including data-processing applications on large mission datasets.",
    issues: [
      "QRNG and cryptographic applications",
      "Quantum sensing",
      "Secure communications",
      "Defence-grade data processing",
    ],
    image: "/images/capability-data.jpg",
    alt: "Data environment representing quantum sensing, cryptography and secure analytics",
  },
  {
    slug: "directed-energy",
    title: "Directed Energy Weapons",
    short: "High-energy lasers and high-power microwaves.",
    summary:
      "Directed-energy programmes — high-energy lasers and high-power microwaves — from technology readiness to user engagement.",
    body: "Directed energy is among the most demanding deep-tech domains in the Indian defence pipeline. Trugro helps companies assess technology readiness, map service interest, and navigate the long evaluation and certification path that high-energy laser and high-power microwave systems require before they become programmes.",
    issues: [
      "High-energy laser systems",
      "High-power microwave applications",
      "Technology readiness and trials",
      "Policy, safety and programme positioning",
    ],
    image: "/images/industry-energy.jpg",
    alt: "High-energy industrial setting representing directed energy programmes",
  },
];

export const insights: Insight[] = [
  {
    slug: "ai-system-for-ci-ct-operations",
    category: "AI / Defence Tech",
    title: "AI system for CI / CT operations",
    dek: "From use-case definition to GSQR alignment: positioning an AI-enabled system for counter-insurgency and counter-terrorism missions.",
    date: "March 2026",
    dateISO: "2026-03-01",
    read: "7 min",
    image: "/images/insight-ai.jpg",
    alt: "Control-room environment representing AI systems for CI and CT operations",
    pullQuote:
      "An AI system does not enter service because it is impressive. It enters because the use-case, the GSQR and the user are the same conversation.",
    body: [
      "Counter-insurgency and counter-terrorism missions punish products that were designed for a generic “defence AI” slide. The operating environment is time-constrained, data-messy and politically unforgiving. Trugro worked with a technology team to define the missions the system was actually for — then to align that definition with how the forces write requirements and evaluate new capability.",
      "The engagement ran from use-case definition through GSQR alignment and stakeholder engagement. The work was not a model bake-off. It was a translation: what the algorithm could do, what the operator needed in the field, and what a qualitative requirement would have to say for the system to be evaluable.",
      "For companies bringing AI into the Indian defence ecosystem, the lesson is structural. Intelligence has to be productised against a named mission, a named user and a named procurement path. Without that, even strong models remain demonstrations.",
    ],
  },
  {
    slug: "combat-platform-isr-strike",
    category: "Defence Equipment",
    title: "Combat platform — ISR and strike",
    dek: "Partnering with a manufacturer to conceptualise a platform that combines surveillance and firepower — then guiding requirements, integration and procurement.",
    date: "February 2026",
    dateISO: "2026-02-01",
    read: "6 min",
    image: "/images/case-operations.jpg",
    alt: "Production hall representing combat platform ISR and strike integration",
    pullQuote:
      "A hull is not a combat system until sensing, strike and the procurement category are designed as one.",
    body: [
      "Indian manufacturers often have the industrial capacity to build vehicles. Fewer have a clear view of how the services will ask those vehicles to see, decide and engage. Trugro partnered with a manufacturer to conceptualise a combat platform that integrated surveillance and strike — not as afterthoughts bolted to a chassis, but as the reason the platform exists.",
      "The work covered requirements, subsystem integration logic and the procurement path that would follow. Combat platforms fail in the gaps between OEM, sensor vendor and user. Closing those gaps early is cheaper than discovering them in a trial.",
      "For industrial companies entering defence manufacturing, platform work is strategy. It decides which partners you need, which certifications you chase, and which service you are actually building for.",
    ],
  },
  {
    slug: "secure-lifi-indian-army",
    category: "LiFi Communications",
    title: "Secure LiFi for the Indian Army",
    dek: "An EW-resilient optical wireless solution for tactical environments — use-case validation, productisation and the trial pathway.",
    date: "January 2026",
    dateISO: "2026-01-01",
    read: "6 min",
    image: "/images/insight-strategy.jpg",
    alt: "Strategic working environment representing secure tactical communications",
    pullQuote:
      "In an electronic-warfare environment, the communications path is part of the fight. Optical wireless has to earn its place in tactics, not just in a lab.",
    body: [
      "Tactical communications that assume a clean RF environment do not survive contact with electronic warfare. Trugro advised on an EW-resilient optical wireless — LiFi — solution intended for Indian Army tactical environments.",
      "The engagement covered use-case validation with the operating context in mind, productisation for field conditions, and a trial pathway the user community could actually run. The question was never whether light can carry data. It was whether a formation can use it under constraint, and how that capability should be written, trialled and procured.",
      "Deep-tech communications enter service the same way every other system does: through a named mission, a prepared trial and a category that can carry an order.",
    ],
  },
  {
    slug: "quantum-powered-data-processing",
    category: "Quantum Computing",
    title: "Quantum-powered data processing",
    dek: "Developing a defence-grade processing approach for large mission datasets — faster, more secure analytics where volume and sensitivity collide.",
    date: "December 2025",
    dateISO: "2025-12-01",
    read: "5 min",
    image: "/images/capability-data.jpg",
    alt: "Analytics environment representing defence-grade quantum data processing",
    pullQuote:
      "Quantum in defence is not a research poster. It is a processing problem on datasets the forces already hold.",
    body: [
      "Mission datasets are large, sensitive and increasingly central to how the services see and decide. Trugro is supporting the development of a defence-grade data processing solution that uses quantum techniques for faster, more secure analytics on those datasets.",
      "The work sits at the uncomfortable intersection of laboratory capability and operational need. Productisation means being honest about what quantum methods can do now, what they will do next, and how a defence user should evaluate them without waiting for a perfect machine.",
      "For quantum teams looking at Indian defence, the opening is not a generic “quantum for national security” narrative. It is a specific processing job, a security bar, and a path through requirements and trials.",
    ],
  },
];

export const stats = [
  {
    value: 26,
    prefix: "$",
    suffix: "B+",
    label: "Annual defence budget · 2024",
  },
  {
    value: 75,
    prefix: "",
    suffix: "%",
    label: "Indigenisation target by 2030",
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    label: "iDEX innovation awards issued",
  },
  {
    value: 4,
    prefix: "",
    suffix: "×",
    label: "Defence export growth · 5-yr",
  },
];

export const offices = [
  { city: "Gurugram", line: "National Capital Region" },
  { city: "Bhopal", line: "Central India" },
  { city: "Pune", line: "West" },
  { city: "Mumbai", line: "West" },
  { city: "Hyderabad", line: "South" },
];

export const roles = [
  {
    id: "consultant-defence-strategy",
    title: "Consultant, Defence Strategy",
    location: "Gurugram",
    practice: "Strategic Advisory",
    summary:
      "Help technology companies and industrial groups build defence market-entry roadmaps — product fit, policy and the path to the user.",
  },
  {
    id: "specialist-product-procurement",
    title: "Specialist, Product & Procurement",
    location: "Pune / Hyderabad",
    practice: "Procurement Strategy",
    summary:
      "Guide GSQR mapping, trial preparation, and RFP, iDEX and MAKE navigation. Comfort with both the product and the paper.",
  },
  {
    id: "advisor-tech-ai",
    title: "Advisor, Tech & AI",
    location: "Gurugram / Hyderabad",
    practice: "Product Positioning",
    summary:
      "Work with deep-tech teams — AI, autonomy, sensing, quantum — to productise for military environments and named missions.",
  },
  {
    id: "associate-business-development",
    title: "Associate, Business Development",
    location: "Mumbai / Gurugram",
    practice: "Business Development",
    summary:
      "Build OEM, DPSU and service relationships. Represent clients at expos and keep a long-term order pipeline moving.",
  },
];

export const leaders: Leader[] = [
  {
    initials: "SB",
    name: "Shantanu Bisaria",
    role: "Managing Partner",
    credential: "IMT, Ghaziabad",
  },
  {
    initials: "AT",
    name: "Akhil Tiwari",
    role: "Partner, Tech & AI",
    credential: "IIT, Patna",
  },
  {
    initials: "TM",
    name: "Taruna Malik",
    role: "Partner, Operations",
    credential: "IIM, Calcutta",
  },
  {
    initials: "SK",
    name: "Siddharth Kurrey",
    role: "Partner, Growth & Strategy",
    credential: "ISB, Hyderabad",
  },
  {
    initials: "AG",
    name: "Ameet Gokhale",
    role: "Partner, Customer Engagement",
    credential: "CMA, UK",
  },
  {
    initials: "VS",
    name: "Vikram Singh",
    role: "Partner, Strategic Partnerships",
    credential: "Leeds Business School, UK",
  },
  {
    initials: "JS",
    name: "Jaivardhan S.",
    role: "Partner, Product & Procurement",
    credential: "MIT, USA",
  },
  {
    initials: "AS",
    name: "Col Ashwini Sharma (retd.)",
    role: "Partner, Defence Sales",
    credential: "Indian Army",
  },
  {
    initials: "NG",
    name: "Neha Gupta",
    role: "Leader, Strategy & Corporate Finance",
    credential: "IIM, Ahmedabad",
  },
  {
    initials: "RR",
    name: "Robin R.",
    role: "Leader, Supply Chain & People Performance",
    credential: "",
  },
  {
    initials: "US",
    name: "Col U Shankar (retd.)",
    role: "Leader, Defence Sales",
    credential: "IIM, Lucknow",
  },
  {
    initials: "HP",
    name: "Col Harsh W Pande (retd.)",
    role: "Leader, Policy & Compliances",
    credential: "NMIMS, Mumbai",
  },
];

export const differentiators = [
  {
    number: "01",
    title: "Entrepreneurial DNA",
    text: "Founded by serial entrepreneurs who understand the journey from startup to scale — and the difference between a product and a company the forces can buy from.",
  },
  {
    number: "02",
    title: "Deep defence experience",
    text: "Extensive experience working with the armed forces, DPSUs and defence OEMs. We know how requirements are written, how trials run, and who actually decides.",
  },
  {
    number: "03",
    title: "End-to-end support",
    text: "From product-market fit to a procurement win, we stay through the entire cycle. Advisory that ends at the slide is not the work.",
  },
  {
    number: "04",
    title: "Technology-first approach",
    text: "We understand deep-tech — AI/ML, quantum, UAVs and UUVs, combat platforms, weapon systems and electro-optics — well enough to position it, not merely describe it.",
  },
  {
    number: "05",
    title: "Proven frameworks",
    text: "Battle-tested methodologies for market entry, compliance and partnerships, sequenced from product readiness through contract award.",
  },
];

export const engagementPhases = [
  {
    number: "01",
    title: "Discovery",
    text: "Assess product portfolio, technology readiness and defence market fit.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Build a tailored roadmap for defence sector entry or expansion.",
  },
  {
    number: "03",
    title: "Execution",
    text: "Product refinement, partnership building and procurement positioning.",
  },
  {
    number: "04",
    title: "Scale",
    text: "Ongoing support through trials, orders and long-term defence relationships.",
  },
];

export const clientTypes = [
  {
    title: "Mid-size tech companies",
    text: "Companies with proven products looking to diversify into defence as a new revenue stream.",
  },
  {
    title: "Large enterprises",
    text: "Corporates seeking strategic expansion into India’s defence manufacturing ecosystem.",
  },
  {
    title: "Defence startups",
    text: "Innovative startups with cutting-edge technology needing guidance on sector navigation.",
  },
  {
    title: "Foreign OEMs",
    text: "International companies looking for Make in India partnerships and offset obligations.",
  },
];

export const procurementSteps = [
  {
    number: "01",
    title: "Product readiness",
    text: "Audit existing product, IP and TRL. Identify defence applicability and gaps versus military-grade specifications.",
  },
  {
    number: "02",
    title: "Strategic positioning",
    text: "Map the product to GSQRs and service requirements. Define the value proposition for Army, Navy, Air Force or MHA.",
  },
  {
    number: "03",
    title: "Compliance & certification",
    text: "Guide DGQA / DGAQA processes, environmental and EMI/EMC testing, and indigenous content norms.",
  },
  {
    number: "04",
    title: "User trials & field evaluation",
    text: "Prepare for unit-level user trials, performance demonstrations and feedback cycles with operating formations.",
  },
  {
    number: "05",
    title: "Technical evaluation",
    text: "Support TEC, staff evaluation, GSE and price negotiation committee interactions and evaluation queries.",
  },
  {
    number: "06",
    title: "Procurement & scale",
    text: "Navigate RFP/RFI, iDEX, MAKE-I/II and Buy Indian–IDDM categories. Drive contract award and the order pipeline.",
  },
];

export const nav = {
  primary: [
    { label: "What We Do", href: "/what-we-do", mega: "capabilities" as const },
    { label: "Domains", href: "/domains", mega: "industries" as const },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
  footer: [
    { label: "What We Do", href: "/what-we-do" },
    { label: "Domains", href: "/domains" },
    { label: "Insights", href: "/insights" },
    { label: "About Trugro", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export const faqs = [
  {
    question: "What does Trugro Advisors do?",
    answer:
      "Trugro Advisors LLP is a defence strategy consulting firm. We help technology companies, industrial groups, startups and foreign OEMs enter India’s defence ecosystem — from product readiness and GSQR alignment through procurement and long-term order pipelines.",
  },
  {
    question: "How does defence procurement consulting work in India?",
    answer:
      "We sequence the work: product and TRL audit, GSQR and service positioning, DGQA/DGAQA and EMI/EMC certification, user trials, TEC/GSE/PNC support, then RFP, iDEX, MAKE or Buy Indian–IDDM routes to contract.",
  },
  {
    question: "Which technology domains does Trugro cover?",
    answer:
      "UAV and counter-UAS, micro and nano satellites, combat platforms, remote weapon stations and electro-optics, quantum (QRNG, cryptography, sensing) and directed energy weapons — plus ISR, strike, secure communications, autonomy and armament.",
  },
  {
    question: "Who should work with a defence strategy consultant?",
    answer:
      "Mid-size tech companies diversifying into defence, large enterprises entering defence manufacturing, defence startups that need sector navigation, and foreign OEMs seeking Make in India partnerships and offset support.",
  },
  {
    question: "Where does Trugro operate?",
    answer:
      "Trugro Advisors LLP is based in India, with offices in Gurugram, Bhopal, Pune, Mumbai and Hyderabad. We work with clients nationwide and with international OEMs entering the Indian market.",
  },
  {
    question: "How do I contact Trugro?",
    answer:
      "Write to connect@trugro.in or use the contact form. Tell us about the product, the company, and the service you want to reach.",
  },
];

export function searchContent(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: { type: string; title: string; href: string; text: string }[] =
    [];

  for (const item of capabilities) {
    if (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q)
    ) {
      results.push({
        type: "Capability",
        title: item.title,
        href: `/what-we-do/${item.slug}`,
        text: item.short,
      });
    }
  }

  for (const item of industries) {
    if (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q)
    ) {
      results.push({
        type: "Domain",
        title: item.title,
        href: `/domains/${item.slug}`,
        text: item.short,
      });
    }
  }

  for (const item of insights) {
    if (
      item.title.toLowerCase().includes(q) ||
      item.dek.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ) {
      results.push({
        type: "Insight",
        title: item.title,
        href: `/insights/${item.slug}`,
        text: item.dek,
      });
    }
  }

  return results.slice(0, 8);
}

export function getCapability(slug: string) {
  return capabilities.find((item) => item.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}

export function getRelatedInsights(slug: string, count = 2) {
  return insights.filter((item) => item.slug !== slug).slice(0, count);
}
