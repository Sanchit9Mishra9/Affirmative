export type Capability = {
  slug: string;
  title: string;
  heroTitle?: string;
  short: string;
  tagline: string;
  overview: string;
  context: string;
  work: { title: string; text: string }[];
  impact: { title: string; text: string }[];
  image: string;
  alt: string;
};

export type Technology = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string;
  issues: string[];
  image: string;
  alt: string;
  subsections?: { title: string; text: string; points: string[] }[];
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
  tagline: "Building defence enterprise today",
  values: "Growth. Trust. Commitment.",
  email: "connect@trugro.in",
  descriptor: "Defence strategy consulting",
  url: "https://trugro.in",
};

export const impactStats = [
  { value: "3", label: "countries served" },
  { value: "3", label: "of top defence companies served" },
  { value: "10+", label: "A & D experts" },
];

export const capabilities: Capability[] = [
  {
    slug: "aftermarket-and-services",
    title: "Aftermarket & Services",
    short:
      "Trugro Advisors helps defence enterprises unlock long-term, high-margin value by capturing the extensive aftermarket potential across armed forces platforms. By conducting installed base assessments across military assets and DPSU programs, the firm identifies lifecycle replacement opportunities, optimizes spares pricing, and streamlines depot-level maintenance and operations.",
    tagline:
      "Unlocking the largest source of recurring value in Indian defence through fleet-wide sustainment, performance logistics, and life-cycle economics",
    overview:
      "Winning a defence procurement contract is only the entry point; the enduring profitability of any defence enterprise lies in post-procurement sustainment. While primary equipment sales face cyclical budget windows, the aftermarket represents an untapped opportunity for Indian manufacturers, DPSUs, and global OEMs. Trugro Advisors helps defence enterprises transition from transactional equipment suppliers into long-term sustainment partners, setting up recurring revenue lines across the complete equipment lifecycle.",
    context:
      "Defence procurement cycles under DAP and Buy (Indian-IDDM) increasingly mandate life-cycle support commitments of up to 10–20 years. Despite this, many defence contractors operate with fragmented supply networks, lack visibility into fleet deployment, and rely on ad-hoc cost-plus pricing that depresses margins. Without a clear roadmap for depot-level maintenance, spares availability, and performance-based contracts, original equipment manufacturers cede critical value back to intermediaries or suffer from prolonged field obsolescence.",
    work: [
      {
        title: "Commercial Strategy & Fleet Monetisation",
        text: "We help defence suppliers define high-margin service menus, implement value-based pricing over standard cost-plus models for spares, and structure multi-year Annual/Comprehensive Maintenance Contracts (AMC/CMC) tailored to Armed Forces and paramilitary operational tempos.",
      },
      {
        title: "Installed Base Diagnostics & Forecasting",
        text: "Utilizing military asset tracking and historical maintenance logs, we construct analytical forecasting models to map the installed base of vehicles, electro-optics, and communication payloads across commands to predict replacement intervals and demand spikes.",
      },
      {
        title: "Sustainment Operations & Supply Chain Optimization",
        text: "We engineer defence supply chains to guarantee operational availability metrics, establish automated regional inventory hubs, and ensure all components adhere to DGQA/DGAQA and indigenous content (IC) compliance.",
      },
      {
        title: "Performance-Based Logistics (PBL) Transition",
        text: "We structure risk-shared contracts aligned with Indian defence procurement guidelines, shifting client models from reactive defect rectification to guaranteed platform uptime and Mission-Capable Rates (MCR).",
      },
    ],
    impact: [
      {
        title: "Challenge",
        text: "A tactical systems manufacturer was consistently generating below-potential.",
      },
      {
        title: "Long-Term Order Pipeline & Lifecycle Scale",
        text: "Driving long-term defence relationships, ongoing field support, and scale beyond initial contract award to sustain continuous platform operations.",
      },
      {
        title: "Quality & Environmental Maintenance Compliance",
        text: "Directing environmental testing and DGQA/DGAQA compliance protocols to maintain military-grade performance across field deployments.",
      },
    ],
    image: "/images/capability-strategy.jpg",
    alt: "Maps, folders and a sustainment roadmap on a defence strategy table",
  },
  {
    slug: "digital-and-analytics",
    title: "Digital & Analytics",
    short:
      "To address the demands of modern multi-domain warfare, Trugro enables clients to build and deploy scalable digital solutions tailored specifically to the defence and aerospace sector. Trugro leverages deep-tech capabilities—including artificial intelligence, machine learning, quantum computing, and secure optical communications—to enhance sensor fusion, ISR data processing, and tactical decision-support systems.",
    tagline:
      "Deploying mission-grade digital architectures, battlefield intelligence, and deep-tech algorithms from tactical edge devices to central command.",
    overview:
      "The modern battlespace is defined by information dominance, sensor-to-shooter latency, and algorithmic autonomy. For technology firms entering the defence arena, the challenge is not just coding software—it is engineering EW-resilient, deterministic, and MIL-STD compliant computational solutions. Trugro Advisors guides deep-tech innovators to translate commercial algorithms into hardened, sovereign capabilities tailored to the Indian Armed Forces.",
    context:
      "Defence operators require autonomous systems that function seamlessly in zero-connectivity and GPS-denied tactical environments. Commercial software often fails military adoption due to high compute overheads, vulnerability to electronic jamming, lack of interoperability, and non-compliance with military data-security protocols. Winning programmes requires a tech-first approach that bridges the gap between lab-level code and field-proven combat algorithms.",
    work: [
      {
        title: "Mission AI & Operational Analytics",
        text: "We guide the development of edge-computing neural networks for automated target recognition (ATR), Counter-Insurgency/Counter-Terrorism (CI/CT) tactical analysis, and multi-sensor intelligence fusion (EO/IR, radar, telemetry).",
      },
      {
        title: "Quantum & Resilient Communications",
        text: "We help clients incorporate Quantum Random Number Generation (QRNG), post-quantum cryptography, and EW-hardened optical/LiFi communication architectures designed for tamper-proof data relay in active electronic warfare zones.",
      },
      {
        title: "Autonomous Swarm & Edge Architecture",
        text: "We design orchestration protocols for heterogeneous UAV/UGV swarms, distributed edge-compute payloads, and AI-enabled Command & Control (C2) operational software.",
      },
      {
        title: "Military Software Assurance & Certification",
        text: "We assist developers in navigating military software standards, cyber-hardening frameworks, and formal vulnerability clearing through Indian military certifying agencies.",
      },
    ],
    impact: [
      {
        title: "AI System for CI / CT Operations",
        text: "Developed and positioned an AI-enabled system for Counter-Insurgency and Counter-Terrorism operational use cases, spanning use-case definition, GSQR alignment, and stakeholder engagement.",
      },
      {
        title: "Quantum-Powered Data Processing",
        text: "Developed a defence-grade data processing solution leveraging quantum techniques to achieve faster, secure analytics on massive mission datasets.",
      },
      {
        title: "Secure LiFi Optical Communications",
        text: "Advised on an EW-resilient optical wireless communication system for Indian Army tactical environments, guiding use-case validation, productization, and field trial pathways.",
      },
    ],
    image: "/images/capability-data.jpg",
    alt: "Secure data hall representing defence-grade digital processing",
  },
  {
    slug: "ma-and-strategic-alliances",
    title: "M&A & Strategic Alliances",
    short:
      "Trugro partners with defence companies and global OEMs to evaluate high-value targets, build strategic joint ventures, and navigate complex post-merger integration. With a deep understanding of Make in India mandates, offset obligations, and Buy (Indian-IDDM) guidelines, the firm identifies capability gaps and structures cross-border technology transfers.",
    tagline:
      "Accelerating strategic market positioning through sovereign JV structuring, technology transfers, and cross-border offset execution.",
    overview:
      "Strategic capital in defence is unlike any other sector—it requires compliance with national security frameworks, industrial licensing, and indigenous content mandates. Whether evaluating targeted acquisitions, structuring consortia for high-value tenders, or monetizing offset obligations, Trugro Advisors provides end-to-end transaction advisory to create long-term strategic value across India’s aerospace and defence industrial base.",
    context:
      "India’s defence modernisation target of 75% indigenisation demands rapid domestic capacity building. Large domestic enterprises and mid-size suppliers need rapid access to proprietary designs and precision manufacturing techniques, while foreign OEMs require certified domestic partners to fulfill Make in India criteria and offset commitments. Mergers and acquisitions without rigorous evaluation of Technical Readiness Levels (TRL) and regulatory clearances risk capital destruction.",
    work: [
      {
        title: "Strategic Target Evaluation & Due Diligence",
        text: "We conduct technology and regulatory due diligence on target firms, evaluating proprietary IP, production capacity, military test certifications, and security clearance status.",
      },
      {
        title: "Make-in-India Consortia Structuring",
        text: "We architect joint ventures and consortium frameworks between Tier-1 prime contractors, MSMEs, and design houses to compete for high-value Buy-Indian-IDDM and Make-I/II tenders.",
      },
      {
        title: "Foreign OEM & Offset Advisory",
        text: "We assist international defence manufacturers in identifying qualified Indian offset partners (IOPs), establishing licensed manufacturing lines, and executing sustainable offset credits.",
      },
      {
        title: "Post-Merger Operational Integration",
        text: "We guide the integration of disparate engineering protocols, consolidate defence production licenses, and align commercial reporting with MoD oversight requirements.",
      },
    ],
    impact: [
      {
        title: "Make-in-India & Offset Partnerships",
        text: "Structuring collaborations between domestic defence firms and foreign OEMs seeking Make-in-India manufacturing routes and offset fulfillment.",
      },
      {
        title: "OEM & DPSU Partnerships",
        text: "Facilitating strategic partnerships with Defence Public Sector Undertakings (DPSUs) and major OEMs to scale production footprints and address joint tenders.",
      },
    ],
    image: "/images/capability-people.jpg",
    alt: "Quiet defence technology expo floor before opening",
  },
  {
    slug: "marketing-and-sales",
    title: "Marketing & Sales",
    short:
      "Bridging the gap between commercial innovators and armed forces decision-makers, Trugro designs targeted go-to-market and sales strategies to win critical defence contracts. Trugro guides clients through every phase of the procurement cycle, from early GSQR alignment and RFI/RFP navigation to formal technical evaluations and price negotiations. By leveraging an extensive institutional network across the Ministry of Defence, service headquarters, and DPSUs, Trugro ensures breakthrough technologies gain the visibility and positioning needed to secure multi-year purchase orders.",
    tagline:
      "Navigating the labyrinth of Indian defence procurement to convert technological innovation into multi-year contract awards.",
    overview:
      "In the defence domain, conventional sales techniques fail. Success demands an in-depth understanding of the Defence Acquisition Procedure (DAP), user trial dynamics, and institutional alignment. Trugro Advisors acts as the strategic growth partner for technology innovators, engineering companies, and foreign primes, systematically positioning products before armed forces decision-makers and turning pipeline opportunities into procurement victories.",
    context:
      "The procurement lifecycle spans 18 to 36 months, passing through Requests for Information (RFI), General Staff Qualitative Requirements (GSQR) formulation, RFP issuance, multi-terrain user trials, and technical evaluation committees. Many companies develop superior military-grade hardware but miss opportunities because they enter the pipeline too late or misread service headquarters requirements. Winning requires deliberate, proactive stakeholder alignment from day zero.",
    work: [
      {
        title: "Institutional Pipeline Navigation",
        text: "We identify early-stage capabilities roadmaps across the Indian Army, Air Force, Navy, and Coast Guard, tracking Expressions of Interest (EoI) and upcoming RFP tenders.",
      },
      {
        title: "GSQR Mapping & Technical Positioning",
        text: "We deconstruct service qualitative requirements, translating customer capability needs into precise technical specifications that showcase client advantages during Staff Evaluations.",
      },
      {
        title: "Expo & Demonstration Strategy",
        text: "We design and lead high-impact technical demonstrations at DefExpo, Aero India, and regional command demonstrations to engage technical directors and field commanders.",
      },
      {
        title: "Tender & Commercial Proposal Architecture",
        text: "We structure compliant, competitive techno-commercial bids that clear Technical Evaluation Committees (TEC) and optimize Price Negotiation Committee (PNC) milestones.",
      },
    ],
    impact: [
      {
        title: "Tender & Acquisition Navigation",
        text: "Navigating RFP/RFI workflows and capital acquisition routes across iDEX, MAKE-I, MAKE-II, and Buy-Indian-IDDM categories.",
      },
      {
        title: "Institutional Representation & Expos",
        text: "Directing client positioning, technical marketing, and representation at major defence expos to build an active, multi-year order book.",
      },
      {
        title: "PNC & Technical Evaluation Support",
        text: "Supporting client engagements across Technical Evaluation Committees (TEC), Staff Evaluations, GSE, and Price Negotiation Committees (PNC).",
      },
    ],
    image: "/images/capability-risk.jpg",
    alt: "Aerospace component under inspection in a certification laboratory",
  },
  {
    slug: "next-generation-productivity",
    title: "Next-Generation Productivity",
    short:
      "Trugro empowers defence manufacturers to engineer tech-enabled capabilities that drive operational efficiency, product robustness, and significant margin expansion. The firm works alongside engineering teams to optimize indigenous content (IC) compliance and align manufacturing workflows with strict military standards. By eliminating development redundancies and accelerating MIL-STD qualification, Trugro ensures that hardware platforms transition smoothly from initial prototypes to scalable serial production.",
    tagline:
      "Engineering design-to-cost, indigenous supply chains, and military-grade manufacturing lines to maximize operational margins.",
    overview:
      "Manufacturing for defence demands a zero-failure rate in extreme operating environments while meeting aggressive indigenisation and pricing expectations. Trugro Advisors partners with corporate manufacturers and dual-use firms to eliminate process waste, navigate MIL-STD qualification, and scale indigenous manufacturing lines to deliver consistent profitability without sacrificing battlefield reliability.",
    context:
      "Defence production cycles are susceptible to severe cost inflation and production bottlenecks caused by unoptimized global supply dependencies, failed environmental qualification tests, and high scrap rates during military hardening. Furthermore, strict indigenisation thresholds under Buy (Indian-IDDM) require companies to manufacture critical sub-components domestically, requiring an agile and resilient domestic Tier-2/Tier-3 supply ecosystem.",
    work: [
      {
        title: "Indigenous Content (IC) Engineering",
        text: "We audit bills of materials (BoM) to eliminate restricted import dependencies, identify domestic alternatives, and achieve over 50%+ indigenous content compliance without performance trade-offs.",
      },
      {
        title: "Military Standard (MIL-STD) Qualification",
        text: "We redesign commercial hardware to pass rigorous MIL-STD-810 (environmental, shock, vibration) and MIL-STD-461 (EMI/EMC) tests on the first iteration, drastically reducing rework costs.",
      },
      {
        title: "Design-to-Value & Manufacturing Flow",
        text: "We implement lean manufacturing and value engineering across combat platform assemblies, composite fabrication, and precision electronic packaging to drive down unit costs.",
      },
      {
        title: "Vendor Ecosystem Development",
        text: "We qualify, audit, and integrate Tier-2 and Tier-3 domestic manufacturing suppliers to build redundant, high-yield supply chains that insulate clients from geopolitical disruption.",
      },
    ],
    impact: [
      {
        title: "Military-Grade Adaptation & Hardening",
        text: "Identifying technical gaps between commercial hardware and military specifications, adapting platforms to clear rigorous military standards.",
      },
      {
        title: "DGQA, DGAQA & EMI/EMC Testing",
        text: "Guiding systems through environmental testing, EMI/EMC compliance, and formal quality certification audits.",
      },
      {
        title: "Indigenous Content (IC) Compliance",
        text: "Structuring manufacturing and component sourcing to satisfy mandated indigenous content norms.",
      },
    ],
    image: "/images/capability-operations.jpg",
    alt: "Armoured vehicle hull on an assembly line during sensor integration",
  },
  {
    slug: "strategy-and-corporate-finance",
    title: "Strategy & Corporate Finance",
    short:
      "Operating in an evolving $26B+ defence modernisation landscape, Trugro provides high-level corporate finance and strategic advisory to help enterprises scale profitably. The firm advises leadership on market entry roadmaps, capital allocation, working capital optimization across long procurement horizons, and securing non-dilutive innovation grants like iDEX, ADITI, and Make-II schemes.",
    tagline:
      "Structuring capital allocation, securing non-dilutive defence grants, and defining entry strategies across a $26B+ sovereign theatre.",
    overview:
      "India’s aerospace and defence sector is experiencing its largest modernisation expansion, driven by record indigenisation mandates and expanding export avenues. Seizing this opportunity requires a clear strategic compass and financial discipline. Trugro Advisors supports boards, investment funds, and corporate executives with the strategic advisory and corporate finance frameworks necessary to unlock enterprise value across this multi-decade investment cycle.",
    context:
      "Entering the defence ecosystem requires patience and calibrated balance-sheet management. Milestone disbursements are tied to technical acceptance and trial validations, creating working-capital strains for companies lacking sector-specific financial strategies. Navigating non-dilutive public grants, specialized defence funds, and bank guarantee mechanisms is essential to scale operations without equity destruction.",
    work: [
      {
        title: "Defence Market Entry Roadmaps",
        text: "We assess corporate portfolios to identify addressable dual-use expansion lanes, projecting capital expenditure, payback horizons, and expected return on capital employed (ROCE).",
      },
      {
        title: "Non-Dilutive Capital & Grant Strategy",
        text: "We lead non-dilutive capital capture through innovation mechanisms including iDEX, ADITI, Technology Development Fund (TDF), and Make-II funding schemes.",
      },
      {
        title: "Working Capital & Milestone Structuring",
        text: "We optimize contract cash flows, draft milestone payment architectures, and manage bank guarantee exposure across long procurement phases.",
      },
      {
        title: "Fundraising & Sovereign Investment Advisory",
        text: "We advise private equity, venture funds, and family offices on investment theses, defence-tech deal evaluation, and sovereign regulatory compliance.",
      },
    ],
    impact: [
      {
        title: "iDEX & Innovation Grant Capture",
        text: "Providing end-to-end support for iDEX and MAKE projects to capture non-dilutive government innovation awards and funding.",
      },
      {
        title: "Defence Market Entry Roadmaps",
        text: "Formulating tailored strategic roadmaps for mid-sized tech companies, large enterprises, and startups entering the $26B+ defence modernisation market.",
      },
    ],
    image: "/images/insight-strategy.jpg",
    alt: "Strategy sketches and programme papers on a consulting table",
  },
  {
    slug: "talent-and-capability-building",
    title: "Talent & Capability Building",
    short:
      "Recognizing that mission success depends on sector-specific knowledge, Trugro assists defence organizations in designing agile organizational structures, establishing mission-driven cultures, and attracting elite cross-domain talent. By integrating seasoned military veterans, technical experts, and compliance leaders into corporate teams, Trugro bridges the operational divide between corporate labs and frontline end-users.",
    tagline:
      "Embedding armed forces operational insight into corporate engineering teams to build a battle-ready institutional culture.",
    overview:
      "The gap between what corporate engineers build and what soldiers require on the front lines can only be bridged by human experience. Advanced technical capability without frontline operational doctrine results in products that fail field deployments. Trugro Advisors builds the organizational architecture, executive leadership, and operational culture required for companies to thrive in mission-critical defence programs.",
    context:
      "Defence engineering demands a unique institutional mindset: adherence to rigid quality protocols, zero tolerance for error, deep familiarity with military protocols, and the ability to interpret service doctrines. Most commercial technology firms lack this specialized DNA, creating communication barriers with military user groups and slowing program delivery.",
    work: [
      {
        title: "Operational Doctrine & Field Alignment",
        text: "We integrate veteran military operators directly into client engineering teams to align system ergonomics, user interfaces, and maintenance access with field realities.",
      },
      {
        title: "Defence Executive & Specialist Sourcing",
        text: "We identify, evaluate, and recruit strategic leadership—including veteran sales directors, quality assurance leads, and regulatory affairs specialists.",
      },
      {
        title: "Security & Quality Culture Design",
        text: "We establish organizational processes to enforce secure data handling, information compartmentalization, and defence-grade quality assurance culture.",
      },
      {
        title: "Capability Workshops & Trial Readiness",
        text: "We train commercial sales, product, and engineering teams on military terminology, trial conduct, protocol compliance, and formal interactions with armed forces boards.",
      },
    ],
    impact: [
      {
        title: "Cross-Domain Leadership Integration",
        text: "Integrating experienced retired armed forces officers (Indian Army veterans) and domain operators directly into client product-market strategies.",
      },
      {
        title: "Trial & Operational Protocol Coaching",
        text: "Coaching civilian engineering and leadership teams on armed forces evaluation expectations, user trial protocols, and operating formation feedback cycles.",
      },
    ],
    image: "/images/careers.jpg",
    alt: "Consultants walking through a contemporary office atrium",
  },
  {
    slug: "transformation",
    title: "Transformation",
    heroTitle: "Enterprise Transformation",
    short:
      "Trugro drives holistic enterprise turnarounds, guiding dual-use technology firms, startups, and mid-sized enterprises through the comprehensive transformation into institutionalized defence contractors. Through targeted interventions across technology readiness levels (TRL), quality assurance certifications (DGQA/DGAQA), and field-trial preparations, Trugro changes performance trajectories.",
    tagline:
      "Guiding commercial technology and manufacturing firms through full-scale transformation into prime sovereign defence contractors.",
    overview:
      "Transitioning from a commercial business or early-stage startup into an institutional defence player requires more than winning a single project—it requires a complete enterprise transformation. Trugro Advisors provides end-to-end, multi-year transformation advisory, upgrading technical readiness, operational processes, and governance standards to build sustainable, scalable defence enterprises.",
    context:
      "Many innovative companies enter the defence sector through small pilot projects or innovation challenges but fail to scale into Tier-1 prime contractors. The barriers are structural: an inability to navigate production volume ramps, inadequate compliance with national security guidelines, and an absence of formal governance needed to manage multi-crore military delivery programs.",
    work: [
      {
        title: "Full-Scale Operating Model Redesign",
        text: "We re-architect corporate structures to separate commercial and defence verticals, ensuring strict regulatory compliance, dedicated facility controls, and optimal resource allocation.",
      },
      {
        title: "TRL-to-MRL Advancement",
        text: "We manage the systematic advancement of platforms through Technology Readiness Levels and Manufacturing Readiness Levels (MRL), bridging the gap between bench prototypes and serial production lines.",
      },
      {
        title: "Statutory Compliance & Certification Turnaround",
        text: "We overhaul organizational workflows to secure critical defence production licenses (DPL), facility security clearances, and DGQA/DGAQA green-channel qualifications.",
      },
      {
        title: "Enterprise Risk Management & Program Governance",
        text: "We implement project management systems capable of tracking complex deliverables across extended military development and procurement timelines.",
      },
    ],
    impact: [
      {
        title: "Combat Platform Conceptualisation (ISR + Strike)",
        text: "Partnered with a defence equipment manufacturer to conceptualise a combat platform integrating surveillance and strike capabilities, managing requirements definition, systems integration, and procurement positioning.",
      },
      {
        title: "Full-Cycle Readiness Turnaround",
        text: "Transitioning dual-use and commercial technology enterprises through a four-phase model—Discovery, Strategy, Execution, and Scale—from product-readiness auditing to successful procurement wins.",
      },
    ],
    image: "/images/about.jpg",
    alt: "Quiet contemporary interior for transformation work with leadership",
  },
];

