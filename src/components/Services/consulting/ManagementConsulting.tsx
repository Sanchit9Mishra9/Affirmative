import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link as Scroll } from "react-scroll";
import RequestForServices from "@/components/shared/RequestForServices";
import MobileServicesOffering from "../MobileServicesOffering";
import MeetLeadership from "../MeetLeadership";

const overvieData = [
  {
    img: "/services/overview/first-prize.webp",
    desc: `Assisting organisations in developing and refining their strategic plans.`,
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Analysing current business processes and identifying areas for improvement in efficiency and effectiveness.",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "Guiding companies through organisational changes, including restructuring, mergers, and acquisitions.",
  },
  {
    img: "/services/overview/verified.webp",
    desc: "Key performance indicators (KPIs) to measure and monitor the success of implemented strategies.",
  },
  {
    img: "/services/overview/first-prize.webp",
    desc: "Helping organisations leverage digital tools for improved efficiency and innovation.",
  },
  {
    img: "/services/overview/laptop.webp",
    desc: "Diving deeper, predicting smarter and empowering organisations with data insights.",
  },
];

const ServiceOfferingData = [
  {
    img: "/services/icons/discovery",
    title: "Supply Chain ",
  },
  {
    img: "/services/icons/discovery",
    title: "Strategy",
  },
  {
    img: "/services/icons/experiment",
    title: "Technology",
  },
];

const ServiceOfferingCardData = [
  {
    desc: "Assisting the upper management with innovation and change as they move towards a future driven by technology.",
    list: [
      "Supply Chain Advisory ",
      "Value Chain Transformation",
      "E-commerce Expedited Delivery",
    ],
  },
  {
    desc: "Craft your digital destiny: Navigate with data-driven insights for market dominance.",
    list: [
      "Digital Transformation ",
      "Market Entry Strategy",
      "Mergers and Acquisitions ",
      "Innovation",
      "Sustainability",
    ],
  },
  {
    desc: "Implement real-time solutions that enable agility and data-driven decision-making.",
    list: [
      "Data Analytics ",
      "AI Solutions",
      "Cybersecurity Solutions",
      "Enterprise Resource Planning",
      "Customer Relationship Management",
      "Digital Workplace Solutions",
    ],
  },
];

export default function ManagementConsulting() {
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
        <title>Affirmity Corp - Management Consulting</title>
        <meta
          name="description"
          content="Transforming Management Consulting with Groundbreaking AI Innovation. "
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
            alt="Management Consulting"
            className="absolute inset-0 w-full h-full object-cover object-center -z-10 brightness-75"
          />
          <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    ">
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
                    Management Consulting
                  </span>

                  <div className="bg-slate-200">
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
                  </div>
                </div>
              </div>

              {/* content */}

              <div className=" w-full flex flex-col gap-4  justify-center items-center  h-full   ">
                <div className="w-full flex gap-2  md:gap-6 justify-center items-center">
                  <span className="text-[1.2rem] md:text-4xl  leading-none  text-red-50 ">
                    Affirmity
                  </span>
                  <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-orange-700  ">
                    Management Consulting
                  </span>
                </div>
                <p className="  md:text-3xl font-bold w-full md:w-[80%] text-center text-orange-50">
                  Transforming Management Consulting with Groundbreaking AI
                  Innovation
                </p>
                <p className=" md:text-xl font-thin w-full  md:w-2/3 text-center text-slate-300">
                  Providing Businesses with Tailored AI-Driven Strategies for
                  Maximum Productivity and Expansion
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
          <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6  max-w-7xl  md:px-10  min-[1280px]:px-4    gap-8 ">
            {/* heading */}
            <div className="w-full flex justify-center  p-2">
              <div className="w-fit flex flex-col justify-center items-start">
                <span className="text-[1.2rem] md:text-[20px]  leading-none  text-red-50 ">
                  Affirmity
                </span>
                <span className="text-[1.2rem] md:text-4xl font-bold leading-none text-orange-700  ">
                  Management Consulting
                </span>
              </div>
            </div>
            {/* content */}

            <p className="md:text-[18px] text-center">
              We offer comprehensive management consulting services to guide you
              through every stage of your journey. Our team of experienced
              professionals with deep industry expertise and proven track
              records works closely with you.
            </p>

            <span className="md:text-[18px] text-center">
              Navigate Challenges and Unlock Growth with Tailored Consulting.
            </span>

            {/* grid */}

            <div className="w-full  flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 md:w-fit  gap-8 w-full">
                {overvieData.map((item, index) => (
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

        {/* Meet Our Leaders */}
        <MeetLeadership />

        {/* Request for Services */}
        <RequestForServices
          buttonColor="bg-orange-500"
          text="Services"
          query="Management Consulting"
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
        className="flex  gap-2 flex-col justify-center items-center  cursor-pointer p-2"
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
