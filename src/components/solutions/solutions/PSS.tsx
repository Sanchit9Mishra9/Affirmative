import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function PSS() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - SHUURA </title>
        <meta
          name="description"
          content="The Perimeter Security System combines advanced technology for robust security. Facial recognition replaces traditional access methods, offering swift and secure entry for authorised personnel."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="PSS"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/pss/pss.webp"
        alt="  PSS "
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.3]"
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
              <span className="text-xs md:text-sm">SHUURA              </span>

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
                  SH
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  UU
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  RA
                </span>
              </div>
              <span className=" text-2xl md:text-5xl text-purple-500 font-semibold">
                Loitering Munition
              </span>
            </div>
            <p className=" md:text-2xl font-thin text-slate-200">
              Made in India, Forged for Victory
              Pervasive. Tactical. Unmatched.
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
            SHUURA <br />
          </span>
          <span className="text-[24px] md:text-2xl font-semibold text-black ">
            <b className="text-purple-600 md:text-3xl">S</b>hort-range <b className="text-purple-600 md:text-3xl">H</b>igh-impact <b className="text-purple-600 md:text-3xl">U</b>nmanned <b className="text-purple-600 md:text-3xl">U</b>tility-based <b className="text-purple-600 md:text-3xl">R</b>econnaissance & <b className="text-purple-600 md:text-3xl">A</b>ssault System
          </span>
          <p
            className=" md:text-xl font-thin text-slate-100 md:w-[80%]
          "
          >
            Redefines tactical dominance with AI-driven precision. Designed for rapid deployment in
            counter-insurgency, border security, and high-value target operations, it delivers unmatched
            agility in contested environments.
          </p>
          <p
            className=" md:text-xl font-thin text-slate-100 md:w-[80%]
        "
          >
            Key Advantages
            • 5 km Operational Range: Strike flexibility without extension kits.
            • Edge AI Computing: Real-time threat neutralization.
            • Soldier-Centric: Backpackable, single-operator control.
          </p>
          {/* <p
            className=" md:text-xl font-thin text-slate-100 md:w-[80%]
          "
          >
            This solution safeguards high-security zones like government
            facilities, airports, and critical infrastructure. It provides
            continuous monitoring, immediate response to security breaches, and
            detailed event logs for analysis and improved security measures.
          </p> */}
        </div>
      </div>
    </div >
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
        title="Adaptive AI Targeting"
        desc="AI-powered EO/IR and thermal sensors detect, prioritize, and engage static or moving targets
with adjustable impact radius for minimal collateral damage."
        img="/solutions/pss/fr.webp"
      />
      <SpecificationCard
        title="Backpackable Rapid Deployment"
        desc="Weighing under 3 kg, this tube-launched system activates in seconds—no bulky setup or specialized team required."
        img="/solutions/pss/asr.webp"
      />
      <SpecificationCard
        title="Swarm Coordination"
        desc="Synchronizes 4–8+ units for multi-angle strikes, mounts on vehicles/ships, and resists electronic warfare for seamless battlefield control."
        img="/solutions/pss/pss3.webp"
      />
      <SpecificationCard
        title="Mission Assurance Protocols"
        desc="Abort-and-reengage functionality, encrypted data links, and secure self-destruction ensure operational reliability and prevent enemy capture."
        img="/solutions/pss/scalable.webp"
      />
      <SpecificationCard
        title="Edge Ground Control Station (GCS)"
        desc="Compact, ruggedized tablet with AI-assisted mission planning, real-time video feeds, and swarm control for seamless operator-in-the-loop command."
        img="/solutions/pss/scalable.webp"
      />
    </div>
  );
};
