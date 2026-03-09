import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function Intellicube() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Skydeck 3</title>
        <meta
          name="description"
          content="Intellicube is a compact and versatile processing unit designed for real-time identification and classification tasks using multiple artificial intelligence (AI) engines."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Intellicube"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/intelicube/intelicube.webp"
        alt="  Intellicube "
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.4]"
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
              <span className="text-xs md:text-sm">Skydeck 3</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[6vw] font-bold text-slate-200 leading-none">
                  Skydeck 3
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-orange-500 font-semibold">
                Autonomous Confined-Space Reconnaissance
              </span>
            </div>
            <p className=" md:text-2xl font-thin text-slate-300">
              AI-Powered Clarity. Tactical Precision.

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

        <div className="w-full flex flex-col  justify-center items-center md:h-[40vh]  gap-8">
          <span className="text-3xl md:text-6xl font-semibold text-orange-600 ">
            Introducing Skydeck 3
          </span>
          <p
            className=" md:text-2xl font-thin text-orange-300 md:w-[70%]
          md:text-center"
          >
            Redefining High-Risk Interventions
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
        <p className="text-xl md:text-3xl font-thin  md:w-[90%] w-full md:text-center">
          Skydeck 3 delivers real-time situational awareness in enclosed or hazardous environments
          through AI-driven uncrewed aerial systems (UAS). Designed for military, law enforcement, and
          emergency teams, it minimizes human exposure while maximizing operational accuracy.
        </p>
        <span className="text-2xl md:text-5xl font-semibold text-orange-500 ">
          Solutions
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
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-10 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className="max-md:text-center text-xl font-thin w-full  text-orange-300">
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
        title="Law Enforcement"
        desc="AI-powered surveillance provides critical intel on armed suspects, hostages, or traps before tactical entry."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Emergency Response"
        desc="Deploys into chemical spills, structural collapses, or fire zones to map safe routes and locate survivors."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Military Operations"
        desc="Silent, agile navigation through bunkers, tunnels, and urban structures for real-time threat detection."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Engineer Operational Confidence"
        desc="Define your mission parameters, and QuadCorp will tailor a Skydeck 3 demonstration to your needs."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
