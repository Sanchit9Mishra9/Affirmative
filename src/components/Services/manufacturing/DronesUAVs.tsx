import { motion, useAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link as Scroll } from "react-scroll";
import RequestForServices from "@/components/shared/RequestForServices";
import { Link } from "react-router-dom";
import MobileServicesOffering from "../MobileServicesOffering";
import MeetLeadership from "../MeetLeadership";

const overviewData = [
  {
    img: "/services/overview/first-prize.webp",
    desc: `Scenario-Based Validation`,
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Adaptive Testing Frameworks",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "End-to-End Accountability",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "Ethical Integrity",
  },
  {
    img: "/services/overview/first-prize.webp",
    desc: "Future-Ready Design",
  }
];

const ServiceOfferingData = [
  {
    img: "/services/icons/discovery",
    title: "Performance Assurance",
  },
  {
    img: "/services/icons/experiment",
    title: "Durability Certification",
  },
  {
    img: "/services/icons/experiment",
    title: "Strategic Integration",
  },
  {
    img: "/services/icons/experiment",
    title: "Compliance & Standards",
  },
];

const ServiceOfferingCardData = [
  {
    desc: "Validate Critical Systems",
    list: ["Environmental resilience testing for extreme operational conditions.", "Flight stability and endurance validation across diverse terrains", "Sensor and navigation accuracy certification", "Communication reliability under interference"],
  },
  {
    desc: "Engineered for Longevity",
    list: ["Stress-testing for sustained field deployment", "Structural integrity assessments for high-impact scenarios", "Power efficiency and lifecycle analysis", "Cybersecurity resilience for connected systems"],
  },
  {
    desc: "Seamless Interoperability",
    list: ["Cross-platform compatibility testing", "Legacy-to-modern system transition validation", "Vendor-neutral interoperability assurance"],
  },
  {
    desc: "Tested with Integrity",
    list: ["Protocols prioritize safety, accountability, and environmental responsibility", "Transparent reporting and auditability for all validation phases", "Adherence to ethical testing practices"],
  },
];

