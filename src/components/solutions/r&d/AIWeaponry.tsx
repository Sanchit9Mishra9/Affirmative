import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function AIWeaponry() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - AI Weaponary</title>
        <meta
          name="description"
          content="The system is designed to identify potential threats using various sensors such as heat mapping and facial recognition, which are attached to a weapon."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="AI Weaponary"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/aiweaponary/aiweaponary.webp"
        alt="  AI Weaponary "
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.2]"
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
              <span className="text-xs md:text-sm">AI Weaponary</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[5vw] font-bold text-slate-200 ">
                  AI Weaponary
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-orange-500 font-semibold">
                Weaponized AI System with Human Oversight
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              The system is designed to identify potential threats using various
              sensors such as heat mapping and facial recognition, which are
              attached to a weapon.
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
          <span className="text-[24px] md:text-6xl font-semibold text-orange-600 ">
            Introducing AI Weaponry
          </span>
          <p
            className=" md:text-2xl font-thin text-orange-300 md:w-[80%]
          md:text-center"
          >
            When the system detects an object, it checks if it is an ANE. If the
            object is deemed dangerous, an alert is generated. However, before
            taking any action, human intervention is required to approve the
            elimination of the target.
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
          Once the approval is received, the weapon attached to the system can
          be activated to destroy the target. The system operates with a high
          level of precision, ensuring that only the intended target is
          eliminated.
        </p>
        <span className="text-2xl md:text-5xl font-semibold text-orange-500 ">
          Millitary Grade AI
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
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-8 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className="max-md:text text-xl font-thin w-full  text-orange-300">
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
        title="Sensor Fusion"
        desc="Combines various sensor data (heat mapping, facial recognition) for object identification and potential ANE detection."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Autonomous Alerting "
        desc="System autonomously triggers alerts for potential threats based on pre-defined criteria."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Human Oversight"
        desc=" Maintains human control over the final decision to eliminate a target."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Weapon Integration"
        desc=" Weaponry is directly linked to the system for potential target elimination upon human authorization."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
