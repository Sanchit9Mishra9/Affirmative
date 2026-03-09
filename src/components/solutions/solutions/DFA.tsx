import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function DFA() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Drone Feed Analysis </title>
        <meta
          name="description"
          content="The Drone Feed Analysis (DFA) Project is an advanced solution that harnesses the power of Artificial Intelligence (AI) to enhance the Perimeter Security System (PSS) capabilities significantly."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="DFA"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/dfa/dfa.webp"
        alt="  DFA "
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
              <span className="text-xs md:text-sm">DFA</span>

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
                  D
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  F
                </span>
                <span className="text-[8vw] font-bold text-slate-200 leading-none">
                  A
                </span>
              </div>
              <span className=" text-2xl md:text-5xl text-orange-500 font-semibold">
                Drone Feed Analysis
              </span>
            </div>
            <p className=" md:text-2xl font-thin text-slate-200">
              Enhancing Security with Aerial Surveillance
            </p>
            {/* <p className=" md: md:text-[1.1rem] font-thin text-slate-300">
              An advanced access control solution that uses facial recognition
              technology. This system not only captures facial images but also
              extracts and encodes unique facial characteristic codes using
              advanced algorithms. These codes serve as digital identifiers that
              enable the system to recognize individuals accurately and grant or
              deny access based on pre-defined permissions.
            </p> */}
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
          <span className="text-3xl md:text-6xl font-semibold text-orange-600 ">
            Introducing DFA
          </span>
          <p
            className=" md:text-xl font-thin text-orange-100 md:w-[80%]
          "
          >
            The Drone Feed Analysis (DFA) Project is an advanced solution that
            harnesses the power of Artificial Intelligence (AI) to enhance the
            Perimeter Security System (PSS) capabilities significantly. By
            integrating drones equipped with high-resolution cameras, DFA
            provides real-time aerial surveillance, which eliminates blind spots
            and expands the coverage of high-security zones.
          </p>
          <p
            className=" md:text-xl font-thin text-orange-100 md:w-[80%]
        "
          >
            Real-time video analysis allows for swift identification and
            response to various security incidents, including unauthorised
            access, perimeter breaches, and suspicious activities. Strategically
            deployed drones based on predefined rules ensure efficient and
            targeted surveillance in critical areas. The system guarantees
            uninterrupted monitoring even in challenging terrains, providing
            comprehensive security coverage.
          </p>
          <p
            className=" md:text-xl font-thin text-orange-100 md:w-[80%]
          "
          >
            The DFA Project provides improved threat detection, faster response
            times, and efficient surveillance for enhanced security. It also
            offers customisable rules for drone operations, allowing tailored
            solutions for each organisation's unique security needs.
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
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-4 flex flex-col  gap-4 justify-start items-center relative cursor-pointer ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className=" text-xl font-thin w-full text-start text-orange-300">
        {title}
      </span>
      <span className="font-thin w-full text-start  ">{desc}</span>
    </div>
  );
};

const SpecificationCardContainer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
      <SpecificationCard
        title="Seamless Integration"
        desc="Offering continuous aerial monitoring and enhancing threat detection capacities."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Real-Time Threat Identification"
        desc="Enabling swift identification and response to potential security incidents."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Dynamic Deployment"
        desc="Ensuring efficient and targeted surveillance in critical areas."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Comprehensive Coverage"
        desc="Guarantees uninterrupted monitoring even in challenging terrains, providing a holistic approach to security."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
