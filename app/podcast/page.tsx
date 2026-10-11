import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trugro Podcast",
  description:
    "The Trugro Podcast is coming soon — conversations on building defence enterprises in India.",
  path: "/podcast",
  index: false,
});

export default function PodcastPage() {
  return (
    <ComingSoon
      title="Trugro Podcast"
      kicker="Trugro Podcast"
      href="/podcast"
      description="Conversations with operators, founders and veterans on building defence enterprises. The first episodes are in production."
    />
  );
}