export const technologies: Technology[] = [
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
    alt: "Reconnaissance UAV with an ISR camera gimbal on a quiet airfield",
  },
  {
    slug: "satellite",
    title: "Satellite",
    short: "Space-based ISR, communications payloads and constellation support.",
    summary:
      "Satellite programmes for ISR, communications payloads and the constellation support the forces increasingly expect — spanning micro and nano classes.",
    body: "Space is no longer adjacent to defence — it is a theatre. Trugro helps satellite teams position ISR and communications payloads for Indian requirements, navigate procurement categories, and build the industrial and user relationships that turn a constellation concept into a programme the services can use.",
    issues: [
      "Space-based ISR payloads",
      "Secure communications in orbit",
      "Constellation support and ground segment",
      "Make in India and programme entry",
    ],
    image: "/images/industry-technology.jpg",
    alt: "Satellite in a clean room during payload integration",
    subsections: [
      {
        title: "Micro Satellite",
        text: "Micro-class platforms carry the ISR and communications payloads that services can actually task. Trugro positions micro satellite teams against Indian requirements, procurement categories and the industrial partnerships that turn a bus into a programme.",
        points: [
          "Space-based ISR payloads",
          "Make in India and programme entry",
          "Ground segment and tasking logic",
        ],
      },
      {
        title: "Nano Satellite",
        text: "Nano-class spacecraft and proliferated constellations change how the forces think about persistence and resilience in orbit. Trugro helps nano satellite teams productise secure communications, constellation support and the evaluation path that follows.",
        points: [
          "Secure communications in orbit",
          "Constellation support and ground segment",
          "Rapid demonstration to induction pathways",
        ],
      },
    ],
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
    alt: "Armoured vehicle hull on an assembly line during sensor integration",
  },
  {
    slug: "rcws",
    title: "RCWS",
    short: "Remote weapon stations and fire-control packages for platforms.",
    summary:
      "Remote-controlled weapon stations and firepower packages for platforms that must engage at range.",
    body: "Remote-controlled weapon stations sit at the intersection of sensors, fire control and platform integration. Trugro helps companies position RCWS systems against service requirements, prepare for trials, and build the OEM relationships that place a station onto a vehicle, vessel or static post.",
    issues: [
      "Remote-controlled weapon stations",
      "Fire control and engagement logic",
      "Platform integration with OEMs",
      "Trials, certification and user evaluation",
    ],
    image: "/images/domain-rcws.jpg",
    alt: "Remote weapon station optics on a workshop test stand",
  },
  {
    slug: "electro-optics",
    title: "Electro-Optics",
    short: "Electro-optic sensing, targeting and fire-control suites.",
    summary:
      "Electro-optic suites for platforms that must see and designate at range — sensing, targeting and integration.",
    body: "Electro-optic suites determine whether a platform can see, decide and designate under constraint. Trugro helps companies position EO and IR systems against Indian service requirements, prepare for environmental and user trials, and build the OEM relationships that place a suite onto a vehicle, vessel, UAV or static post.",
    issues: [
      "Electro-optic sensing and targeting",
      "Thermal, day-sight and laser packages",
      "Platform integration with OEMs",
      "Environmental qualification and user trials",
    ],
    image: "/images/capability-technology.jpg",
    alt: "Electro-optic sensor on a laboratory bench for military-spec product work",
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
    alt: "Quantum optics laboratory with an optical table and cryostat",
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
    alt: "High-power laser research bench with an enclosed beam path",
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
    alt: "Intelligence fusion room with map screens for situational awareness",
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
    alt: "Combat vehicle sensor mast being fitted in a factory bay",
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
    alt: "Optical wireless LiFi transceivers on a laboratory bench",
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
    image: "/images/insight-quantum.jpg",
    alt: "Secure data hall representing defence-grade processing",
    pullQuote:
      "Quantum in defence is not a research poster. It is a processing problem on datasets the forces already hold.",
    body: [
      "Mission datasets are large, sensitive and increasingly central to how the services see and decide. Trugro is supporting the development of a defence-grade data processing solution that uses quantum techniques for faster, more secure analytics on those datasets.",
      "The work sits at the uncomfortable intersection of laboratory capability and operational need. Productisation means being honest about what quantum methods can do now, what they will do next, and how a defence user should evaluate them without waiting for a perfect machine.",
      "For quantum teams looking at Indian defence, the opening is not a generic “quantum for national security” narrative. It is a specific processing job, a security bar, and a path through requirements and trials.",
    ],
  },
];

