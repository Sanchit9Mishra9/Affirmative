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
    desc: `Quick dis-engage feature`,
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Automated waypoint navigation",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "Backpackable and precision strike",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "One-person operation-Tube launch",
  },
  {
    img: "/services/overview/first-prize.webp",
    desc: "Effective against stationary and moving targets",
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Less than a 2-minute set & launch",
  },
];

const ServiceOfferingData = [
  {
    img: "/services/icons/discovery",
    title: "Operation",
  },
  {
    img: "/services/icons/experiment",
    title: "Stealth",
  },

  {
    img: "/services/icons/scale",
    title: "Surveillance",
  },
  {
    img: "/services/icons/sustain",
    title: "Flexibility",
  },
];

const ServiceOfferingCardData = [
  {
    desc: "Loitering munitions can perform pre-defined missions autonomously, adapting to changing situations, avoiding obstacles, and navigating complex environments, enhancing their effectiveness in reconnaissance missions.",
    list: ["Threat Assessment "],
  },
  {
    desc: "Loitering munitions are often designed with stealth features, such as low radar cross-section and quiet propulsion systems, making them difficult for enemy radar systems to detect.",
    list: ["Stealth ", "Low Observability"],
  },
  {
    desc: "Deliver actionable intelligence and precision firepower for mission success, enabling them to capture high-resolution images and video footage.",
    list: [
      "Situational awareness",
      " Information collection",
      "object recognition",
      "Targeting, Intelligence Gathering",
    ],
  },
  {
    desc: "Our service offers flexibility in mission profiles, allowing military forces to use them for various tasks.",
    list: [
      "Target acquisition",
      "Engaging high-value targets",
      " Flexibility in Mission Profiles",
    ],
  },
];

export default function LoiteringMunitions() {
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
        <title>Affirmity Corp - Loitering Munitions</title>
        <meta
          name="description"
          content="Loitering Munitions allows troops to quickly identify and strike potential threats with precision and minimal collateral damage, and the system's small size and low signatures make it hard to detect."
        />
      </Helmet>
      <div className="w-full min-h-screen flex flex-col items-center relative ">
        {isCrossed && (
          <div className=" max-md:hidden w-full fixed mt-16 md:mt-20 py-10 bg-black z-20">
            <TopNavBar />
          </div>
        )}
        <div className="min-w-full w-full h-[50vh] md:h-[90vh]   flex justify-center relative ">
          <img
            src="/services/bg.webp"
            alt=" Loitering Munitions "
            className="absolute inset-0 w-full h-full object-cover object-center -z-10 brightness-75"
          />
          <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   ">
            <div className="w-full  flex flex-col items-start  justify-start h-full gap-4  md:gap-10  ">
              {/* navigation */}
              <div className="flex w-fit gap-3 md:mt-8">
                <div className="w-fit flex gap-2 justify-center items-center">
                  <span className="text-xs md:text-sm">Services</span>

                  <div className="bg-slate-200">
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
                  </div>
                </div>
                <div className="w-fit flex gap-2 justify-center items-center">
                  <span className="text-xs md:text-sm">Loitering Munition</span>

                  <div className="bg-slate-200">
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
                  </div>
                </div>
              </div>

              {/* content */}

              <div className=" w-full flex flex-col gap-4  justify-center items-center  h-full  ">
                <div className="w-full flex gap-2  md:gap-6 justify-center items-center">
                  <span className="text-[1.2rem] md:text-4xl  leading-none  text-red-50 ">
                    Affirmity
                  </span>
                  <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-orange-700  ">
                    Loitering Munition
                  </span>
                </div>
                <p className="  md:text-3xl font-bold w-full md:w-2/3 text-center text-orange-50">
                  Unmanned Aerial Platforms with Tactical Precision
                </p>
                <p className=" md:text-xl w-full  md:w-2/3 text-center text-slate-300">
                  Loitering Munitions allows troops to quickly identify and
                  strike potential threats with precision and minimal collateral
                  damage, and the system's small size and low signatures make it
                  hard to detect.
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
                  Affirmity
                </span>
                <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-orange-700  ">
                  Loitering Munitions
                </span>
              </div>
            </div>
            {/* content */}

            <p className="md:text-[18px] text-center">
              Loitering munitions, the epitome of precision, are advanced
              weapons that accurately target specific objects. They rely on
              sensors and advanced algorithms to track their target before
              detonating.
            </p>

            <span className="md:text-[18px] text-center">
              LMs can be loaded with various payloads and programmed to hover
              over a target for multiple attacks to enhance air attacks and
              minimise collateral damage.
            </span>

            {/* grid */}

            <div className="w-full  flex justify-center">
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
          buttonColor="bg-orange-500"
          text="Services"
          query="Loitering Munitions Service"
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
      className="max-md:hidden w-full md:h-[10vh]   absolute bottom-0 left-0 bg-black bg-opacity-70 flex justify-center py-2"
    >
      <div className="w-full h-full px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   flex gap-x-14 justify-start items-center ">
        <Scroll to="overview" smooth={true} duration={500} offset={-100}>
          <span className="text-slate-400 font-thin cursor-pointer">
            Overview
          </span>
        </Scroll>
        <Scroll to="aiservices" smooth={true} duration={500} offset={-100}>
          <span className="text-slate-400 font-thin cursor-pointer">
            Service Offerings
          </span>
        </Scroll>

        <Scroll to="platforms" smooth={true} duration={500} offset={-100}>
          <span className="text-slate-400 font-thin cursor-pointer">
            Platforms and Solutions
          </span>
        </Scroll>
        <Scroll to="leaders" smooth={true} duration={500} offset={-100}>
          <span className="text-slate-400 font-thin cursor-pointer">
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
      <img src={img} alt="" className="w-[70px] h-[70px] brightness-75" />
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
          background: isClicked ? "rgb(18,18,18)" : "",
        }}
      >
        <img
          src={isClicked ? `${img}-red.webp` : `${img}-gray.webp`}
          alt={title}
          className="w-[40px] h-[40px] brightness-75"
        />
        <span
          className={`${
            isClicked ? "text-slate-100" : "text-[#787878]"
          } font-thin`}
        >
          {title}
        </span>
      </div>
    );
  };

  const ServiceDataCard = ({ clicked }: { clicked: number }) => {
    return (
      <div className="w-full flex flex-col gap-10 p-12  bg-[rgb(18,18,18)] font-thin ">
        <p className=" text-[16px]  text-slate-300">
          {ServiceOfferingCardData[clicked].desc}
        </p>
        <div className="grid w-full grid-cols-3 gap-x-10 gap-y-6">
          {ServiceOfferingCardData[clicked].list.map((item) => (
            <div
              key={item}
              className="w-full border-l-4 border-orange-600 pl-3"
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
          <span className="text-2xl md:text-5xl font-bold leading-none text-slate-100">
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
          <span className="text-2xl md:text-5xl font-bold leading-none text-slate-100">
            Platforms and Solutions
          </span>
        </div>
        {/* content */}

        <div className="w-full flex justify-center gap-10">
          <Card
            title="Shoora"
            desc="Shoora is a unique solution that bridges the gap between observation and action, empowering troops to identify threats and deliver a lethal payload with precision while minimising collateral damage. "
            img="/services/card1.webp"
            link="/solutions/shoora"
          />
        </div>
      </div>
    </div>
  );
};
