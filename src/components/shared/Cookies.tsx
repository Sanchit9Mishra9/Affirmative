import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Cookie Policy</title>
        <meta
          name="description"
          content="Affirmity Corp's Cookie Policy outlines the use of cookies on our website, including session, persistent, third-party, and analytics cookies."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[30vh] md:h-[50vh] relative flex justify-center items-center  ">
          <img
            src="/contact/contact-bg.webp"
            alt="   Contact Us image"
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
            <span className="text-xs md:text-sm">Cookie Policy</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-end items-start  h-full  ">
          <span className="text-[32px] md:text-[6vw] font-semibold  flex ">
            Cookie Policy
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
            <span className="font-medium">Cookies</span> are small text files
            placed on your device to access our website. They assist in
            recognising your device during sessions or future visits,
            contributing to an improved user experience.
          </p>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              We utilise two types of cookies:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              <span className="font-medium">Session cookies : </span> Active
              only during a browsing session. These enhance convenience, linking
              your actions and expiring at the session end. They aid in
              navigation and secure access to parts of the website when logged
              in.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              <span className="font-medium">Persistent cookies : </span>
              Stored on your device after a session, these remember preferences
              and actions, such as language and regional settings.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              We employ a third-party analytics service provider to analyse
              cookies and conduct behavioural analysis for an enhanced user
              experience. Depending on browser settings, cookies may be accepted
              by default. You can adjust settings to delete existing cookies or
              prevent automatic future acceptance. However, disabling cookies
              may limit access to certain parts of our website.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Third-party Cookies
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              We also employ cookies from third-party companies to gain insights
              about our sites, run targeted advertising campaigns, measure
              campaign effectiveness, and make ads more relevant. These cookies
              collect information about your browsing activities, enabling you
              to see our ads on partner websites. Opt-out preferences can be set
              on partner websites or through the Network Advertising Initiative
              or Digital Advertising Alliance websites.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Cookie Category
            </span>
            <span className="font-thin md:text-[1.2rem] ">
              Cookies are categorised based on purpose and functionality under
              Cookie Settings:
            </span>

            <span className="font-medium md:text-[1.2rem] leading-none">
              Strictly Necessary Cookies:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Essential for website functionality, these cannot be switched off.
              They respond to actions like privacy preferences, login, or form
              submissions. Blocking them may impact site functionality, but they
              do not store personally identifiable information.
            </p>

            <span className="font-medium md:text-[1.2rem] leading-none">
              Social Media Cookies:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Enabled for sharing content on social media, they track browser
              activity across sites, influencing content and messages on other
              websites.
            </p>
            <span className="font-medium md:text-[1.2rem] leading-none">
              Targeting Cookies:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              By advertising partners, they build a profile of your interests
              for targeted advertising. They do not store personal information
              directly.
            </p>

            <span className="font-medium md:text-[1.2rem] leading-none">
              Performance Cookies:
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              We can measure and improve site performance by tracking visits and
              traffic sources. Information collected is aggregated and
              anonymous.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Your Choices and Rights
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Control and manage cookies on your device through Cookie Settings
              or system/browser settings. Changes apply to all websites unless
              you block cookies from specific sites.
            </p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Opt-In/Opt-Out for some cookie categories. View and manage cookies
              generated by the website under each category. Access the website
              even if opting out of all cookies.
            </p>{" "}
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              Manage cookie choices via system/browser settings, including
              viewing, deleting, blocking third-party cookies, or setting
              preferences.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Updates to this Cookie Policy
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              This Cookie Policy may be periodically updated. Check for changes
              on the Affirmity Corp website. Specific data handling activities
              or significant changes will be communicated as applicable law
              requires.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-medium md:text-[1.2rem] leading-none">
              Contact us
            </span>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              For questions or inquiries about this Cookie Policy or our data
              processing, contact us at connect@affirmity.in. Further
              information on Afirmity Corp’s personal data collection and
              processing is available on the Affirmity Corp website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
