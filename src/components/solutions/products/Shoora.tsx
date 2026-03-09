import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function Shoora() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Rudrabaan 9 </title>
        <meta
          name="description"
          content="Shoora is a unique solution that bridges the gap between observation and action, empowering troops to identify threats and deliver a lethal payload with precision while minimising collateral damage."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Shoora"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/shoora/shoora.webp"
        alt="Shoora "
        className="absolute inset-0 -z-10  w-full h-full object-fill object-center brightness-[.3]"
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
              <span className="text-xs md:text-sm">Rudrabaan 9</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[4vw] font-bold text-slate-200 ">
                  Rudrabaan 9
                </span>
              </div>
              <span className=" text-xl md:text-3xl text-orange-500 font-semibold">
                High-Capacity Multi-Launcher Platform
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              High-Density Swarm Deployment. Strategic Dominance.
              Mounted on Tanks, Trucks, Ships. Engineered for Scale.
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
            Introducing Rudrabaan 9
          </span>
          <p
            className=" md:text-2xl font-thin text-orange-300 md:w-[70%]
          md:text-center"
          >
            Rudrabaan 9 is a high-capacity launcher designed to deploy 9 SHUURA loitering munitions in
            a single sequence. Built for tanks, heavy trucks, and naval vessels, it delivers overwhelming
            swarm saturation for large-scale operations, coastal defense, or fortified target neutralization.
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
          Equipping warfighters with Shoora gives them a significant advantage
          on the battlefield. The system's beyond-line-of-sight engagement
          capabilities extend their operational reach and safeguard their
          safety. Furthermore, Shoora's user-friendly interface and rapid
          deployment features empower individual operators to engage targets
          with precision and control effectively.
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
      <span className=" text-xl font-thin w-full  text-orange-300">
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
        title="High-Density Swarm Launch"
        desc="Deploys 9 SHUURA units in under 15 seconds via rapid-fire pneumatic tubes—ideal for neutralizing armored columns or dense enemy formations."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Tri-Service Mounting"
        desc="Integrates with tanks, heavy transport trucks, and ship decks for land, sea, and coastal operations."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="AI-Coordinated Swarm Tactics"
        desc="Synchronizes 9+ units for synchronized multi-directional strikes on fortified positions or moving convoys."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Rapid Reload System"
        desc="High-capacity modular cartridges enable swift reloads (<120 seconds) during sustained engagements."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Combat-Hardened Resilience"
        desc="EMP-hardened, corrosion-resistant, and operational in -40°C to 60°C for global deployment."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
