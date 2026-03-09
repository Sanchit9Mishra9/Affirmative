import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function IronBeam() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs- Sharanga</title>
        <meta
          name="description"
          content="The Iron Beam is a directed-energy weapon system that uses a high-powered laser beam to neutralise aerial threats such as rockets, missiles, and unmanned vehicles (UAVs)."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Iron Beam"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/ironbeam/ironbeam.webp"
        alt="Iron Beam "
        className="absolute inset-0 -z-10  w-full h-full object-cover"
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
              <span className="text-xs md:text-sm">Sharanga</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[7vw] leading-none font-bold text-slate-200 ">
                  Sharanga
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-orange-500 font-semibold">
                Tactical Ground Control Station

              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              AES-256 Encrypted. Swarm-Ready. Instant Sync
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
            Introducing Sharanga
          </span>
          <p
            className=" md:text-2xl font-thin text-orange-300 md:w-[70%]
          md:text-center"
          >
            Sharangais a handheld control station engineered for battlefield dominance, featuring AES-256
            encrypted transmission, swarm coordination for 12+ units, and seamless sync with Rudrabaan
            launchers. Its 10-inch tactical screen delivers AI-driven target locking, quick disengage
            protocols, and real-time mission control for land, sea, and air operations.

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
        {/* <p className="text-xl md:text-3xl font-thin  md:w-[90%] w-full md:text-center">
          The laser beam's focused energy allows for accurate targeting,
          minimising the risk of collateral damage compared to area-effect
          explosives. This is particularly relevant in defending against aerial
          threats near populated areas or sensitive infrastructure.
        </p> */}
        <span className="text-2xl md:text-5xl font-semibold text-orange-500 ">
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
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-8 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
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
        title="AES-256 Encrypted Transmission"
        desc="Military-grade encryption secures all data links, ensuring real-time command integrity even in adversarial cyber environments."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Swarm Control Interface"
        desc="Coordinate up to 12 SHUURA units or Rudrabaan launchers for synchronized strikes, distraction protocols, or multi-domain saturation."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Handheld Tactical Controller"
        desc="10-inch sunlight-readable touchscreen with real-time video feeds, telemetry, and AI threat overlays for rapid decision-making."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Target Lock & Quick Disengage"
        desc="AI-assisted target locking for precision strikes and one-touch disengagement to abort missions or redirect units mid-flight."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Quick Sync with Rudrabaan"
        desc="Seamlessly pair with Rudrabaan launchers and extension kits in <5 seconds—no downtime during critical operations."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
