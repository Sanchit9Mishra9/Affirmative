import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { firm, offices } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Contact Defence Consultants in India",
  description:
    "Contact Trugro Advisors LLP at connect@trugro.in. Offices in Gurugram, Bhopal, Pune, Mumbai and Hyderabad — defence market entry, GSQR and procurement.",
  path: "/contact",
  image: "/images/contact.jpg",
  imageAlt: "Trugro meeting room for defence consulting discussions",
  keywords: [
    "contact defence consultant India",
    "connect@trugro.in",
    "Gurugram defence consulting",
  ],
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper pt-32 pb-12 md:pt-40">
        <Container>
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl text-graphite md:text-6xl lg:text-7xl">
            Let’s build India’s defence together.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone">
            Tell us about the product, the company, and the service you want to
            reach. We will respond with the right partners from the firm.
          </p>
        </Container>
      </section>
      <Section className="pt-8">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <EditorialImage
                src="/images/contact.jpg"
                alt="Conference room overlooking the city at dusk"
                className="aspect-[4/3]"
                sizes="40vw"
              />
              <p className="mt-10 text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                Offices
              </p>
              <address className="mt-4 not-italic">
                {offices.map((office) => (
                  <p
                    key={office.city}
                    className="flex items-baseline justify-between border-t border-line py-4"
                  >
                    <span className="text-graphite">{office.city}</span>
                    <span className="text-sm text-stone">{office.line}</span>
                  </p>
                ))}
              </address>
              <p className="mt-8 text-sm text-stone">
                <a href={`mailto:${firm.email}`} className="link-underline">
                  {firm.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
