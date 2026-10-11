import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/industries",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/industries/:slug",
        destination: "/technology/:slug",
        permanent: true,
      },
      {
        source: "/domains",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/domains/micro-nano-satellite",
        destination: "/technology/satellite",
        permanent: true,
      },
      {
        source: "/domains/rcws-electro-optics",
        destination: "/technology/rcws",
        permanent: true,
      },
      {
        source: "/domains/:slug",
        destination: "/technology/:slug",
        permanent: true,
      },
      {
        source: "/what-we-do/strategic-advisory",
        destination: "/capabilities/strategy-and-corporate-finance",
        permanent: true,
      },
      {
        source: "/what-we-do/product-positioning",
        destination: "/capabilities/marketing-and-sales",
        permanent: true,
      },
      {
        source: "/what-we-do/procurement-strategy",
        destination: "/capabilities/marketing-and-sales",
        permanent: true,
      },
      {
        source: "/what-we-do/business-development",
        destination: "/capabilities/ma-and-strategic-alliances",
        permanent: true,
      },
      {
        source: "/what-we-do/:slug",
        destination: "/capabilities/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
