import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function AntiMineVehicle() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Anti-Mine Vehicle</title>
        <meta
          name="description"
          content="The Anti-Mine Vehicle (AMV) is a remote-controlled device specialising in clearing landmines. It can be operated remotely by a demining specialist or autonomously. The device is equipped with sensors and metal detectors to detect mines."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Anti-Mine Vehicle"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/antimine/backantimine.webp"
        alt="Anti-Mine Vehicle "
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.35] scale-x-[-1]"
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
              <span className="text-xs md:text-sm">Anti-Mine Vehicle</span>

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
                  Anti-Mine Vehicle
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-purple-500 font-semibold">
                A Guardian Against Buried Threats
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              The Anti-Mine Vehicle (AMV) is a remote-controlled device
              specialising in clearing landmines.
              <span className="max-md:hidden">
                It can be operated remotely by a demining specialist or
                autonomously.The device is equipped with sensors and metal
                detectors to detect mines.
              </span>
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
          <span className="text-[24px] md:text-6xl font-semibold text-purple-600 ">
            Introducing Anti-Mine Vehicle
          </span>
          <p
            className=" md:text-2xl font-thin text-purple-300 md:w-[80%]
          md:text-center"
          >
            The AMV is a compact, remotely controlled or autonomous vehicle
            designed to navigate challenging terrains and detect hidden
            explosives. Equipped with advanced soil-mapping sensors, it
            meticulously analyses the ground beneath its tracks, identifying
            anomalies indicative of buried mines or improvised explosive devices
            (IEDs).
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
          Real-time alerts notify operators of potential threats, allowing for
          informed decisions and safe detonation procedures. The AMV's rugged
          construction ensures it can withstand the impact of small explosions,
          protecting both the device and personnel during operations.
        </p>
        <span className="text-2xl md:text-5xl font-semibold text-purple-500 ">
          Millitary Grade Specifications
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
        title="Mine Detection Sensors"
        desc="Equipped with sonar, metal detectors, and magnetic field sensors to identify mines."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Neutralisation Capabilities"
        desc="Carries tools like disruptors, water jets, or charges to safely disarm or detonate mines."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Rugged Construction"
        desc="Built to withstand harsh environments and survive potential mine explosions."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
