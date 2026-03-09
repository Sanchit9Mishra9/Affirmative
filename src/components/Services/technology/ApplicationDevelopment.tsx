import { motion, useAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link as Scroll } from "react-scroll";
import RequestForServices from "@/components/shared/RequestForServices";
import { Link } from "react-router-dom";
import MobileServicesOffering from "../MobileServicesOffering";
import MeetLeadership from "../MeetLeadership";

const data = [
  {
    img: "/services/overview/first-prize.webp",
    desc: `Assessment, recommend disposition and best migration path.`,
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Optimally sizing and configuring cloud services.",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "Accelerating resource provisioning and deployment.",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "Accelerated rehosting, containerisation or re-platforming.",
  },
  {
    img: "/services/overview/first-prize.webp",
    desc: "Automated microservices, API and batch development.",
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Extraction of business rules from legacy applications.",
  },
];

const ServiceOfferingData = [
  {
    img: "/services/icons/discovery",
    title: "Cloud Migration & Modernization",
  },
  {
    img: "/services/icons/experiment",
    title: "Low Code/ No Code",
  },

  {
    img: "/services/icons/scale",
    title: "Open source",
  },
];

const ServiceOfferingCardData = [
  {
    desc: "Businesses can navigate their cloud journeys end to end with the assistance of Affirmity.",
    list: [
      " Cloud Advisory ",
      "Cloud  Consulting",
      "Cloud Migration",
      "Cloud Modernization",
      "Cloud Native Development",
    ],
  },
  {
    desc: "Utilise low-code/no-code platforms to modernise applications with Affirmity and get business benefits more quickly.",
    list: [
      "Consulting Services",
      "Platform advisory Services",
      "Implementation Services",
    ],
  },
  {
    desc: " Affirmity provides a wide range of services that assist businesses in accelerating business innovation, defining governance principles, adopting open source at scale, and giving back to communities.",
    list: ["Advisory and consulting", "Cost optimisation", "Modernisation"],
  },
];

export default function ApplicationDevelopment() {
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
        <title>Affirmity Corp - Application Development</title>
        <meta
          name="description"
          content="Modern Application Development Services for Smarter Solutions"
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
            alt=" Application Development "
            className="absolute inset-0 w-full h-full object-cover object-center -z-10 brightness-75"
          />
          <div className="w-full h-full max-w-7xl flex flex-col pt-20 md:py-20  px-6  md:px-10  min-[1280px]:px-4   ">
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
                  <span className="text-xs md:text-sm">
                    Application Development
                  </span>

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
                    Application Development
                  </span>
                </div>
                <p className="  md:text-3xl font-bold w-full md:w-[80%] text-center text-orange-50">
                  Modern Application Development Services for Smarter Solutions
                </p>
                <p className=" md:text-xl font-thin w-full  md:w-2/3 text-center text-slate-300">
                  Lead the AI Revolution with Affirmity and take advantage of
                  our progressive application development services for
                  intelligent solutions.
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
          <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6   max-w-7xl  md:px-10  min-[1280px]:px-4    gap-8 ">
            {/* heading */}
            <div className="w-full flex justify-center  p-2">
              <div className="w-fit flex flex-col justify-center items-start">
                <span className="text-[1.2rem] md:text-[20px]  leading-none  text-red-50 ">
                  Affirmity
                </span>
                <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-orange-700  ">
                  Application Development
                </span>
              </div>
            </div>
            {/* content */}

            <p className="md:text-[18px] text-center">
              Embrace the power of pervasive technology to transform your
              business inside out! Modern application development is the key to
              unlocking a new wave of innovation.
            </p>

            <span className="md:text-[18px] text-center">
              Join together with Affirmity Corp to transform beyond zero to
              infinite.
            </span>

            {/* grid */}

            <div className="w-full  flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 md:w-fit  gap-8 w-full">
                {data.map((item, index) => (
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
          query="Application Development Service"
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
      <div className="w-full h-full px-6    max-w-7xl md:px-10  min-[1280px]:px-4   flex gap-x-14 justify-start items-center ">
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
        className="flex w-[200px] gap-2 flex-col justify-center items-center  cursor-pointer p-2"
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
          } font-thin text-center w-full`}
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
      <div className="w-full h-full  max-w-7xl  flex flex-col pt-20 md:py-20  px-6  md:px-10  min-[1280px]:px-4      justify-center gap-16 ">
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
            title="Acumen"
            desc="Acumen is a visitor management system that simplifies and enhances visitor registration and tracking."
            img="/services/card1.webp"
            link="/solutions/acumen"
          />
        </div>
      </div>
    </div>
  );
};
