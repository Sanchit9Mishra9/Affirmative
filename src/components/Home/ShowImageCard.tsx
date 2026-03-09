import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);
export default function ImageCardLeft() {
  const ref = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = ref.current;

    if (img) {
      gsap.to(img, {
        width: "60%",
        height: "450px",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top bottom",
          scrub: true,
        },
      });
      tl.from(card, {
        opacity: 0,
      }).to(card, {
        opacity: 1,
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col  items-center ">
      <div className="w-full  justify-center flex">
        <div className=" hidden relative w-full h-full md:flex pt-20 md:py-20  px-6 max-w-7xl md:px-10 min-[1280px]:px-4  justify-start overflow-hidden  ">
          <img
            ref={ref}
            src="/homeabout/approach.webp"
            alt=" Our Approach image"
            className="w-screen h-screen origin-left z-50 brightness-[.8]"
          />
          <div className="w-[40%]   h-full flex  pt-20 md:py-20  absolute right-0 top-0  justify-end items-end ">
            <div
              ref={cardRef}
              className="w-[75%]  flex flex-col gap-8  h-fit origin-top-left  "
            >
              <span className="text-4xl leading-none font-semibold text-002E62">
                Our Approach
              </span>
              <p className="font-thin text-002E62">
                QuadCorp is dedicated to empowering businesses and
                organisations across diverse industries to unlock their full
                potential through the cutting-edge power of AI. We strive to
                develop and implement innovative solutions that address real-
                world challenges, drive tangible business value, and shape a
                brighter future for all.
              </p>
            </div>
          </div>
        </div>
        {/* mobile view */}
        <div className=" md:hidden  w-full h-full flex py-10  px-6 max-w-7xl md:px-10 min-[1280px]:px-4  justify-start   ">
          <div className="w-full flex flex-col gap-6 ">
            <div className="w-full h-[30vh] relative">
              <img
                src="/homeabout/our-culture.webp"
                alt=" Our Approach image mobile"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full  flex flex-col gap-4  h-fit origin-top-left  ">
              <span className="text-4xl leading-none font-semibold text-slate-300">
                Our Approach
              </span>
              <p className="font-thin text-slate-300">
                Affirmity Corp is dedicated to empowering businesses and
                organisations across diverse industries to unlock their full
                potential through the cutting-edge power of AI. We strive to
                develop and implement innovative solutions that address real-
                world challenges, drive tangible business value, and shape a
                brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
