import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Terms of Use</title>
        <meta
          name="description"
          content="Affirmity Corp's Terms of Use outline the conditions of use of our website, including ownership, usage agreement, legal consequences, disclaimer, and indemnification."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[30vh] md:h-[50vh] relative flex justify-center items-center  ">
          <img
            src="/contact/contact-bg.webp"
            alt=" Terms of Use image"
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.50]"
          />
          <Banner />
        </div>
        <Content />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-full  flex flex-col pt-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   z-10">
      <div className="w-full  flex flex-col items-start  justify-start h-full">
        {/* navigation */}
        <div className="flex w-fit gap-3 md:mt-8">
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm">Terms of Use</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-end items-start  h-full  ">
          <span className="text-[32px] md:text-[6vw] font-semibold  flex ">
            Terms of Use
          </span>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full h-full  flex  pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        <div className="w-full md:w-[75%] flex  flex-col  gap-9">
          <p className="md:text-[1.2rem] font-thin text-slate-300">
            By accessing and using the website www.affirmity.in (the "Site"),
            you, the user, agree to comply with the following terms and
            conditions set forth by Affirmity Corp:
          </p>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Ownership and Trademarks:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              The term "User" refers to any individual browsing the Site.
              Affirmity Corp owns the exclusive rights to the domain address
              www.affirmity.in and all content on the Site, including software,
              text, images, graphics, video, and audio. The name and logo of
              Affirmity Corp are trademarks owned by Affirmity Corp Limited and
              may not be used without prior written consent.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Usage Agreement:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Users are bound by the terms and conditions outlined herein, which
              may be revised or modified by Affirmity Corp without notice.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Unauthorised copying, modification, reproduction, republishing,
              uploading, transmission, posting, or distribution of materials
              from the Site is strictly prohibited without prior written
              permission from Affirmity Corp. All rights not expressly granted
              are reserved.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Legal Consequences:
            </span>

            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Unauthorised use of materials on the Site may violate copyright,
              trademark, and other applicable laws, leading to potential
              criminal or civil penalties. Affirmity Corp reserves the right to
              monitor access to the Site.
            </p>

            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Affirmity Corp reserves the right to terminate a User's access to
              the Site at any time, with the provisions regarding warranty
              disclaimer, accuracy of information, and indemnification surviving
              such termination.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Disclaimer and Limitation of Liability:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Affirmity Corp provides no express or implied warranties regarding
              the accuracy, completeness, or adequacy of information, data,
              statements, or products available on the Site.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              The Site and its content are provided on an "as is" and "as
              available" basis. Affirmity Corp disclaims responsibility for any
              damage to a User's computer system or data loss resulting from
              downloading content from the Site.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Affirmity Corp is not liable for any direct, indirect, incidental,
              or consequential damages arising from the use of the Site or any
              information provided on the Site.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Indemnification
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Users agree to indemnify, defend, and hold Affirmity Corp harmless
              from any losses, expenses, damages, and costs, including
              reasonable attorneys' fees, resulting from misuse of the content
              and services on the Site.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Information Accuracy
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Information on the Site is obtained from trusted, reliable
              sources. However, Affirmity Corp disclaims all warranties
              regarding such information's accuracy, completeness, or adequacy.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Third-Party Links and Content
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              The Site may contain links to third-party websites, providing
              access to content, products, and services. Affirmity Corp is not
              responsible for content availability on third-party websites and
              disclaims any liability associated with such content.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Site Functionality
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Affirmity Corp makes no warranty that the Site will meet
              requirements, be available uninterrupted, timely, secure, or
              error-free, or that results obtained from its use will be accurate
              or reliable.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Using the Site, you acknowledge and agree to these terms and
              conditions. Affirmity Corp advises Users to periodically review
              these terms, as they may be subject to changes available on the
              Affirmity Corp website. If you have questions or concerns, contact
              us at{" "}
              {/* <a
                href="https://conect@affirmity.in"
                target="_blank"
                className="text-purple-200 hover:underline"
              >
                conect@affirmity.in
              </a> */}
              conect@affirmity.in .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
