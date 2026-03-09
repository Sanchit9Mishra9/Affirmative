export interface LinkItem {
  id?: string;
  link: string;
  name: string;
  icons?: string;
  subLinks?: LinkItem[];
}

export const navLinkItems: LinkItem[] = [
  {
    link: "/industries/aerospace-and-defence",
    name: "Markets",
    subLinks: [
      {
        link: "/industries/aerospace-and-defence",
        name: "Defence",
        icons: "/navbar/aerospace.webp",
      },

      {
        link: "/industries/healthcare",
        name: "Health Care",
        icons: "/navbar/healthcare.webp",
      },

      {
        link: "/industries/travel",
        name: "Travel & Hospitality",
        icons: "/navbar/travel-agent.webp",
      },
      {
        link: "/industries/government",
        name: "Government",
        icons: "/navbar/government.webp",
      },
      {
        link: "/industries/oilandgas",
        name: "Oil & Gas",
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
    name: "Products",
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
    link: "/company",
    name: "Company",
  },
];

export const mobileNavLinkItems = [
  {
    link: "/industries/aerospace-and-defence",
    name: "Industries",
    sublinks: true,
    subLinks: [
      {
        link: "/industries/aerospace-and-defence",
        name: "Aerospace & Defence",
      },

      {
        link: "/industries/healthcare",
        name: "Health Care",
      },

      {
        link: "/industries/travel",
        name: "Travel & Hospitality",
      },
      {
        link: "/industries/government",
        name: "Government",
      },
      {
        link: "/industries/oilandgas",
        name: "Oil & Gas",
      },
    ],
  },
  {
    link: "/services",
    name: "Services",
    sublinks: true,

    // subLinks: [
    //   {
    //     title: "Consulting",
    //     links: [
    //       {
    //         link: "/services/technology-consulting",
    //         name: "Technical Consulting",
    //       },
    //       {
    //         link: "/services/management-consulting",
    //         name: "Management Consulting",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Technology",
    //     links: [
    //       {
    //         link: "/services/artificial-intelligence",
    //         name: "Artificial Intelligence",
    //       },
    //       {
    //         link: "/services/application-development",
    //         name: "Application Development",
    //       },
    //       {
    //         link: "/services/data-insights",
    //         name: "Data & Insights",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Manufacturing",
    //     links: [
    //       {
    //         link: "/services/artificial-intelligence",
    //         name: "Artificial Intelligence",
    //       },
    //       {
    //         link: "/services/application-development",
    //         name: "Application Development",
    //       },
    //       {
    //         link: "/services/data-insights",
    //         name: "Data & Insights",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    link: "/solutions",
    name: "Solutions",
    sublinks: true,

    // subLinks: [],
  },

  {
    link: "/company",
    name: "Company",
  },
  {
    link: "/careers",
    name: "Careers",
  },
  {
    link: "/contact",
    name: "Contact",
  },
];
