import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trugro Advisors LLP",
    short_name: "Trugro",
    description:
      "Defence strategy consulting for enterprises entering India’s defence ecosystem.",
    start_url: "/",
    display: "browser",
    background_color: "#F5F5F1",
    theme_color: "#012160",
    lang: "en-IN",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
