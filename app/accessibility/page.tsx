import { LegalPage, legalMetadata } from "@/components/legal/LegalPage";
import { firm } from "@/lib/content";

export const metadata = legalMetadata(
  "Accessibility",
  "Trugro’s commitment to an accessible digital experience.",
  "/accessibility"
);

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" eyebrow="Legal" path="/accessibility">
      <p>
        Trugro intends this website to be usable by the widest possible
        audience. We design with semantic HTML, keyboard access, visible focus,
        and respect for reduced-motion preferences.
      </p>
      <p>
        If you encounter a barrier, please write to {firm.email} with the page
        URL and a short description of the issue. We will treat accessibility
        reports as a priority.
      </p>
    </LegalPage>
  );
}