export const carousel = [
  {
    id: "capability",
    label: "Capability",
    kicker: "How we help clients",
    title: "Capabilities that take products into the forces",
    dek: "Aftermarket, digital, alliances, marketing, productivity, strategy, talent and transformation — each a dedicated practice.",
    href: "/capabilities",
    cta: "Explore capabilities",
    image: "/images/hero-india-gate.jpg",
    alt: "Kartavya Path looking toward India Gate at dusk",
  },
  {
    id: "partners",
    label: "Partners",
    kicker: "The firm",
    title: "Partners who have sat in the rooms that decide",
    dek: "Entrepreneurs, veterans and technocrats across strategy, technology, operations, finance and defence sales.",
    href: "/partners",
    cta: "Meet our partners",
    image: "/images/careers.jpg",
    alt: "Trugro partners in a contemporary atrium",
  },
  {
    id: "insight",
    label: "Insight",
    kicker: "Our insights",
    title: "Defence engagements and what they teach",
    dek: "Selected work on AI for CI/CT, combat platforms, secure LiFi and quantum data processing.",
    href: "/insights",
    cta: "Read insights",
    image: "/images/insight-ai.jpg",
    alt: "Intelligence fusion room with map screens",
  },
  {
    id: "services",
    label: "Services",
    kicker: "What we do",
    title: "From product readiness to procurement",
    dek: "The operating sequence that takes a defence-ready product from TRL audit through certification, trials and contract award.",
    href: "/what-we-do",
    cta: "Explore services",
    image: "/images/capability-risk.jpg",
    alt: "Aerospace component under inspection in a certification laboratory",
  },
  {
    id: "podcast",
    label: "Podcast",
    kicker: "Trugro Podcast",
    title: "Conversations on building defence enterprises",
    dek: "A forthcoming series with operators, founders and veterans. The first episodes are in production.",
    href: "/podcast",
    cta: "Coming soon",
    image: "/images/perspective-dark.jpg",
    alt: "Quiet editorial interior for recorded conversations",
    soon: true,
  },
  {
    id: "connect",
    label: "Connect",
    kicker: "Connect with us",
    title: "Tell us about the product and the service you want to reach",
    dek: "Write to the partners who will stay through trials, evaluation and the order pipeline.",
    href: "/contact",
    cta: "Connect with us",
    image: "/images/contact.jpg",
    alt: "Empty conference room overlooking the city at dusk",
  },
];

