import { LegalPage, legalMetadata } from "@/components/legal/LegalPage";
import { firm } from "@/lib/content";

export const metadata = legalMetadata(
  "Privacy",
  "How Trugro Advisors LLP collects and uses information on this website.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" eyebrow="Legal" path="/privacy">
      <p>
        This website is the public digital presence of {firm.legal}. Contact
        form submissions in this environment are validated in the browser and
        are not stored on a server.
      </p>
      <p>
        If you choose to share information with Trugro in a live engagement, we
        will use it only to respond to your enquiry and to deliver the work you
        asked us to do. We do not sell personal information.
      </p>
      <p>
        Essential cookies may remember cookie preferences on this device.
        Analytics cookies are off unless you enable them in Cookie Preferences.
      </p>
      <p>
        For privacy questions, write to {firm.email}.
      </p>
    </LegalPage>
  );
}
