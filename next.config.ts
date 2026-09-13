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
        destination: "/domains",
        permanent: true,
      },
      {
        source: "/industries/:slug",
        destination: "/domains/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
