import { ChevronRight } from "lucide-react";

export default function IndustriesBanner({
  title,
  heading,
}: {
  title: string;
  heading: string;
}) {
  return (
    <div className="  w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  z-10">
      <div className="w-full md:w-1/2 flex flex-col items-start  justify-start h-full">
        {/* navigation */}
        <div className="flex w-fit gap-3 md:mt-8">
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm">Industries</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm">{title}</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-center items-start  h-full ">
          {/* <span className="font-thin">PRESS RELEASE</span> */}
          <p className="text-[24px]  md:text-[48px] font-thin text-slate-200 md:leading-[4rem]">
            {heading}
          </p>

          {/* <button
                onClick={() => setReadMore(!readMore)}
                className="outline md:py-3 md:px-6 p-2 hover:outline-none transition-all duration-300  "
              >
                Read More
              </button> */}
        </div>
      </div>
    </div>
  );
}
