import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Nav Link
export interface LinkItem {
  id?: string;
  link: string;
  name: string;
  icons?: string;
  subLinks?: LinkItem[];
}

export const navLinkItems: LinkItem[] = [
  {
    link: "/industries",
    name: "Industries",
    subLinks: [
      {
        id: "aerospace",
        link: "/industries",
        name: "Aerospace & Defence",
        icons: "/navbar/aerospace.webp",
      },

      {
        id: "healthcare",
        link: "/industries",
        name: "Health Care",
        icons: "/navbar/healthcare.webp",
      },

      {
        id: "finance",
        link: "/industries",
        name: "Finance",
        icons: "/navbar/financial.webp",
      },

      {
        id: "travel",
        link: "/industries",
        name: "Travel & Hospitality",
        icons: "/navbar/travel-agent.webp",
      },
      {
        id: "government",
        link: "/industries",
        name: "Government",
        icons: "/navbar/government.webp",
      },
    ],
  },
  {
    link: "/services",
    name: "Services",
    subLinks: [
      {
        id: "consulting",
        link: "/services",
        name: "Consulting & Management",
        icons: "/services/consulting.webp",
      },
      {
        id: "technology",
        link: "/services",
        name: "Technology",
        icons: "/services/technology.webp",
      },
      {
        id: "manufacturing",
        link: "/services",
        name: "Manufacturing",
        icons: "/services/manufacturing.webp",
      },
    ],
  },
  {
    link: "/solutions",
    name: "Solutions",
    subLinks: [
      {
        id: "solutions",
        link: "/solutions",
        name: "Solutions",
      },
      {
        id: "projects",
        link: "/solutions",
        name: "Projects",
      },
    ],
  },

  {
    link: "/about",
    name: "About",
  },
];

// Team Expert
export interface IteamExpert {
  post: string;
  name: string;
  img: string;
}
export const teamExpertList: IteamExpert[] = [
  {
    post: "CEO and Managing Director",
    name: "Shantanu Bisaria",
    img: "/team-expert1.webp",
  },

  {
    post: "Chief Technology Officer",
    name: "Akhil Tiwari",
    img: "/team-expert2.webp",
  },

  {
    post: "Chief Financial Officer",
    name: "Shashank Bangad",
    img: "/team-expert3.webp",
  },
  {
    post: "Director, Government Business",
    name: "Shivam Tripathi",
    img: "/team-expert4.webp",
  },
  {
    post: "Director, Customer Success",
    name: "Ritik Batham",
    img: "/team-expert5.webp",
  },
  {
    post: "Director, Stategic Business",
    name: "Siddharth Kurrey",
    img: "/team-expert6.webp",
  },
];

// FAQ
export interface IFaq {
  question: string;
  answer: string;
}

