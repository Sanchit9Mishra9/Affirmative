import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function RIDronde() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Rudrabaan</title>
        <meta
          name="description"
          content="RIDrone is a versatile and adaptable solution for close-quarter engagements."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="RIDrone"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/ridrone/ridrone.webp"
        alt="  RI Drone "
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
              <span className="text-xs md:text-sm">Rudrabaan</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[6vw] font-bold text-slate-200 ">
                  Rudrabaan
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-purple-500 font-semibold">
                Multi-Launcher Platform
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              Swift. Precise. Dominant.
              Compact. Vehicle-Mounted. Battlefield-Ready.

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
          <span className="text-3xl md:text-6xl font-semibold text-purple-600 ">
            Introducing Rudrabaan
          </span>
          <p
            className=" md:text-2xl font-thin text-purple-300 md:w-[90%]
          text-center"
          >
            Rudrabaan is a compact, vehicle-mounted launcher engineered to deploy 4 SHUURA loitering
            munitions in under 10 seconds. Designed for ATVs, light trucks, and rapid-response units, it
            delivers swarm saturation strikes for ambush neutralization, border security, and urban combat.
          </p>
        </div>
      </div>
    </div>
  );
};

const Specification = () => {
  return (
    <div className="w-full  flex flex-col items-center  ">
      <div className="w-full h-full flex flex-col  gap-8 md:gap-16  pt-8 md:pt-20 md:py-20 items-center justify-center  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        {/* <p className="text-xl md:text-3xl font-thin  md:w-[90%] w-full md:text-center">
          The solution offers the flexibility to carry both lethal and
          non-lethal payloads, catering to a diverse range of mission profiles
          beneficial for special forces, military, law enforcement, and homeland
          security applications within the framework.
        </p> */}
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
    <div className="w-full md:w-[240px] h-[400px]  px-4 py-8 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className=" text-[18px] font-thin w-full text-center  text-purple-300">
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
        title="Instant 4-Unit Swarm Launch"
        desc="Pneumatic/spring-loaded tubes deploy 4 SHUURA units in seconds—ideal for overwhelming threats in cluttered or dynamic environments."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="ATV/Truck Optimization"
        desc="Lightweight, low-profile design integrates seamlessly with small vehicles without compromising mobility or speed."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="AI-Coordinated Strike Patterns"
        desc="Synchronizes SHUURA units for multi-angle attacks on static or moving targets, minimizing collateral risk."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Rapid Reload System"
        desc="Swap modular cartridges in <90 seconds for sustained operations during prolonged engagements."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Ruggedized Resilience"
        desc="Operates in -40°C to 60°C, with dust/vibration resistance and EMP-hardened electronics."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
