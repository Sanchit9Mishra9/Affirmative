import { LegalPage, legalMetadata } from "@/components/legal/LegalPage";
import { firm } from "@/lib/content";

export const metadata = legalMetadata(
  "Terms of use",
  "Terms of use for the Trugro Advisors LLP website.",
  "/terms"
);

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" eyebrow="Legal" path="/terms">
      <p>
        By using this website you agree to these terms. The content is provided
        for general information. It is not legal, financial or investment
        advice, and it does not create a client relationship with {firm.legal}.
      </p>
      <p>
        Sector figures cited on this site — including India’s defence budget,
        indigenisation targets, iDEX awards and export growth — describe the
        national market, not Trugro’s own financial performance.
      </p>
      <p>
        All trademarks, wordmarks and original content on this site belong to{" "}
        {firm.legal} or their respective owners. You may not copy the site for
        commercial use without permission.
      </p>
    </LegalPage>
  );
}
