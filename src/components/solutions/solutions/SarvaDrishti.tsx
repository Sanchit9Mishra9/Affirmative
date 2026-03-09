import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function SarvaDrishti() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Sarva Drishti</title>
        <meta
          name="description"
          content="Sarva Drishti is an AI-powered social media sentiment analysis platform to tackle unique challenges. It merges sentiment analysis with spatial profiling, delivering actionable insights for enhanced situational awareness, threat assessment, and proactive decision-making."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Sarva Drishti"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/sa/sa.webp"
        alt="  Sarva Drishti "
        className="absolute inset-0 -z-10  w-full h-full object-cover md:hidden brightness-[.7]"
      />
      <video
        src="/solutions/sa/sa.mp4"
        loop
        muted
        autoPlay
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.5] max-md:hidden "
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
              <span className="text-xs md:text-sm">Sarva Drishti</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[6vw] font-bold text-slate-200  leading-none">
                  Sarva Drishti
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-purple-500 font-medium">
                AI-powered Sentiment Analysis for Military and Intelligence
                Agencies
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300"></p>
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
      <div className="w-full h-full flex flex-col gap-10 pt-20 md:py-20 items-center justify-evenly  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        {/* Description */}

        <div className="w-full flex flex-col  justify-center items-center md:h-[40vh]  gap-8">
          <span className="text-[24px] md:text-6xl font-semibold text-purple-600 ">
            Introducing Sarva Drishti
          </span>
          <p
            className=" md:text-xl font-thin text-purple-100 md:w-[70%]
          text-start"
          >
            Project SARVA DRISHTI is an AI-powered social media sentiment
            analysis platform to tackle unique challenges. It merges sentiment
            analysis with spatial profiling, delivering actionable insights for
            enhanced situational awareness, threat assessment, and proactive
            decision-making.
          </p>
          <p
            className=" md:text-xl font-thin text-purple-100 md:w-[70%]
          text-start"
          >
            It enhances situational awareness by providing a comprehensive
            understanding of public opinion, allowing for improved threat
            assessment through real-time sentiment analysis. This enables
            efficient resource allocation based on identified areas of concern,
            ultimately supporting data-driven decision- making through
            comprehensive social media insights.
          </p>
          <p
            className=" md:text-xl font-thin text-purple-100 md:w-[70%]
          text-start"
          >
            By harnessing the solution, military and intelligence agencies can
            unlock the potential of social media data, leading to improved
            decision-making, heightened security, and effective public
            engagement.
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
          Millitary Trusted AI
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
    <div className="w-full md:w-[240px] h-[440px]  px-4 py-4 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className="max-md:text-center text-xl font-thin w-full  text-purple-300">
        {title}
      </span>
      <span className="font-thin w-full   ">{desc}</span>
    </div>
  );
};

const SpecificationCardContainer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
      <SpecificationCard
        title="Real-time Social Media Monitoring"
        desc="Keeps a pulse on relevant conversations across various platforms."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="AI-powered Sentiment Analysis"
        desc="Analyses the sentiment of identified mentions, categorising them as positive, negative, or neutral."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Spatial Profiling"
        desc="Maps sentiment data geographically, pinpointing areas with high concentrations of negative sentiment or potential threats."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Advanced Analytics"
        desc="Identifies trends, emerging narratives, and potential influencers within the social media landscape."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
