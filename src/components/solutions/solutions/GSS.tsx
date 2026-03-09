import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";

export default function GSS() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - SHUURA 10</title>
        <meta
          name="description"
          content="GSS facilitates a secure database creation with facial images and associated access permissions for authorized individuals. This database serves as the reference point for the facial recognition process. Robust security measures are implemented to ensure data privacy and compliance with relevant regulations."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />

        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Garrison Security System"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/gss/backgss.webp"
        alt="  GSS"
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.7]"
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
              <span className="text-xs md:text-sm">SHUURA 10</span>

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
                  SHU
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  URA
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  10
                </span>
              </div>
              <span className=" text-2xl md:text-5xl text-purple-500 font-semibold">
                Extended-Range Loitering Munition
              </span>
            </div>
            <p className=" md:text-2xl font-thin text-slate-200">
              Beyond the Horizon. Precision Redefined.
              GCS-Driven Dominance.
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
            Introduction
          </span>
          <p
            className=" md:text-xl font-thin text-purple-50 md:w-[80%]
          "
          >
            SHUURA 10 extends tactical reach with 10 km operational range, enabled by a seamless GCSintegrated extension kit. Designed for prolonged surveillance and deep-strike operations, it
            combines SHUURA’s combat-proven agility with enhanced endurance and battlefield control.
          </p>
          <p
            className=" md:text-xl font-thin text-purple-50 md:w-[80%]
        "
          >
            Key Advancements
            • 10 km Range: GCS-managed extension kits amplify operational reach for border and
            cross-terrain missions.
            • AI-Enhanced Mission Control: Real-time GCS-driven adjustments for altitude, loiter
            time, and swarm coordination.
            • Modular Scalability: Rapidly integrate extension kits with existing SHUURA units for
            adaptive mission profiles.

          </p>
          {/* <p
            className=" md:text-xl font-thin text-purple-50 md:w-[80%]
          "
          >
            Upon identifying an authorized individual, the system grants
            seamless access through designated gates or entry points.
            Conversely, access is denied if no match is found or the individual
            lacks the necessary permissions, potentially triggering additional
            security protocols.
          </p> */}
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
        title="GCS-Managed Range Extension"
        desc="The ruggedized Ground Control Station (GCS) dynamically adjusts range, altitude, and loiter time via AI-optimized extension protocols—no hardware swaps or downtime."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Deep-Terrain Surveillance"
        desc="Extended EO/IR and thermal sensors provide real-time reconnaissance beyond 10 km, with AI flagging high-value targets for priority strikes."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Adaptive Swarm Command"
        desc="Coordinate 8–12+ units via GCS for synchronized deep-strike operations, with encrypted swarm relays for contested environments."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Rapid Mission Reconfiguration"
        desc="Shift from surveillance to strike mode mid-flight using GCS presets, adjusting payload impact radius and swarm density on demand."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Secure Termination Protocols"
        desc="GCS-triggered self-destruction or re-engagement ensures mission integrity, even at maximum range."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
