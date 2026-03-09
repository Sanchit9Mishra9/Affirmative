import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function CMS() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Change Monitoring System</title>
        <meta
          name="description"
          content="AI-Enabled Monitoring System Revolutionising Security and Surveillance"
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="CMS"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/cms/cms.webp"
        alt="  CMS image"
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.6]"
      />
      {/* Banner */}
      <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   z-10">
        <div className="w-full md:w-1/2 flex flex-col items-start  justify-start h-full">
          {/* navigation */}
          <div className="flex w-fit gap-3 md:mt-8">
            <div className="w-fit flex gap-2 justify-center items-center">
              <span className="text-xs md:text-sm">Solutions</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
            <div className="w-fit flex gap-2 justify-center items-center">
              <span className="text-xs md:text-sm">CMS</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  C
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  M
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  S
                </span>
              </div>
              <span className=" text-2xl md:text-5xl text-purple-500 font-semibold">
                Change Monitoring System
              </span>
            </div>
            <p className=" md:text-2xl font-thin text-slate-200">
              AI-Enabled Monitoring System Revolutionising Security and
              Surveillance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OverView = () => {
  //  bg-[rgb(14,18,52)]
  return (
    <div className="w-full  flex flex-col items-center ">
      <div className="w-full h-full flex flex-col gap-10 py-10 items-center justify-evenly  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        {/* Description */}

        <div className="w-full flex flex-col  justify-center items-center   gap-8">
          <span className="text-[24px] md:text-6xl font-semibold text-purple-600 ">
            Introducing CMS
          </span>
          <p
            className=" md:text-xl font-thin text-purple-100 md:w-[80%]
          "
          >
            Affirmity Corp's AI-powered Change Monitoring System offers
            unparalleled border security and surveillance capabilities.
            Real-time analysis and anomaly detection enable continuous
            monitoring, allowing authorities to identify unauthorised crossings,
            track potential threats, and safeguard territorial integrity.
          </p>
          <p
            className=" md:text-xl font-thin text-purple-100 md:w-[80%]
        "
          >
            Beyond border security, the system empowers military operations.
            Analysing visual data from various sources supports
            counter-terrorism efforts through predictive analytics and real-time
            threat detection. Additionally, deployed at military installations,
            it enhances security by detecting changes and anomalies, enabling
            proactive responses to security breaches.
          </p>
          <p
            className=" md:text-xl font-thin text-purple-100 md:w-[80%]
          "
          >
            The system's applications extend beyond military purposes. It
            facilitates damage assessment and recovery efforts during natural
            disasters by analysing pre- and post-disaster imagery, enabling
            targeted relief and reconstruction initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

const Specification = () => {
  return (
    <div className="w-full  flex flex-col items-center ">
      <div className="w-full h-full flex flex-col  gap-8 md:gap-16  pt-8 md:pt-20 md:py-20 items-center justify-center  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        <span className="text-2xl md:text-5xl font-semibold text-purple-500 ">
          Salient Features
        </span>
        <SpecificationCardContainer />
      </div>
    </div>
  );
};

const SpecificationCard = ({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}) => {
  return (
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-4 flex flex-col  gap-4 justify-start items-center relative cursor-pointer ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className=" text-xl font-thin w-full text-center text-purple-300">
        {title}
      </span>
      <span className="font-thin w-full text-center  ">{desc}</span>
    </div>
  );
};

const SpecificationCardContainer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
      <SpecificationCard
        title="Adaptable to Your Needs"
        desc="Adjusts to various scenarios and environments, ensuring reliable performance every time."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Round-the-Clock Surveillance and Analysis"
        desc="Offers continuous monitoring and analysis, always keeping you informed."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Enhanced change detection accuracy"
        desc="Compares feeds and photos from various sources for accurate change identification."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Dynamic visual slider"
        desc="Allows easy visualisation and analysis of changes over time."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
