import type { Metadata } from "next";
import {
  capabilities,
  firm,
  industries,
  insights,
  leaders,
  offices,
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
          "Combat platforms",
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
            description: item.summary,
            url: absoluteUrl(`/what-we-do/${item.slug}`),
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
  summary: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.summary,
    url: absoluteUrl(`/what-we-do/${item.slug}`),
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
      { path: "/what-we-do", changeFrequency: "monthly", priority: 0.9 },
      { path: "/domains", changeFrequency: "monthly", priority: 0.9 },
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
      url: absoluteUrl(`/what-we-do/${item.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((item) => ({
      url: absoluteUrl(`/domains/${item.slug}`),
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
  "strategic-advisory": {
    title: "Defence Market Entry Consulting in India",
    description:
      "Defence market-entry roadmaps, technology readiness and policy guidance for companies entering India’s armed forces, DPSU and OEM ecosystem.",
    keywords: [
      "defence market entry India",
      "defence strategy consulting",
      "defence policy advisory",
    ],
  },
  "product-positioning": {
    title: "GSQR Mapping & Defence Product Positioning",
    description:
      "Map products to GSQRs, prepare for user trials and adapt commercial systems to military specifications for Indian defence procurement.",
    keywords: ["GSQR mapping", "defence product positioning", "military specifications"],
  },
  "procurement-strategy": {
    title: "Defence Procurement, iDEX & MAKE Consulting",
    description:
      "Navigate RFP and RFI processes, iDEX and MAKE routes, DGQA/DGAQA certification and evaluation committees for Indian defence contracts.",
    keywords: [
      "defence procurement consulting",
      "iDEX consulting",
      "MAKE project support",
      "DGQA DGAQA",
    ],
  },
  "business-development": {
    title: "Defence OEM, DPSU & Partnership Development",
    description:
      "Open MoD, DPSU and OEM relationships, represent at defence expos, and build a long-term order pipeline including Make in India and offsets.",
    keywords: [
      "defence business development",
      "DPSU partnerships",
      "Make in India defence",
    ],
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
  "micro-nano-satellite": {
    title: "Micro & Nano Satellite Defence Consulting",
    description:
      "Position small-satellite ISR and communications payloads for Indian defence programmes, procurement categories and Make in India.",
    keywords: ["defence satellite consulting", "space ISR India", "nano satellite defence"],
  },
  "combat-platforms": {
    title: "Combat Platform Defence Consulting",
    description:
      "Requirements, subsystem integration and procurement strategy for armoured and strike vehicles in India’s defence manufacturing ecosystem.",
    keywords: ["combat platform consulting", "armoured vehicle procurement India"],
  },
  "rcws-electro-optics": {
    title: "RCWS & Electro-Optics Defence Consulting",
    description:
      "Position remote weapon stations and electro-optic suites against Indian service requirements, trials and OEM integration.",
    keywords: ["RCWS consulting", "electro optics defence India"],
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
