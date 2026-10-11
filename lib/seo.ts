import type { Metadata } from "next";
import {
  capabilities,
  firm,
  insights,
  leaders,
  offices,
  technologies,
} from "@/lib/content";

export const SITE_URL = "https://trugro.in";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  index?: boolean;
  publishedTime?: string;
  authors?: string[];
  section?: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  imageAlt = "Trugro Advisors — defence strategy consulting in India",
  type = "website",
  index = true,
  publishedTime,
  authors,
  section,
  keywords,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${firm.name}`,
      description,
      url,
      siteName: firm.legal,
      locale: "en_IN",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            authors,
            section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${firm.name}`,
      description,
      images: [{ url: ogImage, alt: imageAlt }],
    },
  };
}

export function organizationJsonLd() {
  const orgId = absoluteUrl("/#organization");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: firm.legal,
        legalName: firm.legal,
        alternateName: firm.name,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/brand/trugro-logo.png"),
        },
        image: absoluteUrl("/opengraph-image"),
        email: firm.email,
        description:
          "Defence strategy consulting for enterprises entering India’s defence ecosystem — from product readiness to procurement.",
        slogan: firm.tagline,
        foundingLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gurugram",
            addressCountry: "IN",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        knowsAbout: [
          "Defence strategy consulting",
          "Defence procurement",
          "GSQR",
          "iDEX",
          "MAKE projects",
          "Buy Indian IDDM",
          "UAV and CUAS",
          "Satellite",
          "Combat platforms",
          "RCWS",
          "Electro-optics",
          "Quantum sensing",
          "Directed energy weapons",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: firm.email,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: "English",
        },
        location: offices.map((office) => ({
          "@type": "Place",
          name: `${firm.name} ${office.city}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: office.city,
            addressRegion: office.line,
            addressCountry: "IN",
          },
        })),
        employee: leaders.map((person) => ({
          "@type": "Person",
          name: person.name,
          jobTitle: person.role,
          ...(person.credential
            ? {
                alumniOf: {
                  "@type": "EducationalOrganization",
                  name: person.credential,
                },
              }
            : {}),
        })),
        makesOffer: capabilities.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.short,
            url: absoluteUrl(`/capabilities/${item.slug}`),
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: SITE_URL,
        name: firm.legal,
        alternateName: firm.name,
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
        description:
          "Public site for Trugro Advisors LLP, a defence strategy consulting firm in India.",
      },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(item: {
  title: string;
  short: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.short,
    url: absoluteUrl(`/capabilities/${item.slug}`),
    serviceType: "Defence strategy consulting",
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function articleJsonLd(item: {
  title: string;
  dek: string;
  slug: string;
  image: string;
  dateISO: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.dek,
    image: absoluteUrl(item.image),
    datePublished: item.dateISO,
    dateModified: item.dateISO,
    author: {
      "@type": "Organization",
      name: firm.legal,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: firm.legal,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/trugro-logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/insights/${item.slug}`),
    articleSection: item.category,
    inLanguage: "en-IN",
  };
}

export function howToJsonLd(
  name: string,
  description: string,
  steps: { title: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };
}