export const offices = [
  { city: "Gurugram", line: "National Capital Region", lat: 28.46, lon: 77.03 },
  { city: "Bhopal", line: "Central India", lat: 23.26, lon: 77.41 },
  { city: "Pune", line: "West", lat: 18.52, lon: 73.86 },
  { city: "Mumbai", line: "West", lat: 19.08, lon: 72.88 },
  { city: "Hyderabad", line: "South", lat: 17.39, lon: 78.49 },
];

export const roles = [
  {
    id: "consultant-defence-strategy",
    title: "Consultant, Defence Strategy",
    location: "Gurugram",
    practice: "Strategy & Corporate Finance",
    summary:
      "Help technology companies and industrial groups build defence market-entry roadmaps — product fit, policy and the path to the user.",
  },
  {
    id: "specialist-product-procurement",
    title: "Specialist, Product & Procurement",
    location: "Pune / Hyderabad",
    practice: "Marketing & Sales",
    summary:
      "Guide GSQR mapping, trial preparation, and RFP, iDEX and MAKE navigation. Comfort with both the product and the paper.",
  },
  {
    id: "advisor-tech-ai",
    title: "Advisor, Tech & AI",
    location: "Gurugram / Hyderabad",
    practice: "Digital & Analytics",
    summary:
      "Work with deep-tech teams — AI, autonomy, sensing, quantum — to productise for military environments and named missions.",
  },
  {
    id: "associate-business-development",
    title: "Associate, Business Development",
    location: "Mumbai / Gurugram",
    practice: "M&A & Strategic Alliances",
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
    title: "Entrepreneurial DNA",
    text: "Founded by serial entrepreneurs who understand the journey from startup to scale — and the difference between a product and a company the forces can buy from.",
  },
  {
    title: "Deep defence experience",
    text: "Extensive experience working with the armed forces, DPSUs and defence OEMs. We know how requirements are written, how trials run, and who actually decides.",
  },
  {
    title: "End-to-end support",
    text: "From product-market fit to a procurement win, we stay through the entire cycle. Advisory that ends at the slide is not the work.",
  },
  {
    title: "Technology-first approach",
    text: "We understand deep-tech — AI/ML, quantum, UAVs and UUVs, combat platforms, weapon systems and electro-optics — well enough to position it, not merely describe it.",
  },
  {
    title: "Proven frameworks",
    text: "Battle-tested methodologies for market entry, compliance and partnerships, sequenced from Product Readiness through contract award.",
  },
];