export const faqList: IFaq[] = [
  {
    question: "Where can i get analytics help?",
    answer:
      "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },
  {
    question: "How much does data analytics cost?",
    answer:
      "Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },

  {
    question: "What kind of data is needed for analytics?",
    answer:
      "Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },
  {
    question: "How do i pay for your services?",
    answer:
      "Sennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },
];

// Latest Project
export interface ILatestProject {
  img: string;
  category: string;
  title: string;
}

export const latestProjectList: ILatestProject[] = [
  {
    img: "/latest-project1.webp",
    category: "Consulting,Recruitment",
    title: "Coping under the current climate",
  },
  {
    img: "/latest-project2.webp",
    category: "Consulting,Recruitment",
    title: "Purpose Driven Eployers Succeed",
  },
  {
    img: "/latest-project3.webp",
    category: "Consulting,Recruitment",
    title: "Share Statics with Team Leader",
  },
  {
    img: "/latest-project4.webp",
    category: "Consulting,Recruitment",
    title: "Nifty Team Responds After Crisis",
  },
];

// Blogs

export interface IBlog {
  img: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  link?: string;
}

export const blogList: IBlog[] = [
  {
    img: "/blog-page1.webp",
    title: "How to improve your business growth",
    desc: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now ",
    author: "Alex Maxwel",
    date: "April 15, 2023",
    link: "/blog",
  },
  {
    img: "/blog-page2.webp",
    title: "What is the future of business in 2024",
    desc: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    author: "Bikash Kumar",
    date: "March 23, 2023",
    link: "/blog",
  },
  {
    img: "/blog-page3.webp",
    title: "How to improve your business growth",
    desc: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    author: "Alex Maxwel",
    date: "April 15, 2023",
    link: "/blog",
  },
  {
    img: "/blog-page3.webp",
    title: "How to improve your business growth",
    desc: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    author: "Alex Maxwel",
    date: "April 15, 2023",
    link: "/blog",
  },
];

// Industries

export interface IDisplayDataCard {
  img: string;
  title: string;
  desc: string;
  subheading: string;
  id: string;
  readMore?: string;
}

export const industryList: IDisplayDataCard[] = [
  {
    id: "aerospace",
    img: "/industries/Aerospace.webp",
    title: "Aerospace & Defence",
    desc: "TEmbark on the future of aerospace and defence with us, a premier AI technology firm at the forefront of innovation. We specialise in crafting intelligent solutions that enhance mission-critical operations, offering cutting-edge technologies for data analytics, autonomous systems, and cybersecurity. Committed to excellence, we empower aerospace and defence sectors to meet evolving challenges and achieve unparalleled efficiency. Join us in redefining the boundaries of security and exploration through the limitless potential of AI. ",
    subheading: "What to Know ?",
    readMore:
      "The aerospace industry is one of the most critical sectors in the world, with a significant contribution to global economic growth. It is a field that deals with developing and manufacturing aircraft, spacecraft, and related systems and equipment. This industry has revolutionised how we travel, communicate, and explore our universe. The aerospace industry has played a critical role in shaping our modern world, from commercial planes to satellites. Its innovations have facilitated space exploration, transportation, and advanced communication and navigation technologies. With the aerospace industry, we achieved many technological advancements that we enjoy today.",
  },
  {
    id: "government",
    img: "/industries/government.webp",
    title: "Government",
    desc: "We are a unique AI technology firm specialising in government solutions. Our advanced artificial intelligence empowers governmental agencies with innovative tools for data analysis, automation, and decision-making. Our commitment to delivering secure, scalable, and efficient solutions ensures seamless integration into government operations. Partner with us to experience the transformative power of AI and redefine the future of governance. ",
    subheading: "What to Know ?",
    readMore:
      "The government service industry is a unique and promising market, filled with complexities we understand well. The government's increasing reliance on advanced technologies has opened unprecedented technological innovation and implementation opportunities. As a technology firm, we provide cutting-edge solutions tailored to government agencies' needs and challenges. It includes developing custom software applications, designing secure networks and infrastructure, and providing data analytics tools for informed decision-making. Our technical expertise and intricate understanding of regulatory requirements, procurement processes, and compliance standards position us as trusted partners. We deliver practical solutions that empower governments to serve their citizens better while maximising taxpayer resources.",
  },
  {
    id: "healthcare",
    img: "/industries/healthcare.webp",
    title: "Health Care",
    desc: "We are a trailblazing AI technology firm dedicated to revolutionising healthcare. We specialise in developing intelligent solutions that drive precision medicine, streamline diagnostics, and optimise patient care. Our advanced AI applications empower healthcare providers with data-driven insights, ensuring personalised and efficient treatment pathways. Join us in shaping a healthier future through the transformative synergy of technology and healthcare expertise.",
    subheading: "What to Know ?",
    readMore:
      "From the perspective of a technology firm, the healthcare industry presents an array of opportunities and challenges. As a technology provider, we aim to bridge the gap between innovation and efficiency in healthcare delivery. We see immense potential in leveraging cutting-edge technologies like artificial intelligence, wearables, and telemedicine to improve patient outcomes, streamline processes, and drive cost savings in the healthcare ecosystem. Our focus is developing robust software solutions that enable healthcare providers to enhance their operations through seamless electronic health records management systems, data analytics platforms for personalised medicine, and cybersecurity solutions to ensure patient privacy and regulatory compliance. Moreover, we understand the importance of interoperability across different systems within the industry to achieve a truly connected healthcare ecosystem. By collaborating with stakeholders from the technology and healthcare sectors, we aim to revolutionise how care is delivered by harnessing the power of digital technologies while prioritising patient-centricity in all aspects of our products and services.",
  },
  {
    id: "finance",
    img: "/industries/financial.webp",
    title: "Finance",
    desc: "Discover the future of finance with us, an AI technology firm at the forefront of financial innovation. We specialise in crafting intelligent solutions that empower institutions with data analytics, risk management, and personalised customer experiences. Through cutting-edge AI applications, we redefine financial strategies, ensuring agility and precision in an ever-evolving market. Join us in reshaping the finance landscape through the transformative power of artificial intelligence. ",
    subheading: "What to Know ?",
    readMore:
      "Welcome to the forefront of financial evolution with us. As an AI-based technology firm, we are committed to catalysing transformative change within the intricate realms of finance. Our mission is to seamlessly integrate the precision of artificial intelligence into every facet of financial operations, providing our clients with a competitive edge and strategic resilience in an ever-evolving landscape.\n\n At Affirmity Corp, we specialise in harnessing the vast potential of AI to offer financial institutions unparalleled insights. Our advanced solutions go beyond traditional analytics, providing predictive capabilities that empower decision-makers to navigate complexities with foresight and confidence. Whether optimising investment portfolios, managing risks, or enhancing customer interactions, our AI-driven approach ensures a dynamic and responsive financial ecosystem.\n\nEmbrace the future of finance with us, where technological ingenuity meets the reliability demanded by the financial industry. By synergising cutting-edge AI technologies with financial expertise, we create opportunities for growth and prosperity that redefine the standards of excellence in the financial sector. Join us as we journey to reimagine finance, charting a course towards a more resilient, adaptive, and digitally-driven financial future.",
  },
  {
    id: "travel",
    img: "/industries/travel.webp",
    title: "Travel & Hospitality",
    desc: "We are your gateway to a new era in travel and hospitality driven by AI innovation. We specialise in creating intelligent solutions that elevate guest experiences, streamline operations, and optimise travel services. With our cutting-edge AI applications, we redefine the journey, providing personalised recommendations, efficient booking processes, and seamless customer interactions. Join us in shaping the future of travel and hospitality through the transformative power of artificial intelligence.",
    subheading: "What to Know ?",
    readMore:
      "At Affirmity Corp, we are at the forefront of revolutionising the travel and hospitality industry through cutting-edge AI technology. Our commitment is to redefine the entire travel experience, making it not just a journey but an extraordinary adventure. By integrating artificial intelligence into our solutions, we bring a new level of personalisation to every aspect of travel, from recommending unique destinations to providing seamless and intuitive booking processes.\n\nOur innovative applications extend beyond the transactional, enhancing guest services with intelligent solutions that cater to individual preferences. Whether anticipating the needs of travellers or optimising operational efficiency for hospitality providers, our AI-driven approach transforms how people explore, book, and enjoy their journeys.\n\nEmbark on a transformative voyage with us, where technology and wanderlust converge to shape the future of travel and hospitality. Together, let's create memorable experiences, elevate service standards, and set a new benchmark for excellence in the dynamic world of travel. Welcome to the next era of exploration with us.",
  },
];

// Our projects

export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectList: IProject[] = [
  {
    title: "Digital Business Planning",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you",
    image: "projects/project-1.webp",
    link: "/projects/project-details",
  },
  {
    title: "Digital Business Planning",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you",
    image: "projects/project-2.webp",
    link: "/projects/project-details",
  },
  {
    title: "Digital Business Planning",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you",
    image: "projects/project-3.webp",
    link: "/projects/project-details",
  },
  {
    title: "Digital Business Planning",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you",
    image: "projects/project-4.webp",
    link: "/projects/project-details",
  },
  {
    title: "Digital Business Planning",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you",
    image: "projects/project-5.webp",
    link: "/projects/project-details",
  },
];

// services

export const servicesData = [
  {
    title: "Consulting",
    description:
      "We provide consulting services to help businesses improve performance and efficiency. Our experts provide insights to help you make informed decisions and implement best practices.",
    img: "/whatwedo/consulting.webp",
    link: "/services",
    id: "consulting",
  },
  {
    title: "Technology",
    description:
      "We provide consulting services to help businesses improve performance and efficiency. Our experts provide insights to help you make informed decisions and implement best practices.",
    img: "/whatwedo/technology.webp",
    link: "/services",
    id: "technology",
  },

  {
    title: "Manufacturing",
    description:
      "We provide consulting services to help businesses improve performance and efficiency. Our experts provide insights to help you make informed decisions and implement best practices.",
    img: "/whatwedo/manufacturing.webp",
    link: "/services",
    id: "manufacturing",
  },
];

export const ourServicesData = [
  {
    id: "consulting",
    img: "/services/consulting.webp",
    title: "Consulting & Management ",
    desc: "The aerospace industry is one of the most critical sectors in the world, with a significant contribution to global economic growth. It is a field that deals with developing and manufacturing aircraft, spacecraft, and related systems and equipment. This industry has revolutionised how we travel, communicate, and explore our universe. ",
    subheading: "What to Know ?",
  },

  {
    id: "technology",
    img: "/services/technology.webp",
    title: "Technology ",
    desc: "The aerospace industry is one of the most critical sectors in the world, with a significant contribution to global economic growth. It is a field that deals with developing and manufacturing aircraft, spacecraft, and related systems and equipment. This industry has revolutionised how we travel, communicate, and explore our universe. ",
    subheading: "What to Know ?",
  },
  {
    id: "manufacturing",
    img: "/services/manufacturing.webp",
    title: "Manufacturing ",
    desc: "The aerospace industry is one of the most critical sectors in the world, with a significant contribution to global economic growth. It is a field that deals with developing and manufacturing aircraft, spacecraft, and related systems and equipment. This industry has revolutionised how we travel, communicate, and explore our universe. ",
    subheading: "What to Know ?",
  },
];
