import { ChevronRight } from "lucide-react";
import RequestForServices from "../../shared/RequestForServices";
import { Helmet } from "react-helmet";
export default function Foreguard() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Foreguard</title>
        <meta
          name="description"
          content="Foreguard is a security system that uses advanced facial recognition technology, renowned for its reliability, to ensure that only authorized individuals are granted access to high-security environments."
        />
      </Helmet>

      <div className="w-full flex flex-col items-center ">
        <Banner />
        <OverView />
        <Specification />
        <RequestForServices
          buttonColor="bg-purple-500"
          text="Demo"
          query="Foreguard"
        />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center overflow-hidden ">
      <img
        src="/solutions/foreguard/foreguard.webp"
        alt="  Foreguard "
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
              <span className="text-xs md:text-sm">Foreguard</span>

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
                  Foreguard
                </span>
              </div>
              <span className=" text-xl md:text-4xl text-orange-500 font-semibold">
                Enhanced Security and Streamlined Access Control
              </span>
            </div>
            <p className=" md:text-xl font-thin text-slate-300">
              A robust and versatile security system offering facial recognition
              for access control.
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
      <div className="w-full h-full flex flex-col gap-10 pt-20 md:py-20 items-center justify-evenly  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        {/* Description */}

        <div className="w-full flex flex-col  justify-center items-center   gap-8">
          <span className="text-3xl md:text-6xl font-semibold text-orange-600 ">
            Introducing Foreguard
          </span>
          <p
            className=" md:text-xl font-thin text-orange-100 md:w-[70%]
          text-start"
          >
            Foreguard is a security system that uses advanced facial recognition
            technology, renowned for its reliability, to ensure that only
            authorized individuals are granted access to high-security
            environments. When someone presents themselves at a designated entry
            point, their facial image is carefully captured and compared to a
            pre-populated database.
          </p>
          <p
            className=" md:text-xl font-thin text-orange-100 md:w-[70%]
          text-start"
          >
            Any unauthorised attempts will trigger an immediate alert. It
            provides a comprehensive security solution, meticulously recording
            entry data and offering secure data management.
          </p>
          <p
            className=" md:text-xl font-thin text-orange-100 md:w-[70%]
          text-start"
          >
            Foreguards suit various security needs, from high-security
            facilities to financial institutions and critical infrastructure.
            Its advanced access control and facial recognition capabilities can
            be customised to meet the unique requirements of each environment,
            providing a versatile and reliable security solution.
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
    <div className="w-full md:w-[240px] md:h-[440px]  px-4 py-4 flex flex-col  gap-4 justify-start items-center relative cursor-pointer  ">
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
        title="Facial Recognition Entry"
        desc="Utilizes cameras to capture facial images for comparison against a secure database."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Intelligent Access Control"
        desc="Grants access based on authorisation and triggers alerts for unauthorised attempts."
        img="/solutions/gss/face2.avif"
      />
      <SpecificationCard
        title="Data Management"
        desc="Records entry details, including facial images, timestamps, and access status,ensuring data integrity."
        img="/solutions/gss/face1.webp"
      />
      <SpecificationCard
        title="Networked Entry System"
        desc="Strategically positioned nodes with access modules verify entry permissions and control entry gates."
        img="/solutions/gss/face1.webp"
      />
    </div>
  );
};