export const engagementPhases = [
  {
    title: "Discovery",
    text: "Assess product portfolio, technology readiness and defence market fit.",
  },
  {
    title: "Strategy",
    text: "Build a tailored roadmap for defence sector entry or expansion.",
  },
  {
    title: "Execution",
    text: "Product refinement, partnership building and procurement positioning.",
  },
  {
    title: "Scale",
    text: "Ongoing support through trials, orders and long-term defence relationships.",
  },
];

export const clientTypes = [
  {
    title: "Mid-size tech companies",
    mark: "MT",
    text: "Companies with proven products looking to diversify into defence as a new revenue stream.",
  },
  {
    title: "Large enterprises",
    mark: "LE",
    text: "Corporates seeking strategic expansion into India’s defence manufacturing ecosystem.",
  },
  {
    title: "Defence startups",
    mark: "DS",
    text: "Innovative startups with cutting-edge technology needing guidance on sector navigation.",
  },
  {
    title: "Foreign OEMs",
    mark: "FO",
    text: "International companies looking for Make in India partnerships and offset obligations.",
  },
];

export const procurementSteps = [
  {
    title: "Product Readiness",
    text: "Audit existing product, IP and TRL. Identify defence applicability and gaps versus military-grade specifications.",
  },
  {
    title: "Strategic Positioning",
    text: "Map the product to GSQRs and service requirements. Define the value proposition for Army, Navy, Air Force or MHA.",
  },
  {
    title: "Compliance & Certification",
    text: "Guide DGQA / DGAQA processes, environmental and EMI/EMC testing, and indigenous content norms.",
  },
  {
    title: "User Trials & Field Evaluation",
    text: "Prepare for unit-level user trials, performance demonstrations and feedback cycles with operating formations.",
  },
  {
    title: "Technical Evaluation",
    text: "Support TEC, staff evaluation, GSE and price negotiation committee interactions and evaluation queries.",
  },
  {
    title: "Procurement & Scale",
    text: "Navigate RFP/RFI, iDEX, MAKE-I/II and Buy Indian–IDDM categories. Drive contract award and the order pipeline.",
  },
];

