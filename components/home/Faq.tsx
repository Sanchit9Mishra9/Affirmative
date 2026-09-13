import { Container, Eyebrow } from "@/components/shared/Layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="border-t border-line bg-paper py-24 md:py-32" id="faq">
      <JsonLd data={faqJsonLd(faqs)} />
      <Container>
        <Eyebrow>Questions</Eyebrow>
        <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
          Defence consulting, answered plainly.
        </h2>
        <dl className="mt-16 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.question} className="grid gap-4 py-8 lg:grid-cols-12">
              <dt className="text-lg text-graphite lg:col-span-5">
                {item.question}
              </dt>
              <dd className="text-[1.02rem] leading-relaxed text-stone lg:col-span-7">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
