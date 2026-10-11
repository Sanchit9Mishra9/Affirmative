import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trugro Blog",
  description:
    "The Trugro Blog is coming soon — writing on defence strategy, procurement and technology in India.",
  path: "/blog",
  index: false,
});

export default function BlogPage() {
  return (
    <ComingSoon
      title="Trugro Blog"
      kicker="Our insights"
      href="/blog"
      description="Long-form writing on defence strategy, procurement and technology is in production. In the meantime, read selected engagements under Insights, or write to the firm."
    />
  );
}
