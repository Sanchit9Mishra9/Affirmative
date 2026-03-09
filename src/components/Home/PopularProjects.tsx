import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function PopularProjects() {
  const [imageIndex, setImageIndex] = useState(0);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const imageSliderRef = useRef<Slider | null>(null);
  const textSliderRef = useRef<Slider | null>(null);
  const mobileImageSliderRef = useRef<Slider | null>(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const showNextImage = () => {
    imageSliderRef.current?.slickNext();
    textSliderRef.current?.slickNext();
  };
  const showPrevImage = () => {
    imageSliderRef.current?.slickPrev();
    textSliderRef.current?.slickPrev();
  };

  const handleTransition = (index: number) => {
    setImageIndex(index);
    imageSliderRef.current?.slickGoTo(index);
    textSliderRef.current?.slickGoTo(index);
  };
  const handleMobileTransition = (index: number) => {
    setMobileImageIndex(index);
    mobileImageSliderRef.current?.slickGoTo(index);
  };

  useEffect(() => {
    if (imageSliderRef.current && textSliderRef.current) {
      imageSliderRef.current.slickPlay();
      textSliderRef.current.slickPlay();
      mobileImageSliderRef.current?.slickPlay();
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full hidden  md:flex flex-col gap-4  pt-20 md:py-20 items-center px-6 max-w-7xl   md:px-10  min-[1280px]:px-4 ">
        <div className="w-full   flex flex-row  ">
          <div className="w-full md:w-[60%]  md:h-[500px]  ">
            <Slider
              ref={imageSliderRef}
              asNavFor={
                textSliderRef.current ? textSliderRef.current : undefined
              }
              {...sliderSettings}
              afterChange={(index) => setImageIndex(index)}
              swipe={false}
            >
              {projectList.map((item) => {
                return (
                  <div key={item.title} className="h-[500px]  ">
                    <img
                      src={item.image}
                      alt={`${item.title} image`}
                      className="w-full h-full   object-cover object-center  transition-all duration-700 ease-in-out  brightness-[.50]"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="w-full md:w-[40%]  ">
            <Slider
              ref={textSliderRef}
              asNavFor={
                imageSliderRef.current ? imageSliderRef.current : undefined
              }
              {...sliderSettings}
              swipe={false}
            >
              {projectList.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="min-w-full h-fit md:h-[500px]  w-full flex relative "
                  >
                    <div className="flex  min-[996px]:w-[80%] flex-col  gap-4 md:gap-8  justify-center md:absolute bottom-0 right-0   md:pl-6 min-[996px]:pl-0">
                      <span className="text-[24px] md:text-[32px] font-semibold md:leading-[2.4rem]">
                        {item.title}
                      </span>
                      <p className="w-full">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="w-full flex  justify-center md:justify-between items-center ">
          <div className="md:flex gap-4 justify-center items-center  w-fit hidden   ">
            <button onClick={showPrevImage} className=" cursor-pointer">
              <ArrowLeft className="w-6 h-6 hover:border hover:border-slate-200 " />
            </button>

            <button onClick={showNextImage} className="cursor-pointer">
              <ArrowRight className="w-6 h-6 hover:border hover:border-slate-200" />
            </button>
          </div>

          <div className="flex gap-2 justify-center items-center  w-fit">
            {projectList.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleTransition(index)}
                  className={`w-3 h-3  ${index === imageIndex ? "bg-slate-200" : "bg-slate-500 "
                    }`}
                ></button>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="w-full px-6  md:hidden">
        <Slider
          ref={mobileImageSliderRef}
          {...sliderSettings}
          afterChange={(index) => setMobileImageIndex(index)}
        >
          {projectList.map((item) => {
            return (
              <div key={item.title} className=" w-full flex  flex-col ">
                <div className="w-full h-[40vh] relative ">
                  <img
                    src={item.image}
                    alt={`${item.title} image`}
                    className="w-full h-full   object-cover object-center  transition-all duration-700 ease-in-out  brightness-[.50]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2 p-3 ">
                  <span className="text-xl font-semibold ">{item.title}</span>
                  <p className="w-full">{item.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="flex gap-2 justify-center items-center  w-full ">
          {projectList.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => handleMobileTransition(index)}
                className={`w-3 h-3  ${index === mobileImageIndex ? "bg-slate-200" : "bg-slate-500 "
                  }`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const projectList = [
  {
    title: "Visionary Business Approach",
    description:
      "Anticipate threats. Engineer certainty. Redefine warfare",
    image: "/homeabout/sip.webp",
    link: "/solutions/gss",
  },
  {
    title: "Global Strategic Ecosystem",
    description:
      "One standard of security. Every terrain. Every frontier.",
    image: "/homeabout/R&d.webp",
    link: "/solutions/pss",
  },
  {
    title: "Culture of Relentless Ingenuity",
    description:
      "Break boundaries. Build revolutions. Repeat.",
    image: "/homeabout/fba.webp",
    link: "/solutions/cms",
  },
  {
    title: "Uncompromising Core Values",
    description:
      "Precision. Integrity. Vigilance. Always.",
    image: "/homeabout/re.webp",
    link: "/solutions/acumen",
  },
  {
    title: "Borderless Impact",
    description:
      "Secure nations. Empower progress. Global stability starts here.",
    image: "/homeabout/hce.webp",
    link: "/solutions/foreguard",
  },
  {
    title: "Architecting Tomorrow’s Legacy",
    description:
      "Today’s innovation. Tomorrow’s shield. Forever ahead.",
    image: "/homeabout/gf.webp",
    link: "/solutions/foreguard",
  },
];
