import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";

export default function Intellipad() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Intellipad</title>
        <meta
          name="description"
          content="Intellipad is a portable device with artificial intelligence (AI) capabilities designed to streamline access management and population monitoring tasks. It functions as a versatile tool for various security and monitoring applications."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />

        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Intellipad"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
      <img
        src="/solutions/intelipad/intellipad.webp"
        alt="  Intellipad image"
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.4] object-center"
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
              <span className="text-xs md:text-sm">Intellipad</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* content */}

          <div className=" w-full flex flex-col  gap-6 md:gap-12 justify-center items-start  h-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[8vw] font-bold text-slate-200 ">
                  Intellipad
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-violet-500 font-semibold">
                AI-powered Handheld Device for Access Management and Monitoring
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              Intellipad is a portable device with artificial intelligence (AI)
              capabilities designed to streamline access management and
              population monitoring tasks. It functions as a versatile tool for
              various security and monitoring applications.
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
          <span className="text-3xl md:text-6xl font-semibold text-violet-600 ">
            Introducing Intellipad
          </span>
          <p
            className=" md:text-2xl font-thin text-violet-300 md:w-[70%]
          text-center"
          >
            Intellipad empowers security personnel with the power of artificial
            intelligence, facilitating intelligent access control through user
            identification and comprehensive population monitoring capabilities
            on a convenient and portable platform.
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
          By providing a user-friendly and versatile device, Intellipad
          contributes to enhanced security and streamlined monitoring tasks. Its
          portability allows for flexible deployment in various scenarios,
          making it a valuable asset for diverse security and monitoring
          applications.
        </p>
        <span className="text-2xl md:text-5xl font-semibold text-violet-500 ">
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
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-8 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
      <div className="w-[200px] h-[200px]  rounded-[50%] overflow-hidden ">
        <img
          src={img}
          alt={title + img}
          className="w-full h-full object-cover object-center  "
        />
      </div>
      <span className="max-md:text-center text-xl font-thin w-full  text-violet-300">
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
        title="AI-powered Access Control"
        desc="Verifies user identities and grant or deny access accordingly."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Data Capture and Monitoring"
        desc="Enables comprehensive monitoring of personnel movement and provides access activity."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Portable and User-friendly"
        desc="Compact and handheld design facilitates its use by security personnel."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