export default function DronesUAVs() {
  const [isCrossed, setIsCrossed] = useState<boolean>(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleToNavScroll = () => {
      if (barRef.current) {
        if (window.scrollY + 75 > barRef.current.offsetTop) {
          setIsCrossed(true);
        } else {
          setIsCrossed(false);
        }
      }
    };
    window.addEventListener("scroll", handleToNavScroll);
    return () => {
      window.removeEventListener("scroll", handleToNavScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Quadcorp - Drones & UAVs</title>
        <meta
          name="description"
          content="Imagine the potential of drones not just flying but becoming deeply integrated into every aspect of your business. At Affirmity Corp, we're your expert pilot, guiding you through the intricate airspace of the digital world."
        />
      </Helmet>
      <div className="w-full min-h-screen flex flex-col items-center relative ">
        {isCrossed && (
          <div className=" max-md:hidden w-full fixed mt-16 md:mt-20 py-10 bg-white z-20">
            <TopNavBar />
          </div>
        )}
        <div className="min-w-full w-full h-[50vh] md:h-[90vh]   flex justify-center relative ">
          <img
            src="/services/bg.webp"
            alt="Drones & UAVs"
            className="absolute inset-0 w-full h-full object-cover object-center -z-10 brightness-75"
          />
          <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   ">
            <div className="w-full  flex flex-col items-start  justify-start h-full gap-4  md:gap-10  ">
              {/* navigation */}
              <div className="flex w-fit gap-3 md:mt-8">
                <div className="w-fit flex gap-2 justify-center items-center">
                  <span className="text-xs md:text-sm text-white">Services</span>

                  <div className="bg-slate-200">
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
                  </div>
                </div>
                <div className="w-fit flex gap-2 justify-center items-center">
                  <span className="text-xs md:text-sm text-white">Drones & UAVs</span>

                  <div className="bg-slate-200">
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
                  </div>
                </div>
              </div>

              {/* content */}

              <div className=" w-full flex flex-col gap-4  justify-center items-center  h-full  ">
                <div className="w-full flex gap-2  md:gap-6 justify-center items-center">
                  <span className="text-[1.2rem] md:text-4xl  leading-none  text-red-50 ">
                    Quadcorp
                  </span>
                  <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-002E62  ">
                    Testing & Validation
                  </span>
                </div>
                <p className=" md:text-3xl font-bold w-full  md:w-[80%] text-center text-orange-50">
                  Precision. Reliability. Excellence.
                </p>
                <p className=" md:text-xl w-full  md:w-2/3 text-center text-slate-200">
                  QuadCorp delivers rigorous testing frameworks to ensure systems meet the highest standards
                  of performance and durability.
                </p>
              </div>
            </div>
          </div>

          <TopNavBar barRef={barRef} />
        </div>
        {/* navigation bar #f1f5f9 #787878 */}

        <div
          id="overview"
          className="w-full min-h-screen  flex justify-center"
          style={{
            background: "url('/services/bg-overview.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    gap-8 ">
            {/* heading */}
            <div className="w-full flex justify-center  p-2">
              <div className="w-fit flex flex-col justify-center items-start">
                <span className="text-[1.2rem] md:text-[20px]  leading-none  text-red-50 ">
                  Quadcorp Labs
                </span>
                <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-002E62  ">
                  Drones & UAVs
                </span>
              </div>
            </div>
            {/* content */}

            <p className="md:text-[18px] text-center text-white">
              We design and execute validation protocols that mirror real-world demands, ensuring
              operational readiness for critical environments.
            </p>

            <span className="md:text-[18px] text-center text-white">
              {/* The transformative power of Drones and UAVs with Affirmity Corp-
              Salient Features */}
            </span>

            {/* grid */}

            <div className="w-full  flex justify-center text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 md:w-fit  gap-8 w-full">
                {overviewData.map((item, index) => (
                  <ServiceCard key={index} img={item.img} desc={item.desc} />
                ))}
              </div>
            </div>

            {/* service offerings */}
          </div>
        </div>

        {/* Ai Service Offering */}

        <ServiceOffering />

        <MobileServicesOffering
          data={ServiceOfferingData}
          cardData={ServiceOfferingCardData}
        />

        {/* Ai platforms and solutions */}
        <PlatformsAndSolutions />

        {/* Meet Our Leaders */}
        <MeetLeadership />

        {/* Request for Services */}
        <RequestForServices
          buttonColor="bg-[#002E62]"
          text="Services"
          query="Drones & UAV's Service"
        />
      </div>
    </>
  );
}

const TopNavBar = ({
  barRef,
}: {
  barRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={barRef ? barRef : null}
      className="max-md:hidden w-full md:h-[10vh]   absolute bottom-0 left-0 bg-white bg-opacity-70 flex justify-center py-2"
    >
      <div className="w-full h-full px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   flex gap-x-14 justify-start items-center ">
        <Scroll to="overview" smooth={true} duration={500} offset={-100}>
          <span className="text-002E62 font-thin cursor-pointer">
            Overview
          </span>
        </Scroll>
        <Scroll to="aiservices" smooth={true} duration={500} offset={-100}>
          <span className="text-002E62 font-thin cursor-pointer">
            Service Offerings
          </span>
        </Scroll>

        <Scroll to="platforms" smooth={true} duration={500} offset={-100}>
          <span className="text-002E62 font-thin cursor-pointer">
            Platforms and Solutions
          </span>
        </Scroll>
        <Scroll to="leaders" smooth={true} duration={500} offset={-100}>
          <span className="text-002E62 font-thin cursor-pointer">
            Meet Our Leaders
          </span>
        </Scroll>
      </div>
    </div>
  );
};

const ServiceCard = ({ img, desc }: { img: string; desc: string }) => {
  return (
    <div className="w-full md:w-[25vw]   p-4 flex flex-col gap-4 justify-center items-center ">
      <img
        src={img}
        alt={`${img} 1`}
        className="w-[70px] h-[70px] brightness-75"
      />
      <p className="text-center">{desc}</p>
    </div>
  );
};

const ServiceOffering = () => {
  const [clicked, setClicked] = useState<number>(0);

  const ServiceOfferingCard = ({
    img,
    title,
    clicked,
    index,
    setClicked,
  }: {
    img: string;
    title: string;
    clicked: number;
    index: number;
    setClicked: React.Dispatch<React.SetStateAction<number>>;
  }) => {
    const isClicked = clicked === index;
    return (
      <div
        onClick={() => setClicked(index)}
        className="flex w-[120px] gap-2 flex-col justify-center items-center  cursor-pointer p-2"
        style={{
          background: isClicked ? "rgb(240,240,240)" : "",
        }}
      >
        <img
          src={isClicked ? `${img}-red.webp` : `${img}-gray.webp`}
          alt={title}
          className="w-[40px] h-[40px] brightness-75"
        />
        <span
          className={`${isClicked ? "text-slate-600" : "text-[#787878]"
            } font-thin`}
        >
          {title}
        </span>
      </div>
    );
  };

  const ServiceDataCard = ({ clicked }: { clicked: number }) => {
    return (
      <div className="w-full flex flex-col gap-10 p-12  bg-[rgb(240,240,240)] font-thin ">
        <p className=" text-[16px]  text-slate-600">
          {ServiceOfferingCardData[clicked].desc}
        </p>
        <div className="grid w-full grid-cols-3 gap-x-10 gap-y-6">
          {ServiceOfferingCardData[clicked].list.map((item) => (
            <div
              key={item}
              className="w-full border-l-4 border-orange-600 pl-3 text-slate-600"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="aiservices" className="w-full hidden   md:flex justify-center  ">
      <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4      justify-center gap-16 ">
        <div className="w-full flex  justify-center items-center ">
          <span className="text-2xl md:text-5xl font-bold leading-none text-002E62">
            Service Offerings
          </span>
        </div>
        {/* content */}

        <div className="w-full hidden flex-col items-start  min-[996px]:flex">
          <div className="flex w-full gap-8 ">
            {/* Cards */}

            {ServiceOfferingData.map((item, index) => (
              <ServiceOfferingCard
                img={item.img}
                title={item.title}
                clicked={clicked}
                key={index}
                index={index}
                setClicked={setClicked}
              />
            ))}
          </div>
          {/* data */}
          <ServiceDataCard clicked={clicked} />
        </div>
      </div>
    </div>
  );
};

const PlatformsAndSolutions = () => {
  const Card = ({
    img,
    title,
    desc,
    link,
  }: {
    img: string;
    title: string;
    desc: string;
    link: string;
  }) => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
      controls.start("hover");
    };

    const handleMouseLeave = () => {
      controls.start("unhover");
    };

    const variants = {
      hover: {
        scale: 1.1,
        transition: {
          duration: 0.5,
        },
      },
      unhover: {
        scale: 1,
        transition: {
          duration: 0.5,
        },
      },
    };
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full md:w-1/3 relative overflow-hidden flex flex-col items-center md:p-10 p-4 justify-center gap-8 shadow-2xl "
        style={{
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)",
        }}
      >
        <motion.img
          variants={variants}
          initial="unhover"
          animate={controls}
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full -z-10 "
        />
        <span className="text-xl md:text-3xl font-bold leading-none ">
          {title}
        </span>
        <p className="font-thin">{desc}</p>
        <button className="outline   md:py-3 md:px-6 p-2 hover:outline-none transition-all duration-300  ">
          <Link to={link}>Read More</Link>
        </button>
      </div>
    );
  };
  return (
    <div id="platforms" className="w-full   flex justify-center ">
      <div className="w-full min-h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  gap-14 ">
        <div className="w-full flex  justify-center items-center">
          <span className="text-2xl md:text-5xl font-bold leading-none text-002E62">
            Platforms and Solutions
          </span>
        </div>
        {/* content */}

        <div className="w-full flex justify-center max-md:flex-col gap-10">
          <Card
            title="Skydeck"
            desc="Skydeck utilise uncrewed aerial vehicles (UAVs) designed explicitly for intervention within enclosed spaces. "
            img="/services/card1.webp"
            link="/solutions/skydeck"
          />
          <Card
            title="RI Drone"
            desc=" Room Intervention Drone is a highly adaptable and versatile drone-centric loitering munition engineered for close-quarters engagements in urban settings."
            img="/services/card2.webp"
            link="/solutions/ridrone"
          />
        </div>
      </div>
    </div>
  );
};
