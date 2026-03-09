import { ChevronLeft, Linkedin } from "lucide-react";
import { BsSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Insights() {
  return (
    <div className="w-full min-h-screen  flex justify-center ">
      <div className="w-full h-full  flex flex-col md:flex-row mt-20 py-10  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   gap-14   ">
        <div className="w-full md:w-[70%] flex flex-col gap-12 ">
          <Link to="/" className="flex w-fit gap-6 justify-center items-center">
            <ChevronLeft className="w-4 h-4 " />
            <span>Home</span>
          </Link>

          {/* type */}

          <span className=" md:mt-10">RESEARCH REPORT</span>

          {/* title */}

          <span className="text-[6vw] md:text-[4vw] font-bold leading-none">
            Risk is everywhere
          </span>

          {/* sub heading */}
          <span className="text-xl md:text-2xl md:leading-none">
            Hyper-disruption demands constant reinvention
          </span>

          <div className="flex gap-10  max-md:justify-between max-md:font-thin">
            <span>5-MINUTE READ</span>
            <span>FEBRUARY 2, 2024</span>
          </div>
          {/* img */}
          <img
            src="/insights/bg1.webp"
            alt=" insights research report image"
            className="md:w-[60vw] md:h-[60vh]"
          />

          {/* text */}

          <span className="text-[6vw] md:text-[4vw] font-bold leading-none mt-20">
            In breif
          </span>

          <div className=" w-full flex gap-4 md:gap-10 flex-col">
            <div className="w-full flex gap-6 justify-start items-center">
              <BsSquareFill className="w-4 h-4 text-orange-500" />
              <span className="md:text-xl ">
                Our Accenture Risk Study: 2024 Edition finds that risk is
                everywhere, and individual risks are now impacting each other,
                creating a web of threats.
              </span>
            </div>
            <div className="w-full flex gap-6 justify-start items-center">
              <BsSquareFill className="w-4 h-4 text-orange-500" />
              <span className="md:text-xl ">
                Our Accenture Risk Study: 2024 Edition finds that risk is
                everywhere, and individual risks are now impacting each other,
                creating a web of threats.
              </span>
            </div>
            <div className="w-full flex gap-6 justify-start items-center">
              <BsSquareFill className="w-4 h-4 text-orange-500" />
              <span className="md:text-xl ">
                Our Accenture Risk Study: 2024 Edition finds that risk is
                everywhere, and individual risks are now impacting each other,
                creating a web of threats.
              </span>
            </div>
          </div>

          {/*  */}
          <span className="text-[6vw] md:text-[4vw] font-bold leading-none mt-20">
            The risk landscape is morphing, but there is a path forward
          </span>

          <span className="text-[1rem] md:text-[2rem] md:leading-none">
            Just when it feels like we’ve reached peak risk, there’s a new
            threat
          </span>

          <p className="text-xl">
            Today, mega shocks keep emerging and disruption and volatility are
            constant. Disruptive weather events, geopolitical upheaval and
            economic uncertainty are the new normal. Risk professionals are
            under growing pressure and scrutiny, including the most experienced
            practitioners.
          </p>

          <p className="text-xl">
            This is well reflected in our Accenture Risk Study: 2024 Edition
            where over eight in 10 risk professionals say complex,
            interconnected risks are emerging more quickly. Among the top rising
            risks: operational risks (30%); financial risks (30%); and
            disruptive technology risks (29%), up nine percentage points since
            2021. Also growing in importance since 2021 is regulatory and
            compliance risk at 27%, up eight percentage points.
          </p>
        </div>
        {/* right side */}
        <div className="w-full md:w-[30%] flex flex-col gap-4 md:gap-10 items-end">
          <div className="w-full md:w-1/2 ">
            <span className="text-gray-500 font-bold">WRITTEN BY</span>
          </div>

          <div className="w-full md:w-1/2 flex flex-col ">
            <span className=" font-bold">Samantha Sen</span>
            <span className="text-gray-500 font-bold">Senior Manager</span>
            <Linkedin className="w-4 h-4 text-gray-500" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col ">
            <span className=" font-bold">Samantha Sen</span>
            <span className="text-gray-500 font-bold">Senior Manager</span>
            <Linkedin className="w-4 h-4 text-gray-500" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col ">
            <span className=" font-bold">Samantha Sen</span>
            <span className="text-gray-500 font-bold">Senior Manager</span>
            <Linkedin className="w-4 h-4 text-gray-500" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col ">
            <span className=" font-bold">Samantha Sen</span>
            <span className="text-gray-500 font-bold">Senior Manager</span>
            <Linkedin className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