export const nav = {
  menu: [
    { label: "Capabilities", href: "/capabilities", children: "capabilities" as const },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Technology", href: "/technology", children: "technologies" as const },
    { label: "Our Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
    { label: "About Us", href: "/about" },
    { label: "Trugro Blog", href: "/blog", soon: true },
    { label: "Trugro Podcast", href: "/podcast", soon: true },
  ],
  footer: [
    { label: "What We Do", href: "/what-we-do" },
    { label: "Technology", href: "/technology" },
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
    question: "Which technologies does Trugro cover?",
    answer:
      "UAV and counter-UAS, satellite (micro and nano), combat platforms, remote weapon stations, electro-optics, quantum (QRNG, cryptography, sensing) and directed energy weapons — plus ISR, strike, secure communications, autonomy and armament.",
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
      item.short.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q)
    ) {
      results.push({
        type: "Capability",
        title: item.title,
        href: `/capabilities/${item.slug}`,
        text: item.short,
      });
    }
  }

  for (const item of technologies) {
    if (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q)
    ) {
      results.push({
        type: "Technology",
        title: item.title,
        href: `/technology/${item.slug}`,
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

  for (const person of leaders) {
    if (
      person.name.toLowerCase().includes(q) ||
      person.role.toLowerCase().includes(q)
    ) {
      results.push({
        type: "Partner",
        title: person.name,
        href: "/partners",
        text: person.role,
      });
    }
  }

  return results.slice(0, 8);
}

export function capabilityExcerpt(text: string) {
  const sentence = text.split(/(?<=\.)\s/)[0]?.trim() || text;
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

export function getCapability(slug: string) {
  return capabilities.find((item) => item.slug === slug);
}

export function getTechnology(slug: string) {
  return technologies.find((item) => item.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}

export function getRelatedInsights(slug: string, count = 2) {
  return insights.filter((item) => item.slug !== slug).slice(0, count);
}
