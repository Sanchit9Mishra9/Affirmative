import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

export default function PrivacyStatement() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Privacy Statement</title>
        <meta
          name="description"
          content="Affirmity Corp's Privacy Statement outlines the collection, processing, and usage of personal information on our website, including data categories, sources, legal basis, data recipients, and data security."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[30vh] md:h-[50vh] relative flex justify-center items-center  ">
          <img
            src="/contact/contact-bg.webp"
            alt=" Privacy Statement image"
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
            <span className="text-xs md:text-sm">Privacy Statement</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-end items-start  h-full  ">
          <span className="text-[32px] md:text-[6vw] font-semibold  flex ">
            Privacy Statement
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
          <p className="md:text-[1.2rem] font-thin ">
            This privacy statement outlines our privacy practices concerning
            Personal Information collected and processed in compliance with
            applicable data privacy regulations.
          </p>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Objective:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              This Privacy Statement aims to provide an overview of our privacy
              practices related to Personal Information collected through
              various sources. The primary focus is on data collected through
              our website, www.affirmity.in. Customised privacy statements and
              the data subject's relationship with us may be provided for
              processing purposes.
            </p>
            <p className="md:text-[1.2rem] font-thin ">
              The scope covers categories of personal data collected, data
              usage, recipients, and your associated rights under applicable
              laws. The Privacy Statement is global, but additional information
              may be relevant based on your country of residence, as detailed in
              region-specific statements below.
            </p>
          </div>
          <span className="font-thin md:text-[1.2rem] ">
            In case of a conflict between local language translations and the
            English version, the English version prevails.
          </span>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] ">
              1. Personal Information that we process and use
            </span>
            <span className=" md:text-[1.2rem]">
              1.1 Personal Information that we process
            </span>
            <span className=" md:text-[1.2rem] font-thin">
              We may collect the following categories of Personal Information:
            </span>
            <ul className="w-full flex flex-col list-disc gap-2 px-8">
              <li className="font-thin md:text-[1.2rem]">
                Information from website visits, including IP address,
                demographics, operating system details, device information,
                telemetry data, and browser type, is collected through cookies
                or similar technologies.
              </li>
              <li className="font-thin md:text-[1.2rem]">
                Personal and contact details include name, title, email address,
                phone numbers, designation, company/organisation, industry,
                location, LinkedIn profiles, etc.
              </li>
              <li className="font-thin md:text-[1.2rem]">
                Login credentials (username and password) when registering for
                our services.
              </li>
              <li className="font-thin md:text-[1.2rem]">
                Audio-visual information from events, webinars, etc.
              </li>
              <li className="font-thin md:text-[1.2rem]">
                Queries, comments, or feedback submitted by you.
              </li>
              <li className="font-thin md:text-[1.2rem]">
                Preferences related to marketing communications, interests,
                subscriptions, and event-related details.
              </li>
              <li className="font-thin md:text-[1.2rem]">
                Additional data is detailed in specific Privacy Statements for
                different data subjects.
              </li>
            </ul>
            <div className="w-full flex flex-col gap-2">
              <span className="font-medium md:text-[1.2rem] ">
                1.2 Sources of Personal Information:
              </span>
              <p className="md:text-[1.2rem] font-thin ">
                We collect Personal Information through sources like website
                forms, portals, contacts, affiliates, public websites, social
                media, suppliers, cookies, and tracking technologies.
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <span className="font-medium md:text-[1.2rem] ">
                1.3 Use of your Personal Information:
              </span>
              <p className="md:text-[1.2rem] font-thin ">
                We may use your Personal Information for purposes such as
                usability improvement, site maintenance, understanding website
                usage, creating login credentials, communication, tailored
                content, marketing, event invitations, testimonials, case
                studies, lead generation, data analytics, business operations
                optimisation, legal compliance, and enhancing website experience
                through cookies.
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <span className="font-medium md:text-[1.2rem] ">
                1.4 Legal basis of processing:
              </span>
              <p className="md:text-[1.2rem] font-thin ">
                We rely on legal bases such as contract performance, legitimate
                interests, consent, and legal obligations for processing
                Personal Information.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              2. Consequences of not providing Personal Information:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              Failure to provide mandatory Personal Information may prevent us
              from fulfilling the relevant processing purpose, including service
              provision.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              3. Data recipients, transfer, and disclosure:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              We share Personal Information with Affirmity Corp, subsidiaries,
              business partners, service providers, authorised agents, auditors,
              and government authorities. With safeguards in place,
              international transfers may occur to Affirmity Corp group
              companies or third parties.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              4. Your Rights:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              You may have rights as a data subject, varying by jurisdiction.
              Rights include information access, rectification, erasure,
              objection, and complaint. Exercise your rights by contacting us at{" "}
              <a
                href="https://connect@affirmity.in"
                className="text-purple-100 hover:underline underline-offset-8"
              >
                connect@affirmity.in
              </a>
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              5.Data security:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              Affirmity Corp adopts security controls, practices, and procedures
              to safeguard Personal Information.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              6. Data retention:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              Personal Information is retained as necessary for processing
              purposes, complying with legal requirements. Disposal is done
              securely.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              7. Contact your Local Data Protection Authority:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              You can file a complaint with your local data protection authority
              if you are unsatisfied with our data safeguarding.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              8. Linked websites:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              Privacy practices for portals such as Recruitment and Global
              Alumni align with respective privacy policies. Affirmity Corp is
              not responsible for third party website privacy practices.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              9. Children’s Privacy:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              Affirmity Corp Websites are not intended for children. We do not
              knowingly collect information from children without verifiable
              parental consent.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              10. How to contact us:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              For privacy inquiries, contact: <br /> Email: connect@affirmity.in
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              11. Updates to this privacy statement:
            </span>
            <p className="md:text-[1.2rem] font-thin ">
              Affirmity Corp may update this privacy statement to reflect
              changes in data privacy practices. The latest version will be
              available on the website. Our commitment to user privacy remains
              unchanged.
            </p>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};