export function sitemapEntries() {
  const lastModified = new Date();
  const staticRoutes: {
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }[] =
    [
      { path: "/", changeFrequency: "weekly", priority: 1 },
      { path: "/capabilities", changeFrequency: "monthly", priority: 0.9 },
      { path: "/what-we-do", changeFrequency: "monthly", priority: 0.9 },
      { path: "/technology", changeFrequency: "monthly", priority: 0.9 },
      { path: "/partners", changeFrequency: "monthly", priority: 0.8 },
      { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
      { path: "/about", changeFrequency: "monthly", priority: 0.8 },
      { path: "/careers", changeFrequency: "monthly", priority: 0.6 },
      { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
      { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
      { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
      { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
    ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...capabilities.map((item) => ({
      url: absoluteUrl(`/capabilities/${item.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...technologies.map((item) => ({
      url: absoluteUrl(`/technology/${item.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((item) => ({
      url: absoluteUrl(`/insights/${item.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

export const capabilitySeo: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "aftermarket-and-services": {
    title: "Defence Aftermarket & Services Consulting",
    description:
      "Unlock recurring value across armed forces platforms through fleet sustainment, performance logistics, AMC/CMC and life-cycle economics.",
    keywords: [
      "defence aftermarket India",
      "performance based logistics",
      "AMC CMC defence",
    ],
  },
  "digital-and-analytics": {
    title: "Defence Digital & Analytics Consulting",
    description:
      "Mission-grade digital architectures, battlefield AI, quantum communications and MIL-STD software for the Indian Armed Forces.",
    keywords: ["defence AI India", "mission analytics", "quantum communications defence"],
  },
  "ma-and-strategic-alliances": {
    title: "Defence M&A & Strategic Alliances",
    description:
      "JV structuring, technology transfers, offset execution and post-merger integration for India’s aerospace and defence industrial base.",
    keywords: ["defence M&A India", "Make in India joint venture", "offset advisory"],
  },
  "marketing-and-sales": {
    title: "Defence Marketing & Sales Consulting",
    description:
      "GSQR mapping, RFI/RFP navigation, expo strategy and PNC support to convert defence technology into multi-year contract awards.",
    keywords: ["GSQR mapping", "defence sales India", "RFP RFI consulting"],
  },
  "next-generation-productivity": {
    title: "Defence Manufacturing Productivity Consulting",
    description:
      "Indigenous content engineering, MIL-STD qualification and design-to-cost manufacturing for Indian defence production.",
    keywords: ["MIL-STD qualification", "indigenous content defence", "defence manufacturing"],
  },
  "strategy-and-corporate-finance": {
    title: "Defence Strategy & Corporate Finance",
    description:
      "Market-entry roadmaps, iDEX ADITI and Make-II grants, working capital and fundraising for India’s $26B+ defence modernisation.",
    keywords: ["iDEX consulting", "defence corporate finance", "defence market entry India"],
  },
  "talent-and-capability-building": {
    title: "Defence Talent & Capability Building",
    description:
      "Embed armed forces operational insight into corporate teams — veteran integration, specialist sourcing and trial readiness.",
    keywords: ["defence talent India", "veteran integration", "trial readiness coaching"],
  },
  transformation: {
    title: "Enterprise Transformation",
    description:
      "Guide commercial technology and manufacturing firms through full-scale transformation into sovereign defence contractors.",
    keywords: ["defence transformation", "TRL MRL advancement", "defence production licence"],
  },
};

export const domainSeo: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "uav-cuas": {
    title: "UAV & CUAS Defence Consulting",
    description:
      "Advisory for drone, counter-drone, surveillance, strike and swarm programmes entering Indian service procurement.",
    keywords: ["UAV consulting India", "CUAS", "counter drone defence"],
  },
  satellite: {
    title: "Satellite Defence Consulting",
    description:
      "Position micro and nano satellite ISR and communications payloads for Indian defence programmes, procurement categories and Make in India.",
    keywords: [
      "defence satellite consulting",
      "micro satellite defence",
      "nano satellite defence",
    ],
  },
  "combat-platforms": {
    title: "Combat Platform Defence Consulting",
    description:
      "Requirements, subsystem integration and procurement strategy for armoured and strike vehicles in India’s defence manufacturing ecosystem.",
    keywords: ["combat platform consulting", "armoured vehicle procurement India"],
  },
  rcws: {
    title: "RCWS Defence Consulting",
    description:
      "Position remote-controlled weapon stations against Indian service requirements, trials and OEM platform integration.",
    keywords: ["RCWS consulting", "remote weapon station India"],
  },
  "electro-optics": {
    title: "Electro-Optics Defence Consulting",
    description:
      "Position electro-optic sensing and targeting suites against Indian service requirements, environmental trials and OEM integration.",
    keywords: ["electro optics defence India", "EO IR consulting"],
  },
  quantum: {
    title: "Quantum Computing for Defence",
    description:
      "Defence use-cases for QRNG, cryptography, quantum sensing and secure communications — from productisation to a procurement path.",
    keywords: ["quantum defence India", "QRNG", "quantum sensing defence"],
  },
  "directed-energy": {
    title: "Directed Energy Weapons Consulting",
    description:
      "Technology readiness, service engagement and evaluation pathways for high-energy laser and high-power microwave programmes in India.",
    keywords: ["directed energy weapons India", "HEL", "HPM defence"],
  },
};
